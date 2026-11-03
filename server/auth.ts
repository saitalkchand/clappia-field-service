import { createHmac, randomBytes, scryptSync, timingSafeEqual } from 'node:crypto'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import type { IncomingMessage, ServerResponse } from 'node:http'
import { dirname, resolve } from 'node:path'
import { SIGNUP_ROLE, USERS_SHEET, userFields, type Session } from '../src/lib/auth.ts'
import { asObject, ensureAnAdminRemains, isActive, sessionFor, toPublic, validatePassword, validateUserInput } from '../src/lib/rules.ts'
import {
  DB_PATH,
  HttpError,
  loadWorkbook,
  now,
  readBody,
  rowsFromSheet,
  saveWorkbook,
  send,
  serialize,
  setSheet,
  sheetFromRows,
  type Row,
  type Workbook,
} from './workbook.ts'

// Sessions are stateless HMAC-signed cookies (username + expiry). The user row is
// re-read on every request, so deactivating a user or changing a role applies at once.

const COOKIE = 'cfs_session'
const SESSION_HOURS = 12
const MAX_FAILURES = 5
const MAX_FAILURES_PER_IP = 20 // offices often share one address
const LOCK_MINUTES = 15
const SECRET_PATH = resolve(dirname(DB_PATH), '.session_secret')

let secretCache: Buffer | null = null
function secret() {
  if (secretCache) return secretCache
  if (process.env.SESSION_SECRET) return (secretCache = Buffer.from(process.env.SESSION_SECRET))
  if (!existsSync(SECRET_PATH)) {
    mkdirSync(dirname(SECRET_PATH), { recursive: true })
    writeFileSync(SECRET_PATH, randomBytes(48).toString('hex'), { mode: 0o600 })
  }
  return (secretCache = Buffer.from(readFileSync(SECRET_PATH, 'utf8').trim()))
}

export function hashPassword(password: string) {
  const salt = randomBytes(16)
  return `scrypt$${salt.toString('hex')}$${scryptSync(password, salt, 64).toString('hex')}`
}

function verifyPassword(password: string, stored: string) {
  const [scheme, saltHex, hashHex] = stored.split('$')
  if (scheme !== 'scrypt' || !saltHex || !hashHex) return false
  const expected = Buffer.from(hashHex, 'hex')
  const actual = scryptSync(password, Buffer.from(saltHex, 'hex'), expected.length)
  return timingSafeEqual(actual, expected)
}

// Spend the same scrypt time for unknown usernames so timing doesn't reveal which exist.
const DUMMY_HASH = hashPassword(randomBytes(12).toString('hex'))

const sign = (payload: string) => createHmac('sha256', secret()).update(payload).digest('base64url')

function makeToken(username: string) {
  const payload = `${Buffer.from(username).toString('base64url')}.${Date.now() + SESSION_HOURS * 3_600_000}`
  return `${payload}.${sign(payload)}`
}

function readToken(token: string) {
  const [user, exp, sig] = token.split('.')
  if (!user || !exp || !sig) return null
  const expected = Buffer.from(sign(`${user}.${exp}`))
  const given = Buffer.from(sig)
  if (expected.length !== given.length || !timingSafeEqual(expected, given)) return null
  if (Number(exp) < Date.now()) return null
  return Buffer.from(user, 'base64url').toString('utf8')
}

function getCookie(req: IncomingMessage, name: string) {
  for (const part of (req.headers.cookie ?? '').split(';')) {
    const [k, ...v] = part.trim().split('=')
    if (k === name) return decodeURIComponent(v.join('='))
  }
  return ''
}

function setSessionCookie(req: IncomingMessage, res: ServerResponse, token: string, maxAge: number) {
  const secure = req.headers['x-forwarded-proto'] === 'https' || ('encrypted' in req.socket && req.socket.encrypted)
  res.setHeader('Set-Cookie', `${COOKIE}=${token}; Path=/; HttpOnly; SameSite=Strict; Max-Age=${maxAge}${secure ? '; Secure' : ''}`)
}

