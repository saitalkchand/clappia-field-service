import { useMemo, useState, type FormEvent } from 'react'
import { LOOKUP, lookupValues, severityFor, snagFields, type Masters, type Site, type Snag } from '../lib/schema.ts'
import { today } from '../lib/format.ts'
import { Input, Modal, Select, SeverityBadge } from './ui.tsx'

const blank = () => Object.fromEntries(snagFields.map((f) => [f.key, ''])) as Snag

export function SnagForm({ masters, sites, initial, canSetStatus, onSave, onDelete, onClose }: {
  masters: Masters
  canSetStatus: boolean
  sites: Site[]
  initial?: Snag
  onSave: (row: Snag) => Promise<void>
  onDelete?: (row: Snag) => Promise<void>
  onClose: () => void
}) {
  const [row, setRow] = useState<Snag>(() => initial ?? { ...blank(), dateOfPm: today(), status: 'OPEN' })
  const [manualSeverity, setManualSeverity] = useState(Boolean(initial?.severity))
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const set = (key: keyof Snag) => (value: string) => setRow((r) => ({ ...r, [key]: value }))

  const descriptions = useMemo(
    () => masters.descriptions.filter((d) => d.category === row.classification).map((d) => d.description),
    [masters.descriptions, row.classification],
  )
  const autoSeverity = severityFor(masters, row.siteClass, row.classification, row.snag)
  const isNoSnag = row.classification === 'NO SNAG'
  const severity = isNoSnag ? 'NA' : manualSeverity ? row.severity : autoSeverity
  const showBattery = ['BATTERY', 'DC SYSTEM', 'HYBRID'].includes(row.classification)
  const people = [...new Set([...masters.supervisors.map((s) => s.name), ...masters.teams.map((t) => t.member).filter(Boolean)])]

  function pickSite(siteId: string) {
    const id = siteId.toUpperCase()
    const site = sites.find((s) => s.siteId === id)
    setRow((r) => site
      ? { ...r, siteId: id, region: site.region || r.region, siteType: site.siteType || r.siteType, siteClass: site.siteClass || r.siteClass, colocated: site.colocated || r.colocated }
      : { ...r, siteId: id })
  }

  async function submit(event: FormEvent) {
    event.preventDefault()
    setSaving(true)
    setError('')
    try {
      await onSave({ ...row, severity: isNoSnag ? 'NA' : severity, status: isNoSnag ? 'NA' : row.status })
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Could not save')
      setSaving(false)
    }
  }

  return (
    <Modal wide title={initial ? `Edit snag ${initial.referenceNo}` : 'Log a new snag'} eyebrow="Snag tracker" onClose={onClose}>
      <form className="form" onSubmit={submit}>
        <fieldset>
          <legend>Site</legend>
          <div className="grid-3">
            <Input label="Site ID" required value={row.siteId} onChange={pickSite} list="site-ids" placeholder="e.g. SHJ2031" autoComplete="off" />
            <Select label="Region" required value={row.region} onChange={set('region')} options={masters.regions.map((r) => ({ value: r.code, label: `${r.code} · ${r.name}` }))} />
            <Select label="Site class" value={row.siteClass} onChange={set('siteClass')} options={masters.siteClasses.map((c) => c.code)} />
            <Select label="Site type" value={row.siteType} onChange={set('siteType')} options={masters.siteTypes.map((t) => t.code)} />
            <Input label="Colocated" value={row.colocated} onChange={set('colocated')} placeholder="Co-located site ID" />
            <Input label="PM target week" value={row.pmTargetWeek} onChange={set('pmTargetWeek')} placeholder="e.g. WK43" />
          </div>
          <datalist id="site-ids">{sites.map((s) => <option key={s.siteId} value={s.siteId}>{s.region} · {s.siteClass}</option>)}</datalist>
        </fieldset>

        <fieldset>
          <legend>Snag</legend>
          <div className="grid-3">
            <Select label="Snag classification" required value={row.classification} onChange={(v) => setRow((r) => ({ ...r, classification: v, snag: v === 'NO SNAG' ? 'NO SNAGS ON SITE' : '' }))} options={masters.categories.map((c) => c.code)} />
            <Select label="Snag" required value={row.snag} onChange={set('snag')} options={descriptions} placeholder={row.classification ? 'Select snag…' : 'Pick a classification first'} />
            <div className="field">
              <span>Severity</span>
              {manualSeverity && !isNoSnag ? (
                <select value={row.severity} onChange={(e) => set('severity')(e.target.value)} aria-label="Severity">
                  <option value="">Select…</option>
                  {lookupValues(masters, LOOKUP.severity).map((s) => <option key={s}>{s}</option>)}
                </select>
              ) : (
                <div className="severity-auto"><SeverityBadge value={severity} /><small>{severity ? 'From severity matrix' : 'Needs class + snag'}</small></div>
              )}
              {!isNoSnag && <button type="button" className="link-button" onClick={() => { setManualSeverity((m) => !m); set('severity')(autoSeverity) }}>{manualSeverity ? 'Use matrix value' : 'Override'}</button>}
            </div>
          </div>
          <label className="field"><span>Remarks</span><textarea value={row.remarks} onChange={(e) => set('remarks')(e.target.value)} rows={2} placeholder="What was found on site" /></label>
          {showBattery && (
            <div className="grid-3">
              <Input label="# of faulty strings" type="number" min={0} value={row.faultyStrings} onChange={set('faultyStrings')} />
              <Input label="# of faulty cells" type="number" min={0} value={row.faultyCells} onChange={set('faultyCells')} />
              <Input label="Error identifier" value={row.errorIdentifier} onChange={set('errorIdentifier')} />
            </div>
          )}
        </fieldset>

        <fieldset>
          <legend>Ownership & status</legend>
          <div className="grid-3">
            <Input label="Date of PM" type="date" value={row.dateOfPm} onChange={set('dateOfPm')} />
            <Input label="Snag opened by" value={row.openedBy} onChange={set('openedBy')} list="people" />
            <Input label="Assigned" value={row.assigned} onChange={set('assigned')} list="people" />
            <Select label="Action owner" value={row.actionOwner} onChange={set('actionOwner')} options={lookupValues(masters, LOOKUP.actionOwner)} />
            {canSetStatus && <Select label="Snag status" value={isNoSnag ? 'NA' : row.status} onChange={set('status')} options={lookupValues(masters, LOOKUP.status)} />}
            <Input label="Timeline" value={row.timeline} onChange={set('timeline')} placeholder="Target / team" />
            {row.status === 'CLOSED' && <>
              <Input label="Closing date" type="date" value={row.closingDate} onChange={set('closingDate')} />
              <Input label="Closed by" value={row.closedBy} onChange={set('closedBy')} list="people" />
            </>}
            <Input label="Snags reference no." value={row.referenceNo} onChange={set('referenceNo')} placeholder="Auto if blank" />
          </div>
          <label className="field"><span>Consumables used</span><input value={row.consumablesUsed} onChange={(e) => set('consumablesUsed')(e.target.value)} placeholder="e.g. Gas-R22 x2" /></label>
          <datalist id="people">{people.map((p) => <option key={p} value={p} />)}</datalist>
        </fieldset>

        {error && <p className="form-error" role="alert">{error}</p>}
        <footer className="form-actions">
          {initial && onDelete && <button type="button" className="danger-button" disabled={saving} onClick={() => { if (confirm(`Delete snag ${initial.referenceNo} from the workbook?`)) void onDelete(initial) }}>Delete</button>}
          <span className="spacer" />
          <button type="button" className="ghost-button" onClick={onClose}>Cancel</button>
          <button type="submit" className="primary-button" disabled={saving}>{saving ? 'Saving…' : initial ? 'Save changes' : 'Log snag'}</button>
        </footer>
      </form>
    </Modal>
  )
}
