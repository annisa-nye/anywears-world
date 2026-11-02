# anywears.world

**An independent fashion archive, told through the web.**  
*Melbourne → Berlin → Everywhere.*

> **Status:** In development — the foundation is in place; editorial photography and interactions are being developed.

## About

**Anywears World** is a creative frontend project exploring the intersection of fashion, storytelling and technology.

It grew out of **Anywears**, my independent vintage and archive fashion business established in Melbourne, Australia. Rather than building a conventional online store, I'm translating the brand into a digital editorial experience — one shaped by imagery, typography, interaction and the details that make a customer experience memorable.

As Anywears prepares for its next chapter in Berlin, this site will become a record of the pieces, people and places that have shaped it.

## The concept

**What if a website felt less like a storefront and more like stepping into someone's world?**

The site is designed as one continuous scrolling story, divided into six chapters:

| Chapter | Experience |
| --- | --- |
| **01 — Landing** | A vivid introduction through colour, motion and typography. |
| **02 — About** | The philosophy behind Anywears: *found elsewhere, worn anywhere*. |
| **03 — Archive** | An editorial collection of vintage and designer pieces sourced over the years. |
| **04 — Where It Goes** | The people behind the purchases: customer reviews, packaging and personal touches. |
| **05 — Everywhere** | The brand's journey from Melbourne to Berlin, and wherever comes next. |
| **06 — Business Card** | A digital interpretation of the physical Anywears business card, serving as the site's footer. |

## Design direction

The creative direction draws from independent fashion publications: expressive photography, deliberate whitespace, restrained navigation and a strong sense of identity.

The design follows three principles:

- **Intention over convention.** Interactions should support the story rather than imitate generic e-commerce patterns.
- **Care in the details.** A handwritten note, a carefully wrapped order and a considered interface can all make a lasting impression.
- **Technology as a creative medium.** Frontend engineering is a way to shape how a story is experienced, not just how it is displayed.

### Brand palette

| Colour | Hex | Role |
| --- | --- | --- |
| Anywears Blue | `#1E1EA4` | Primary brand colour and active navigation |
| Pastel Pink | `#FAC9FF` | Accent colour and landing typography |
| Warm Off-White | `#F8F7F4` | Editorial background |
| Charcoal | `#242424` | Main text |

## Built with

- **Next.js 16** — App Router and server-rendered page sections
- **React** — Reusable components and interactive navigation
- **TypeScript** — Type-safe development
- **Tailwind CSS v4** — Responsive layouts and custom theme tokens
- **Intersection Observer API** — Section visibility tracking
- **CSS transitions** — Lightweight, dependency-free menu animation

The project is intentionally a **single-page experience**, with each chapter in its own component so that the editorial design can evolve without rewriting the whole site.

## Progress

### Implemented

- [x] Six-part single-page structure
- [x] Custom brand palette and typography
- [x] Full-viewport blue landing page with an animated-media placeholder
- [x] Minimal `>` trigger and full-screen sliding navigation
- [x] Active-section styling and scroll-position tracking
- [x] Responsive layout foundation
- [x] Passing lint, TypeScript and production build checks

### In progress

- [ ] Add the landing GIF
- [ ] Curate and integrate original archive photography
- [ ] Develop a more expressive editorial layout for the Archive section
- [ ] Refine navigation hash synchronisation and browser-history behaviour
- [ ] Expand customer reviews and packaging storytelling

### Planned

- [ ] Refine the interactive business-card footer
- [ ] Explore **Sanity CMS** for managing photographs and written content
- [ ] Deploy the finished experience with **Vercel**

## Run locally

**Prerequisite:** A compatible version of Node.js and npm.

```bash
# Clone your fork or repository
git clone <repository-url>
cd anywears-world

# Install dependencies and start the development server
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

To validate the project:

```bash
npm run lint
npm run build
```

> Replace `<repository-url>` with this repository's GitHub clone URL.

## Why I'm building this

My interests sit at the intersection of technology, science and design.

Working in technical support has taught me to understand systems, solve complex problems and pay attention to the experience surrounding a solution. Running Anywears has taught me how much creative care matters — from sourcing a piece to writing to a customer and packaging their order.

**Anywears World** brings those perspectives together. It is both a home for the brand's archive and an evolving portfolio project in frontend development, digital art direction and visual storytelling.

---

*Independently designed and developed.*  
*Melbourne, Australia → Berlin, Germany.*
