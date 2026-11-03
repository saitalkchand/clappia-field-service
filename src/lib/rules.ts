import { PASSWORD_MIN, ROLES, permissionsFor, type Permission, type PublicUser, type Role, type Session } from './auth.ts'
import { LOOKUP, lookupValues, severityFor, tables, type Masters, type TableName } from './schema.ts'

// Validation and business rules shared by the Excel API (server/) and the
// browser-only demo (localApi.ts), so both behave the same.

export type Row = Record<string, string>

export class HttpError extends Error {
  status: number
  constructor(status: number, message: string) {
    super(message)
    this.status = status
  }
}

// Local time, so dates in the sheet match the team's clock.
const localIso = () => {
  const d = new Date()
  return new Date(d.getTime() - d.getTimezoneOffset() * 60_000).toISOString()
}
export const today = () => localIso().slice(0, 10)
export const now = () => localIso().replace('T', ' ').slice(0, 19)

// ---- Records ----

function requireFields(row: Row, keys: string[], labels: Record<string, string>) {
  const missing = keys.filter((k) => !row[k])
  if (missing.length) throw new HttpError(400, `Missing required: ${missing.map((k) => labels[k] ?? k).join(', ')}`)
}

function requireOneOf(value: string, allowed: string[], label: string) {
  if (value && !allowed.some((a) => a.toUpperCase() === value.toUpperCase())) {
    throw new HttpError(400, `${label} "${value}" is not in the master list`)
  }
}

// Business rules applied before a row is written.
function prepare(table: TableName, row: Row, masters: Masters, existing: Row | undefined, rows: Row[]): Row {
  const labels = Object.fromEntries(tables[table].fields.map((f) => [f.key, f.header]))
  const regions = masters.regions.map((r) => r.code)
  const classes = masters.siteClasses.map((c) => c.code)
  const siteTypes = masters.siteTypes.map((t) => t.code)

  if (table === 'sites') {
    row.siteId = row.siteId.toUpperCase()
    requireFields(row, ['siteId', 'region'], labels)
    requireOneOf(row.region, regions, 'Region')
    requireOneOf(row.siteClass, classes, 'Site Class')
    requireOneOf(row.siteType, siteTypes, 'Site Type')
    if (!existing && rows.some((r) => r.siteId === row.siteId)) throw new HttpError(409, `Site ${row.siteId} already exists`)
  }

  if (table === 'snags') {
    row.siteId = row.siteId.toUpperCase()
    requireFields(row, ['region', 'siteId', 'classification', 'snag'], labels)
    requireOneOf(row.region, regions, 'Region')
    requireOneOf(row.siteClass, classes, 'Site Class')
    requireOneOf(row.classification, masters.categories.map((c) => c.code), 'Snag Classification')
    requireOneOf(row.status, lookupValues(masters, LOOKUP.status), 'Snag Status')
    requireOneOf(row.actionOwner, lookupValues(masters, LOOKUP.actionOwner), 'Action Owner')
    if (row.classification.toUpperCase() === 'NO SNAG') {
      row.severity = 'NA'
      row.status = 'NA'
    }
    if (!row.severity) row.severity = severityFor(masters, row.siteClass, row.classification, row.snag)
    requireOneOf(row.severity, lookupValues(masters, LOOKUP.severity), 'Snag Severity')
    if (!row.status) row.status = 'OPEN'
    if (row.status === 'CLOSED' && !row.closingDate) row.closingDate = today()
    if (row.status === 'OPEN') {
      row.closingDate = ''
      row.closedBy = ''
    }
    if (!row.snagAge) row.snagAge = 'New'
    if (!row.referenceNo) row.referenceNo = `SNG-${row.region}-${row.sn.padStart(5, '0')}`
  }

  if (table === 'usage') {
    requireFields(row, ['date', 'siteId', 'item', 'qty'], labels)
    row.siteId = row.siteId.toUpperCase()
    requireOneOf(row.region, regions, 'Region')
    requireOneOf(row.item, masters.consumables.map((c) => c.item), 'Item Description')
    const qty = Number(row.qty)
    if (!Number.isFinite(qty) || qty <= 0) throw new HttpError(400, 'QTY must be a positive number')
    const rate = row.unitRate === '' ? NaN : Number(row.unitRate)
    if (row.unitRate !== '' && (!Number.isFinite(rate) || rate < 0)) throw new HttpError(400, 'Unit rate must be zero or more')
    row.amount = Number.isFinite(rate) ? (qty * rate).toFixed(2) : ''
  }

  return row
}

