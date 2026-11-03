import { useMemo, useState } from 'react'
import { SnagForm } from '../components/SnagForm.tsx'
import { EmptyState, SeverityBadge, StatusBadge } from '../components/ui.tsx'
import { matches } from '../lib/format.ts'
import { LOOKUP, lookupValues, type Snag } from '../lib/schema.ts'
import type { PageProps } from './types.ts'

export function SnagsPage({ session, data, actions, filter, setFilter }: PageProps) {
  const { masters, snags, sites } = data
  const { can } = session
  const [editing, setEditing] = useState<Snag | 'new' | null>(filter.create && can['snags.create'] ? 'new' : null)
  const [region, setRegion] = useState('')
  const [severity, setSeverity] = useState('')
  const [category, setCategory] = useState('')
  const status = filter.status ?? 'OPEN'

  const rows = useMemo(() => snags
    .filter((s) => matches(filter.search ?? '', [s.siteId, s.referenceNo, s.snag, s.remarks, s.assigned, s.openedBy]))
    .filter((s) => !region || s.region === region)
    .filter((s) => !status || s.status.toUpperCase() === status)
    .filter((s) => !severity || s.severity.toUpperCase() === severity)
    .filter((s) => !category || s.classification.toUpperCase() === category)
    .sort((a, b) => Number(b.sn) - Number(a.sn)), [snags, filter.search, region, status, severity, category])

  async function save(row: Snag) {
    if (editing && editing !== 'new') await actions.update('snags', editing.sn, row)
    else await actions.create('snags', row)
    setEditing(null)
  }

  return (
    <section className="panel">
      <header className="panel-header">
        <div><p className="eyebrow">{rows.length} of {snags.length} snags</p><h2>Snag register</h2></div>
        {can['snags.create'] && <button type="button" className="primary-button" onClick={() => setEditing('new')}>+ Log snag</button>}
      </header>

      <div className="filters">
        <label className="field search"><span>Search</span><input value={filter.search ?? ''} onChange={(e) => setFilter({ ...filter, search: e.target.value })} placeholder="Site ID, reference, snag, person…" /></label>
        <label className="field"><span>Status</span><select value={status} onChange={(e) => setFilter({ ...filter, status: e.target.value })}><option value="">All</option>{lookupValues(masters, LOOKUP.status).map((s) => <option key={s}>{s}</option>)}</select></label>
        <label className="field"><span>Region</span><select value={region} onChange={(e) => setRegion(e.target.value)}><option value="">All</option>{masters.regions.map((r) => <option key={r.code} value={r.code}>{r.code}</option>)}</select></label>
        <label className="field"><span>Severity</span><select value={severity} onChange={(e) => setSeverity(e.target.value)}><option value="">All</option>{lookupValues(masters, LOOKUP.severity).map((s) => <option key={s}>{s}</option>)}</select></label>
        <label className="field"><span>Classification</span><select value={category} onChange={(e) => setCategory(e.target.value)}><option value="">All</option>{masters.categories.map((c) => <option key={c.code}>{c.code}</option>)}</select></label>
      </div>

      {rows.length === 0 ? (
        <EmptyState
          title={snags.length ? 'No snags match these filters' : 'No snags logged yet'}
          text={snags.length ? 'Clear a filter to see more.' : 'Snags you log are written to the Snags sheet of the Excel workbook.'}
          action={!snags.length && can['snags.create'] && <button type="button" className="primary-button" onClick={() => setEditing('new')}>Log the first snag</button>}
        />
      ) : (
        <div className="table-wrap">
          <table className="stack">
            <thead><tr><th>Reference</th><th>Site</th><th>Region</th><th>Class</th><th>Classification</th><th>Snag</th><th>Severity</th><th>Status</th><th>Action owner</th><th>Date of PM</th><th /></tr></thead>
            <tbody>
              {rows.map((s) => (
                <tr key={s.sn}>
                  <td data-label="Reference" className="mono">{s.referenceNo}</td>
                  <td data-label="Site"><strong>{s.siteId}</strong>{s.siteType && <small className="sub">{s.siteType}</small>}</td>
                  <td data-label="Region">{s.region}</td>
                  <td data-label="Class">{s.siteClass.replace('CLASS ', '') || '—'}</td>
                  <td data-label="Classification">{s.classification}</td>
                  <td data-label="Snag" className="wrap">{s.snag}{s.remarks && <small className="sub">{s.remarks}</small>}</td>
                  <td data-label="Severity"><SeverityBadge value={s.severity} /></td>
                  <td data-label="Status"><StatusBadge value={s.status} />{s.closingDate && <small className="sub">{s.closingDate}</small>}</td>
                  <td data-label="Action owner">{s.actionOwner || '—'}</td>
                  <td data-label="Date of PM">{s.dateOfPm || '—'}</td>
                  <td className="row-actions">
                    {s.status === 'OPEN' && can['snags.edit'] && <button type="button" className="chip-button" onClick={() => void actions.update('snags', s.sn, { status: 'CLOSED' }).catch(() => undefined)}>Close</button>}
                    {can['snags.edit'] && <button type="button" className="chip-button" onClick={() => setEditing(s)}>Edit</button>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {editing && (
        <SnagForm
          masters={masters}
          sites={sites}
          initial={editing === 'new' ? undefined : editing}
          canSetStatus={can['snags.edit']}
          onSave={save}
          onDelete={!can['snags.delete'] ? undefined : async (row) => { await actions.remove('snags', row.sn); setEditing(null) }}
          onClose={() => setEditing(null)}
        />
      )}
    </section>
  )
}
