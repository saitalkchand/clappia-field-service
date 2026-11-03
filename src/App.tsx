import { useCallback, useEffect, useRef, useState, type FormEvent } from 'react'
import './App.css'
import { Input, Logo, Modal, brandAsset } from './components/ui.tsx'
import { ApiError, STATIC_DEMO, api, setUnauthorizedHandler } from './lib/api.ts'
import { PASSWORD_MIN, type Permission, type Session } from './lib/auth.ts'
import type { TableName, TableRow } from './lib/schema.ts'
import { ConsumablesPage } from './pages/ConsumablesPage.tsx'
import { DashboardPage } from './pages/DashboardPage.tsx'
import { LoginPage } from './pages/LoginPage.tsx'
import { MastersPage } from './pages/MastersPage.tsx'
import { SitesPage } from './pages/SitesPage.tsx'
import { SnagsPage } from './pages/SnagsPage.tsx'
import { TeamsPage } from './pages/TeamsPage.tsx'
import { UsersPage } from './pages/UsersPage.tsx'
import type { Actions, AppData, Filter, PageKey, PageProps } from './pages/types.ts'

const nav: { key: PageKey; label: string; icon: string; title: string; requires?: Permission }[] = [
  { key: 'dashboard', label: 'Dashboard', icon: 'M3 3h7v9H3zM14 3h7v5h-7zM14 12h7v9h-7zM3 16h7v5H3z', title: 'Operations dashboard' },
  { key: 'snags', label: 'Snag Tracker', icon: 'M12 3 2 20h20L12 3zm0 6v5m0 3v.5', title: 'Snag tracker' },
  { key: 'consumables', label: 'Consumables', icon: 'M4 7l8-4 8 4v10l-8 4-8-4V7zm0 0 8 4 8-4M12 11v10', title: 'Consumables' },
  { key: 'sites', label: 'Sites', icon: 'M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12zm0-9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z', title: 'Sites' },
  { key: 'teams', label: 'Teams', icon: 'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm-7 10a7 7 0 0 1 14 0M17 11a3 3 0 1 0 0-6M22 20a5 5 0 0 0-4-4.9', title: 'Teams & supervisors' },
  { key: 'masters', label: 'Master Data', icon: 'M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zm0 0v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3', title: 'Master data' },
  { key: 'users', label: 'Users & Roles', icon: 'M12 3 4 6v6c0 4.5 3.4 8.3 8 9 4.6-.7 8-4.5 8-9V6l-8-3zm-3 9 2 2 4-4', title: 'Users & roles', requires: 'users.manage' },
]

const pageFromHash = (): PageKey => nav.find((n) => `#${n.key}` === window.location.hash)?.key ?? 'dashboard'

const readTheme = () => {
  try { return localStorage.getItem('clappia-theme') === 'dark' } catch { return false }
}

type AuthState = { status: 'checking' } | { status: 'signed-out'; setupRequired: boolean } | { status: 'signed-in'; session: Session } | { status: 'error'; message: string }

function App() {
  const [auth, setAuth] = useState<AuthState>({ status: 'checking' })
  const [dark, setDark] = useState(readTheme)

  const check = useCallback(async () => {
    try {
      setAuth({ status: 'signed-in', session: await api.me() })
    } catch (e) {
      if (e instanceof ApiError && e.status === 401) setAuth({ status: 'signed-out', setupRequired: e.setupRequired })
      else setAuth({ status: 'error', message: e instanceof Error ? e.message : 'Could not reach the server' })
    }
  }, [])

  useEffect(() => {
    setUnauthorizedHandler(() => setAuth({ status: 'signed-out', setupRequired: false }))
    void check()
  }, [check])

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light'
    try { localStorage.setItem('clappia-theme', dark ? 'dark' : 'light') } catch { /* storage unavailable */ }
  }, [dark])

  if (auth.status === 'checking') return <div className="loading full"><img src={brandAsset('clappia-mark.svg')} alt="" />Loading…</div>
  if (auth.status === 'error') {
    return (
      <div className="loading full">
        <img src={brandAsset('clappia-mark.svg')} alt="" />
        <strong>Can't reach the server</strong>
        <span>{auth.message}. Start the app with <code>npm run dev</code>.</span>
        <button type="button" className="primary-button" onClick={() => void check()}>Try again</button>
      </div>
    )
  }
  if (auth.status === 'signed-out') {
    return <LoginPage setupRequired={auth.setupRequired} onSignedIn={(session) => setAuth({ status: 'signed-in', session })} />
  }
  return (
    <Workspace
      key={auth.session.user.username}
      session={auth.session}
      dark={dark}
      toggleDark={() => setDark((v) => !v)}
      onSignOut={async () => {
        await api.logout().catch(() => undefined)
        window.history.replaceState(null, '', window.location.pathname)
        setAuth({ status: 'signed-out', setupRequired: false })
      }}
    />
  )
}

