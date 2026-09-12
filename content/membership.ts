export type MembershipStage = {
  id: "apprentice" | "circleguide" | "point-mentor";
  order: number;
  name: string;
  description: string;
};

/** Verbatim from audit §4.6, typos corrected ("Practice", "successfully", "counseling"). */
export const membershipStages: MembershipStage[] = [
  {
    id: "apprentice",
    order: 1,
    name: "Apprentice",
    description:
      "Going through the Point Practice sessions for the first time; learning the program, not yet a Member. Volunteer circles with little or no experience are fine — all are Apprentices.",
  },
  {
    id: "circleguide",
    order: 2,
    name: "CircleGuide",
    description:
      "After completing the nine Points, through home study or in Practice Circles, the Apprentice becomes a Member and is eligible to lead and direct their own Circle Group.",
  },
  {
    id: "point-mentor",
    order: 3,
    name: "Point Mentor",
    description:
      "After successfully leading three Practice Circle sessions, able to assist and support other CircleGuides.",
  },
];

export const membershipForLife =
  "This progression is the prerequisite for Independent Member status. For that credentialed class, the 3-week dAp Training Course is recommended as a fast-track option, with pay-per-Point Practice Circles available afterwards. Membership after the nine Points is for life.";

export const threeLinkingRings = [
  { name: "Ruling-Hand", description: "Contact phone number and/or e-mail for the circle group." },
  { name: "Right-Hand", description: "Assists the Ruling-Hand; may organize registration events." },
  { name: "Post-Hand", description: "Meeting notices, virtual or in-person." },
];

export const teamAcronym = [
  { letter: "T", label: "Three", description: "Linking Rings — the minimum participating members for the Circle." },
  { letter: "E", label: "Experience", description: "Knowing the 9 Points of the dr.Anne plan." },
  { letter: "A", label: "Administrative", description: "Registering the Practice Circle with this website." },
  { letter: "M", label: "Meeting space", description: "A place to meet, or a virtual meeting, for Point sessions." },
];

export const getGuideGrow = {
  get: "In general, new participants may join the Practice Circle at any Point session and are required to get a copy of the dr.Anne plan book, to have in hand at all meetings.",
  guide:
    "During the meeting the CircleGuide reads from the Practice Point page in the book. There is some leeway as to which topics on that page might be covered. Open discussion follows. The CircleGuide must be mindful of the time for the Point session (45 minutes) and move conversation gently. It is not the responsibility of the CircleGuide to provide answers or information — speak only from personal experience, and don't be directive. Each person is on their own journey of discovery, and answers may differ for each one.",
  grow:
    "If you wish to have an open Practice Circle available to anyone who would like to join, please list with The Registry. If you are an Independent health professional or coach offering our training Course, being listed is highly recommended.",
};

export const minimumParticipants = 3;
