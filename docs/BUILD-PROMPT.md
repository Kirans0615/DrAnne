# CLAUDE CODE BUILD PROMPT — dr.Anne Association unified website
## SINGLE-SWEEP AUTONOMOUS BUILD — do not stop, do not ask, do not wait for approval

> Paste this entire file into Claude Code at the root of a fresh repository.
> Keep `dranne-audit.md` in the repo root — this prompt treats it as the single source of truth for all content.
> Build the entire site to the Definition of Done in §19 in one continuous run.

---

## 0. EXECUTION MODE — READ THIS FIRST

**This is a one-sweep build. You do not stop.**

- **Do not** ask clarifying questions before starting. Every question that could be asked has already been answered in §15 (Assumptions Register) with a binding default.
- **Do not** present a plan for approval. Write `docs/PLAN.md` for the record and immediately execute it.
- **Do not** insert review checkpoints, "shall I continue?" prompts, or phase gates that wait for a human.
- **Do not** stub, skip, or defer a page, component, form, test, or document because it is large. Everything in this prompt gets built.
- **Do not** stop on a blocker. If something is genuinely undecidable from the source material, apply the binding default in §13 or §15, write one line to `docs/ASSUMPTIONS.md`, and keep going.
- **Do not** stop on a missing asset. Generate the documented placeholder in §6.3, log it in `docs/ASSET-MANIFEST.md`, and keep going.
- **Do not** end the run with a summary of what you *would* build next. Every item in §19 must be checked off in the actual repository.

You are building a complete, deployable, production-quality website in a single continuous session. Parallelism is encouraged (see §14); pausing is not. Use `code-review`, `simplify` and `security-review` as **self**-review passes you run and act on yourself — not as requests for a human reviewer. Use `verification-before-completion` at the end, and if it fails, fix and re-run it. Only then are you finished.

Work order in §14 exists to satisfy dependencies, not to create stopping points. Move from one workstream straight into the next.

---

## 1. WHAT YOU ARE BUILDING

A full ground-up replacement for the web presence of **The dr.Anne Association**, a US 501(c)(3) nonprofit founded **18 February 2025** by **Dr. Anne Seifert, M.P.H., Ph.D.** — epidemiologist, prior research at UC Berkeley, Harvard and Columbia.

Two WordPress sites are being retired and merged into one:

| Site | Role today | Fate |
|---|---|---|
| `dranne.org` | The dr.Anne Association — public/nonprofit face | **The single domain going forward** |
| `dranne.net` | The dr.Anne Network — member/operational face | **301-redirected into dranne.org**, domain kept registered |

The organization teaches the **dr.Anne plan**: portion control, movement and stress reduction, built on the **MagicHand** hand-measure system, delivered as a nine-Point course and sustained through volunteer-led **Practice Circles**.

The finished product must read as a credible, warm, modern public-health nonprofit — not a diet startup, not a WordPress template. Fast, accessible, secure, and genuinely pleasant to move through.

**Two rules that override everything except §0:**

1. **Never fabricate a fact that has no source.** Where the audit shows a contradiction, §13 gives you a binding rule for choosing between the *attested* options. Where a fact simply does not exist (an EIN, a phone number), you omit the element entirely rather than inventing content. Omission is always available; invention is never.
2. **Nothing from the old WordPress database enters this project.** `dranne.org` is actively compromised. All content comes from `dranne-audit.md`, which captured it verbatim before the rebuild.

---

## 2. CRITICAL SECURITY CONTEXT

`dranne.org` is compromised **right now**:

- **293 published spam posts**, live, HTTP 200, indexable, no `noindex`.
- Still being injected: latest posts 2026-09-12 09:52, 2026-09-11 21:52, 2026-09-11 09:52. An automated injector is running.
- Pirated-software / cracked-app / pirated-movie SEO spam ("crack", "keygen", "activated", "CAMRip", "HDRip").
- **21 attacker-created categories**: Atmos (9), Builders (18), Crackers (9), Extras (12), Generators (15), Hacksers (16), HD (9), Loaders (15), Nodes (6), Offloaders (17), Pirates (8), Plugins (12), PowerPoint (15), RePacks (23), Retail2Volume (8), Russifiers (12), Subs (19), Tools (27), Trainers (14), Uncategorized (5), Wipers (24).
- All posts attributed to WordPress user **`eduardo`** (user ID 1, slug `eduardo`) — a compromised or attacker-created admin.
- `/wp-sitemap-posts-post-1.xml` returns 404 — the default sitemap is suppressed.
- `dranne.net` shows **no** sign of the same compromise (2 posts only: `hello-world`, `practice-circles`).

Write `docs/SECURITY-RUNBOOK.md` early in the run (it is a document, not a gate — write it and continue immediately):

1. Take `dranne.org` offline or into maintenance mode.
2. Rotate: all WordPress admin passwords, InterServer control panel, FTP/SFTP, database credentials, any keys in `wp-config.php`.
3. Audit the `eduardo` user and every other account; remove unknown accounts.
4. Do **not** migrate the WordPress database.
5. Inspect for injected files: `wp-content/plugins`, `wp-content/uploads`, `mu-plugins`, `wp-config.php`; check rogue cron in `wp_options` → `cron`.
6. Serve **410 Gone** (not 301) for every spam URL; request removal in Google Search Console; file a reconsideration request once clean.
7. Post-launch monitoring: Search Console coverage alerts, uptime and integrity checks, dependency scanning.
8. State the stakes plainly: donation trust, `@dranne.org` email deliverability and search visibility are all at risk today.

Invoke `security-baseline` and `incident-response` while writing it. Invoke `security-review` against your own codebase near the end of the run and fix what it finds.

---

## 3. SKILLS — INVOKE THESE AS YOU GO

Use `using-superpowers` to orchestrate. Invoke skills inline during the sweep; never let a skill invocation become a pause.

**Process**
- `writing-plans` — produce `docs/PLAN.md`, then execute it immediately.
- `executing-plans` — drive the workstreams in §14 continuously.
- `using-git-worktrees` — one worktree per parallel workstream so agents never collide.
- `dispatching-parallel-agents` — fan out the independent workstreams marked PARALLEL in §14.
- `subagent-driven-development` — per-feature implementation loops inside each workstream.
- `test-driven-development` — every worker, validator, form handler and utility gets tests first.
- `systematic-debugging` — mandatory before any bug fix. No speculative patches.
- `code-review` + `receiving-code-review` — self-review at the end of each workstream; act on the findings in the same run.
- `simplify` — after each workstream; delete abstraction that earns nothing.
- `finishing-a-development-branch` — merge each worktree back as it completes.
- `verification-before-completion` — final gate you run on yourself.
- `writing-skills` — if you repeat a project-specific procedure three times, write it into `.claude/skills/`.
- `brainstorming` — use for *internal* divergence on design and interaction options only. Do not use it to generate questions for the human.

**Design / frontend**
- `frontend-design`, `design`, `design-system`, `design-taste-frontend` (+ v1), `ui-ux-pro-max`, `high-end-visual-design`, `ui-styling`, `gpt-taste`, `stitch-design-taste` — design system, page composition, motion polish.
- `minimalist-ui` — governs the member layer (`/for-guides`). These are working tools, not marketing.
- `redesign-existing-projects` — the migration mindset: preserve meaning, replace form.
- `image-to-code` — scrapbook clippings, flyer samples, food plates: derive layout, captions and alt text from the images.
- `dataviz` — Nine Points progression, chit allocation, MagicSquare wheel.
- `artifact-diagramming` / `artifact-capabilities` / `artifact-design` — MagicHand and MagicSquare explanatory diagrams.
- `accessibility-audit` — every route. WCAG 2.2 AA is a build gate.
- `imagegen-frontend-web` / `imagegen-frontend-mobile` — abstract and textural assets only. **Never** generate fake people, fake board portraits, fake press clippings or fake food photography.

**Branding**
- `brand`, `brandkit`, `brand-discovery`, `brand-identity`, `brand-voice`, `brand-style-guide` — resolve the two clashing type/color systems into one, documented in `docs/BRAND.md`.
- `mockup` — book and printed-material presentation.
- `banner-design` — OG/social cards.
- `higgsfield-soul-id` / `higgsfield-generate` — abstract brand texture only, under the same no-fake-people rule.

**Platform**
- `cloudflare`, `workers-best-practices`, `wrangler` — hosting and deployment.
- `durable-objects` — Registry write coordination and rate limiting.
- `cloudflare-email-service` — routing `ask@` / `team@` / `vip@` and transactional confirmations.
- `cloudflare-one` — Zero Trust config for the Registry moderation queue (ship the config; the public site stays public).
- `agents-sdk` / `sandbox-sdk` — out of scope for this build. Do not add an AI assistant to the site.

**Content, SEO, growth**
- `content-strategy`, `content-audit`, `content-migration`, `content-repurposing` — the merge itself.
- `seo-technical`, `seo-onpage`, `seo-audit`, `seo-keyword`, `seo-competitor`, `seo-backlink` — this migration is an SEO recovery operation.
- `cro-optimization` — donate and course-registration paths.
- `journey-mapping`, `ux-research` — three audiences (§4).
- `pm-spec-writing`, `roadmap-planning` — the phase-2 backlog document at the end.
- `experimentation` / `feature-flagging` — flags for anything gated on a `provisional` content value.

**Handover**
- `slides` — a launch deck for the Board: what changed, what's outstanding from them.
- `remotion-motion-graphics` — a 20–30s MagicHand explainer rendered to MP4 for the homepage and the YouTube channel. Build it; do not defer it.

