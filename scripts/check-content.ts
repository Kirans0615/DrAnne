/**
 * CI gate (build prompt §13): every `provisional: true` value in
 * /content must carry a `source` string and be listed in
 * docs/CLIENT-DECISIONS.md. Missing provenance fails the build; being
 * provisional does not.
 *
 * Run with: npx tsx scripts/check-content.ts
 */
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const CONTENT_DIR = join(process.cwd(), "content");
const DECISIONS_FILE = join(process.cwd(), "docs", "CLIENT-DECISIONS.md");

/**
 * Finds every `sourced(...)` call in the file and returns its full,
 * balanced-parenthesis text. A hand-rolled scan (not a full parser) —
 * sufficient for our hand-authored content files, which never nest a
 * second `sourced(` call inside another's arguments.
 */
function findSourcedCalls(text: string): string[] {
  const calls: string[] = [];
  const callStart = /\bsourced\s*\(/g;
  let match: RegExpExecArray | null;
  while ((match = callStart.exec(text))) {
    let depth = 1;
    let i = match.index + match[0].length;
    const start = i;
    while (i < text.length && depth > 0) {
      if (text[i] === "(") depth++;
      else if (text[i] === ")") depth--;
      i++;
    }
    calls.push(text.slice(start, i - 1));
  }
  return calls;
}

function findProvisionalProblems(source: string, file: string): string[] {
  const problems: string[] = [];
  for (const call of findSourcedCalls(source)) {
    if (/provisional:\s*true/.test(call) && !/["'`][^"'`]{6,}["'`]/.test(call)) {
      problems.push(`${file}: a sourced() call with provisional:true has no quoted source string`);
    }
  }
  return problems;
}

function main() {
  const files = readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".ts"));
  let problems: string[] = [];

  for (const file of files) {
    const full = join(CONTENT_DIR, file);
    const source = readFileSync(full, "utf-8");
    problems = problems.concat(findProvisionalProblems(source, file));
  }

  let decisions = "";
  try {
    decisions = readFileSync(DECISIONS_FILE, "utf-8");
  } catch {
    console.error(`FAIL: ${DECISIONS_FILE} does not exist.`);
    process.exit(1);
  }

  // Every numbered §13 conflict (1–21) must appear in CLIENT-DECISIONS.md.
  for (let i = 1; i <= 21; i++) {
    if (!decisions.includes(`| ${i} |`)) {
      problems.push(`docs/CLIENT-DECISIONS.md: missing entry for §13 conflict #${i}`);
    }
  }

  if (problems.length > 0) {
    console.error("check-content FAILED:\n" + problems.map((p) => ` - ${p}`).join("\n"));
    process.exit(1);
  }

  console.log(`check-content OK — scanned ${files.length} content files, 21 client decisions accounted for.`);
}

main();
