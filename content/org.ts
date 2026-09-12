import { sourced } from "./types";

export const org = {
  legalName: "The dr.Anne Association",
  foundingDate: "2025-02-18",
  foundingDateDisplay: "February 18, 2025",
  founder: "Dr. Anne Seifert, M.P.H., Ph.D.",
  taxStatus: "501(c)(3)",
  domain: "dranne.org",
  linkedIn: "https://www.linkedin.com/company/dranne-association",
  youTube: "https://www.youtube.com/@drAnne9",
  practiceCircleVideo: "https://youtu.be/GSn0eW50rrE",
  paypalDonateUrl: "https://www.paypal.com/donate/?hosted_button_id=5332D74NS3YQU",

  mission: sourced(
    "To promote a healthy lifestyle including well-balanced eating for weight control, and exercise for physical strength and meditation for stress reduction. And to provide Practice Circles for support. To offer a flexible and practical program for lifetime.",
    ".net home (audit §4.1)"
  ),

  aboutParagraph: sourced(
    "The dr.Anne Association is a nonprofit educational 501(c)(3) organization founded by Dr. Anne Seifert, an epidemiologist with decades of experience in nutrition and public health research. Based on her work at UC Berkeley, Harvard, and with the National Institutes of Health, Dr. Anne developed a simple, flexible, and proven system for lifelong weight control, healthy eating, and mindful living. Her approach helps individuals restore their health using everyday tools, such as portion control, movement, and stress reduction. Join a growing community committed to sustainable wellness without unhealthy diets, deprivation, or gimmicks.",
    ".org home (audit §3.1)"
  ),

  closingLine: sourced(
    "The dr.Anne plan replaces confusion with confidence through simple, scientifically informed habits you can enjoy for life.",
    ".org home (audit §3.1)"
  ),

  invitationHeading: sourced("You're Invited!", ".org home (audit §3.1); trailing space before ! removed"),

  subheadings: {
    curious: sourced(
      "Interested in joining a Practice Circle or learning more?",
      ".org home (audit §3.1)"
    ),
    journey: sourced(
      "Whether you're just curious or ready to begin, your journey to better health starts here.",
      ".org home (audit §3.1)"
    ),
  },

  /**
   * No EIN appears anywhere in the source material (build prompt §13-21 /
   * §15-9). Render the line in components ONLY when this is populated —
   * never invent a number.
   */
  ein: undefined as string | undefined,
} as const;

export const emailAddresses = {
  ask: "ask@dranne.org",
  team: "team@dranne.org",
  vip: "vip@dranne.org",
} as const;

export type EnquiryType = keyof typeof emailAddresses;
