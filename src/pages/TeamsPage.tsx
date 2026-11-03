import { useState } from 'react'
import { count, matches } from '../lib/format.ts'
import type { PageProps } from './types.ts'

// Some roster names are typed in capitals; show them in title case (display only).
const displayName = (s: string) => (s && s === s.toUpperCase() ? s.toLowerCase().replace(/\b\p{L}/gu, (c) => c.toUpperCase()) : s)
const initials = (s: string) => s.split(/\s+/).filter(Boolean).slice(0, 2).map((p) => p[0].toUpperCase()).join('')

const icons = {
  user: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm-7 8a7 7 0 0 1 14 0',
  truck: 'M3 6h11v9H3zM14 9h4l3 3v3h-7M7 18.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm10 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z',
  team: 'M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zm-6 9a6 6 0 0 1 12 0m2-9a3 3 0 1 0 0-6m1.5 15H21a5 5 0 0 0-3.5-4.8',
  shield: 'M12 3 5 6v5c0 4.4 3 8.3 7 9.5 4-1.2 7-5.1 7-9.5V6l-7-3z',
  alert: 'M12 3 2 20h20L12 3zm0 6v5m0 3v.5',
}

function Icon({ d }: { d: string }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d={d} /></svg>
}

export function TeamsPage({ data, filter, setFilter, go }: PageProps) {
  const { masters, snags } = data
  const [region, setRegion] = useState('')
  const [teamType, setTeamType] = useState('')

  const openByAssignee = count(snags.filter((s) => s.status.toUpperCase() === 'OPEN' && s.assigned), (s) => s.assigned.toLowerCase())
  const openFor = (name: string) => openByAssignee[name.toLowerCase()] ?? 0

  const allRegions = [...new Set(masters.teams.map((t) => t.region).filter(Boolean))]
  const teamTypes = [...new Set(masters.teams.map((t) => t.teamType).filter(Boolean))].sort()
  const regionCounts = count(masters.teams, (t) => t.region)

  const teams = masters.teams
    .filter((t) => !region || t.region === region)
    .filter((t) => !teamType || t.teamType === teamType)
    .filter((t) => matches(filter.search ?? '', [t.supervisor, t.member, t.vehicle, t.region, t.teamType]))
  const regions = allRegions.filter((r) => teams.some((t) => t.region === r))

  const vehicles = new Set(masters.teams.map((t) => t.vehicle).filter(Boolean)).size
  const busyCrews = masters.teams.filter((t) => openFor(t.supervisor) > 0).length
  const totalAssigned = masters.teams.reduce((n, t) => n + openFor(t.supervisor), 0)
  const crewCount = count(masters.teams, (t) => t.supervisor.toLowerCase())

  const supervisorRegions = [...new Set(masters.supervisors.map((s) => s.region || 'Unassigned'))]

  return (
    <div className="teams-page">
      <section className="team-stats">
        <div className="team-stat"><span className="stat-icon blue"><Icon d={icons.team} /></span><div><strong>{masters.teams.length}</strong><span>Mobile crews</span></div></div>
        <div className="team-stat"><span className="stat-icon sky"><Icon d={icons.shield} /></span><div><strong>{masters.supervisors.length}</strong><span>Supervisors</span></div></div>
        <div className="team-stat"><span className="stat-icon green"><Icon d={icons.truck} /></span><div><strong>{vehicles}</strong><span>Vehicles</span></div></div>
        <div className="team-stat"><span className="stat-icon amber"><Icon d={icons.alert} /></span><div><strong>{totalAssigned}</strong><span>Open snags across {busyCrews} crew{busyCrews === 1 ? '' : 's'}</span></div></div>
      </section>

      <section className="panel">
        <header className="panel-header">
          <div><p className="eyebrow">M_Teams · {teams.length} of {masters.teams.length} crews</p><h2>Mobile PM teams</h2></div>
          <label className="field search compact"><span className="sr-only">Search teams</span><input value={filter.search ?? ''} onChange={(e) => setFilter({ ...filter, search: e.target.value })} placeholder="Search name, vehicle, type…" /></label>
        </header>

        <div className="team-toolbar">
          <div className="segmented" role="group" aria-label="Region">
            <button type="button" aria-pressed={!region} onClick={() => setRegion('')}>All<span>{masters.teams.length}</span></button>
            {allRegions.map((r) => (
              <button key={r} type="button" aria-pressed={region === r} onClick={() => setRegion(region === r ? '' : r)}>{r}<span>{regionCounts[r]}</span></button>
            ))}
          </div>
          {teamTypes.length > 1 && (
            <label className="field compact"><span className="sr-only">Team type</span>
              <select value={teamType} onChange={(e) => setTeamType(e.target.value)}>
                <option value="">All team types</option>
                {teamTypes.map((t) => <option key={t}>{t}</option>)}
              </select>
            </label>
          )}
        </div>

        {teams.length === 0 && <p className="muted chart-empty">No crews match these filters.</p>}
        {regions.map((r) => {
          const list = teams.filter((t) => t.region === r)
          return (
            <div key={r} className="team-region">
              <h3>{r}<span>{list.length} crew{list.length === 1 ? '' : 's'}</span></h3>
              <div className="team-grid">
                {list.map((t) => {
                  const open = openFor(t.supervisor)
                  return (
                    <article key={`${t.supervisor}-${t.member}-${t.vehicle}`} className="team-card">
                      <header>
                        <div className="avatar" aria-hidden="true">{initials(t.supervisor)}</div>
                        <div className="team-card-title">
                          <strong>{displayName(t.supervisor)}</strong>
                          <small>Supervisor · {t.region}</small>
                        </div>
                      </header>
                      <dl>
                        <div><dt><Icon d={icons.user} />Driver / technician</dt><dd>{t.member ? displayName(t.member) : <span className="muted">Not listed</span>}</dd></div>
                        <div><dt><Icon d={icons.truck} />Vehicle</dt><dd>{t.vehicle ? <span className="plate">{t.vehicle}</span> : <span className="muted">—</span>}</dd></div>
                      </dl>
                      <footer>
                        {t.teamType ? <span className="pill">{t.teamType}</span> : <span />}
                        {open > 0
                          ? <button type="button" className="team-load busy" onClick={() => go('snags', { status: 'OPEN', search: t.supervisor })}>{open} open snag{open > 1 ? 's' : ''} →</button>
                          : <span className="team-load">No open snags</span>}
                      </footer>
                    </article>
                  )
                })}
              </div>
            </div>
          )
        })}
      </section>

      <section className="panel">
        <header className="panel-header"><div><p className="eyebrow">M_Supervisors · {masters.supervisors.length}</p><h2>Supervisors by region</h2></div></header>
        <div className="supervisor-columns">
          {supervisorRegions.map((r) => {
            const list = masters.supervisors.filter((s) => (s.region || 'Unassigned') === r)
            return (
              <div key={r} className="supervisor-group">
                <h3>{r}<span>{list.length}</span></h3>
                <ul>
                  {list.map((s) => {
                    const crews = crewCount[s.name.toLowerCase()] ?? 0
                    const open = openFor(s.name)
                    return (
                      <li key={s.name}>
                        <span className="avatar small" aria-hidden="true">{initials(s.name)}</span>
                        <span className="supervisor-name">{displayName(s.name)}<small>{crews ? `${crews} crew${crews > 1 ? 's' : ''}` : 'No crew in roster'}</small></span>
                        {open > 0 && <span className="count-pill" title="Open snags assigned">{open}</span>}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
