"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowDown, FileText, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import TerminalCard from "@/components/terminal-card"
import { smoothScrollTo } from "@/lib/smooth-scroll"

const Hero3D = dynamic(() => import("@/components/hero-3d"), { ssr: false })

const ROLES = [
  "fine tuning llms with qlora",
  "deploying models via fastapi",
  "building computer vision systems",
  "engineering atlasllm from scratch",
]

function TypedLine() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % ROLES.length), 3200)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="flex items-center gap-3 font-mono text-sm text-muted-foreground md:text-base">
      <span className="text-champagne">$</span>
      <span className="h-6 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            initial={{ y: 14, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -14, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="block"
          >
            {ROLES[index]}
          </motion.span>
        </AnimatePresence>
      </span>
      <span className="inline-block h-4 w-[7px] animate-caret bg-champagne" />
    </div>
  )
}

export default function Hero() {
  const handleResumeDownload = () => {
    const link = document.createElement("a")
    link.href = "/resume.pdf"
    link.download = "Moiz_Baloch_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="relative flex min-h-screen items-center overflow-hidden">
      <Hero3D />

      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_35%,rgba(214,201,168,0.05),transparent_70%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-32 md:px-10 lg:px-16">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 flex items-center gap-4"
            >
              <span className="font-mono text-xs uppercase tracking-[0.35em] text-champagne">
                ai/ml engineer · multan, pk
              </span>
              <span className="h-px w-10 bg-champagne/40" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-5xl leading-[1.02] tracking-tight sm:text-7xl md:text-8xl"
            >
              Moiz
              <br />
              <span className="font-serif italic text-champagne">Baloch</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground"
            >
              A Computer Science undergraduate building machine learning, deep learning, and LLM systems, from
              experimentation to production. Fine tuning models, serving them, and engineering the infrastructure
              around them.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8"
            >
              <TypedLine />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <Button
                onClick={handleResumeDownload}
                className="bg-champagne text-black hover:bg-champagne-bright"
              >
                <FileText className="mr-2 h-4 w-4" /> Download Resume
              </Button>
              <Button
                variant="outline"
                onClick={() => window.open("https://github.com/igmoiiz", "_blank")}
                className="border-white/20 text-foreground hover:border-champagne/60 hover:text-champagne"
              >
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Button>
              <Button
                variant="outline"
                onClick={() => window.open("https://www.linkedin.com/in/moiz-baloch-a615392b4", "_blank")}
                className="border-white/20 text-foreground hover:border-champagne/60 hover:text-champagne"
              >
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </Button>
              <Button
                variant="ghost"
                onClick={() => smoothScrollTo("contact")}
                className="text-muted-foreground hover:bg-white/[0.04] hover:text-foreground"
              >
                <Mail className="mr-2 h-4 w-4" /> Contact
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden justify-center lg:flex"
          >
            <TerminalCard />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault()
            smoothScrollTo("about")
          }}
          className="flex flex-col items-center gap-2 font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground transition-colors hover:text-champagne"
          data-cursor
        >
          Scroll
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </a>
      </motion.div>
    </div>
  )
}
