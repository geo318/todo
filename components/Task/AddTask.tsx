'use client'

import { Dialog } from '@/components'
import { AddTaskForm } from './AddTaskForm'
import { ROUTES } from '@/config'

export const AddTask = () => {
  return (
    <Dialog.trigger queryKey={ROUTES.getQueryKey('addTask')}>
      <Dialog.portal>
        <Dialog.contents
          render={({ closeHandler }) => (
            <AddTaskForm closeHandler={closeHandler} />
          )}
        />
      </Dialog.portal>
    </Dialog.trigger>
  )
}
