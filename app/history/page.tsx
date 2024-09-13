import { TaskItem } from '@/components'

const tasks = [
  {
    id: 1,
    title: 'Dorem ipsum dolor sit',
    description:
      'Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit consectetur adipiscing.',
    isExpanded: true,
  },
  {
    id: 2,
    title: 'Dorem ipsum dolor sit',
    description: '',
    isExpanded: false,
  },
]

export default function History() {
  return (
    <div className='self-stretch flex flex-col grow overflow-auto mt-7 -mx-3'>
      <article className='flex gap-2 self-stretch grow pb-3'>
        <ul className='flex flex-col grow shrink-0 basis-0 w-fit px-3 gap-3'>
          {tasks.map((task) => (
            <TaskItem key={task.id} {...task} inHistory/>
          ))}
        </ul>
      </article>
    </div>
  )
}
