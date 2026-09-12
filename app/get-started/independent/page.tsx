import Link from "next/link";
import type { Metadata } from "next";
import { independentBecomePage } from "@/content/getStarted";
import { emailAddresses } from "@/content/org";

export const metadata: Metadata = {
  title: "Become an Independent Guide",
  description:
    "How health professionals and Point Mentors become certified Independent Guides to offer the dr.Anne plan Course, lead Circles, and provide one-to-one coaching.",
};

export default function IndependentBecomePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-display text-4xl text-brand-red sm:text-5xl">
        Become an Independent Guide
      </h1>
      <p className="mt-4 text-muted-foreground">
        This page explains how to become a certified Independent provider. Looking for a current
        provider to work with instead?{" "}
        <Link
          href="/get-started/independent-providers"
          className="text-brand-red underline underline-offset-4"
        >
          See Independent Providers
        </Link>
        .
      </p>

      <p className="mt-8 text-lg leading-relaxed text-foreground">
        {independentBecomePage.intro.value}
      </p>

      <section className="mt-10">
        <h2 className="font-display text-2xl text-brand-red">What certification gets you</h2>
        <p className="mt-4 text-foreground">{independentBecomePage.certificationBenefit.value}</p>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-2xl text-brand-red">Pricing</h2>
        <p className="mt-4 text-foreground">{independentBecomePage.pricing.value}</p>
        <p className="mt-4 text-sm text-muted-foreground">
          On this site, that&apos;s{" "}
          <Link
            href="/for-guides/membership-stages"
            className="text-brand-red underline underline-offset-4"
          >
            Membership Stages
          </Link>{" "}
          and{" "}
          <Link href="/for-guides/course-formats" className="text-brand-red underline underline-offset-4">
            Course Formats
          </Link>
          .
        </p>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-2xl text-brand-red">How to get there</h2>
        <p className="mt-4 text-foreground">{independentBecomePage.pathway.value}</p>
        <p className="mt-4 text-sm text-muted-foreground">
          See{" "}
          <Link href="/for-guides/membership-stages" className="text-brand-red underline underline-offset-4">
            Membership Stages
          </Link>{" "}
          and{" "}
          <Link href="/for-guides/certification" className="text-brand-red underline underline-offset-4">
            Certification
          </Link>{" "}
          for how the Point Mentor and certification steps work.
        </p>
      </section>

      <p className="mt-12 border-t border-border pt-8 text-muted-foreground">
        Ready to apply, or have questions? Email{" "}
        <a href={`mailto:${emailAddresses.vip}`} className="text-brand-red underline underline-offset-4">
          {emailAddresses.vip}
        </a>
        .
      </p>
    </div>
  );
}
