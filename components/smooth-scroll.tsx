"use client"

import { useEffect } from "react"
import Lenis from "lenis"

export default function SmoothScroll() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduced) return

    const lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 1, autoRaf: true })
    window.__lenis = lenis

    return () => {
      lenis.destroy()
      window.__lenis = undefined
    }
  }, [])

  return null
}
