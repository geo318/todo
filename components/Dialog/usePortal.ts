import { useRouter, useSearchParams } from 'next/navigation'
import { useContext, useEffect, useRef, useState } from 'react'
import { DialogContext } from './Context'

export const usePortal = () => {
  const searchParams = useSearchParams()
  const urlSearchParams = new URLSearchParams(searchParams.toString())

  const router = useRouter()

  const { key } = useContext(DialogContext)
  const ref = useRef<Element | null>(null)
  const [mounted, setMounted] = useState(false)

  const closeHandler = () => {
    if (ref.current) {
      ref.current.remove()
      urlSearchParams.delete(key)
      const newUrl = `${window.location.pathname}?${urlSearchParams.toString()}`
      router.push(newUrl)
    }
  }

  useEffect(() => {
    const portal = document.createElement('div')
    portal.setAttribute('id', 'portal')
    portal.classList.add('fixed', 'inset-0', 'z-50')
    const backdrop = document.createElement('div')

    backdrop.classList.add(
      'backdrop',
      'fixed',
      'inset-0',
      'overflow-y-auto',
      'bg-[#908A8A80]',
      'bg-opacity-50',
      '-z-10'
    )
    backdrop.addEventListener('click', closeHandler)
    portal.append(backdrop)

    const body = document.querySelector('body')

    if (body) {
      body.append(portal)
      body.classList.add('overflow-hidden')
    }

    ref.current = portal
    setMounted(true)

    return () => {
      if (!body) return
      portal.remove()
      backdrop.removeEventListener('click', closeHandler)
      body.classList.remove('overflow-hidden')
    }
  }, [])

  return { mounted, ref, closeHandler }
}
