import type { Metadata } from "next";
import { courseFormats, defaultFormatCode, registrationSequence } from "@/content/formats";

export const metadata: Metadata = {
  title: "Course Formats",
  description:
    "All twelve dr.Anne plan course format codes, from the 1-Day Miracle to the 9-Month Win, plus how the introductory Registration Session leads into the first Practice Circle.",
};

export default function CourseFormatsPage() {
  return (
    <div>
      <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">Course Formats</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Twelve format codes cover every way the nine Points can be scheduled — from a single day to
        nine months. The default recommendation is <strong>{defaultFormatCode}</strong>, the
        3-Week Turnaround: three Point sessions a week.
      </p>

      <div className="mt-8 overflow-x-auto">
        <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
          <caption className="sr-only">All twelve dr.Anne plan course format codes</caption>
          <thead>
            <tr className="border-b border-border">
              <th scope="col" className="py-2 pr-4 font-semibold text-foreground">
                Code
              </th>
              <th scope="col" className="py-2 pr-4 font-semibold text-foreground">
                Name
              </th>
              <th scope="col" className="py-2 font-semibold text-foreground">
                Detail
              </th>
            </tr>
          </thead>
          <tbody>
            {courseFormats.map((format) => (
              <tr key={format.code} className="border-b border-border/60">
                <th scope="row" className="py-2 pr-4 font-mono font-medium text-key-move">
                  {format.code}
                  {format.code === defaultFormatCode && (
                    <span className="ml-2 rounded-full bg-key-move/15 px-2 py-0.5 text-[0.65rem] font-sans font-semibold uppercase tracking-wide text-key-move">
                      Default
                    </span>
                  )}
                </th>
                <td className="py-2 pr-4 text-foreground">{format.name}</td>
                <td className="py-2 text-muted-foreground">{format.detail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section aria-labelledby="registration-heading" className="mt-10 rounded-lg border border-key-move/30 bg-key-move/5 p-5">
        <h2 id="registration-heading" className="text-lg font-semibold text-foreground">
          How a Course begins
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">{registrationSequence.value}</p>
      </section>
    </div>
  );
}
