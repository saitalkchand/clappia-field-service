import { matches } from '../lib/format.ts'
import type { PageProps } from './types.ts'

export function TeamsPage({ data, filter, setFilter }: PageProps) {
  const { masters, snags } = data
  const teams = masters.teams.filter((t) => matches(filter.search ?? '', [t.supervisor, t.member, t.vehicle, t.region]))
  const regions = [...new Set(teams.map((t) => t.region))]
  const assignedOpen = (name: string) => snags.filter((s) => s.status === 'OPEN' && s.assigned.toLowerCase() === name.toLowerCase()).length

  return (
    <>
      <section className="panel">
        <header className="panel-header">
          <div><p className="eyebrow">M_Teams · {masters.teams.length} crews</p><h2>Mobile PM teams</h2></div>
          <label className="field search compact"><span className="sr-only">Search teams</span><input value={filter.search ?? ''} onChange={(e) => setFilter({ ...filter, search: e.target.value })} placeholder="Search name or vehicle…" /></label>
        </header>
        {regions.map((region) => (
          <div key={region} className="team-region">
            <h3>{region}</h3>
            <div className="team-grid">
              {teams.filter((t) => t.region === region).map((t) => (
                <article key={`${t.supervisor}-${t.member}`} className="team-card">
                  <div className="avatar" aria-hidden="true">{t.supervisor.split(/\s+/).slice(0, 2).map((p) => p[0]).join('')}</div>
                  <div>
                    <strong>{t.supervisor}</strong>
                    <p>{t.member || 'No driver / technician listed'}</p>
                    <div className="meta">{t.teamType && <span className="pill">{t.teamType}</span>}{t.vehicle && <span className="mono">{t.vehicle}</span>}</div>
                  </div>
                  {assignedOpen(t.supervisor) > 0 && <span className="count" title="Open snags assigned">{assignedOpen(t.supervisor)}</span>}
                </article>
              ))}
            </div>
          </div>
        ))}
      </section>
      <section className="panel">
        <header className="panel-header"><div><p className="eyebrow">M_Supervisors · {masters.supervisors.length}</p><h2>Supervisor list</h2></div></header>
        <ul className="chip-list">
          {masters.supervisors.map((s) => <li key={s.name}>{s.name}{s.region && <small>{s.region}</small>}</li>)}
        </ul>
      </section>
    </>
  )
}
