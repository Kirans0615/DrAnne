export type IndependentProvider = {
  name: string;
  specialty: string;
  location: string;
  timezone: string;
};

/**
 * Phone numbers in the source are masked placeholders (203-xxx-xxxx,
 * 909-xxx-xxxx) with an inconsistent area code (203/CT paired with a
 * 92866/CA ZIP). Omitted entirely per build prompt §13-18 — contact
 * routes through the form to vip@dranne.org instead.
 */
export const independentProviders: IndependentProvider[] = [
  {
    name: "Robin H. Phillips, IHP",
    specialty: "Integrative Health",
    location: "Orange, CA area (92866)",
    timezone: "Pacific",
  },
  {
    name: "John Clenton, BEng",
    specialty: "Support Counseling",
    location: "92316",
    timezone: "Pacific",
  },
];
