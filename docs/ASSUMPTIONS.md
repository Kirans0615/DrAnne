# Assumptions register

## Mid-build pivot: static site, not a dynamic Cloudflare Workers app

Partway through the build (after the foundation and most of the component library
had already landed), the user overrode `docs/BUILD-PROMPT.md`'s stack: **this is a
static site, not a dynamic app.** Concretely:

- **No forms of any kind.** The Contact form, Circle registration form, Independent
  provider application, partner enquiry, media/tips/recipe submissions — all of it
  is dropped. Every place the original spec had a `<form>`, this build has a
  `mailto:` link to `ask@` / `team@` / `vip@dranne.org` instead, exactly like the
  legacy sites' plain-text emails, but as real clickable links this time.
- **The Registry is a static curated list** (`content/circles.ts`), not a live,
  self-service, moderated database. New circles get added to that file by hand
  (via a PR) once someone emails `team@` to register — there is no public
  submission form and no moderation queue to build.
- **No backend at all**: no D1, no Durable Objects, no Cloudflare Workers runtime,
  no Turnstile, no rate limiting, no email-sending server code. `@opennextjs/
  cloudflare`, `wrangler`, `@cloudflare/workers-types`, `drizzle-orm`, `drizzle-kit`,
  `resend`, `react-hook-form`, `@hookform/resolvers`, and `zod` were all installed
  during the earlier dynamic-app phase and have since been **uninstalled** —
  `components/ui/form.tsx` was deleted as dead code along with them.
- **Hosting: GitHub Pages**, not Cloudflare Workers. `next.config.ts` now sets
  `output: "export"` (static HTML/CSS/JS, no server runtime, no API routes, no
  Server Actions), `trailingSlash: true` (so GitHub Pages resolves `/about/` to
  `/about/index.html` correctly), and `images.unoptimized: true` (GitHub Pages has
  no Image Optimization API). `public/CNAME` points the custom domain `dranne.org`
  at the repo root. `.github/workflows/deploy.yml` builds and deploys on every
  push to `main` via `actions/deploy-pages`.
- **What survives from the original spec unchanged**: the entire `/content` layer
  and its §13 conflict resolutions, the brand system, all ten §11 signature
  interactions (`Book`/`ContainerScroll`/`MagicHand`/Chit Counter/MagicSquare
  wheel/Nine Points path/Three Keys triptych — none of these ever depended on a
  backend; the Chit Counter and MagicSquare wheel were already explicitly
  in-memory-only per the original spec), the IA, and the a11y/SEO/performance
  goals. `docs/BUILD-PROMPT.md` is kept as the historical record of the original
  ask; treat every section of it that assumes Cloudflare D1/Workers/forms as
  **superseded by this note**, not as current direction.

---

Pre-answered per build prompt §15 — logged here and applied without stopping the build. Items below that reference the dynamic-app stack (Registry moderation, D1/rate-limiting, EIN-on-a-form, etc.) are superseded by the pivot above where the two conflict.

