import { sourced } from "./types";

/**
 * Prose for the /books-and-materials overview page. Build prompt §10.8
 * gives the verbatim intro quote; the rest of this file carries the
 * surrounding copy from the .net Open Sesame page (audit §4.10) so the
 * overview page isn't hardcoded JSX literals.
 */

export const booksAndMaterialsIntro = sourced(
  `Here is your "treasure trove" of basic materials to support our dAp Course. Plus other products that may be of interest.`,
  ".net Open Sesame (audit §4.10)"
);

export const basicSection = sourced(
  "To start the program in a Training Course or by attending Practice Circles you will need to have the dr.Anne Manual & Practice book. Earlier books may be used as well. Proceeds from the sales of these materials are used to support volunteer activities and provide on-going Practice Circles.",
  ".net Open Sesame (audit §4.10)"
);

export const whereToGetHeading = "WHERE TO GET THE dr. Anne plan books";

export const catalogueProceedsNote = sourced(
  "Proceeds from the sale of these materials support volunteer activities and ongoing Practice Circles.",
  ".net Open Sesame (audit §4.10)"
);
