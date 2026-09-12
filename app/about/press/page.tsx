import type { Metadata } from "next";
import { scrapbookClippings } from "@/content/media";
import { emailAddresses } from "@/content/org";

export const metadata: Metadata = {
  title: "Press",
  description:
    "Press clippings and coverage of the dr.Anne Association — this scrapbook is being assembled; check back soon or send us a clipping.",
};

export default function PressPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-display text-4xl text-brand-red sm:text-5xl">Press</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        A scrapbook of press coverage and clippings about the dr.Anne Association and the dr.Anne
        plan.
      </p>

      {scrapbookClippings.length === 0 ? (
        <div
          role="status"
          className="mt-10 rounded-xl border border-dashed border-border bg-muted/30 p-8 text-center"
        >
          <p className="font-display text-xl text-foreground">No press clippings yet</p>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            We haven&apos;t yet digitized any press clippings for this scrapbook. As coverage of the
            dr.Anne Association is published, real clippings — captioned with their publication and
            date — will appear here.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Have a clipping to share? Email{" "}
            <a href={`mailto:${emailAddresses.team}`} className="font-medium text-brand-red hover:underline">
              {emailAddresses.team}
            </a>
            .
          </p>
        </div>
      ) : (
        <ul className="mt-10 grid gap-6 sm:grid-cols-2">
          {scrapbookClippings.map((clipping) => (
            <li key={clipping.slug} className="rounded-xl border border-border p-6">
              <p className="font-medium text-foreground">{clipping.caption}</p>
              {clipping.publication ? (
                <p className="mt-1 text-sm text-muted-foreground">{clipping.publication}</p>
              ) : null}
              {clipping.date ? <p className="text-sm text-muted-foreground">{clipping.date}</p> : null}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
