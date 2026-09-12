import type { Metadata } from "next";
import {
  startCircleIntro,
  startCircleFormatNote,
  materialsSection,
  findAPlaceNote,
  pointMentorNote,
} from "@/content/for-guides";
import {
  minimumParticipants,
  threeLinkingRings,
  teamAcronym,
  getGuideGrow,
} from "@/content/membership";
import { registryAgreement, registryWarning } from "@/content/circles";
import { emailAddresses } from "@/content/org";

export const metadata: Metadata = {
  title: "Start a Practice Circle",
  description:
    "Hands-on support for starting a Practice Circle: materials, the minimum three people, the Three Linking Rings, T-E-A-M, and how to Get, Guide and Grow your Circle.",
};

export default function StartACirclePage() {
  return (
    <div>
      <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">Start a Practice Circle</h1>
      <p className="mt-2 text-sm font-medium text-key-move">Hands-On Continuing Support</p>

      <p className="mt-6 max-w-2xl text-foreground">{startCircleIntro.value}</p>
      <p className="mt-4 max-w-2xl text-muted-foreground">{startCircleFormatNote.value}</p>

      <section aria-labelledby="materials-heading" className="mt-10">
        <h2 id="materials-heading" className="text-xl font-semibold text-foreground">
          Materials
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">{materialsSection.value}</p>
      </section>

      <section aria-labelledby="starting-heading" className="mt-10">
        <h2 id="starting-heading" className="text-xl font-semibold text-foreground">
          Starting a Practice Circle
        </h2>
        <p className="mt-3 max-w-2xl text-foreground">
          You will need at least <strong>{minimumParticipants} people</strong> to begin. Circles can
          be any size and meetings can be held wherever space, and whenever time, permits.
        </p>

        <h3 className="mt-6 text-lg font-semibold text-foreground">The Three Linking Rings</h3>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          We recommend each Practice Circle create these three roles to keep the Circle running
          smoothly.
        </p>
        <ul className="mt-4 grid gap-4 sm:grid-cols-3">
          {threeLinkingRings.map((ring) => (
            <li key={ring.name} className="rounded-lg border border-border p-4">
              <p className="font-semibold text-foreground">{ring.name}</p>
              <p className="mt-1 text-sm text-muted-foreground">{ring.description}</p>
            </li>
          ))}
        </ul>

        <h3 className="mt-8 text-lg font-semibold text-foreground">T-E-A-M</h3>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Every Circle forms a T-E-A-M — a basic minimum needed to begin.
        </p>
        <ul className="mt-4 grid gap-4 sm:grid-cols-2">
          {teamAcronym.map((item) => (
            <li key={item.letter} className="flex gap-3 rounded-lg border border-border p-4">
              <span
                aria-hidden="true"
                className="flex size-9 shrink-0 items-center justify-center rounded-full bg-key-move/15 font-semibold text-key-move"
              >
                {item.letter}
              </span>
              <div>
                <p className="font-semibold text-foreground">{item.label}</p>
                <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-6 max-w-2xl text-muted-foreground">{findAPlaceNote.value}</p>
      </section>

      <section aria-labelledby="get-guide-grow-heading" className="mt-10">
        <h2 id="get-guide-grow-heading" className="text-xl font-semibold text-foreground">
          Get, Guide and Grow
        </h2>
        <div className="mt-4 space-y-6">
          <div>
            <h3 className="text-base font-semibold text-foreground">Get</h3>
            <p className="mt-1 max-w-2xl text-sm text-muted-foreground">{getGuideGrow.get}</p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-foreground">Guide</h3>
            <p className="mt-1 max-w-2xl text-sm text-muted-foreground">{getGuideGrow.guide}</p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-foreground">Grow</h3>
            <p className="mt-1 max-w-2xl text-sm text-muted-foreground">{getGuideGrow.grow}</p>
          </div>
        </div>

        <p className="mt-6 max-w-2xl rounded-lg border border-key-move/30 bg-key-move/5 p-4 text-sm text-foreground">
          {pointMentorNote.value}
        </p>
      </section>

      <section aria-labelledby="registering-heading" className="mt-10 border-t border-border pt-8">
        <h2 id="registering-heading" className="text-xl font-semibold text-foreground">
          Registering your Circle
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
          Listing your Circle with The Registry means agreeing to a few basic commitments:
        </p>
        <ul className="mt-3 max-w-2xl list-disc space-y-1 pl-5 text-sm text-muted-foreground">
          {registryAgreement.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-4 max-w-2xl text-sm text-muted-foreground">{registryWarning}</p>
        <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
          To register a Circle, email{" "}
          <a href={`mailto:${emailAddresses.team}`} className="font-medium text-key-move hover:underline">
            {emailAddresses.team}
          </a>{" "}
          — new Circles are added to The Registry by hand.
        </p>
      </section>
    </div>
  );
}
