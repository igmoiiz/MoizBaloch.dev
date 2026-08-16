import { ArrowUpRight, BookOpen } from "lucide-react"
import Reveal from "@/components/reveal"
import SectionHeading from "@/components/section-heading"

const PAPER = {
  title:
    "Adoption Readiness and Perceived Reliability of Generative AI Tools in Software Development Education",
  journal: "Qualitative Research Journal for Social Studies (HEC Recognized)",
  volume: "3(2), pp. 293 to 320",
  year: "2026",
  authors: "A. Bilal, E. Qazi, A. Noor, A. Moiz, M.A. Lodhi",
  doi: "https://doi.org/10.63878/qrjs1100",
}

export default function Publications() {
  return (
    <section id="publications" className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36 lg:px-16">
      <SectionHeading
        index="09"
        eyebrow="Publications"
        title={
          <>
            Research,{" "}
            <span className="font-serif italic text-champagne">peer reviewed.</span>
          </>
        }
      />

      <Reveal>
        <div className="group relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#0d0d0d] p-6 transition-colors duration-300 hover:border-champagne/25 md:p-8">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03]">
              <BookOpen className="h-5 w-5 text-champagne" />
            </div>
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-champagne">Co-author · 2026</span>
            </div>
          </div>

          <h3 className="mt-6 font-serif text-2xl leading-snug tracking-tight md:text-3xl">{PAPER.title}</h3>

          <div className="mt-4 space-y-1 font-mono text-sm text-muted-foreground">
            <p>{PAPER.authors}</p>
            <p>
              {PAPER.journal} · {PAPER.volume}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={PAPER.doi}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-champagne px-5 py-2.5 font-mono text-sm text-black transition-colors hover:bg-champagne-bright"
              data-cursor
            >
              Read the paper <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div
            className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-champagne transition-transform duration-500 group-hover:scale-x-100"
            aria-hidden
          />
        </div>
      </Reveal>
    </section>
  )
}
