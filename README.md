# Freel Dev Kit

Reusable Astro starter for building static websites for local businesses.
Edit configuration, content, and assets — not components.

## What this is

An internal development kit for freelance web delivery. It supports:

- **Tier 1**: Digital menus for food businesses (taquerías, fondas, cafeterías)
- **Tier 2**: Professional landing pages for local services (psychologists, dentists, salons, bakeries)

## What this is NOT

- Not a CMS, SaaS, page builder, or multi-tenant platform
- Not a published design system or framework
- Business process, sales, and client discovery live in Notion, not here

## Quick start

### With pnpm

```bash
pnpm install
pnpm dev          # http://localhost:4321
pnpm build        # Static output in dist/
pnpm preview      # Preview the build
pnpm typecheck    # Run type checking
```

### With Docker

```bash
docker compose up  # http://localhost:4321
```

## Project structure

```
project/                  # Per-client — edit this for each site
  manifest.ts             # Source of truth: business info, theme, sections, SEO
  content/                # Content files (JSON + Markdown)
    services.json
    testimonials.json
    benefits.json
    process.json
    trust.json
    gallery.json
    products.json         # Tier 1 only
    faq.md
    about.md
  assets/                 # Client images (logo, hero, gallery)

src/
  core/                   # Reusable — do not edit per client
    layouts/              # BaseLayout.astro
    components/
      sections/           # Hero, Services, FAQ, etc.
      ui/                 # WhatsAppCTA, etc.
      seo/                # Head, SchemaOrg
    utils/                # manifest.ts, content.ts
  themes/                 # CSS theme files
    base.css              # Reset, custom properties, utilities
    professional.css      # Professional Clean
    artisanal.css         # Warm Artisanal
    bold.css              # Bold Modern
  types/                  # TypeScript contracts
  pages/
    index.astro           # Dynamic section renderer

demos/                    # Demo configurations for reference
  psicologia/             # Psychology practice demo
  panaderia/              # Bakery demo
scripts/
  use-demo.sh             # Switch between demos
```

## Creating a new client site

1. Copy an existing demo into `project/`:
   ```bash
   ./scripts/use-demo.sh psicologia  # or start from a demo
   ```

2. Edit `project/manifest.ts`:
   - Business name, tagline, description
   - Contact info and WhatsApp number
   - Location and Google Maps URL
   - Social links
   - Theme preset (`professional`, `artisanal`, or `bold`) and color tokens
   - SEO title, description, canonical URL
   - Sections array (add, remove, reorder)
   - CTA label and type

3. Edit content files in `project/content/`:
   - `services.json` — service offerings
   - `testimonials.json` — client testimonials
   - `benefits.json` — why choose us
   - `process.json` — how it works steps
   - `trust.json` — trust indicators (years, certifications)
   - `faq.md` — frequently asked questions (use `##` for questions)
   - `about.md` — about section text (use `#` for the title, skip it)
   - `gallery.json` — gallery images
   - `products.json` — product menu (Tier 1 only)

4. Add images to `project/assets/` and `public/`

5. Select a theme in the manifest and optionally override color tokens

6. Review: `pnpm dev`

7. Build: `pnpm build`

## Files you normally edit (per client)

| File | Purpose |
|------|---------|
| `project/manifest.ts` | All configuration |
| `project/content/*.json` | Structured content |
| `project/content/*.md` | Text content |
| `project/assets/*` | Images and logo |
| `public/favicon.svg` | Favicon |
| `public/og-image.jpg` | Open Graph image |

## Files you should NOT edit per client

- `src/core/` — reusable components and utilities
- `src/themes/` — theme CSS files
- `src/types/` — TypeScript contracts
- `src/pages/index.astro` — section renderer

## Themes

Three visual directions, selected in `manifest.theme.preset`:

| Theme | Feel | Fonts | Shapes |
|-------|------|-------|--------|
| `professional` | Clean, trustworthy | System sans-serif | Sharp corners |
| `artisanal` | Warm, inviting | System serif (Georgia) | Rounded corners |
| `bold` | High contrast, modern | Monospace headings | No border radius |

Override colors per client with `manifest.theme.tokens`:

```ts
theme: {
  preset: 'professional',
  tokens: {
    colorPrimary: '#2D5A3D',
    colorAccent: '#D4A574',
  },
},
```

## Sections

Sections are controlled by the `manifest.sections` array. Only listed sections render, in the order specified.

```ts
sections: [
  { id: 'hero' },
  { id: 'trust' },
  { id: 'about' },
  { id: 'services' },
  { id: 'benefits' },
  { id: 'process' },
  { id: 'gallery' },
  { id: 'testimonials' },
  { id: 'faq' },
  { id: 'contact' },
],
```

Available section IDs: `hero`, `trust`, `about`, `services`, `product-menu`, `benefits`, `process`, `gallery`, `testimonials`, `faq`, `contact`

## Switching demos

```bash
./scripts/use-demo.sh panaderia    # bakery with artisanal theme
./scripts/use-demo.sh psicologia   # psychology with professional theme
```

## Pre-delivery checklist

Before delivering a client site:

- [ ] `pnpm typecheck` passes with 0 errors
- [ ] `pnpm build` completes successfully
- [ ] No console errors in browser
- [ ] Responsive from 320px to desktop
- [ ] WhatsApp link works and opens correct chat
- [ ] All external links work
- [ ] Images have meaningful alt text
- [ ] Single H1 on the page
- [ ] Heading hierarchy is correct (H1 > H2 > H3)
- [ ] Keyboard navigation works
- [ ] Focus states are visible
- [ ] Sufficient color contrast
- [ ] SEO title and description are set
- [ ] Open Graph image exists
- [ ] Favicon is set
- [ ] Demo content markers `[DEMO]` are removed
- [ ] No placeholder phone numbers or emails

## Deployment

Target: Cloudflare Pages

1. `pnpm build`
2. Deploy `dist/` to Cloudflare Pages (via Git integration or direct upload)

## Tech stack

- Astro 7 (static site generation)
- TypeScript (strict mode)
- Semantic HTML + CSS custom properties
- pnpm
- Docker (dev only)
- No frontend frameworks (React, Vue, Svelte)
