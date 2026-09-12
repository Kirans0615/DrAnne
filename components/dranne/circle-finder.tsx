"use client";

import { useId, useMemo, useState } from "react";
import { cn } from "cn";
import type { Circle, CircleType } from "@/content/circles";
import { emailAddresses } from "@/content/org";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

type ModeFilter = "all" | "virtual" | "in-person";
type TypeFilter = "all" | CircleType;

const selectClassName = cn(
  "h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-[color,box-shadow] outline-none",
  "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
  "dark:bg-input/30"
);

/**
 * Client-side search/filter enhancement over the static Registry
 * (content/circles.ts `circles`). Renders nothing when the Registry is
 * empty — the honest empty-state copy on /get-started/find-a-circle is
 * server-rendered directly in the page so it's visible with JS off; this
 * component only adds value once there is data to filter, per the
 * pivot's "static curated list" model (no backend, no live submissions).
 */
export function CircleFinder({ circles }: { circles: Circle[] }) {
  const searchId = useId();
  const formatId = useId();
  const typeId = useId();
  const modeId = useId();

  const [query, setQuery] = useState("");
  const [formatCode, setFormatCode] = useState("all");
  const [type, setType] = useState<TypeFilter>("all");
  const [mode, setMode] = useState<ModeFilter>("all");

  const formatCodes = useMemo(
    () => Array.from(new Set(circles.map((circle) => circle.formatCode))).sort(),
    [circles]
  );

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return circles.filter((circle) => {
      if (normalizedQuery && !circle.location.toLowerCase().includes(normalizedQuery)) {
        return false;
      }
      if (formatCode !== "all" && circle.formatCode !== formatCode) {
        return false;
      }
      if (type !== "all" && circle.type !== type) {
        return false;
      }
      if (mode === "virtual" && !circle.virtual) {
        return false;
      }
      if (mode === "in-person" && circle.virtual) {
        return false;
      }
      return true;
    });
  }, [circles, query, formatCode, type, mode]);

  if (circles.length === 0) {
    return null;
  }

  return (
    <div className="mt-10">
      <form
        role="search"
        aria-label="Filter the Registry"
        onSubmit={(event) => event.preventDefault()}
        className="grid gap-4 rounded-xl border border-border p-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        <div>
          <Label htmlFor={searchId}>State, metro or &quot;virtual&quot;</Label>
          <Input
            id={searchId}
            type="search"
            placeholder="e.g. Denver, CO or virtual"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="mt-1.5"
          />
        </div>

        <div>
          <Label htmlFor={formatId}>MENU Code</Label>
          <select
            id={formatId}
            value={formatCode}
            onChange={(event) => setFormatCode(event.target.value)}
            className={cn(selectClassName, "mt-1.5")}
          >
            <option value="all">All formats</option>
            {formatCodes.map((code) => (
              <option key={code} value={code}>
                {code}
              </option>
            ))}
          </select>
        </div>

        <div>
          <Label htmlFor={typeId}>Type</Label>
          <select
            id={typeId}
            value={type}
            onChange={(event) => setType(event.target.value as TypeFilter)}
            className={cn(selectClassName, "mt-1.5")}
          >
            <option value="all">All types</option>
            <option value="Volunteer">Volunteer</option>
            <option value="Independent">Independent</option>
            <option value="Partner">Partner</option>
          </select>
        </div>

        <div>
          <Label htmlFor={modeId}>Meets</Label>
          <select
            id={modeId}
            value={mode}
            onChange={(event) => setMode(event.target.value as ModeFilter)}
            className={cn(selectClassName, "mt-1.5")}
          >
            <option value="all">Virtual or in-person</option>
            <option value="virtual">Virtual only</option>
            <option value="in-person">In-person only</option>
          </select>
        </div>
      </form>

      <p className="mt-4 text-sm text-muted-foreground" role="status">
        {filtered.length} of {circles.length} Circles match your filters.
      </p>

      {filtered.length === 0 ? (
        <p className="mt-4 rounded-xl border border-dashed border-border p-6 text-muted-foreground">
          No Circles match those filters. Try clearing one of them.
        </p>
      ) : (
        <ul className="mt-4 grid gap-4 sm:grid-cols-2">
          {filtered.map((circle) => (
            <li key={circle.name} className="rounded-xl border border-border p-5">
              <p className="font-display text-lg text-foreground">{circle.name}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {circle.location}
                {circle.virtual ? " · Virtual" : ""}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Badge variant="outline">{circle.type}</Badge>
                <Badge variant="outline">MENU {circle.formatCode}</Badge>
              </div>
              {circle.day || circle.time ? (
                <p className="mt-3 text-sm text-foreground">
                  {[circle.day, circle.time].filter(Boolean).join(" · ")}
                </p>
              ) : null}
              <p className="mt-3 text-sm">
                <a
                  href={`mailto:${emailAddresses[circle.contact]}`}
                  className="text-brand-red underline underline-offset-4"
                >
                  Contact this Circle
                </a>
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
