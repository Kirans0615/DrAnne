"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ninePointStructure, keys, type KeyId } from "@/content/keys";
import { cn } from "cn";

/**
 * The Nine Points path (build prompt §11.6). Groups the nine Points under
 * their three Keys with a scroll-tracked progress state, and accepts an
 * optional `guideModeHref` so a later workstream can link each Point into
 * Guide Mode without this component hardcoding — or breaking — that route.
 *
 * No individual Point names are attested in source material (only the
 * per-Key count in content/keys.ts), so Points render as "Point N of 9",
 * never invented titles.
 */

export type NinePointsPathProps = {
  /**
   * Build the Guide Mode link for a given Point (1-9). Guide Mode is a
   * separate workstream; the default targets the route already planned for
   * it in the IA (build prompt §9, `/for-guides/open-and-close/statements`)
   * so this ships with a sensible, adjustable href rather than a broken one.
   */
  guideModeHref?: (pointNumber: number) => string;
};

const defaultGuideModeHref = (pointNumber: number) =>
  `/for-guides/open-and-close/statements?point=${pointNumber}`;

const KEY_TEXT_CLASSES: Record<KeyId, string> = {
  apportion: "text-key-apportion",
  move: "text-key-move",
  silence: "text-key-silence",
};

const KEY_BG_CLASSES: Record<KeyId, string> = {
  apportion: "bg-key-apportion",
  move: "bg-key-move",
  silence: "bg-key-silence",
};

const POINTS: Array<{ key: KeyId; pointNumber: number }> = ninePointStructure.flatMap((group, groupIndex) =>
  Array.from({ length: group.count }, (_, i) => ({
    key: group.key,
    pointNumber: groupIndex * group.count + i + 1,
  }))
);

const TOTAL = POINTS.length; // 9

export function NinePointsPath({ guideModeHref = defaultGuideModeHref }: NinePointsPathProps) {
  const [activePoint, setActivePoint] = useState(1);
  const itemRefs = useRef<Map<number, HTMLLIElement>>(new Map());
  const distances = useRef<Map<number, number>>(new Map());

  useEffect(() => {
    const elements = Array.from(itemRefs.current.values());
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const pointNumber = Number(entry.target.getAttribute("data-point-number"));
          if (!pointNumber) continue;
          if (entry.isIntersecting) {
            const center = entry.boundingClientRect.top + entry.boundingClientRect.height / 2;
            distances.current.set(pointNumber, Math.abs(center - window.innerHeight / 2));
          } else {
            distances.current.delete(pointNumber);
          }
        }
        let closestPoint: number | null = null;
        let closestDistance = Infinity;
        distances.current.forEach((distance, pointNumber) => {
          if (distance < closestDistance) {
            closestDistance = distance;
            closestPoint = pointNumber;
          }
        });
        if (closestPoint !== null) setActivePoint(closestPoint);
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section aria-labelledby="nine-points-path-heading" className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h2 id="nine-points-path-heading" className="font-display text-3xl text-brand-red sm:text-4xl">
        The Nine Points
      </h2>
      <p className="mt-3 text-muted-foreground">
        The nine Points of the dr.Anne plan, three under each of the three Keys.
      </p>
      {/* Progress is a screen-reader-only announcement plus a decorative dot
          rail — every Point is always in the DOM below regardless of scroll
          position, so nothing here gates content on JS or motion. */}
      <p aria-live="polite" className="sr-only">
        Currently viewing Point {activePoint} of {TOTAL}
      </p>
      <div
        aria-hidden="true"
        className="sticky top-4 z-10 mt-6 flex justify-center gap-2 rounded-full border border-border bg-background/90 px-4 py-2 backdrop-blur"
      >
        {POINTS.map((point) => (
          <span
            key={point.pointNumber}
            className={cn(
              "size-2.5 rounded-full transition-colors motion-reduce:transition-none",
              point.pointNumber === activePoint ? KEY_BG_CLASSES[point.key] : "bg-border"
            )}
          />
        ))}
      </div>

      {(Object.keys(keys) as KeyId[]).map((keyId) => (
        <div key={keyId} className="mt-12">
          <h3 className={cn("text-xl font-semibold", KEY_TEXT_CLASSES[keyId])}>{keys[keyId].label}</h3>
          <ol className="mt-4 space-y-4">
            {POINTS.filter((point) => point.key === keyId).map((point) => (
              <li
                key={point.pointNumber}
                data-point-number={point.pointNumber}
                ref={(el) => {
                  if (el) itemRefs.current.set(point.pointNumber, el);
                  else itemRefs.current.delete(point.pointNumber);
                }}
                className={cn(
                  "flex flex-wrap items-center justify-between gap-3 rounded-xl border p-4 transition-colors motion-reduce:transition-none",
                  point.pointNumber === activePoint ? "border-brand-red bg-brand-red-quiet" : "border-border"
                )}
              >
                <span className="font-medium text-foreground">Point {point.pointNumber} of {TOTAL}</span>
                <Link
                  href={guideModeHref(point.pointNumber)}
                  className="rounded text-sm font-medium text-brand-red hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-red"
                >
                  Open in Guide Mode →
                </Link>
              </li>
            ))}
          </ol>
        </div>
      ))}
    </section>
  );
}
