import type { Metadata } from "next";
import { ImageOff } from "lucide-react";
import { foodPlates } from "@/content/foodplates";

export const metadata: Metadata = {
  title: "Food Plates",
  description:
    "Five real dr.Anne plan plates, apportioned by chit — lunch plate, pancakes, salad with feta, French toast & bacon, and a fifth plate.",
};

export default function FoodPlatesPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-display text-4xl text-brand-red sm:text-5xl">Food Plates</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        Five real plates from the dr.Anne plan, apportioned by chit. Plate photography has not yet
        been supplied for this page — each plate below is a placeholder, but the caption and chit
        count are real.
      </p>

      <ul className="mt-10 grid gap-8 sm:grid-cols-2">
        {foodPlates.map((plate) => (
          <li key={plate.slug} className="rounded-xl border border-border p-6">
            <div
              aria-hidden="true"
              className="flex aspect-[4/3] w-full items-center justify-center rounded-lg border border-dashed border-border bg-muted/30 text-muted-foreground"
            >
              <ImageOff className="size-10" />
            </div>
            {plate.caption ? (
              <>
                <p className="mt-4 font-medium text-foreground">{plate.caption}</p>
                <p className="mt-1 text-sm text-muted-foreground">{plate.chits}</p>
              </>
            ) : (
              <p className="mt-4 text-sm italic text-muted-foreground">
                Caption not available for this plate — the source description was cut off before it
                could be reliably reproduced.
              </p>
            )}
          </li>
        ))}
      </ul>

      <p className="mt-10 text-sm text-muted-foreground">Plate photography has not yet been supplied.</p>
    </div>
  );
}
