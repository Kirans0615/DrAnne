# Architecture

> **Pivoted to a static site partway through the build** — see the note at the top
> of `docs/ASSUMPTIONS.md`. This doc reflects the current, static-export
> architecture, not the Cloudflare Workers/D1 stack the original build prompt
> specified.

## Stack

Next.js 15 (App Router, TypeScript strict), built with `output: "export"` — a
fully static site, no server runtime, no API routes, no Server Actions · Tailwind
CSS v4 (CSS-first `@theme` tokens) · shadcn/ui (New York style, Radix primitives)
· `motion` for client-side animation · typed content in `/content` (no Zod
runtime validation needed without forms — the types alone are the contract) ·
hosted on **GitHub Pages** via `.github/workflows/deploy.yml`, custom domain
`dranne.org` via `public/CNAME` · Vitest + Playwright + axe-core + Lighthouse CI
for testing.

No database, no forms, no email-sending backend. Every contact point is a
`mailto:` link. The Registry (`content/circles.ts`) is a static list maintained
by hand, not a live submission/moderation system.

## Component paths — mandatory split

- **`/components/ui`** — shadcn-managed primitives only. Added via `npx shadcn add <name>`, never hand-edited beyond the documented defect fixes to `Book` and `ContainerScroll` (build prompt §7). Regenerating a component with the CLI is expected to be safe.
- **`/components/dranne`** — every project-specific component: layout shell (`site-header`, `site-footer`, `skip-link`, `theme-provider`, `theme-toggle`, `nav-links`), and the ten signature interactions from build prompt §11 (Book Shelf, Three Keys triptych, MagicHand explainer, Chit Counter, MagicSquare wheel, Nine Points path, Guide Mode, Registry directory, Food-plate hotspots, Scrapbook lightbox).

No cross-imports from `/components/dranne` back into `/components/ui`'s internals — only the public exports.

## Content layer

Every piece of copy lives in `/content/*.ts`, typed and — where the audit disagreed with itself — wrapped in `Sourced<T>` (`content/types.ts`) carrying a `source` string and an optional `provisional: true` flag. `scripts/check-content.ts` fails CI if a provisional value lacks a source, or if `docs/CLIENT-DECISIONS.md` is missing an entry for any of the 21 numbered conflicts.

No component ever hardcodes copy that exists in `/content` — this is what makes `docs/CONTENT-EDITING.md` (handover doc) possible without touching component code, and what let `scripts/check-content.ts` and the typo-absence test (`tests/no-legacy-typos.test.ts`) scan a single directory tree with confidence.

## Fonts

Loaded via `next/font/google` in `app/layout.tsx` (self-hosted, subset, `display: swap`), exposed as CSS custom properties (`--font-lobster`, `--font-roboto-flex`, `--font-source-serif`) and mapped into Tailwind's `@theme` as `--font-display`, `--font-sans`, `--font-serif` in `app/globals.css`.

## Brand tokens

`--brand-red` / `--brand-red-quiet` are defined once in `:root` and re-defined in `.dark` (see `docs/BRAND.md` for the sampled values and contrast math), then re-exposed through `@theme inline` as `--color-brand-red` etc. so Tailwind generates `bg-brand-red`, `text-brand-red`, `border-brand-red` utilities that stay theme-aware automatically — the same pattern already used for shadcn's own `--background`/`--foreground` tokens.

## Routing

App Router, one route segment per IA entry in `content/nav.ts`. The member layer (`/for-guides/**`) will get its own `layout.tsx` with the quieter, minimalist-ui treatment (build prompt §4) once the member-layer workstream lands — it deliberately does not share the public layout's visual density.

## Redirects & 410s

A static export can't run `next.config.ts`'s `redirects()` or a `middleware.ts` — there's no server to execute them. Since the plan is to keep `dranne.org`'s DNS on Cloudflare (free tier) in front of GitHub Pages origin hosting, the redirect map in `content/redirects.ts` and the 410-for-spam-URLs rule from `docs/SECURITY-RUNBOOK.md` §0 are implemented as **Cloudflare Redirect Rules** at the edge — configuration, not application code. This still satisfies "static site" (zero server-side app logic) while getting real 301s and 410s. See `docs/DEPLOY.md` (handover workstream) for the exact rule list to enter in the Cloudflare dashboard.

## Deviations from the build prompt

Tracked in `docs/ASSUMPTIONS.md` under "Deviations from the build prompt worth flagging" — most notably pinning the shadcn CLI to `3.8.5` to get the Radix-based `new-york-v4` style with `asChild` support, since the CLI's current default (`4.21.0`) generates Base UI–based components that don't match the spec's Radix-oriented conventions.