function Workspace({ session, dark, toggleDark, onSignOut }: { session: Session; dark: boolean; toggleDark: () => void; onSignOut: () => Promise<void> }) {
  const { user, can } = session
  const allowedNav = nav.filter((n) => !n.requires || can[n.requires])
  const [page, setPage] = useState<PageKey>(() => {
    const fromHash = pageFromHash()
    return allowedNav.some((n) => n.key === fromHash) ? fromHash : 'dashboard'
  })
  const [filter, setFilter] = useState<Filter>({})
  const [data, setData] = useState<AppData | null>(null)
  const [loadError, setLoadError] = useState('')
  const [toast, setToast] = useState<{ text: string; error?: boolean } | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [userMenu, setUserMenu] = useState(false)
  const [changingPassword, setChangingPassword] = useState(false)
  const userMenuRef = useRef<HTMLDivElement>(null)

  const load = useCallback(async () => {
    try {
      const [masters, snags, usage, sites] = await Promise.all([api.masters(), api.list('snags'), api.list('usage'), api.list('sites')])
      setData({ masters, snags, usage, sites })
      setLoadError('')
    } catch (e) {
      if (e instanceof ApiError && e.status === 401) return
      setLoadError(e instanceof Error ? e.message : 'Could not reach the Excel database')
    }
  }, [])

  useEffect(() => { void load() }, [load])
  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(null), toast.error ? 7000 : 3500)
    return () => clearTimeout(t)
  }, [toast])
  useEffect(() => {
    if (!userMenu) return
    const close = (e: MouseEvent) => { if (!userMenuRef.current?.contains(e.target as Node)) setUserMenu(false) }
    const esc = (e: KeyboardEvent) => { if (e.key === 'Escape') setUserMenu(false) }
    document.addEventListener('mousedown', close)
    document.addEventListener('keydown', esc)
    return () => { document.removeEventListener('mousedown', close); document.removeEventListener('keydown', esc) }
  }, [userMenu])

  const tableKey: Record<TableName, keyof AppData> = { snags: 'snags', usage: 'usage', sites: 'sites' }
  const label: Record<TableName, string> = { snags: 'Snag', usage: 'Usage entry', sites: 'Site' }

  async function run<T>(task: () => Promise<T>, success: string) {
    try {
      const result = await task()
      setToast({ text: success })
      return result
    } catch (e) {
      setToast({ text: e instanceof Error ? e.message : 'Something went wrong', error: true })
      throw e
    }
  }

  const actions: Actions = {
    create: (table, row) => run(async () => {
      const saved = await api.create(table, row)
      setData((d) => d && { ...d, [tableKey[table]]: [...(d[tableKey[table]] as TableRow[typeof table][]), saved] })
      return saved
    }, `${label[table]} saved to Excel`),
    update: (table, id, row) => run(async () => {
      const saved = await api.update(table, id, row)
      const idKey = table === 'snags' ? 'sn' : table === 'usage' ? 'entryId' : 'siteId'
      setData((d) => d && { ...d, [tableKey[table]]: (d[tableKey[table]] as Record<string, string>[]).map((r) => (r[idKey] === id ? saved : r)) })
      return saved
    }, `${label[table]} updated`),
    remove: (table, id) => run(async () => {
      await api.remove(table, id)
      await load()
    }, `${label[table]} deleted`),
    reseedMasters: () => run(async () => {
      const masters = await api.reseedMasters()
      setData((d) => d && { ...d, masters })
    }, 'Master sheets re-imported from JSON'),
  }

  function go(next: PageKey, nextFilter: Filter = {}) {
    if (!allowedNav.some((n) => n.key === next)) return
    setPage(next)
    setFilter(nextFilter)
    window.history.replaceState(null, '', `#${next}`)
    setMenuOpen(false)
    window.scrollTo({ top: 0 })
  }

  const current = allowedNav.find((n) => n.key === page) ?? allowedNav[0]
  const notify = (text: string) => setToast({ text })
  const props: PageProps | null = data && { session, notify, data, actions, filter, setFilter, go }
  const openCount = data?.snags.filter((s) => s.status.toUpperCase() === 'OPEN').length ?? 0
  const initials = user.name.split(/\s+/).slice(0, 2).map((p) => p[0] ?? '').join('').toUpperCase()

  return (
    <div className={`shell ${menuOpen ? 'menu-open' : ''}`}>
      <aside className="sidebar">
        <div className="sidebar-brand"><Logo /></div>
        <p className="sidebar-product">Field Service · PM Snags</p>
        <nav aria-label="Main">
          {allowedNav.map((n) => (
            <button key={n.key} type="button" className={`nav-item ${page === n.key ? 'active' : ''}`} aria-current={page === n.key ? 'page' : undefined} onClick={() => go(n.key)}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d={n.icon} /></svg>
              <span>{n.label}</span>
              {n.key === 'snags' && openCount > 0 && <span className="nav-count">{openCount}</span>}
            </button>
          ))}
        </nav>
        <div className="sidebar-db">
          <span className="db-dot" data-ok={!loadError && Boolean(data)} />
          <div><strong>{STATIC_DEMO ? 'Demo database' : 'Excel database'}</strong><small>{STATIC_DEMO ? 'Saved in this browser' : 'data/field_service_db.xlsx'}</small></div>
        </div>
      </aside>
      <button type="button" className="scrim" aria-label="Close menu" onClick={() => setMenuOpen(false)} />

      <main>
        <header className="topbar">
          <button type="button" className="icon-button menu-button" aria-label="Open menu" onClick={() => setMenuOpen(true)}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
          </button>
          <div className="topbar-title"><Logo compact /><h1>{current.title}</h1></div>
          <div className="topbar-actions">
            <button type="button" className="ghost-button" onClick={() => void load().then(() => setToast({ text: 'Reloaded from Excel' }))}>Refresh</button>
            {can.export && (STATIC_DEMO
              ? <button type="button" className="primary-button export-button" onClick={() => void api.downloadLocalWorkbook()}>Download Excel</button>
              : <a className="primary-button export-button" href={api.exportUrl} download>Download Excel</a>)}
            <button type="button" className="icon-button" aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'} onClick={toggleDark}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d={dark ? 'M12 4V2m0 20v-2m8-8h2M2 12h2m13.7-5.7 1.4-1.4M4.9 19.1l1.4-1.4m0-11.4L4.9 4.9m14.2 14.2-1.4-1.4M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10z' : 'M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z'} /></svg>
            </button>
            <div className="user-menu" ref={userMenuRef}>
              <button type="button" className="user-button" aria-haspopup="menu" aria-expanded={userMenu} onClick={() => setUserMenu((v) => !v)}>
                <span className="avatar small" aria-hidden="true">{initials}</span>
                <span className="user-button-text"><strong>{user.name}</strong><small>{user.role}</small></span>
              </button>
              {userMenu && (
                <div className="user-dropdown" role="menu">
                  <div className="user-dropdown-head">
                    <strong>{user.name}</strong>
                    <span className="mono muted">{user.username}</span>
                    <span className={`role-badge role-${user.role.toLowerCase()}`}>{user.role}</span>
                  </div>
                  <button type="button" role="menuitem" onClick={() => { setUserMenu(false); setChangingPassword(true) }}>Change password</button>
                  {can['users.manage'] && <button type="button" role="menuitem" onClick={() => { setUserMenu(false); go('users') }}>Manage users</button>}
                  <button type="button" role="menuitem" className="danger" onClick={() => void onSignOut()}>Sign out</button>
                </div>
              )}
            </div>
          </div>
        </header>

        <div className="content">
          {loadError && (
            <div className="panel error-panel" role="alert">
              <h2>Can't reach the Excel database</h2>
              <p>{loadError}</p>
              <p className="muted">Start the app with <code>npm run dev</code> — the API runs inside the Vite server and reads <code>data/field_service_db.xlsx</code>.</p>
              <button type="button" className="primary-button" onClick={() => void load()}>Try again</button>
            </div>
          )}
          {!data && !loadError && <div className="loading"><img src={brandAsset('clappia-mark.svg')} alt="" />Loading workbook…</div>}
          {props && page === 'dashboard' && <DashboardPage {...props} />}
          {props && page === 'snags' && <SnagsPage {...props} />}
          {props && page === 'consumables' && <ConsumablesPage {...props} />}
          {props && page === 'sites' && <SitesPage {...props} />}
          {props && page === 'teams' && <TeamsPage {...props} />}
          {props && page === 'masters' && <MastersPage {...props} />}
          {props && page === 'users' && can['users.manage'] && <UsersPage {...props} />}
        </div>
      </main>

      {changingPassword && <ChangePassword onClose={() => setChangingPassword(false)} onDone={() => { setChangingPassword(false); setToast({ text: 'Password changed' }) }} />}
      {toast && <div className={`toast ${toast.error ? 'error' : ''}`} role="status"><span>{toast.text}</span><button type="button" aria-label="Dismiss" onClick={() => setToast(null)}>×</button></div>}
    </div>
  )
}

