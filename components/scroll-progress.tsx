"use client"

import { motion, useScroll, useSpring } from "framer-motion"

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 })

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[80] h-px origin-left bg-champagne"
      style={{ scaleX }}
      aria-hidden
    />
  )
}
