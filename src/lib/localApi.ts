import { SIGNUP_ROLE, type Session } from './auth.ts'
import { mastersFromSource, type SourceJson } from './masters.ts'
import {
  HttpError,
  asObject,
  ensureAnAdminRemains,
  isActive,
  now,
  requirePermission,
  sessionFor,
  toPublic,
  today,
  validatePassword,
  validateUserInput,
  writeRecord,
  type Row,
} from './rules.ts'
import { masterSheets, tables, type Masters, type TableName } from './schema.ts'

// Browser-only stand-in for the Excel API, used when the app is built with
// VITE_STATIC_DEMO=true (e.g. GitHub Pages, where there is no server). It serves
// the same routes with the same rules, but data lives in this browser's
// localStorage, so every visitor has their own copy. Not a security boundary.

type Db = { masters: Masters; users: Row[] } & Record<TableName, Row[]>

const DB_KEY = 'cfs_demo_db'
const SESSION_KEY = 'cfs_demo_session'
const SESSION_HOURS = 12

let memory: Db | null = null

async function seedMasters() {
  const { default: raw } = await import('../../data/seed/field_service_master_data.json?raw')
  return mastersFromSource(JSON.parse(raw) as SourceJson)
}

async function loadDb(): Promise<Db> {
  if (memory) return memory
  try {
    const saved = localStorage.getItem(DB_KEY)
    if (saved) return (memory = JSON.parse(saved) as Db)
  } catch { /* storage unavailable: start fresh in memory */ }
  memory = { masters: await seedMasters(), users: [], snags: [], usage: [], sites: [] }
  saveDb(memory)
  return memory
}

function saveDb(db: Db) {
  memory = db
  try { localStorage.setItem(DB_KEY, JSON.stringify(db)) } catch { /* keep in memory only */ }
}

// ---- Passwords (PBKDF2 via WebCrypto) ----

const hex = (bytes: Uint8Array) => [...bytes].map((b) => b.toString(16).padStart(2, '0')).join('')

async function derive(password: string, salt: Uint8Array<ArrayBuffer>) {
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(password), 'PBKDF2', false, ['deriveBits'])
  return hex(new Uint8Array(await crypto.subtle.deriveBits({ name: 'PBKDF2', salt, iterations: 100_000, hash: 'SHA-256' }, key, 256)))
}

async function hashPassword(password: string) {
  const salt = crypto.getRandomValues(new Uint8Array(16))
  return `pbkdf2$${hex(salt)}$${await derive(password, salt)}`
}

async function verifyPassword(password: string, stored: string) {
  const [scheme, saltHex, hash] = stored.split('$')
  if (scheme !== 'pbkdf2' || !saltHex || !hash) return false
  return (await derive(password, Uint8Array.from(saltHex.match(/../g) ?? [], (h) => parseInt(h, 16)))) === hash
}

// ---- Session ----

function startSession(username: string) {
  try { localStorage.setItem(SESSION_KEY, JSON.stringify({ username, exp: Date.now() + SESSION_HOURS * 3_600_000 })) } catch { /* ignore */ }
}

function endSession() {
  try { localStorage.removeItem(SESSION_KEY) } catch { /* ignore */ }
}

function requireSession(db: Db): Session {
  let username = ''
  try {
    const s = JSON.parse(localStorage.getItem(SESSION_KEY) ?? 'null') as { username: string; exp: number } | null
    if (s && s.exp > Date.now()) username = s.username
  } catch { /* treat as signed out */ }
  const user = db.users.find((u) => u.username === username)
  if (!user || !isActive(user)) throw new HttpError(401, 'Please sign in')
  return sessionFor(user)
}

// ---- Routes (mirrors server/excelApi.ts and server/auth.ts) ----

type Result = { status: number; data: unknown }
const ok = (data: unknown, status = 200): Result => ({ status, data })

