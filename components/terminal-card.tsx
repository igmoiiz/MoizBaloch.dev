"use client"

import { useEffect, useState } from "react"

const LINES = [
  { prompt: "$", text: "whoami", out: "moiz-baloch — ai/ml engineer" },
  { prompt: ">", text: "cat focus.txt", out: "llm fine-tuning · computer vision · mlops" },
  { prompt: "$", text: "deploy --model qwen-3b --quantize 4bit", out: "✓ served via FastAPI + Docker" },
  { prompt: ">", text: "status --now", out: "training AtlasLLM · building F.R.I.D.A.Y" },
]

interface Progress {
  line: number
  char: number
  done: boolean
}

export default function TerminalCard() {
  const [progress, setProgress] = useState<Progress>({ line: 0, char: 0, done: false })

  useEffect(() => {
    if (progress.done) return

    const line = LINES[progress.line]
    const fullLength = line.prompt.length + 2 + line.text.length

    if (progress.char < fullLength) {
      const t = setTimeout(() => setProgress((p) => ({ ...p, char: p.char + 1 })), 24)
      return () => clearTimeout(t)
    }

    const t = setTimeout(() => {
      if (progress.line < LINES.length - 1) {
        setProgress({ line: progress.line + 1, char: 0, done: false })
      } else {
        setProgress((p) => ({ ...p, done: true }))
      }
    }, 600)
    return () => clearTimeout(t)
  }, [progress])

  return (
    <div className="relative w-full max-w-lg">
      <div
        className="absolute -inset-8 rounded-full bg-champagne/10 blur-3xl"
        aria-hidden
      />
      <div className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#0a0a0a]/85 shadow-2xl shadow-black/70 backdrop-blur-sm">
        <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-3.5">
          <div className="flex items-center gap-2">
            <span className="terminal-dot bg-white/15" />
            <span className="terminal-dot bg-white/15" />
            <span className="terminal-dot bg-champagne" />
          </div>
          <span className="font-mono text-[11px] tracking-wider text-muted-foreground">moiz@portfolio — zsh</span>
          <span className="hidden font-mono text-[11px] text-muted-foreground sm:block">80×24</span>
        </div>

        <div className="space-y-1 p-5 font-mono text-[13px] leading-relaxed sm:p-6">
          {LINES.map((line, i) => {
            const completed = i < progress.line
            const active = i === progress.line
            const typed = active ? line.text.slice(0, Math.max(0, progress.char - line.prompt.length - 2)) : ""

            return (
              <div key={i} className={completed ? "opacity-100" : ""}>
                <div className="flex flex-wrap gap-x-2">
                  <span className="text-champagne">{line.prompt}</span>
                  {active ? (
                    <span className="text-foreground">
                      {line.text.slice(0, typed.length)}
                      <span className="ml-0.5 inline-block h-4 w-[7px] translate-y-[2px] animate-caret bg-champagne" />
                    </span>
                  ) : (
                    <span className="text-foreground">{line.text}</span>
                  )}
                </div>
                {completed && <div className="pl-4 text-muted-foreground">{line.out}</div>}
              </div>
            )
          })}

          {!progress.done && (
            <div className="flex gap-x-2 pt-1">
              <span className="text-champagne">$</span>
              <span className="inline-block h-4 w-[7px] translate-y-[2px] animate-caret bg-champagne" />
            </div>
          )}
        </div>

        <div className="flex items-center justify-between border-t border-white/[0.06] px-5 py-2.5">
          <span className="font-mono text-[11px] text-muted-foreground">~/portfolio</span>
          <span className="flex items-center gap-1.5 font-mono text-[11px] text-champagne">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-champagne" />
            live
          </span>
        </div>
      </div>
    </div>
  )
}
