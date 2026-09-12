import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { org } from "@/content/org";
import { benefits } from "@/content/benefits";
import { board } from "@/content/board";
import { ThreeKeysTriptych } from "@/components/dranne/three-keys-triptych";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export const metadata: Metadata = {
  title: "Home",
  description:
    "The dr.Anne Association teaches portion control, movement and stress reduction through the MagicHand system — a nonprofit 501(c)(3) founded by epidemiologist Dr. Anne Seifert.",
};

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-red text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <h1 className="font-display text-5xl leading-tight sm:text-6xl">
              {org.invitationHeading.value}
            </h1>
            <p className="mt-6 text-lg text-white/90">{org.subheadings.curious.value}</p>
            <p className="mt-3 text-lg text-white/90">{org.subheadings.journey.value}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="secondary">
                <Link href="/get-started">Get Started</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/40 bg-transparent text-white hover:bg-white/10"
              >
                <Link href="/the-plan/how-it-works">See How It Works</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-foreground">{org.aboutParagraph.value}</p>
      </section>

      <section aria-labelledby="mission-heading" className="bg-muted/30 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 id="mission-heading" className="font-display text-3xl text-brand-red">
            Our Mission
          </h2>
          <p className="mt-4 text-lg leading-relaxed">{org.mission.value}</p>
        </div>
      </section>

      <ThreeKeysTriptych />

      {/* The single ContainerScroll moment on the site (build prompt §7.2:
          "use it exactly once, on the homepage, for the primary reveal").
          The full interactive MagicHand explainer is a tall, self-contained
          section in its own right (heading + full data table) — it lives at
          /the-plan/magichand, not crammed into this fixed-height card. The
          only photo available for this reveal (About-1536x681.png) has its
          own "About" wordmark baked in, so the copy here matches what's
          actually shown (the book) rather than over-claiming MagicHand
          content the image doesn't depict. */}
      <ContainerScroll
        titleComponent={
          <div>
            <h2 className="font-display text-3xl text-brand-red sm:text-4xl">
              The dr.Anne plan, in your hands
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              One book, nine Points, a lifetime of Practice Circles.
            </p>
          </div>
        }
      >
        <Link
          href="/the-plan/how-it-works"
          className="group relative block size-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red"
        >
          <Image
            src="/assets/source/About-1536x681.png"
            alt="The dr.Anne plan Expanded Edition book on a shelf"
            fill
            className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
          />
          <span className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-black/10 to-transparent p-6">
            <span className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-brand-red-ink">
              See how it works →
            </span>
          </span>
        </Link>
      </ContainerScroll>

      <section aria-labelledby="benefits-heading" className="bg-muted/30 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 id="benefits-heading" className="font-display text-center text-3xl text-brand-red">
            Benefits of the dr.Anne plan
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {benefits.map((column) => (
              <div key={column.heading}>
                <h3 className="text-lg font-semibold">{column.heading}</h3>
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
          <p className="mx-auto mt-12 max-w-2xl text-center text-lg font-medium">{org.closingLine.value}</p>
        </div>
      </section>

      <section aria-labelledby="board-heading" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <h2 id="board-heading" className="font-display text-3xl text-brand-red">
            Board of Directors
          </h2>
          <Link href="/about/board" className="text-sm font-medium text-brand-red hover:underline">
            Meet the full board →
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
          {board.map((member) => (
            <Link key={member.name} href="/about/board" className="group text-center">
              <div className="mx-auto aspect-[4/5] w-full max-w-[160px] overflow-hidden rounded-lg border border-border">
                <Image
                  src={member.photo}
                  alt={member.alt}
                  width={240}
                  height={300}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <p className="mt-2 text-sm font-medium">{member.name}</p>
              <p className="text-xs text-muted-foreground">{member.role}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
