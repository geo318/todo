'use client'

import { createTask, updateTask } from '@/actions'
import { CloseIcon } from '@/components'
import { Task } from '@/types'
import { useEffect } from 'react'
import { useFormState } from 'react-dom'

export const TaskForm = (props: { closeHandler: () => void; task?: Task }) => {
  const [state, action] = useFormState(
    props.task ? updateTask : createTask,
    undefined
  )
  useEffect(() => {
    if (!state?.success) return
    props.closeHandler()
  }, [state, props])

  return (
    <form
      action={action}
      className='flex overflow-hidden flex-col px-3 py-3 w-full rounded-xl bg-slate-50 shadow-[0px_2px_8px_rgba(106,108,224,0.26)]'
    >
      <section className='flex text-center justify-center items-center max-w-full font-bold text-slate-600 relative mb-2'>
        <h2>{!props.task ? 'Create task' : 'Edit task name'}</h2>
        <div className='absolute right-0'>
          <CloseIcon onClick={props.closeHandler} className='cursor-pointer' />
        </div>
      </section>
      {state?.error && (
        <div className='text-xs text-red-500 py-2 text-left'>{state.error}</div>
      )}
      <fieldset>
        {props.task ? (
          <input hidden name='id' defaultValue={props.task.id} />
        ) : null}
        <input
          name='name'
          type='text'
          placeholder='Task name'
          defaultValue={props.task?.name}
          className='overflow-hidden p-2 w-full text-xs bg-white rounded-md border border-indigo-500 border-solid text-zinc-400'
          required
        />

        <div className='mt-2.5'>
          <textarea
            id='description'
            name='description'
            placeholder='Type task details here...'
            rows={4}
            className='overflow-hidden px-3 py-5 w-full max-w-full text-xs font-semibold bg-[#E8F1FD] text-[#6C86A8]'
            style={{ boxShadow: '1px 1px 4px 0px #30507D40 inset' }}
            defaultValue={props.task?.description}
            required
          />
        </div>
      </fieldset>
      <button
        type='submit'
        className='gap-2.5 self-stretch px-10 py-2 mt-2 font-medium text-white whitespace-nowrap bg-indigo-500 hover:bg-indigo-600 rounded'
      >
        Save
      </button>
    </form>
  )
}
