import { Award } from "lucide-react"
import Reveal from "@/components/reveal"
import SectionHeading from "@/components/section-heading"

interface Certification {
  name: string
  issuer: string
  date: string
  detail: string
}

const CERTIFICATIONS: Certification[] = [
  {
    name: "GIKI Advance AI Bootcamp",
    issuer: "Ghulam Ishaq Khan Institute (GIKI)",
    date: "Jul to Aug 2026",
    detail: "Intensive bootcamp covering modern AI and ML engineering practice, from training to deployment.",
  },
  {
    name: "Anthropic Claude 101 Courses",
    issuer: "Anthropic",
    date: "2026",
    detail: "Hands on LLM engineering foundations, including Claude Code and model best practices.",
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="border-y border-white/[0.06] bg-[#080808]">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36 lg:px-16">
        <SectionHeading
          index="08"
          eyebrow="Certifications"
          title={
            <>
              Formally{" "}
              <span className="font-serif italic text-champagne">trained.</span>
            </>
          }
        />

        <div className="grid gap-6 md:grid-cols-2">
          {CERTIFICATIONS.map((cert, i) => (
            <Reveal key={cert.name} delay={0.08 * i}>
              <div className="group h-full rounded-xl border border-white/[0.08] bg-[#0d0d0d] p-7 transition-colors duration-300 hover:border-champagne/25">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03]">
                    <Award className="h-5 w-5 text-champagne" />
                  </div>
                  <span className="rounded-full border border-white/[0.1] px-3 py-1 font-mono text-[11px] text-muted-foreground">
                    {cert.date}
                  </span>
                </div>

                <h3 className="mt-6 font-serif text-xl tracking-tight">{cert.name}</h3>
                <p className="mt-1 font-mono text-sm text-champagne">{cert.issuer}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{cert.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
