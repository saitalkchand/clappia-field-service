// Shared between the browser app and the Excel-backed API (server/excelApi.ts).
// Each field maps an app key to the column header used in the Excel workbook.
// Snag and consumable-usage headers mirror the legacy "CO" sheet columns so the
// workbook stays familiar to the PM team.

export type FieldDef = { key: string; header: string; numeric?: boolean }

export const snagFields = [
  { key: 'sn', header: 'SN from Master File of Snag Tracker' },
  { key: 'region', header: 'Region' },
  { key: 'siteId', header: 'Site ID' },
  { key: 'colocated', header: 'Colocated' },
  { key: 'siteType', header: 'Site Type' },
  { key: 'siteClass', header: 'Site Class' },
  { key: 'pmTargetWeek', header: 'PM Target Week' },
  { key: 'dateOfPm', header: 'Date Of PM' },
  { key: 'openedBy', header: 'Snag Opened by' },
  { key: 'assigned', header: 'Assigned' },
  { key: 'classification', header: 'Snag Classification' },
  { key: 'snag', header: 'Snags' },
  { key: 'remarks', header: 'Remarks' },
  { key: 'severity', header: 'Snag Severity' },
  { key: 'referenceNo', header: 'Snags Reference No.' },
  { key: 'closingDate', header: 'Closing Date' },
  { key: 'status', header: 'Snag Status' },
  { key: 'closedBy', header: 'Closed by' },
  { key: 'timeline', header: 'Timeline' },
  { key: 'actionOwner', header: 'Action Owner' },
  { key: 'faultyStrings', header: '# of Faulty Strings', numeric: true },
  { key: 'faultyCells', header: '# of Faulty Cells', numeric: true },
  { key: 'errorIdentifier', header: 'Error Identifier' },
  { key: 'snagAge', header: 'SNAG STATUS (New/Old)' },
  { key: 'consumablesUsed', header: 'Consumables Used' },
  { key: 'createdAt', header: 'Created At' },
  { key: 'updatedAt', header: 'Updated At' },
] as const satisfies readonly FieldDef[]

export const usageFields = [
  { key: 'entryId', header: 'Entry ID' },
  { key: 'date', header: 'Date' },
  { key: 'siteId', header: 'SiteID' },
  { key: 'region', header: 'Region' },
  { key: 'ttNo', header: 'TTNo.' },
  { key: 'workDescription', header: 'Work Description' },
  { key: 'item', header: 'Item Description' },
  { key: 'brand', header: 'Brand' },
  { key: 'modelNo', header: 'ModelNo.' },
  { key: 'qty', header: 'QTY', numeric: true },
  { key: 'unitRate', header: 'UnitRateinAED', numeric: true },
  { key: 'amount', header: 'AmountinAED', numeric: true },
  { key: 'remarks', header: 'Remarks' },
  { key: 'siteClass', header: 'TypeofClasses' },
  { key: 'acType', header: 'TypeofAcs' },
  { key: 'snagRef', header: 'Snag Reference No.' },
  { key: 'technician', header: 'Technician' },
  { key: 'createdAt', header: 'Created At' },
  { key: 'updatedAt', header: 'Updated At' },
] as const satisfies readonly FieldDef[]

export const siteFields = [
  { key: 'siteId', header: 'Site ID' },
  { key: 'region', header: 'Region' },
  { key: 'siteType', header: 'Site Type' },
  { key: 'siteClass', header: 'Site Class' },
  { key: 'colocated', header: 'Colocated' },
  { key: 'acType', header: 'AC Type' },
  { key: 'supervisor', header: 'Supervisor' },
  { key: 'notes', header: 'Notes' },
  { key: 'createdAt', header: 'Created At' },
  { key: 'updatedAt', header: 'Updated At' },
] as const satisfies readonly FieldDef[]

type RowOf<F extends readonly FieldDef[]> = Record<F[number]['key'], string>

export type Snag = RowOf<typeof snagFields>
export type ConsumableUsage = RowOf<typeof usageFields>
export type Site = RowOf<typeof siteFields>

