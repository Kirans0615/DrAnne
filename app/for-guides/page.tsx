import Link from "next/link";
import type { Metadata } from "next";
import { guideNav } from "@/content/nav";

export const metadata: Metadata = {
  title: "For Guides",
  description:
    "Working tools for CircleGuides: Open/Close statements with a real PDF and Guide Mode teleprompter, course formats, membership stages, certification, flyers and events.",
};

const pageSummaries: Record<string, string> = {
  "/for-guides/start-a-circle": "How to gather three people, split up the Three Linking Rings, and get a T-E-A-M running.",
  "/for-guides/open-and-close": "What the Open and Close statements are for, and where to find them.",
  "/for-guides/open-and-close/statements": "The full Open and Close script, a downloadable PDF, and Guide Mode — a distraction-free teleprompter with a timer and a breath pacer.",
  "/for-guides/course-formats": "All twelve course format codes, from a 1-Day Miracle to a 9-Month Win.",
  "/for-guides/membership-stages": "Apprentice → CircleGuide → Point Mentor, and what membership for life means.",
  "/for-guides/certification": "The certification path, plus a self-scoring knowledge check to prepare for your Board interview.",
  "/for-guides/flyers-and-templates": "Build a printable flyer for your Circle right in the browser — no template file required.",
  "/for-guides/events": "Ahoy dr.Anne!, Dinner with Donna, Robin's Retreat, and how to arrange a custom event.",
  "/for-guides/tips": "Practical tips from other participants, and how to send in your own.",
};

export default function ForGuidesIndexPage() {
  const links = guideNav.filter((item) => item.href !== "/for-guides");

  return (
    <div>
      <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">For Guides</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        This section is a quieter, plainer mode than the rest of the site — working tools for
        CircleGuides, Point Mentors and Independent Members, not marketing. Everything here is
        meant to be used during or before a real Practice Circle session: the Open and Close
        script, format codes, membership stages, certification prep, flyers and events.
      </p>
      <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
        Looking for something else? Point Mentors and general questions go to{" "}
        <a href="mailto:team@dranne.org" className="font-medium text-key-move hover:underline">
          team@dranne.org
        </a>
        .
      </p>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2">
        {links.map((item) => (
          <li key={item.href} className="rounded-lg border border-key-move/30 bg-key-move/5 p-5">
            <Link
              href={item.href}
              className="font-semibold text-foreground underline decoration-key-move/50 decoration-2 underline-offset-4 hover:text-key-move focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-key-move"
            >
              {item.label}
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">{pageSummaries[item.href]}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
