import Reveal from "@/components/reveal"
import SectionHeading from "@/components/section-heading"

const CATEGORIES = [
  {
    title: "ML frameworks",
    accent: "//",
    tags: ["PyTorch", "TensorFlow", "Hugging Face", "scikit-learn", "XGBoost", "LightGBM", "CatBoost"],
  },
  {
    title: "Deep learning & vision",
    accent: ">>",
    tags: ["CNNs", "EfficientNet", "YOLO11", "OpenCV", "ByteTrack", "MediaPipe"],
  },
  {
    title: "NLP / LLMs",
    accent: "~",
    tags: ["Transformers", "PEFT", "LoRA", "QLoRA", "TRL", "BitsAndBytes"],
  },
  {
    title: "MLOps & serving",
    accent: "$",
    tags: ["FastAPI", "Docker", "MLflow", "DVC", "Git", "PostgreSQL"],
  },
  {
    title: "Languages & tools",
    accent: ">",
    tags: ["Python", "SQL", "Dart", "JavaScript", "C++", "Rust", "Flutter", "Node.js"],
  },
  {
    title: "Currently exploring",
    accent: "?",
    tags: ["KV caching", "quantization", "MoE routing", "inference engines", "FlashAttention", "RAG"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="border-y border-white/[0.06] bg-[#080808]">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36 lg:px-16">
        <SectionHeading
          index="02"
          eyebrow="Skills"
          title={
            <>
              The stack I build with,{" "}
              <span className="font-serif italic text-champagne">end to end.</span>
            </>
          }
          description="From model training and fine-tuning to serving, deployment, and the infrastructure that keeps AI systems running."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((cat, i) => (
            <Reveal key={cat.title} delay={0.06 * i}>
              <div className="group flex h-full flex-col rounded-xl border border-white/[0.08] bg-[#0d0d0d] p-6 transition-colors duration-300 hover:border-champagne/30">
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-champagne">{cat.title}</h3>
                  <span className="font-mono text-sm text-white/20 transition-colors group-hover:text-champagne/60">
                    {cat.accent}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/[0.08] bg-white/[0.02] px-2.5 py-1 font-mono text-[13px] text-muted-foreground transition-colors group-hover:border-white/[0.12]"
                    >
                      {tag}
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