const readUsers = (wb: Workbook) => rowsFromSheet(wb, USERS_SHEET, userFields)
const writeUsers = (wb: Workbook, rows: Row[]) => setSheet(wb, USERS_SHEET, sheetFromRows(userFields, rows))

export function requireSession(req: IncomingMessage): Session {
  const username = readToken(getCookie(req, COOKIE))
  const user = username ? readUsers(loadWorkbook()).find((u) => u.username === username) : undefined
  if (!user || !isActive(user)) throw new HttpError(401, 'Please sign in')
  return sessionFor(user)
}

// Failed-login throttle, keyed by username and by client address
const failures = new Map<string, { count: number; until: number }>()
const failKeys = (req: IncomingMessage, username: string) => [`u:${username}`, `ip:${req.socket.remoteAddress ?? ''}`]

function checkLock(keys: string[]) {
  for (const key of keys) {
    const f = failures.get(key)
    if (f && f.until > Date.now()) throw new HttpError(429, `Too many failed sign-ins. Try again in ${Math.ceil((f.until - Date.now()) / 60_000)} min.`)
  }
}

function recordFailure(keys: string[]) {
  for (const key of keys) {
    const f = failures.get(key) ?? { count: 0, until: 0 }
    f.count += 1
    if (f.count >= (key.startsWith('ip:') ? MAX_FAILURES_PER_IP : MAX_FAILURES)) {
      f.until = Date.now() + LOCK_MINUTES * 60_000
      f.count = 0
    }
    failures.set(key, f)
  }
}

