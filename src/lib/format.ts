export function matches(term: string, values: string[]) {
  const t = term.trim().toLowerCase()
  return !t || values.some((v) => v.toLowerCase().includes(t))
}

export const today = () => {
  const d = new Date()
  return new Date(d.getTime() - d.getTimezoneOffset() * 60_000).toISOString().slice(0, 10)
}

export const count = <T,>(items: T[], key: (item: T) => string) =>
  items.reduce<Record<string, number>>((acc, item) => {
    const k = key(item)
    acc[k] = (acc[k] ?? 0) + 1
    return acc
  }, {})

export const aed = (n: number) => `AED ${n.toLocaleString('en-AE', { maximumFractionDigits: 2 })}`
