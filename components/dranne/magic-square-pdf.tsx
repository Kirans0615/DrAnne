"use client";

import { Document, Page, View, Text, StyleSheet, Svg, Path, Circle } from "@react-pdf/renderer";
import { ninePointStructure, type KeyId } from "@/content/keys";
import { membershipForLife } from "@/content/membership";

/**
 * PDF version of the MagicSquare Learning Wheel (build prompt §11.5). Kept
 * self-contained in its own file per the brief — no shared PDF
 * infrastructure, just this one card exporting correctly.
 */

const KEY_PDF_COLORS: Record<KeyId, string> = {
  apportion: "#B41900",
  move: "#B4690E",
  silence: "#4C6B5A",
};

// Flatten the 3-per-Key structure into 9 ordered (key, pointNumber) pairs —
// no individual Point names are attested in source material, so the card
// labels each wedge only as "Point N".
const POINTS: Array<{ key: KeyId; pointNumber: number }> = ninePointStructure.flatMap((group, groupIndex) =>
  Array.from({ length: group.count }, (_, i) => ({
    key: group.key,
    pointNumber: groupIndex * group.count + i + 1,
  }))
);

const TOTAL_POINTS = POINTS.length; // 9

function wedgePath(index: number, total: number, cx: number, cy: number, r: number): string {
  const startAngle = (index / total) * 2 * Math.PI - Math.PI / 2;
  const endAngle = ((index + 1) / total) * 2 * Math.PI - Math.PI / 2;
  const x1 = cx + r * Math.cos(startAngle);
  const y1 = cy + r * Math.sin(startAngle);
  const x2 = cx + r * Math.cos(endAngle);
  const y2 = cy + r * Math.sin(endAngle);
  return `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2} Z`;
}

const styles = StyleSheet.create({
  page: {
    padding: 28,
    fontFamily: "Helvetica",
  },
  card: {
    borderWidth: 2,
    borderColor: "#B41900",
    borderRadius: 12,
    padding: 24,
    height: "100%",
  },
  wordmark: {
    fontSize: 20,
    fontFamily: "Helvetica-Bold",
    color: "#B41900",
  },
  label: {
    fontSize: 11,
    color: "#555555",
    marginTop: 2,
  },
  row: {
    flexDirection: "row",
    marginTop: 18,
    alignItems: "center",
  },
  wheelWrap: {
    width: 220,
    height: 220,
  },
  progress: {
    marginLeft: 24,
    flex: 1,
  },
  progressText: {
    fontSize: 13,
    marginTop: 6,
    color: "#333333",
  },
  footer: {
    fontSize: 9,
    color: "#666666",
    marginTop: 18,
  },
});

export type MagicSquarePdfProps = {
  completed: boolean[];
};

export function MagicSquareCardDocument({ completed }: MagicSquarePdfProps) {
  const completedCount = completed.filter(Boolean).length;
  const isLifetimeMember = completedCount === TOTAL_POINTS;

  return (
    <Document title="dr.Anne Association — MagicSquare Member Card">
      <Page size={{ width: 540, height: 320 }} style={styles.page}>
        <View style={styles.card}>
          <Text style={styles.wordmark}>dr.Anne Association</Text>
          <Text style={styles.label}>MagicSquare Learning Wheel — Member Card</Text>

          <View style={styles.row}>
            <Svg viewBox="0 0 220 220" style={styles.wheelWrap}>
              <Circle cx={110} cy={110} r={100} stroke="#DDDDDD" strokeWidth={1} fill="#FFFFFF" />
              {POINTS.map((point, index) => (
                <Path
                  key={point.pointNumber}
                  d={wedgePath(index, TOTAL_POINTS, 110, 110, 96)}
                  fill={completed[index] ? KEY_PDF_COLORS[point.key] : "#F2F2F2"}
                  stroke="#FFFFFF"
                  strokeWidth={2}
                />
              ))}
              <Circle cx={110} cy={110} r={28} fill="#FFFFFF" stroke="#DDDDDD" strokeWidth={1} />
            </Svg>

            <View style={styles.progress}>
              <Text style={styles.progressText}>
                {completedCount} of {TOTAL_POINTS} Points complete
              </Text>
              <Text style={styles.progressText}>
                Apportion · Move · Silence — three Points each
              </Text>
              {isLifetimeMember ? (
                <Text style={styles.progressText}>{membershipForLife}</Text>
              ) : (
                <Text style={styles.progressText}>
                  This is both an achievement record and the Member card for attending Practice
                  Circles.
                </Text>
              )}
            </View>
          </View>

          <Text style={styles.footer}>
            This card reflects a demonstration state only and is not a record of a real membership.
          </Text>
        </View>
      </Page>
    </Document>
  );
}
