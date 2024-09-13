import Link from 'next/link'
import { PlusIcon } from './icons'
import { ROUTES } from '@/config'

export const AddTaskButton: React.FC = () => {
  return (
    <Link
      href={ROUTES.query.addTask}
      className='fixed bottom-7 flex overflow-hidden flex-col justify-center items-center self-center px-5 mt-6 bg-indigo-500 h-[52px] rounded-[45px] shadow-[0px_4px_18px_rgba(0,0,0,0.11)] w-[52px]'
    >
      <PlusIcon />
    </Link>
  )
}

export default AddTaskButton
