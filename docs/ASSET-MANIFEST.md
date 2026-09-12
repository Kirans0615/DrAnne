# Asset manifest

## Received (from github.com/Kirans0615/DrAnne, branch main) — stored in `/public/assets/source/`

| File | What it is | Where it's used |
|---|---|---|
| `Banner.jpg` | Red dr.Anne Association wordmark banner | Sampled for `--color-brand-red` (see `docs/BRAND.md`); re-cut as `logo.svg` trace |
| `About-1536x681.png` | Book-on-desk photograph | Home / About hero imagery |
| `Anne-240x300.png` | Anne Seifert portrait | Board grid, `content/board.ts` |
| `Lawrence-235x300.png` | Lawrence Wasserman portrait | Board grid |
| `Donna-224x300.png` | Donna Pare portrait | Board grid |
| `Robin-243x300.png` | Robin Hoik Phillips portrait | Board grid |
| `Fred-245x300.png` | Fred W. Hoyt portrait | Board grid |
| `image5.png` | **Identified**: a candid photo of a facilitator (in a red top matching the brand color) assisting a seated participant at a table, in front of a chalkboard reading "Welcome... magic...". Consistent with a Practice Circle or registration session. No caption, date, or location is attested anywhere in the source material for this specific image — it is not one of the four named Practice Circle photo locations in the audit. **Decision:** used as genuine documentary imagery (real photo, not a placeholder or stock image) on `/about/gallery`, with a neutral, accurate alt string that does not assert an unverified identity or location: *"A facilitator assisting a participant during a dr.Anne plan session."* Flagged in `docs/CLIENT-DECISIONS.md`-adjacent note for the client to supply the real caption if they want one. |

All portraits get `Name, role — headshot` alt text, never filenames. Pipeline: AVIF + WebP via `next/image`, blur placeholders generated at build time.

## Assets that do not exist yet — placeholder policy applied (build prompt §6.3)

| Missing asset | What was built instead | File / component | Client should supply |
|---|---|---|---|
| Vector logo | `logo.svg` traced from `Banner.jpg` in Lobster-matched lettering | `public/assets/logo.svg` | An official vector wordmark, when available — this trace is a placeholder, not final art |
| Book cover photography | Not a blocker — `Book` component renders full typographic 3D covers from title/color/trim (`content/books.ts`) | `components/ui/book.tsx` | Cover photography, optional (`coverImage?` prop is wired but unused) |
| Trailer video (`Good-Health-at-Hand-Video-Trailer_V1_FINAL_01-12-22-4.mp4`) | Section auto-omits (file absent); YouTube Practice Circle video (`GSn0eW50rrE`) used as primary video with a lite-embed facade | `content/media.ts` | The trailer file, with captions, if the client wants it restored |
| MagicHand illustration | Built as original SVG — core deliverable, not a placeholder | `components/dranne/magic-hand.tsx` | — |
| MagicSquare card artwork | Built as original SVG — core deliverable | `components/dranne/magic-square.tsx` | — |
| Scrapbook clippings ×4, flyers ×2, Practice Circle photos ×4, SAG Health Fair photo | Accessible empty states with known caption text as real content (locations/captions from audit where attested), plus an upload path via the media submission form | `/about/press`, `/about/gallery`, `content/media.ts` | The actual scanned/photographed files |
| Food plates ×5 photography | Hotspot-annotated placeholder plates with real captions/chit counts from the audit (5th plate's caption honestly omitted — source text was cut off) | `/the-plan/food-plates`, `content/foodplates.ts` | The five plate photographs |
| Product shots (Starter Kit, Handy Chits app, Salad Spinner) | Text-led catalogue entries, image slot wired but empty | `/books-and-materials/catalogue` | Product photography |
| 15 sponsor logos | Text-name grid with a per-logo image slot that fills automatically when the file lands in `/public/assets/sponsors/<logoFile>` | `content/sponsors.ts`, `/testimonials`, `/donate` | The 15 logo files, greyscale-ready |
| MagicHand explainer video (Remotion, 20–30s MP4) | Built in workstream G | `remotion/` | — |

Every placeholder above is wired so that dropping the real file into the path shown makes it appear automatically — no code changes required.
