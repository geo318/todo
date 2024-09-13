import { Avatar, GearIcon } from './icons'

export const Header: React.FC = () => {
  return (
    <header className='flex gap-5 justify-between w-full text-base font-bold text-slate-600 shrink-0'>
      <div className='flex gap-2.5'>
        <Avatar />
        <div className='my-auto basis-auto'>James Ronald</div>
      </div>
      <GearIcon />
    </header>
  )
}

export default Header
