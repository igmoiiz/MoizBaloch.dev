interface MarqueeProps {
  items: string[]
  duration?: number
}

export default function Marquee({ items, duration = 45 }: MarqueeProps) {
  const doubled = [...items, ...items]

  return (
    <div
      className="relative overflow-hidden border-y border-white/[0.08] py-6 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
      aria-hidden
    >
      <div
        className="flex w-max animate-marquee whitespace-nowrap"
        style={{ animationDuration: `${duration}s` }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center pr-10">
            <span className="font-mono text-sm uppercase tracking-[0.25em] text-muted-foreground">{item}</span>
            <span className="pl-10 text-champagne">*</span>
          </span>
        ))}
      </div>
    </div>
  )
}
