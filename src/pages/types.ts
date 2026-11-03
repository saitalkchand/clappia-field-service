import type { Session } from '../lib/auth.ts'
import type { ConsumableUsage, Masters, Site, Snag, TableName, TableRow } from '../lib/schema.ts'

export type PageKey = 'dashboard' | 'snags' | 'consumables' | 'sites' | 'teams' | 'masters' | 'users'

export type AppData = { masters: Masters; snags: Snag[]; usage: ConsumableUsage[]; sites: Site[] }

// Each action writes to the workbook, refreshes local state and shows a toast.
// They reject on validation errors so forms can show the message inline.
export type Actions = {
  create: <T extends TableName>(table: T, row: Partial<TableRow[T]>) => Promise<TableRow[T]>
  update: <T extends TableName>(table: T, id: string, row: Partial<TableRow[T]>) => Promise<TableRow[T]>
  remove: (table: TableName, id: string) => Promise<void>
  reseedMasters: () => Promise<void>
}

// `create` opens the page's new-record form on arrival (dashboard quick actions).
export type Filter = { search?: string; status?: string; create?: boolean }

export type PageProps = {
  session: Session
  notify: (text: string) => void
  data: AppData
  actions: Actions
  filter: Filter
  setFilter: (filter: Filter) => void
  go: (page: PageKey, filter?: Filter) => void
}
