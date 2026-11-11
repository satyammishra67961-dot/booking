import { useEffect } from 'react'

export function useBodyLock(locked) {
  useEffect(() => {
    if (!locked) return undefined

    const previousOverflow = document.body.style.overflow
    const lenis = window.__webbLenis

    document.body.style.overflow = 'hidden'
    lenis?.stop()

    return () => {
      document.body.style.overflow = previousOverflow
      lenis?.start()
    }
  }, [locked])
}
