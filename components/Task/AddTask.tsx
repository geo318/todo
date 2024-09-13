'use client'

import { Dialog } from '@/components'
import { TaskForm } from './TaskForm'
import { ROUTES } from '@/config'

export const AddTask = () => {
  return (
    <Dialog.trigger queryKey={ROUTES.getQueryKey('addTask')}>
      <Dialog.portal>
        <Dialog.contents
          render={({ closeHandler }) => (
            <TaskForm closeHandler={closeHandler} />
          )}
        />
      </Dialog.portal>
    </Dialog.trigger>
  )
}
