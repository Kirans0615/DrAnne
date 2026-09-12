import { sourced, type Sourced } from "./types";

/**
 * Binding resolution for the $199 vs $99 course-fee conflict (audit §5,
 * build prompt §13-1). The $199 figure is the public 501(c)(3) statement
 * and appears on three source pages against two for $99; every dollar
 * figure on the site derives from these three constants.
 */
export const COURSE_FEE = 199;
export const COURSE_FEE_WITH_MATERIALS = 172;
export const MATERIALS_COMPONENT = 27;

export const partnerSplitRemainder = COURSE_FEE - MATERIALS_COMPONENT; // 172
export const partnerSplitEach = partnerSplitRemainder / 2; // 86

export const pointSessionFee = sourced(18, "dranne.org/practice-circles (audit §3.4)");

export const enrollmentTiers: Sourced<string> = sourced(
  "10–49 participants, 50–249, and 250+, scaling seamlessly to a maximum of 1000; interactive volunteer-led Practice Circles are recommended capped at 30",
  "dranne.org/partner (audit §3.3)"
);

export const bookPrices = {
  manualAndPractice: sourced(27, ".net Open Sesame catalogue (audit §4.10)"),
  expandedEdition: sourced(27, ".net Open Sesame catalogue (audit §4.10)"),
  quickStart: sourced(18, ".net Open Sesame catalogue (audit §4.10)"),
  digital: sourced(18, ".net Open Sesame catalogue (audit §4.10)"),
  handyChitsApp: sourced(9, ".net Open Sesame catalogue (audit §4.10)"),
} as const;
