import type { Config } from 'drizzle-kit'

export default {
  schema: './database/schema.ts',
  out: './database/db',
  dialect: 'sqlite',
  dbCredentials: {
    url: './database/db/sqlite.db',
  },
  verbose: true,
  strict: true,
} satisfies Config
