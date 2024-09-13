'use client'

import { Dialog } from '@/components'
import { AddTaskForm } from './AddTaskForm'

export const AddTask = () => {
  return (
    <Dialog.trigger queryKey='task'>
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
