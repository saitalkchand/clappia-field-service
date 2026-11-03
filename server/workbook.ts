import { existsSync, mkdirSync, readFileSync, renameSync, statSync, writeFileSync } from 'node:fs'
import type { IncomingMessage, ServerResponse } from 'node:http'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import * as XLSX from 'xlsx'
import { USERS_SHEET, userFields } from '../src/lib/auth.ts'
import { masterSheets, tables, type FieldDef, type Masters } from '../src/lib/schema.ts'
import { buildMasters } from './seed.ts'
import { HttpError, now, type Row } from '../src/lib/rules.ts'

export { HttpError, now, today, type Row } from '../src/lib/rules.ts'

// Excel workbook as the database. Every request re-reads the file if it changed
// on disk (so edits made in Excel show up), and writes go through a queue and an
// atomic temp-file rename so a crash never leaves a half-written workbook.

export const ROOT = fileURLToPath(new URL('..', import.meta.url))
// EXCEL_DB_PATH lets you point the app at another workbook (e.g. a demo copy).
export const DB_PATH = resolve(ROOT, process.env.EXCEL_DB_PATH ?? 'data/field_service_db.xlsx')
export const SEED_PATH = resolve(ROOT, 'data/seed/field_service_master_data.json')
const MAX_BODY = 1_000_000

export type Workbook = XLSX.WorkBook

let cache: { mtime: number; wb: Workbook } | null = null
let queue: Promise<unknown> = Promise.resolve()

export function sheetFromRows(fields: readonly FieldDef[], rows: Row[]) {
  const data = rows.map((row) =>
    fields.map((f) => {
      const v = row[f.key] ?? ''
      return f.numeric && v !== '' && Number.isFinite(Number(v)) ? Number(v) : v
    }),
  )
  const ws = XLSX.utils.aoa_to_sheet([fields.map((f) => f.header), ...data])
  ws['!cols'] = fields.map((f) => ({ wch: Math.min(48, Math.max(12, f.header.length + 2)) }))
  ws['!autofilter'] = { ref: XLSX.utils.encode_range({ s: { r: 0, c: 0 }, e: { r: Math.max(rows.length, 1), c: fields.length - 1 } }) }
  return ws
}

export function rowsFromSheet(wb: Workbook, sheet: string, fields: readonly FieldDef[]): Row[] {
  const ws = wb.Sheets[sheet]
  if (!ws) return []
  const raw = XLSX.utils.sheet_to_json<Record<string, unknown>>(ws, { defval: '', raw: false, dateNF: 'yyyy-mm-dd' })
  return raw
    .map((r) => Object.fromEntries(fields.map((f) => [f.key, String(r[f.header] ?? '').trim()])))
    .filter((r) => Object.values(r).some((v) => v !== ''))
}

export function setSheet(wb: Workbook, name: string, ws: XLSX.WorkSheet) {
  if (!wb.SheetNames.includes(name)) wb.SheetNames.push(name)
  wb.Sheets[name] = ws
}

export function writeMasterSheets(wb: Workbook, masters: Masters) {
  for (const [key, def] of Object.entries(masterSheets)) {
    setSheet(wb, def.sheet, sheetFromRows(def.fields, masters[key as keyof Masters] as Row[]))
  }
  const about = XLSX.utils.aoa_to_sheet([
    ['Clappia Field Service — Excel database'],
    [],
    ['Transactional sheets', 'Snags, ConsumableUsage, Sites (written by the app)'],
    ['Users', 'App sign-in accounts. Manage them from the app; passwords are stored as scrypt hashes only'],
    ['Master sheets', 'Every sheet starting with M_ (read by the app; edit here to change dropdowns)'],
    ['Seed source', 'data/seed/field_service_master_data.json'],
    ['Masters imported', now()],
    [],
    ['Do not rename sheets or header cells; the app looks them up by name.'],
  ])
  about['!cols'] = [{ wch: 24 }, { wch: 80 }]
  setSheet(wb, 'About', about)
}

function createWorkbook() {
  const wb = XLSX.utils.book_new()
  setSheet(wb, 'About', XLSX.utils.aoa_to_sheet([[]]))
  for (const t of Object.values(tables)) setSheet(wb, t.sheet, sheetFromRows(t.fields, []))
  setSheet(wb, USERS_SHEET, sheetFromRows(userFields, []))
  writeMasterSheets(wb, buildMasters(SEED_PATH))
  return wb
}

export function saveWorkbook(wb: Workbook) {
  mkdirSync(dirname(DB_PATH), { recursive: true })
  const tmp = `${DB_PATH}.tmp`
  writeFileSync(tmp, XLSX.write(wb, { type: 'buffer', bookType: 'xlsx' }))
  renameSync(tmp, DB_PATH)
  cache = { mtime: statSync(DB_PATH).mtimeMs, wb }
}

export function loadWorkbook(): Workbook {
  if (!existsSync(DB_PATH)) saveWorkbook(createWorkbook())
  const mtime = statSync(DB_PATH).mtimeMs
  if (!cache || cache.mtime !== mtime) cache = { mtime, wb: XLSX.read(readFileSync(DB_PATH), { type: 'buffer' }) }
  return cache.wb
}

export function readMasters(wb: Workbook): Masters {
  return Object.fromEntries(
    Object.entries(masterSheets).map(([key, def]) => [key, rowsFromSheet(wb, def.sheet, def.fields)]),
  ) as Masters
}

export function serialize<T>(task: () => T): Promise<T> {
  const next = queue.then(task, task)
  queue = next.catch(() => undefined)
  return next
}

export async function readBody(req: IncomingMessage) {
  let size = 0
  const chunks: Buffer[] = []
  for await (const chunk of req) {
    size += chunk.length
    if (size > MAX_BODY) throw new HttpError(413, 'Request body too large')
    chunks.push(chunk as Buffer)
  }
  try {
    return JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}') as unknown
  } catch {
    throw new HttpError(400, 'Invalid JSON')
  }
}

export function send(res: ServerResponse, status: number, data: unknown) {
  res.statusCode = status
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('Cache-Control', 'no-store')
  res.end(JSON.stringify(data))
}
