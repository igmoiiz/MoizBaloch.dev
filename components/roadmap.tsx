import Reveal from "@/components/reveal"
import SectionHeading from "@/components/section-heading"

interface RoadmapItem {
  title: string
  description: string
  status: "Planned" | "In Progress"
  note: string
}

const ITEMS: RoadmapItem[] = [
  {
    title: "AtlasLLM",
    description:
      "A dense transformer LLM built from scratch in PyTorch, focused on understanding and implementing transformer internals rather than only fine tuning an existing model.",
    status: "Planned",
    note: "priority build",
  },
  {
    title: "AtlasMoE",
    description:
      "The successor to AtlasLLM: a Mixture of Experts LLM built from scratch, exploring sparse routing, distributed concepts, and efficient optimization.",
    status: "Planned",
    note: "after atlasllm",
  },
  {
    title: "F.R.I.D.A.Y",
    description:
      "The next generation voice assistant evolving from J.A.R.V.I.S, with deeper tool use, richer memory, and fully local first operation.",
    status: "In Progress",
    note: "successor to jarvis",
  },
  {
    title: "NeuroScope",
    description:
      "A neural network and ML reverse engineering visualization platform. A serious desktop project for exploring models from the inside.",
    status: "Planned",
    note: "desktop tooling",
  },
  {
    title: "PhysicsLab AI",
    description:
      "A scientific simulation platform combining physics, equations, and simulations, connecting AI engineering with scientific computing.",
    status: "Planned",
    note: "science + ai",
  },
]

export default function Roadmap() {
  return (
    <section id="roadmap" className="border-y border-white/[0.06] bg-[#080808]">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36 lg:px-16">
        <SectionHeading
          index="05"
          eyebrow="Roadmap"
          title={
            <>
              What&apos;s next,{" "}
              <span className="font-serif italic text-champagne">in the lab.</span>
            </>
          }
          description="Forward looking builds I'm working toward. These are honest statuses: planned and in progress, not claimed as shipped."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={0.06 * i}>
              <div className="group flex h-full flex-col rounded-xl border border-dashed border-white/[0.14] bg-[#0a0a0a] p-6 transition-colors duration-300 hover:border-champagne/40">
                <div className="flex items-center justify-between">
                  <span
                    className={
                      item.status === "In Progress"
                        ? "font-mono text-[10px] uppercase tracking-[0.2em] text-champagne"
                        : "font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
                    }
                  >
                    {item.status}
                  </span>
                  <span className="font-mono text-sm text-white/20">0{i + 1}</span>
                </div>

                <h3 className="mt-5 font-serif text-2xl tracking-tight text-foreground">{item.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>

                <div className="mt-5 flex items-center gap-2 font-mono text-xs text-champagne">
                  <span className="h-1 w-1 rounded-full bg-champagne" />
                  {item.note}
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.3}>
            <div className="flex h-full min-h-[220px] flex-col justify-between rounded-xl border border-white/[0.08] bg-[#0d0d0d] p-6">
              <p className="font-mono text-sm leading-relaxed text-muted-foreground">
                <span className="text-champagne">&gt;</span> The pattern is deliberate. I keep moving down the stack:
                from apps to APIs, models, and now model internals.
              </p>
              <span className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-white/25">
                builder mindset, always
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