---

## 4. AUDIENCES

Run `journey-mapping` internally on these three before finalizing navigation.

1. **The curious newcomer** — arrived from a book, a friend, a press clipping or search. Needs: what is this, is it credible, is it free, how do I start. Success = joins or forms a Practice Circle, or buys a book.
2. **The active member / CircleGuide** — needs working tools: Open/Close statements, the nine Points, format codes, the MagicSquare card, flyer templates, registration. Success = runs a session this week without emailing anyone.
3. **The partner / sponsor / independent provider** — an HR lead, club officer or health professional. Needs pricing, tax treatment, scale limits, certification path, a contact that answers. Success = starts a conversation.

One domain, **two temperatures**: a warm public layer and a plain, high-utility member layer at `/for-guides`. Design them differently on purpose.

---

## 5. TECHNICAL STACK

```
Framework      Next.js 15 (App Router, React Server Components, TypeScript strict)
Styling        Tailwind CSS v4 (CSS-first @theme tokens) + shadcn/ui (New York style)
Components     shadcn/ui in /components/ui  — this exact path, no exceptions
Motion         motion (framer-motion) — client components only, always reduced-motion aware
Content        Typed TS modules in /content, Zod-validated at build time
Icons          lucide-react ONLY (see §7 — do NOT install `dicons`)
Hosting        Cloudflare Workers via @opennextjs/cloudflare
Data           Cloudflare D1 (Registry, providers, submissions)
Cache/Rate     Cloudflare KV + Durable Objects
Files          Cloudflare R2 (PDFs, flyer templates, media)
Email          Cloudflare Email Routing + transactional provider (Resend or MailChannels)
Anti-spam      Cloudflare Turnstile on every form
Analytics      Cloudflare Web Analytics (cookieless — no consent banner needed)
Testing        Vitest (unit), Playwright (e2e + axe-core a11y), Lighthouse CI
Quality        ESLint, Prettier, TypeScript strict, knip (dead code), CI on every PR
```

**Scaffold**

```bash
npx create-next-app@latest dranne --typescript --tailwind --eslint --app --src-dir=false --import-alias "@/*"
cd dranne
npx shadcn@latest init          # style: new-york, base color: neutral, CSS variables: yes
npx shadcn@latest add button card dialog drawer accordion tabs form input textarea select \
  checkbox radio-group label badge separator sheet tooltip popover sonner skeleton table progress
npm i motion lucide-react class-variance-authority clsx tailwind-merge zod react-hook-form @hookform/resolvers @radix-ui/react-slot
npm i -D @opennextjs/cloudflare wrangler vitest @playwright/test @axe-core/playwright knip @lhci/cli
```

`/components/ui` is mandatory — the shadcn CLI, its registry updates, and every `@/components/ui/*` import in this prompt assume it. Project components live in `/components/dranne`. Document both in `docs/ARCHITECTURE.md`.

---

## 6. ASSETS

### 6.1 Available now — GitHub repo
`https://github.com/Kirans0615/DrAnne` (branch `main`, 8 files). Raw base: `https://raw.githubusercontent.com/Kirans0615/DrAnne/main/<filename>`

| File | What it is | Use |
|---|---|---|
| `Banner.jpg` | Red dr Anne Association wordmark banner | Sample the authoritative brand red from it; re-cut as an SVG wordmark |
| `About-1536x681.png` | Book-on-desk photograph | Home / About hero imagery |
| `Anne-240x300.png` | Anne Seifert portrait | Board grid |
| `Lawrence-235x300.png` | Lawrence Wasserman portrait | Board grid |
| `Donna-224x300.png` | Donna Pare portrait | Board grid |
| `Robin-243x300.png` | Robin Hoik Phillips portrait | Board grid |
| `Fred-245x300.png` | Fred W. Hoyt portrait | Board grid |
| `image5.png` | Unlabelled graphic from the .net home page | Open it, identify it, then use or discard deliberately — log the decision |

Pipeline: download once into `/public/assets/source/`, convert to AVIF + WebP through `next/image`, generate blur placeholders, and **write a real descriptive alt string for every one** (every image on both legacy sites has empty alt). Portraits get `Name, role — headshot` style alt, never filenames.

### 6.2 Assets that do not exist yet
Vector logo/wordmark; book cover photography; the video trailer master (`Good-Health-at-Hand-Video-Trailer_V1_FINAL_01-12-22-4.mp4`) with captions and poster; scrapbook clippings ×4; flyers ×2; food plates ×5; Practice Circle photos ×4 (Leisure World Seal Beach · Screen Actors Guild Hollywood · Smith Club OC Newport Beach · Clubhouse Senior Center Seal Beach); the SAG Health Fair photo (`Group-768x677.png`); product shots (Starter Kit, Handy Chits, Salad Spinner); MagicSquare Learning Wheel card artwork; the MagicHand illustration; the 15 sponsor logos (PayPal, Parker Dewey, WP, Lin, Frederick, Freeman, Google, College of Staten Island, Zoho, InterServer, John, Idealist, GoFundMe, Smith, Green).

### 6.3 Binding placeholder policy — never stop on a missing asset

| Missing thing | What you build instead, automatically |
|---|---|
| Vector logo | Re-draw the wordmark from `Banner.jpg` as an SVG in Lobster-matched lettering; ship it as `logo.svg` and note in the manifest that it is a trace, pending an official vector |
| Book covers | **Not a blocker.** The `Book` component renders full typographic 3D covers from title, color and trim. Ship the shelf without photos; add an optional `coverImage?` prop wired but unused |
| Trailer video | Section renders from `content/media.ts`; when the file is absent the section auto-omits. Use the public Practice Circle video `https://youtu.be/GSn0eW50rrE` as the primary video with a lite-embed facade (no YouTube iframe until interaction) |
| MagicHand illustration | **Build it as original SVG** (§11.3). This is a core deliverable, not a placeholder |
| MagicSquare card artwork | **Build it as original SVG** (§11.5). Core deliverable |
| Scrapbook / flyers / plates / circle photos | Render a documented, accessible empty state with the known caption text as real content, plus an upload path via the media submission form. Never a broken image, never a stock photo |
| Sponsor logos | Reproduce the wall as a text-name grid with a per-logo image slot that fills automatically when the file lands in `/public/assets/sponsors/`. Greyscale, real alt text, `loading="lazy"` |
| Board portraits | You have all five. No placeholder needed |

Log every placeholder in `docs/ASSET-MANIFEST.md` with the exact file path and dimensions the client should supply.

---

## 7. THE TWO SUPPLIED COMPONENTS

Both were handed over as raw shadcn integration snippets. **Both have real defects.** Fix them; do not paste as-is.

### 7.1 `Book` — `/components/ui/book.tsx`

Source as supplied:

```tsx
import { cn } from '@/lib/utils';
import React from 'react';

interface BookProps {
  children: React.ReactNode;
  color?: string;
  textColor?: string;
  texture?: boolean;
  depth?: number;
  variant?: 'default' | 'simple';
  illustration?: React.ReactNode;
  width?: number;
}

export function Book(props: BookProps) {
  const { children, color = '#f50537', depth, texture, variant = 'default', textColor, illustration, width } = props;
  return (
    <div
      className={cn('w-fit [perspective:900px] inline-block group')}
      style={{
        '--book-color': color,
        '--text-color': textColor,
        '--book-depth': (depth || 4) + 'cqw',
        '--book-width': (width || 196) + 'px',
      } as React.CSSProperties}
    >
      <div className="contain-inline-size aspect-[49/60] w-fit rotate-0 relative [transform-style:preserve-3d] min-w-[calc(var(--book-width))] transition-transform duration-500 ease-out group-hover:[transform:rotateY(-20deg)_scale(1.066)translateX(-8px)]">
        <Stack align="stretch" className="rounded-l border border-border rounded-r shadow-book bg-stone-100 dark:bg-stone-800 bg-[var(--book-color)] size-full absolute overflow-hidden">
          {variant !== 'simple' && (
            <Stack shrink grow direction="row" className={cn('min-w-[calc(var(--book-width))] bg-[var(--book-color)] relative overflow-hidden')}>
              <div className="absolute inset-y-0 mix-blend-overlay opacity-100 min-w-[8.2%] bg-book-bind-bg" />
              {illustration && <div className="object-cover">{illustration}</div>}
            </Stack>
          )}
          <Stack grow={variant === 'simple'} direction="row" className="h-fit">
            <div className="mix-blend-overlay opacity-100 min-w-[8.2%] bg-book-bind-bg h-full" />
            <div className="contain-inline-size w-full">{children}</div>
          </Stack>
          {texture && (
            <div aria-hidden={true} className="absolute bg-ali bg-no-repeat bg-cover inset-0 mix-blend-hard-light opacity-60" />
          )}
        </Stack>
        <div
          aria-hidden={true}
          className="absolute bg-book-pages w-[calc(var(--book-depth)-2px)] h-[calc(100%-2*6px)] top-[3px]"
          style={{ transform: 'translateX(calc(var(--book-width) - var(--book-depth) / 2 - 3px)) rotateY(90deg) translateX(calc(var(--book-depth) / 2))' }}
        />
        <div
          aria-hidden={true}
          className="rounded-l-md rounded-r bg-[var(--book-color)] book-bg absolute left-0 w-full h-full"
          style={{ transform: 'translateZ(calc(-1 * var(--book-depth)))' }}
        />
      </div>
    </div>
  );
}

import { ComponentProps } from 'react';

type FlexAlignItems = 'stretch' | 'start' | 'end' | 'center';
type FlexJustifyContent = 'stretch' | 'start' | 'end' | 'space-between' | 'space-around' | 'space-evenly' | 'center';

interface StackProps extends ComponentProps<'div'> {
  children: React.ReactNode;
  direction?: 'column' | 'row';
  align?: FlexAlignItems;
  justify?: FlexJustifyContent;
  gap?: number;
  padding?: number;
  grow?: boolean;
  shrink?: boolean;
  wrap?: boolean;
  className?: string;
}

function Stack(props: StackProps) {
  const { children, shrink = false, grow = false, justify = 'start', align = 'start', wrap = false, padding = 0, gap = 0, direction = 'column', className, ...etc } = props;
  return (
    <div
      className={className}
      style={{
        display: 'flex',
        flex: 'initial',
        flexDirection: direction,
        alignItems: align === 'start' ? 'flex-start' : align === 'end' ? 'flex-end' : align,
        justifyContent: justify === 'start' ? 'flex-start' : justify === 'end' ? 'flex-end' : justify,
        flexWrap: wrap ? 'wrap' : 'nowrap',
        flexGrow: grow ? 1 : 0,
        flexShrink: shrink ? 1 : 0,
        padding: padding * 4 + 'px',
        gap: gap * 4 + 'px',
      }}
      {...etc}
    >
      {children}
    </div>
  );
}

export { Book, Stack }
```

