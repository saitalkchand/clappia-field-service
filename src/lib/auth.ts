// Roles and permissions, shared by the API (enforcement) and the UI (what to show).

export const ROLES = ['Admin', 'Supervisor', 'Technician', 'Viewer'] as const
export type Role = (typeof ROLES)[number]

export const ROLE_INFO: Record<Role, string> = {
  Admin: 'Full access, including users, master data and deleting records',
  Supervisor: 'Log, edit and close snags; manage sites and consumables; download Excel',
  Technician: 'Log snags and consumables used on visits; view everything',
  Viewer: 'Read-only access to dashboards and registers',
}

export const PERMISSIONS = [
  'snags.create',
  'snags.edit',
  'snags.delete',
  'usage.create',
  'usage.edit',
  'usage.delete',
  'sites.create',
  'sites.edit',
  'sites.delete',
  'export',
  'masters.reseed',
  'users.manage',
] as const
export type Permission = (typeof PERMISSIONS)[number]

const GRANTS: Record<Role, readonly Permission[]> = {
  Admin: PERMISSIONS,
  Supervisor: ['snags.create', 'snags.edit', 'usage.create', 'usage.edit', 'sites.create', 'sites.edit', 'export'],
  Technician: ['snags.create', 'usage.create'],
  Viewer: [],
}

export type Can = Record<Permission, boolean>

export function permissionsFor(role: string): Can {
  const granted = GRANTS[role as Role] ?? []
  return Object.fromEntries(PERMISSIONS.map((p) => [p, granted.includes(p)])) as Can
}

export const userFields = [
  { key: 'username', header: 'Username' },
  { key: 'name', header: 'Full Name' },
  { key: 'role', header: 'Role' },
  { key: 'active', header: 'Active' },
  { key: 'passwordHash', header: 'Password Hash' },
  { key: 'lastLogin', header: 'Last Login' },
  { key: 'createdAt', header: 'Created At' },
  { key: 'updatedAt', header: 'Updated At' },
] as const

export const USERS_SHEET = 'Users'

// What the API returns for a user (never the hash)
export type PublicUser = { username: string; name: string; role: Role; active: string; lastLogin: string; createdAt: string }
export type Session = { user: PublicUser; can: Can }

export const PASSWORD_MIN = 8
