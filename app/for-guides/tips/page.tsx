import type { Metadata } from "next";
import { tipsInvitation } from "@/content/pages";
import { emailAddresses } from "@/content/org";

export const metadata: Metadata = {
  title: "Tips",
  description:
    "Practical tips from participants in the dr.Anne plan — an honest empty state for now, and how to send in your own by email.",
};

export default function TipsPage() {
  return (
    <div>
      <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">Tips</h1>

      <p className="mt-4 max-w-2xl text-foreground">{tipsInvitation.value}</p>

      <div className="mt-8 rounded-lg border border-dashed border-border bg-muted/30 p-6">
        <p className="text-sm font-medium text-foreground">No tips have been submitted yet.</p>
        <p className="mt-2 max-w-xl text-sm text-muted-foreground">
          This is an honest empty state, not a placeholder — there is no submission form on this
          static site. When the first tip arrives by email, it will be added here by hand.
        </p>
        <a
          href={`mailto:${emailAddresses.team}`}
          className="mt-4 inline-flex items-center rounded-md bg-key-move px-4 py-2 text-sm font-semibold text-white hover:bg-key-move/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-key-move"
        >
          Email your tip to {emailAddresses.team}
        </a>
      </div>
    </div>
  );
}
