# Clappia Field Service — PM Snags & Consumables

React + TypeScript + Vite app for the PM team's snag tracker and consumables log.
**The database is an Excel workbook**: `data/field_service_db.xlsx`.

## Run

```bash
npm install
npm run dev        # app + Excel API on http://localhost:5173
npm run build && npm run preview   # production build, same API
```

The API runs inside the Vite server (`server/excelApi.ts`), so there is no separate backend to start.
On first start it creates the workbook from `data/seed/field_service_master_data.json`.

## Sign-in and roles

On first start the login page asks you to **create the first Admin account**. There are no default passwords. The Admin then adds everyone else under **Users & Roles**.

After that, anyone can also use **Create an account** on the sign-in page. Self-registered accounts start as **Viewer** (read-only) until an Admin changes their role.

| Role | Can do |
|---|---|
| **Admin** | Everything: manage users, re-import master data, delete records |
| **Supervisor** | Log, edit and close snags; add and edit sites; log and edit consumables; download Excel |
| **Technician** | Log snags (always as OPEN) and consumables; view everything |
| **Viewer** | Read-only |

- Permissions are enforced by the API on every request (`src/lib/auth.ts` holds the role → permission map). The UI only hides buttons a role can't use.
- New snags record **Snag Opened by** and new consumables record **Technician** as the signed-in user when left blank. Closing a snag fills in **Closed by**.
- Accounts are stored in the `Users` sheet. Passwords are stored only as salted scrypt hashes, and **Download Excel** leaves the Users sheet out.
- Sessions use a signed HttpOnly cookie that lasts 12 hours. The signing key is generated into `data/.session_secret` (or set the `SESSION_SECRET` env var). Deleting it signs everyone out.
- After 5 wrong passwords an account is locked for 15 minutes. Deactivating a user or changing their role takes effect on their next request.
- If someone forgets their password, an Admin resets it from **Users & Roles → Edit**. Anyone can change their own password from the user menu.
- Run the app over HTTPS (behind a reverse proxy) if it's reachable beyond your own machine or office network.

## Workbook layout

| Sheet | Written by | Contents |
|---|---|---|
| `Snags` | app | Snag register. Columns match the legacy CO sheet (SN, Region, Site ID, … Consumables Used) |
| `ConsumableUsage` | app | Materials used: Date, SiteID, TTNo., Item Description, QTY, UnitRateinAED, AmountinAED, … |
| `Sites` | app | Site ID, region, type, class, AC type, supervisor |
| `Users` | app | Sign-in accounts: username, name, role, active, password hash, last login |
| `M_*` | you (Excel) | Master data: regions, site types/classes, snag classifications & descriptions, severity matrix, dropdown lists, supervisors, teams, consumables catalog |
| `About` | app | Notes |

- Edit any `M_` sheet in Excel and press **Refresh** in the app; changes show up right away.
- **Master Data → Re-import from JSON** rebuilds the `M_` sheets from the seed JSON and keeps `Snags`, `ConsumableUsage` and `Sites`.
- **Download Excel** in the top bar gives a dated copy of the whole workbook.
- Don't rename sheets or header cells; the app finds them by name.
- Writes are queued and saved through a temp file plus rename, so a crash can't leave a half-written workbook. Close the file in Excel before you log entries from the app. Otherwise Excel may overwrite the app's changes when you save.

## Business rules

- Snag severity is looked up from `M_SeverityRules` (classification + description + site class), then from `M_LegacySeverityMap`. It can be overridden manually.
- `NO SNAG` → severity and status `NA`.
- Closing a snag fills in Closing Date. A blank Snags Reference No. gets `SNG-<REGION>-<SN>`.
- Usage amount = QTY × unit rate. The region, class, classification, action owner and item must exist in the master sheets.

## Brand

| Token | Hex | Use |
|---|---|---|
| Clappia Blue | `#3599E2` | Primary: buttons, active nav, charts |
| Blue strong / deep | `#1F7FC8` / `#0F5E9C` | Hover, text on tints |
| Blue tint / soft | `#EAF4FD` / `#A8D8FA` | Highlights, logo pages |
| Clappia Green | `#0CAE5A` | Accent: success, closed, spend |
| Ink | `#0F2A43` | Text |
| Background | `#F3F7FB` | App background |
| Critical / Major / Minor | `#C8281E` / `#D97706` / `#5B8DEF` | Snag severity (checked for colour-blind separation) |

Logo files are in `public/brand/` (`clappia-logo.svg`, `clappia-mark.svg`, plus the original PNG). Fonts: Poppins for headings, Inter for body text.

## Deploy (GitHub Pages)

Every push to `main` runs `.github/workflows/deploy-pages.yml`, which builds the **static demo** (`npm run build:static`) and publishes it to https://saitalkchand.github.io/clappia-field-service/.

The static demo has no server: the API in `src/lib/localApi.ts` runs in the browser with the same rules as `server/`, and data is kept in that browser's localStorage (per visitor, not shared, not secure). Use `npm run dev` for the real Excel-backed app.
