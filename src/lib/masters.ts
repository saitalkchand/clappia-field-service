import { LOOKUP, type Masters } from './schema.ts'

// Builds clean master-data rows from data/seed/field_service_master_data.json.
// Shared by the Excel API (server/seed.ts) and the browser demo (localApi.ts).
// Source values keep their spelling; only obvious extraction noise is dropped
// (e.g. a date in the region list, header rows, case-only duplicates).

export type SourceJson = {
  masters: {
    snagCategories: string[]
    snagDescriptionLists: { code: string; label: string; options: string[] }[]
    snagSeverityRules: { snagClassification: string; snagDescription: string; severityBySiteClass: Record<string, string> }[]
    snagClassificationMappings: { mappingKey: string; snagClassification: string; snagDescription: string; severity: string; siteClass: string }[]
    teams: { supervisor: string; driverTechnician: string; region: string }[]
    consumableItems: { itemDescription: string }[]
    siteAndWorkDropdowns: Record<string, string[]>
    legacyCOColumns: { excelColumn: number; excelHeader: string }[]
  }
}

const REGION_NAMES: Record<string, string> = {
  DXB: 'Dubai',
  NE: 'Northern Emirates',
  AUH: 'Abu Dhabi',
  AAN: 'Al Ain',
  WR: 'Western Region',
}

const CONSUMABLE_CATEGORIES: [RegExp, string][] = [
  [/surge|^PS Module|Rectifier SPD|battery temp|Alarm Cable/i, 'DC / Power'],
  [/^AWL/i, 'AWL'],
  [/^FACP|^FE |Fire|Heat detector|Smoke detector|Hose PIPE|Spray-Smoke/i, 'Fire Systems'],
  [/^Padlock|Door Closer|Door sensors|^Chain/i, 'Security & Access'],
  [/Tubelight|Ballast|Bulb|External LED|Socket|Switch-Weatherproof|LED Indicator|Flexible wire/i, 'Electrical & Lighting'],
  [/^AC |^ABB|Capacitor|Contactor|Condenser|Filter drier|^Gas-|Relay|Blower|Side Grill|Switch-High|Switch-LAC|MC3000|Transformer 220V|Air Filter/i, 'Air Conditioning'],
]

const list = (name: string, values: string[]) => values.map((value) => ({ list: name, value }))
const uniqueBy = <T>(items: T[], key: (item: T) => string) => {
  const seen = new Set<string>()
  return items.filter((item) => {
    const k = key(item)
    if (seen.has(k)) return false
    seen.add(k)
    return true
  })
}
const nameKey = (name: string) => name.toLowerCase().split(/\s+/).map((t) => t.slice(0, 5))

export function mastersFromSource({ masters: src }: SourceJson): Masters {
  const listByCode = new Map(src.snagDescriptionLists.map((l) => [l.code, l]))
  const options = (code: string) => listByCode.get(code)?.options ?? []

  const categories = src.snagCategories.map((code) => ({
    code,
    name: listByCode.get(code.replaceAll(' ', '_'))?.label ?? code,
  }))

  const descriptions = categories.flatMap(({ code }) =>
    options(code.replaceAll(' ', '_')).map((description) => ({ category: code, description })),
  )

  const teams = src.teams
    .filter((t) => t.supervisor !== 'Supervisors')
    .map((t) => {
      const [member = '', teamType = '', vehicle = ''] = t.driverTechnician.split(/\s*-\s+|\s+-\s*/).map((p) => p.trim())
      return { supervisor: t.supervisor, member: member === '' || member === '-' ? '' : member, teamType, vehicle, region: t.region }
    })

  // Supervisor names in the team roster use looser spellings; match on the
  // first five letters of the first two name tokens, or a unique first token.
  const supervisorNames = options('Supervisors')
  const supervisors = supervisorNames.map((name) => {
    const [a, b] = nameKey(name)
    const team = teams.find((t) => {
      const [ta, tb] = nameKey(t.supervisor)
      if (ta !== a) return false
      const firstTokenUnique = supervisorNames.filter((n) => nameKey(n)[0] === a).length === 1
      return firstTokenUnique || tb?.slice(0, 4) === b?.slice(0, 4)
    })
    return { name, region: team?.region ?? '' }
  })

  const consumables = uniqueBy(
    src.consumableItems.map((c) => c.itemDescription.trim()),
    (item) => item.toLowerCase().replace('zz', 'z'),
  ).map((item) => ({
    item,
    category: CONSUMABLE_CATEGORIES.find(([pattern]) => pattern.test(item))?.[1] ?? 'General Consumables',
  }))

  const severityOrder = ['CRITICAL', 'MAJOR', 'MINOR', 'NA']
  const acTypes = uniqueBy(src.siteAndWorkDropdowns.TypeofAcs ?? [], (v) => v.toUpperCase().replace('/', ''))

  return {
    regions: options('Area\\region')
      .filter((code) => /^[A-Z]{2,4}$/.test(code))
      .map((code) => ({ code, name: REGION_NAMES[code] ?? code })),
    siteTypes: [...options('Site \\Room Type')].sort().map((code) => ({ code })),
    siteClasses: options('Class Type  -Mobile  (updated)').map((code) => ({ code })),
    categories,
    descriptions,
    severityRules: src.snagSeverityRules.map((r) => ({
      category: r.snagClassification,
      description: r.snagDescription,
      classA: r.severityBySiteClass['CLASS A'] ?? '',
      classB: r.severityBySiteClass['CLASS B'] ?? '',
      classC: r.severityBySiteClass['CLASS C'] ?? '',
    })),
    legacyMappings: src.snagClassificationMappings.map((m) => ({
      mappingKey: m.mappingKey,
      siteClass: m.siteClass.toUpperCase(),
      category: m.snagClassification,
      description: m.snagDescription,
      severity: m.severity,
    })),
    lookups: [
      ...list(LOOKUP.severity, [...options('Snag Severity')].sort((a, b) => severityOrder.indexOf(a) - severityOrder.indexOf(b))),
      ...list(LOOKUP.status, options('SNAG Status')),
      ...list(LOOKUP.actionOwner, options('action Owner')),
      ...list(LOOKUP.checkOption, options('NO')),
      ...list(LOOKUP.acType, acTypes),
    ],
    supervisors,
    teams,
    consumables,
    legacyColumns: src.legacyCOColumns.map((c) => ({ column: String(c.excelColumn), header: c.excelHeader })),
  }
}
