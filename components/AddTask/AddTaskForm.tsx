import { CloseIcon } from '../icons'

export const AddTaskForm = (props: { closeHandler: () => void }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex overflow-hidden flex-col px-3 py-3 w-full rounded-xl bg-slate-50 shadow-[0px_2px_8px_rgba(106,108,224,0.26)]'
    >
      <section className='flex text-center justify-center items-center max-w-full font-bold text-slate-600 relative mb-2'>
        <h2>Create task</h2>
        <div className='absolute right-0'>
          <CloseIcon onClick={props.closeHandler} className='cursor-pointer' />
        </div>
      </section>

      <input
        name='name'
        type='text'
        placeholder='Task name'
        className='overflow-hidden p-2 w-full text-xs bg-white rounded-md border border-indigo-500 border-solid text-zinc-400'
      />

      <div className='mt-2.5'>
        <textarea
          id='description'
          name='description'
          placeholder='Type task details here...'
          rows={4}
          className='overflow-hidden px-3 py-5 w-full max-w-full text-xs font-semibold bg-indigo-50 text-slate-500'
          style={{ boxShadow: 'box-shadow: 1px 1px 4px 0px #30507D40 inset' }}
        />
      </div>
      <button
        type='submit'
        className='gap-2.5 self-stretch px-10 py-2 mt-2 font-medium text-white whitespace-nowrap bg-indigo-500 hover:bg-indigo-600 rounded'
      >
        Save
      </button>
    </form>
  )
}
