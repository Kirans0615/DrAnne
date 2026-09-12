export type CircleType = "Volunteer" | "Independent" | "Partner";

export type Circle = {
  name: string;
  location: string;
  virtual: boolean;
  formatCode: string;
  type: CircleType;
  day?: string;
  time?: string;
  contact: "team" | "vip";
};

/**
 * The Registry, as a static curated list (not a live, self-service
 * database — the site has no backend). New circles are added here by
 * hand once a volunteer emails team@dranne.org to register, per the
 * legacy agreement-and-understanding language in content/pages.ts-style
 * copy. Starts empty and honest, not with sample/placeholder rows — the
 * legacy .net Registry shipped fake sample rows under "UNDER
 * CONSTRUCTION"; this rebuild does not repeat that.
 */
export const circles: Circle[] = [];

export const registryAgreement = [
  "Follow the program formula",
  "Adhere to good business practices",
  "Cooperate with other Guides",
  "Observe confidentiality",
  "Take full responsibility for the conduct of their Circle Group",
  "Maintain communication with the Association",
];

export const registryWarning =
  "We urge you not to attend any Circle Group that is not registered with us — unregistered groups will not have the proper guidelines or instructions for conducting Practice Point sessions.";
