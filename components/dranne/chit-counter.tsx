"use client";

import { useId, useState } from "react";
import { chitRules } from "@/content/magichand";
import { cn } from "cn";

/**
 * The Chit Counter (build prompt §11.4). Twelve palm chits + three thumb
 * chits, plus a vegetables field that is explicitly outside the 15-chit
 * budget. Tap a chit to spend it, tap again to give it back.
 *
 * Critical constraint, honored literally: in-memory React state only.
 * Nothing here reads or writes localStorage/sessionStorage, and nothing is
 * sent to a server — there is no persistence of anyone's food intake, ever.
 * A "Start a new day" button resets the in-memory state and surfaces the
 * no-carry-over rule; it does not track real days or dates.
 */

const PALM_COUNT = chitRules.palmPortions; // 12
const THUMB_COUNT = chitRules.thumbPortions; // 3
const TOTAL = chitRules.totalChits; // 15

type ChitButtonProps = {
  spent: boolean;
  label: string;
  onToggle: () => void;
};

function ChitButton({ spent, label, onToggle }: ChitButtonProps) {
  return (
    <button
      type="button"
      aria-pressed={spent}
      aria-label={`${label}, ${spent ? "used — tap to give it back" : "available — tap to spend it"}`}
      onClick={onToggle}
      className={cn(
        "flex size-10 items-center justify-center rounded-full border-2 text-xs font-semibold transition-colors motion-reduce:transition-none",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red",
        spent
          ? "border-key-apportion bg-key-apportion text-white"
          : "border-border bg-card text-muted-foreground hover:border-key-apportion"
      )}
    >
      <span aria-hidden="true">{spent ? "✓" : ""}</span>
    </button>
  );
}

export function ChitCounter() {
  const [palmSpent, setPalmSpent] = useState<boolean[]>(() => Array(PALM_COUNT).fill(false));
  const [thumbSpent, setThumbSpent] = useState<boolean[]>(() => Array(THUMB_COUNT).fill(false));
  const [dayCount, setDayCount] = useState(1);
  const liveRegionId = useId();

  const spentCount = palmSpent.filter(Boolean).length + thumbSpent.filter(Boolean).length;
  const remaining = TOTAL - spentCount;
  const allSpent = spentCount === TOTAL;

  function togglePalm(index: number) {
    setPalmSpent((current) => current.map((value, i) => (i === index ? !value : value)));
  }

  function toggleThumb(index: number) {
    setThumbSpent((current) => current.map((value, i) => (i === index ? !value : value)));
  }

  function startNewDay() {
    setPalmSpent(Array(PALM_COUNT).fill(false));
    setThumbSpent(Array(THUMB_COUNT).fill(false));
    setDayCount((count) => count + 1);
  }

  return (
    <section aria-labelledby="chit-counter-heading" className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h2 id="chit-counter-heading" className="font-display text-3xl text-brand-red sm:text-4xl">
        The Chit Counter
      </h2>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        This is a demonstration tool, not a food log or medical advice. Nothing you tap here is saved —
        it lives only in this browser tab and disappears the moment you leave the page.
      </p>

      <div className="mt-8 rounded-2xl border border-border bg-card p-6">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <p className="text-lg font-semibold text-foreground">Day {dayCount}</p>
          <p id={liveRegionId} aria-live="polite" className="text-sm text-muted-foreground">
            {remaining} of {TOTAL} chits remaining
          </p>
        </div>

        <div className="mt-6">
          <h3 className="text-sm font-semibold text-foreground">Palm portions ({PALM_COUNT})</h3>
          <p className="mt-1 text-xs text-muted-foreground">Milk and Dairy, Fruit, Carbohydrate, Protein</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {palmSpent.map((spent, index) => (
              <ChitButton
                key={index}
                spent={spent}
                label={`Palm portion ${index + 1} of ${PALM_COUNT}`}
                onToggle={() => togglePalm(index)}
              />
            ))}
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-sm font-semibold text-foreground">Thumb portions ({THUMB_COUNT})</h3>
          <p className="mt-1 text-xs text-muted-foreground">Oils and Fats, to the first knuckle joint</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {thumbSpent.map((spent, index) => (
              <ChitButton
                key={index}
                spent={spent}
                label={`Thumb portion ${index + 1} of ${THUMB_COUNT}`}
                onToggle={() => toggleThumb(index)}
              />
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-key-silence/40 bg-key-silence/10 p-4">
          <h3 className="text-sm font-semibold text-foreground">Vegetables</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {chitRules.vegetables}, always — vegetables are never part of the 15-chit budget. Water is{" "}
            {chitRules.water}, too.
          </p>
        </div>

        {allSpent && (
          <p
            role="status"
            className="mt-6 rounded-xl border border-key-move/40 bg-key-move/10 p-4 text-sm font-medium text-foreground"
          >
            All 15 chits are spent for today — that&rsquo;s a full, balanced day on the plan. Nothing more
            to track, nothing to feel bad about either way.
          </p>
        )}

        <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-border pt-6">
          <button
            type="button"
            onClick={startNewDay}
            className="rounded-md bg-brand-red px-4 py-2 text-sm font-semibold text-white hover:bg-brand-red/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
          >
            Start a new day
          </button>
          <p className="max-w-sm text-xs text-muted-foreground">{chitRules.noCarryOver.value}</p>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">{chitRules.noCompensating.value}</p>
      </div>
    </section>
  );
}
