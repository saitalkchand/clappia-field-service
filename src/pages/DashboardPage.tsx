import { SeverityBadge, brandAsset } from '../components/ui.tsx'
import { aed, count, today } from '../lib/format.ts'
import type { Snag } from '../lib/schema.ts'
import type { PageProps } from './types.ts'

const SEVERITIES = ['CRITICAL', 'MAJOR', 'MINOR', 'NA'] as const
const SEV_RANK: Record<string, number> = { CRITICAL: 0, MAJOR: 1, MINOR: 2 }
const sevClass = (s: string) => ({ CRITICAL: 'critical', MAJOR: 'major', MINOR: 'minor' })[s] ?? 'na'
const sevLabel = (s: string) => (s === 'NA' ? 'Not set' : s[0] + s.slice(1).toLowerCase())
const DAY = 86_400_000
const TREND_DAYS = 30

const icons = {
  alert: 'M12 3 2 20h20L12 3zm0 6v5m0 3v.5',
  check: 'M20 6 9 17l-5-5',
  pin: 'M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12zm0-9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z',
  box: 'M4 7l8-4 8 4v10l-8 4-8-4V7zm0 0 8 4 8-4M12 11v10',
  plus: 'M12 5v14M5 12h14',
}

function Icon({ d }: { d: string }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d={d} /></svg>
}

const dayOf = (value: string) => value.slice(0, 10)
const ageDays = (s: Snag) => {
  const from = dayOf(s.dateOfPm || s.createdAt)
  return from ? Math.max(0, Math.round((Date.parse(today()) - Date.parse(from)) / DAY)) : 0
}
const pct = (n: number, total: number) => (total ? Math.round((n / total) * 100) : 0)

function greeting() {
  const h = new Date().getHours()
  return h < 12 ? 'Good morning' : h < 17 ? 'Good afternoon' : 'Good evening'
}

