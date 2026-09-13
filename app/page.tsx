import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Unlock, Sparkles, Infinity as InfinityIcon } from "lucide-react";
import { org } from "@/content/org";
import { benefits } from "@/content/benefits";
import { board } from "@/content/board";
import { HeroSection } from "@/components/dranne/hero-section";
import { ThreeKeysTriptych } from "@/components/dranne/three-keys-triptych";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Reveal } from "@/components/dranne/reveal";

const BENEFIT_ICONS = [Unlock, Sparkles, InfinityIcon];

export const metadata: Metadata = {
  title: "Home",
  description:
    "The dr.Anne Association teaches portion control, movement and stress reduction through the MagicHand system — a nonprofit 501(c)(3) founded by epidemiologist Dr. Anne Seifert.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <section className="py-20 sm:py-24">
        <Reveal className="mx-auto grid max-w-5xl gap-8 px-4 sm:px-6 md:grid-cols-[auto_1fr] md:gap-12 lg:px-8">
          <p className="font-display text-2xl text-brand-red md:sticky md:top-28 md:self-start">
            Founded {org.foundingDateDisplay}
          </p>
          <p className="font-serif text-xl leading-[1.75] text-foreground first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-7xl first-letter:leading-[0.8] first-letter:text-brand-red">
            {org.aboutParagraph.value}
          </p>
        </Reveal>
      </section>

      <section aria-labelledby="mission-heading" className="bg-muted/30 py-20 sm:py-24">
        <Reveal className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 id="mission-heading" className="font-display text-3xl text-brand-red sm:text-4xl">
            Our Mission
          </h2>
          <p className="mt-6 font-serif text-2xl leading-relaxed text-foreground italic sm:text-3xl">
            &ldquo;{org.mission.value}&rdquo;
          </p>
        </Reveal>
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
            src="/assets/source/image5.png"
            alt="A facilitator assisting a participant during a dr.Anne plan session"
            fill
            className="object-cover object-[center_55%] transition-transform duration-500 motion-safe:group-hover:scale-105"
          />
          <span className="absolute inset-0 flex items-end bg-gradient-to-t from-black/65 via-black/15 to-transparent p-6">
            <span className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-brand-red-ink">
              See how it works
            </span>
          </span>
        </Link>
      </ContainerScroll>

      <section aria-labelledby="benefits-heading" className="bg-muted/30 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 id="benefits-heading" className="text-center font-display text-3xl text-brand-red sm:text-4xl">
              Benefits of the dr.Anne plan
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {benefits.map((column, index) => {
              const Icon = BENEFIT_ICONS[index];
              return (
                <Reveal key={column.heading} delay={index * 0.1}>
                  <div className="h-full rounded-2xl border border-border bg-background p-7 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_12px_28px_-12px_rgba(0,0,0,0.12)]">
                    <span className="inline-flex size-11 items-center justify-center rounded-full bg-brand-red-quiet text-brand-red">
                      <Icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold text-foreground">{column.heading}</h3>
                    <ul className="mt-3 space-y-2 text-muted-foreground">
                      {column.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-14 max-w-2xl text-center font-serif text-xl leading-relaxed text-foreground">
              {org.closingLine.value}
            </p>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="board-heading" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <Reveal className="flex items-center justify-between gap-4">
          <h2 id="board-heading" className="font-display text-3xl text-brand-red sm:text-4xl">
            Board of Directors
          </h2>
          <Link href="/about/board" className="text-sm font-medium text-brand-red hover:underline">
            Meet the full board
          </Link>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
          {board.map((member) => (
            <Link key={member.name} href="/about/board" className="group text-center">
              <div className="mx-auto aspect-[4/5] w-full max-w-[160px] overflow-hidden rounded-xl border border-border shadow-[0_1px_2px_rgba(0,0,0,0.04),0_10px_24px_-14px_rgba(0,0,0,0.16)]">
                <Image
                  src={member.photo}
                  alt={member.alt}
                  width={240}
                  height={300}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
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
