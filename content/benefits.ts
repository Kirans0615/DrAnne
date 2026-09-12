export type BenefitColumn = {
  heading: string;
  items: string[];
};

/** .org home "Benefits of the drAnne plan" (audit §3.1) as real <ul> markup — no emoji bullets. */
export const benefits: BenefitColumn[] = [
  {
    heading: "Freedom instead of restriction",
    items: ["Still eat your favorite foods", "No counting calories, no weighing foods", "No drugs, no supplements"],
  },
  {
    heading: "Simple and fun!",
    items: ["Easy to use", "Easy to remember", "Always-available hand measure"],
  },
  {
    heading: "Livable forever",
    items: ["Flexible self-selected food choices", "Adapts to medical restrictions", "Enjoyable exercise, personal meditation"],
  },
];
