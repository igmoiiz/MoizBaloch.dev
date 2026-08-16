# Moiz Baloch — E-Portfolio

A modern, minimal, dark-themed portfolio for **Moiz Baloch**, an **AI/ML Engineer** and Computer Science
undergraduate building machine-learning, deep-learning, and LLM systems from experimentation to deployment.

## Stack

- **Next.js 15** + **React 19** + **TypeScript**
- **Tailwind CSS v3** — custom black & champagne design system
- **Three.js** (`@react-three/fiber`) — 3D hero background
- **Framer Motion** — scroll & entrance animations
- **Lenis** — smooth scrolling

## Features

- 3D neural-network hero (graceful fallback for reduced-motion / no WebGL)
- Terminal-style animated project cards with GitHub links — no screenshots
- Dedicated **Roadmap** section for planned work (AtlasLLM, AtlasMoE, NeuroScope…)
- **Publications** section (HEC-recognized Generative AI paper)
- Custom cursor, scroll progress, film-grain texture, monochrome + champagne palette
- Fully responsive with mobile navigation

## Local development

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production

```bash
pnpm build
pnpm start
```

## Structure

```
app/            App router, layout, global styles
components/     Section + shared UI components
info/           Source-of-truth portfolio context & resumes (gitignored)
public/         Static assets, resume.pdf
```

## Contact

- **Email**: [moaiz3110@gmail.com](mailto:moaiz3110@gmail.com)
- **LinkedIn**: [linkedin.com/in/moiz-baloch-a615392b4](https://www.linkedin.com/in/moiz-baloch-a615392b4)
- **GitHub**: [igmoiiz](https://github.com/igmoiiz)

© 2026 Moiz Baloch. All rights reserved.
