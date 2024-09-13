'use client'

import React, { useContext } from 'react'
import { DialogContext } from './Context'

type ContentsProps = {
  render: (props: { closeHandler: () => void }) => React.ReactNode
}

export const Contents: React.FC<ContentsProps> = ({ render }) => {
  const { closeHandler } = useContext(DialogContext)
  if (!closeHandler) return null

  return (
    <div className='flex justify-center w-full'>
      <div className='max-h-[80vh] overflow-y-auto w-[100dvw] max-w-[35rem] px-5 mt-[45dvh]'>
        {render({ closeHandler })}
      </div>
    </div>
  )
}