function nextId(table: TableName, rows: Row[]) {
  if (table === 'snags') return String(rows.reduce((max, r) => Math.max(max, Number(r.sn) || 0), 0) + 1)
  if (table === 'usage') {
    const n = rows.reduce((max, r) => Math.max(max, Number(r.entryId.replace(/\D/g, '')) || 0), 0) + 1
    return `CU-${String(n).padStart(6, '0')}`
  }
  return ''
}

function clean(table: TableName, body: unknown): Row {
  if (!body || typeof body !== 'object') throw new HttpError(400, 'Expected a JSON object')
  const src = body as Record<string, unknown>
  return Object.fromEntries(
    tables[table].fields.map((f) => [f.key, src[f.key] == null ? '' : String(src[f.key]).trim().slice(0, 2000)]),
  )
}

export function requirePermission(can: Record<Permission, boolean>, permission: Permission) {
  if (!can[permission]) throw new HttpError(403, "Your role doesn't allow this action")
}

// Applies a create (POST), edit (PUT) or delete to `rows` in place. The caller saves them.
export function writeRecord(table: TableName, method: string, id: string | undefined, body: unknown, rows: Row[], masters: Masters, { user, can }: Session) {
  const { idKey } = tables[table]
  const index = id ? rows.findIndex((r) => r[idKey] === id) : -1
  if (id && index === -1) throw new HttpError(404, `${id} not found`)

  if (method === 'DELETE' && id) {
    rows.splice(index, 1)
    return { status: 200, data: { deleted: id } }
  }

  if (method === 'POST' && !id) {
    const row = clean(table, body)
    if (table !== 'sites') row[idKey] = nextId(table, rows)
    row.createdAt = now()
    row.updatedAt = row.createdAt
    if (table === 'snags') {
      row.openedBy ||= user.name
      // Roles that can't edit snags can only open them, not log them as closed.
      if (!can['snags.edit'] && row.status !== 'NA') {
        row.status = 'OPEN'
        row.closingDate = ''
        row.closedBy = ''
      }
    }
    if (table === 'usage') row.technician ||= user.name
    rows.push(prepare(table, row, masters, undefined, rows))
    return { status: 201, data: row }
  }

  if (method === 'PUT' && id) {
    const existing = rows[index]
    const row = { ...existing, ...clean(table, { ...existing, ...(body as object) }) }
    row[idKey] = existing[idKey]
    row.createdAt = existing.createdAt
    row.updatedAt = now()
    if (table === 'snags' && existing.status !== row.status && row.status === 'CLOSED') {
      row.closingDate = row.closingDate || today()
      row.closedBy = row.closedBy || user.name
    }
    rows[index] = prepare(table, row, masters, existing, rows)
    return { status: 200, data: row }
  }

  throw new HttpError(405, 'Method not allowed')
}

// ---- Users ----

const USERNAME_RE = /^[a-z0-9._-]{3,32}$/

export const isActive = (u: Row) => u.active.toLowerCase() !== 'no'

export function toPublic(u: Row): PublicUser {
  return { username: u.username, name: u.name, role: u.role as Role, active: isActive(u) ? 'Yes' : 'No', lastLogin: u.lastLogin, createdAt: u.createdAt }
}

export const sessionFor = (u: Row): Session => ({ user: toPublic(u), can: permissionsFor(u.role) })

export function validatePassword(password: unknown) {
  if (typeof password !== 'string' || password.length < PASSWORD_MIN) throw new HttpError(400, `Password must be at least ${PASSWORD_MIN} characters`)
  if (password.length > 200) throw new HttpError(400, 'Password is too long')
  return password
}

export function validateUserInput(body: Record<string, unknown>, creating: boolean) {
  const username = String(body.username ?? '').trim().toLowerCase()
  const name = String(body.name ?? '').trim().slice(0, 80)
  const role = String(body.role ?? '')
  if (creating && !USERNAME_RE.test(username)) throw new HttpError(400, 'Username must be 3–32 characters: lowercase letters, numbers, dot, dash or underscore')
  if (!name) throw new HttpError(400, 'Full name is required')
  if (!ROLES.includes(role as Role)) throw new HttpError(400, `Role must be one of ${ROLES.join(', ')}`)
  return { username, name, role }
}

export function ensureAnAdminRemains(users: Row[]) {
  if (!users.some((u) => u.role === 'Admin' && isActive(u))) throw new HttpError(400, 'At least one active Admin is required')
}

export const asObject = (body: unknown) => (body && typeof body === 'object' ? (body as Record<string, unknown>) : {})
