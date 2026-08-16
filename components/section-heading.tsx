import Reveal from "@/components/reveal"

interface SectionHeadingProps {
  index: string
  eyebrow: string
  title: React.ReactNode
  description?: string
}

export default function SectionHeading({ index, eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-16 md:mb-20">
      <Reveal>
        <div className="mb-6 flex items-center gap-4">
          <span className="font-mono text-sm text-champagne">{index}</span>
          <span className="h-px w-12 bg-champagne/40" />
          <span className="font-mono text-xs uppercase tracking-[0.35em] text-muted-foreground">{eyebrow}</span>
        </div>
        <h2 className="font-serif text-4xl leading-tight tracking-tight md:text-6xl">{title}</h2>
        {description ? <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{description}</p> : null}
      </Reveal>
    </div>
  )
}
