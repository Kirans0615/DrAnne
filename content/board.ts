import { sourced, type Sourced } from "./types";

export type BoardMember = {
  name: string;
  role: string;
  credentialLine?: Sourced<string>;
  term: string;
  photo: string;
  alt: string;
};

/**
 * Wording resolved to the .org version throughout (build prompt §13-13,
 * audit §5 "Board bios"): .net misspells the two university names and
 * drops Robin's business name. Fred's credential line is omitted entirely
 * per §13-12 — both source variants are garbled beyond safe reconstruction.
 */
export const board: BoardMember[] = [
  {
    name: "Anne Seifert, M.P.H., Ph.D.",
    role: "Chair / Founder",
    credentialLine: sourced(
      "Epidemiologist, Author; prior research UC Berkeley, Harvard, Columbia Universities",
      ".org home (audit §3.1)"
    ),
    term: "present–2026",
    photo: "/assets/source/Anne-240x300.png",
    alt: "Anne Seifert, Chair and Founder — headshot",
  },
  {
    name: "Lawrence Wasserman, Ph.D.",
    role: "Founding Director",
    credentialLine: sourced(
      "President, Fortech International Ltd.; management services and consulting",
      ".org home (audit §3.1)"
    ),
    term: "2026–2028",
    photo: "/assets/source/Lawrence-235x300.png",
    alt: "Lawrence Wasserman, Founding Director — headshot",
  },
  {
    name: "Donna Pare, M.S.",
    role: "Director",
    credentialLine: sourced(
      "Computer Science; entrepreneur, professional tutoring and investor",
      ".org home (audit §3.1)"
    ),
    term: "2025–2027",
    photo: "/assets/source/Donna-224x300.png",
    alt: "Donna Pare, Director — headshot",
  },
  {
    name: "Robin Hoik Phillips, I.H.P.",
    role: "Vice Chair / Founder",
    credentialLine: sourced(
      "Integrative Health Practitioner; Writer/Owner, Robinedits.com",
      ".org home (audit §3.1, §13-13)"
    ),
    term: "2025–2027",
    photo: "/assets/source/Robin-243x300.png",
    alt: "Robin Hoik Phillips, Vice Chair and Founder — headshot",
  },
  {
    name: "Fred W. Hoyt, M.B.A.",
    role: "Secretary / Treasurer",
    // Credential line intentionally omitted — both source variants are
    // garbled ("Prior President of August European Comptroller, General
    // Steamship Company" vs "AuguestEuropeanComptroller"). Build prompt §13-12.
    term: "present–2026",
    photo: "/assets/source/Fred-245x300.png",
    alt: "Fred W. Hoyt, Secretary and Treasurer — headshot",
  },
];

export const boardFootnote = sourced(
  "Elected for three year staggered terms.",
  ".org home (audit §3.1)"
);
