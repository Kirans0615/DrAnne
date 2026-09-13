# Asset manifest

## Received (from github.com/Kirans0615/DrAnne, branch main) — stored in `/public/assets/source/`

| File | What it is | Where it's used |
|---|---|---|
| `Banner.jpg` | Red dr.Anne Association wordmark banner | Sampled for `--color-brand-red` (see `docs/BRAND.md`). Also used directly (not traced/recreated) as the header logo — `components/dranne/logo.tsx` renders the raw JPEG in a small rounded badge, per direct client feedback preferring the real banner over a typographic recreation. |
| `About-1536x681.png` | Book-on-desk photograph | Home hero imagery, `components/dranne/hero-section.tsx` |
| `Anne-240x300.png` | Anne Seifert portrait | Board grid, `content/board.ts` |
| `Lawrence-235x300.png` | Lawrence Wasserman portrait | Board grid |
| `Donna-224x300.png` | Donna Pare portrait | Board grid |
| `Robin-243x300.png` | Robin Hoik Phillips portrait | Board grid |
| `Fred-245x300.png` | Fred W. Hoyt portrait | Board grid |
| `image5.png` | **Identified**: a candid photo of a facilitator (in a red top matching the brand color) assisting a seated participant at a table, in front of a chalkboard reading "Welcome... magic...". Consistent with a Practice Circle or registration session. No caption, date, or location is attested anywhere in the source material for this specific image — it is not one of the four named Practice Circle photo locations in the audit. **Decision:** used as genuine documentary imagery (real photo, not a placeholder or stock image) on the homepage's "See how it works" reveal (per direct client request), with a neutral, accurate alt string that does not assert an unverified identity or location: *"A facilitator assisting a participant during a dr.Anne plan session."* |

All portraits get `Name, role — headshot` alt text, never filenames. Pipeline: AVIF + WebP via `next/image`, blur placeholders generated at build time.

## Trailer video — supplied directly, stored in `/public/assets/video/`

| File | What it is | Where it's used |
|---|---|---|
| `dranne-trailer.mp4` (source: `Good-Health-at-Hand-Video-Trailer_V1_FINAL_01-12-22-4.mp4`) | The client's own Good Health at Hand promotional trailer (1920x1080, h264/aac, ~78s, 31MB) | Silent, looping, autoplaying background behind the homepage's "See how it works" reveal (`components/dranne/video-background.tsx`). Never plays audio — `muted` is required for autoplay to be permitted at all. Under `prefers-reduced-motion`, the video is skipped entirely in favor of a static poster frame. |
| `dranne-trailer-poster.jpg` | A frame extracted from the trailer at 00:00:60 — the same book-on-shelf shot as `About-1536x681.png`, with no people in frame | `<video poster>` attribute and the reduced-motion fallback image. Chosen deliberately over earlier frames in the trailer that show a shirtless figure (build prompt §20 explicitly prohibits before/after-style weight imagery) or mid-sentence on-screen text that reads oddly frozen as a static image. |

Also added to `github.com/Kirans0615/DrAnne` (the same source asset repo) at the client's request, alongside the other raw assets.

## Assets that do not exist yet — placeholder policy applied (build prompt §6.3)

| Missing asset | What was built instead | File / component | Client should supply |
|---|---|---|---|
| Vector logo | `logo.svg` traced from `Banner.jpg` in Lobster-matched lettering | `public/assets/logo.svg` | An official vector wordmark, when available — this trace is a placeholder, not final art |
| Book cover photography | Not a blocker — `Book` component renders full typographic 3D covers from title/color/trim (`content/books.ts`) | `components/ui/book.tsx` | Cover photography, optional (`coverImage?` prop is wired but unused) |
| MagicHand illustration | Built as original SVG — core deliverable, not a placeholder | `components/dranne/magic-hand.tsx` | — |
| MagicSquare card artwork | Built as original SVG — core deliverable | `components/dranne/magic-square.tsx` | — |
| Scrapbook clippings ×4, flyers ×2, Practice Circle photos ×4, SAG Health Fair photo | Accessible empty states with known caption text as real content (locations/captions from audit where attested), plus an upload path via the media submission form | `/about/press`, `/about/gallery`, `content/media.ts` | The actual scanned/photographed files |
| Food plates ×5 photography | Hotspot-annotated placeholder plates with real captions/chit counts from the audit (5th plate's caption honestly omitted — source text was cut off) | `/the-plan/food-plates`, `content/foodplates.ts` | The five plate photographs |
| Product shots (Starter Kit, Handy Chits app, Salad Spinner) | Text-led catalogue entries, image slot wired but empty | `/books-and-materials/catalogue` | Product photography |
| 15 sponsor logos | Text-name grid with a per-logo image slot that fills automatically when the file lands in `/public/assets/sponsors/<logoFile>` | `content/sponsors.ts`, `/testimonials`, `/donate` | The 15 logo files, greyscale-ready |
| MagicHand explainer video (Remotion, 20–30s MP4) | Built in workstream G | `remotion/` | — |

Every placeholder above is wired so that dropping the real file into the path shown makes it appear automatically — no code changes required.
