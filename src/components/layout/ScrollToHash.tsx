import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * After React Router navigates (including hash-only changes), scroll to the target id
 * or reset to top. Relies on `scroll-padding-top` on `html` for the fixed header.
 */
export function ScrollToHash() {
  const { pathname, hash, key } = useLocation()

  useLayoutEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1))
      if (!id) {
        return
      }
      const el = document.getElementById(id)
      if (el) {
        const prefersReduced =
          typeof window !== 'undefined' &&
          window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
        el.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'start' })
      }
      return
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname, hash, key])

  return null
}
