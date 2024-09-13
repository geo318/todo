'use server'

import { db, task } from '@/database'
import { eq } from 'drizzle-orm'

export const createTask = async (formData: FormData) => {
  const name = formData.get('name') as string
  const description = formData.get('description') as string

  if (!name || !description) {
    return { error: 'Name and description are required' }
  }

  try {
    await db.insert(task).values({ name, description }).execute()
  } catch (error) {
    return { error: 'Failed to create task' }
  }
}

export const getTasks = async () => {
  return db.select().from(task).where(eq(task.completed, 0)).execute()
}

export const getCompletedTasks = async () => {
  return db.select().from(task).where(eq(task.completed, 1)).execute()
}

export const getTask = async (id: number) => {
  return db.select().from(task).where(eq(task.id, id)).execute()
}

export const updateTask = async (id: number, formData: FormData) => {
  const name = formData.get('name') as string
  const description = formData.get('description') as string

  if (!name || !description) {
    return { error: 'Name and description are required' }
  }

  try {
    await db
      .update(task)
      .set({ name, description })
      .where(eq(task.id, id))
      .execute()
  } catch (error) {
    return { error: 'Failed to update task' }
  }
}

export const deleteTask = async (id: number) => {
  try {
    await db.delete(task).where(eq(task.id, id)).execute()
  } catch (error) {
    return { error: 'Failed to delete task' }
  }
}

export const completeTask = async (id: number) => {
  try {
    await db.update(task).set({ completed: 1 }).where(eq(task.id, id)).execute()
  } catch (error) {
    return { error: 'Failed to complete task' }
  }
}
