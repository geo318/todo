import { BinIcon, CheckMarkIcon, ChevronIcon, PenIcon } from './icons'

interface TaskItemProps {
  title: string
  description: string
  isExpanded: boolean
}

export const TaskItem: React.FC<TaskItemProps> = ({
  title,
  description,
  isExpanded,
}) => {
  return (
    <li className='flex overflow-hidden flex-col p-3 w-full rounded-xl bg-slate-50 shadow-[0px_2px_8px_rgba(106,108,224,0.26)]'>
      <div className='flex gap-5 justify-between text-sm font-medium text-slate-600'>
        <h3>{title}</h3>
        <ChevronIcon />
      </div>
      {isExpanded && description && (
        <p className='overflow-hidden p-3 mt-8 text-xs font-semibold bg-indigo-50 text-slate-500'>
          {description}
        </p>
      )}
      <div className='flex gap-5 justify-between mt-6 w-full'>
        <div className='flex gap-2.5'>
          <PenIcon />
          <BinIcon />
        </div>
        <div className='flex gap-1 text-xs font-medium text-slate-500'>
          <div className='grow my-auto'>Mark completed</div>
          <CheckMarkIcon />
        </div>
      </div>
    </li>
  )
}

export default TaskItem
