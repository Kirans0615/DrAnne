import { sourced } from "./types";

export type KeyId = "apportion" | "move" | "silence";

export type Point = {
  id: number;
  key: KeyId;
  name: string;
};

/**
 * The three Keys appear on exactly one buried .net page today
 * (Learn More – Partner, audit §4.21) and are the strongest brand
 * vocabulary the organization owns. Promoted to the homepage per
 * build prompt §10.1.
 */
export const keys: Record<KeyId, { label: string; color: string; description: string }> = {
  apportion: {
    label: "Apportion",
    color: "var(--color-key-apportion)",
    description:
      "Portion control using the MagicHand — no calorie counting, no food scales.",
  },
  move: {
    label: "Move",
    color: "var(--color-key-move)",
    description: "Enjoyable movement, chosen freely, sustained for life.",
  },
  silence: {
    label: "Silence",
    color: "var(--color-key-silence)",
    description: "Quiet time and stress reduction as a daily health practice.",
  },
};

export const keysSource = sourced(
  "These are the three Keys: Apportion, Move and Silence. Each Key has three Points making a total of nine program Points to encourage good health practices.",
  ".net Learn More – Partner (audit §4.21)"
);

/**
 * Nine Points grouped under their three Keys. The audit does not name all
 * nine Points individually — only the Open/Close statements reference
 * "Point ___" by number. Point names beyond the MagicHand/food/movement/
 * silence framing are not attested in source material, so this array
 * intentionally holds only the structural grouping (3 Points per Key),
 * not invented Point titles.
 */
export const ninePointStructure: Array<{ key: KeyId; count: number }> = [
  { key: "apportion", count: 3 },
  { key: "move", count: 3 },
  { key: "silence", count: 3 },
];
