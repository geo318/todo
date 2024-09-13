import { getCompletedTasks } from '@/actions'
import { TaskItem } from '@/components'

export default async function History(props: {
  searchParams: { search: string }
}) {
  const tasks = await getCompletedTasks(props.searchParams?.search)

  return (
    <div className='self-stretch flex flex-col grow overflow-auto mt-7 -mx-3'>
      <article className='flex gap-2 self-stretch grow pb-3'>
        <ul className='flex flex-col grow shrink-0 basis-0 w-fit px-3 gap-3'>
          {tasks.map((task) => (
            <TaskItem key={task.id} {...task} />
          ))}
        </ul>
      </article>
    </div>
  )
}
