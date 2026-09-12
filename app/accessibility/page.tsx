import type { Metadata } from "next";
import { emailAddresses } from "@/content/org";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "Our WCAG 2.2 AA accessibility target, what has and hasn't been verified yet, and how to report an accessibility problem on this site.",
};

export default function AccessibilityPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-display text-4xl text-brand-red sm:text-5xl">
        Accessibility Statement
      </h1>

      <div className="mt-6 rounded-lg border border-border bg-brand-red-quiet p-4 text-sm">
        <p>
          <strong>This is a draft</strong>, honestly describing the state of
          this site today. It is provided for the Association&apos;s counsel
          and the build team to review before launch, and will be revised as
          testing continues.
        </p>
      </div>

      <p className="mt-8 text-sm text-muted-foreground">
        Last updated: September 12, 2026.
      </p>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Our commitment</h2>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          The dr.Anne Association is committed to making this website usable
          by everyone, including people who use assistive technology, rely
          on the keyboard alone, or need reduced motion. Our target is
          conformance with the Web Content Accessibility Guidelines (WCAG)
          2.2 at Level AA.
        </p>
      </section>

      <section className="mt-8 border-t border-border pt-8">
        <h2 className="text-xl font-semibold">What we&apos;ve built with accessibility in mind</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground">
          <li>A skip-to-content link and a single, non-duplicated navigation menu.</li>
          <li>One <code>&lt;h1&gt;</code> per page and a correct heading hierarchy.</li>
          <li>Real alt text on every image we&apos;ve added, and real list markup instead of emoji bullets.</li>
          <li>Visible keyboard focus styles, and interactive components built on Radix UI primitives for keyboard and screen-reader support.</li>
          <li>Motion that respects <code>prefers-reduced-motion</code> — every animated interaction has a static, fully usable equivalent.</li>
          <li>Every email address on the site is a real <code>mailto:</code> link rather than plain, unlinked text.</li>
        </ul>
      </section>

      <section className="mt-8 border-t border-border pt-8">
        <h2 className="text-xl font-semibold">What is not yet verified or complete</h2>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          In the interest of being accurate rather than aspirational, here is
          what we know is still outstanding:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground">
          <li>No automated accessibility audit (such as axe-core) has been run across the site yet.</li>
          <li>No manual screen-reader testing (VoiceOver, NVDA or similar) has been performed yet.</li>
          <li>
            Photography for the food plates, the press scrapbook, and the
            Practice Circle photo gallery does not exist yet. Those pages
            currently use text-only empty states describing what will
            eventually appear there, rather than placeholder or stock
            images, so nothing is presented that could mislead a screen
            reader user about what is actually on the page.
          </li>
        </ul>
      </section>

      <section className="mt-8 border-t border-border pt-8">
        <h2 className="text-xl font-semibold">Reporting a problem</h2>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          If you encounter an accessibility barrier anywhere on this site,
          please tell us — we want to know and to fix it. Email{" "}
          <a href={`mailto:${emailAddresses.ask}`} className="text-brand-red-ink hover:underline">
            {emailAddresses.ask}
          </a>{" "}
          with the page you were on and a description of the problem.
        </p>
      </section>
    </div>
  );
}
