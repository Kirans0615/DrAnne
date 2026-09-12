import Link from "next/link";
import type { Metadata } from "next";
import { org } from "@/content/org";

export const metadata: Metadata = {
  title: "About",
  description:
    "About the dr.Anne Association: our founding story, board of directors, press coverage, and a look inside our volunteer-led Practice Circles.",
};

const links = [
  {
    href: "/about/our-story",
    label: "Our Story",
    description: "How a National Institute of Health study became a lifelong health practice.",
  },
  {
    href: "/about/board",
    label: "Board of Directors",
    description: "The five directors who govern the Association.",
  },
  {
    href: "/about/press",
    label: "Press",
    description: "Coverage of the dr.Anne Association in the news.",
  },
  {
    href: "/about/gallery",
    label: "Gallery",
    description: "Practice Circles meeting in communities across Southern California.",
  },
];

export default function AboutIndexPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-display text-4xl text-brand-red sm:text-5xl">About the dr.Anne Association</h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground">
        The dr.Anne Association is a nonprofit educational {org.taxStatus} organization founded by{" "}
        {org.founder}, an epidemiologist with decades of experience in nutrition and public health
        research. This section covers where the program came from, who governs the Association, and
        what its Practice Circles look like in practice.
      </p>
      <ul className="mt-10 grid gap-6 sm:grid-cols-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="group block h-full rounded-xl border border-border p-6 transition-colors hover:border-brand-red focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
            >
              <span className="font-display text-xl text-brand-red group-hover:underline">{link.label}</span>
              <p className="mt-2 text-sm text-muted-foreground">{link.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
