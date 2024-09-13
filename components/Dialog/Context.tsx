import { createContext } from 'react'

export const DialogContext = createContext<{
  key: string
  param?: string | number
  closeHandler?: () => void
}>({ key: '' })
