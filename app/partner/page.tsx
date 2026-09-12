import type { Metadata } from "next";
import { partnerPage } from "@/content/pages";
import { emailAddresses } from "@/content/org";
import {
  COURSE_FEE,
  MATERIALS_COMPONENT,
  enrollmentTiers,
  partnerSplitEach,
  partnerSplitRemainder,
} from "@/content/pricing";

export const metadata: Metadata = {
  title: "Partner",
  description:
    "Bring the dr.Anne plan Course to your employees, members or clients through Sponsorship, Voluntary Enrollment or a partner revenue split — turnkey, standardized and self-sustaining.",
};

export default function PartnerPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-display text-4xl text-brand-red sm:text-5xl">
        Partner
      </h1>
      <p className="mt-6 text-lg leading-relaxed">{partnerPage.intro.value}</p>
      <p className="mt-4 text-lg leading-relaxed">{partnerPage.bringProgram.value}</p>

      <p className="mt-10 font-display text-2xl text-brand-red">
        {partnerPage.tagline.value}
      </p>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">What is the dr.Anne plan Course?</h2>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          {partnerPage.courseDescription.value}
        </p>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          {partnerPage.netModelIntro.value}
        </p>
      </section>

      <section className="mt-12 border-t border-border pt-10">
        <h2 className="text-xl font-semibold">Sponsors</h2>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          {partnerPage.sponsors.value}
        </p>
      </section>

      <section className="mt-10 border-t border-border pt-10">
        <h2 className="text-xl font-semibold">Voluntary Employee or Member</h2>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          {partnerPage.voluntary.value}
        </p>
      </section>

      <section className="mt-10 border-t border-border pt-10">
        <h2 className="text-xl font-semibold">Lifelong Practice Circles</h2>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          {partnerPage.lifelongCircles.value}
        </p>
      </section>

      <section className="mt-10 border-t border-border pt-10">
        <h2 className="text-xl font-semibold">Enrollment Tiers</h2>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          {enrollmentTiers.value}
        </p>
      </section>

      <section
        aria-labelledby="revenue-split-heading"
        className="mt-10 rounded-lg border border-border bg-brand-red-quiet p-6"
      >
        <h2 id="revenue-split-heading" className="text-xl font-semibold">
          How the partner revenue split works
        </h2>
        <p className="mt-3 leading-relaxed">
          Of the ${COURSE_FEE} course fee, ${MATERIALS_COMPONENT} covers
          materials. The remaining ${partnerSplitRemainder} is split evenly
          for mutual fundraising: ${partnerSplitEach} to the Association and
          ${partnerSplitEach} to the partner organization.
        </p>
      </section>

      <section className="mt-10 border-t border-border pt-10">
        <h2 className="text-xl font-semibold">Turnkey, zero HR overhead</h2>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          {partnerPage.turnkey.value}
        </p>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          {partnerPage.keysNote.value}
        </p>
      </section>

      <section className="mt-12 border-t border-border pt-10">
        <h2 className="text-xl font-semibold">Start a conversation</h2>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          Let us know how we can help — everybody wins.
        </p>
        <a
          href={`mailto:${emailAddresses.ask}`}
          className="mt-4 inline-block text-lg font-medium text-brand-red-ink hover:underline"
        >
          {emailAddresses.ask}
        </a>
      </section>
    </div>
  );
}
