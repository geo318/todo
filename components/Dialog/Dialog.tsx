'use client'
import { Contents } from './Contents'
import { SearchParamsWrapper } from './SearchParams'
import { Header } from './Header'
import Portal from './Portal'

export const Dialog = {
  trigger: SearchParamsWrapper,
  portal: Portal,
  contents: Contents,
  header: Header,
}
