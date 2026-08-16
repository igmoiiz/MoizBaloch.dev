"use client"

import { useRef } from "react"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Roadmap from "@/components/roadmap"
import Experience from "@/components/experience"
import Education from "@/components/education"
import Certifications from "@/components/certifications"
import Publications from "@/components/publications"
import Contact from "@/components/contact"
import Navbar from "@/components/navbar"
import Marquee from "@/components/marquee"
import ScrollProgress from "@/components/scroll-progress"
import CustomCursor from "@/components/custom-cursor"
import SmoothScroll from "@/components/smooth-scroll"
import { smoothScrollTo } from "@/lib/smooth-scroll"

const MARQUEE_ITEMS = [
  "PyTorch",
  "Hugging Face",
  "XGBoost",
  "OpenCV",
  "YOLO11",
  "QLoRA",
  "FastAPI",
  "Docker",
  "MLflow",
  "Flutter",
  "Node.js",
  "PostgreSQL",
]

export default function Home() {
  const mainRef = useRef<HTMLElement>(null)

  const scrollToSection = (sectionId: string) => {
    smoothScrollTo(sectionId)
  }

  return (
    <main ref={mainRef} className="relative min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <CustomCursor />
      <SmoothScroll />

      <Navbar />

      <Hero />

      <Marquee items={MARQUEE_ITEMS} />

      <About />
      <Skills />
      <Projects />
      <Roadmap />
      <Experience />
      <Education />
      <Certifications />
      <Publications />
      <Contact />

      <footer className="border-t border-white/[0.06] bg-[#060606]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-10 font-mono text-xs text-muted-foreground md:flex-row md:px-10 lg:px-16">
          <span>
            © 2026 Moiz Baloch. All rights reserved.
          </span>
          <span>
            built with Next.js · Three.js · framer-motion
          </span>
          <button
            onClick={() => scrollToSection("hero")}
            className="text-champagne transition-colors hover:text-champagne-bright"
            data-cursor
          >
            back to top ↑
          </button>
        </div>
      </footer>
    </main>
  )
}
