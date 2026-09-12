import type { Metadata } from "next";
import { aboutStory } from "@/content/pages";
import { org } from "@/content/org";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "From a National Institute of Health study at the Institute of Health Research to the dr.Anne plan — the history behind the dr.Anne Association, founded 2025.",
};

export default function OurStoryPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-display text-4xl text-brand-red sm:text-5xl">Our Story</h1>
      <p className="mt-4 text-sm text-muted-foreground">
        The dr.Anne Association was founded {org.foundingDateDisplay}.
      </p>

      <div className="mt-8 space-y-6 text-lg leading-relaxed text-foreground">
        <p>{aboutStory.backgroundHistory.value}</p>
        <p>{aboutStory.secondParagraph.value}</p>
        <p>{aboutStory.selfSupporting.value}</p>
      </div>
    </div>
  );
}
