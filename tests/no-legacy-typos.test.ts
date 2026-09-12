import { describe, expect, it } from "vitest";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

/**
 * Build prompt §13 / §19: none of the ~60 known-bad strings from the audit
 * (§6) may survive anywhere in /content or /app, and zero Lorem ipsum
 * blocks may survive anywhere in the codebase.
 */
const KNOWN_BAD_STRINGS = [
  "Standarized",
  "seemlessly",
  "Praticioner",
  "Practicioner",
  "Associaiton",
  "Pracitice",
  "successly",
  "couseling",
  "Indepdent",
  "uselful",
  "concerpt",
  "orcompany",
  "appetitie",
  "Apetit",
  "Descripton",
  "consultaitons",
  "Chits ounter",
  "Reseach",
  "progam",
  "Barkeley",
  "Havard",
  "comraderie",
  "breather",
  "acts a facilitator",
  "mix in four",
  "comes our clean",
  "emobying",
  "and/r",
  "Clidk",
  "conistancy",
  "withing",
  "Mangagement",
  "Screens Actor's Guild",
  "Conduct you Practice Circle",
  "Lorem ipsum",
];

const SCAN_DIRS = ["content", "app"];
const SCAN_EXTENSIONS = [".ts", ".tsx", ".md"];

function collectFiles(dir: string): string[] {
  let results: string[] = [];
  let entries: string[];
  try {
    entries = readdirSync(dir);
  } catch {
    return results;
  }
  for (const entry of entries) {
    if (entry === "node_modules" || entry === ".next") continue;
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      results = results.concat(collectFiles(full));
    } else if (SCAN_EXTENSIONS.some((ext) => full.endsWith(ext))) {
      results.push(full);
    }
  }
  return results;
}

describe("no legacy typos or placeholder text survive the rebuild", () => {
  const root = process.cwd();
  const files = SCAN_DIRS.flatMap((dir) => collectFiles(join(root, dir)));

  it("scans a non-trivial number of source files", () => {
    expect(files.length).toBeGreaterThan(10);
  });

  for (const bad of KNOWN_BAD_STRINGS) {
    it(`never contains "${bad}"`, () => {
      const offenders = files.filter((file) => readFileSync(file, "utf-8").includes(bad));
      expect(offenders, `found "${bad}" in: ${offenders.join(", ")}`).toEqual([]);
    });
  }
});
