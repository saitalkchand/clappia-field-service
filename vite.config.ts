import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'
import { excelApiMiddleware } from './server/excelApi.ts'

// Serves /api/* from the Excel workbook in data/ during `vite dev` and `vite preview`.
function excelDatabase(): Plugin {
  return {
    name: 'excel-database',
    configureServer(server) {
      server.middlewares.use(excelApiMiddleware)
    },
    configurePreviewServer(server) {
      server.middlewares.use(excelApiMiddleware)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), excelDatabase()],
  server: { watch: { ignored: ['**/data/**'] } },
})
