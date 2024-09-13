'use client'

import Link from 'next/link'
import { HistoryIcon, TaskIcon } from './icons'
import { usePathname } from 'next/navigation'
import { ROUTES } from '@/config'
import { twMerge } from 'tailwind-merge'
import { clearCompletedTasks, clearIncompleteTasks } from '@/actions'

export const Nav = () => {
  const pathname = usePathname()
  return (
    <div className='flex'>
      <nav className='flex gap-5 text-xs font-medium whitespace-nowrap text-slate-600'>
        <ul className='flex gap-4'>
          <li>
            <Link
              href={ROUTES.list.tasks}
              className='text-[#30507D] font-medium text-[0.625rem] text-center flex flex-col'
            >
              <span>Tasks</span>
              <TaskIcon
                className={twMerge(
                  pathname.includes(ROUTES.list.tasks)
                    ? '[&>rect]:fill-[#6A6CE0]'
                    : ''
                )}
              />
            </Link>
          </li>
          <li>
            <Link
              href={ROUTES.list.history}
              className='text-[#30507D] font-medium text-[0.625rem] text-center flex flex-col'
            >
              <span>History</span>
              <HistoryIcon
                className={twMerge(
                  pathname.includes(ROUTES.list.history)
                    ? '[&>rect]:fill-[#6A6CE0]'
                    : ''
                )}
              />
            </Link>
          </li>
        </ul>
      </nav>
      <form
        className='ml-auto mt-auto'
        action={
          pathname.includes(ROUTES.list.tasks)
            ? clearIncompleteTasks
            : clearCompletedTasks
        }
      >
        <button
          className='self-start text-xs font-medium text-slate-600 hover:underline'
          type='submit'
        >
          {pathname.includes(ROUTES.list.tasks)
            ? 'Clear all Tasks'
            : 'Clear all History'}
        </button>
      </form>
    </div>
  )
}
