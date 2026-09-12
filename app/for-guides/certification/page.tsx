import type { Metadata } from "next";
import { certificationIntro } from "@/content/pages";
import { certificationProgression } from "@/content/for-guides";
import { CertificationQuiz } from "@/components/dranne/certification-quiz";

export const metadata: Metadata = {
  title: "Certification",
  description:
    "The path to Certification for Volunteers and Independent Members, plus a self-scoring nine-Point knowledge check to prepare for the Board interview.",
};

export default function CertificationPage() {
  return (
    <div>
      <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">Certification</h1>

      <p className="mt-4 max-w-2xl text-foreground">{certificationIntro.value}</p>

      <div className="mt-6 space-y-4">
        {certificationProgression.map((paragraph) => (
          <p key={paragraph.value} className="max-w-2xl text-muted-foreground">
            {paragraph.value}
          </p>
        ))}
      </div>

      <section aria-labelledby="quiz-heading" className="mt-12 border-t border-border pt-10">
        <h2 id="quiz-heading" className="text-2xl font-semibold text-foreground">
          Nine-Point knowledge check
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Ten questions drawn from the program itself — the MagicHand mnemonic, the chit rules, the
          Three Linking Rings, T-E-A-M, the membership stages and the Open/Close protocol. This is
          self-scoring and does not gate anything: it&rsquo;s a study aid to bring to your Board
          interview.
        </p>
        <div className="mt-6">
          <CertificationQuiz />
        </div>
      </section>
    </div>
  );
}
