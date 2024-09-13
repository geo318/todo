'use client'

import Link from 'next/link'
import { SearchIcon } from './icons'
import { useState } from 'react'
import { ROUTES } from '@/config'

export const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('')
  return (
    <form className='flex overflow-hidden gap-5 justify-between px-2 py-1.5 mt-4 w-full bg-white rounded-md shrink-0 relative focus-within:ring'>
      <label htmlFor='search' className='sr-only'>
        Search for notes
      </label>
      <input
        type='text'
        id='search'
        placeholder='Search for notes'
        className='my-auto text-xs px-2 text-zinc-400 w-full absolute inset-0 bg-transparent border-none select-none focus:outline-none'
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Link
        href={`${ROUTES.query.search}=${searchQuery}`}
        className=' ml-auto z-10'
      >
        <button
          type='submit'
          className='flex gap-2.5 items-center p-1.5 bg-indigo-500 rounded-md h-[26px] w-[26px]'
        >
          <SearchIcon />
        </button>
      </Link>
    </form>
  )
}
