import { useState, type FormEvent } from 'react'
import { EmptyState, Input, Modal, Select } from '../components/ui.tsx'
import { matches } from '../lib/format.ts'
import { LOOKUP, lookupValues, siteFields, type Site } from '../lib/schema.ts'
import type { PageProps } from './types.ts'

const blank = () => Object.fromEntries(siteFields.map((f) => [f.key, ''])) as Site

export function SitesPage({ session, data, actions, filter, setFilter, go }: PageProps) {
  const { masters, sites, snags } = data
  const { can } = session
  const [editing, setEditing] = useState<Site | 'new' | null>(null)
  const [region, setRegion] = useState('')
  const openBySite = snags.reduce<Record<string, number>>((acc, s) => (s.status === 'OPEN' ? { ...acc, [s.siteId]: (acc[s.siteId] ?? 0) + 1 } : acc), {})
  const rows = sites
    .filter((s) => matches(filter.search ?? '', [s.siteId, s.supervisor, s.colocated, s.notes]))
    .filter((s) => !region || s.region === region)
    .sort((a, b) => a.siteId.localeCompare(b.siteId))

  return (
    <section className="panel">
      <header className="panel-header">
        <div><p className="eyebrow">Sites sheet · {sites.length} sites</p><h2>Site register</h2></div>
        {can['sites.create'] && <button type="button" className="primary-button" onClick={() => setEditing('new')}>+ Add site</button>}
      </header>
      <div className="filters">
        <label className="field search"><span>Search</span><input value={filter.search ?? ''} onChange={(e) => setFilter({ ...filter, search: e.target.value })} placeholder="Site ID, supervisor, notes…" /></label>
        <label className="field"><span>Region</span><select value={region} onChange={(e) => setRegion(e.target.value)}><option value="">All</option>{masters.regions.map((r) => <option key={r.code} value={r.code}>{r.code} · {r.name}</option>)}</select></label>
      </div>
      {rows.length === 0 ? (
        <EmptyState
          title={sites.length ? 'No sites match' : 'No sites registered yet'}
          text={sites.length ? 'Clear a filter to see more.' : 'Register sites once so snag and consumable forms can auto-fill region, type and class.'}
          action={!sites.length && can['sites.create'] && <button type="button" className="primary-button" onClick={() => setEditing('new')}>Add the first site</button>}
        />
      ) : (
        <div className="site-grid">
          {rows.map((s) => (
            <article key={s.siteId} className="site-card">
              <header><strong>{s.siteId}</strong>{s.siteClass && <span className="pill">{s.siteClass}</span>}</header>
              <dl>
                <div><dt>Region</dt><dd>{s.region}</dd></div>
                <div><dt>Type</dt><dd>{s.siteType || '—'}</dd></div>
                <div><dt>AC</dt><dd>{s.acType || '—'}</dd></div>
                <div><dt>Colocated</dt><dd>{s.colocated || '—'}</dd></div>
              </dl>
              {s.supervisor && <p className="muted">Supervisor: {s.supervisor}</p>}
              <footer>
                <button type="button" className="link-button" onClick={() => go('snags', { search: s.siteId, status: '' })}>
                  {openBySite[s.siteId] ? `${openBySite[s.siteId]} open snag${openBySite[s.siteId] > 1 ? 's' : ''}` : 'Snag history'} →
                </button>
                {can['sites.edit'] && <button type="button" className="chip-button" onClick={() => setEditing(s)}>Edit</button>}
              </footer>
            </article>
          ))}
        </div>
      )}
      {editing && <SiteForm data={data} initial={editing === 'new' ? undefined : editing} onClose={() => setEditing(null)}
        onSave={async (row) => {
          if (editing === 'new') await actions.create('sites', row)
          else await actions.update('sites', editing.siteId, row)
          setEditing(null)
        }}
        onDelete={can['sites.delete'] ? async (row) => { await actions.remove('sites', row.siteId); setEditing(null) } : undefined} />}
    </section>
  )
}

function SiteForm({ data, initial, onSave, onDelete, onClose }: {
  data: PageProps['data']; initial?: Site
  onSave: (row: Site) => Promise<void>; onDelete?: (row: Site) => Promise<void>; onClose: () => void
}) {
  const { masters } = data
  const [row, setRow] = useState<Site>(() => initial ?? blank())
  const [error, setError] = useState('')
  const set = (key: keyof Site) => (value: string) => setRow((r) => ({ ...r, [key]: value }))

  async function submit(event: FormEvent) {
    event.preventDefault()
    setError('')
    try { await onSave(row) } catch (e) { setError(e instanceof Error ? e.message : 'Could not save') }
  }

  return (
    <Modal title={initial ? `Edit ${initial.siteId}` : 'Add site'} eyebrow="Sites" onClose={onClose}>
      <form className="form" onSubmit={submit}>
        <div className="grid-2">
          <Input label="Site ID" required value={row.siteId} onChange={set('siteId')} disabled={Boolean(initial)} placeholder="e.g. SHJ2031" />
          <Select label="Region" required value={row.region} onChange={set('region')} options={masters.regions.map((r) => ({ value: r.code, label: `${r.code} · ${r.name}` }))} />
          <Select label="Site type" value={row.siteType} onChange={set('siteType')} options={masters.siteTypes.map((t) => t.code)} />
          <Select label="Site class" value={row.siteClass} onChange={set('siteClass')} options={masters.siteClasses.map((c) => c.code)} />
          <Input label="Colocated" value={row.colocated} onChange={set('colocated')} />
          <Select label="AC type" value={row.acType} onChange={set('acType')} options={lookupValues(masters, LOOKUP.acType)} />
        </div>
        <Select label="Supervisor" value={row.supervisor} onChange={set('supervisor')} options={masters.supervisors.map((s) => s.name)} />
        <label className="field"><span>Notes</span><textarea rows={2} value={row.notes} onChange={(e) => set('notes')(e.target.value)} /></label>
        {error && <p className="form-error" role="alert">{error}</p>}
        <footer className="form-actions">
          {initial && onDelete && <button type="button" className="danger-button" onClick={() => { if (confirm(`Delete site ${initial.siteId}? Snags keep their Site ID.`)) void onDelete(initial) }}>Delete</button>}
          <span className="spacer" />
          <button type="button" className="ghost-button" onClick={onClose}>Cancel</button>
          <button type="submit" className="primary-button">Save site</button>
        </footer>
      </form>
    </Modal>
  )
}
