import { GraduationCap } from "lucide-react"
import Reveal from "@/components/reveal"
import SectionHeading from "@/components/section-heading"

const COURSEWORK = [
  "Machine Learning",
  "Deep Learning",
  "Data Structures & Algorithms",
  "Databases",
  "Mobile Application Development",
]

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36 lg:px-16">
      <SectionHeading
        index="07"
        eyebrow="Education"
        title={
          <>
            Where I&apos;m{" "}
            <span className="font-serif italic text-champagne">learning.</span>
          </>
        }
      />

      <Reveal>
        <div className="grid gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] md:grid-cols-2">
          <div className="bg-[#0d0d0d] p-8">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03]">
              <GraduationCap className="h-5 w-5 text-champagne" />
            </div>
            <h3 className="mt-6 font-serif text-2xl tracking-tight">B.S. Computer Science</h3>
            <p className="mt-2 text-muted-foreground">Air University, Multan Campus</p>
            <p className="mt-4 font-mono text-sm text-champagne">Oct 2023 — Jun 2027</p>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Final-year project: <span className="text-foreground">Al-Safeena</span> — the live home-services
              marketplace built for a Saudi Arabian client.
            </p>
          </div>

          <div className="bg-[#0d0d0d] p-8">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Relevant coursework</p>
            <ul className="mt-6 space-y-3">
              {COURSEWORK.map((course) => (
                <li key={course} className="flex items-center gap-3 font-mono text-sm text-muted-foreground">
                  <span className="h-1 w-1 rounded-full bg-champagne" />
                  {course}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
