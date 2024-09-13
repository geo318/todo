import { AddTaskButton, Header, SearchBar, TaskList } from '@/components'
import { HistoryIcon, TaskIcon } from '@/components/icons'

export default function Home() {
  return (
    <main className='flex overflow-hidden flex-col items-start pt-8 pb-2 px-5 mx-auto w-full bg-indigo-50 max-w-lg min-h-dvh'>
      <Header />
      <SearchBar />
      <nav className='flex gap-5 mt-11 text-xs font-medium whitespace-nowrap text-slate-600'>
        <a href='#tasks'>Tasks</a>
        <a href='#history'>History</a>
      </nav>
      <section className='flex gap-10 w-full'>
        <div className='flex flex-1 gap-4'>
          <TaskIcon />
          <HistoryIcon />
        </div>
        <button className='self-start mt-5 text-xs font-medium text-slate-600'>
          Clear all Tasks
        </button>
      </section>
      <TaskList />
      <AddTaskButton />
    </main>
  )
}
