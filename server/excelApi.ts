import { readFileSync } from 'node:fs'
import type { IncomingMessage, ServerResponse } from 'node:http'
import * as XLSX from 'xlsx'
import { USERS_SHEET, type Permission } from '../src/lib/auth.ts'
import { requirePermission, writeRecord } from '../src/lib/rules.ts'
import { tables, type TableName } from '../src/lib/schema.ts'
import { authRoutes, requireSession } from './auth.ts'
import {
  DB_PATH,
  HttpError,
  SEED_PATH,
  loadWorkbook,
  readBody,
  readMasters,
  rowsFromSheet,
  saveWorkbook,
  send,
  serialize,
  setSheet,
  sheetFromRows,
  today,
  writeMasterSheets,
} from './workbook.ts'
import { buildMasters } from './seed.ts'

// The export leaves out the Users sheet so password hashes never leave the server.
function exportBuffer() {
  loadWorkbook()
  const wb = XLSX.read(readFileSync(DB_PATH), { type: 'buffer' })
  const index = wb.SheetNames.indexOf(USERS_SHEET)
  if (index === -1) return XLSX.write(wb, { type: 'buffer', bookType: 'xlsx' }) as Buffer
  delete wb.Sheets[USERS_SHEET]
  wb.SheetNames.splice(index, 1)
  // Drop sheet-scoped names (e.g. its autofilter) and re-point names on later sheets.
  if (wb.Workbook?.Names) {
    wb.Workbook.Names = wb.Workbook.Names
      .filter((n) => n.Sheet !== index)
      .map((n) => (n.Sheet != null && n.Sheet > index ? { ...n, Sheet: n.Sheet - 1 } : n))
  }
  if (wb.Workbook?.Sheets) wb.Workbook.Sheets.splice(index, 1)
  return XLSX.write(wb, { type: 'buffer', bookType: 'xlsx' }) as Buffer
}

async function route(req: IncomingMessage, res: ServerResponse) {
  const url = new URL(req.url ?? '/', 'http://localhost')
  const parts = url.pathname.replace(/^\/api\/?/, '').split('/').filter(Boolean).map(decodeURIComponent)
  const method = req.method ?? 'GET'

  // Writes must be JSON; with SameSite=Strict cookies this blocks cross-site form posts.
  if (method !== 'GET' && !String(req.headers['content-type'] ?? '').includes('application/json')) {
    throw new HttpError(415, 'Expected application/json')
  }

  if (parts[0] === 'health') return send(res, 200, { ok: true })
  if (await authRoutes(req, res, parts, method)) return

  const { user, can } = requireSession(req)

  if (parts[0] === 'masters' && method === 'GET') return send(res, 200, readMasters(loadWorkbook()))

  if (parts[0] === 'export' && method === 'GET') {
    requirePermission(can, 'export')
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
    res.setHeader('Content-Disposition', `attachment; filename="clappia_field_service_${today()}.xlsx"`)
    return res.end(exportBuffer())
  }

  if (parts[0] === 'admin' && parts[1] === 'reseed-masters' && method === 'POST') {
    requirePermission(can, 'masters.reseed')
    await serialize(() => {
      const wb = loadWorkbook()
      writeMasterSheets(wb, buildMasters(SEED_PATH))
      saveWorkbook(wb)
    })
    return send(res, 200, readMasters(loadWorkbook()))
  }

  if (parts[0] === 'records' && parts[1] && parts[1] in tables) {
    const table = parts[1] as TableName
    const { sheet, fields } = tables[table]
    const id = parts[2]

    if (method === 'GET' && !id) return send(res, 200, rowsFromSheet(loadWorkbook(), sheet, fields))

    const action = method === 'POST' ? 'create' : method === 'PUT' ? 'edit' : method === 'DELETE' ? 'delete' : ''
    if (!action) throw new HttpError(405, 'Method not allowed')
    requirePermission(can, `${table}.${action}` as Permission)

    const body = method === 'DELETE' ? {} : await readBody(req)
    const result = await serialize(() => {
      const wb = loadWorkbook()
      const rows = rowsFromSheet(wb, sheet, fields)
      const result = writeRecord(table, method, id, body, rows, readMasters(wb), { user, can })
      setSheet(wb, sheet, sheetFromRows(fields, rows))
      saveWorkbook(wb)
      return result
    })
    return send(res, result.status, result.data)
  }

  send(res, 404, { error: 'Not found' })
}

export function excelApiMiddleware(req: IncomingMessage, res: ServerResponse, next: () => void) {
  if (!req.url?.startsWith('/api/') && req.url !== '/api') return next()
  route(req, res).catch((error: unknown) => {
    const status = error instanceof HttpError ? error.status : 500
    const message = error instanceof Error ? error.message : 'Unexpected error'
    if (status === 500) console.error('[excel-db]', error)
    send(res, status, { error: message })
  })
}
