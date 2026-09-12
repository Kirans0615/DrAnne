"use client";

import { motion, useReducedMotion } from "motion/react";
import { HAND_LAYOUT, HAND_DRAW_ORDER, THUMB_KNUCKLE_LINE_PROPS } from "@/components/dranne/hand-illustration";

/**
 * A purely decorative, animated rendering of the MagicHand illustration for
 * the homepage hero — the single load-in moment for the page (build prompt
 * §11's "one signature moment per page, not five"). Deliberately has no
 * per-finger interactivity or info panel: that's the full `MagicHand`
 * explainer's job on its own page (/the-plan/magichand). Stuffing that full
 * experience in here was tried once already for the ContainerScroll reveal
 * and reliably produced a worse result (see git history) — this stays a
 * hint, not a rebuild.
 */
export function HeroHandMark({ className }: { className?: string }) {
  const shouldReduceMotion = useReducedMotion();
  const pieces = HAND_DRAW_ORDER.map((code, index) => ({ code, index, ...HAND_LAYOUT[code] }));

  return (
    <div className={className} aria-hidden="true">
      <div className="relative mx-auto aspect-[17/23] w-full max-w-md">
        {pieces.map(({ code, index, left, top, width, height, rotate, viewBox, path }) => (
          <motion.div
            key={code}
            className="absolute"
            style={{
              left,
              top,
              width,
              height,
              transform: rotate ? `rotate(${rotate}deg)` : undefined,
              transformOrigin: "bottom center",
            }}
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.6, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: shouldReduceMotion ? 0 : 0.15 + index * 0.09,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <svg viewBox={viewBox} className="h-full w-full" preserveAspectRatio="none">
              <path d={path} fill="white" fillOpacity={code === "V" ? 0.16 : 0.94} stroke="white" strokeOpacity={0.35} strokeWidth="2" />
              {code === "O" && (
                <line
                  x1={THUMB_KNUCKLE_LINE_PROPS.x1}
                  y1={THUMB_KNUCKLE_LINE_PROPS.y1}
                  x2={THUMB_KNUCKLE_LINE_PROPS.x2}
                  y2={THUMB_KNUCKLE_LINE_PROPS.y2}
                  stroke="var(--color-brand-red)"
                  strokeWidth="3"
                  strokeDasharray={THUMB_KNUCKLE_LINE_PROPS.strokeDasharray}
                  opacity={0.5}
                />
              )}
            </svg>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
