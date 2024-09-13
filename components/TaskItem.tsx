'use client'

import { useState } from 'react'
import { BinIcon, CheckMarkIcon, ChevronIcon, PenIcon } from './icons'
import { twMerge } from 'tailwind-merge'
import { Task } from '@/types'

export const TaskItem: React.FC<Task> = ({ name, description, completed }) => {
  const [isExpanded, setIsExpanded] = useState(true)
  return (
    <li className='flex overflow-hidden flex-col p-3 w-full rounded-xl bg-slate-50 shadow-[0px_2px_8px_rgba(106,108,224,0.26)]'>
      <div className='flex gap-5 justify-between text-sm font-medium text-slate-600'>
        <h3>{name}</h3>
        <ChevronIcon
          onClick={() => setIsExpanded((prev) => !prev)}
          className={twMerge(
            'transition-transform',
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
        <p className='overflow-hidden'>
          <div className='p-3 mt-8 text-xs font-semibold bg-indigo-50 text-slate-500'>
            {description}
          </div>
        </p>
      </div>
      <div className='flex gap-5 justify-between mt-6 w-full'>
        <div className='flex gap-2.5'>
          {!completed && <PenIcon />}
          <BinIcon />
        </div>
        <div className='flex gap-1 text-xs font-medium text-slate-500'>
          <div className='grow my-auto first-letter:capitalize'>
            {`${completed ? '' : 'Mark '}`}completed
          </div>
          <CheckMarkIcon />
        </div>
      </div>
    </li>
  )
}

export default TaskItem
