"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { smoothScrollTo } from "@/lib/smooth-scroll"

const NAV_ITEMS = [
  { name: "About", id: "about" },
  { name: "Mobile", id: "mobile-era" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Roadmap", id: "roadmap" },
  { name: "Experience", id: "experience" },
  { name: "Publications", id: "publications" },
  { name: "Contact", id: "contact" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleResumeDownload = () => {
    const link = document.createElement("a")
    link.href = "/resume.pdf"
    link.download = "Moiz_Baloch_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const go = (id: string) => {
    smoothScrollTo(id)
    setIsMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? "border-b border-white/[0.06] bg-[#060606]/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10 lg:px-16">
        <button
          onClick={() => go("hero")}
          className="group flex items-center gap-2"
          data-cursor
        >
          <span className="font-serif text-xl tracking-tight">
            Moiz<span className="text-champagne">.</span>
          </span>
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className="rounded-md px-3 py-1.5 font-mono text-[13px] text-muted-foreground transition-colors hover:bg-white/[0.04] hover:text-champagne"
              data-cursor
            >
              {item.name}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Button
            onClick={handleResumeDownload}
            className="hidden border border-champagne/40 bg-transparent px-4 py-1.5 font-mono text-[13px] text-champagne hover:bg-champagne hover:text-black md:inline-flex"
          >
            Resume
          </Button>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-md border border-white/[0.1] text-muted-foreground transition-colors hover:text-champagne lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.25 }}
          className="overflow-hidden border-b border-white/[0.06] bg-[#060606]/95 backdrop-blur-md lg:hidden"
        >
          <div className="space-y-1 px-6 py-4">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className="block w-full rounded-md px-3 py-2.5 text-left font-mono text-sm text-muted-foreground transition-colors hover:bg-white/[0.04] hover:text-champagne"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={handleResumeDownload}
              className="mt-2 block w-full rounded-md border border-champagne/40 px-3 py-2.5 text-left font-mono text-sm text-champagne transition-colors hover:bg-champagne hover:text-black"
            >
              Download Resume
            </button>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
