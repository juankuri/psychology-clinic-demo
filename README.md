# Psychology Clinic Demo

A static landing page for a psychology practice, built with Astro. Content, theme, and
configuration are separated from the reusable components, so the site can be updated
without touching component code.

## Quick start

```bash
pnpm install
pnpm dev          # http://localhost:4321
pnpm build        # static output in dist/
pnpm preview      # preview the build
pnpm typecheck    # run type checking
```

## Project structure

```
project/                  # Site configuration and content
  manifest.ts               # Business info, theme, sections, SEO
  content/                  # Content files (JSON + Markdown)
  assets/                   # Images

src/
  core/                      # Reusable layouts, components, and utilities
  themes/                    # CSS theme files
  types/                     # TypeScript contracts
  pages/
    index.astro                # Dynamic section renderer
```

## Editing content

- `project/manifest.ts` — business info, theme preset/tokens, SEO, and the `sections`
  array (controls which sections render and in what order)
- `project/content/*.json` and `*.md` — services, testimonials, benefits, process
  steps, trust indicators, gallery, FAQ, and about text
- `project/assets/` and `public/` — images, favicon, Open Graph image

## Theme

Uses the `professional` preset (system sans-serif, sharp corners). Colors can be
overridden via `manifest.theme.tokens`.

## Pre-delivery checklist

- [ ] `pnpm typecheck` passes with 0 errors
- [ ] `pnpm build` completes successfully
- [ ] No console errors in browser
- [ ] Responsive from 320px to desktop
- [ ] WhatsApp link works and opens correct chat
- [ ] All external links work
- [ ] Images have meaningful alt text
- [ ] Single H1 on the page, correct heading hierarchy
- [ ] Keyboard navigation and focus states work
- [ ] SEO title/description set, Open Graph image and favicon present
- [ ] No placeholder phone numbers or emails

## Deployment

Deployed to Cloudflare Pages via Git integration:

- Build command: `pnpm build`
- Output directory: `dist`

## Tech stack

- Astro 7 (static site generation)
- TypeScript (strict mode)
- Semantic HTML + CSS custom properties
- pnpm
- No frontend frameworks (React, Vue, Svelte)
