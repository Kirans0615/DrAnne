import type { Metadata } from "next";
import { emailAddresses, org } from "@/content/org";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach the dr.Anne Association by email — routed by topic to ask@, team@ or vip@dranne.org — or find us on LinkedIn and YouTube.",
};

const routes = [
  {
    address: emailAddresses.ask,
    heading: "General & Partner",
    blurb:
      "Start here for general questions about the Association or the dr.Anne plan, and for Partner or sponsorship enquiries.",
  },
  {
    address: emailAddresses.team,
    heading: "Volunteer & Media",
    blurb:
      "Use this address for Practice Circle support, volunteer questions, media enquiries, and tips or recipe submissions.",
  },
  {
    address: emailAddresses.vip,
    heading: "Certification & Partnerships",
    blurb:
      "Use this address for Certification, Independent-provider partnerships, Events, and product orders (books, the Handy Chits Counter app, the dAp Starter Kit).",
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-display text-4xl text-brand-red sm:text-5xl">
        Contact
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
        We don&apos;t use contact forms — send us an email directly and it will
        reach the right people.
      </p>

      <ul className="mt-10 space-y-8">
        {routes.map((route) => (
          <li key={route.address} className="rounded-lg border border-border bg-muted/30 p-6">
            <h2 className="text-lg font-semibold">{route.heading}</h2>
            <p className="mt-2 text-muted-foreground">{route.blurb}</p>
            <a
              href={`mailto:${route.address}`}
              className="mt-3 inline-block text-lg font-medium text-brand-red-ink hover:underline"
            >
              {route.address}
            </a>
          </li>
        ))}
      </ul>

      <section aria-labelledby="elsewhere-heading" className="mt-12 border-t border-border pt-10">
        <h2 id="elsewhere-heading" className="text-lg font-semibold">
          Find us elsewhere
        </h2>
        <ul className="mt-4 space-y-2">
          <li>
            <a
              href={org.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-brand-red-ink hover:underline"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href={org.youTube}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-brand-red-ink hover:underline"
            >
              YouTube
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
