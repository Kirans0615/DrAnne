import { sourced, type Sourced } from "./types";

export type Testimonial = {
  quote: Sourced<string>;
  attribution: string;
};

/** The six short .org Testimonials-page quotes (audit §3.5). */
export const participantTestimonials: Testimonial[] = [
  {
    quote: sourced("Everybody I talked to just loved it. Thank you, thank you, thank you.", ".org Testimonials (audit §3.5)"),
    attribution: "M. S., Solana Beach, CA",
  },
  {
    quote: sourced("In two months I lost 15 pounds, and I could eat potatoes and ice cream.", ".org Testimonials (audit §3.5)"),
    attribution: "A.V. B., Tarpon Springs, FL",
  },
  {
    quote: sourced("It really made me conscious of how much I was eating and when.", ".org Testimonials (audit §3.5)"),
    attribution: "D.A. F., Beverly Hills, CA",
  },
  {
    quote: sourced("I felt like I was eating normally for the first time in my life.", ".org Testimonials (audit §3.5)"),
    attribution: "M. B., San Diego, CA",
  },
  {
    quote: sourced(
      "This is great. I do a lot of flying and now I know how I can eat airline and restaurant food without gaining weight.",
      ".org Testimonials (audit §3.5)"
    ),
    attribution: "J. M. K., Massapequa Park, NY",
  },
  {
    quote: sourced("I just started and it has already changed the way I eat in restaurants.", ".org Testimonials (audit §3.5)"),
    attribution: "E. L., Seal Beach, CA",
  },
];

/**
 * The two longer, dated quotes. Wording resolved to the .org version per
 * build prompt §13-10/11 — it carries initials and a date; deduplicated
 * against the shorter, undated .net Team Build versions of the same quotes.
 */
export const longFormTestimonials: Testimonial[] = [
  {
    quote: sourced(
      "Now for the results. My dress size dropped from a stuffed 16 to a 10. My weight dropped from 170 to 150 within the first month with no ill effects. My low blood sugar cleared up, my pains are gone, and you wouldn't believe my perky attitude.",
      ".org Materials (audit §3.2)",
      { provisional: true }
    ),
    attribution: "A.L., March 16, 1990, Englishtown, NJ",
  },
  {
    quote: sourced(
      "Great article on you and your book in the Sun today! I got it in January and have lost 10 pounds! I loaned it to two friends and am waiting to get it back to give to a third!",
      ".org Materials (audit §3.2)",
      { provisional: true }
    ),
    attribution: "A.W., May 26, 2022, Seal Beach, CA",
  },
];

export const sagHealthFairCaption = sourced(
  "With volunteers, actors Roberta Bassin and Nina Diamante at the Screen Actors Guild Health Fair 2011",
  ".org Testimonials (audit §3.5, typo corrected)"
);