**Defects to fix before use — all nine, no exceptions:**

1. **Duplicate export.** `export function Book` plus `export { Book, Stack }` is a compile error. Declare both without inline `export`; export once at the bottom.
2. **`bg-ali` is undefined.** The texture layer references a class that exists in no config. Define a real paper-grain `backgroundImage` token (`--background-image-book-texture`, inline SVG fractal-noise data URI) and use it. Do not ship a dead class.
3. **`contain-inline-size` requires `container-type: inline-size`.** `--book-depth` is in `cqw`; without the container context the spine depth silently collapses to zero. Verify with a Playwright visual test at 375px, 768px and 1280px.
4. **`book-bg` is undefined** on the back-cover element. Remove it or define it.
5. **Hardcoded `aspect-[49/60]`** is wrong for this catalogue. Add an `aspect` prop and map real trim sizes: 8×10 → `4/5`, 6×9 → `2/3`, 8.5×8.5 → `1/1`.
6. **`--text-color` is set but never consumed.** Wire it into the cover text container so covers can carry light or dark type; compute an automatic contrast fallback from `color`.
7. **No a11y semantics.** Each book opens a detail view — wrap it in a real `<a>`/`<button>`, give it an accessible name (`"{title} — view details"`), a visible focus ring, and mark every decorative layer `aria-hidden`.
8. **No reduced-motion guard.** Put the hover 3D transform behind `motion-safe:` and give a static hover treatment under `prefers-reduced-motion: reduce`.
9. **`dicons` in the demo — drop it.** Use `lucide-react` for icons. Install `@radix-ui/react-slot` and `class-variance-authority` for the shadcn `Button` (source in the integration doc; add it via `npx shadcn@latest add button` rather than hand-pasting).

**Branding the shelf.** Drive all three books from `content/books.ts`, never from JSX literals:

| Book | Trim → `aspect` | `width` | `depth` from pages | `color` |
|---|---|---|---|---|
| dr.Anne plan Manual & Practice — *The Handbook for Good Health, Happiness and Weight Control™* (2025) | 8×10 → `4/5` | widest | 144 (see §13-6) | `--brand-red` |
| dr.Anne Good Health at Hand — Expanded Edition (2023, see §13-7) | 6×9 → `2/3` | narrowest | 190 | deep plum/ink |
| dr.Anne Good Health at Hand — Quick Start (2020) | 8.5×8.5 → `1/1` | square | 80 | warm ochre |

Derive depth with a documented function — `depth = clamp(round(pages / 22), 3, 12)` — so the spines are proportionally honest. Cover typography in Lobster + Roboto Flex. Each book opens a drawer with the full verbatim blurb, specs, price and **one correct purchase link** — the legacy site pointed all three "Buy Now" buttons at the same Lightning Source URL; that is a bug to fix, not to reproduce.

### 7.2 `ContainerScroll` — `/components/ui/container-scroll-animation.tsx`

Keep the mechanic as supplied (framer-motion `useScroll`/`useTransform`; `rotate` 20→0, `scale` 1.05→1 desktop and 0.7→0.9 mobile, `translate` 0→−100; `Header` and `Card` subcomponents; `h-[60rem] md:h-[80rem]` outer; `max-w-5xl h-[30rem] md:h-[40rem]` card with `#222222` fill and 4px `#6C6C6C` border). Fix all ten:

1. **Hardcoded dark chrome** (`bg-[#222222]`, `border-[#6C6C6C]`) → theme tokens, works in light mode. This is a health nonprofit, not a dev-tool landing page.
2. **`useScroll` has no `offset`** → set `offset: ["start end", "end start"]` and tune, so the animation tracks the element's travel rather than the page's.
3. **`window.innerWidth` resize listener** → `matchMedia`-based `useMediaQuery` with SSR guard; the current version can hydrate mismatched.
4. **`Header` typed `any`** → `translate: MotionValue<number>`, `titleComponent: React.ReactNode`. Strict mode rejects `any`.
5. **`Card` declares `translate` in its type and never uses it** → remove or apply.
6. **Demo's `pb-[500px] pt-[1000px]`** → delete, scaffolding.
7. **Demo's remote `ui.aceternity.com` image** → delete; use a real project asset.
8. **Reduced motion** → render the final state with no scroll binding at all.
9. **Fixed `h-[60rem] md:h-[80rem]`** eats enormous vertical space on phones; tune against real content and verify at 375px.
10. **Performance** → animate `transform` only; `will-change: transform` on the card; set the heavy multi-layer `boxShadow` statically, never per frame.

**Use it exactly once**, on the homepage, for the primary reveal: the MagicHand + food-plate composition (or the video poster) tilting up into place beneath the hero. A scroll gimmick used twice stops being a moment.

### 7.3 Tailwind v3 fallback

If Tailwind v4 turns out not to be viable, port the supplied `tailwind.config.js` extension faithfully: `keyframes` (`accordion-down`, `accordion-up`), `backgroundImage` (`gradient-button`, `trial`, `book-bind-bg`, `book-pages`), `boxShadow.book`, `borderRadius` keyed to `--radius`, `animation` for both accordion directions — plus the `book-texture` image you define in place of `bg-ali`.

---

## 8. BRAND SYSTEM

Write `docs/BRAND.md`, then encode it as tokens. No raw hex anywhere in the codebase.

### The problem
The two sites share no type system. `.org`: **Lobster** 60px display, **Roboto** 24/20px support, white on red. `.net`: **Roboto** 32px H2 in `#F00606` and `#FA0003` plus grey `#7A7A7A`, **Arial** 28px H3 in black, and `.elementor-button` at Roboto 15px black-on-white that is nearly invisible. Both: 16px system stack, `#333333` on `#FFFFFF`, and **zero `<h1>` elements**.

### Resolution
- **Display: Lobster**, kept but disciplined — hero and section openers only, never below ~32px, never for UI or body. It is the one piece of existing personality worth keeping.
- **Text: Roboto Flex** via `next/font` (variable, self-hosted, subset, `display: swap`). Retire Arial and the system stack entirely.
- **Long-form: Source Serif 4** for the Open/Close Statements and Background History — read aloud, read slowly.
- **One red.** Sample the authoritative red from `Banner.jpg`, then define three roles:
  - `--brand-red` — display/banner red; large text ≥24px and fills only.
  - `--brand-red-ink` — darkened, clears **4.5:1 on white** for links and body. Note `#F00606` measures ~4.44:1 and **fails** AA for small text. `#C20017` (~6.4:1) is the starting point; verify and record the measured ratio in `docs/BRAND.md`.
  - `--brand-red-quiet` — 6–8% tint for section washes.
- **Neutrals:** a warm grey ramp 50→950, not pure `#333`. Body ≥7:1 where achievable.
- **Member-layer accent:** one supporting hue so `/for-guides` reads as a different mode (muted ink-blue or sage; test against the red).
- **The three Keys** get permanent color + icon signatures used site-wide: **Apportion** (red), **Move** (warm amber), **Silence** (cool sage).

### Tokens

```css
/* app/globals.css */
@import "tailwindcss";

@theme {
  --font-display: "Lobster", cursive;
  --font-sans: "Roboto Flex", ui-sans-serif, system-ui, sans-serif;
  --font-serif: "Source Serif 4", ui-serif, Georgia, serif;

  --color-brand-red: #EE0606;         /* replace with the sampled banner red */
  --color-brand-red-ink: #C20017;     /* verify ≥4.5:1 on white */
  --color-brand-red-quiet: #FDF0F1;

  --color-key-apportion: var(--color-brand-red);
  --color-key-move:      #B4690E;
  --color-key-silence:   #4C6B5A;

  --radius: 0.625rem;

  --shadow-book: 0 1.8px 3.6px rgba(0,0,0,.05), 0 10.8px 21.6px rgba(0,0,0,.08),
                 inset 0 -.9px 0 rgba(0,0,0,.1), inset 0 1.8px 1.8px hsla(0,0%,100%,.1),
                 inset 3.6px 0 3.6px rgba(0,0,0,.1);

  --background-image-book-bind-bg:
    linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,0) 12%,hsla(0,0%,100%,.25) 29.25%,hsla(0,0%,100%,0) 50.5%,hsla(0,0%,100%,0) 75.25%,hsla(0,0%,100%,.25) 91%,hsla(0,0%,100%,0)),
    linear-gradient(90deg,rgba(0,0,0,.03),rgba(0,0,0,.1) 12%,transparent 30%,rgba(0,0,0,.02) 50%,rgba(0,0,0,.2) 73.5%,rgba(0,0,0,.5) 75.25%,rgba(0,0,0,.15) 85.25%,transparent);
  --background-image-book-pages:
    repeating-linear-gradient(90deg,#fff,#efefef 1px,#fff 3px,#9a9a9a 0);
}
```

