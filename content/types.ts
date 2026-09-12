/**
 * Sourced<T> marks content whose provenance matters — every value pulled
 * from the audit carries where it came from, and conflicting audit values
 * are marked provisional with the binding resolution rule applied.
 * See docs/CLIENT-DECISIONS.md for the full rationale on every provisional value.
 */
export type Sourced<T> = {
  value: T;
  source: string;
  provisional?: true;
  conflictsWith?: T[];
};

export function sourced<T>(
  value: T,
  source: string,
  opts?: { provisional?: true; conflictsWith?: T[] }
): Sourced<T> {
  return { value, source, ...opts };
}
