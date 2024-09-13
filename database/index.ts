import { drizzle } from 'drizzle-orm/better-sqlite3'
import Database from 'better-sqlite3'
import * as schema from './schema'

const sqlite = new Database('./database/db/sqlite.db')
export const db = drizzle(sqlite, { schema })

export * from './schema'
