"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { chitRules, fingers, mnemonic, originStory, type FingerCode } from "@/content/magichand";
import { openStatement } from "@/content/statements";
import { HAND_LAYOUT, HAND_DRAW_ORDER, THUMB_KNUCKLE_LINE_PROPS, type HandLayout } from "@/components/dranne/hand-illustration";
import { cn } from "cn";

/**
 * The MagicHand explainer (build prompt §11.3) — the most important
 * interaction on the site.
 *
 * The hand is an original SVG, hand-authored from six separately positioned
 * pieces (four fingers, a thumb, a palm), each drawn as a single closed
 * bezier-curve <path> rather than a geometric/icon-font glyph. Each piece is
 * a real <button> (not a <div onClick>) so the whole explainer is keyboard-
 * operable and works with a screen reader; a "Next"/"Previous" stepper gives
 * a fully accessible way to move through M-F-C-P-O-V in order without
 * depending on pointer hover or a fragile scroll-linked animation.
 *
 * A complete text alternative (a real <table>) is always rendered below the
 * hand — never hidden behind JS or a toggle — so the food-group/portion
 * information is available with JS disabled or to a screen reader that
 * skips the SVG entirely.
 */

const THUMB_KNUCKLE_LINE = (
  <line
    x1={THUMB_KNUCKLE_LINE_PROPS.x1}
    y1={THUMB_KNUCKLE_LINE_PROPS.y1}
    x2={THUMB_KNUCKLE_LINE_PROPS.x2}
    y2={THUMB_KNUCKLE_LINE_PROPS.y2}
    stroke="currentColor"
    strokeWidth="3"
    strokeDasharray={THUMB_KNUCKLE_LINE_PROPS.strokeDasharray}
    opacity={THUMB_KNUCKLE_LINE_PROPS.opacity}
  />
);

const LAYOUT: Record<FingerCode, HandLayout> = {
  ...HAND_LAYOUT,
  O: { ...HAND_LAYOUT.O, extra: THUMB_KNUCKLE_LINE },
};

const DRAW_ORDER = HAND_DRAW_ORDER;

