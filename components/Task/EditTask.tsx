'use client'

import { Dialog } from '@/components'
import { AddTaskForm } from './AddTaskForm'
import { ROUTES } from '@/config'
import { useSearchParams } from 'next/navigation'
import { Task } from '@/types'

export const EditTask = (props: { task?: Task }) => {
  const param = useSearchParams()
  const queryKey = ROUTES.getQueryKey('editTask')
  const id = Number(param.get(queryKey))
  return (
    <Dialog.trigger queryKey={queryKey} param={id}>
      <Dialog.portal>
        <Dialog.contents
          render={({ closeHandler }) => (
            <AddTaskForm closeHandler={closeHandler} task={props.task} />
          )}
        />
      </Dialog.portal>
    </Dialog.trigger>
  )
}