// Handles /api/auth/* and /api/users/*. Returns false when the path is not an auth route.
export async function authRoutes(req: IncomingMessage, res: ServerResponse, parts: string[], method: string) {
  const [area, action] = parts

  if (area === 'auth' && action === 'me' && method === 'GET') {
    if (readUsers(loadWorkbook()).length === 0) {
      send(res, 401, { error: 'No accounts yet', setupRequired: true })
      return true
    }
    send(res, 200, requireSession(req))
    return true
  }

  if (area === 'auth' && action === 'setup' && method === 'POST') {
    if (readUsers(loadWorkbook()).length > 0) throw new HttpError(409, 'Setup is already complete. Please sign in.')
    const body = asObject(await readBody(req))
    const input = validateUserInput({ ...body, role: 'Admin' }, true)
    const password = validatePassword(body.password)
    const user = await serialize(() => {
      const wb = loadWorkbook()
      const users = readUsers(wb)
      if (users.length > 0) throw new HttpError(409, 'Setup is already complete. Please sign in.')
      const row: Row = { ...input, active: 'Yes', passwordHash: hashPassword(password), lastLogin: now(), createdAt: now(), updatedAt: now() }
      writeUsers(wb, [row])
      saveWorkbook(wb)
      return row
    })
    setSessionCookie(req, res, makeToken(user.username), SESSION_HOURS * 3600)
    send(res, 201, sessionFor(user))
    return true
  }

  if (area === 'auth' && action === 'signup' && method === 'POST') {
    const body = asObject(await readBody(req))
    const input = validateUserInput({ ...body, role: SIGNUP_ROLE }, true)
    const password = validatePassword(body.password)
    const user = await serialize(() => {
      const wb = loadWorkbook()
      const users = readUsers(wb)
      if (users.length === 0) throw new HttpError(409, 'Create the first Admin account first.')
      if (users.some((u) => u.username === input.username)) throw new HttpError(409, `Username ${input.username} is taken`)
      const row: Row = { ...input, active: 'Yes', passwordHash: hashPassword(password), lastLogin: now(), createdAt: now(), updatedAt: now() }
      writeUsers(wb, [...users, row])
      saveWorkbook(wb)
      return row
    })
    setSessionCookie(req, res, makeToken(user.username), SESSION_HOURS * 3600)
    send(res, 201, sessionFor(user))
    return true
  }

  if (area === 'auth' && action === 'login' && method === 'POST') {
    const body = asObject(await readBody(req))
    const username = String(body.username ?? '').trim().toLowerCase()
    const password = String(body.password ?? '')
    const keys = failKeys(req, username)
    checkLock(keys)
    const user = readUsers(loadWorkbook()).find((u) => u.username === username)
    const ok = verifyPassword(password, user?.passwordHash ?? DUMMY_HASH) && Boolean(user)
    if (!ok || !user) {
      recordFailure(keys)
      throw new HttpError(401, 'Incorrect username or password')
    }
    if (!isActive(user)) throw new HttpError(403, 'This account is deactivated. Contact an Admin.')
    keys.forEach((k) => failures.delete(k))
    await serialize(() => {
      const wb = loadWorkbook()
      const users = readUsers(wb)
      const row = users.find((u) => u.username === username)
      if (row) row.lastLogin = now()
      writeUsers(wb, users)
      saveWorkbook(wb)
    })
    setSessionCookie(req, res, makeToken(user.username), SESSION_HOURS * 3600)
    send(res, 200, sessionFor(user))
    return true
  }

  if (area === 'auth' && action === 'logout' && method === 'POST') {
    setSessionCookie(req, res, '', 0)
    send(res, 200, { ok: true })
    return true
  }

  if (area === 'auth' && action === 'password' && method === 'POST') {
    const session = requireSession(req)
    const body = asObject(await readBody(req))
    const next = validatePassword(body.newPassword)
    await serialize(() => {
      const wb = loadWorkbook()
      const users = readUsers(wb)
      const row = users.find((u) => u.username === session.user.username)
      if (!row || !verifyPassword(String(body.currentPassword ?? ''), row.passwordHash)) throw new HttpError(400, 'Current password is incorrect')
      row.passwordHash = hashPassword(next)
      row.updatedAt = now()
      writeUsers(wb, users)
      saveWorkbook(wb)
    })
    send(res, 200, { ok: true })
    return true
  }

  if (area === 'users') {
    const session = requireSession(req)
    if (!session.can['users.manage']) throw new HttpError(403, 'Only Admins can manage users')
    const target = action

    if (method === 'GET' && !target) {
      send(res, 200, readUsers(loadWorkbook()).map(toPublic))
      return true
    }

    const body = asObject(await readBody(req))
    const result = await serialize(() => {
      const wb = loadWorkbook()
      const users = readUsers(wb)

      if (method === 'POST' && !target) {
        const input = validateUserInput(body, true)
        if (users.some((u) => u.username === input.username)) throw new HttpError(409, `Username ${input.username} is taken`)
        const row: Row = { ...input, active: 'Yes', passwordHash: hashPassword(validatePassword(body.password)), lastLogin: '', createdAt: now(), updatedAt: now() }
        users.push(row)
        writeUsers(wb, users)
        saveWorkbook(wb)
        return { status: 201, data: toPublic(row) }
      }

      if (method === 'PUT' && target) {
        const row = users.find((u) => u.username === target)
        if (!row) throw new HttpError(404, `User ${target} not found`)
        const input = validateUserInput({ ...row, ...body }, false)
        row.name = input.name
        row.role = input.role
        if (body.active !== undefined) row.active = body.active === 'No' || body.active === false ? 'No' : 'Yes'
        if (body.password) row.passwordHash = hashPassword(validatePassword(body.password))
        row.updatedAt = now()
        ensureAnAdminRemains(users)
        writeUsers(wb, users)
        saveWorkbook(wb)
        return { status: 200, data: toPublic(row) }
      }

      throw new HttpError(405, 'Method not allowed')
    })
    send(res, result.status, result.data)
    return true
  }

  return false
}
