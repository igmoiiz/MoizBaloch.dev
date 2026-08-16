"use client"

import type React from "react"
import { useState } from "react"
import { Github, Linkedin, Mail, MapPin, MessageCircle, Phone } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Reveal from "@/components/reveal"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const composeBody = [
    `Name: ${formData.name || "—"}`,
    `Email: ${formData.email || "—"}`,
    `Phone: ${formData.phone || "—"}`,
    "",
    formData.message || "Hello Moiz, I'd like to talk about a project or opportunity.",
  ].join("\n")

  const subject = `Portfolio contact${formData.name ? ` from ${formData.name}` : ""}`
  const gmailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=moaiz3110@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(composeBody)}`
  const whatsappHref = `https://wa.me/923067892235?text=${encodeURIComponent(composeBody)}`

  const inputClass = "border-white/[0.1] bg-white/[0.02] text-foreground placeholder:text-muted-foreground/60 focus-visible:ring-champagne"

  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36 lg:px-16">
      <Reveal>
        <div className="mb-16 flex items-center gap-4 md:mb-20">
          <span className="font-mono text-sm text-champagne">09</span>
          <span className="h-px w-12 bg-champagne/40" />
          <span className="font-mono text-xs uppercase tracking-[0.35em] text-muted-foreground">Contact</span>
        </div>
        <h2 className="font-serif text-4xl leading-tight tracking-tight md:text-6xl">
          Let&apos;s build something{" "}
          <span className="font-serif italic text-champagne">intelligent.</span>
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal delay={0.1}>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Open to AI/ML engineering roles, research collaboration, and interesting projects. If you&apos;re building
            something in the ML or LLM space, I&apos;d like to hear about it.
          </p>

          <div className="mt-10 space-y-5">
            <a
              href="mailto:moaiz3110@gmail.com"
              className="group flex items-center gap-4"
              data-cursor
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.02] transition-colors group-hover:border-champagne/40">
                <Mail className="h-5 w-5 text-champagne" />
              </span>
              <span>
                <span className="block font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Email</span>
                <span className="text-sm text-foreground transition-colors group-hover:text-champagne">
                  moaiz3110@gmail.com
                </span>
              </span>
            </a>

            <a href="tel:+923067892235" className="group flex items-center gap-4" data-cursor>
              <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.02] transition-colors group-hover:border-champagne/40">
                <Phone className="h-5 w-5 text-champagne" />
              </span>
              <span>
                <span className="block font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Phone</span>
                <span className="text-sm text-foreground transition-colors group-hover:text-champagne">
                  +92 306 7892235
                </span>
              </span>
            </a>

            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.02]">
                <MapPin className="h-5 w-5 text-champagne" />
              </span>
              <span>
                <span className="block font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Based in</span>
                <span className="text-sm text-foreground">Multan, Pakistan</span>
              </span>
            </div>
          </div>

          <div className="mt-10 flex gap-3">
            <a
              href="https://github.com/igmoiiz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.02] text-muted-foreground transition-all hover:border-champagne/40 hover:text-champagne"
              data-cursor
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/moiz-baloch-a615392b4"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.02] text-muted-foreground transition-all hover:border-champagne/40 hover:text-champagne"
              data-cursor
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="rounded-xl border border-white/[0.08] bg-[#0d0d0d] p-6 md:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Quick compose
            </p>

            <div className="mt-6 space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="phone" className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Phone
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+92 300 0000000"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  What do you need?
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or role…"
                  className={`${inputClass} min-h-[130px]`}
                />
              </div>

              <a
                href={gmailHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-champagne px-6 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-champagne-bright"
                data-cursor
              >
                <Mail className="h-4 w-4" /> Open in Gmail
              </a>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-white/[0.12] px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-champagne/40 hover:text-champagne"
                data-cursor
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp me
              </a>

              <p className="text-xs leading-relaxed text-muted-foreground">
                Nothing is sent automatically — this opens a pre-filled draft in Gmail or a chat in WhatsApp.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
