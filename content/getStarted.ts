import { sourced } from "./types";

/**
 * Verbatim source copy for the Get Started sub-pages that don't have a
 * dedicated content module yet: the Independent Providers framing line,
 * the Volunteer explainer, and the "become an Independent provider"
 * explainer. Transcribed from dranne-audit.md, corrected only for the
 * typos the audit itself flags — never paraphrased.
 */

export const independentProvidersFraming = sourced(
  "These providers have been certified by the Association to deliver our Training Course in various formats, and to offer Practice Circles as well as one-on-one coaching or counseling.",
  ".net Open Sesame – Independent (audit §4.11)"
);

/** `/get-started/volunteer` — audit §4.19. */
export const volunteerPage = {
  intro: sourced(
    "The drAnne Association acts as a facilitator for starting Practice Circles. These Circles are offered in different formats and by instructors with varying backgrounds.",
    ".net Learn More – Volunteer (audit §4.19, missing \"as\" restored: \"acts as a facilitator\")"
  ),
  gettingStarted: sourced(
    "To start your own Practice Circle — to learn each step — go to Practice Circles on this website. You can become a CircleGuide. (We urge you not to attend any Practice Circle that is not registered with us since they may not have the proper guidelines or updated instructions.) As a new CircleGuide you can start without any experience just by following our guidelines. After you have led a complete series of 9 Point sessions you can become a Point Mentor and help others to lead their Circles.",
    ".net Learn More – Volunteer (audit §4.19)"
  ),
  joiningExisting: sourced(
    "In general, new participants may join a Practice Circle at any Point, are required to have the dr.Anne plan book at all meetings, and may use the home study model to complete reading and Practice questions. The Practice Circle provides support and camaraderie.",
    ".net Learn More – Volunteer (audit §4.19)"
  ),
  feedback: sourced(
    "We depend on the feedback of participants to evaluate the Practice Circle they attend. This is important to maintain a uniform standard of performance among Circles and it helps insure that the guidelines and instructions that we provide are being followed. The program is highly structured and all CircleGuides are required to read the standard Open and Close statement that we provide and to keep our policy of allocating 45-minutes for each Practice Point session.",
    '.net Learn More – Volunteer (audit §4.19, typo corrected: "Feedback" -> "feedback" — the audit notes it was capitalized as if a named form, which does not exist on this site)'
  ),
};

/** `/get-started/independent` — audit §4.20. */
export const independentBecomePage = {
  intro: sourced(
    "If you are a health professional and/or have become a Point Mentor you may qualify to offer our drAnne plan Course to your clients. In this way you add an additional service and create an avenue for those wishing one-to-one personal coaching.",
    ".net Learn More – Independent (audit §4.20)"
  ),
  certificationBenefit: sourced(
    "With your certification you, and/or your organization, will be placed for referral. All of our Independent Guides must agree to follow the program formula, adhere to good business practices, observe confidentiality, take full responsibility for the conduct of their Practice Circle, and maintain communication with the Association.",
    ".net Learn More – Independent (audit §4.20)"
  ),
  pricing: sourced(
    "Course pricing follows our Association rules, and we will enter into a contract. There are several options for how to present the Course and details can be found under the TEAM BUILD heading and Formats.",
    ".net Learn More – Independent (audit §4.20)"
  ),
  pathway: sourced(
    "We recommend that you become a Point Mentor first. You will become certified after passing a short tutorial, and then proceed with an interview with an Association Board member.",
    ".net Learn More – Independent (audit §4.20)"
  ),
};
