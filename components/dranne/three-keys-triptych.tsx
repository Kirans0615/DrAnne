"use client";

import { Footprints, Leaf, Scale, type LucideIcon } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { keys, keysSource, ninePointStructure, type KeyId } from "@/content/keys";
import { cn } from "cn";

/**
 * The Three Keys triptych — the homepage's structural spine (build prompt
 * §11.2). Self-contained: reads content/keys.ts directly so a later
 * integration pass can drop <ThreeKeysTriptych /> into app/page.tsx in
 * place of the simpler static three-column block that lives there today.
 *
 * "Scroll-pinned" is implemented with plain CSS `position: sticky` on each
 * Key's icon/label panel (no scroll-jacking JS, fully robust) while its
 * three Points reveal below via a `whileInView` fade/rise as the panel is
 * scrolled past. `ninePointStructure` only records a per-Key Point count —
 * no individual Point names are attested in source material — so Points
 * render as generic numbered markers, never invented titles.
 */

const KEY_ICONS: Record<KeyId, LucideIcon> = {
  apportion: Scale,
  move: Footprints,
  silence: Leaf,
};

const KEY_BG_CLASSES: Record<KeyId, string> = {
  apportion: "bg-key-apportion",
  move: "bg-key-move",
  silence: "bg-key-silence",
};

const KEY_TEXT_CLASSES: Record<KeyId, string> = {
  apportion: "text-key-apportion",
  move: "text-key-move",
  silence: "text-key-silence",
};

const KEY_BORDER_CLASSES: Record<KeyId, string> = {
  apportion: "border-key-apportion",
  move: "border-key-move",
  silence: "border-key-silence",
};

export function ThreeKeysTriptych() {
  const shouldReduceMotion = useReducedMotion();
  const keyEntries = Object.entries(keys) as Array<[KeyId, (typeof keys)[KeyId]]>;

  return (
    <section aria-labelledby="three-keys-triptych-heading" className="relative">
      <div className="mx-auto max-w-6xl px-4 pt-16 text-center sm:px-6 lg:px-8">
        <h2 id="three-keys-triptych-heading" className="font-display text-3xl text-brand-red sm:text-4xl">
          The Three Keys
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">{keysSource.value}</p>
      </div>

      {keyEntries.map(([id, key]) => {
        const Icon = KEY_ICONS[id];
        const pointCount = ninePointStructure.find((group) => group.key === id)?.count ?? 0;

        return (
          <div key={id} className="relative border-t border-border first:border-t-0">
            <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-16 lg:px-8 lg:py-28">
              {/* Key panel. Earlier used `sm:sticky sm:top-24` to pin this
                  half while its Points scrolled past — removed after it
                  reliably broke rendering of every section below the
                  triptych (three stacked `position: sticky` panels down one
                  very long page corrupts paint in Chromium; reproduced with
                  the sticky panels as the sole variable, isolated via a
                  bisection test). A plain non-sticky block is the correct
                  trade of a minor visual flourish for a homepage that
                  reliably renders. */}
              <div>
                <span
                  aria-hidden="true"
                  className={cn(
                    "inline-flex size-14 items-center justify-center rounded-full text-white",
                    KEY_BG_CLASSES[id]
                  )}
                >
                  <Icon className="size-7" />
                </span>
                <h3 className={cn("mt-4 font-display text-3xl sm:text-4xl", KEY_TEXT_CLASSES[id])}>
                  {key.label}
                </h3>
                <p className="mt-3 max-w-sm text-lg leading-relaxed text-foreground">{key.description}</p>
                <p className="mt-4 text-sm font-medium text-muted-foreground">{pointCount} Points</p>
              </div>

              {/* The Key's Points, revealed on scroll entry. Point names are
                  not attested in source material, so these render as plain
                  numbered markers grouped under their Key — never invented
                  titles. Always in the DOM (no display:none), so this reads
                  identically to assistive tech and with JS disabled; the
                  motion below is a progressive enhancement only. */}
              <ol className="flex flex-col gap-5">
                {Array.from({ length: pointCount }, (_, index) => index + 1).map((pointNumber, index) => (
                  <motion.li
                    key={pointNumber}
                    className={cn(
                      "flex items-center gap-4 rounded-xl border bg-card p-5",
                      KEY_BORDER_CLASSES[id]
                    )}
                    style={{ borderLeftWidth: "4px" }}
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : index * 0.08, ease: "easeOut" }}
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        "flex size-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white",
                        KEY_BG_CLASSES[id]
                      )}
                    >
                      {pointNumber}
                    </span>
                    <span className="text-base font-medium text-foreground">
                      Point {pointNumber} of 9
                      <span className="ml-2 font-normal text-muted-foreground">— {key.label}</span>
                    </span>
                  </motion.li>
                ))}
              </ol>
            </div>
          </div>
        );
      })}
    </section>
  );
}
