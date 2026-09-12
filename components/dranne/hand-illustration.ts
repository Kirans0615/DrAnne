import type { ReactNode } from "react";
import type { FingerCode } from "@/content/magichand";

/**
 * Shared path data for the original hand-authored MagicHand SVG — six
 * separately positioned pieces (four fingers, a thumb, a palm), each a
 * single closed bezier-curve <path>. Used by the full interactive
 * `MagicHand` explainer (components/dranne/magic-hand.tsx) and by the
 * decorative, non-interactive homepage hero mark
 * (components/dranne/hero-hand-mark.tsx) — extracted here so neither
 * has to duplicate the geometry.
 */

export type HandLayout = {
  left: string;
  top: string;
  width: string;
  height: string;
  rotate?: number;
  viewBox: string;
  path: string;
  extra?: ReactNode;
};

export const FINGER_PATH =
  "M30 6 C42 6 48 18 48 33 L48 168 C48 186 40 196 30 196 C20 196 12 186 12 168 L12 33 C12 18 18 6 30 6 Z";

export const THUMB_PATH =
  "M72 8 C92 8 102 24 100 44 C99 58 91 68 80 74 C95 81 106 98 106 119 L106 149 C106 172 87 191 60 191 C34 191 16 172 16 149 L16 66 C16 38 33 13 62 9 C65 8 69 8 72 8 Z";

export const PALM_PATH =
  "M60 30 C40 30 24 48 24 74 L24 172 C24 218 62 256 112 256 L188 256 C238 256 276 218 276 172 L276 92 C276 60 252 34 220 34 C204 34 192 44 186 58 C182 42 168 28 148 28 C130 28 116 40 110 56 C104 38 88 24 68 24 C64 24 62 27 60 30 Z";

export const THUMB_KNUCKLE_LINE_PROPS = {
  x1: "14",
  y1: "76",
  x2: "108",
  y2: "76",
  strokeDasharray: "6 5",
  opacity: 0.6,
} as const;

export const HAND_LAYOUT: Record<FingerCode, Omit<HandLayout, "extra">> = {
  O: { left: "-2%", top: "38%", width: "25%", height: "30%", rotate: -26, viewBox: "0 0 120 200", path: THUMB_PATH },
  P: { left: "21%", top: "4%", width: "16%", height: "40%", viewBox: "0 0 60 200", path: FINGER_PATH },
  C: { left: "39%", top: "-4%", width: "16%", height: "46%", viewBox: "0 0 60 200", path: FINGER_PATH },
  F: { left: "57%", top: "2%", width: "16%", height: "42%", viewBox: "0 0 60 200", path: FINGER_PATH },
  M: { left: "75%", top: "13%", width: "15%", height: "32%", viewBox: "0 0 60 200", path: FINGER_PATH },
  V: { left: "4%", top: "36%", width: "92%", height: "62%", viewBox: "0 0 300 280", path: PALM_PATH },
};

/** Draw order: palm first so the fingers/thumb layer on top at the connecting edge. */
export const HAND_DRAW_ORDER: FingerCode[] = ["V", "O", "P", "C", "F", "M"];
