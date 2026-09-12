import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { org } from "@/content/org";
import { benefits } from "@/content/benefits";
import { keys, keysSource } from "@/content/keys";
import { board } from "@/content/board";

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

      <section aria-labelledby="keys-heading" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 id="keys-heading" className="font-display text-center text-3xl text-brand-red">
          The Three Keys
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">{keysSource.value}</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {(Object.entries(keys) as Array<[keyof typeof keys, (typeof keys)[keyof typeof keys]]>).map(
            ([id, key]) => (
              <div
                key={id}
                className="rounded-xl border border-border p-6 text-center"
                style={{ borderTopWidth: "4px", borderTopColor: key.color }}
              >
                <h3 className="text-xl font-semibold" style={{ color: key.color }}>
                  {key.label}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{key.description}</p>
              </div>
            )
          )}
        </div>
      </section>

      {/* ContainerScroll reveal (build prompt §7.2 / §11) lands here once the
          component-library workstream ships components/ui/container-scroll-animation.tsx.
          Placeholder image in the meantime so the section isn't empty. */}
      <section aria-label="The dr.Anne plan in practice" className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-border">
          <Image
            src="/assets/source/About-1536x681.png"
            alt="A copy of the dr.Anne plan book resting on a desk"
            width={1536}
            height={681}
            className="h-auto w-full object-cover"
          />
        </div>
      </section>

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
