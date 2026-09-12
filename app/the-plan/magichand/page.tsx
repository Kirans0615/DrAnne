import type { Metadata } from "next";
import { MagicHand } from "@/components/dranne/magic-hand";
import { ChitCounter } from "@/components/dranne/chit-counter";

export const metadata: Metadata = {
  title: "MagicHand",
  description:
    "The MagicHand: hold up your left hand and let each finger stand for a food group — the interactive portion-control explainer at the heart of the dr.Anne plan.",
};

export default function MagicHandPage() {
  return (
    <div>
      <div className="mx-auto max-w-3xl px-4 pt-16 sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl text-brand-red sm:text-5xl">The MagicHand</h1>
        <p className="mt-4 text-lg leading-relaxed text-foreground">
          The MagicHand is the heart of the dr.Anne plan: your own hand, always with you, as a
          measure for portion control. Hold up your left hand — each finger stands for a food group,
          and the palm and thumb set the portion. Explore each finger below, or read the full
          reference table underneath it.
        </p>
      </div>
      <MagicHand />

      <div className="mx-auto max-w-3xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl text-brand-red">Try the daily chit budget</h2>
        <p className="mt-3 text-foreground">
          Twelve palm portions plus three thumb portions make fifteen chits a day, with unlimited
          vegetables and water on top. Try spending a day&rsquo;s worth below — nothing you enter here
          is saved or sent anywhere.
        </p>
        <div className="mt-6">
          <ChitCounter />
        </div>
      </div>
    </div>
  );
}
