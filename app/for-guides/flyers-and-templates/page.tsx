import type { Metadata } from "next";
import { flyersIntro } from "@/content/for-guides";
import { flyerSamples } from "@/content/media";
import { FlyerBuilder } from "@/components/dranne/flyer-builder";

export const metadata: Metadata = {
  title: "Flyers & Templates",
  description:
    "Build a printable, branded Practice Circle flyer right in your browser — fill in your circle's details and download a real PDF, no template file required.",
};

export default function FlyersAndTemplatesPage() {
  return (
    <div>
      <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">Flyers &amp; Templates</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">{flyersIntro.value}</p>

      {flyerSamples.length === 0 && (
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
          No sample flyer images are available yet, so instead of a static template file, fill in
          your Circle&rsquo;s details below and download a ready-to-print PDF.
        </p>
      )}

      <section aria-labelledby="flyer-builder-heading" className="mt-10 border-t border-border pt-8">
        <h2 id="flyer-builder-heading" className="text-xl font-semibold text-foreground">
          Build your flyer
        </h2>
        <div className="mt-6">
          <FlyerBuilder />
        </div>
      </section>
    </div>
  );
}
