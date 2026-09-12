import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Plan",
  description:
    "How the dr.Anne plan works: the MagicHand portion system, the three Keys and nine Points, food plates and recipes with chit counts.",
};

const links = [
  {
    href: "/the-plan/how-it-works",
    label: "How It Works",
    description: "The structure behind the program: plug and play, one-and-done, no ongoing cost.",
  },
  {
    href: "/the-plan/magichand",
    label: "MagicHand",
    description: "The interactive hand explainer at the heart of the program.",
  },
  {
    href: "/the-plan/food-plates",
    label: "Food Plates",
    description: "Real plates, apportioned by chit.",
  },
  {
    href: "/the-plan/recipes",
    label: "Recipes",
    description: "Four recipes with their chit counts.",
  },
];

export default function ThePlanIndexPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-display text-4xl text-brand-red sm:text-5xl">The Plan</h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground">
        The dr.Anne plan is built on three Keys — Apportion, Move, Silence — expressed through nine
        Points and taught with the MagicHand, a simple hand-measure for portion control. This section
        covers how the program is structured, the MagicHand itself, and the plates and recipes that
        show it in practice.
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
