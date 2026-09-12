import type { Metadata } from "next";
import { SponsorWall } from "@/components/dranne/sponsor-wall";
import {
  longFormTestimonials,
  participantTestimonials,
  sagHealthFairCaption,
} from "@/content/testimonials";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Hand in Hand: real participant testimonials about the dr.Anne plan, plus thanks to the sponsors, collaborators, volunteers and donors who support it.",
};

export default function TestimonialsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-display text-4xl text-brand-red sm:text-5xl">
        Testimonials
      </h1>
      <p className="mt-4 font-display text-2xl text-brand-red">Hand in Hand</p>

      <section aria-labelledby="participant-heading" className="mt-10">
        <h2 id="participant-heading" className="sr-only">
          Participant testimonials
        </h2>
        <ul className="grid gap-6 sm:grid-cols-2">
          {participantTestimonials.map((testimonial) => (
            <li
              key={testimonial.attribution}
              className="rounded-lg border border-border bg-muted/30 p-6"
            >
              <blockquote className="text-lg leading-relaxed">
                &ldquo;{testimonial.quote.value}&rdquo;
              </blockquote>
              <p className="mt-3 text-sm font-medium text-muted-foreground">
                {testimonial.attribution}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="longform-heading" className="mt-14 border-t border-border pt-10">
        <h2 id="longform-heading" className="text-xl font-semibold">
          More from our participants
        </h2>
        <ul className="mt-6 space-y-8">
          {longFormTestimonials.map((testimonial) => (
            <li key={testimonial.attribution}>
              <blockquote className="text-lg leading-relaxed">
                &ldquo;{testimonial.quote.value}&rdquo;
              </blockquote>
              <p className="mt-3 text-sm font-medium text-muted-foreground">
                {testimonial.attribution}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="sag-heading" className="mt-14 border-t border-border pt-10">
        <h2 id="sag-heading" className="sr-only">
          Screen Actors Guild Health Fair
        </h2>
        <figure>
          <div
            className="flex aspect-[4/3] max-w-md items-center justify-center rounded-lg border border-dashed border-border bg-muted/20 p-6 text-center text-sm text-muted-foreground"
            role="img"
            aria-label="Photo not yet available: Screen Actors Guild Health Fair, 2011"
          >
            Photo not yet available
          </div>
          <figcaption className="mt-3 max-w-md text-sm text-muted-foreground">
            {sagHealthFairCaption.value}
          </figcaption>
        </figure>
      </section>

      <section aria-labelledby="sponsors-heading" className="mt-14 border-t border-border pt-10">
        <h2 id="sponsors-heading" className="text-xl font-semibold">
          Thank you to our sponsors, collaborators, volunteers, and donors.
        </h2>
        <div className="mt-6">
          <SponsorWall />
        </div>
      </section>
    </div>
  );
}