export function DashboardPage({ session, data, go }: PageProps) {
  const { can, user } = session
  const { masters, snags, usage, sites } = data
  const isOpen = (s: Snag) => s.status.toUpperCase() === 'OPEN'
  const open = snags.filter(isOpen)
  const closed = snags.filter((s) => s.status.toUpperCase() === 'CLOSED')
  const critical = open.filter((s) => s.severity.toUpperCase() === 'CRITICAL')
  const spend = usage.reduce((sum, u) => sum + (Number(u.amount) || 0), 0)
  const units = usage.reduce((sum, u) => sum + (Number(u.qty) || 0), 0)
  const closeRate = pct(closed.length, open.length + closed.length)
  const sitesWithOpen = new Set(open.map((s) => s.siteId)).size

  // 30-day trend: snags opened (by PM date / created) vs closed (by closing date)
  const start = Date.parse(today()) - (TREND_DAYS - 1) * DAY
  const days = Array.from({ length: TREND_DAYS }, (_, i) => new Date(start + i * DAY).toISOString().slice(0, 10))
  const openedByDay = count(snags, (s) => dayOf(s.dateOfPm || s.createdAt))
  const closedByDay = count(closed, (s) => s.closingDate)
  const trend = days.map((d) => ({ d, opened: openedByDay[d] ?? 0, closed: closedByDay[d] ?? 0 }))
  const trendMax = Math.max(2, ...trend.flatMap((t) => [t.opened, t.closed]))
  const trendTicks = [trendMax, Math.round(trendMax / 2), 0]
  const openedTotal = trend.reduce((n, t) => n + t.opened, 0)
  const closedTotal = trend.reduce((n, t) => n + t.closed, 0)

  const severityMix = SEVERITIES.map((sev) => ({ sev, n: open.filter((s) => (s.severity.toUpperCase() || 'NA') === sev).length }))

  const attention = open
    .filter((s) => s.severity.toUpperCase() in SEV_RANK && s.severity.toUpperCase() !== 'MINOR')
    .sort((a, b) => SEV_RANK[a.severity.toUpperCase()] - SEV_RANK[b.severity.toUpperCase()] || ageDays(b) - ageDays(a))
    .slice(0, 6)

  const regions = masters.regions.map((r) => {
    const rows = open.filter((s) => s.region === r.code)
    return { ...r, n: rows.length, parts: SEVERITIES.map((sev) => ({ sev, n: rows.filter((s) => (s.severity.toUpperCase() || 'NA') === sev).length })) }
  })

  const byCategory = Object.entries(count(open, (s) => s.classification))
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)
    .map(([category, total]) => ({
      category,
      total,
      parts: SEVERITIES.map((sev) => ({ sev, n: open.filter((s) => s.classification === category && (s.severity.toUpperCase() || 'NA') === sev).length })),
    }))
  const maxCategory = Math.max(1, ...byCategory.map((c) => c.total))

  const itemTotals = usage.reduce<Record<string, { qty: number; amount: number }>>((acc, u) => {
    const t = acc[u.item] ?? { qty: 0, amount: 0 }
    acc[u.item] = { qty: t.qty + (Number(u.qty) || 0), amount: t.amount + (Number(u.amount) || 0) }
    return acc
  }, {})
  const topItems = Object.entries(itemTotals).sort((a, b) => b[1].qty - a[1].qty).slice(0, 5)
  const topMax = Math.max(1, ...topItems.map(([, t]) => t.qty))

  const headline = open.length === 0
    ? 'No open snags right now.'
    : `${open.length} open snag${open.length > 1 ? 's' : ''} across ${sitesWithOpen} site${sitesWithOpen > 1 ? 's' : ''}${critical.length ? ` — ${critical.length} critical ${critical.length > 1 ? 'need' : 'needs'} attention.` : '.'}`

  return (
    <div className="dashboard">
      <section className="hero">
        <div className="hero-text">
          <p className="hero-date">{new Date().toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</p>
          <h2>{greeting()}, {user.name.split(/\s+/)[0]}</h2>
          <p>{headline}</p>
        </div>
        <div className="hero-actions">
          {can['snags.create'] && <button type="button" className="hero-button primary" onClick={() => go('snags', { create: true })}><Icon d={icons.plus} />Log snag</button>}
          {can['usage.create'] && <button type="button" className="hero-button" onClick={() => go('consumables', { create: true })}><Icon d={icons.plus} />Log consumables</button>}
        </div>
        <img className="hero-mark" src={brandAsset('clappia-mark.svg')} alt="" />
      </section>

      <section className="stat-grid">
        <button type="button" className="stat" onClick={() => go('snags', { status: 'OPEN' })}>
          <span className="stat-icon blue"><Icon d={icons.alert} /></span>
          <span className="stat-label">Open snags</span>
          <strong>{open.length}</strong>
          <span className="stat-foot">{critical.length > 0 ? <><i className="dot sev-critical" />{critical.length} critical</> : 'None critical'}</span>
        </button>
        <button type="button" className="stat" onClick={() => go('snags', { status: 'CLOSED' })}>
          <span className="stat-icon green"><Icon d={icons.check} /></span>
          <span className="stat-label">Close rate</span>
          <strong>{closeRate}%</strong>
          <span className="meter" role="img" aria-label={`${closeRate}% of snags closed`}><span style={{ width: `${closeRate}%` }} /></span>
          <span className="stat-foot">{closed.length} closed of {open.length + closed.length}</span>
        </button>
        <button type="button" className="stat" onClick={() => go('sites')}>
          <span className="stat-icon sky"><Icon d={icons.pin} /></span>
          <span className="stat-label">Sites</span>
          <strong>{sites.length}</strong>
          <span className="stat-foot">{sitesWithOpen} with open snags</span>
        </button>
        <button type="button" className="stat" onClick={() => go('consumables')}>
          <span className="stat-icon green"><Icon d={icons.box} /></span>
          <span className="stat-label">Consumables spend</span>
          <strong>{aed(spend)}</strong>
          <span className="stat-foot">{units.toLocaleString()} units · {usage.length} entries</span>
        </button>
      </section>

      {snags.length === 0 && (
        <section className="panel getting-started">
          <div>
            <p className="eyebrow">Excel database ready</p>
            <h2>Master data imported — start logging field work</h2>
            <p className="muted">
              {masters.categories.length} snag classifications · {masters.descriptions.length} snag types · {masters.severityRules.length} severity rules ·{' '}
              {masters.consumables.length} consumables · {masters.teams.length} teams · {masters.regions.length} regions
            </p>
          </div>
          <ol className="steps">
            <li><button type="button" className="link-button" onClick={() => go('sites')}>Register sites</button><span>so forms auto-fill region and class</span></li>
            <li><button type="button" className="link-button" onClick={() => go('snags', { create: true })}>Log snags</button><span>severity is set from the class matrix</span></li>
            <li><button type="button" className="link-button" onClick={() => go('consumables', { create: true })}>Log consumables</button><span>quantities and AED cost per site</span></li>
          </ol>
        </section>
      )}

      <section className="dash-row wide-left">
        <div className="panel">
          <header className="panel-header">
            <div><p className="eyebrow">Last {TREND_DAYS} days</p><h2>Snags opened vs closed</h2></div>
            <div className="trend-totals">
              <span><i className="swatch series-opened" />Opened <b>{openedTotal}</b></span>
              <span><i className="swatch series-closed" />Closed <b>{closedTotal}</b></span>
            </div>
          </header>
          <div className="trend" role="img" aria-label={`Over the last ${TREND_DAYS} days ${openedTotal} snags were opened and ${closedTotal} closed`}>
            <div className="trend-axis" aria-hidden="true">{trendTicks.map((t) => <span key={t}>{t}</span>)}</div>
            <div className="trend-plot">
              <div className="trend-grid" aria-hidden="true"><span /><span /><span /></div>
              {trend.map((t) => (
                <div key={t.d} className="trend-day" data-tip={`${new Date(t.d).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })} · ${t.opened} opened · ${t.closed} closed`}>
                  <span className="col series-opened" style={{ height: `${(t.opened / trendMax) * 100}%` }} />
                  <span className="col series-closed" style={{ height: `${(t.closed / trendMax) * 100}%` }} />
                </div>
              ))}
            </div>
            <div className="trend-labels" aria-hidden="true">
              {trend.map((t, i) => <span key={t.d}>{(TREND_DAYS - 1 - i) % 7 === 0 ? new Date(t.d).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' }) : ''}</span>)}
            </div>
          </div>
        </div>

        <div className="panel">
          <header className="panel-header"><div><p className="eyebrow">Open snags</p><h2>Severity mix</h2></div></header>
          <div className="mix-total"><strong>{open.length}</strong><span>open</span></div>
          <div className="mix-bar" role="img" aria-label={severityMix.map((m) => `${m.n} ${sevLabel(m.sev)}`).join(', ')}>
            {open.length === 0 ? <span className="mix-empty" /> : severityMix.filter((m) => m.n).map((m) => (
              <span key={m.sev} className={`seg sev-${sevClass(m.sev)}`} style={{ flexGrow: m.n }} data-tip={`${sevLabel(m.sev)}: ${m.n}`} />
            ))}
          </div>
          <ul className="mix-list">
            {severityMix.map((m) => (
              <li key={m.sev}>
                <i className={`swatch sev-${sevClass(m.sev)}`} />
                <span>{sevLabel(m.sev)}</span>
                <b>{m.n}</b>
                <small>{pct(m.n, open.length)}%</small>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="dash-row wide-left">
        <div className="panel">
          <header className="panel-header">
            <div><p className="eyebrow">Critical & major · oldest first</p><h2>Needs attention</h2></div>
            <button type="button" className="ghost-button" onClick={() => go('snags', { status: 'OPEN' })}>All open snags</button>
          </header>
          {attention.length === 0 ? (
            <div className="all-clear"><span className="stat-icon green"><Icon d={icons.check} /></span><div><strong>All clear</strong><p className="muted">No open critical or major snags.</p></div></div>
          ) : (
            <ul className="attention">
              {attention.map((s) => (
                <li key={s.sn}>
                  <span className={`attention-bar sev-${sevClass(s.severity.toUpperCase())}`} aria-hidden="true" />
                  <div className="attention-main">
                    <div><strong>{s.siteId}</strong><span className="muted"> · {s.region}{s.siteClass && ` · ${s.siteClass}`}</span></div>
                    <p>{s.classification} — {s.snag}</p>
                  </div>
                  <div className="attention-meta">
                    <SeverityBadge value={s.severity} />
                    <small>{ageDays(s) === 0 ? 'Today' : `${ageDays(s)}d open`}{s.actionOwner && ` · ${s.actionOwner}`}</small>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="panel">
          <header className="panel-header"><div><p className="eyebrow">Open snags</p><h2>By region</h2></div></header>
          <div className="region-list">
            {regions.map((r) => (
              <button key={r.code} type="button" className="region-row" onClick={() => go('snags', { status: 'OPEN', search: '' })}>
                <span className="region-code">{r.code}</span>
                <span className="region-body">
                  <span className="region-name">{r.name}</span>
                  <span className="region-bar">
                    {r.n === 0 ? <span className="mix-empty" /> : r.parts.filter((p) => p.n).map((p) => (
                      <span key={p.sev} className={`seg sev-${sevClass(p.sev)}`} style={{ flexGrow: p.n }} data-tip={`${r.name} · ${sevLabel(p.sev)}: ${p.n}`} />
                    ))}
                  </span>
                </span>
                <span className="region-count">{r.n}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="dash-row">
        <div className="panel">
          <header className="panel-header"><div><p className="eyebrow">Open snags</p><h2>Top classifications</h2></div></header>
          <div className="legend">
            {SEVERITIES.map((s) => <span key={s}><i className={`swatch sev-${sevClass(s)}`} />{sevLabel(s)}</span>)}
          </div>
          {byCategory.length === 0 ? <p className="muted chart-empty">No open snags.</p> : (
            <div className="hbars" role="table" aria-label="Open snags by classification and severity">
              {byCategory.map((c) => (
                <div key={c.category} className="hbar-row" role="row">
                  <span className="hbar-label" role="rowheader" title={c.category}>{c.category}</span>
                  <span className="hbar-track" role="cell" aria-label={`${c.category}: ${c.parts.filter((p) => p.n).map((p) => `${p.n} ${p.sev}`).join(', ')}`}>
                    <span className="hbar-stack" style={{ width: `${(c.total / maxCategory) * 100}%` }}>
                      {c.parts.filter((p) => p.n).map((p) => (
                        <span key={p.sev} className={`seg sev-${sevClass(p.sev)}`} style={{ flexGrow: p.n }} data-tip={`${c.category} · ${sevLabel(p.sev)}: ${p.n}`} />
                      ))}
                    </span>
                  </span>
                  <span className="hbar-value" role="cell">{c.total}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="panel">
          <header className="panel-header">
            <div><p className="eyebrow">Consumables</p><h2>Most used items</h2></div>
            <button type="button" className="ghost-button" onClick={() => go('consumables')}>View log</button>
          </header>
          {topItems.length === 0 ? <p className="muted chart-empty">No consumables logged yet.</p> : (
            <ol className="top-items">
              {topItems.map(([item, t]) => (
                <li key={item}>
                  <div className="top-item-head"><span>{item}</span><b>{t.qty}</b></div>
                  <span className="top-item-bar"><span style={{ width: `${(t.qty / topMax) * 100}%` }} /></span>
                  {t.amount > 0 && <small>{aed(t.amount)}</small>}
                </li>
              ))}
            </ol>
          )}
        </div>
      </section>
    </div>
  )
}
