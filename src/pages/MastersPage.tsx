import { useState, type ReactNode } from 'react'
import { SeverityBadge } from '../components/ui.tsx'
import { matches } from '../lib/format.ts'
import { masterSheets, type Masters } from '../lib/schema.ts'
import type { PageProps } from './types.ts'

type Tab = 'matrix' | keyof Masters
type Row = Record<string, string>

const tabs: { key: Tab; label: string }[] = [
  { key: 'matrix', label: 'Severity matrix' },
  { key: 'descriptions', label: 'Snag descriptions' },
  { key: 'categories', label: 'Snag classifications' },
  { key: 'consumables', label: 'Consumables' },
  { key: 'lookups', label: 'Dropdown lists' },
  { key: 'regions', label: 'Regions' },
  { key: 'siteTypes', label: 'Site types' },
  { key: 'siteClasses', label: 'Site classes' },
  { key: 'supervisors', label: 'Supervisors' },
  { key: 'teams', label: 'Teams' },
  { key: 'legacyMappings', label: 'Legacy severity map' },
  { key: 'legacyColumns', label: 'Legacy CO columns' },
]

// The column each sheet is grouped by into expandable panels. Sheets without one get a single panel.
const groupBy: Partial<Record<Tab, string>> = {
  matrix: 'category',
  descriptions: 'category',
  consumables: 'category',
  lookups: 'list',
  supervisors: 'region',
  teams: 'region',
  legacyMappings: 'category',
}

const SEVERITY_TONES = ['CRITICAL', 'MAJOR', 'MINOR'] as const

export function MastersPage({ session, data, actions }: PageProps) {
  const { masters } = data
  const [tab, setTab] = useState<Tab>('matrix')
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')
  const [busy, setBusy] = useState(false)
  // Panel open state per tab; groups not listed fall back to "first one open".
  const [expanded, setExpanded] = useState<Record<string, boolean>>({})

  const countOf = (key: Tab) => (key === 'matrix' ? masters.severityRules.length : masters[key].length)
  const sheetOf = (key: Tab) => (key === 'matrix' ? masterSheets.severityRules : masterSheets[key])
  const { sheet, fields } = sheetOf(tab)
  const key = groupBy[tab]
  const filtering = Boolean(search || category)

  const rows = ((tab === 'matrix' ? masters.severityRules : masters[tab]) as Row[])
    .filter((r) => !category || !(tab === 'matrix' || tab === 'descriptions') || r.category === category)
    .filter((r) => matches(search, Object.values(r)))
  const groups = key
    ? [...new Set(rows.map((r) => r[key] || '—'))].map((name) => ({ name, rows: rows.filter((r) => (r[key] || '—') === name) }))
    : [{ name: tabs.find((t) => t.key === tab)!.label, rows }]

  const isOpen = (name: string, index: number) => filtering || (expanded[`${tab}:${name}`] ?? index === 0)
  const setAll = (open: boolean) => setExpanded((prev) => ({ ...prev, ...Object.fromEntries(groups.map((g) => [`${tab}:${g.name}`, open])) }))
  const toggle = (name: string, index: number) => setExpanded((prev) => ({ ...prev, [`${tab}:${name}`]: !isOpen(name, index) }))
  const categoryName = (code: string) => masters.categories.find((c) => c.code === code)?.name

  async function reseed() {
    if (!confirm('Re-import all M_ sheets from data/seed/field_service_master_data.json? Manual edits to M_ sheets will be replaced. Snags, ConsumableUsage and Sites are kept.')) return
    setBusy(true)
    try { await actions.reseedMasters() } finally { setBusy(false) }
  }

  return (
    <section className="panel">
      <header className="panel-header">
        <div><p className="eyebrow">Read from the M_ sheets in the workbook</p><h2>Master data</h2></div>
        {session.can['masters.reseed'] && <button type="button" className="ghost-button" disabled={busy} onClick={() => void reseed().catch(() => undefined)}>{busy ? 'Importing…' : 'Re-import from JSON'}</button>}
      </header>
      <p className="hint">To change a dropdown, edit its <code>M_</code> sheet in Excel and press <b>Refresh</b> — the app re-reads the workbook on every load.</p>

      <div className="tabs" role="tablist">
        {tabs.map((t) => (
          <button key={t.key} type="button" role="tab" aria-selected={tab === t.key} className={tab === t.key ? 'active' : ''} onClick={() => { setTab(t.key); setSearch('') }}>
            {t.label}<span>{countOf(t.key)}</span>
          </button>
        ))}
      </div>

      <div className="filters">
        <label className="field search"><span>Search</span><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Filter rows…" /></label>
        {(tab === 'matrix' || tab === 'descriptions') && (
          <label className="field"><span>Classification</span><select value={category} onChange={(e) => setCategory(e.target.value)}><option value="">All</option>{masters.categories.map((c) => <option key={c.code}>{c.code}</option>)}</select></label>
        )}
      </div>

      <div className="accordion-toolbar">
        <span className="muted">Sheet <code>{sheet}</code> · {rows.length} rows{key && ` in ${groups.length} groups`}</span>
        {key && !filtering && (
          <span className="accordion-actions">
            <button type="button" className="link-button" onClick={() => setAll(true)}>Expand all</button>
            <button type="button" className="link-button" onClick={() => setAll(false)}>Collapse all</button>
          </span>
        )}
      </div>

      {groups.length === 0 || rows.length === 0 ? <p className="muted chart-empty">No rows match “{search}”.</p> : (
        <div className="accordion">
          {groups.map((g, i) => (
            <AccordionPanel
              key={`${tab}:${g.name}`}
              id={`${tab}-${i}`}
              title={g.name}
              subtitle={key === 'category' && categoryName(g.name)?.toUpperCase() !== g.name.toUpperCase() ? categoryName(g.name) : undefined}
              count={g.rows.length}
              summary={tab === 'matrix' ? <SeveritySummary rows={g.rows} /> : undefined}
              open={isOpen(g.name, i)}
              onToggle={() => toggle(g.name, i)}
            >
              {tab === 'matrix' ? <MatrixTable rows={g.rows} /> : <SheetTable rows={g.rows} fields={fields.filter((f) => f.key !== key)} />}
            </AccordionPanel>
          ))}
        </div>
      )}
    </section>
  )
}

