import Reveal from "@/components/reveal"

const STACK = [
  "Flutter",
  "Dart",
  "Firebase",
  "Supabase",
  "MongoDB",
  "Node.js",
  "Socket.IO",
  "REST APIs",
  "FVM",
  "Android",
]

const BUILDS = [
  {
    name: "AL-Safeena",
    note: "Service marketplace and FYP. Flutter client, Node.js backend, real time chat, MongoDB, React admin panel, ML assisted provider ratings.",
  },
  {
    name: "ShopEase",
    note: "Ecommerce application with a complete shopping flow.",
  },
  {
    name: "Synk",
    note: "Chat application built on real time messaging.",
  },
  {
    name: "iWENT",
    note: "Event oriented application.",
  },
  {
    name: "QuickPDF",
    note: "PDF utility application.",
  },
  {
    name: "BLYND",
    note: "AI oriented social application concept.",
  },
  {
    name: "UXelerate",
    note: "UI and UX focused project work.",
  },
  {
    name: "Khushi Kids",
    note: "Children's story and educational app, designed in Figma.",
  },
  {
    name: "Trade With Shaw",
    note: "Built during the software development phase.",
  },
  {
    name: "IdeaCatalyst",
    note: "Web project built for Air University.",
  },
]

export default function MobileEra() {
  return (
    <section
      id="mobile-era"
      className="relative overflow-hidden border-y border-white/[0.06] bg-[#080808]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-champagne/[0.04] blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-16">
        <Reveal>
          <div className="mb-8 flex items-center gap-4">
            <span className="font-mono text-sm text-champagne">02</span>
            <span className="h-px w-12 bg-champagne/40" />
            <span className="font-mono text-xs uppercase tracking-[0.35em] text-muted-foreground">
              Mobile era
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="max-w-4xl font-serif text-4xl leading-[1.08] tracking-tight md:text-7xl">
            Before the models,{" "}
            <span className="font-serif italic text-champagne">there were apps.</span>
            <br className="hidden md:block" />
            I built a lot of them.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 max-w-3xl space-y-7 text-lg leading-relaxed text-muted-foreground md:text-xl">
            <p>
              I didn&apos;t start in machine learning. I started by shipping apps. My first serious engineering era
              was mobile development with Flutter, and I treated it the way I treat models now: build it, ship it,
              make it real.
            </p>
            <p>
              Full applications, not screens. Clients in Flutter, backends in Node.js, MongoDB databases, real time
              chat over Socket.IO, Firebase for auth and sync, and admin panels to run it all. The same product shaped
              for phones, tablets, and the people using them.
            </p>
            <p>
              That era is why AI never felt like a jump. When I moved into machine learning, I already understood the
              whole product around the model: how a user touches it, how data flows, how a backend serves it. The
              intelligence layer just became the next thing to build.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-14 flex flex-wrap gap-2">
            {STACK.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-white/[0.08] bg-white/[0.02] px-2.5 py-1 font-mono text-[13px] text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {BUILDS.map((build, i) => (
            <Reveal key={build.name} delay={0.04 * (i % 3)} className="h-full">
              <div className="group flex h-full flex-col bg-[#0a0a0a] p-6 transition-colors duration-300 hover:bg-[#0e0e0e]">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-white/25">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px flex-1 bg-white/[0.06] transition-colors group-hover:bg-champagne/30" />
                </div>
                <h3 className="mt-4 font-serif text-xl tracking-tight text-foreground">{build.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{build.note}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-12 font-mono text-xs uppercase tracking-[0.25em] text-white/25">
            ten builds across the era, each with its own stack and its own problems
          </p>
        </Reveal>
      </div>
    </section>
  )
}
