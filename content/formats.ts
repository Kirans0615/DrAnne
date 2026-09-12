import { sourced } from "./types";

export type CourseFormat = {
  code: string;
  name: string;
  detail: string;
};

/**
 * All twelve codes in one table (build prompt §13-14 / §10.11): the
 * Formats page listed 9, The Registry listed 12 (adding 9M, 5M, 18W).
 * Longer schedules are supersets, not contradictions — publish all twelve.
 */
export const courseFormats: CourseFormat[] = [
  { code: "9M", name: "9-Month Win", detail: "1 Point session a month, 45 min each" },
  { code: "5M", name: "5-Month Shapeup", detail: "1 Point session twice a month" },
  { code: "18W", name: "18-Week Harmony", detail: "1 Point session every other week" },
  { code: "9W", name: "9-Week Course", detail: "1 Point session a week, 45 min each" },
  { code: "5W", name: "5-Week Wonder", detail: "2 Point sessions a week, contiguous or separate" },
  { code: "3W", name: "3-Week Turnaround", detail: "3 Point sessions a week, contiguous or separate" },
  { code: "2W", name: "2-Week Insight", detail: "Starts and ends within a two-week period" },
  { code: "1W", name: "1-Week Celebration", detail: "Starts and ends within a one-week period" },
  { code: "3D", name: "3-Day Package", detail: "Any 3 days, generally Friday evening, Saturday and Sunday" },
  { code: "2D", name: "2-Day Event", detail: "Any 2 days: 5 & 4 Point split" },
  { code: "1+", name: "1+Day Followup", detail: "A full day plus a follow-up meeting by appointment" },
  { code: "1D", name: "1-Day Miracle", detail: "A full day, generally 9am to 8pm, with meals" },
];

/** Default/canonical format per build prompt §13-3. */
export const defaultFormatCode = "3W";

export const registrationSequence = sourced(
  "An introductory Registration Session can be offered for approximately half an hour: a 15-minute talk describing the program, plus open time for questions and answers. Materials may be distributed at the first Course session or by arrangement with the organization. The first Practice Circle meets the following week to cover Point 1 of 9.",
  ".org Partner + .net Formats (audit §3.3, §4.3)"
);
