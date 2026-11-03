import type { PublicUser, Session } from './auth.ts'
import type { Masters, TableName, TableRow } from './schema.ts'

// Static builds (GitHub Pages) have no server, so the API runs in the browser instead.
export const STATIC_DEMO = import.meta.env.VITE_STATIC_DEMO === 'true'

export class ApiError extends Error {
  status: number
  setupRequired: boolean
  constructor(status: number, message: string, setupRequired = false) {
    super(message)
    this.status = status
    this.setupRequired = setupRequired
  }
}

// App registers this so an expired session anywhere sends the user back to sign-in.
let onUnauthorized: () => void = () => {}
export const setUnauthorizedHandler = (handler: () => void) => { onUnauthorized = handler }

async function request<T>(path: string, init?: RequestInit, { quiet401 = false } = {}): Promise<T> {
  const { status, data } = STATIC_DEMO ? await (await import('./localApi.ts')).localRequest(path, init) : await fetchJson(path, init)
  const body = (data ?? {}) as { error?: string; setupRequired?: boolean }
  if (status < 200 || status >= 300) {
    if (status === 401 && !quiet401) onUnauthorized()
    throw new ApiError(status, body.error ?? `Request failed (${status})`, Boolean(body.setupRequired))
  }
  return data as T
}

async function fetchJson(path: string, init?: RequestInit) {
  const res = await fetch(`/api/${path}`, { credentials: 'same-origin', headers: { 'Content-Type': 'application/json' }, ...init })
  return { status: res.status, data: (await res.json().catch(() => ({}))) as unknown }
}

const post = (body: unknown): RequestInit => ({ method: 'POST', body: JSON.stringify(body) })

export const api = {
  me: () => request<Session>('auth/me', undefined, { quiet401: true }),
  login: (username: string, password: string) => request<Session>('auth/login', post({ username, password }), { quiet401: true }),
  setup: (body: { username: string; name: string; password: string }) => request<Session>('auth/setup', post(body), { quiet401: true }),
  logout: () => request<{ ok: true }>('auth/logout', post({}), { quiet401: true }),
  changePassword: (currentPassword: string, newPassword: string) => request<{ ok: true }>('auth/password', post({ currentPassword, newPassword })),

  users: () => request<PublicUser[]>('users'),
  createUser: (body: { username: string; name: string; role: string; password: string }) => request<PublicUser>('users', post(body)),
  updateUser: (username: string, body: Partial<{ name: string; role: string; active: string; password: string }>) =>
    request<PublicUser>(`users/${encodeURIComponent(username)}`, { method: 'PUT', body: JSON.stringify(body) }),

  masters: () => request<Masters>('masters'),
  reseedMasters: () => request<Masters>('admin/reseed-masters', post({})),
  list: <T extends TableName>(table: T) => request<TableRow[T][]>(`records/${table}`),
  create: <T extends TableName>(table: T, row: Partial<TableRow[T]>) => request<TableRow[T]>(`records/${table}`, post(row)),
  update: <T extends TableName>(table: T, id: string, row: Partial<TableRow[T]>) =>
    request<TableRow[T]>(`records/${table}/${encodeURIComponent(id)}`, { method: 'PUT', body: JSON.stringify(row) }),
  remove: (table: TableName, id: string) =>
    request<{ deleted: string }>(`records/${table}/${encodeURIComponent(id)}`, { method: 'DELETE' }),
  exportUrl: '/api/export',
  downloadLocalWorkbook: async () => (await import('./localApi.ts')).downloadWorkbook(),
}
