"use client";

import { useId, useState } from "react";
import dynamic from "next/dynamic";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { FlyerDocument } from "@/components/dranne/flyer-pdf";

/**
 * The in-browser flyer builder (build prompt §10.17 / §13-20). No backend,
 * no submission — this is a client-only tool that turns a few fields into
 * a real, downloadable, brand-styled PDF, replacing the legacy "make your
 * own" copy that had no template behind it (dranne-audit.md §4.14).
 *
 * PDFDownloadLink touches browser-only APIs, so it is loaded via
 * next/dynamic with ssr:false, following the same pattern as
 * magic-square.tsx and statements-pdf-download.tsx.
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

type FlyerFields = {
  circleName: string;
  guideName: string;
  place: string;
  day: string;
  time: string;
  contact: string;
};

const EMPTY_FIELDS: FlyerFields = {
  circleName: "",
  guideName: "",
  place: "",
  day: "",
  time: "",
  contact: "",
};

const FIELD_LABELS: Array<{ key: keyof FlyerFields; label: string; placeholder: string }> = [
  { key: "circleName", label: "Circle name", placeholder: "e.g. Seal Beach Tuesday Circle" },
  { key: "guideName", label: "CircleGuide name", placeholder: "e.g. Jordan Lee" },
  { key: "place", label: "Place", placeholder: "e.g. Leisure World Clubhouse, Seal Beach" },
  { key: "day", label: "Day", placeholder: "e.g. Tuesdays" },
  { key: "time", label: "Time", placeholder: "e.g. 6:00pm Pacific" },
  { key: "contact", label: "Contact", placeholder: "e.g. team@dranne.org" },
];

export function FlyerBuilder() {
  const [fields, setFields] = useState<FlyerFields>(EMPTY_FIELDS);
  const formId = useId();

  function updateField(key: keyof FlyerFields, value: string) {
    setFields((current) => ({ ...current, [key]: value }));
  }

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <form className="space-y-4" onSubmit={(event) => event.preventDefault()}>
        {FIELD_LABELS.map(({ key, label, placeholder }) => {
          const inputId = `${formId}-${key}`;
          return (
            <div key={key}>
              <Label htmlFor={inputId}>{label}</Label>
              <Input
                id={inputId}
                value={fields[key]}
                placeholder={placeholder}
                onChange={(event) => updateField(key, event.target.value)}
                className="mt-1"
              />
            </div>
          );
        })}

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <PDFDownloadLink
            document={<FlyerDocument {...fields} />}
            fileName="dranne-practice-circle-flyer.pdf"
            className="inline-flex items-center rounded-md bg-brand-red px-4 py-2 text-sm font-semibold text-white hover:bg-brand-red/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
          >
            {({ loading }) => (loading ? "Preparing PDF…" : "Download flyer as PDF")}
          </PDFDownloadLink>
          <button
            type="button"
            onClick={() => setFields(EMPTY_FIELDS)}
            className="rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-key-move"
          >
            Clear
          </button>
        </div>
        <p className="text-xs text-muted-foreground">
          Nothing you type here is saved or sent anywhere — the PDF is generated in your browser.
        </p>
      </form>

      {/* Live on-screen preview, mirroring the PDF layout */}
      <div aria-hidden="true" className="rounded-2xl border-2 border-brand-red p-6">
        <p className="text-center font-display text-xl text-brand-red">dr.Anne Association</p>
        <p className="mt-1 text-center text-sm text-muted-foreground">Join a Practice Circle</p>
        <p className="mt-6 text-center text-2xl font-semibold text-foreground">
          {fields.circleName || "Your Practice Circle"}
        </p>
        <dl className="mx-auto mt-6 max-w-xs divide-y divide-border text-sm">
          {FIELD_LABELS.filter((f) => f.key !== "circleName").map(({ key, label }) => (
            <div key={key} className="flex justify-between gap-4 py-2">
              <dt className="font-semibold text-key-move">{label}</dt>
              <dd className="text-right text-foreground">{fields[key] || "—"}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-6 text-center text-[0.65rem] text-muted-foreground">
          A program of The dr.Anne Association — a 501(c)(3) nonprofit — dranne.org
        </p>
      </div>
    </div>
  );
}