export const tables = {
  snags: { sheet: 'Snags', idKey: 'sn', fields: snagFields },
  usage: { sheet: 'ConsumableUsage', idKey: 'entryId', fields: usageFields },
  sites: { sheet: 'Sites', idKey: 'siteId', fields: siteFields },
} as const

export type TableName = keyof typeof tables
export type TableRow = { snags: Snag; usage: ConsumableUsage; sites: Site }

// ---- Master data (read-only in the app; edit the workbook to change) ----

export const masterSheets = {
  regions: { sheet: 'M_Regions', fields: [{ key: 'code', header: 'Code' }, { key: 'name', header: 'Name' }] },
  siteTypes: { sheet: 'M_SiteTypes', fields: [{ key: 'code', header: 'Code' }] },
  siteClasses: { sheet: 'M_SiteClasses', fields: [{ key: 'code', header: 'Code' }] },
  categories: { sheet: 'M_SnagCategories', fields: [{ key: 'code', header: 'Code' }, { key: 'name', header: 'Name' }] },
  descriptions: { sheet: 'M_SnagDescriptions', fields: [{ key: 'category', header: 'Snag Classification' }, { key: 'description', header: 'Snag Description' }] },
  severityRules: {
    sheet: 'M_SeverityRules',
    fields: [
      { key: 'category', header: 'Snag Classification' },
      { key: 'description', header: 'Snag Description' },
      { key: 'classA', header: 'CLASS A' },
      { key: 'classB', header: 'CLASS B' },
      { key: 'classC', header: 'CLASS C' },
    ],
  },
  legacyMappings: {
    sheet: 'M_LegacySeverityMap',
    fields: [
      { key: 'mappingKey', header: 'Mapping Key' },
      { key: 'siteClass', header: 'Site Class' },
      { key: 'category', header: 'Snag Classification' },
      { key: 'description', header: 'Snag Description' },
      { key: 'severity', header: 'Severity' },
    ],
  },
  lookups: { sheet: 'M_Lookups', fields: [{ key: 'list', header: 'List' }, { key: 'value', header: 'Value' }] },
  supervisors: { sheet: 'M_Supervisors', fields: [{ key: 'name', header: 'Supervisor' }, { key: 'region', header: 'Region' }] },
  teams: {
    sheet: 'M_Teams',
    fields: [
      { key: 'supervisor', header: 'Supervisor' },
      { key: 'member', header: 'Driver / Technician' },
      { key: 'teamType', header: 'Team Type' },
      { key: 'vehicle', header: 'Vehicle' },
      { key: 'region', header: 'Region' },
    ],
  },
  consumables: { sheet: 'M_Consumables', fields: [{ key: 'item', header: 'Item Description' }, { key: 'category', header: 'Category' }] },
  legacyColumns: { sheet: 'M_LegacyCOColumns', fields: [{ key: 'column', header: 'Excel Column' }, { key: 'header', header: 'Excel Header' }] },
} as const satisfies Record<string, { sheet: string; fields: readonly FieldDef[] }>

type MasterSheets = typeof masterSheets
export type Masters = { [K in keyof MasterSheets]: RowOf<MasterSheets[K]['fields']>[] }

// Lookup list names stored in M_Lookups
export const LOOKUP = {
  severity: 'Snag Severity',
  status: 'Snag Status',
  actionOwner: 'Action Owner',
  checkOption: 'Check Option',
  acType: 'AC Type',
} as const

export function lookupValues(masters: Masters, list: string) {
  return masters.lookups.filter((row) => row.list === list).map((row) => row.value)
}

export function severityFor(masters: Masters, siteClass: string, category: string, description: string) {
  const cls = siteClass.trim().toUpperCase()
  const cat = category.trim().toUpperCase()
  const desc = description.trim().toUpperCase()
  if (!cls || !cat || !desc) return ''
  const rule = masters.severityRules.find((r) => r.category.toUpperCase() === cat && r.description.toUpperCase() === desc)
  if (rule) return { 'CLASS A': rule.classA, 'CLASS B': rule.classB, 'CLASS C': rule.classC }[cls] ?? ''
  const legacy = masters.legacyMappings.find((m) => m.siteClass.toUpperCase() === cls && m.category.toUpperCase() === cat && m.description.toUpperCase() === desc)
  return legacy?.severity ?? ''
}
