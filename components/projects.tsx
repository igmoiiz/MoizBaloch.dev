import { ArrowUpRight, Github } from "lucide-react"
import Reveal from "@/components/reveal"
import SectionHeading from "@/components/section-heading"
import TiltCard from "@/components/tilt-card"

interface Project {
  slug: string
  title: string
  description: string
  year: string
  status: "Completed" | "In Progress"
  tech: string[]
  repo?: string
}

const PROJECTS: Project[] = [
  {
    slug: "vision-guard",
    title: "VisionGuard",
    description:
      "Commercial-grade computer vision platform analyzing live webcam, USB, RTSP, and IP streams in real time, with YOLO11 detection, ByteTrack tracking, and an event engine with nine rules served through a FastAPI + WebSocket API.",
    year: "2026",
    status: "Completed",
    tech: ["YOLO11", "ByteTrack", "OpenCV", "FastAPI", "WebSockets"],
    repo: "https://github.com/igmoiiz/VisionGuard",
  },
  {
    slug: "researchmate",
    title: "ResearchMate",
    description:
      "A 3B instruction model fine tuned with LoRA on PubMedQA/arXiv so it can answer research questions from scientific literature. Evaluated on latency, quality, and hallucination behavior.",
    year: "2026",
    status: "Completed",
    tech: ["Qwen2.5-3B", "LoRA", "TRL", "4-bit", "PubMedQA"],
    repo: "https://github.com/igmoiiz/ResearchMate-AI",
  },
  {
    slug: "math-tutor",
    title: "Math Tutor",
    description:
      "Qwen2.5-1.5B-Instruct fine tuned on GSM8K with QLoRA to solve math problems step by step. Trained on a Kaggle T4 with 4-bit quantization and published to Hugging Face.",
    year: "2026",
    status: "Completed",
    tech: ["QLoRA", "GSM8K", "PEFT", "Transformers"],
    repo: "https://github.com/igmoiiz/Qwen-Tutor",
  },
  {
    slug: "rbc-anomaly",
    title: "RBC Anomaly Detection",
    description:
      "End to end medical diagnostic pipeline detecting red blood cell anomalies with XGBoost (~92%+ validated accuracy) and SHAP explainability, plus LLM generated clinical reports with a rule based fallback for zero downtime.",
    year: "2024/25",
    status: "Completed",
    tech: ["XGBoost", "SHAP", "Ollama", "Qwen2.5-7B"],
    repo: "https://github.com/igmoiiz/Red-Blood-Cell-Anomaly-Detection-Pipeline",
  },
  {
    slug: "visionforge",
    title: "VisionForge",
    description:
      "Real time, gesture controlled augmented reality effects. Hand and pose tracking drive visual overlays on live camera input.",
    year: "2026",
    status: "Completed",
    tech: ["OpenCV", "Gesture Control", "AR"],
    repo: "https://github.com/igmoiiz/VisionForge",
  },
  {
    slug: "jarvis",
    title: "J.A.R.V.I.S",
    description:
      "Local first, privacy focused voice assistant: Whisper speech-to-text, Qwen2.5 reasoning, 40+ tool actions, and persistent memory for hands-free automation of repetitive tasks.",
    year: "2026",
    status: "In Progress",
    tech: ["Whisper", "Ollama", "Qwen2.5", "Python"],
    repo: "https://github.com/igmoiiz/Jarvis",
  },
  {
    slug: "echo-projectx",
    title: "Echo-ProjectX",
    description:
      "Offline capable, file system based automation assistant. The engineering foundation for a J.A.R.V.I.S style agent that runs without the cloud.",
    year: "2026",
    status: "In Progress",
    tech: ["Python", "File Systems", "Automation"],
    repo: "https://github.com/igmoiiz/Echo-ProjectX",
  },
  {
    slug: "blackholelab",
    title: "BlackHoleLab",
    description:
      "A C++ computational physics simulator exploring black hole dynamics, particle trajectories, photon paths, gravitational lensing, and relativistic effects.",
    year: "2026",
    status: "In Progress",
    tech: ["C++", "Physics", "Simulation"],
    repo: "https://github.com/igmoiiz/BlackHoleLab",
  },
]

function StatusPill({ status }: { status: Project["status"] }) {
  return (
    <span
      className={
        status === "Completed"
          ? "rounded-full border border-champagne/30 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.15em] text-champagne"
          : "rounded-full border border-white/15 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground"
      }
    >
      {status}
    </span>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36 lg:px-16">
      <SectionHeading
        index="04"
        eyebrow="Selected Work"
        title={
          <>
            Projects I&apos;ve{" "}
            <span className="font-serif italic text-champagne">built & shipped.</span>
          </>
        }
        description="Model fine tuning, computer vision, and AI systems, each with the engineering detail behind it. No screenshots, just the work."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {PROJECTS.map((project, i) => (
          <Reveal key={project.slug} delay={0.05 * (i % 4)}>
            <TiltCard className="group relative h-full overflow-hidden rounded-xl border border-white/[0.08] bg-[#0d0d0d] transition-colors duration-300 hover:border-champagne/25">
              <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-2.5">
                <span className="truncate font-mono text-[11px] tracking-wider text-muted-foreground">
                  ~/projects/
                  <span className="text-champagne">{project.slug}</span>
                </span>
                <StatusPill status={project.status} />
              </div>

              <div className="flex h-full flex-col p-6">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-serif text-2xl tracking-tight text-foreground">{project.title}</h3>
                  <span className="shrink-0 font-mono text-xs text-white/25">{project.year}</span>
                </div>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-white/[0.08] px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-white/[0.06] pt-5">
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/25">GitHub</span>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-2 font-mono text-sm text-foreground transition-colors hover:text-champagne"
                    data-cursor
                  >
                    <Github className="h-4 w-4" />
                    <span className="text-muted-foreground group-hover/link:text-champagne">view code</span>
                    <ArrowUpRight className="h-4 w-4 text-champagne" />
                  </a>
                </div>
              </div>

              <div
                className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-champagne transition-transform duration-500 group-hover:scale-x-100"
                aria-hidden
              />
            </TiltCard>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1} className="mt-12 text-center">
        <a
          href="https://github.com/igmoiiz?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-2.5 font-mono text-sm text-muted-foreground transition-colors hover:border-champagne/50 hover:text-champagne"
          data-cursor
        >
          <Github className="h-4 w-4" /> browse all 66+ repositories
        </a>
      </Reveal>
    </section>
  )
}
