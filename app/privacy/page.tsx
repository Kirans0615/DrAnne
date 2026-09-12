import type { Metadata } from "next";
import { emailAddresses, org } from "@/content/org";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How the dr.Anne Association handles information on this site: no forms, mailto-based contact, no cookies or tracking today, and third-party processors we link out to.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-display text-4xl text-brand-red sm:text-5xl">
        Privacy Policy
      </h1>

      <div className="mt-6 rounded-lg border border-border bg-brand-red-quiet p-4 text-sm">
        <p>
          <strong>This is a draft.</strong> It describes how this website is
          actually built today and is provided for the Association&apos;s
          counsel to review, revise and formally adopt before launch.
        </p>
      </div>

      <p className="mt-8 text-sm text-muted-foreground">
        Last updated: September 12, 2026.
      </p>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">This site collects almost nothing directly</h2>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          {org.domain} is a static website with no contact forms, no
          accounts, and no database of visitor information. Every email
          address on the site — {emailAddresses.ask}, {emailAddresses.team}{" "}
          and {emailAddresses.vip} — is a plain <code>mailto:</code> link.
          Clicking one opens your own email application; whatever you choose
          to write and send goes directly to the Association&apos;s inbox
          through your own email provider. This website itself never
          receives, stores, or has any visibility into that message — we
          have no server, form handler or database sitting between you and
          us.
        </p>
      </section>

      <section className="mt-8 border-t border-border pt-8">
        <h2 className="text-xl font-semibold">Analytics</h2>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          This site does not currently run any analytics, tracking pixel, or
          third-party script that observes your visit. If the Association
          adds analytics in the future, the intention is to use a cookieless
          service such as Cloudflare Web Analytics, which does not use
          cookies or collect personal data, and would not require a consent
          banner. This policy will be updated if and when that happens.
        </p>
      </section>

      <section className="mt-8 border-t border-border pt-8">
        <h2 className="text-xl font-semibold">Cookies</h2>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          This site does not set any non-essential cookies. Your browser may
          still store basic technical preferences locally on your own
          device, such as a light or dark mode choice; that information
          never leaves your browser.
        </p>
      </section>

      <section className="mt-8 border-t border-border pt-8">
        <h2 className="text-xl font-semibold">Third-party services you may be linked to</h2>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          Some links on this site take you to services operated by other
          companies, which have their own privacy practices we do not
          control:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground">
          <li>
            <strong>PayPal</strong> — used for donations and some course and
            book payments. PayPal processes and stores payment information
            under its own privacy policy; this site never sees or stores
            your payment details.
          </li>
          <li>
            <strong>PayHip</strong> — used for eBook and audio purchases,
            under PayHip&apos;s own privacy policy.
          </li>
          <li>
            <strong>YouTube</strong> — the Association&apos;s channel is
            linked from this site. Following that link takes you to YouTube,
            governed by Google&apos;s privacy policy. This site does not
            currently embed any YouTube video player directly on its pages.
          </li>
        </ul>
      </section>

      <section className="mt-8 border-t border-border pt-8">
        <h2 className="text-xl font-semibold">Children&apos;s privacy</h2>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          This site is intended for a general adult audience and is not
          directed at children. It does not knowingly collect information
          from children.
        </p>
      </section>

      <section className="mt-8 border-t border-border pt-8">
        <h2 className="text-xl font-semibold">Changes to this policy</h2>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          If the way this site handles information changes — for example, if
          analytics or a form is added — this page will be updated to
          reflect it.
        </p>
      </section>

      <section className="mt-8 border-t border-border pt-8">
        <h2 className="text-xl font-semibold">Questions</h2>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          Questions about this policy can be sent to{" "}
          <a href={`mailto:${emailAddresses.ask}`} className="text-brand-red-ink hover:underline">
            {emailAddresses.ask}
          </a>
          .
        </p>
      </section>
    </div>
  );
}
