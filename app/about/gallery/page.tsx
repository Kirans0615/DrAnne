import Image from "next/image";
import type { Metadata } from "next";
import { ImageOff } from "lucide-react";
import { practiceCirclePhotoLocations } from "@/content/media";
import { emailAddresses } from "@/content/org";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Practice Circle photos from Leisure World Seal Beach, the Screen Actors Guild Hollywood, Smith Club OC Newport Beach and Clubhouse Senior Center Seal Beach.",
};

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-display text-4xl text-brand-red sm:text-5xl">Gallery</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        Practice Circles have met in person at these locations. Photographs from each session have
        not yet been digitized for this gallery.
      </p>

      <ul className="mt-10 grid gap-6 sm:grid-cols-2">
        {practiceCirclePhotoLocations.map((location) => (
          <li key={location}>
            <figure className="rounded-xl border border-dashed border-border bg-muted/30 p-6">
              <div
                aria-hidden="true"
                className="flex aspect-[4/3] w-full items-center justify-center rounded-lg border border-border bg-background text-muted-foreground"
              >
                <ImageOff className="size-10" />
              </div>
              <figcaption className="mt-3 text-sm font-medium text-foreground">
                {location}
                <span className="block font-normal text-muted-foreground">Photo not yet available</span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <div className="mt-12 border-t border-border pt-10">
        <h2 className="font-display text-2xl text-brand-red">From a Practice session</h2>
        <figure className="mt-4 max-w-md">
          <div className="overflow-hidden rounded-xl border border-border">
            <Image
              src="/assets/source/image5.png"
              alt="A facilitator assisting a participant during a dr.Anne plan session."
              width={640}
              height={480}
              className="h-auto w-full object-cover"
            />
          </div>
          <figcaption className="mt-2 text-sm text-muted-foreground">
            A facilitator assisting a participant during a dr.Anne plan session.
          </figcaption>
        </figure>
      </div>

      <p className="mt-10 text-sm text-muted-foreground">
        Have a photo from a Practice Circle you&apos;d like to share? Email{" "}
        <a href={`mailto:${emailAddresses.team}`} className="font-medium text-brand-red hover:underline">
          {emailAddresses.team}
        </a>
        .
      </p>
    </div>
  );
}
