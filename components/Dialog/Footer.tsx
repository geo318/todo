import { Button } from '@/components'

export const Footer = (props: { closeHandler: () => void }) => {
  return (
    <>
      <div className='w-full border-t border-slate-300 border-solid min-h-[1px] max-md:max-w-full mt-6 sticky bottom-0 z-10 bg-white' />
      <section className='flex gap-6 items-center pt-4 w-full text-base font-semibold uppercase whitespace-nowrap max-md:max-w-full'>
        <div className='flex gap-10 items-start self-stretch my-auto w-full px-4'>
          <Button onClick={props.closeHandler} variant='basic' className='ml-auto'>
            გაუქმება
          </Button>
          <Button type='submit'>შემდეგი</Button>
        </div>
      </section>
    </>
  )
}
