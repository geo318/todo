import { twMerge } from 'tailwind-merge'

export const Header = ({
  title,
  className,
  children,
}: {
  title: string
  className?: string
  children?: React.ReactNode
}) => (
  <section
    className={twMerge(
      'flex gap-1 items-center pb-4 mb-6 w-full text-sm font-bold border-b border-slate-300 text-slate-600 max-md:max-w-full sticky top-0 z-10 bg-white',
      className
    )}
  >
    <h4 className='flex-1 shrink gap-5 self-stretch px-4 my-auto w-full min-w-[240px] max-md:max-w-full text-center uppercase'>
      {title}
    </h4>
    {children}
  </section>
)
