import type { Metadata } from "next";
import { benefits } from "@/content/benefits";
import { howItWorks } from "@/content/howItWorks";
import { NinePointsPath } from "@/components/dranne/nine-points-path";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Structured, standardized and scalable: how the dr.Anne plan's nine Points, three Keys and volunteer-led Practice Circles work with no ongoing subscription cost.",
};

export default function HowItWorksPage() {
  return (
    <div>
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl text-brand-red sm:text-5xl">How It Works</h1>
        <p className="mt-3 font-display text-2xl text-key-move">{howItWorks.tagline.value}</p>

        <div className="mt-8 space-y-6 text-lg leading-relaxed text-foreground">
          <p>{howItWorks.frameworkParagraph.value}</p>
          <p>{howItWorks.modelParagraph.value}</p>
          <p>{howItWorks.scaleParagraph.value}</p>
        </div>

        <h2 className="mt-10 text-xl font-semibold text-foreground">Where to begin</h2>
        <ul className="mt-4 space-y-2 text-lg text-muted-foreground">
          {howItWorks.whereToBegin.map((item) => (
            <li key={item} className="flex gap-2">
              <span aria-hidden="true" className="text-brand-red">
                &bull;
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <section aria-labelledby="benefits-heading" className="bg-muted/30 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 id="benefits-heading" className="text-center font-display text-3xl text-brand-red">
            Benefits of the dr.Anne plan
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {benefits.map((column) => (
              <div key={column.heading}>
                <h3 className="text-lg font-semibold text-foreground">{column.heading}</h3>
                <ul className="mt-3 space-y-2 text-muted-foreground">
                  {column.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span aria-hidden="true" className="text-brand-red">
                        &bull;
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NinePointsPath />
    </div>
  );
}
