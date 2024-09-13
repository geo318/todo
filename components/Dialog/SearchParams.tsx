'use client'

import React, { memo, ReactNode, useContext } from 'react'
import { useSearchParams } from 'next/navigation'
import { DialogContext } from './Context'

type SearchParamsWrapperProps = {
  children: ReactNode
  queryKey: string
  not?: boolean
  param?: string | number
}

export const SearchParamsWrapper: React.FC<SearchParamsWrapperProps> = ({
  children,
  queryKey,
  not,
  param,
}) => {
  const params = useSearchParams()
  const trimmedQueryKey = queryKey.replace('?', '')
  const cond = param
    ? params.get(trimmedQueryKey) == param
    : typeof params.get(trimmedQueryKey) === 'string'
  const render = not ? !cond : cond

  return (
    <DialogContext.Provider value={{ key: trimmedQueryKey, param }}>
      {render ? children : null}
    </DialogContext.Provider>
  )
}
