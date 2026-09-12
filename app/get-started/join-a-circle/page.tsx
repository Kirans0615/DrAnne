import Link from "next/link";
import type { Metadata } from "next";
import { guideJoinPage } from "@/content/pages";
import { emailAddresses } from "@/content/org";
import { pointSessionFee } from "@/content/pricing";

export const metadata: Metadata = {
  title: "Join a Circle",
  description:
    "What Practice Circles are, four benefits of joining one, and how to become a VIP — a Volunteer, Independent Coach, or Partner — with the dr.Anne Association.",
};

export default function JoinACirclePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-display text-4xl text-brand-red sm:text-5xl">Join a Circle</h1>
      <p className="mt-6 text-lg leading-relaxed text-foreground">{guideJoinPage.intro.value}</p>

      <ul className="mt-8 space-y-3">
        {guideJoinPage.benefits.map((benefit) => (
          <li key={benefit} className="flex gap-3 text-foreground">
            <span aria-hidden="true" className="mt-1 text-brand-red">
              &bull;
            </span>
            <span>{benefit}</span>
          </li>
        ))}
      </ul>

      <section className="mt-12">
        <h2 className="font-display text-2xl text-brand-red">What are Practice Circles?</h2>
        <p className="mt-4 text-lg leading-relaxed text-foreground">
          {guideJoinPage.whatArePracticeCircles.value}
        </p>
        <p className="mt-4 text-muted-foreground">
          Ready to find one?{" "}
          <Link href="/get-started/find-a-circle" className="text-brand-red underline underline-offset-4">
            Search the Registry
          </Link>
          .
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl text-brand-red">{guideJoinPage.vipHeading.value}</h2>

        <div className="mt-6 space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-foreground">Volunteer</h3>
            <p className="mt-2 text-foreground">{guideJoinPage.volunteer.value}</p>
            <p className="mt-2 text-sm text-muted-foreground">
              See{" "}
              <Link href="/get-started/volunteer" className="text-brand-red underline underline-offset-4">
                Volunteer
              </Link>{" "}
              for the full guide to starting your own Circle.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground">One-on-One Coaching</h3>
            <p className="mt-2 text-foreground">{guideJoinPage.oneOnOne.value}</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Point Practice sessions with an Independent provider are typically ${pointSessionFee.value}{" "}
              per session. See{" "}
              <Link
                href="/get-started/independent-providers"
                className="text-brand-red underline underline-offset-4"
              >
                Independent Providers
              </Link>{" "}
              to find one, or{" "}
              <Link href="/get-started/independent" className="text-brand-red underline underline-offset-4">
                Become an Independent Guide
              </Link>{" "}
              yourself.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground">Partner or Sponsor</h3>
            <p className="mt-2 text-foreground">{guideJoinPage.partnerCta.value}</p>
          </div>
        </div>
      </section>

      <p className="mt-12 border-t border-border pt-8 text-muted-foreground">
        Questions about joining or becoming a VIP? Email{" "}
        <a href={`mailto:${emailAddresses.ask}`} className="text-brand-red underline underline-offset-4">
          {emailAddresses.ask}
        </a>
        .
      </p>
    </div>
  );
}
