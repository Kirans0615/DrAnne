export type OrgEvent = {
  slug: string;
  name: string;
  description: string;
  contact: "vip";
};

/** Verbatim from .net Team Build – Events (audit §4.4). Recurring/sample offerings, no fixed dates. */
export const events: OrgEvent[] = [
  {
    slug: "ahoy-dr-anne",
    name: "Ahoy dr.Anne!",
    description:
      "A one-week cruise along the California coast to experience the lifestyle and good health of the dr.Anne plan. Available once a year, with prior contract arrangements.",
    contact: "vip",
  },
  {
    slug: "dinner-with-donna",
    name: "Dinner with Donna",
    description:
      "Located in western Massachusetts. A dinner invitation for those currently in a Practice Circle who'd like an informal conversation with a Board member. Open to CircleGuides and their participants. Place, time and date to be decided.",
    contact: "vip",
  },
  {
    slug: "robins-retreat",
    name: "Robin's Retreat",
    description:
      "4 to 7 days in a natural setting along the California coast, learning the plan's principles with others. Good meals, regular exercise, hiking, and a change from routine.",
    contact: "vip",
  },
];

export const customEventsNote =
  "Arrange an event of your choice and one of our CircleGuides will integrate the training Course with your agenda — good for business conferences and spouse attendance.";
