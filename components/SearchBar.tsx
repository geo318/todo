import { SearchIcon } from './icons'

export const SearchBar: React.FC = () => {
  return (
    <form className='flex overflow-hidden gap-5 justify-between px-2 py-1.5 mt-4 w-full bg-white rounded-md'>
      <label htmlFor='search' className='sr-only'>
        Search for notes
      </label>
      <input
        type='text'
        id='search'
        placeholder='Search for notes'
        className='my-auto text-xs text-zinc-400 w-full'
      />
      <button
        type='submit'
        className='flex gap-2.5 items-center p-1.5 bg-indigo-500 rounded-md h-[26px] w-[26px]'
      >
        <SearchIcon />
      </button>
    </form>
  )
}
