# Architecture

## Stack

Next.js 15 (App Router, RSC, TypeScript strict) · Tailwind CSS v4 (CSS-first `@theme` tokens) · shadcn/ui (New York style, Radix primitives) · `motion` for client-side animation · Zod-validated typed content in `/content` · Cloudflare Workers via `@opennextjs/cloudflare` for hosting · D1 / KV / Durable Objects / R2 for data, cache, coordination and files · Cloudflare Email Routing + a transactional provider · Cloudflare Turnstile on every form · Cloudflare Web Analytics (cookieless) · Vitest + Playwright + axe-core + Lighthouse CI for testing.

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

`content/redirects.ts` holds the full 301 map (build prompt §16); the migration workstream wires this into `next.config.ts` `redirects()` (static 301s, no middleware needed for a fixed list) plus a small `middleware.ts` matcher that serves `410` for the known spam-URL patterns from `docs/SECURITY-RUNBOOK.md` §0, once DNS points at the new site.

## Deviations from the build prompt

Tracked in `docs/ASSUMPTIONS.md` under "Deviations from the build prompt worth flagging" — most notably pinning the shadcn CLI to `3.8.5` to get the Radix-based `new-york-v4` style with `asChild` support, since the CLI's current default (`4.21.0`) generates Base UI–based components that don't match the spec's Radix-oriented conventions.
