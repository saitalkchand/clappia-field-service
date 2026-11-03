import { useState, type FormEvent } from 'react'
import { brandAsset } from '../components/ui.tsx'
import { STATIC_DEMO, api } from '../lib/api.ts'
import { PASSWORD_MIN, type Session } from '../lib/auth.ts'

const features = [
  'Snag register with automatic severity by site class',
  'Consumables log with AED cost per site',
  'Everything saved to your Excel workbook',
]

export function LoginPage({ setupRequired, onSignedIn }: { setupRequired: boolean; onSignedIn: (session: Session) => void }) {
  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)

  async function submit(event: FormEvent) {
    event.preventDefault()
    setError('')
    if (setupRequired && password !== confirm) return setError('Passwords do not match')
    setBusy(true)
    try {
      onSignedIn(setupRequired ? await api.setup({ username, name, password }) : await api.login(username, password))
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Sign-in failed')
      setBusy(false)
    }
  }

  return (
    <div className="login">
      <section className="login-brand">
        <div className="login-logo"><img src={brandAsset('clappia-logo.svg')} alt="Clappia" /></div>
        <div className="login-pitch">
          <p className="login-kicker">Field Service · PM Snags</p>
          <h1>Every site visit, snag and spare part — tracked in one place.</h1>
          <ul>
            {features.map((f) => (
              <li key={f}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>{f}</li>
            ))}
          </ul>
        </div>
        <img className="login-mark" src={brandAsset('clappia-mark.svg')} alt="" />
      </section>

      <section className="login-panel">
        <form className="login-card" onSubmit={submit}>
          <img className="login-card-logo" src={brandAsset('clappia-logo.svg')} alt="Clappia" />
          <h2>{setupRequired ? 'Create the admin account' : 'Sign in'}</h2>
          <p className="muted">
            {setupRequired
              ? 'No accounts exist yet. This first account gets the Admin role and can add the rest of the team.'
              : 'Use the account your Admin created for you.'}
          </p>
          {STATIC_DEMO && <p className="hint">Demo mode: there is no server. Accounts and records are saved only in this browser.</p>}

          {setupRequired && (
            <label className="field">
              <span>Full name</span>
              <input value={name} onChange={(e) => setName(e.target.value)} required autoComplete="name" placeholder="e.g. Jay Puzon Tadina" />
            </label>
          )}
          <label className="field">
            <span>Username</span>
            <input value={username} onChange={(e) => setUsername(e.target.value)} required autoComplete="username" autoCapitalize="none" spellCheck={false} autoFocus placeholder="e.g. jay.tadina" />
          </label>
          <label className="field">
            <span>Password</span>
            <div className="password-input">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={setupRequired ? PASSWORD_MIN : undefined}
                autoComplete={setupRequired ? 'new-password' : 'current-password'}
              />
              <button type="button" className="link-button" onClick={() => setShowPassword((v) => !v)} aria-pressed={showPassword}>{showPassword ? 'Hide' : 'Show'}</button>
            </div>
          </label>
          {setupRequired && (
            <label className="field">
              <span>Confirm password</span>
              <input type={showPassword ? 'text' : 'password'} value={confirm} onChange={(e) => setConfirm(e.target.value)} required autoComplete="new-password" />
              <small className="muted">At least {PASSWORD_MIN} characters.</small>
            </label>
          )}

          {error && <p className="form-error" role="alert">{error}</p>}
          <button type="submit" className="primary-button login-submit" disabled={busy}>
            {busy ? 'Please wait…' : setupRequired ? 'Create account & continue' : 'Sign in'}
          </button>
          {!setupRequired && <p className="login-help muted">Forgot your password? Ask an Admin to reset it.</p>}
        </form>
      </section>
    </div>
  )
}
