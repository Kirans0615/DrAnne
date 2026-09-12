"use client";

import { Document, Page, View, Text, StyleSheet } from "@react-pdf/renderer";
import { openStatement, closeStatement } from "@/content/statements";

/**
 * Downloadable PDF of the Open and Close Statements (build prompt §10.12 —
 * "a real downloadable PDF, generated ... from the same content source").
 * Self-contained, following the same @react-pdf/renderer pattern as
 * ./magic-square-pdf.tsx — no shared PDF infrastructure between the two.
 *
 * Version note: v1 — informal versioning only, per the build brief ("no
 * real version-tracking system needed"). Bump this comment (and the footer
 * string below) if the underlying statements copy is ever revised.
 */
const STATEMENTS_PDF_VERSION = "v1";

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: "Helvetica",
    fontSize: 11,
    lineHeight: 1.5,
    color: "#222222",
  },
  wordmark: {
    fontSize: 18,
    fontFamily: "Helvetica-Bold",
    color: "#B41900",
  },
  subtitle: {
    fontSize: 10,
    color: "#666666",
    marginTop: 2,
    marginBottom: 16,
  },
  sectionHeading: {
    fontSize: 14,
    fontFamily: "Helvetica-Bold",
    color: "#B41900",
    marginTop: 18,
    marginBottom: 8,
  },
  paragraph: {
    marginBottom: 8,
  },
  label: {
    fontFamily: "Helvetica-Bold",
  },
  footer: {
    marginTop: 24,
    fontSize: 8,
    color: "#888888",
  },
});

export function StatementsPdfDocument() {
  return (
    <Document title="dr.Anne Association — Open and Close Statements">
      <Page size="LETTER" style={styles.page}>
        <Text style={styles.wordmark}>dr.Anne Association</Text>
        <Text style={styles.subtitle}>Open and Close Statements — {STATEMENTS_PDF_VERSION}</Text>

        <Text style={styles.sectionHeading}>Open</Text>
        <View>
          <Text style={styles.paragraph}>{openStatement.welcome}</Text>
          <Text style={styles.paragraph}>{openStatement.insight}</Text>
          <Text style={styles.paragraph}>{openStatement.guideIntro}</Text>
          <Text style={styles.paragraph}>{openStatement.guidelines}</Text>
          <Text style={styles.paragraph}>{openStatement.questionsPrompt}</Text>
          <Text style={styles.paragraph}>{openStatement.reviewPrompt}</Text>
          <Text style={styles.paragraph}>{openStatement.handInstruction}</Text>
          <Text style={styles.paragraph}>{openStatement.callAndResponse}</Text>
          <Text style={styles.paragraph}>{openStatement.palmRule}</Text>
          <Text style={styles.paragraph}>{openStatement.chitAllowance}</Text>
          <Text style={styles.paragraph}>
            <Text style={styles.label}>{openStatement.todaysPoint}</Text>
          </Text>
          <Text style={styles.paragraph}>{openStatement.handoff}</Text>
        </View>

        <Text style={styles.sectionHeading}>Close</Text>
        <View>
          <Text style={styles.paragraph}>{closeStatement.timing}</Text>
          <Text style={styles.paragraph}>{closeStatement.markCompletion}</Text>
          <Text style={styles.paragraph}>{closeStatement.visualize}</Text>
          <Text style={styles.paragraph}>
            <Text style={styles.label}>&ldquo;{closeStatement.affirmation}&rdquo;</Text>
          </Text>
          <Text style={styles.paragraph}>{closeStatement.breathingSetup}</Text>
          <Text style={styles.paragraph}>{closeStatement.breathingIntro}</Text>
          {closeStatement.breaths.map((breath) => (
            <Text key={breath.count} style={styles.paragraph}>
              {breath.count}. {breath.inhale} {breath.exhale}
            </Text>
          ))}
          <Text style={styles.paragraph}>{closeStatement.nextSession}</Text>
          <Text style={styles.paragraph}>{closeStatement.volunteerPrompt}</Text>
          <Text style={styles.paragraph}>
            <Text style={styles.label}>{closeStatement.thanks}</Text>
          </Text>
        </View>

        <Text style={styles.footer}>
          dr.Anne Association — dranne.org — reproduced from the canonical Open and Close Statements.
        </Text>
      </Page>
    </Document>
  );
}
