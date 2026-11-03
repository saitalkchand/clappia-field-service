import { useMemo, useState, type FormEvent } from 'react'
import { EmptyState, Input, Modal, Select } from '../components/ui.tsx'
import { aed, matches, today } from '../lib/format.ts'
import { LOOKUP, lookupValues, usageFields, type ConsumableUsage } from '../lib/schema.ts'
import type { PageProps } from './types.ts'

const blank = () => Object.fromEntries(usageFields.map((f) => [f.key, ''])) as ConsumableUsage

export function ConsumablesPage({ session, data, actions, filter, setFilter }: PageProps) {
  const { masters, usage, sites, snags } = data
  const { can } = session
  const [editing, setEditing] = useState<ConsumableUsage | 'new' | null>(filter.create && can['usage.create'] ? 'new' : null)
  const [category, setCategory] = useState('')
  const categoryOf = useMemo(() => new Map(masters.consumables.map((c) => [c.item, c.category])), [masters.consumables])
  const categories = [...new Set(masters.consumables.map((c) => c.category))].sort()

  const rows = usage
    .filter((u) => matches(filter.search ?? '', [u.item, u.siteId, u.ttNo, u.workDescription, u.technician]))
    .filter((u) => !category || categoryOf.get(u.item) === category)
    .sort((a, b) => b.date.localeCompare(a.date) || b.entryId.localeCompare(a.entryId))

  const totalQty = usage.reduce((sum, u) => sum + (Number(u.qty) || 0), 0)
  const totalSpend = usage.reduce((sum, u) => sum + (Number(u.amount) || 0), 0)
  const usedByItem = usage.reduce<Record<string, number>>((acc, u) => ({ ...acc, [u.item]: (acc[u.item] ?? 0) + (Number(u.qty) || 0) }), {})
  const catalog = masters.consumables
    .filter((c) => (!category || c.category === category) && matches(filter.search ?? '', [c.item]))

  return (
    <>
      <section className="kpis">
        <div className="kpi"><span>Usage entries</span><strong>{usage.length}</strong></div>
        <div className="kpi"><span>Units consumed</span><strong>{totalQty.toLocaleString()}</strong></div>
        <div className="kpi"><span>Recorded spend</span><strong>{aed(totalSpend)}</strong></div>
        <div className="kpi"><span>Catalog items</span><strong>{masters.consumables.length}</strong><small>{categories.length} categories</small></div>
      </section>

      <section className="panel">
        <header className="panel-header">
          <div><p className="eyebrow">ConsumableUsage sheet · {rows.length} entries</p><h2>Consumables used</h2></div>
          {can['usage.create'] && <button type="button" className="primary-button" onClick={() => setEditing('new')}>+ Log usage</button>}
        </header>
        <div className="filters">
          <label className="field search"><span>Search</span><input value={filter.search ?? ''} onChange={(e) => setFilter({ ...filter, search: e.target.value })} placeholder="Item, site, TT no., technician…" /></label>
          <label className="field"><span>Category</span><select value={category} onChange={(e) => setCategory(e.target.value)}><option value="">All</option>{categories.map((c) => <option key={c}>{c}</option>)}</select></label>
        </div>
        {rows.length === 0 ? (
          <EmptyState title={usage.length ? 'Nothing matches' : 'No consumables logged yet'} text={usage.length ? 'Clear a filter to see more.' : 'Log materials used on a visit; each entry becomes a row in the ConsumableUsage sheet.'} />
        ) : (
          <div className="table-wrap">
            <table className="stack">
              <thead><tr><th>Date</th><th>Site</th><th>TT no.</th><th>Item</th><th className="num">Qty</th><th className="num">Rate</th><th className="num">Amount</th><th>Snag ref.</th><th>Technician</th><th /></tr></thead>
              <tbody>{rows.map((u) => (
                <tr key={u.entryId}>
                  <td data-label="Date">{u.date}</td>
                  <td data-label="Site"><strong>{u.siteId}</strong><small className="sub">{u.region}</small></td>
                  <td data-label="TT no.">{u.ttNo || '—'}</td>
                  <td data-label="Item" className="wrap">{u.item}<small className="sub">{categoryOf.get(u.item)}{u.workDescription && ` · ${u.workDescription}`}</small></td>
                  <td data-label="Qty" className="num">{u.qty}</td>
                  <td data-label="Rate" className="num">{u.unitRate || '—'}</td>
                  <td data-label="Amount" className="num">{u.amount || '—'}</td>
                  <td data-label="Snag ref." className="mono">{u.snagRef || '—'}</td>
                  <td data-label="Technician">{u.technician || '—'}</td>
                  <td className="row-actions">{can['usage.edit'] && <button type="button" className="chip-button" onClick={() => setEditing(u)}>Edit</button>}</td>
                </tr>
              ))}</tbody>
            </table>
          </div>
        )}
      </section>

      <section className="panel">
        <header className="panel-header"><div><p className="eyebrow">M_Consumables · {catalog.length} items</p><h2>Item catalog</h2></div></header>
        <div className="catalog">
          {catalog.map((c) => (
            <div key={c.item} className="catalog-item">
              <span>{c.item}</span>
              <small>{c.category}</small>
              {usedByItem[c.item] ? <b>{usedByItem[c.item]} used</b> : null}
            </div>
          ))}
        </div>
      </section>

      {editing && (
        <UsageForm
          initial={editing === 'new' ? undefined : editing}
          data={data}
          onClose={() => setEditing(null)}
          onSave={async (row) => {
            if (editing === 'new') await actions.create('usage', row)
            else await actions.update('usage', editing.entryId, row)
            setEditing(null)
          }}
          onDelete={can['usage.delete'] ? async (row) => { await actions.remove('usage', row.entryId); setEditing(null) } : undefined}
          sites={sites}
          snagRefs={snags.filter((s) => s.status === 'OPEN').map((s) => s.referenceNo)}
          acTypes={lookupValues(masters, LOOKUP.acType)}
        />
      )}
    </>
  )
}

