import Reveal from "@/components/reveal"
import SectionHeading from "@/components/section-heading"

interface ExperienceEntry {
  company: string
  location: string
  role: string
  duration: string
  bullets: string[]
  tech: string[]
}

const EXPERIENCE: ExperienceEntry[] = [
  {
    company: "Brain Hub Technologies (Trade With Shaw)",
    location: "Multan, Pakistan",
    role: "AI/ML & Mobile Developer Intern",
    duration: "Jun 2025 — Oct 2025",
    bullets: [
      "As the only AI/ML developer on the team, designed and deployed stock-price prediction models using Python-based ML pipelines — contributing to a ~30% increase in trading revenue across internal operations and international client portfolios.",
      "Built end-to-end pipelines from feature engineering to model serving, ensuring consistent, measurable performance across multiple client portfolios.",
    ],
    tech: ["Python", "scikit-learn", "XGBoost", "FastAPI", "ML pipelines"],
  },
  {
    company: "Al-Safeena",
    location: "Saudi Arabia · Remote",
    role: "Senior Mobile Application Developer",
    duration: "Oct 2025 — Jul 2026",
    bullets: [
      "Built a home-services freelance marketplace giving Saudi vendors a centralized platform for consistent business — using Flutter and Node.js backends — contributing to a ~40% increase in company revenue.",
      "Continuing as final-year project: managing incremental feature development and deployment of the live platform.",
    ],
    tech: ["Flutter", "Dart", "Node.js", "MongoDB", "Socket.IO"],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="border-y border-white/[0.06] bg-[#080808]">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36 lg:px-16">
        <SectionHeading
          index="06"
          eyebrow="Experience"
          title={
            <>
              Where I&apos;ve{" "}
              <span className="font-serif italic text-champagne">shipped.</span>
            </>
          }
        />

        <div className="mx-auto max-w-3xl">
          {EXPERIENCE.map((entry, i) => (
            <Reveal key={entry.company} delay={0.1 * i} className="relative pb-14 pl-10 last:pb-0">
              <div
                className={`absolute left-0 top-1 h-full border-l border-white/[0.08] ${i === EXPERIENCE.length - 1 ? "hidden" : ""}`}
              />
              <div className="absolute left-[-5px] top-1.5 flex h-[11px] w-[11px] items-center justify-center">
                <span className="absolute h-[11px] w-[11px] rounded-full bg-champagne/25" />
                <span className="h-[5px] w-[5px] rounded-full bg-champagne" />
              </div>

              <div className="rounded-xl border border-white/[0.08] bg-[#0d0d0d] p-6 transition-colors duration-300 hover:border-champagne/25 md:p-8">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <h3 className="font-serif text-xl tracking-tight">{entry.company}</h3>
                  </div>
                  <span className="rounded-full border border-white/[0.1] px-3 py-1 font-mono text-[11px] text-muted-foreground">
                    {entry.duration}
                  </span>
                </div>

                <p className="mt-1 font-mono text-sm text-champagne">{entry.role}</p>
                <p className="mt-1 font-mono text-xs text-white/30">{entry.location}</p>

                <ul className="mt-6 space-y-3">
                  {entry.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-1 shrink-0 font-mono text-champagne">&gt;</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {entry.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-white/[0.08] px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
