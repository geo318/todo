'use client'

import React, { FC, ReactNode, useContext } from 'react'
import { createPortal } from 'react-dom'
import { usePortal } from './usePortal'
import { DialogContext } from './Context'

type PortalProps = {
  children: ReactNode
}

const Portal: FC<PortalProps> = ({ children }) => {
  const { mounted, ref, closeHandler } = usePortal()
  const { key, param } = useContext(DialogContext)

  // Provide the closeHandler via context
  return mounted && ref.current ? (
    <DialogContext.Provider value={{ key, param, closeHandler }}>
      {createPortal(<div className='modal w-max mx-auto'>{children}</div>, ref.current)}
    </DialogContext.Provider>
  ) : null
}

export default Portal
