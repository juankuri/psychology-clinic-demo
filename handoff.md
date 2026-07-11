# Handoff — Freel Dev Kit

## What is this

An internal Astro starter for building static websites for local businesses in Mexico. You (the developer) copy the repo per client, edit `project/manifest.ts` + `project/content/` files, and deploy to Cloudflare Pages. No CMS, no frameworks, no SaaS.

## Current state

**Working and stable.** Typecheck passes, build passes, 4 demos run correctly.

### Two tiers

| Tier | `manifest.project.tier` | Layout | Use case |
|------|------------------------|--------|----------|
| **Menu** | `'menu'` | 480px max-width, no header nav | QR-code digital menus for food businesses |
| **Landing** | `'landing'` | Full-width with sticky header | Professional landing pages (services, clinics, etc.) |

Both tiers render from the same `index.astro` — it checks the tier and picks the right layout.

### Demos (switch with `./scripts/use-demo.sh <name>`)

| Demo | Tier | Theme | Business |
|------|------|-------|----------|
| `psicologia` | landing | professional | Psychology clinic |
| `panaderia` | landing | artisanal | Bakery |
| `taqueria` | menu | bold | Taquería |
| `tonalli` | menu | artisanal | Specialty café |

### Git history

```
e966a54 Remove all hardcoded text from reusable components
1ad94b4 Add taquería demo (Tier 1 menu, Bold Modern theme)
e8e3c5f Phase 5: README, CLAUDE.md, Bold Modern theme
03c31fa Phase 4: Bakery demo, demo switching, reuse validation
6e04672 Phase 3: Mobile nav, About from content, import path fix
a36d630 Phase 2: Complete section set, Schema.org, content-driven Trust
b6edf9b Phase 1: Foundation
```

**Note:** The Tier 1 menu implementation (MenuLayout, CategoryNav, FeaturedProducts, ScheduleCard, tonalli demo) is NOT committed yet. It's the latest uncommitted work.

## Key decisions made (and why)

1. **No hardcoded text in components.** All section headings come from `manifest.sections[].heading` with generic defaults in `src/core/utils/manifest.ts`. This was a strong user request — enforced strictly.

2. **Reuse over duplication.** Menu tier reuses Hero, ProductMenu, Gallery, Contact, Footer. Only 3 new components were needed (CategoryNav, FeaturedProducts, ScheduleCard). Don't create niche-specific variants.

3. **Content as JSON/Markdown, config as TypeScript.** Content files in `project/content/` are JSON or Markdown. The manifest is TypeScript for type safety. Never mix these.

4. **System fonts only.** No Google Fonts. Three theme presets use system font stacks. Local font files can be added per-client later.

5. **TypeScript pinned to v5.** `@astrojs/check` crashes with TypeScript 7. Pinned via `pnpm add -D typescript@5`.

6. **Demos excluded from typecheck.** Demo manifests use `../src/` paths that only resolve when copied to `project/`. The `tsconfig.json` excludes `demos/`.

7. **Static output only.** `astro.config.ts` has `output: 'static'`. `Astro.redirect()` doesn't work — that's why `index.astro` renders both layouts inline instead of redirecting.

## Gotchas to watch for

- **New content files need a default in `project/content/`.** If you add a new JSON content loader (like `loadSchedule()`), the typecheck will fail unless the file exists in `project/content/`. Add an empty `[]` file.
- **Demo import paths use `../src/`**, not `../../src/`. They're designed to work when copied to `project/`, not from their original location.
- **CSS custom properties drive everything.** Theme differences come from `--color-primary`, `--font-heading`, `--radius-md`, etc. — set in theme CSS files and overridden by manifest tokens.

## What the user cares about

- **Simplicity.** "Never sacrifice simplicity for future flexibility." Don't over-engineer.
- **Reusability.** Components must work across all niches without niche-specific code.
- **Mobile-first.** Everything should look good on phones first.
- **No extra dependencies.** Vanilla CSS, system fonts, no frameworks.
- **Iterative workflow.** The user approves plans before implementation. Ask before making big changes.
- **Commit after each phase.** Don't let work pile up uncommitted.

## What's likely next

- Committing the Tier 1 menu work
- Visual polish and iteration on the menu layout
- More demos for different business types
- Real client assets replacing placeholder images
- Possibly: dark mode, additional theme presets, more section types

## File structure cheat sheet

```
project/manifest.ts              ← Site config (edit per client)
project/content/*.json|md        ← Content (edit per client)
src/core/components/sections/    ← All section components
src/core/components/Header.astro ← Sticky nav (landing only)
src/core/components/Footer.astro ← Footer (both tiers)
src/core/layouts/BaseLayout.astro   ← Landing layout
src/core/layouts/MenuLayout.astro   ← Menu layout (480px)
src/core/utils/manifest.ts       ← getManifest, getSectionHeading, etc.
src/core/utils/content.ts        ← Content loaders (loadProducts, loadSchedule, etc.)
src/types/                       ← All TypeScript interfaces
src/themes/                      ← base.css + 3 presets + menu.css
src/pages/index.astro            ← Single entry point (tier-aware)
demos/                           ← Reference demos
scripts/use-demo.sh              ← Demo switcher
AGENTS.md (symlinked as CLAUDE.md) ← Working rules for Claude
```
