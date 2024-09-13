import { sqliteTable, text, int } from 'drizzle-orm/sqlite-core'

export const task = sqliteTable('task', {
  id: int('id').primaryKey(),
  name: text('name').unique().notNull(),
  description: text('description').notNull(),
  completed: int('completed').notNull().default(0),
})
