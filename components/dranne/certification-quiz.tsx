"use client";

import { useId, useState, type FormEvent } from "react";
import { certificationQuizQuestions } from "@/content/certification-quiz";
import { cn } from "cn";

/**
 * The nine-Point knowledge check (build prompt §10.15 / §13-20). Real,
 * self-scoring and non-gating: a study aid a candidate can print and bring
 * to their Board interview, not a pass/fail wall. In-memory state only —
 * nothing is submitted anywhere, and nothing persists across a reload.
 */
export function CertificationQuiz() {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const groupId = useId();

  const answeredCount = Object.keys(answers).length;
  const total = certificationQuizQuestions.length;
  const score = certificationQuizQuestions.reduce(
    (count, question) => (answers[question.id] === question.correctIndex ? count + 1 : count),
    0
  );

  function selectAnswer(questionId: string, choiceIndex: number) {
    setAnswers((current) => ({ ...current, [questionId]: choiceIndex }));
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setSubmitted(true);
  }

  function retake() {
    setAnswers({});
    setSubmitted(false);
  }

  if (submitted) {
    return (
      <div>
        <div className="rounded-lg border border-key-move/30 bg-key-move/5 p-5">
          <p className="text-lg font-semibold text-foreground">
            You scored {score} of {total}
          </p>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            This result is a self-check, not a Certification decision — bring it to your Board
            interview as a study aid. Nothing about this attempt is saved or sent anywhere.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 print:hidden">
            <button
              type="button"
              onClick={() => window.print()}
              className="rounded-md bg-key-move px-4 py-2 text-sm font-semibold text-white hover:bg-key-move/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-key-move"
            >
              Print this result
            </button>
            <button
              type="button"
              onClick={retake}
              className="rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-key-move"
            >
              Retake the check
            </button>
          </div>
        </div>

        <ol className="mt-6 space-y-4">
          {certificationQuizQuestions.map((question, index) => {
            const yourIndex = answers[question.id];
            const correct = yourIndex === question.correctIndex;
            return (
              <li key={question.id} className="rounded-lg border border-border p-4">
                <p className="font-medium text-foreground">
                  {index + 1}. {question.prompt}
                </p>
                <p className={cn("mt-2 text-sm", correct ? "text-key-silence" : "text-brand-red")}>
                  Your answer: {yourIndex !== undefined ? question.choices[yourIndex] : "(no answer)"}
                  {correct ? " — correct" : ` — correct answer: ${question.choices[question.correctIndex]}`}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <p aria-live="polite" className="text-sm text-muted-foreground">
        {answeredCount} of {total} answered
      </p>
      <ol className="mt-4 space-y-6">
        {certificationQuizQuestions.map((question, index) => (
          <li key={question.id}>
            <fieldset>
              <legend className="font-medium text-foreground">
                {index + 1}. {question.prompt}
              </legend>
              <div className="mt-2 space-y-2">
                {question.choices.map((choice, choiceIndex) => {
                  const inputId = `${groupId}-${question.id}-${choiceIndex}`;
                  return (
                    <div key={choice} className="flex items-center gap-2">
                      <input
                        type="radio"
                        id={inputId}
                        name={question.id}
                        checked={answers[question.id] === choiceIndex}
                        onChange={() => selectAnswer(question.id, choiceIndex)}
                        className="size-4 accent-key-move focus-visible:outline focus-visible:outline-2 focus-visible:outline-key-move"
                      />
                      <label htmlFor={inputId} className="text-sm text-foreground">
                        {choice}
                      </label>
                    </div>
                  );
                })}
              </div>
            </fieldset>
          </li>
        ))}
      </ol>

      <button
        type="submit"
        className="mt-8 rounded-md bg-key-move px-4 py-2 text-sm font-semibold text-white hover:bg-key-move/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-key-move"
      >
        See my results
      </button>
      <p className="mt-3 text-xs text-muted-foreground">
        Unanswered questions are scored as incorrect — answer as many as you can before submitting.
      </p>
    </form>
  );
}
