"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { openStatement, closeStatement } from "@/content/statements";
import { BreathPacer } from "@/components/dranne/breath-pacer";
import { cn } from "cn";

/**
 * Guide Mode — the distraction-free teleprompter for a live Point session
 * (build prompt §10.12 / §11.7). Reads `?point=` from the URL (wired up by
 * NinePointsPath's `guideModeHref`) to pre-select the Point being covered;
 * falls back to a manual picker when the param is absent or out of range.
 *
 * Renders inside a <Suspense> boundary in the page (useSearchParams
 * requires one for static export/prerendering).
 */

const SESSION_SECONDS = 45 * 60;
const CLOSE_WARNING_SECONDS = 5 * 60;

type FontSize = "small" | "medium" | "large";

const FONT_SIZE_CLASSES: Record<FontSize, string> = {
  small: "text-base",
  medium: "text-xl",
  large: "text-3xl",
};

function formatTime(totalSeconds: number): string {
  const clamped = Math.max(0, totalSeconds);
  const minutes = Math.floor(clamped / 60);
  const seconds = clamped % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

function fillBlank(text: string, search: string, value: string): string {
  return value ? text.replace(search, value) : text;
}

export function GuideMode() {
  const searchParams = useSearchParams();
  const pointFromQuery = Number(searchParams.get("point"));
  const initialPoint = pointFromQuery >= 1 && pointFromQuery <= 9 ? pointFromQuery : 1;

  const [pointNumber, setPointNumber] = useState(initialPoint);
  const [pointName, setPointName] = useState("");
  const [circleName, setCircleName] = useState("");
  const [guideName, setGuideName] = useState("");
  const [fontSize, setFontSize] = useState<FontSize>("medium");

  const [remainingSeconds, setRemainingSeconds] = useState(SESSION_SECONDS);
  const [timerRunning, setTimerRunning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const hasAnnouncedCloseWarning = useRef(false);

  useEffect(() => {
    if (!timerRunning) return undefined;
    intervalRef.current = setInterval(() => {
      setRemainingSeconds((current) => {
        if (current <= 1) {
          setTimerRunning(false);
          return 0;
        }
        return current - 1;
      });
    }, 1000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [timerRunning]);

  const showCloseWarning = remainingSeconds > 0 && remainingSeconds <= CLOSE_WARNING_SECONDS;

  useEffect(() => {
    if (showCloseWarning) hasAnnouncedCloseWarning.current = true;
    if (remainingSeconds === SESSION_SECONDS) hasAnnouncedCloseWarning.current = false;
  }, [showCloseWarning, remainingSeconds]);

  function startTimer() {
    setTimerRunning(true);
  }
  function pauseTimer() {
    setTimerRunning(false);
  }
  function resetTimer() {
    setTimerRunning(false);
    setRemainingSeconds(SESSION_SECONDS);
    hasAnnouncedCloseWarning.current = false;
  }

  const filledWelcome = useMemo(
    () => fillBlank(openStatement.welcome, "______________", circleName),
    [circleName]
  );
  const filledGuideIntro = useMemo(
    () => fillBlank(openStatement.guideIntro, "_________", guideName),
    [guideName]
  );
  const filledTodaysPoint = useMemo(() => {
    const withNumber = openStatement.todaysPoint.replace("___", String(pointNumber));
    return fillBlank(withNumber, "___________", pointName);
  }, [pointNumber, pointName]);
  const filledHandoff = useMemo(
    () => openStatement.handoff.replace("___", String(pointNumber)),
    [pointNumber]
  );
  const filledMarkCompletion = useMemo(
    () => closeStatement.markCompletion.replace("___", String(pointNumber)),
    [pointNumber]
  );

  const teleprompterTextClass = cn("leading-relaxed", FONT_SIZE_CLASSES[fontSize]);

  return (
    <div className="rounded-xl border border-key-move/30 bg-background">
      {/* Controls toolbar — kept outside the scrolling teleprompter text so it
          never gets lost as the Guide scrolls through the script. */}
      <div className="flex flex-col gap-4 border-b border-key-move/30 bg-key-move/5 p-4 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between">
        <div className="flex flex-wrap items-end gap-4">
          <div>
            <label htmlFor="guide-mode-point" className="block text-xs font-medium text-muted-foreground">
              Point
            </label>
            <select
              id="guide-mode-point"
              value={pointNumber}
              onChange={(event) => setPointNumber(Number(event.target.value))}
              className="mt-1 rounded-md border border-border bg-background px-2 py-1.5 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-key-move"
            >
              {Array.from({ length: 9 }, (_, i) => i + 1).map((n) => (
                <option key={n} value={n}>
                  Point {n} of 9
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="guide-mode-point-name" className="block text-xs font-medium text-muted-foreground">
              Point name (optional)
            </label>
            <input
              id="guide-mode-point-name"
              type="text"
              value={pointName}
              onChange={(event) => setPointName(event.target.value)}
              placeholder="e.g. Portion Awareness"
              className="mt-1 w-44 rounded-md border border-border bg-background px-2 py-1.5 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-key-move"
            />
          </div>
          <div>
            <label htmlFor="guide-mode-circle-name" className="block text-xs font-medium text-muted-foreground">
              Circle name (optional)
            </label>
            <input
              id="guide-mode-circle-name"
              type="text"
              value={circleName}
              onChange={(event) => setCircleName(event.target.value)}
              placeholder="e.g. Seal Beach Tuesday"
              className="mt-1 w-44 rounded-md border border-border bg-background px-2 py-1.5 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-key-move"
            />
          </div>
          <div>
            <label htmlFor="guide-mode-guide-name" className="block text-xs font-medium text-muted-foreground">
              Your name (optional)
            </label>
            <input
              id="guide-mode-guide-name"
              type="text"
              value={guideName}
              onChange={(event) => setGuideName(event.target.value)}
              placeholder="e.g. Jordan"
              className="mt-1 w-36 rounded-md border border-border bg-background px-2 py-1.5 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-key-move"
            />
          </div>
        </div>

        <div className="flex items-end gap-4">
          <fieldset>
            <legend className="text-xs font-medium text-muted-foreground">Text size</legend>
            <div className="mt-1 flex gap-1">
              {(["small", "medium", "large"] as const).map((size) => (
                <button
                  key={size}
                  type="button"
                  aria-pressed={fontSize === size}
                  onClick={() => setFontSize(size)}
                  className={cn(
                    "rounded-md border px-2.5 py-1.5 text-xs font-medium capitalize focus-visible:outline focus-visible:outline-2 focus-visible:outline-key-move",
                    fontSize === size
                      ? "border-key-move bg-key-move text-white"
                      : "border-border text-muted-foreground hover:bg-accent"
                  )}
                >
                  {size}
                </button>
              ))}
            </div>
          </fieldset>
        </div>
      </div>

      {/* Session timer */}
      <div className="flex flex-wrap items-center gap-4 border-b border-key-move/30 p-4">
        <p className="text-sm font-medium text-muted-foreground">Session timer</p>
        <p
          role="timer"
          aria-live={showCloseWarning ? "assertive" : "off"}
          className={cn(
            "font-mono text-2xl font-semibold tabular-nums",
            showCloseWarning ? "text-key-move" : "text-foreground"
          )}
        >
          {formatTime(remainingSeconds)}
        </p>
        <div className="flex gap-2">
          {!timerRunning && remainingSeconds > 0 && (
            <button
              type="button"
              onClick={startTimer}
              className="rounded-md bg-key-move px-3 py-1.5 text-xs font-semibold text-white hover:bg-key-move/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-key-move"
            >
              {remainingSeconds === SESSION_SECONDS ? "Start" : "Resume"}
            </button>
          )}
          {timerRunning && (
            <button
              type="button"
              onClick={pauseTimer}
              className="rounded-md border border-border px-3 py-1.5 text-xs font-medium hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-key-move"
            >
              Pause
            </button>
          )}
          <button
            type="button"
            onClick={resetTimer}
            className="rounded-md border border-border px-3 py-1.5 text-xs font-medium hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-key-move"
          >
            Reset (45:00)
          </button>
        </div>
        {showCloseWarning && (
          <p role="status" className="w-full rounded-md border border-key-move bg-key-move/10 px-3 py-2 text-sm font-medium text-foreground">
            Five minutes remaining — time to move to the Close statement.
          </p>
        )}
        {remainingSeconds === 0 && (
          <p role="status" className="w-full rounded-md border border-key-move bg-key-move/10 px-3 py-2 text-sm font-medium text-foreground">
            Session time is up.
          </p>
        )}
      </div>

      {/* The teleprompter text itself */}
      <div className={cn("max-w-none space-y-4 p-6 font-serif", teleprompterTextClass)}>
        <h2 className="text-base font-sans font-semibold uppercase tracking-wide text-key-move">Open</h2>
        <p>{filledWelcome}</p>
        <p>{openStatement.insight}</p>
        <p>{filledGuideIntro}</p>
        <p>{openStatement.guidelines}</p>
        <p>{openStatement.questionsPrompt}</p>
        <p>{openStatement.reviewPrompt}</p>
        <p>{openStatement.handInstruction}</p>
        <p>{openStatement.callAndResponse}</p>
        <p>{openStatement.palmRule}</p>
        <p>{openStatement.chitAllowance}</p>
        <p className="font-semibold text-foreground">{filledTodaysPoint}</p>
        <p>{filledHandoff}</p>

        <h2 className="pt-4 text-base font-sans font-semibold uppercase tracking-wide text-key-move">Close</h2>
        <p className="text-sm italic text-muted-foreground">{closeStatement.timing}</p>
        <p>{filledMarkCompletion}</p>
        <p>{closeStatement.visualize}</p>
        <p className="font-semibold">&ldquo;{closeStatement.affirmation}&rdquo;</p>
        <p>{closeStatement.breathingSetup}</p>

        <div className="font-sans">
          <BreathPacer />
        </div>

        <p>{closeStatement.nextSession}</p>
        <p>{closeStatement.volunteerPrompt}</p>
        <p className="font-semibold text-foreground">{closeStatement.thanks}</p>
      </div>
    </div>
  );
}
