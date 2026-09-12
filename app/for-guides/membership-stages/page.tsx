import type { Metadata } from "next";
import { membershipStages, membershipForLife } from "@/content/membership";

export const metadata: Metadata = {
  title: "Membership Stages",
  description:
    "The three membership stages — Apprentice, CircleGuide and Point Mentor — and why membership after completing the nine Points is for life.",
};

export default function MembershipStagesPage() {
  return (
    <div>
      <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">Membership Stages</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Three stages describe how far along a CircleGuide is on the path — none of them are a
        pass/fail gate, and every stage is a fine place to be.
      </p>

      <ol className="mt-8 space-y-6">
        {membershipStages.map((stage) => (
          <li key={stage.id} className="flex gap-4 rounded-lg border border-border p-5">
            <span
              aria-hidden="true"
              className="flex size-9 shrink-0 items-center justify-center rounded-full bg-key-move/15 font-semibold text-key-move"
            >
              {stage.order}
            </span>
            <div>
              <p className="text-lg font-semibold text-foreground">{stage.name}</p>
              <p className="mt-1 max-w-2xl text-sm text-muted-foreground">{stage.description}</p>
            </div>
          </li>
        ))}
      </ol>

      <p className="mt-8 max-w-2xl rounded-lg border border-key-move/30 bg-key-move/5 p-5 text-foreground">
        {membershipForLife}
      </p>
    </div>
  );
}