1. **Compromise containment** — assumed the client is handling `dranne.org` remediation per `docs/SECURITY-RUNBOOK.md`. This codebase is built host-agnostic; the DNS cutover is documented in `docs/DEPLOY.md` (to be written in the deployment workstream).
2. **Domain** — `dranne.org`. Canonicals, sitemap and redirects all target it.
3. **DNS / hosting / Search Console ownership** — assumed the client holds these; `docs/DEPLOY.md` will list exactly what's needed from them and in what order.
4. **Course price** — $199 / $172 per `docs/CLIENT-DECISIONS.md` #1.
5. **Book covers, video master, flyer sources, vector logo** — assumed unavailable; see `docs/ASSET-MANIFEST.md` for the placeholder built in each case.
6. **Independent provider contact details** — assumed unavailable in usable form (masked placeholders in source); routed through `vip@dranne.org` instead. `docs/CLIENT-DECISIONS.md` #18.
7. **Registry moderation** — human moderation, no SLA. Listings go to a `pending` queue and do not auto-publish. Moderation UI ships at `/for-guides/admin/registry`, intended to sit behind Cloudflare Access (config documented, disabled by default in dev).
8. **CMS** — none. Git-based typed content files in `/content`, Zod-validated at build time, structured so a headless CMS could be layered on later without touching components. See `docs/CONTENT-EDITING.md` (handover workstream).
9. **EIN / Form 990** — omitted until supplied. `docs/CLIENT-DECISIONS.md` #21.
10. **Sponsor logos** — reproduced per `docs/CLIENT-DECISIONS.md` #19.
11. **`/for-guides` gating** — public, not logged-in. High-value SEO content; volunteers need it fast. Only the admin moderation route is protected.
12. **Salad Spinner / Handy Chits app** — Spinner labeled in development, not purchasable; app listed at $9 as special order, per source.
13. **YouTube** — Practice Circle video embedded with a lite facade (no iframe until interaction); the caption gap on that video is noted for post-launch follow-up.
14. **Illustration budget** — none. The MagicHand and MagicSquare wheel are original SVGs built as part of this codebase; commissioned illustration is a phase-2 backlog item.
15. **Launch** — single launch of the complete site, no staged rollout.
16. **Locale** — `en-US`, prices in USD. No i18n scaffolding in v1; all copy lives in `/content`, not hardcoded in components, so i18n can be added later without a rewrite.
17. **Dark mode** — shipped; tokens support it, including explicit dark treatments for the brand red and the `Book` covers.
18. **Legal review** — the Privacy and Accessibility statements are drafts for client counsel to review before launch; marked as such.

## Deviations from the build prompt worth flagging

- **Next.js version**: `create-next-app@latest` installed Next.js 16.3.5 by default; pinned down to `next@15.5.25` per the spec's explicit "Next.js 15" requirement, since the rest of the stack (`@opennextjs/cloudflare`, etc.) is specified against 15.
- **shadcn/ui style name**: the current shadcn CLI (v4.21.0) no longer offers a `new-york` style option; it defaulted to `base-nova`. Since the brand system (§8) overrides shadcn's default typography and color tokens almost entirely, this has no visible effect on the shipped design — flagged here rather than silently drifting from the spec.
- **shadcn `form` registry item**: returned empty in this CLI version (likely deprecated in favor of hand-rolled RHF wiring). Wrote the canonical `components/ui/form.tsx` (react-hook-form + Radix Label/Slot) by hand — this is the same file shadcn's own docs have shipped for a long time, not a custom invention. (Superseded once the CLI was re-pinned to 3.8.5 — see below — which regenerated a matching `form.tsx` from its own registry.)
- **shadcn CLI pinned to 3.8.5**: `npx shadcn@latest` (v4.21.0) generates components against `@base-ui/react` under a "base-nova" style, not Radix — no `asChild` support anywhere, which breaks the polymorphic pattern the spec's Book/ContainerScroll accessibility fixes assume. Pinned the CLI to `3.8.5`, the last line confirmed to still emit the Radix-based `new-york-v4` registry (`components.json` `"style": "new-york"`, `radix-ui` package, full `asChild` support). All 25 `/components/ui` primitives were regenerated from this pinned CLI.
- **`eslint-config-next`**: bumped to `^15.5.25` to match the pinned Next.js version (the initial scaffold had installed `16.3.5`'s config against `next@15`, which would have silently linted with the wrong rule set). Its export shape for ESLint 9 flat config is the older `extends`-array format, so `eslint.config.mjs` uses `@eslint/eslintrc`'s `FlatCompat` bridge rather than the newer direct-array import `create-next-app@16` had scaffolded.
- **`npm audit`**: 14 vulnerabilities remain, all transitive dependencies of `@lhci/cli` (puppeteer/extract-zip/tmp/qs — dev-only Lighthouse CI tooling, never shipped) plus one moderate `postcss` advisory bundled inside `next@15.5.25` itself (15.5.25 is the latest stable 15.x release; the fix requires the Next 16 major, which was deliberately not taken — see above). The `postcss` advisories concern processing attacker-supplied CSS with untrusted `sourceMappingURL` comments; this project only ever builds its own authored CSS, so the exposure is theoretical. Documented here rather than silently ignored; revisit when Next 15 gets a further patch or when the project is ready to move to 16.
