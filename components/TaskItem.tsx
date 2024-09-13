'use client'

import { useState } from 'react'
import { BinIcon, CheckMarkIcon, ChevronIcon, PenIcon } from './icons'
import { twMerge } from 'tailwind-merge'
import { Task } from '@/types'
import Link from 'next/link'
import { ROUTES } from '@/config'
import { completeTask, deleteTask } from '@/actions'

export const TaskItem: React.FC<Task> = ({
  id,
  name,
  description,
  completed,
}) => {
  const [isExpanded, setIsExpanded] = useState(true)
  return (
    <li className='flex overflow-hidden flex-col p-3 w-full rounded-xl bg-slate-50 shadow-[0px_2px_8px_rgba(106,108,224,0.26)]'>
      <div className='flex gap-5 justify-between text-sm font-medium text-slate-600'>
        <h3>{name}</h3>
        <ChevronIcon
          onClick={() => setIsExpanded((prev) => !prev)}
          className={twMerge(
            'transition-transform cursor-pointer',
            !isExpanded ? 'rotate-180' : 'rotate-0'
          )}
        />
      </div>
      <div
        className='overflow-hidden grid'
        style={{
          gridTemplateRows: isExpanded ? '1fr' : '0fr',
          transition: 'grid-template-rows 0.200s ease-in-out',
        }}
      >
        <div className='overflow-hidden'>
          <p
            className='p-3 mt-8 text-xs font-semibold bg-indigo-50 text-slate-500'
            style={{ boxShadow: '1px 1px 4px 0px #30507D40 inset' }}
          >
            {description}
          </p>
        </div>
      </div>
      <div className='flex gap-5 justify-between mt-6 w-full'>
        <div className='flex gap-2.5'>
          {!completed && (
            <Link href={`${ROUTES.query.editTask}=${id}`}>
              <PenIcon />
            </Link>
          )}
          <form action={deleteTask.bind(null, id)}>
            <button type='submit'>
              <BinIcon />
            </button>
          </form>
        </div>
        <div className='flex items-center gap-1 text-xs font-medium text-slate-500'>
          <form
            action={!completed ? completeTask.bind(null, id) : undefined}
            className='flex justify-center'
          >
            <button
              type={completed ? 'button' : 'submit'}
              className={twMerge('flex gap-1', completed && 'cursor-default')}
            >
              <span className='grow my-auto first-letter:capitalize'>
                {`${completed ? '' : 'Mark '}`}completed
              </span>

              <CheckMarkIcon />
            </button>
          </form>
        </div>
      </div>
    </li>
  )
}

export default TaskItem