### Type scale
Fluid `clamp()`, 1.2 ratio mobile → 1.25 desktop. Body capped at 68ch, Statements at 60ch. Heading level and visual size are **independent** — the legacy sites used H2 for both 60px display and 32px section heads. Never again.

---

## 9. INFORMATION ARCHITECTURE — build every route

```
/                              HOME
/about
  /about/our-story
  /about/board
  /about/press                 Scrapbook, captioned
  /about/gallery               Practice Circle photos
/the-plan
  /the-plan/how-it-works
  /the-plan/magichand
  /the-plan/food-plates
  /the-plan/recipes
/books-and-materials
  /books-and-materials/catalogue
/get-started
  /get-started/join-a-circle
  /get-started/find-a-circle          The Registry — real, searchable, real form
  /get-started/independent-providers
  /get-started/volunteer
  /get-started/independent
/for-guides                            MEMBER LAYER — own layout, own subnav, quieter
  /for-guides/start-a-circle
  /for-guides/open-and-close
  /for-guides/open-and-close/statements   + downloadable PDF + Guide Mode
  /for-guides/course-formats
  /for-guides/membership-stages
  /for-guides/certification              + the 9-Point knowledge check
  /for-guides/flyers-and-templates
  /for-guides/events
  /for-guides/tips
/partner
/faq
/testimonials
/donate
/contact
/privacy
/accessibility
```

Nav labels match slugs. The legacy `.org` nav labelled `/practice-circles/` "Guide" and `/testimonials-donate/` "Testimonials" — both mismatches are gone. Nav is rendered **once** by one responsive component; `.net` duplicated it in the DOM and made keyboard users tab through it twice.

---

## 10. PAGE-BY-PAGE CONTENT SPEC

`dranne-audit.md` §3 and §4 contain **every page's copy, verbatim**. Read all 1,512 lines before writing pages. Rules: copy is transcribed from the audit and **corrected** per the ~60-item typo list (audit §6) — never paraphrased, never altered in meaning. All 7 Lorem ipsum blocks are deleted (Home ×1, Partner ×2, Guide ×2, Testimonials ×2) with no filler substituted. Every page gets exactly one `<h1>`, a unique `<title>`, and a hand-written meta description.

### 10.1 Home
Hero with the wordmark, the real mission line, one primary action. "You're Invited !" becomes a properly-levelled heading, not display text masquerading as H2.

Verbatim organizational paragraph (501(c)(3); Dr. Anne Seifert, epidemiologist with decades in nutrition and public health research; UC Berkeley, Harvard and NIH; simple, flexible, proven system for lifelong weight control, healthy eating and mindful living; portion control, movement, stress reduction; "without unhealthy diets, deprivation, or gimmicks").

Mission statement from `.net`: "To promote a healthy lifestyle including well-balanced eating for weight control, and exercise for physical strength and meditation for stress reduction. And to provide Practice Circles for support. To offer a flexible and practical program for lifetime."

**The three Keys — Apportion, Move, Silence — promoted to the homepage.** They appear on exactly one buried page today (`/learn-more-partner/`) and are the strongest brand vocabulary the organization owns. Each Key holds three Points; nine in total.

`ContainerScroll` reveal (§7.2).

**Benefits**, real `<ul>` markup — the legacy page used nine `🔴` `1f534.svg` images as bullets; those are deleted:
- *Freedom instead of restriction:* still eat your favorite foods / no counting calories, no weighing foods / no drugs, no supplements
- *Simple and fun!:* easy to use / easy to remember / always available hand measure
- *Livable forever:* flexible self-selected food choices / adapts to medical restrictions / enjoyable exercise, personal meditation

Closing line: "The dr.Anne plan replaces confusion with confidence through simple, scientifically informed habits you can enjoy for life."

Also: sub-headings "Interested in joining a Practice Circle or learning more?" and "Whether you're just curious or ready to begin, your journey to better health starts here."; the video block (poster, captions, transcript, lazy); a Board preview linking to `/about/board`; founding date 18 February 2025. Delete forever: "Because this is a new Site, some of the tabs are still under construction."

### 10.2 About / Our Story
Full Background History verbatim: the Institute of Health Research at Pacific Medical Center, San Francisco; Dr. George Z. Williams as Chief Investigator; behavioral lifestyle change to prevent or forestall chronic disease; the NIH-funded four-year study of 2,000+ people evaluated with laboratory tests, exercise protocols and lifestyle habit questionnaires; positive impact on blood pressure, body fat and overall health scores; the classic 1960s Belloc and Breslow study; the continuing Nurses' Health Study; "in essence, health practices matter"; her study of existing programs; the 1982 first book *The Intelligent Woman's Diet*; classes through clubs and government agencies; the realization that education alone was not enough.

Study start year: **1972**, per §13-5.

### 10.3 About / Board
Five directors, `.org` wording corrected (`.net` misspells "UC Barkeley" and "Havard").

| Name | Credential line | Term |
|---|---|---|
| Anne Seifert, M.P.H., Ph.D. — Chair/Founder | Epidemiologist, Author; prior research UC Berkeley, Harvard, Columbia Universities | present–2026 |
| Lawrence Wasserman, Ph.D. — Founding Director | President, Fortech International Ltd.; management services and consulting | 2026–2028 |
| Donna Pare, M.S. — Director | Computer Science; entrepreneur, professional tutoring and investor | 2025–2027 |
| Robin Hoik Phillips, I.H.P. — Vice Chair/Founder | Integrative Health Practitioner; Writer/Owner, Robinedits.com | 2025–2027 |
| Fred W. Hoyt, M.B.A. — Secretary/Treasurer | *omit the credential line* — both source versions are garbled (§13-12) | present–2026 |

Footnote: "Elected for three year staggered terms."

### 10.4 The Plan / MagicHand
The heart of the site. Build the interactive explainer (§11.3) from the canonical Open Statement text:

- Hold up your **left hand**. The fingers represent food groups. Starting with the pinky: **"My Fingers Count Portions Offering Variety."**
- **M** Milk and Dairy · **F** Fruit · **C** Carbohydrate · **P** Protein · **O** Oils and Fats · **V** Vegetables (open, because unlimited) · plus plenty of **Water**.
- Fingers above the palm are governed by **palm portions** — the size of your palm, no thicker than your thumb, or a cupped palm.
- The **thumb, measured to the first knuckle joint**, is one Oil or Fat portion.
- **12 palm portions + 3 thumb portions = 15 chits a day**, plus unlimited vegetables.
- Unused chits do **not** carry over. Exceeding the allowance does **not** mean cutting back tomorrow. **"Every day is a new day."**

Include the origin story: the audience member who asked where to press on the hand to lose weight; "there is no magic spot"; "isn't magic the mastery of hand-eye techniques to produce results?"; the MagicHand as a "hand-trick" for allocating food; "slim of hand".

### 10.5 The Plan / How It Works
The benefits three-column block, the nine Points under the three Keys, the "plug and play" / "one-and-done" model, the structured evidence-based behavioral health education framing, "Structured. Standardized. Scalable.", and the post-course volunteer-led Practice Circles with no ongoing subscription cost.

### 10.6 The Plan / Food Plates
Five plates as hotspot-annotated images:
- Lunch plate: salad, English muffin, roast beef — 1 Protein, 1 Fat, 1 Carbohydrate, Vegetables
- Pancake, blueberries and butter — 1 Carbohydrate, 1 Fat, ½ Fruit
- Salad with feta, dressing, cucumbers, lettuce — 1 Fat, ½ Milk, Vegetables
- French toast & bacon — 1 Fat, ½ Protein, 1 Protein (for egg in toast), 1 Carbohydrate
- The fifth caption is truncated in the source ("Sandwich &salad, some") with no chit count → **render the plate with its caption omitted entirely**, per §13-8. Do not complete someone else's sentence.

Fix "Descripton" → "Description", "1Carbohydrate, 1Fat" → spacing.

### 10.7 The Plan / Recipes
Four recipes, ingredients and method verbatim, each with its chit line. Fix "mix in four" → "flour", "comes our clean" → "comes out clean", "appetitie" → "appetite", "Bon Apetit!" → "Bon Appétit!".
- **Peasant Yeast Bread** — 1 palm-size, thumb-thick serving = 1 Carbohydrate chit
- **Mom Hoyt's Special Spread** — 1 roll serving = 1 Carbohydrate chit + 1 Protein chit
- **Brussels Sprouts Soufflé** — 1 serving or 2 cupped palms = 1 Protein chit + 1 Milk chit
- **White Sauce** — 1 serving = 1 Milk chit + 1 Oil chit

Add `Recipe` schema, chit filters, print styles, and a submission path ("send your own — measure in palm and thumb portions").

