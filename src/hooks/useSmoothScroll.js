import { useEffect } from 'react'
import Lenis from 'lenis'

export function useSmoothScroll() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const lenis = new Lenis({
      lerp: reduceMotion ? 1 : 0.085,
      duration: 1.15,
      smoothWheel: !reduceMotion,
      syncTouch: false,
      touchMultiplier: 1.35,
      wheelMultiplier: 0.95,
    })

    window.__webbLenis = lenis

    let frame = 0
    const raf = (time) => {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)

    const onAnchorClick = (event) => {
      const anchor = event.target.closest('a[href^="#"]')
      if (!anchor) return

      const href = anchor.getAttribute('href')
      if (!href || href === '#') return

      const target = document.querySelector(href)
      if (!target) return

      event.preventDefault()
      lenis.scrollTo(target, {
        offset: -6,
        duration: reduceMotion ? 0 : 1.2,
      })
    }

    document.addEventListener('click', onAnchorClick)

    return () => {
      document.removeEventListener('click', onAnchorClick)
      cancelAnimationFrame(frame)
      lenis.destroy()
      if (window.__webbLenis === lenis) delete window.__webbLenis
    }
  }, [])
}