function AccordionPanel({ id, title, subtitle, count, summary, open, onToggle, children }: {
  id: string
  title: string
  subtitle?: string
  count: number
  summary?: ReactNode
  open: boolean
  onToggle: () => void
  children: ReactNode
}) {
  return (
    <div className={`accordion-panel${open ? ' open' : ''}`}>
      <h3>
        <button type="button" aria-expanded={open} aria-controls={`${id}-body`} onClick={onToggle}>
          <svg className="chevron" viewBox="0 0 24 24" aria-hidden="true"><path d="m9 6 6 6-6 6" /></svg>
          <span className="accordion-title">{title}{subtitle && <small>{subtitle}</small>}</span>
          {summary}
          <span className="accordion-count">{count}</span>
        </button>
      </h3>
      {open && <div id={`${id}-body`} className="accordion-body">{children}</div>}
    </div>
  )
}

// How many rules in the group are critical / major / minor for any site class.
function SeveritySummary({ rows }: { rows: Row[] }) {
  const worst = (r: Row) => SEVERITY_TONES.find((s) => [r.classA, r.classB, r.classC].some((v) => v.toUpperCase() === s))
  return (
    <span className="accordion-summary">
      {SEVERITY_TONES.map((s) => {
        const n = rows.filter((r) => worst(r) === s).length
        return n > 0 && <span key={s} className={`mini-sev sev-${s.toLowerCase()}`} title={`${n} rule${n > 1 ? 's' : ''} up to ${s}`}><i />{n}</span>
      })}
    </span>
  )
}

function MatrixTable({ rows }: { rows: Row[] }) {
  return (
    <div className="table-wrap">
      <table className="matrix">
        <thead><tr><th>Snag description</th><th>Class A</th><th>Class B</th><th>Class C</th></tr></thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.description}>
              <td className="wrap">{r.description}</td>
              <td><SeverityBadge value={r.classA} /></td>
              <td><SeverityBadge value={r.classB} /></td>
              <td><SeverityBadge value={r.classC} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function SheetTable({ rows, fields }: { rows: Row[]; fields: readonly { key: string; header: string }[] }) {
  return (
    <div className="table-wrap">
      <table>
        <thead><tr>{fields.map((f) => <th key={f.key}>{f.header}</th>)}</tr></thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>{fields.map((f) => <td key={f.key}>{f.key === 'severity' ? <SeverityBadge value={r[f.key]} /> : r[f.key] || '—'}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