async function route(parts: string[], method: string, body: Record<string, unknown>): Promise<Result> {
  const db = await loadDb()
  const [area, action] = parts

  if (area === 'auth' && action === 'me' && method === 'GET') {
    if (db.users.length === 0) return ok({ error: 'No accounts yet', setupRequired: true }, 401)
    return ok(requireSession(db))
  }

  if (area === 'auth' && action === 'setup' && method === 'POST') {
    if (db.users.length > 0) throw new HttpError(409, 'Setup is already complete. Please sign in.')
    const input = validateUserInput({ ...body, role: 'Admin' }, true)
    const row: Row = { ...input, active: 'Yes', passwordHash: await hashPassword(validatePassword(body.password)), lastLogin: now(), createdAt: now(), updatedAt: now() }
    saveDb({ ...db, users: [row] })
    startSession(row.username)
    return ok(sessionFor(row), 201)
  }

  if (area === 'auth' && action === 'signup' && method === 'POST') {
    if (db.users.length === 0) throw new HttpError(409, 'Create the first Admin account first.')
    const input = validateUserInput({ ...body, role: SIGNUP_ROLE }, true)
    if (db.users.some((u) => u.username === input.username)) throw new HttpError(409, `Username ${input.username} is taken`)
    const row: Row = { ...input, active: 'Yes', passwordHash: await hashPassword(validatePassword(body.password)), lastLogin: now(), createdAt: now(), updatedAt: now() }
    saveDb({ ...db, users: [...db.users, row] })
    startSession(row.username)
    return ok(sessionFor(row), 201)
  }

  if (area === 'auth' && action === 'login' && method === 'POST') {
    const username = String(body.username ?? '').trim().toLowerCase()
    const user = db.users.find((u) => u.username === username)
    if (!user || !(await verifyPassword(String(body.password ?? ''), user.passwordHash))) throw new HttpError(401, 'Incorrect username or password')
    if (!isActive(user)) throw new HttpError(403, 'This account is deactivated. Contact an Admin.')
    user.lastLogin = now()
    saveDb(db)
    startSession(user.username)
    return ok(sessionFor(user))
  }

  if (area === 'auth' && action === 'logout' && method === 'POST') {
    endSession()
    return ok({ ok: true })
  }

  if (area === 'auth' && action === 'password' && method === 'POST') {
    const session = requireSession(db)
    const next = validatePassword(body.newPassword)
    const row = db.users.find((u) => u.username === session.user.username)
    if (!row || !(await verifyPassword(String(body.currentPassword ?? ''), row.passwordHash))) throw new HttpError(400, 'Current password is incorrect')
    row.passwordHash = await hashPassword(next)
    row.updatedAt = now()
    saveDb(db)
    return ok({ ok: true })
  }

  const session = requireSession(db)

  if (area === 'users') {
    if (!session.can['users.manage']) throw new HttpError(403, 'Only Admins can manage users')
    if (method === 'GET' && !action) return ok(db.users.map(toPublic))
    if (method === 'POST' && !action) {
      const input = validateUserInput(body, true)
      if (db.users.some((u) => u.username === input.username)) throw new HttpError(409, `Username ${input.username} is taken`)
      const row: Row = { ...input, active: 'Yes', passwordHash: await hashPassword(validatePassword(body.password)), lastLogin: '', createdAt: now(), updatedAt: now() }
      saveDb({ ...db, users: [...db.users, row] })
      return ok(toPublic(row), 201)
    }
    if (method === 'PUT' && action) {
      const users = db.users.map((u) => ({ ...u }))
      const row = users.find((u) => u.username === action)
      if (!row) throw new HttpError(404, `User ${action} not found`)
      const input = validateUserInput({ ...row, ...body }, false)
      row.name = input.name
      row.role = input.role
      if (body.active !== undefined) row.active = body.active === 'No' || body.active === false ? 'No' : 'Yes'
      if (body.password) row.passwordHash = await hashPassword(validatePassword(body.password))
      row.updatedAt = now()
      ensureAnAdminRemains(users)
      saveDb({ ...db, users })
      return ok(toPublic(row))
    }
    throw new HttpError(405, 'Method not allowed')
  }

  if (area === 'masters' && method === 'GET') return ok(db.masters)

  if (area === 'admin' && action === 'reseed-masters' && method === 'POST') {
    requirePermission(session.can, 'masters.reseed')
    const masters = await seedMasters()
    saveDb({ ...db, masters })
    return ok(masters)
  }

  if (area === 'records' && action && action in tables) {
    const table = action as TableName
    const id = parts[2]
    if (method === 'GET' && !id) return ok(db[table])
    const verb = method === 'POST' ? 'create' : method === 'PUT' ? 'edit' : method === 'DELETE' ? 'delete' : ''
    if (!verb) throw new HttpError(405, 'Method not allowed')
    requirePermission(session.can, `${table}.${verb}`)
    const rows = db[table].map((r) => ({ ...r }))
    const result = writeRecord(table, method, id, body, rows, db.masters, session)
    saveDb({ ...db, [table]: rows })
    return result
  }

  throw new HttpError(404, 'Not found')
}

// Same contract as fetch('/api/...'): resolves with the status and JSON body, never throws.
export async function localRequest(path: string, init?: RequestInit): Promise<Result> {
  try {
    const parts = path.split('?')[0].split('/').filter(Boolean).map(decodeURIComponent)
    const body = typeof init?.body === 'string' ? asObject(JSON.parse(init.body)) : {}
    return await route(parts, init?.method ?? 'GET', body)
  } catch (error) {
    return { status: error instanceof HttpError ? error.status : 500, data: { error: error instanceof Error ? error.message : 'Unexpected error' } }
  }
}

// Builds the same workbook the server exports (minus Users) and downloads it.
export async function downloadWorkbook() {
  const db = await loadDb()
  requireSession(db)
  const XLSX = await import('xlsx')
  const wb = XLSX.utils.book_new()
  const append = (name: string, fields: readonly { key: string; header: string; numeric?: boolean }[], rows: Row[]) =>
    XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet([
      fields.map((f) => f.header),
      ...rows.map((r) => fields.map((f) => (f.numeric && r[f.key] !== '' && Number.isFinite(Number(r[f.key])) ? Number(r[f.key]) : r[f.key] ?? ''))),
    ]), name)
  for (const t of Object.keys(tables) as TableName[]) append(tables[t].sheet, tables[t].fields, db[t])
  for (const [key, def] of Object.entries(masterSheets)) append(def.sheet, def.fields, db.masters[key as keyof Masters] as Row[])
  XLSX.writeFile(wb, `clappia_field_service_${today()}.xlsx`)
}