export function MagicHand() {
  const shouldReduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const active = fingers[activeIndex];
  const tableCaptionId = useId();

  function goTo(code: FingerCode) {
    const index = fingers.findIndex((finger) => finger.code === code);
    if (index !== -1) setActiveIndex(index);
  }

  function step(delta: 1 | -1) {
    setActiveIndex((current) => (current + delta + fingers.length) % fingers.length);
  }

  return (
    <section aria-labelledby="magic-hand-heading" className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 id="magic-hand-heading" className="font-display text-3xl text-brand-red sm:text-4xl">
          The MagicHand
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-lg text-muted-foreground">{mnemonic.value}</p>
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center">
        {/* The hand itself: six buttons composing one organic left-hand
            illustration. Decorative only — every fact it conveys is also in
            the always-visible table further down the page. */}
        <div className="relative mx-auto aspect-[17/23] w-full max-w-xs sm:max-w-sm">
          {DRAW_ORDER.map((code) => {
            const finger = fingers.find((entry) => entry.code === code)!;
            const layout = LAYOUT[code];
            const isActive = active.code === code;
            return (
              <button
                key={code}
                type="button"
                aria-pressed={isActive}
                aria-label={`${finger.finger}: ${finger.group}, ${finger.portion}`}
                onClick={() => goTo(code)}
                onFocus={() => goTo(code)}
                onMouseEnter={() => goTo(code)}
                className="absolute rounded-full text-muted-foreground/70 outline-offset-4 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-red motion-reduce:transition-none"
                style={{
                  left: layout.left,
                  top: layout.top,
                  width: layout.width,
                  height: layout.height,
                  transform: layout.rotate ? `rotate(${layout.rotate}deg)` : undefined,
                  transformOrigin: "bottom center",
                  color: isActive ? "var(--color-brand-red)" : undefined,
                }}
              >
                <svg viewBox={layout.viewBox} className="h-full w-full" aria-hidden="true" preserveAspectRatio="none">
                  <path
                    d={layout.path}
                    fill={isActive ? "var(--color-brand-red)" : "var(--muted)"}
                    stroke="var(--border)"
                    strokeWidth="2"
                    className="transition-colors motion-reduce:transition-none"
                  />
                  {layout.extra}
                </svg>
              </button>
            );
          })}
        </div>

        {/* Live info panel + stepper. Fully keyboard operable and does not
            depend on the SVG above: every value it shows also lives in the
            static table below. */}
        <div>
          <div
            aria-live="polite"
            className="rounded-2xl border-2 p-6"
            style={{ borderColor: "var(--color-key-apportion)" }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active.code}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  {active.finger}
                </p>
                <p className="mt-1 font-display text-5xl text-key-apportion">{active.code}</p>
                <p className="mt-2 text-xl font-medium text-foreground">{active.group}</p>
                <p className="mt-1 text-muted-foreground">{active.portion}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-4 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => step(-1)}
              className="rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-red"
            >
              ← Previous
            </button>
            <span className="text-sm text-muted-foreground">
              {activeIndex + 1} of {fingers.length}
            </span>
            <button
              type="button"
              onClick={() => step(1)}
              className="rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-red"
            >
              Next →
            </button>
          </div>

          <dl className="mt-6 space-y-3 text-sm text-muted-foreground">
            <div>
              <dt className="font-semibold text-foreground">What is a palm portion?</dt>
              <dd>{openStatement.palmRule}</dd>
            </div>
            <div>
              <dt className="font-semibold text-foreground">The daily chit budget</dt>
              <dd>
                {chitRules.palmPortions} palm portions + {chitRules.thumbPortions} thumb portions ={" "}
                {chitRules.totalChits} chits a day, plus {chitRules.vegetables} vegetables and{" "}
                {chitRules.water} water.
              </dd>
            </div>
          </dl>

          <details className="mt-6 rounded-lg border border-border p-4">
            <summary className="cursor-pointer font-semibold text-brand-red">
              Why is it called &ldquo;Magic&rdquo;?
            </summary>
            <p className="mt-3 max-w-prose text-sm leading-relaxed text-foreground">{originStory.value}</p>
          </details>
        </div>
      </div>

      {/* Full text alternative — always rendered, never hidden behind a
          toggle, so this works with JS disabled and for screen readers that
          do not interact with the SVG above. */}
      <div className="mt-14 border-t border-border pt-8">
        <h3 id={tableCaptionId} className="text-lg font-semibold text-foreground">
          MFCPOV reference table
        </h3>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[36rem] border-collapse text-sm">
            <caption className="sr-only">
              The MagicHand food groups, one per finger, with their example portion
            </caption>
            <thead>
              <tr className="border-b border-border text-left">
                <th scope="col" className="py-2 pr-4 font-semibold text-muted-foreground">
                  Finger
                </th>
                <th scope="col" className="py-2 pr-4 font-semibold text-muted-foreground">
                  Letter
                </th>
                <th scope="col" className="py-2 pr-4 font-semibold text-muted-foreground">
                  Food group
                </th>
                <th scope="col" className="py-2 font-semibold text-muted-foreground">
                  Example portion
                </th>
              </tr>
            </thead>
            <tbody>
              {fingers.map((finger) => (
                <tr key={finger.code} className={cn("border-b border-border/60", finger.code === active.code && "bg-brand-red-quiet")}>
                  <th scope="row" className="py-2 pr-4 font-medium text-foreground">
                    {finger.finger}
                  </th>
                  <td className="py-2 pr-4">{finger.code}</td>
                  <td className="py-2 pr-4">{finger.group}</td>
                  <td className="py-2">{finger.portion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ul className="mt-4 space-y-1 text-sm text-muted-foreground">
          <li>{chitRules.noCarryOver.value}</li>
          <li>{chitRules.noCompensating.value}</li>
        </ul>
      </div>
    </section>
  );
}
