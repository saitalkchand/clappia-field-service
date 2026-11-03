import { useEffect, useRef, type InputHTMLAttributes, type ReactNode } from 'react'

// Logo files live in public/brand; BASE_URL keeps them working when the app is served from a sub-path.
export const brandAsset = (file: string) => `${import.meta.env.BASE_URL}brand/${file}`

export function Logo({ compact = false }: { compact?: boolean }) {
  return <img className="logo" src={compact ? brandAsset('clappia-mark.svg') : brandAsset('clappia-logo.svg')} alt="Clappia" />
}

const severityTone: Record<string, string> = { CRITICAL: 'critical', MAJOR: 'major', MINOR: 'minor' }
const statusTone: Record<string, string> = { OPEN: 'open', CLOSED: 'closed' }

export function SeverityBadge({ value }: { value: string }) {
  if (!value) return <span className="muted">—</span>
  return <span className={`badge sev-${severityTone[value.toUpperCase()] ?? 'na'}`}><i aria-hidden="true" />{value.toUpperCase()}</span>
}

export function StatusBadge({ value }: { value: string }) {
  if (!value) return <span className="muted">—</span>
  return <span className={`badge status-${statusTone[value.toUpperCase()] ?? 'na'}`}>{value.toUpperCase()}</span>
}

export function Modal({ title, eyebrow, onClose, children, wide }: { title: string; eyebrow?: string; onClose: () => void; children: ReactNode; wide?: boolean }) {
  const ref = useRef<HTMLDialogElement>(null)
  useEffect(() => {
    const dialog = ref.current
    dialog?.showModal()
    return () => dialog?.close()
  }, [])
  return (
    <dialog ref={ref} className={`modal ${wide ? 'wide' : ''}`} onCancel={(e) => { e.preventDefault(); onClose() }} aria-labelledby="modal-title">
      <header className="modal-header">
        <div>{eyebrow && <p className="eyebrow">{eyebrow}</p>}<h2 id="modal-title">{title}</h2></div>
        <button type="button" className="icon-button" aria-label="Close" onClick={onClose}>×</button>
      </header>
      {children}
    </dialog>
  )
}

export function EmptyState({ title, text, action }: { title: string; text: string; action?: ReactNode }) {
  return <div className="empty"><img src={brandAsset('clappia-mark.svg')} alt="" /><h3>{title}</h3><p>{text}</p>{action}</div>
}

export function Select({ label, value, onChange, options, placeholder, required, name }: {
  label: string; value: string; onChange: (v: string) => void; options: (string | { value: string; label: string })[]
  placeholder?: string; required?: boolean; name?: string
}) {
  return (
    <label className="field">
      <span>{label}{required && <b aria-hidden="true"> *</b>}</span>
      <select name={name} value={value} required={required} onChange={(e) => onChange(e.target.value)}>
        <option value="">{placeholder ?? 'Select…'}</option>
        {options.map((o) => typeof o === 'string'
          ? <option key={o} value={o}>{o}</option>
          : <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
    </label>
  )
}

export function Input({ label, value, onChange, required, ...rest }: {
  label: string; value: string; onChange: (v: string) => void; required?: boolean
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>) {
  return (
    <label className="field">
      <span>{label}{required && <b aria-hidden="true"> *</b>}</span>
      <input value={value} required={required} onChange={(e) => onChange(e.target.value)} {...rest} />
    </label>
  )
}
