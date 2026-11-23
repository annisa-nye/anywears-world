# anywears.world

**An independent fashion archive, told through the web.**  
Melbourne → Berlin → Everywhere.

[**Explore anywears.world ↗**](https://anywears.world)

---

## About

Anywears World is a bespoke digital experience for **Anywears**, my independent vintage and contemporary fashion business, established in Melbourne, Australia.

Rather than building a conventional e-commerce storefront, I wanted to explore how a website could communicate a brand's identity through photography, typography, motion and interaction.

The result is a deliberately minimal, editorial experience that invites visitors into the world of Anywears, from its beginnings in Melbourne to its next chapter in Berlin.

The website also serves as an evolving portfolio project exploring frontend engineering, digital art direction and interaction design.

**Independently designed and developed.**

## The concept

*What if a website felt less like browsing a storefront and more like stepping into someone's world?*

Anywears World translates the brand's visual identity into a continuous scrolling experience, structured around four chapters.

| Chapter | Experience |
|---|---|
| **01 — Landing** | An immersive cobalt-blue introduction featuring the animated Anywears heartbeat. |
| **02 — About** | The story and philosophy behind Anywears, told through photography and minimal typography. |
| **03 — Archive** | An asymmetrical, responsive photographic composition showcasing selected vintage and contemporary pieces. |
| **04 — Contact** | An interactive digital business card, contact details and links to the brand's resale platforms. |

The preview also includes a dedicated **Archive Coming Soon** page, providing a foundation for future collections.

## Design philosophy

The creative direction draws inspiration from independent fashion publications, archival catalogues, printed ephemera and the small details of physical retail experiences.

Three principles guide the project:

**Intention over convention.** Interactions should serve the experience rather than reproduce familiar website patterns.

**Care in the details.** The same attention given to sourcing, photographing and packaging an item should extend to the digital experience.

**Technology as a creative medium.** Frontend engineering can shape how a story is experienced, not simply how information is displayed.

The design combines deliberate whitespace, asymmetrical compositions, restrained typography and moments of movement.

### Brand palette

| Colour | Hex | Role |
|---|---|---|
| Anywears Blue | `#1E1EA4` | Primary brand colour, navigation and interaction accents |
| Pastel Pink | `#FAC9FF` | Contrasting accent and landing typography |
| Warm Canvas | `#F8F7F4` | Editorial background |
| Charcoal | `#242424` | Primary text |

**Typography:** Geist, Geist Mono and Allura.

---

## Built with

| Technology | Application |
|---|---|
| **Next.js 16** | App Router, page composition and image handling |
| **React** | Reusable components and interactive interfaces |
| **TypeScript** | Type-safe component development |
| **Tailwind CSS v4** | Responsive styling, custom design tokens and animations |
| **Intersection Observer API** | Scroll visibility and automatic interaction triggers |
| **Browser History API** | URL hash synchronisation without page reloads |
| **CSS 3D Transforms** | Interactive rotating business card |
| **requestAnimationFrame** | Scroll-linked animation updates |
| **Vercel** | Hosting, continuous deployment and custom-domain delivery |

The website is built with bespoke React components rather than a visual website builder or pre-built component library.

## Selected technical features

### 01 / Scroll-aware journey navigation

A custom four-point navigation system provides orientation throughout the website.

The navigation remains hidden on Landing, preserving the immersive first impression, and appears once visitors enter the editorial chapters.

Features include:

- Scroll-aware active-section indicators.
- Smooth navigation between chapters.
- A dedicated return-to-Landing interaction.
- Sticky editorial headings that move naturally into the header.
- Section-specific URL hashes: `/#about`, `/#archive` and `/#contact`.
- Reduced-motion considerations.

The navigation system is designed to remain visually unobtrusive while making the single-page experience accessible and easy to explore.

### 02 / Responsive photographic archive

The Archive preview uses a custom photographic composition rather than a conventional product grid.

On mobile, imagery is arranged in a staggered, asymmetrical layout. On larger screens, the composition expands horizontally with deliberate offsets.

A scroll-linked animation introduces the photographs from opposite directions:

- Left-positioned images enter from the left.
- Right-positioned images enter from the right.
- The composition settles as Archive fills the viewport.
- Movement reverses naturally as visitors scroll away.

The animation uses CSS transforms and `requestAnimationFrame` to update visual positioning without continuously updating React state.

### 03 / Interactive digital business card

The Contact chapter reinterprets a physical Anywears business card as a digital, interactive object.

Built using CSS perspective and 3D transforms, the card rotates between its front and reverse faces.

The interaction includes:

- Automatic flipping when visitors enter Contact.
- Manual flipping through mouse or touch interaction.
- Resetting to the front when visitors leave the chapter.
- Safari-conscious rendering refinements.
- Reduced-motion support.
- A direct email hyperlink.

The reverse communicates the brand's identity through concise editorial typography:

*hand-picked. vintage. contemporary finds.*

Melbourne → Berlin.

Beneath the card, a minimal directory provides direct access to Anywears on Depop and Vinted.

### 04 / Editorial transitions

Small folio-inspired dividers create visual pauses between chapters.

Fine horizontal rules and Roman numeral references borrow from the visual language of printed fashion publications without introducing unnecessary navigation elements.

### 05 / Archive Coming Soon

The dedicated `/archive` route extends the visual identity of Landing with a cobalt-blue background, animated heartbeat and restrained typography.

It provides a deliberate placeholder while the expanded archive remains in development.

---

## Project architecture

The website uses a component-based architecture to separate editorial content, layout behaviour and interactions.

```text
app/
├── layout.tsx
├── page.tsx
├── archive/
│   └── page.tsx
└── globals.css

components/
├── home/
│   ├── Landing.tsx
│   ├── About.tsx
│   ├── ArchivePreview.tsx
│   └── BusinessCard.tsx
├── layout/
│   ├── SiteHeader.tsx
│   ├── JourneyNavigation.tsx
│   ├── StickySectionTitle.tsx
│   ├── ViewportSection.tsx
│   ├── SectionDivider.tsx
│   └── ComingSoon.tsx
├── animations/
│   └── ArchiveScrollMotion.tsx
└── business-card/
    ├── FlippingCard.tsx
    └── ShopLinks.tsx
```

Each chapter is developed independently, allowing new content and interactions to be introduced without restructuring the entire website.

## Development approach

Anywears World is developed iteratively, with an emphasis on maintaining visual consistency while refining individual interactions.

Particular attention has been given to:

- Responsive behaviour across desktop and mobile devices.
- Mobile viewport stability and Safari rendering.
- Scroll positioning and sticky-element transitions.
- Image loading and animation performance.
- Reduced-motion accessibility.
- Reusable components and separation of concerns.
- Preserving the brand's visual identity across interactions.

The project is intentionally lightweight, favouring native browser APIs and CSS capabilities where practical.

### Branch strategy

| Branch | Purpose |
|---|---|
| `main` | Public-facing website |
| `development` | Ongoing features and experiments |
| Feature/release branches | Isolated development and selective releases |

Completed features are selectively released to production, while unfinished experiences remain under development.

---

## Current status

**Public preview — [anywears.world](https://anywears.world)**

The current version includes the four-chapter homepage, custom journey navigation, photographic Archive preview, Coming Soon route, interactive business card and links to existing resale platforms.

Anywears World is an ongoing project. The public preview establishes its visual identity and technical foundations while leaving room for the archive to evolve.

### Future development

- Expand the Archive into a browsable collection of previously sourced pieces.
- Introduce Aftercare, exploring packaging and customer experiences.
- Refine mobile performance, image delivery and accessibility.
- Continue experimenting with editorial layouts and bespoke interactions.

The long-term intention is to create a living digital record of the pieces, people and places that shape Anywears.

---

## Run locally

**Prerequisites:** Node.js and npm compatible with the project's Next.js version.

Clone the repository:

```bash
git clone https://github.com/annisa-nye/anywears-world.git
cd anywears-world
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Validation

Run ESLint:

```bash
npm run lint
```

Build the production application:

```bash
npm run build
```

Start the production server locally:

```bash
npm run start
```

---

## Deployment

Anywears World is hosted on Vercel and connected to the custom domain:

**[anywears.world](https://anywears.world)**

Production deployments are managed through the GitHub repository's `main` branch.

The site is independent of its external resale platforms; Depop and Vinted remain the destinations for available inventory and purchases.

---

## Why I'm building this

My interests sit at the intersection of technology, science and design.

Working in technical support has taught me to understand systems, troubleshoot complex problems and consider the experience surrounding a solution. Building Anywears has taught me the value of creative care, from sourcing an item to communicating with customers and preparing an order.

Anywears World brings these perspectives together.

It is an exploration of how technical problem-solving and visual storytelling can transform something functional into something thoughtful, personal and memorable.

More than a website for a fashion archive, it is a continuing experiment in **bespoke frontend development and digital experience design**.

---

**Designed and developed by [Annisa Nye](https://annisanye.com).**

Melbourne, Australia → Berlin, Germany.

*An ongoing collection.*
