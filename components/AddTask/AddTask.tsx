import { CloseIcon } from '../icons'

export const AddTask: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <div className='flex overflow-hidden flex-col px-5 pt-96 pb-48 mx-auto w-full text-xs rounded-3xl bg-stone-400 bg-opacity-50 max-w-[480px]'>
      <form
        onSubmit={handleSubmit}
        className='flex overflow-hidden flex-col px-3 py-3 w-full rounded-xl bg-slate-50 shadow-[0px_2px_8px_rgba(106,108,224,0.26)]'
      >
        <header className='flex gap-5 justify-between self-end max-w-full font-bold text-slate-600 w-[191px]'>
          <h2>Create task</h2>
          <CloseIcon />
        </header>
        <input
          type='text'
          placeholder='Task name'
          className='overflow-hidden p-2 w-full text-xs bg-white rounded-md border border-indigo-500 border-solid text-zinc-400'
        />

        <div className='mt-2.5'>
          <textarea
            id='description'
            name='description'
            placeholder='Type task details here...'
            className='overflow-hidden px-3 pt-5 pb-16 w-full max-w-full text-xs font-semibold bg-indigo-50 text-slate-500 rounded-md'
          />
        </div>
        <button
          type='submit'
          className='gap-2.5 self-stretch px-10 py-2 mt-2 font-medium text-white whitespace-nowrap bg-indigo-500 rounded'
        >
          Save
        </button>
      </form>
    </div>
  )
}
