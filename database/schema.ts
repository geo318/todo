import { sqliteTable, text, int } from 'drizzle-orm/sqlite-core'

export const slider = sqliteTable('task', {
  id: int('id').primaryKey(),
  name: text('name').notNull(),
  description: text('description').notNull(),
})
