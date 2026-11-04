'use client'

import { useEffect } from 'react'

/**
 * When the page is opened from another page with a #hash (e.g. the header's
 * "Partner With Us" button), glide down to that section instead of jumping.
 */
export function SmoothHashScroll() {
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1))
    if (!id) return
    const el = document.getElementById(id)
    if (!el) return
    const frame = requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }))
    return () => cancelAnimationFrame(frame)
  }, [])

  return null
}
