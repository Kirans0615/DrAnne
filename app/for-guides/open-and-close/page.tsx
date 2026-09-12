import Link from "next/link";
import type { Metadata } from "next";
import { openCloseIntro, whatToRemember } from "@/content/for-guides";
import { MagicSquare } from "@/components/dranne/magic-square";

export const metadata: Metadata = {
  title: "Open & Close",
  description:
    "Why CircleGuides read the same Open and Close statements at every session, and how the MagicSquare Learning Wheel tracks completed Points.",
};

export default function OpenAndClosePage() {
  return (
    <div>
      <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">Open &amp; Close</h1>

      <p className="mt-6 max-w-2xl text-foreground">{openCloseIntro.value}</p>

      <div className="mt-8">
        <Link
          href="/for-guides/open-and-close/statements"
          className="inline-flex items-center rounded-md bg-key-move px-4 py-2 text-sm font-semibold text-white hover:bg-key-move/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-key-move"
        >
          Read the Open &amp; Close statements →
        </Link>
      </div>

      <section aria-labelledby="what-to-remember-heading" className="mt-10 rounded-lg border border-key-move/30 bg-key-move/5 p-5">
        <h2 id="what-to-remember-heading" className="text-lg font-semibold text-foreground">
          What to remember
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">{whatToRemember.value}</p>
      </section>

      <section aria-labelledby="magic-square-heading" className="mt-12">
        <h2 id="magic-square-heading" className="text-lg font-semibold text-foreground">
          The MagicSquare Learning Wheel
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
          Encourage your participants to fill in the dot on their MagicSquare wheel after each
          completed Point session. Try it below.
        </p>
        <div className="mt-6">
          <MagicSquare />
        </div>
      </section>
    </div>
  );
}
