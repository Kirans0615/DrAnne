import Link from "next/link";
import type { Metadata } from "next";
import { circles, registryAgreement, registryWarning } from "@/content/circles";
import { courseFormats } from "@/content/formats";
import { emailAddresses } from "@/content/org";
import { CircleFinder } from "@/components/dranne/circle-finder";

export const metadata: Metadata = {
  title: "Find a Circle",
  description:
    "Search the Registry of dr.Anne Association Practice Circles by location, format code and type, and learn what MENU Code and TYPE mean before you join one.",
};

export default function FindACirclePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-display text-4xl text-brand-red sm:text-5xl">Find a Circle</h1>
      <p className="mt-6 text-lg leading-relaxed text-foreground">
        The Registry is a hand-maintained, curated list of Practice Circles that have registered
        with the Association — it is not a live self-service directory, so nothing here can be
        added through a form. A Circle joins this list once its Guide emails{" "}
        <a href={`mailto:${emailAddresses.team}`} className="text-brand-red underline underline-offset-4">
          {emailAddresses.team}
        </a>{" "}
        to register it.
      </p>

      {/* Honest, server-rendered empty state. Always visible, JS or no JS —
          the CircleFinder component below is a client-side filtering
          enhancement layered on top, and renders nothing while the
          Registry is empty. */}
      {circles.length === 0 ? (
        <div className="mt-8 rounded-xl border border-dashed border-border bg-muted/30 p-6">
          <p className="text-lg font-medium text-foreground">
            No Circles are listed in the Registry yet.
          </p>
          <p className="mt-2 text-muted-foreground">
            The Association is brand new, and no Circles have registered so far. Are you running
            one, or starting one? Email{" "}
            <a
              href={`mailto:${emailAddresses.team}`}
              className="text-brand-red underline underline-offset-4"
            >
              {emailAddresses.team}
            </a>{" "}
            to be the first one listed here.
          </p>
        </div>
      ) : null}

      <CircleFinder circles={circles} />

      <section className="mt-14">
        <h2 className="font-display text-2xl text-brand-red">Before you join</h2>
        <p className="mt-4 text-foreground">
          Every registered Circle and its Guide agree to the following:
        </p>
        <ul className="mt-4 space-y-2">
          {registryAgreement.map((item) => (
            <li key={item} className="flex gap-3 text-foreground">
              <span aria-hidden="true" className="mt-1 text-brand-red">
                &bull;
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 rounded-xl border border-brand-red/30 bg-brand-red/5 p-5 text-foreground">
          {registryWarning}
        </p>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-2xl text-brand-red">What does &quot;MENU Code&quot; mean?</h2>
        <p className="mt-4 text-foreground">
          The MENU Code is the meeting schedule a Circle follows to cover all nine Points of the
          program — how many sessions per week or month, and over how many weeks or months. All
          twelve codes are listed below.
        </p>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">The twelve MENU Code meeting schedules</caption>
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="py-2 pr-4 font-semibold text-foreground">
                  Code
                </th>
                <th scope="col" className="py-2 pr-4 font-semibold text-foreground">
                  Name
                </th>
                <th scope="col" className="py-2 font-semibold text-foreground">
                  Detail
                </th>
              </tr>
            </thead>
            <tbody>
              {courseFormats.map((format) => (
                <tr key={format.code} className="border-b border-border/60">
                  <td className="py-2 pr-4 font-mono text-brand-red">{format.code}</td>
                  <td className="py-2 pr-4 text-foreground">{format.name}</td>
                  <td className="py-2 text-muted-foreground">{format.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-2xl text-brand-red">What does &quot;TYPE&quot; mean?</h2>
        <p className="mt-4 text-foreground">
          TYPE tells you who runs a Circle and whether there is a fee to attend it.
        </p>
        <ul className="mt-4 space-y-3 text-foreground">
          <li>
            <span className="font-semibold">Volunteer</span> — led by a volunteer CircleGuide who
            has completed the program. Free to attend.
          </li>
          <li>
            <span className="font-semibold">Independent</span> — led by a certified Independent
            provider offering one-to-one or small-group coaching. Fees vary by provider; see{" "}
            <Link
              href="/get-started/independent-providers"
              className="text-brand-red underline underline-offset-4"
            >
              Independent Providers
            </Link>
            .
          </li>
          <li>
            <span className="font-semibold">Partner</span> — sponsored by an employer, club or
            organization for its members. Cost depends on the sponsorship arrangement; see{" "}
            <Link href="/partner" className="text-brand-red underline underline-offset-4">
              Partner
            </Link>
            .
          </li>
        </ul>
      </section>
    </div>
  );
}
