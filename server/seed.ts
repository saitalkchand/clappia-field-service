import { readFileSync } from 'node:fs'
import { mastersFromSource, type SourceJson } from '../src/lib/masters.ts'
import type { Masters } from '../src/lib/schema.ts'

export function buildMasters(jsonPath: string): Masters {
  return mastersFromSource(JSON.parse(readFileSync(jsonPath, 'utf8')) as SourceJson)
}
