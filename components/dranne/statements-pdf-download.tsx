"use client";

import dynamic from "next/dynamic";
import { StatementsPdfDocument } from "@/components/dranne/statements-pdf";

/**
 * PDFDownloadLink touches browser-only APIs (Blob/URL), so it is loaded via
 * next/dynamic with ssr:false — the same pattern magic-square.tsx uses for
 * the MagicSquare card PDF.
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

export function StatementsPdfDownload() {
  return (
    <PDFDownloadLink
      document={<StatementsPdfDocument />}
      fileName="dranne-open-close-statements.pdf"
      className="inline-flex items-center rounded-md bg-brand-red px-4 py-2 text-sm font-semibold text-white hover:bg-brand-red/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
    >
      {({ loading }) => (loading ? "Preparing PDF…" : "Download as PDF")}
    </PDFDownloadLink>
  );
}
