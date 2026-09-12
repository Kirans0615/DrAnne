# Build plan

Written for the record per build prompt §0/§14 — executed immediately, not gated on approval.

**Pivoted mid-build to a static site** (no forms, no backend, GitHub Pages hosting) — see `docs/ASSUMPTIONS.md`. Workstreams B3, E and F below are updated in place to reflect that; the rest were unaffected since components/pages never depended on a backend.

## A. Foundation — done

Next.js 15 + Tailwind v4 + shadcn (new-york-v4, Radix, pinned CLI 3.8.5) scaffold; brand tokens sampled from `Banner.jpg` and encoded in `app/globals.css`; Lobster/Roboto Flex/Source Serif 4 via `next/font`; layout shell (header with single responsive nav, footer, skip link, theme toggle); full `/content` layer transcribed from `dranne-audit.md` with §13 resolutions applied and `Sourced<T>` provenance; `scripts/check-content.ts` CI gate; typo-absence Vitest suite; lint/typecheck/build all green. Docs: `SECURITY-RUNBOOK.md`, `ASSUMPTIONS.md`, `CLIENT-DECISIONS.md`, `ASSET-MANIFEST.md`, `ARCHITECTURE.md`, `BRAND.md`, this file.

## B. Component library — in progress, parallel

1. `Book` (all nine defects fixed) + shelf + detail drawer; `ContainerScroll` (all ten defects fixed).
2. MagicHand SVG, Chit Counter, MagicSquare wheel, Nine Points path, Three Keys triptych (triptych's static version already on the homepage; scroll-pinned behavior lands here).
3. ~~Forms system, D1, Turnstile, rate limiting, email routing~~ — dropped. No forms anywhere on the static site; every contact point is a `mailto:` link.

## C. Public pages — parallel

1. Home (initial version shipped in Foundation; component-library pieces slot in as B lands) + About cluster (Our Story, Board, Press, Gallery).
2. The Plan cluster (How It Works, MagicHand, Food Plates, Recipes).
3. Books & Materials, Partner, Testimonials, Donate, FAQ, Contact, Privacy, Accessibility.

## D. Member layer — parallel

1. Statements + Guide Mode + PDF generation + Start a Circle + Membership Stages.
2. Course Formats, Certification + knowledge check, Flyers builder, Events, Tips.

## E. Get Started cluster

Join a Circle, Find a Circle (Registry as a static list from `content/circles.ts`, no form, no moderation queue — new circles are added to the file by hand after an email to `team@`), Independent Providers, Volunteer, Independent.

## F. Migration and SEO

Redirect map (`content/redirects.ts` implemented as Cloudflare Redirect Rules at the DNS layer, not in-app — see `docs/ARCHITECTURE.md`), spam-URL 410s the same way, schema.org structured data, sitemap/robots, OG image generation, metadata sweep.

## G. Motion asset

Remotion MagicHand explainer, 20–30s MP4, wired into the homepage.

## H. Hardening

Accessibility audit + fixes on every route, security review + fixes, simplify pass, performance tuning to §18 budgets, cross-browser/375px sweeps, code review on the full diff.

## I. Handover

`CONTENT-EDITING.md`, `DEPLOY.md`, `POST-LAUNCH.md`, Board deck, phase-2 backlog.

## J. Final verification

`verification-before-completion` against the §19 checklist; fix and re-run until clean.

---

Workstreams B–E are being executed by parallel subagents against this same repository, each briefed with its exact file scope, the content modules already in `/content`, and the binding rules in `docs/CLIENT-DECISIONS.md`. Progress is tracked by what actually lands in git, not by this document — this file records intent at the start of the run, not a live status board.
