import Reveal from "@/components/reveal"

const PHASES = [
  { num: "01", label: "Application engineering", tech: "Flutter · Dart · Firebase" },
  { num: "02", label: "Full stack systems", tech: "Node.js · MongoDB · Socket.IO" },
  { num: "03", label: "ML engineering", tech: "XGBoost · LightGBM · SHAP · Optuna" },
  { num: "04", label: "Deep learning & vision", tech: "PyTorch · YOLO · OpenCV · ByteTrack" },
  { num: "05", label: "LLM engineering", tech: "Transformers · LoRA · QLoRA · TRL" },
  { num: "06", label: "AI systems & serving", tech: "FastAPI · Docker · MLflow" },
  { num: "07", label: "Model internals", tech: "AtlasLLM · AtlasMoE · inference optimization" },
]

const STATS = [
  { value: "66+", label: "public repositories" },
  { value: "2", label: "production roles" },
  { value: "1", label: "published paper" },
  { value: "3", label: "LLMs fine tuned" },
]

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36 lg:px-16">
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
        <div>
          <Reveal>
            <div className="mb-6 flex items-center gap-4">
              <span className="font-mono text-sm text-champagne">01</span>
              <span className="h-px w-12 bg-champagne/40" />
              <span className="font-mono text-xs uppercase tracking-[0.35em] text-muted-foreground">About</span>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="font-serif text-4xl leading-tight tracking-tight md:text-6xl">
              From Flutter apps to{" "}
              <span className="font-serif italic text-champagne">intelligent systems.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                I started building production mobile and full-stack applications with Flutter, Node.js, and Firebase.
                That engineering foundation taught me how to ship real products. It became the base for the next
                step of the stack.
              </p>
              <p>
                My work now centers on machine learning, deep learning, and LLM engineering: fine tuning models with
                QLoRA, building computer vision systems, serving them through FastAPI, and engineering the deployment
                layer around them.
              </p>
              <p>
                The strongest thread across my work is systems thinking: moving from an idea to a client, a backend, a
                model, an API, and a deployment strategy. I build complete AI systems, not isolated notebooks.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-white/[0.08] bg-white/[0.08] sm:grid-cols-4">
              {STATS.map((stat) => (
                <div key={stat.label} className="bg-[#0a0a0a] p-5">
                  <div className="font-serif text-3xl text-champagne">{stat.value}</div>
                  <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="lg:pt-24">
          <Reveal delay={0.1}>
            <div className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-champagne" />
              Stack evolution
            </div>
          </Reveal>

          <div className="relative border-l border-white/[0.08] pl-8">
            {PHASES.map((phase, i) => (
              <Reveal key={phase.num} delay={0.08 * i} className="relative pb-8 last:pb-0">
                <div className="absolute -left-[41px] top-1.5 flex h-4 w-4 items-center justify-center">
                  <span className="h-2 w-2 rounded-full bg-white/15" />
                  <span className="absolute h-2 w-2 rounded-full bg-champagne/70" />
                </div>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="font-mono text-xs text-champagne">{phase.num}</span>
                  <h3 className="text-lg font-medium text-foreground">{phase.label}</h3>
                </div>
                <p className="mt-1 font-mono text-sm text-muted-foreground">{phase.tech}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
