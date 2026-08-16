"use client"

import { useEffect, useRef, useState } from "react"

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (!fine || reduced) return
    setEnabled(true)
  }, [])

  useEffect(() => {
    if (!enabled) return

    const dot = dotRef.current
    if (!dot) return

    let targetX = window.innerWidth / 2
    let targetY = window.innerHeight / 2
    let currentX = targetX
    let currentY = targetY
    let hover = false
    let raf = 0

    const onMove = (e: PointerEvent) => {
      targetX = e.clientX
      targetY = e.clientY
    }

    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement
      hover = !!el.closest("a, button, [data-cursor]")
      dot.style.scale = hover ? "1.6" : "1"
    }

    const loop = () => {
      currentX += (targetX - currentX) * 0.18
      currentY += (targetY - currentY) * 0.18
      dot.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`
      raf = requestAnimationFrame(loop)
    }

    window.addEventListener("pointermove", onMove, { passive: true })
    window.addEventListener("mouseover", onOver, { passive: true })
    raf = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener("pointermove", onMove)
      window.removeEventListener("mouseover", onOver)
      cancelAnimationFrame(raf)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <div
      ref={dotRef}
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-2.5 w-2.5 rounded-full bg-champagne mix-blend-difference transition-[scale] duration-300 md:block"
      aria-hidden
    />
  )
}
