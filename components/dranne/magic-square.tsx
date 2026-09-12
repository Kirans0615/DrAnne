"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { ninePointStructure, keys, type KeyId } from "@/content/keys";
import { membershipForLife } from "@/content/membership";
import { MagicSquareCardDocument } from "@/components/dranne/magic-square-pdf";
import { cn } from "cn";

/**
 * The MagicSquare Learning Wheel (build prompt §11.5) — referenced
 * constantly across both legacy sites and never once shown there. This is
 * the real thing: a nine-wedge SVG-styled wheel (one wedge per Point,
 * grouped 3-3-3 under the three Keys per content/keys.ts), fillable
 * in-browser, card-sized, and downloadable as a real PDF via
 * @react-pdf/renderer (see ./magic-square-pdf.tsx).
 *
 * Wedge progress is in-memory only — this component is a demonstration of
 * the card, not a membership record system; real persistence is a later
 * workstream's job via the Registry/D1 system.
 *
 * PDFDownloadLink touches browser-only APIs (Blob/URL), so it is loaded via
 * next/dynamic with ssr:false — the standard safe pattern for
 * @react-pdf/renderer inside a Next.js App Router client component.
 */

const PDFDownloadLink = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFDownloadLink),
  {
    ssr: false,
    loading: () => (
      <span className="inline-flex items-center rounded-md border border-border px-4 py-2 text-sm text-muted-foreground">
        Preparing download…
      </span>
    ),
  }
);

const KEY_BG_CLASSES: Record<KeyId, string> = {
  apportion: "bg-key-apportion",
  move: "bg-key-move",
  silence: "bg-key-silence",
};

// Flatten the 3-per-Key structure into 9 ordered (key, pointNumber) pairs —
// no individual Point names are attested in source material, so each wedge
// is labelled only "Point N", grouped under its Key.
const POINTS: Array<{ key: KeyId; pointNumber: number }> = ninePointStructure.flatMap((group, groupIndex) =>
  Array.from({ length: group.count }, (_, i) => ({
    key: group.key,
    pointNumber: groupIndex * group.count + i + 1,
  }))
);

const TOTAL = POINTS.length; // 9

/** A CSS clip-path pie-slice polygon for wedge `index` of `total`, approximating
 * the wedge's arc with straight segments (clip-path has no true arc command). */
function wedgeClipPath(index: number, total: number, arcSteps = 10): string {
  const startAngle = (index / total) * 360 - 90;
  const endAngle = ((index + 1) / total) * 360 - 90;
  const points = ["50% 50%"];
  for (let step = 0; step <= arcSteps; step += 1) {
    const angle = startAngle + ((endAngle - startAngle) * step) / arcSteps;
    const rad = (angle * Math.PI) / 180;
    const x = 50 + 50 * Math.cos(rad);
    const y = 50 + 50 * Math.sin(rad);
    points.push(`${x.toFixed(2)}% ${y.toFixed(2)}%`);
  }
  return `polygon(${points.join(", ")})`;
}

function wedgeLabelPosition(index: number, total: number): { left: string; top: string } {
  const midAngle = ((index + 0.5) / total) * 360 - 90;
  const rad = (midAngle * Math.PI) / 180;
  const radius = 34; // percent from center — inside the ring, outside the hub
  return { left: `${50 + radius * Math.cos(rad)}%`, top: `${50 + radius * Math.sin(rad)}%` };
}

export function MagicSquare() {
  const [completed, setCompleted] = useState<boolean[]>(() => Array(TOTAL).fill(false));
  const completedCount = completed.filter(Boolean).length;
  const isLifetimeMember = completedCount === TOTAL;

  function toggle(index: number) {
    setCompleted((current) => current.map((value, i) => (i === index ? !value : value)));
  }

  function reset() {
    setCompleted(Array(TOTAL).fill(false));
  }

  return (
    <section aria-labelledby="magic-square-heading" className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h2 id="magic-square-heading" className="font-display text-3xl text-brand-red sm:text-4xl">
        The MagicSquare Learning Wheel
      </h2>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        Nine wedges, one for each Point of the dr.Anne plan, grouped under Apportion, Move and Silence.
        Tap a wedge as you complete its Point — this wheel is both an achievement record and the Member
        card for attending Practice Circles.
      </p>
      <p className="mt-2 max-w-2xl text-muted-foreground">{membershipForLife}</p>

      <div className="mt-10 grid gap-10 sm:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] sm:items-center">
        <div className="relative mx-auto aspect-square w-full max-w-xs" role="group" aria-label="MagicSquare Learning Wheel — nine Points">
          <div aria-hidden="true" className="absolute inset-0 rounded-full border border-border" />
          {POINTS.map((point, index) => {
            const completedHere = completed[index];
            const labelPosition = wedgeLabelPosition(index, TOTAL);
            return (
              <button
                key={point.pointNumber}
                type="button"
                aria-pressed={completedHere}
                aria-label={`Point ${point.pointNumber} of ${TOTAL} (${keys[point.key].label}) — ${
                  completedHere ? "complete, tap to mark incomplete" : "not complete, tap to mark complete"
                }`}
                onClick={() => toggle(index)}
                className={cn(
                  "absolute inset-0 transition-colors motion-reduce:transition-none focus-visible:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-brand-red",
                  completedHere ? KEY_BG_CLASSES[point.key] : "bg-muted hover:bg-accent"
                )}
                style={{ clipPath: wedgeClipPath(index, TOTAL) }}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute -translate-x-1/2 -translate-y-1/2 text-sm font-semibold",
                    completedHere ? "text-white" : "text-muted-foreground"
                  )}
                  style={{ left: labelPosition.left, top: labelPosition.top }}
                >
                  {point.pointNumber}
                </span>
              </button>
            );
          })}
          <div
            aria-hidden="true"
            className="absolute inset-[34%] flex items-center justify-center rounded-full border border-border bg-background text-center"
          >
            <span className="font-display text-sm text-brand-red">dr.Anne</span>
          </div>
        </div>

        <div>
          <p className="text-lg font-semibold text-foreground">
            {completedCount} of {TOTAL} Points complete
          </p>
          {isLifetimeMember && (
            <p role="status" className="mt-2 text-sm font-medium text-key-move">
              All nine Points are complete — membership in the Association is for life.
            </p>
          )}

          <div className="mt-6 flex flex-wrap gap-3">
            <PDFDownloadLink
              document={<MagicSquareCardDocument completed={completed} />}
              fileName="dranne-magicsquare-member-card.pdf"
              className="inline-flex items-center rounded-md bg-brand-red px-4 py-2 text-sm font-semibold text-white hover:bg-brand-red/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
            >
              {({ loading }) => (loading ? "Preparing PDF…" : "Download as PDF")}
            </PDFDownloadLink>
            <button
              type="button"
              onClick={reset}
              className="rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-red"
            >
              Reset (demo)
            </button>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            This wheel&rsquo;s progress is a demonstration only, held in this browser tab; it is not a
            record of a real membership.
          </p>
        </div>
      </div>
    </section>
  );
}