function ChangePassword({ onClose, onDone }: { onClose: () => void; onDone: () => void }) {
  const [current, setCurrent] = useState('')
  const [next, setNext] = useState('')
  const [confirm, setConfirm] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)

  async function submit(event: FormEvent) {
    event.preventDefault()
    if (next !== confirm) return setError('New passwords do not match')
    setBusy(true)
    setError('')
    try {
      await api.changePassword(current, next)
      onDone()
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Could not change password')
      setBusy(false)
    }
  }

  return (
    <Modal title="Change password" eyebrow="Your account" onClose={onClose}>
      <form className="form" onSubmit={submit}>
        <Input label="Current password" type="password" required value={current} onChange={setCurrent} autoComplete="current-password" />
        <Input label="New password" type="password" required minLength={PASSWORD_MIN} value={next} onChange={setNext} autoComplete="new-password" placeholder={`At least ${PASSWORD_MIN} characters`} />
        <Input label="Confirm new password" type="password" required value={confirm} onChange={setConfirm} autoComplete="new-password" />
        {error && <p className="form-error" role="alert">{error}</p>}
        <footer className="form-actions">
          <span className="spacer" />
          <button type="button" className="ghost-button" onClick={onClose}>Cancel</button>
          <button type="submit" className="primary-button" disabled={busy}>{busy ? 'Saving…' : 'Change password'}</button>
        </footer>
      </form>
    </Modal>
  )
}

export default App