### 10.8 Books & Materials
The three books (§7.1) plus:
- eBook and audio at PayHip — **normalize the casing** (`payhip.com/drAnneAssociation` vs `payhip.com/dranneassociation`; use one).
- Amazon `https://www.amazon.com/dr-Anne-plan-MANUAL-PRACTICE-Happiness/dp/0943584000/`
- Barnes & Noble `https://www.barnesandnoble.com/w/dranne-plan-manual-practice-anne-seifert/1147811562`
- Lightning Source `https://shop.lightningsource.com/b/085` — **force https**, one correct link per product.
- ISBN rendered as **978-0-943584-00-3** (§13-16 — the check digit validates).
- Publisher: Varnes.
- Catalogue: Manual & Practice $27 · Expanded $27 · Quick Start $18 · digital $18 · Handy Chits Counter app $9 (fix "ounter" → "Counter") · dr.Anne Salad Spinner labelled **in development, not purchasable**.
- dAp Starter Kit — by arrangement with sponsoring Partner organizations; hand-drawn materials, the book and more; contact `vip@`.
- Training options with the pricing from §13-1.
- Verbatim intro: "Here is your 'treasure trove' of basic materials to support our dAp Course."; the Basic section; "WHERE TO GET THE dr. Anne plan books"; the catalogue heading; the note that proceeds support volunteer activities and ongoing Practice Circles.

### 10.9 Get Started / Find a Circle — The Registry
The single biggest functional gap: the page says "complete the form below" and **no form exists**. Build:

