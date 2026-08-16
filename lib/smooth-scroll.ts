"use client"

import type Lenis from "lenis"

declare global {
  interface Window {
    __lenis?: Lenis
  }
}

export function smoothScrollTo(target: string) {
  const el = document.getElementById(target)
  if (!el) return
  if (window.__lenis) {
    window.__lenis.scrollTo(el, { duration: 1.2 })
  } else {
    el.scrollIntoView({ behavior: "smooth" })
  }
}
