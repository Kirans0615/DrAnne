import { sourced } from "./types";

/**
 * Prose for /the-plan/how-it-works. No dedicated content file existed for
 * this page in the original audit pass — build prompt §10.5 quotes the
 * source language directly (dranne-audit.md §4.2, "Team Build" page), so it
 * is transcribed here verbatim (one misspelled word corrected to "embodying")
 * rather than hardcoded in the page component, consistent with this
 * codebase's content-layer convention.
 */

export const howItWorks = {
  tagline: sourced(
    "Structured. Standardized. Scalable.",
    ".net Team Build (audit §4.2)"
  ),

  frameworkParagraph: sourced(
    "We provide a structured, evidence-based behavioral health education program embodying three Keys to Good Health: sustainable weight management, enjoyable movement, and stress reduction.",
    ".net Team Build (audit §4.2, misspelled word corrected to \"embodying\")"
  ),

  modelParagraph: sourced(
    'Our model is "plug and play" and "one-and-done." Participants complete a defined Course covering nine Points and gain tools for lifelong health. After completion, we promote volunteer-led peer support groups to reinforce long-term adherence — without any ongoing subscription costs.',
    ".net Team Build (audit §4.2)"
  ),

  scaleParagraph: sourced(
    "For employers, clubs, and other organizations, we offer this health education program designed as a turnkey member benefit. The model is scalable, low-burden to implement, and aligned with public health principles of prevention and self-efficacy.",
    ".net Team Build (audit §4.2)"
  ),

  whereToBegin: [
    "Practice Circles led by Volunteers",
    "Practice Circles and Courses led by Independent contractors",
    "Practice Circles and Courses led and/or sponsored by Partners",
  ],
} as const;