- A **real registration form** — React Hook Form + Zod + Turnstile → D1, with an email confirmation to the registrant and a notification to `team@`, plus a moderation queue.
- A **searchable, filterable directory** — by state/metro, virtual vs in-person, format code, type (Volunteer / Independent / Partner), day and time. Server-rendered and crawlable.
- The **agreement checkbox**, verbatim: follow the program formula, adhere to good business practices, cooperate with other Guides, observe confidentiality, take full responsibility for the conduct of the Circle Group, maintain communication with the Association.
- The verbatim warning not to attend an unregistered Circle Group.
- **MENU Code** explained (the meeting schedule — days, weeks or months to cover the 9 Points) and **TYPE** explained (Volunteer / Independent / Partner, determining whether it's free).
- Remove "UNDER CONSTRUCTION" and the sample rows; ship an honest empty state with a "be the first" CTA.

### 10.10 Get Started / Independent Providers
Two certified providers: **Robin H. Phillips, IHP** — Integrative Health, Orange CA area (ZIP 92866), Pacific Time; **John Clenton, BEng** — support counseling, 92316, Pacific Time. Phone numbers in the source are masked placeholders (`203-xxx-xxxx`, `909-xxx-xxxx`) with an inconsistent area code — **omit phone numbers entirely** and route contact through the form to `vip@` (§13-18). Include the verbatim framing that these providers are certified to deliver the Training Course, lead Practice Circles, and offer one-to-one coaching, with fees varying.

### 10.11 For Guides / Course Formats
**One** table, `content/formats.ts`, all twelve codes (the Formats page listed 9; the Registry listed 12):

| Code | Name | Detail |
|---|---|---|
| 9M | 9-Month Win | 1 Point session a month, 45 min each |
| 5M | 5-Month Shapeup | 1 Point session twice a month |
| 18W | 18-Week Harmony | 1 Point session every other week |
| 9W | 9-Week Course | 1 Point session a week, 45 min each |
| 5W | 5-Week Wonder | 2 Point sessions a week, contiguous or separate |
| 3W | 3-Week Turnaround | 3 Point sessions a week, contiguous or separate |
| 2W | 2-Week Insight | Starts and ends within a two-week period |
| 1W | 1-Week Celebration | Starts and ends within a one-week period |
| 3D | 3-Day Package | Any 3 days, generally Friday evening, Saturday and Sunday |
| 2D | 2-Day Event | Any 2 days: 5 & 4 Point split |
| 1+ | 1+Day Followup | A full day plus a follow-up meeting by appointment |
| 1D | 1-Day Miracle | A full day, generally 9am to 8pm, with meals |

Plus the sequence copy: the introductory half-hour Registration Session (a 15-minute talk describing the program, plus open Q&A), materials distribution, and the first Practice Circle the following week covering Point 1 of 9.

### 10.12 For Guides / Open & Close Statements
**The most important operational document on either site.** Reproduce audit §4.8 exactly — Open through Close, including the blanks (`____`), the MFCPOV call-and-response with its parenthetical answers, the palm/thumb rules, the 15-chit allowance, the meeting guidelines (speak without interruption, raise your hand, use "I" statements, focus on your own experience, respect privacy and confidentiality, make it a safe place, the right to say "pass"), "Today, we will be discussing Point ___ called ___________", the five-minute close allowance, filling in the MagicSquare dot, the ideal-weight visualization and the spoken line "I choose to be at my ideal weight", the abdominal breathing instruction (fill the balloon / flatten the back), the three slow breaths, the next-session scheduling line, the call for a volunteer to lead, and "Thank you for having a HAND in this session!"

Fix only: "breather" → "breathe", "conistancy" → "consistency", "Clidk" → "Click", the double period after "Point..".

Then build what the copy has always promised and never delivered:
- A **real downloadable PDF**, generated at build time from the same content source, stored in R2, versioned, with a print stylesheet fallback.
- **Guide Mode** — distraction-free teleprompter: large adjustable type, a 45-minute session timer, a Point selector that fills the blanks, a five-minute close warning, and an animated three-breath pacer for the closing exercise, with a full reduced-motion and screen-reader-friendly alternative.

### 10.13 For Guides / Start a Practice Circle
Verbatim "Hands-On Continuing Support" intro; the Materials section (print books recommended; reading the Practice section and writing answers in the spaces provided creates a better self-help experience); minimum **three people**; the **Three Linking Rings** — Ruling-Hand (contact phone/email for the group), Right-Hand (assists, may organize registration events), Post-Hand (meeting notices, virtual or in-person); circles can be any size, anywhere, whenever; the **T-E-A-M** — Three linking rings, Experience (knowing the 9 Points), Administrative (registering the Circle with the website), Meeting space (physical or virtual); finding a place and a regular time; growth by word of mouth, notices and social media.

**Get / Guide / Grow** verbatim: new participants may join at any Point session and must have the book in hand at all meetings; all CircleGuides must read the standard Open and Close statement; start and end on time; the role may rotate; the CircleGuide reads from the Practice Point page with some leeway on topics; 45 minutes; move conversation gently; it is not the CircleGuide's job to provide answers or information; speak only from personal experience and don't be directive; each person is on their own journey; clap at the close to thank attendees; Point Mentors available via `team@`; list open circles with The Registry.

### 10.14 For Guides / Membership Stages
(1) **Apprentice** — going through the Point Practice sessions for the first time; learning the program, not yet a Member; volunteer circles with little or no experience are fine, all are Apprentices. (2) **CircleGuide** — after completing the nine Points, through home study or in Practice Circles, the Apprentice becomes a Member and is eligible to lead and direct their own Circle Group. (3) **Point Mentor** — after successfully leading three Practice Circle sessions, able to assist and support other CircleGuides. This progression is the prerequisite for Independent Member status; for that credentialed class the 3-week dAp Training Course is recommended as a fast-track option, with pay-per-Point Practice Circles available afterwards. Membership after the nine Points is **for life**.

Fix "Pracitice" → "Practice", "successly" → "successfully", "couseling" → "counseling".

### 10.15 For Guides / Certification
The full progression, plus the requirement to pass a short tutorial test followed by an interview with a dAA Board member. The tutorial has never existed — **build it**: a real nine-Point knowledge check drawn entirely from the source content (MFCPOV, chit rules, Three Linking Rings, T-E-A-M, membership stages, the Open/Close protocol). Self-scoring, non-gating, with a printable result the candidate brings to their Board interview. Also include the Independent-coach requirements: experience with the training course and completion of the nine Practice Points is mandatory.

### 10.16 For Guides / Events
**Ahoy dr.Anne!** — a one-week cruise along the California coast to experience the lifestyle and good health of the dr.Anne plan; available once a year with prior contract arrangements; `vip@`. **Dinner with Donna** — western Massachusetts; a dinner invitation for those currently in a Practice Circle who'd like an informal conversation with a Board member; open to CircleGuides and their participants; place, time and date to be decided; `vip@`. **Robin's Retreat** — 4 to 7 days in a natural setting along the California coast; learning the plan's principles with others; good meals, regular exercise, hiking, a change from routine; `vip@`. Plus custom events integrated with a client agenda, good for business conferences and spouse attendance. Add `Event` schema; label clearly as recurring/sample offerings since no dates exist.

### 10.17 For Guides / Flyers & Templates
The two flyer images become **actual editable templates**: a print-ready PDF plus an in-browser flyer builder that takes circle name, guide name, place, day, time and contact, and generates a printable PDF in brand. The current copy says "make your own" and provides nothing.

### 10.18 For Guides / Tips
Referenced on Team Build ("take a look") and linked to nothing. Build the page: a tips collection with a submission form to `team@`, an honest empty state, and the verbatim invitation to contribute.

### 10.19 Partner
Verbatim: "We Welcome you to support our Association mission!"; bring the program to employees, members or others who might benefit; the Course led by health-trained professionals covering all nine Points, generally virtual through Google Meet in webinar fashion; "Standardized. Sustainable. Scalable." (fix "Standarized"); the introductory Registration Session; **Sponsors** (lump sum upfront for a cohort or a set number of employees or members, a tax-deductible corporate sponsorship, a single 501(c)(3) donation receipt, free to participants); **Voluntary Employee or Member** (the organization promotes the 3-week course, the individual pays out of pocket, a tax-deductible personal wellness enrollment donation); **Lifelong Practice Circles** at no extra cost, volunteer-led, maintaining access; **Enrollment Tiers** (discounting from 10–49 to 50–249 to 250+, scaling seamlessly to a maximum of 1000, with the interactive volunteer-led free Practice Circles recommended capped at 30 — fix "seemlessly"); turnkey with zero HR overhead; entirely self-sustaining; standardized NIH-backed materials and management of instructors; contact `ask@` or direct the health benefits liaison.

Plus the `.net` partner model verbatim, with the arithmetic reconciled per §13-1: materials $27, the remainder split evenly between the Association and the partnering organization for mutual fundraising. Render the split from the resolved price constant, never as hardcoded dollars.

### 10.20 FAQ
Merge Team Build FAQ + Team Build – HERE, with `FAQPage` schema:
- How can I create my own Circle Group? (You will need a T-E-A-M.)
- How is the MAGIC-HAND program administered? (Nine Point sessions from the Practice section; the book is the instructional manual; Volunteer = free, virtual or in-person; Independent = guided by a credentialed person, one-to-one for fee; Partner = sponsored or fundraising for clubs and organizations.)
- How did the dr.Anne plan begin? (Co-Investigator on an NIH-funded study of over 2,000 participants investigating how healthy people stay healthy; the conclusion that most chronic or debilitating diseases were exacerbated by or resulted from being overweight; the search for a practical, well-balanced program using foods people normally eat; introduced in book form in 1982.)
- Why is the drawing called your MagicHand? (Full origin story.)
- What does "Healthy Moderation" mean? (Balance; no restrictive dieting, extreme fitness, quick-fix weight loss or app-driven nudging; sustainability, public health credibility, behavioral realism, good health practices, long-term adherence. Fix "concerpt"; supply the missing "A." prefix.)

### 10.21 Testimonials
Deduplicated per §13-10 and §13-11. The six `.org` participant quotes (M. S. Solana Beach CA; A.V. B. Tarpon Springs FL; D.A. F. Beverly Hills CA; M. B. San Diego CA; J. M. K. Massapequa Park NY; E. L. Seal Beach CA), plus the two longer quotes (A.L., March 16 1990, Englishtown NJ; A.W., May 26 2022, Seal Beach CA). "Hand in Hand" as the section opener. The SAG Health Fair photo captioned "With volunteers, actors Roberta Bassin and Nina Diamante at the Screen Actors Guild Health Fair 2011" (fix "Screens Actor's Guild"). The sponsor/collaborator wall under "Thank you to our sponsors, collaborators, volunteers, and donors."

### 10.22 Donate
- **One** PayPal path with the hosted button ID: `https://www.paypal.com/donate/?hosted_button_id=5332D74NS3YQU`. The `.net` link omits the ID and produces unattributed donations — never reproduce that.
- Suggested amounts tied to real outcomes: $18 = one Point session with a professional coach; $27 = one book; the full course place at the resolved price.
- The verbatim payment-window copy (PayPal processes some orders; no PayPal account needed; other payment methods accepted).
- 501(c)(3) tax-deductibility language; where the money goes — the Association website, volunteer activities, and ongoing learning and Practice Circles.
- Sponsor logo wall.
- Fill the empty "Sponsorships & Donations" heading with the sponsorship content from Partner, or drop the heading. Do not ship an empty heading.
- **EIN:** render the line only if `content/org.ts` has one; omit silently otherwise (§13-21).

### 10.23 Contact
One real form, routed by enquiry type, replacing three plain-text addresses:
- General / partner → `ask@`
- Volunteer, Practice Circle support, media submissions → `team@`
- Certification, partnerships, events, product orders → `vip@`

Per §13-15, all three display at `@dranne.org`, with the `.net` addresses forwarded. Every email address anywhere on the site is a real `mailto:` link — currently none are. Also surface LinkedIn `https://www.linkedin.com/company/dranne-association` and YouTube `https://www.youtube.com/@drAnne9`.

### 10.24 Privacy & Accessibility statements
Write both. Privacy covers form data, retention, the cookieless analytics choice and third-party processors (PayPal, PayHip, YouTube facade). The accessibility statement names the WCAG 2.2 AA target, the known gaps, and a contact route for problems.

---

## 11. SIGNATURE INTERACTIONS — build all ten

In `/components/dranne/`. Every one: keyboard-operable, screen-reader-usable, and visually complete under `prefers-reduced-motion: reduce`.

**11.1 The Book Shelf.** Three `Book` components on a shelf. Idle: slow staggered breathing tilt (2–3° over 8s, motion-safe only). Hover/focus: the supplied `rotateY(-20deg) scale(1.066) translateX(-8px)`. Click: detail drawer with blurb, specs and purchase link. Optional shelf-wide scroll parallax as the books settle. Spine depth derived from real page counts.

**11.2 The Three Keys triptych.** Scroll-pinned. Apportion / Move / Silence, each expanding to reveal its three Points on entry. Persistent color and icon signatures reused site-wide. The homepage's structural spine.

**11.3 The MagicHand explainer.** An original SVG left hand, hand-drawn in feel, not clip-art. Hover/tap/focus each finger → letter, food group, example portion. Pinky-to-index scroll sequence animates **M-F-C-P-O-V**. The palm shows the palm-portion rule; the thumb shows the first-knuckle oil/fat portion; the open space shows unlimited vegetables and water. A "why is it called Magic?" affordance reveals the origin story. Full text alternative for screen readers and no-JS.

**11.4 The Chit Counter.** 12 palm chits + 3 thumb chits plus an unlimited-vegetables field. Tap to spend, tap to undo. At 15, a gentle non-judgemental message. At rollover: "Unused chits don't carry over. Every day is a new day." Encode both rules honestly — no banking, no compensating. **In-memory session state only; no localStorage, no server-side storage of anyone's intake.** Copy makes clear this is an educational demonstration, not medical advice or a food diary.

**11.5 The MagicSquare Learning Wheel.** Referenced constantly across both sites and never once shown. Build it: a nine-segment wheel, one dot per completed Point, fillable in-browser, printable at card size, downloadable as PDF, and explained plainly — it is both an achievement record and the Member card for attending Practice Circles, and once the nine Points are complete membership is for life.

**11.6 The Nine Points path.** Scroll-driven journey grouping the nine Points under their three Keys, with progress state, linking into Guide Mode per Point.

**11.7 Guide Mode teleprompter.** §10.12.

**11.8 Registry directory.** Filterable list with an optional map view, honest empty states, server-rendered and crawlable — a genuine SEO asset for "practice circle near me".

**11.9 Food-plate hotspots.** Each chit a labelled hotspot on the plate. Keyboard-navigable; captions duplicated as text below each image.

**11.10 Scrapbook lightbox.** Press clippings with real captions, publication names, dates and transcribed text. Today the page is four images and one heading — invisible to search and to screen readers. Use `image-to-code` to derive layout and transcribe; mark transcriptions `provisional: true` in content so the client can verify without blocking the build.

**Motion principles.** One signature moment per page, not five. 150–400ms for UI, up to 800ms for scroll reveals. Ease-out for entrances. `transform` and `opacity` only. Never block content on animation. Test the entire site with reduced motion forced on — it must be fully usable and visually complete.

---

## 12. FORMS, DATA AND EMAIL

| Form | Route | Storage | Notify |
|---|---|---|---|
| Circle registration | `/get-started/find-a-circle` | D1 `circles` (moderated) | `team@` + confirmation to registrant |
| General contact | `/contact` | D1 `enquiries` | routed by type to `ask@` / `team@` / `vip@` |
| Independent provider application | `/get-started/independent` | D1 `providers` | `vip@` |
| Partner enquiry | `/partner` | D1 `partners` | `vip@` |
| Media / photo submission | `/about/gallery` | R2 + D1 | `team@` |
| Feedback (the "Feedback" the copy promises) | `/for-guides` | D1 `feedback` | `team@` |
| Tips submission | `/for-guides/tips` | D1 `tips` | `team@` |
| Recipe submission | `/the-plan/recipes` | D1 `recipes` | `team@` |

Every form: one Zod schema shared client and server, React Hook Form, Turnstile, honeypot, Durable-Object-backed rate limiting, server-side validation, accessible inline errors bound with `aria-describedby`, a real success state, and a graceful no-JS fallback. Never echo user input unescaped. Store the minimum PII and document retention in the privacy policy. Write D1 migrations; seed nothing fake.

**Cookies.** Use cookieless Cloudflare Web Analytics and set **no non-essential cookies**, so no consent banner is needed — faster, cleaner and more trustworthy than reproducing the legacy CookieAdmin Pro modal. Document the decision in the privacy policy.

---

## 13. CONTRADICTIONS — BINDING RESOLUTIONS, NO STOPPING

The audit lists 21 conflicts and gaps. Each has a binding rule below. Apply it, mark the value `provisional: true` in `content/`, log it in `docs/CLIENT-DECISIONS.md` with both source variants and the rule you applied, and **keep building**. Provisional values render normally in production — they are attested content, not invention.

Type the content layer so provisional values are visible in code:

```ts
export type Sourced<T> = {
  value: T;
  source: string;          // e.g. "dranne.org/partner (audit §3.3)"
  provisional?: true;      // conflicting sources; rule applied — see docs/CLIENT-DECISIONS.md
  conflictsWith?: T[];
};
```

Add `scripts/check-content.ts` to CI: every `provisional: true` value **must** carry a `source` and appear in `docs/CLIENT-DECISIONS.md`. Missing provenance fails the build; being provisional does not.

| # | Conflict | Binding resolution |
|---|---|---|
| 1 | **Course price: $199 vs $99** | Use **$199** (with **$172** where materials are already owned). Rule: the `.org` figure is the public 501(c)(3) statement and appears on three pages (.org Partner, .org Guide, .net Open Sesame) against two for $99. Define `COURSE_FEE = 199`, `COURSE_FEE_WITH_MATERIALS = 172`, `MATERIALS_COMPONENT = 27` in `content/pricing.ts` and derive **every** dollar figure on the site from them, including the Partner revenue split (materials $27; remainder split evenly between Association and Partner). Flag as the #1 client decision. |
| 2 | Discounted price | $172, tied to #1. |
| 3 | Course length | Canonical: **nine Points delivered over three weeks** — the 3W "3-Week Turnaround" format, three Point sessions a week. Describe other formats as alternatives from the code table, never as the default. |
| 4 | Session length | Not actually contradictory once scoped: **45 minutes per Point session** (Practice Circles) and **90 minutes per weekly Partner Course meeting**. State each in its own context; do not merge them into one number. |
| 5 | Study year 1972 vs 1976 | Use **1972**, the date given in the narrative Background History on About Us. The FAQ's 1976 likely conflates the Nurses' Health Study start year. Flag. |
| 6 | Book 1 pages 146 vs 144 | Use the **catalogue** figures throughout (`.net` Open Sesame): **144**. Rule: the catalogue also carries price, year and publisher, so it is the more complete bibliographic record. Take trim size (8×10) from `.org` Materials, which the catalogue lacks. |
| 7 | Book 2 year and pages | Same rule: **2023, 190 pages**; trim 6×9 from `.org`. |
| 8 | Book 3 pages 82 vs 80 | Same rule: **80 pages**; trim 8.5×8.5 from `.org`. |
| 9 | Book prices | Publish $27 / $27 / $18 (+$18 digital, $9 app) on the merged site — `.org` showed no prices at all. |
| 10 | Testimonial A.L. wording | Use the `.org` version, which carries initials and date: "…you wouldn't believe my perky attitude." A.L., March 16 1990, Englishtown NJ. |
| 11 | Testimonial A.W. wording | Same rule — the `.org` version with attribution and date. Deduplicate against the `.net` Team Build quotes. |
| 12 | Fred Hoyt's credential line | Both variants are garbled. **Omit the credential line**; render name, post-nominal and role only. Do not attempt to reconstruct it. |
| 13 | Robin Phillips' business | Use `.org`: "Integrative Health Practitioner; Writer/Owner, Robinedits.com". |
| 14 | Format codes 9 vs 12 | Publish **all twelve** in one table. Longer schedules are supersets, not contradictions. |
| 15 | Email scheme | Display all three at `@dranne.org` (`ask@`, `team@`, `vip@`) with the `.net` addresses forwarded. Put the mapping in `docs/DEPLOY.md`. |
| 16 | ISBN `978-943584-00-3` | Twelve digits — missing the registration-group `0`. **978-0-943584-00-3** validates: weighted sum 9+21+8+0+9+12+3+15+8+12+0+0 = 97, check digit (10 − 97 mod 10) mod 10 = **3**, matching the source's trailing digit. Use the corrected form and record the calculation in `docs/CLIENT-DECISIONS.md`. |
| 17 | Publisher "Varnes" | Use as stated. |
| 18 | Provider phone numbers masked | **Omit phone numbers.** Route provider contact through the form to `vip@`. Keep names, credentials, specialties and time zone. |
| 19 | Sponsor logos | The client already displays all 15 publicly on the live site; reproduce the wall with real alt text, greyscale treatment and lazy loading, behind a `sponsors.enabled` flag (on) so a single edit can pull it. Note the permissions review in `docs/CLIENT-DECISIONS.md`. |
| 20 | Certification tutorial | **Build it** (§10.15) from source content, self-scoring and non-gating. |
| 21 | EIN | No source. Render the EIN line only when `content/org.ts` supplies one; omit silently otherwise. Never invent a number. |

Also fix, without ceremony, every item in audit §6: all ~60 typos across both sites. Write a Vitest test asserting that the known-bad strings ("Standarized", "seemlessly", "Praticioner", "Practicioner", "Associaiton", "Pracitice", "successly", "couseling", "Indepdent", "uselful", "concerpt", "orcompany", "appetitie", "Apetit", "Descripton", "consultaitons", "ounter app", "Reseach", "progam", "Barkeley", "Havard", "comraderie", "breather", "amd", "acts a facilitator", "mix in four", "comes our clean", "emobying", "and/r", "Clidk", "conistancy", "withing", "Mangagement", "Screens Actor's Guild", "Conduct you Practice Circle", "Lorem ipsum") appear **nowhere** in `content/` or in any rendered route.

---

## 14. WORK ORDER — one continuous run

Dependencies, not checkpoints. Roll straight from each into the next. Use `using-git-worktrees` for the PARALLEL blocks and `finishing-a-development-branch` to merge each back as it completes.

**A. Foundation (sequential).** Scaffold. Tokens and `docs/BRAND.md`. Fonts. Layout shell, header, footer, single responsive nav, skip link. `content/` schema + Zod validation + the `Sourced<T>` type + `scripts/check-content.ts`. Full content transcription from the audit into `content/` with typo corrections and §13 resolutions applied. CI: lint, typecheck, unit, e2e, axe, Lighthouse budgets. `docs/SECURITY-RUNBOOK.md`, `docs/PLAN.md`, `docs/ASSUMPTIONS.md`, `docs/CLIENT-DECISIONS.md`, `docs/ASSET-MANIFEST.md`, `docs/ARCHITECTURE.md`.

**B. Component library — PARALLEL, 3 agents.**
- Agent 1: `Book` (all nine fixes) + shelf + detail drawer; `ContainerScroll` (all ten fixes).
- Agent 2: MagicHand SVG, Chit Counter, MagicSquare wheel, Nine Points path, Three Keys triptych.
- Agent 3: forms system, D1 schema and migrations, Workers, email routing, Turnstile, rate limiting.
Shared contract: everything consumes `content/` and design tokens; no cross-agent imports outside `/components/ui`.

**C. Public pages — PARALLEL, 3 agents.** (1) Home + About cluster. (2) The Plan cluster (How It Works, MagicHand, Food Plates, Recipes). (3) Books & Materials, Partner, Testimonials, Donate, FAQ, Contact, Privacy, Accessibility.

**D. Member layer — PARALLEL, 2 agents.** (1) Statements + Guide Mode + PDF generation + Start a Circle + Membership Stages. (2) Course Formats, Certification + knowledge check, Flyers builder, Events, Tips.

**E. Get Started cluster.** Join a Circle, Find a Circle (Registry directory + form + moderation), Independent Providers, Volunteer, Independent.

**F. Migration and SEO.** Redirect map, 410 handling, all schema types, sitemap, robots, `next/og` images, metadata sweep, Search Console setup notes, `seo-technical` + `seo-audit` pass with fixes applied.

**G. Motion asset.** `remotion-motion-graphics` MagicHand explainer rendered to MP4 with captions; wire it into the homepage and note the YouTube upload in `docs/POST-LAUNCH.md`.

**H. Hardening.** `accessibility-audit` every route and fix. `security-review` and fix. `simplify` and refactor. Performance tuning to the §18 budgets. Cross-browser and 375px sweeps. `code-review` on the whole diff, act on findings.

**I. Handover.** `docs/CONTENT-EDITING.md`, `docs/DEPLOY.md` (Cloudflare bindings, secrets, DNS cutover, email routing), `docs/POST-LAUNCH.md`, the Board deck via `slides`, and a prioritized phase-2 backlog via `roadmap-planning`.

**J. Final verification.** `verification-before-completion` against §19. If anything fails, fix it and re-run. Do not report completion until it passes clean.

---

## 15. ASSUMPTIONS REGISTER — pre-answered, do not ask

Log each of these in `docs/ASSUMPTIONS.md` and proceed.

1. **Compromise containment** — assume the client is handling it per the runbook. Build for `dranne.org` regardless; the code is host-agnostic and the DNS cutover is documented.
2. **Domain** — `dranne.org`. Canonicals, sitemap and redirects all target it.
3. **DNS / hosting / Search Console ownership** — assume the client holds them; `docs/DEPLOY.md` lists exactly what you need from them and in what order.
4. **Course price** — $199 / $172 per §13-1.
5. **Book covers, video master, flyer sources, vector logo** — assume unavailable; §6.3 placeholders apply.
6. **Independent provider contact details** — assume unavailable; route through `vip@` (§13-18).
7. **Registry moderation** — assume human moderation with no SLA. Listings go to a `pending` queue and do not auto-publish. Ship the moderation UI at `/for-guides/admin/registry`, protected by Cloudflare Access (config in `docs/DEPLOY.md`, disabled by default in dev).
8. **CMS** — none. Git-based typed content files, structured so a headless CMS can be layered on later without touching components. Write `docs/CONTENT-EDITING.md` for a non-developer.
9. **EIN / Form 990** — omit until supplied (§13-21).
10. **Sponsor logos** — reproduce per §13-19.
11. **`/for-guides` gating** — **public**, not logged-in. It is high-value SEO content and volunteers need it fast. Only the admin moderation route is protected.
12. **Salad Spinner / Handy Chits app** — Spinner labelled in development and not purchasable; the app listed at $9 as "special order" per source.
13. **YouTube** — embed the Practice Circle video with a lite facade; note the caption gap in `docs/POST-LAUNCH.md`.
14. **Illustration budget** — none. The MagicHand and MagicSquare are original SVGs you build; commissioning is a phase-2 backlog item.
15. **Launch** — single launch of the complete site. No staged rollout.
16. **Locale** — `en-US`. Prices in USD. No i18n scaffolding in v1, but no hardcoded strings in components either: all copy lives in `content/`.
17. **Dark mode** — ship it; the tokens support it, the books and the red both need explicit dark treatments.
18. **Legal review** — assume the privacy and accessibility statements are drafts for client counsel; mark them as such in `docs/CLIENT-DECISIONS.md`.

---

## 16. SEO, SCHEMA AND MIGRATION

**Per page:** one `<h1>`; unique title (`Page Title | dr.Anne Association`, replacing the legacy `Page - Dr Anne` and `Page – The dr.Anne Network`); a hand-written 150–160 character meta description (**never** auto-generated from body text — that is how Lorem ipsum reached the Testimonials search snippet); canonical URL; OG and Twitter Card tags with a generated `next/og` image. Neither legacy site had any OG tags, so every volunteer-shared link currently previews as nothing.

**Structured data:** `NGO`/`Organization` (foundingDate `2025-02-18`, nonprofitStatus, logo, sameAs LinkedIn + YouTube) · `Book` ×3 with ISBN and offers · `FAQPage` · `Course` for the dAp Training Course · `Event` ×3 · `Recipe` ×4 · `BreadcrumbList` · `Person` for board members · `Organization`-style entries for Registry listings. Validate everything against the Rich Results Test.

**Redirects — implement exactly, as 301s in middleware or Worker routing:**

```
dranne.net/                                       → dranne.org/
dranne.net/start-point/                           → /
dranne.net/team-build/                            → /for-guides/
dranne.net/team-build-formats/                    → /for-guides/course-formats/
dranne.net/team-build-events/                     → /for-guides/events/
dranne.net/team-build-here/                       → /faq/
dranne.net/practice-circles/                      → /for-guides/start-a-circle/
dranne.net/practice-circles-open-and-close/       → /for-guides/open-and-close/
dranne.net/practice-circles-open-close-statements/→ /for-guides/open-and-close/statements/
dranne.net/practice-circles-the-registry/         → /get-started/find-a-circle/
dranne.net/open-sesame/                           → /books-and-materials/
dranne.net/open-sesame-independent/               → /get-started/independent-providers/
dranne.net/about-us/                              → /about/our-story/
dranne.net/about-us-practice-circles/             → /about/gallery/
dranne.net/about-us-samples/                      → /for-guides/flyers-and-templates/
dranne.net/about-us-food-plates/                  → /the-plan/food-plates/
dranne.net/about-us-recipes/                      → /the-plan/recipes/
dranne.net/about-us-our-scrapbook/                → /about/press/
dranne.net/donate/                                → /donate/
dranne.net/learn-more-volunteer/                  → /get-started/volunteer/
dranne.net/learn-more-independent/                → /get-started/independent/
dranne.net/learn-more-partner/                    → /partner/
dranne.org/materials/                             → /books-and-materials/
dranne.org/practice-circles/                      → /get-started/
dranne.org/testimonials-donate/                   → /testimonials/
dranne.org/partner/                               → /partner/
ALL dranne.org spam post URLs                     → 410 Gone (NOT 301)
```

Write a Playwright test asserting every row returns the expected status and `Location`. A silently broken redirect map is how a migration loses its traffic. Ship one `sitemap.xml`, a `robots.txt` pointing to it, and retire the tampered WordPress sitemaps.

---

## 17. ACCESSIBILITY — WCAG 2.2 AA IS A BUILD GATE

The legacy sites fail comprehensively: zero `<h1>`s, empty `alt` on every image, an image-only Scrapbook, emoji-image bullets, a nav duplicated in the DOM, no skip link, headings chosen for size rather than structure, plain-text emails, uncaptioned video, and near-invisible white-on-white buttons.

- Meaningful alt text on every image (or `alt=""` + `aria-hidden` for genuinely decorative, justified in a comment).
- Real `<ul>`/`<li>` everywhere. No emoji-image bullets.
- Correct heading hierarchy, one `<h1>`, no skipped levels.
- Skip-to-content link. Nav rendered **once**.
- Visible focus rings on everything focusable, ≥3:1 against the adjacent surface.
- Every email a `mailto:` link.
- Video: captions, transcript, no autoplay, poster image (the legacy home page shows an empty spinner on first paint).
- Contrast: 4.5:1 body, 3:1 large text and UI. Verify the brand red before using it for links.
- Forms: labels, `aria-describedby` errors, never color-only signalling.
- Full keyboard operability for every §11 interaction — hand, wheel, counter, hotspots, teleprompter.
- `axe-core` clean on every route in CI; manual screen-reader pass (VoiceOver + NVDA) on Home, Statements, Registry and Donate.
- Test at 375px, 320px and 200% browser zoom.

---

## 18. PERFORMANCE BUDGETS

Enforced in Lighthouse CI; a failing budget fails the PR.

```
LCP        ≤ 2.0s (p75 mobile)      CLS ≤ 0.05     INP ≤ 200ms
JS         ≤ 120KB gzipped initial route
Fonts      2 families, variable, self-hosted, subset, preloaded
Images     AVIF/WebP, responsive srcset, explicit dimensions, lazy below fold
Video      poster + preload="none" + facade for YouTube
Lighthouse ≥ 95 Performance / 100 Accessibility / 100 Best Practices / 100 SEO
```

Server-render everything that can be; `"use client"` only for §11 interactions, pushed as far down the tree as possible. The legacy site served images at native upload size (`1024x790`, `768x1058`) — never do that.

---

## 19. DEFINITION OF DONE

Run `verification-before-completion`. Fix and re-run until every line is true in the actual repository.

- [ ] Every route in §9 exists, renders, and is linked from navigation
- [ ] `docs/SECURITY-RUNBOOK.md` written
- [ ] Zero Lorem ipsum anywhere in the codebase or content; test asserts it
- [ ] All ~60 audit §6 typos corrected; test asserts the known-bad strings are absent
- [ ] All 21 §13 conflicts resolved by rule, marked `provisional`, sourced, and listed in `docs/CLIENT-DECISIONS.md`
- [ ] `docs/ASSUMPTIONS.md` and `docs/ASSET-MANIFEST.md` complete
- [ ] Every page: one `<h1>`, unique title, hand-written meta description, OG image
- [ ] Every image has real alt text
- [ ] All ten §11 interactions built, keyboard-operable, reduced-motion complete
- [ ] `Book` shipped with all nine defects fixed; `ContainerScroll` with all ten
- [ ] `dicons` is not in `package.json`
- [ ] All eight forms live, validated, rate-limited, Turnstile-protected, routing to the right inbox
- [ ] Registry directory searchable, filterable, server-rendered, with moderation queue
- [ ] Open/Close Statements downloadable as a real PDF, plus Guide Mode
- [ ] Flyer builder produces a printable branded PDF
- [ ] MagicSquare wheel visible, explained, printable, downloadable
- [ ] Certification knowledge check built and working
- [ ] Chit counter functional, with no persistence of intake data
- [ ] PayPal `hosted_button_id` present on every donate path
- [ ] All external links https, deduplicated, one correct target per book
- [ ] Full redirect map implemented and covered by tests; spam URLs return 410
- [ ] Structured data validates in the Rich Results Test
- [ ] `axe-core` clean on all routes; manual screen-reader pass done
- [ ] Lighthouse budgets met on mobile
- [ ] `prefers-reduced-motion` verified site-wide
- [ ] 375px verified on every page; dark mode verified on every page
- [ ] `security-review`, `code-review` and `simplify` passes run and their findings applied
- [ ] MagicHand motion graphic rendered
- [ ] Handover docs written; Board deck delivered; phase-2 backlog written
- [ ] Nothing from the old WordPress database is present anywhere in the repository

---

## 20. TONE

Dr. Anne is an epidemiologist in her later career who has been teaching this for forty years. The program's own words are "healthy moderation": no restrictive dieting, no extreme fitness, no quick-fix weight loss, no app-driven nudging. The site sounds the same — warm, plain-spoken, credible, a little charming. The MagicHand is genuinely delightful; let it be delightful. But this is a health nonprofit serving older adults and volunteers, so:

- No dark patterns, no urgency timers, no fake scarcity, no before/after weight photos.
- No medical claims beyond what the source material states, and never a claim of clinical outcomes the Association cannot support.
- Big touch targets, generous type, high contrast. Assume a 70-year-old volunteer on an iPad in a clubhouse with weak wifi.
- The member layer is a working tool. Optimize it for someone opening it five minutes before a session starts.

---

## 21. START NOW

Read `dranne-audit.md` in full — all 1,512 lines, no skimming. Write `docs/PLAN.md`. Then build workstreams A through J in one continuous run, without asking a question, without requesting approval, and without stopping until §19 verifies clean.
