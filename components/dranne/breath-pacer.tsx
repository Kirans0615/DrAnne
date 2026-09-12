"use client";

import { useEffect, useRef, useState } from "react";
import { closeStatement } from "@/content/statements";
import { cn } from "cn";

/**
 * The animated three-breath pacer for the Close statement's closing
 * exercise (build prompt §10.12 / §11.7). The decorative circle only
 * scales under `motion-safe:` variants, so under `prefers-reduced-motion:
 * reduce` it never animates or resizes at all — the pacer becomes a plain
 * `aria-live` text readout ("Inhale…" / "Exhale…") on the same timing,
 * which is the real instruction, not a supplement to the animation.
 */

type Phase = "idle" | "inhale" | "exhale" | "done";

const PHASE_MS = 4000;

export function BreathPacer() {
  const [running, setRunning] = useState(false);
  const [breathIndex, setBreathIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("idle");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const breaths = closeStatement.breaths;
  const currentBreath = breaths[breathIndex];

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (!running || phase === "idle" || phase === "done") return undefined;
    timeoutRef.current = setTimeout(() => {
      if (phase === "inhale") {
        setPhase("exhale");
        return;
      }
      if (breathIndex + 1 < breaths.length) {
        setBreathIndex((i) => i + 1);
        setPhase("inhale");
      } else {
        setPhase("done");
        setRunning(false);
      }
    }, PHASE_MS);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [running, phase, breathIndex, breaths.length]);

  function start() {
    setBreathIndex(0);
    setPhase("inhale");
    setRunning(true);
  }

  function stop() {
    setRunning(false);
    setPhase("idle");
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }

  const phaseText =
    phase === "inhale"
      ? currentBreath.inhale
      : phase === "exhale"
        ? currentBreath.exhale
        : phase === "done"
          ? "Breathing exercise complete."
          : "Press Start to begin the three-breath pacer, paced with the Close statement.";

  return (
    <div className="rounded-lg border border-key-silence/30 bg-key-silence/5 p-5">
      <h3 className="text-base font-semibold text-foreground">Three-breath pacer</h3>
      <p className="mt-1 max-w-xl text-sm text-muted-foreground">{closeStatement.breathingIntro}</p>

      <div className="mt-5 flex items-center gap-6">
        <div aria-hidden="true" className="relative flex size-20 shrink-0 items-center justify-center overflow-visible">
          <span
            className={cn(
              "absolute inline-block size-14 rounded-full bg-key-silence/25 motion-safe:transition-transform motion-safe:ease-in-out",
              phase === "inhale" && "motion-safe:scale-150",
              phase === "exhale" && "motion-safe:scale-75"
            )}
            style={{ transitionDuration: `${PHASE_MS}ms` }}
          />
          <span className="relative size-9 rounded-full bg-key-silence" />
        </div>

        <div className="min-w-0 flex-1">
          <p aria-live="assertive" className="min-h-[2.75rem] text-lg font-medium text-foreground">
            {phaseText}
          </p>
          {running && phase !== "done" && (
            <p className="mt-1 text-xs text-muted-foreground">
              Breath {breathIndex + 1} of {breaths.length}
            </p>
          )}
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        {!running && phase !== "done" && (
          <button
            type="button"
            onClick={start}
            className="rounded-md bg-key-silence px-4 py-2 text-sm font-semibold text-white hover:bg-key-silence/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-key-silence"
          >
            Start breathing pacer
          </button>
        )}
        {running && (
          <button
            type="button"
            onClick={stop}
            className="rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-key-silence"
          >
            Stop
          </button>
        )}
        {phase === "done" && (
          <button
            type="button"
            onClick={start}
            className="rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-key-silence"
          >
            Run again
          </button>
        )}
      </div>

      <p className="mt-4 max-w-xl text-xs text-muted-foreground">
        The circle above is decorative and only moves when motion is not reduced. The words
        &ldquo;Inhale&rdquo; and &ldquo;Exhale&rdquo; above are the real instruction, announced live on the
        same four-second timing, so this works fully for screen readers and with reduced motion
        turned on.
      </p>
    </div>
  );
}
