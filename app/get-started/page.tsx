import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Get Started",
  description:
    "Join a Practice Circle, search the Registry for one near you, meet certified Independent providers, or learn to volunteer or become an Independent Guide.",
};

const paths = [
  {
    href: "/get-started/join-a-circle",
    title: "Join a Circle",
    description:
      "What Practice Circles are, the benefits of joining one, and the Volunteer, Independent Coach and Partner routes into the program.",
  },
  {
    href: "/get-started/find-a-circle",
    title: "Find a Circle",
    description:
      "Search the Registry of Circles by location, format and type, and learn what MENU Code and TYPE mean before you join.",
  },
  {
    href: "/get-started/independent-providers",
    title: "Independent Providers",
    description:
      "Meet the health professionals certified to deliver the Training Course, lead Practice Circles, and offer one-to-one coaching.",
  },
  {
    href: "/get-started/volunteer",
    title: "Volunteer",
    description: "How to start your own Practice Circle as a volunteer CircleGuide, with no experience required.",
  },
  {
    href: "/get-started/independent",
    title: "Become an Independent Guide",
    description:
      "How health professionals and Point Mentors become certified to offer the Course and one-to-one coaching.",
  },
];

export default function GetStartedPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-display text-4xl text-brand-red sm:text-5xl">Get Started</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        There are a few ways to become part of the dr.Anne Association: join an existing Practice
        Circle, find one near you (or online) in the Registry, work one-on-one with a certified
        Independent provider, or become a VIP yourself — a Volunteer, Independent Coach or Partner.
        Each path is explained below.
      </p>

      <ul className="mt-10 grid gap-6 sm:grid-cols-2">
        {paths.map((path) => (
          <li key={path.href} className="flex flex-col rounded-xl border border-border p-6">
            <h2 className="font-display text-xl text-foreground">
              <Link href={path.href} className="hover:underline">
                {path.title}
              </Link>
            </h2>
            <p className="mt-2 flex-1 text-sm text-muted-foreground">{path.description}</p>
            <Button asChild variant="outline" className="mt-4 w-fit">
              <Link href={path.href}>Learn more →</Link>
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
