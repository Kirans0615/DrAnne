import { sourced } from "./types";

export type FingerCode = "M" | "F" | "C" | "P" | "O" | "V";

export type Finger = {
  code: FingerCode;
  finger: string;
  group: string;
  answer: string;
  portion: string;
};

/**
 * MFCPOV — verbatim call-and-response from the Open Statement
 * (audit §4.8). Order given is pinky to index per "Starting with the pinky".
 */
export const fingers: Finger[] = [
  { code: "M", finger: "pinky", group: "Milk and Dairy", answer: "Milk and Dairy", portion: "1 palm portion" },
  { code: "F", finger: "ring", group: "Fruit", answer: "Fruit", portion: "1 palm portion" },
  { code: "C", finger: "middle", group: "Carbohydrate", answer: "Carbohydrate", portion: "1 palm portion" },
  { code: "P", finger: "index", group: "Protein", answer: "Protein", portion: "1 palm portion" },
  { code: "O", finger: "thumb", group: "Oils and Fats", answer: "Oils and Fats", portion: "1 thumb portion, to the first knuckle joint" },
  { code: "V", finger: "palm (open)", group: "Vegetables", answer: "unlimited", portion: "unlimited" },
];

export const mnemonic = sourced(
  "My Fingers Count Portions Offering Variety.",
  "audit §4.8 (Open Statement)"
);

export const chitRules = {
  palmPortions: 12,
  thumbPortions: 3,
  totalChits: 15,
  vegetables: "unlimited",
  water: "plenty, unlimited",
  noCarryOver: sourced(
    "Unused chits do not carry over. Every day is a new day.",
    "audit §4.8 (Open Statement)"
  ),
  noCompensating: sourced(
    "If you exceed the allotted amount, do not cut back the next day.",
    "audit §4.8 (Open Statement)"
  ),
};

export const originStory = sourced(
  'While speaking on using the palm of the hand as a measurer for portion control, Dr. Anne was asked by a member of the audience where to press on the hand to lose weight. She replied that there was no magic spot. The audience seemed disappointed. Hence the word "Magic" was added. After all, isn\'t magic the mastery of hand-eye techniques to produce results? The MagicHand is used for gauging portion size. It is a "hand-trick" for allocation of food that results in making pounds disappear. Call it slim of hand!',
  ".net Team Build – HERE (audit §4.5)"
);
