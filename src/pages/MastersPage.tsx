import { useState } from 'react'
import { SeverityBadge } from '../components/ui.tsx'
import { matches } from '../lib/format.ts'
import { masterSheets, type Masters } from '../lib/schema.ts'
import type { PageProps } from './types.ts'

type Tab = 'matrix' | keyof Masters

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

export function MastersPage({ session, data, actions }: PageProps) {
  const { masters } = data
  const [tab, setTab] = useState<Tab>('matrix')
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')
  const [busy, setBusy] = useState(false)

  const countOf = (key: Tab) => (key === 'matrix' ? masters.severityRules.length : masters[key].length)

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

      {tab === 'matrix' ? <SeverityMatrix masters={masters} search={search} category={category} /> : <SheetTable tab={tab} masters={masters} search={search} category={category} />}
    </section>
  )
}

function SeverityMatrix({ masters, search, category }: { masters: Masters; search: string; category: string }) {
  const rules = masters.severityRules.filter((r) => (!category || r.category === category) && matches(search, [r.category, r.description]))
  const groups = [...new Set(rules.map((r) => r.category))]
  return (
    <div className="table-wrap">
      <table className="matrix">
        <thead><tr><th>Snag description</th><th>Class A</th><th>Class B</th><th>Class C</th></tr></thead>
        {groups.map((g) => (
          <tbody key={g}>
            <tr className="group-row"><th colSpan={4}>{g}</th></tr>
            {rules.filter((r) => r.category === g).map((r) => (
              <tr key={`${g}-${r.description}`}>
                <td>{r.description}</td>
                <td><SeverityBadge value={r.classA} /></td>
                <td><SeverityBadge value={r.classB} /></td>
                <td><SeverityBadge value={r.classC} /></td>
              </tr>
            ))}
          </tbody>
        ))}
      </table>
    </div>
  )
}

function SheetTable({ tab, masters, search, category }: { tab: keyof Masters; masters: Masters; search: string; category: string }) {
  const { sheet, fields } = masterSheets[tab]
  const rows = (masters[tab] as Record<string, string>[])
    .filter((r) => tab !== 'descriptions' || !category || r.category === category)
    .filter((r) => matches(search, Object.values(r)))
  return (
    <>
      <p className="hint">Sheet <code>{sheet}</code> · {rows.length} rows</p>
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
    </>
  )
}
