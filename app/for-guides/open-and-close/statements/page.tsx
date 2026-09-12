import type { Metadata } from "next";
import { Suspense } from "react";
import { openStatement, closeStatement } from "@/content/statements";
import { StatementsPdfDownload } from "@/components/dranne/statements-pdf-download";
import { GuideMode } from "@/components/dranne/guide-mode";

export const metadata: Metadata = {
  title: "Open & Close Statements",
  description:
    "The full Open and Close script every CircleGuide reads verbatim, a downloadable PDF, and Guide Mode — a distraction-free teleprompter with a 45-minute timer and breath pacer.",
};

export default function StatementsPage() {
  return (
    <div>
      <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">Open &amp; Close Statements</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Read verbatim at the start and end of every Point session, so every Practice Circle opens
        and closes the same way. Download it as a PDF, print this page, or use{" "}
        <a href="#guide-mode" className="font-medium text-key-move hover:underline">
          Guide Mode
        </a>{" "}
        below during a live session.
      </p>

      <div className="print:hidden mt-6 flex flex-wrap gap-3">
        <StatementsPdfDownload />
        <a
          href="#guide-mode"
          className="inline-flex items-center rounded-md border border-key-move px-4 py-2 text-sm font-semibold text-key-move hover:bg-key-move/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-key-move"
        >
          Jump to Guide Mode ↓
        </a>
      </div>

      {/* The verbatim script — this is the @media print fallback for
          browsers/situations where the PDF generator above doesn't run.
          Guide Mode's interactive controls are hidden from print entirely;
          this section is what prints. */}
      <section aria-labelledby="script-heading" className="mt-10 max-w-[60ch] font-serif text-foreground">
        <h2 id="script-heading" className="font-sans text-xl font-semibold text-key-move">
          Open
        </h2>
        <div className="mt-4 space-y-4 leading-relaxed">
          <p>{openStatement.welcome}</p>
          <p>{openStatement.insight}</p>
          <p>{openStatement.guideIntro}</p>
          <p>{openStatement.guidelines}</p>
          <p>{openStatement.questionsPrompt}</p>
          <p>{openStatement.reviewPrompt}</p>
          <p>{openStatement.handInstruction}</p>
          <p>{openStatement.callAndResponse}</p>
          <p>{openStatement.palmRule}</p>
          <p>{openStatement.chitAllowance}</p>
          <p className="font-semibold">{openStatement.todaysPoint}</p>
          <p>{openStatement.handoff}</p>
        </div>

        <h2 className="mt-10 font-sans text-xl font-semibold text-key-move">Close</h2>
        <div className="mt-4 space-y-4 leading-relaxed">
          <p className="italic text-muted-foreground">{closeStatement.timing}</p>
          <p>{closeStatement.markCompletion}</p>
          <p>{closeStatement.visualize}</p>
          <p className="font-semibold">&ldquo;{closeStatement.affirmation}&rdquo;</p>
          <p>{closeStatement.breathingSetup}</p>
          <p>{closeStatement.breathingIntro}</p>
          <ol className="list-decimal space-y-2 pl-6">
            {closeStatement.breaths.map((breath) => (
              <li key={breath.count}>
                {breath.inhale} {breath.exhale}
              </li>
            ))}
          </ol>
          <p>{closeStatement.nextSession}</p>
          <p>{closeStatement.volunteerPrompt}</p>
          <p className="font-semibold">{closeStatement.thanks}</p>
        </div>
      </section>

      {/* Guide Mode — hidden entirely from print; it's a live-session tool. */}
      <section id="guide-mode" aria-labelledby="guide-mode-heading" className="print:hidden mt-14 scroll-mt-24 border-t border-border pt-10">
        <h2 id="guide-mode-heading" className="text-2xl font-semibold text-foreground">
          Guide Mode
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          A distraction-free teleprompter for running a live Point session: adjustable text size, a
          45-minute session timer with a five-minute close warning, a Point selector that fills in
          the blanks above, and an animated three-breath pacer for the closing exercise.
        </p>
        <div className="mt-6">
          <Suspense
            fallback={
              <p className="rounded-md border border-border p-4 text-sm text-muted-foreground">
                Loading Guide Mode…
              </p>
            }
          >
            <GuideMode />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