function UsageForm({ initial, data, sites, snagRefs, acTypes, onSave, onDelete, onClose }: {
  initial?: ConsumableUsage
  data: PageProps['data']
  sites: PageProps['data']['sites']
  snagRefs: string[]
  acTypes: string[]
  onSave: (row: ConsumableUsage) => Promise<void>
  onDelete?: (row: ConsumableUsage) => Promise<void>
  onClose: () => void
}) {
  const { masters } = data
  const [row, setRow] = useState<ConsumableUsage>(() => initial ?? { ...blank(), date: today(), qty: '1' })
  const [error, setError] = useState('')
  const [saving, setSaving] = useState(false)
  const set = (key: keyof ConsumableUsage) => (value: string) => setRow((r) => ({ ...r, [key]: value }))
  const amount = Number(row.qty) * Number(row.unitRate)

  function pickSite(siteId: string) {
    const id = siteId.toUpperCase()
    const site = sites.find((s) => s.siteId === id)
    setRow((r) => ({ ...r, siteId: id, region: site?.region || r.region, siteClass: site?.siteClass || r.siteClass, acType: site?.acType || r.acType }))
  }

  async function submit(event: FormEvent) {
    event.preventDefault()
    setSaving(true)
    setError('')
    try {
      await onSave(row)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Could not save')
      setSaving(false)
    }
  }

  return (
    <Modal wide title={initial ? `Edit ${initial.entryId}` : 'Log consumables used'} eyebrow="Consumables" onClose={onClose}>
      <form className="form" onSubmit={submit}>
        <div className="grid-3">
          <Input label="Date" type="date" required value={row.date} onChange={set('date')} />
          <Input label="Site ID" required value={row.siteId} onChange={pickSite} list="usage-sites" autoComplete="off" />
          <Select label="Region" value={row.region} onChange={set('region')} options={masters.regions.map((r) => r.code)} />
          <Input label="TT no." value={row.ttNo} onChange={set('ttNo')} />
          <Input label="Snag reference" value={row.snagRef} onChange={set('snagRef')} list="usage-snags" />
          <Input label="Technician" value={row.technician} onChange={set('technician')} list="usage-people" />
        </div>
        <Input label="Item description" required value={row.item} onChange={set('item')} list="usage-items" placeholder="Start typing to search the catalog" autoComplete="off" />
        <div className="grid-3">
          <Input label="Qty" type="number" min={0} step="any" required value={row.qty} onChange={set('qty')} />
          <Input label="Unit rate (AED)" type="number" min={0} step="0.01" value={row.unitRate} onChange={set('unitRate')} />
          <div className="field"><span>Amount (AED)</span><output className="readonly">{Number.isFinite(amount) && row.unitRate ? amount.toFixed(2) : '—'}</output></div>
          <Input label="Brand" value={row.brand} onChange={set('brand')} />
          <Input label="Model no." value={row.modelNo} onChange={set('modelNo')} />
          <Select label="AC type" value={row.acType} onChange={set('acType')} options={acTypes} />
          <Select label="Site class" value={row.siteClass} onChange={set('siteClass')} options={masters.siteClasses.map((c) => c.code)} />
        </div>
        <Input label="Work description" value={row.workDescription} onChange={set('workDescription')} />
        <Input label="Remarks" value={row.remarks} onChange={set('remarks')} />
        <datalist id="usage-items">{masters.consumables.map((c) => <option key={c.item} value={c.item}>{c.category}</option>)}</datalist>
        <datalist id="usage-sites">{sites.map((s) => <option key={s.siteId} value={s.siteId} />)}</datalist>
        <datalist id="usage-snags">{snagRefs.map((r) => <option key={r} value={r} />)}</datalist>
        <datalist id="usage-people">{[...new Set(masters.teams.map((t) => t.member).filter(Boolean))].map((m) => <option key={m} value={m} />)}</datalist>
        {error && <p className="form-error" role="alert">{error}</p>}
        <footer className="form-actions">
          {initial && onDelete && <button type="button" className="danger-button" disabled={saving} onClick={() => { if (confirm(`Delete ${initial.entryId}?`)) void onDelete(initial) }}>Delete</button>}
          <span className="spacer" />
          <button type="button" className="ghost-button" onClick={onClose}>Cancel</button>
          <button type="submit" className="primary-button" disabled={saving}>{saving ? 'Saving…' : 'Save'}</button>
        </footer>
      </form>
    </Modal>
  )
}
