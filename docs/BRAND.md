# Brand system

## The problem being resolved

The two legacy sites share no type system. `.org`: Lobster 60px display, Roboto 24/20px support, white on red. `.net`: Roboto 32px H2 in `#F00606`/`#FA0003` plus grey `#7A7A7A`, Arial 28px H3 in black, and `.elementor-button` at Roboto 15px black-on-white (near-invisible). Both: 16px system stack, `#333333` on `#FFFFFF`, zero `<h1>` elements.

## Resolution

- **Display: Lobster** — kept, disciplined. Hero and section openers only, never below ~32px, never for UI or body text. The one piece of existing personality worth keeping.
- **Text: Roboto Flex** via `next/font`, variable, self-hosted, subset, `display: swap`. Arial and the system stack retired entirely.
- **Long-form: Source Serif 4** for the Open/Close Statements and Background History — content meant to be read aloud or read slowly.

## The red

Sampled directly from `Banner.jpg` (the authoritative wordmark banner): three sample points averaged to **`#B41900`**.

Measured contrast on white (WCAG relative luminance formula): **6.82:1** — passes AA for both small and large text (4.5:1 / 3:1 thresholds) with real margin, and comes close to AAA (7:1).

Because the sampled banner red already clears AA for small text, `--brand-red` and `--brand-red-ink` are the **same value** — no separate darkened "ink" variant was needed. (The build prompt's own example starting point, `#C20017`, measures 6.35:1; our sampled color measures better and is the one actually drawn from the client's asset, so it wins.)

- `--color-brand-red: #B41900` — used for both display/banner fills (≥24px, large text) and links/body text. Verified ≥4.5:1 on white.
- `--color-brand-red-quiet: #FAEFED` — a 7% tint of the brand red over white, for section washes.

For comparison, the `.net` H2 red `#F00606` measures **4.44:1** and fails AA for small text — this is why we did not simply average the two legacy reds.

## The three Keys — permanent color + icon signatures

- **Apportion** — `var(--color-brand-red)` (reuses the primary red; this is the plan's food/portion-control pillar)
- **Move** — `#B4690E` (warm amber)
- **Silence** — `#4C6B5A` (cool sage)

## Neutrals

Warm grey ramp, 50→950 (not pure `#333`). Body text targets ≥7:1 where achievable against the page background.

## Member-layer accent

`/for-guides` uses the same warm-amber "Move" hue as a light structural accent (borders, active nav state) so the member layer reads as a distinct, quieter mode without introducing a fourth brand color.

## Type scale

Fluid `clamp()`, ratio 1.2 (mobile) → 1.25 (desktop). Body copy capped at 68ch; the Open/Close Statements and Background History capped at 60ch. Heading *level* (semantic, for structure) and *visual size* (for design) are independent — the legacy sites used `<h2>` for both a 60px display line and a 32px section head. Every page in the rebuild has exactly one `<h1>`, and font-size classes are chosen for the reading, never inferred from heading level.

## Dark mode

Shipped. The red needs a distinct dark-mode treatment (a straight `#B41900` on a dark background loses the AA margin against typical dark surface tones), and the `Book` component's cover colors get explicit dark-mode variants rather than relying on `dark:` inversion of a light-mode fill.
