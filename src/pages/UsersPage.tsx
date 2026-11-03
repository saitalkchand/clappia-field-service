import { useEffect, useState, type FormEvent } from 'react'
import { EmptyState, Input, Modal } from '../components/ui.tsx'
import { api } from '../lib/api.ts'
import { PASSWORD_MIN, PERMISSIONS, ROLES, ROLE_INFO, permissionsFor, type Permission, type PublicUser, type Role } from '../lib/auth.ts'
import { matches } from '../lib/format.ts'
import type { PageProps } from './types.ts'

const PERMISSION_LABELS: Record<Permission, string> = {
  'snags.create': 'Log snags',
  'snags.edit': 'Edit & close snags',
  'snags.delete': 'Delete snags',
  'usage.create': 'Log consumables',
  'usage.edit': 'Edit consumables',
  'usage.delete': 'Delete consumables',
  'sites.create': 'Add sites',
  'sites.edit': 'Edit sites',
  'sites.delete': 'Delete sites',
  export: 'Download Excel',
  'masters.reseed': 'Re-import master data',
  'users.manage': 'Manage users',
}

export function UsersPage({ session, notify, filter, setFilter }: PageProps) {
  const [users, setUsers] = useState<PublicUser[] | null>(null)
  const [error, setError] = useState('')
  const [editing, setEditing] = useState<PublicUser | 'new' | null>(null)

  useEffect(() => {
    api.users().then(setUsers).catch((e: unknown) => setError(e instanceof Error ? e.message : 'Could not load users'))
  }, [])

  const rows = (users ?? []).filter((u) => matches(filter.search ?? '', [u.name, u.username, u.role]))
  const activeCount = (users ?? []).filter((u) => u.active === 'Yes').length

  return (
    <>
      <section className="panel">
        <header className="panel-header">
          <div><p className="eyebrow">Users sheet · {activeCount} active of {users?.length ?? 0}</p><h2>Users & roles</h2></div>
          <button type="button" className="primary-button" onClick={() => setEditing('new')}>+ Add user</button>
        </header>
        <div className="filters">
          <label className="field search"><span>Search</span><input value={filter.search ?? ''} onChange={(e) => setFilter({ ...filter, search: e.target.value })} placeholder="Name, username or role…" /></label>
        </div>
        {error && <p className="form-error" role="alert">{error}</p>}
        {!users && !error && <p className="muted">Loading…</p>}
        {users && rows.length === 0 && <EmptyState title="No users match" text="Clear the search to see everyone." />}
        {rows.length > 0 && (
          <div className="table-wrap">
            <table className="stack">
              <thead><tr><th>Name</th><th>Username</th><th>Role</th><th>Status</th><th>Last sign-in</th><th /></tr></thead>
              <tbody>
                {rows.map((u) => (
                  <tr key={u.username} className={u.active === 'No' ? 'inactive' : ''}>
                    <td data-label="Name">
                      <span className="user-cell">
                        <span className="avatar small" aria-hidden="true">{initials(u.name)}</span>
                        <strong>{u.name}</strong>{u.username === session.user.username && <span className="pill">You</span>}
                      </span>
                    </td>
                    <td data-label="Username" className="mono">{u.username}</td>
                    <td data-label="Role"><span className={`role-badge role-${u.role.toLowerCase()}`}>{u.role}</span></td>
                    <td data-label="Status">{u.active === 'Yes' ? <span className="badge status-closed">ACTIVE</span> : <span className="badge status-na">DEACTIVATED</span>}</td>
                    <td data-label="Last sign-in">{u.lastLogin || <span className="muted">Never</span>}</td>
                    <td className="row-actions"><button type="button" className="chip-button" onClick={() => setEditing(u)}>Edit</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <section className="panel">
        <header className="panel-header"><div><p className="eyebrow">Enforced by the server on every request</p><h2>What each role can do</h2></div></header>
        <div className="table-wrap">
          <table className="perm-matrix">
            <thead><tr><th>Permission</th>{ROLES.map((r) => <th key={r}>{r}</th>)}</tr></thead>
            <tbody>
              <tr><td>View dashboards & registers</td>{ROLES.map((r) => <td key={r}><Tick on /></td>)}</tr>
              {PERMISSIONS.map((p) => (
                <tr key={p}><td>{PERMISSION_LABELS[p]}</td>{ROLES.map((r) => <td key={r}><Tick on={permissionsFor(r)[p]} /></td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {editing && (
        <UserForm
          initial={editing === 'new' ? undefined : editing}
          isSelf={editing !== 'new' && editing.username === session.user.username}
          onClose={() => setEditing(null)}
          onSaved={(user, isNew) => {
            setUsers((list) => (isNew ? [...(list ?? []), user] : (list ?? []).map((u) => (u.username === user.username ? user : u))))
            setEditing(null)
            notify(isNew ? `User ${user.username} created` : `User ${user.username} updated`)
          }}
        />
      )}
    </>
  )
}

function Tick({ on }: { on: boolean }) {
  return on
    ? <span className="tick yes" aria-label="Allowed"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg></span>
    : <span className="tick no" aria-label="Not allowed">—</span>
}

const initials = (name: string) => name.split(/\s+/).slice(0, 2).map((p) => p[0] ?? '').join('').toUpperCase()

function UserForm({ initial, isSelf, onClose, onSaved }: {
  initial?: PublicUser
  isSelf: boolean
  onClose: () => void
  onSaved: (user: PublicUser, isNew: boolean) => void
}) {
  const [name, setName] = useState(initial?.name ?? '')
  const [username, setUsername] = useState(initial?.username ?? '')
  const [role, setRole] = useState<Role>(initial?.role ?? 'Technician')
  const [active, setActive] = useState(initial?.active !== 'No')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)

  async function submit(event: FormEvent) {
    event.preventDefault()
    setBusy(true)
    setError('')
    try {
      const saved = initial
        ? await api.updateUser(initial.username, { name, role, active: active ? 'Yes' : 'No', ...(password ? { password } : {}) })
        : await api.createUser({ username, name, role, password })
      onSaved(saved, !initial)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Could not save')
      setBusy(false)
    }
  }

  return (
    <Modal title={initial ? `Edit ${initial.name}` : 'Add user'} eyebrow="Users & roles" onClose={onClose}>
      <form className="form" onSubmit={submit}>
        <div className="grid-2">
          <Input label="Full name" required value={name} onChange={setName} autoComplete="off" />
          <Input label="Username" required value={username} onChange={(v) => setUsername(v.toLowerCase())} disabled={Boolean(initial)} autoComplete="off" autoCapitalize="none" spellCheck={false} placeholder="e.g. basit.khan" />
        </div>
        <fieldset className="role-picker">
          <legend>Role</legend>
          {ROLES.map((r) => (
            <label key={r} className={`role-option ${role === r ? 'selected' : ''}`}>
              <input type="radio" name="role" value={r} checked={role === r} onChange={() => setRole(r)} disabled={isSelf && r !== 'Admin' && initial?.role === 'Admin'} />
              <span><strong>{r}</strong><small>{ROLE_INFO[r]}</small></span>
            </label>
          ))}
        </fieldset>
        <Input
          label={initial ? 'Reset password (optional)' : 'Temporary password'}
          type="text"
          required={!initial}
          minLength={PASSWORD_MIN}
          value={password}
          onChange={setPassword}
          autoComplete="new-password"
          placeholder={`At least ${PASSWORD_MIN} characters`}
        />
        {initial && !isSelf && (
          <label className="toggle">
            <input type="checkbox" checked={active} onChange={(e) => setActive(e.target.checked)} />
            <span>Account active</span>
            <small className="muted">Deactivated users are signed out and can't sign in.</small>
          </label>
        )}
        {error && <p className="form-error" role="alert">{error}</p>}
        <footer className="form-actions">
          <span className="spacer" />
          <button type="button" className="ghost-button" onClick={onClose}>Cancel</button>
          <button type="submit" className="primary-button" disabled={busy}>{busy ? 'Saving…' : initial ? 'Save changes' : 'Create user'}</button>
        </footer>
      </form>
    </Modal>
  )
}
