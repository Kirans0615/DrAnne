"use client";

import { Document, Page, View, Text, StyleSheet } from "@react-pdf/renderer";

/**
 * The flyer builder's PDF output (build prompt §10.17). Self-contained,
 * following the same @react-pdf/renderer pattern as ./magic-square-pdf.tsx
 * and ./statements-pdf.tsx — no shared PDF infrastructure. Replaces the
 * legacy "make your own" promise (dranne-audit.md §4.14) that had no
 * template behind it with a real, brand-styled, printable flyer.
 */

export type FlyerPdfProps = {
  circleName: string;
  guideName: string;
  place: string;
  day: string;
  time: string;
  contact: string;
};

const styles = StyleSheet.create({
  page: {
    padding: 36,
    fontFamily: "Helvetica",
  },
  border: {
    borderWidth: 3,
    borderColor: "#B41900",
    borderRadius: 16,
    padding: 40,
    height: "100%",
    justifyContent: "center",
  },
  wordmark: {
    fontSize: 22,
    fontFamily: "Helvetica-Bold",
    color: "#B41900",
    textAlign: "center",
  },
  tagline: {
    fontSize: 13,
    color: "#666666",
    textAlign: "center",
    marginTop: 4,
    marginBottom: 28,
  },
  circleName: {
    fontSize: 30,
    fontFamily: "Helvetica-Bold",
    textAlign: "center",
    color: "#222222",
    marginBottom: 28,
  },
  detailsBlock: {
    marginTop: 8,
    marginHorizontal: "auto",
    width: "80%",
  },
  detailRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
    paddingVertical: 8,
  },
  detailLabel: {
    width: 90,
    fontSize: 12,
    fontFamily: "Helvetica-Bold",
    color: "#B4690E",
  },
  detailValue: {
    flex: 1,
    fontSize: 13,
    color: "#222222",
  },
  footer: {
    marginTop: 32,
    fontSize: 9,
    color: "#888888",
    textAlign: "center",
  },
});

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.detailRow}>
      <Text style={styles.detailLabel}>{label}</Text>
      <Text style={styles.detailValue}>{value || "—"}</Text>
    </View>
  );
}

export function FlyerDocument({ circleName, guideName, place, day, time, contact }: FlyerPdfProps) {
  return (
    <Document title="dr.Anne Association — Practice Circle Flyer">
      <Page size="LETTER" style={styles.page}>
        <View style={styles.border}>
          <Text style={styles.wordmark}>dr.Anne Association</Text>
          <Text style={styles.tagline}>Join a Practice Circle</Text>

          <Text style={styles.circleName}>{circleName || "Your Practice Circle"}</Text>

          <View style={styles.detailsBlock}>
            <DetailRow label="Guide" value={guideName} />
            <DetailRow label="Place" value={place} />
            <DetailRow label="Day" value={day} />
            <DetailRow label="Time" value={time} />
            <DetailRow label="Contact" value={contact} />
          </View>

          <Text style={styles.footer}>
            A program of The dr.Anne Association — a 501(c)(3) nonprofit — dranne.org
          </Text>
        </View>
      </Page>
    </Document>
  );
}
