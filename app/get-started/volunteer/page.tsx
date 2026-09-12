import Link from "next/link";
import type { Metadata } from "next";
import { volunteerPage } from "@/content/getStarted";
import { emailAddresses } from "@/content/org";

export const metadata: Metadata = {
  title: "Volunteer",
  description:
    "How to start your own Practice Circle as a volunteer CircleGuide, join an existing Circle, and why participant feedback keeps every Circle to the same standard.",
};

export default function VolunteerPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-display text-4xl text-brand-red sm:text-5xl">Volunteer</h1>
      <p className="mt-6 text-lg leading-relaxed text-foreground">{volunteerPage.intro.value}</p>

      <section className="mt-10">
        <h2 className="font-display text-2xl text-brand-red">Starting your own Circle</h2>
        <p className="mt-4 text-foreground">{volunteerPage.gettingStarted.value}</p>
        <p className="mt-4 text-sm text-muted-foreground">
          Now, go to{" "}
          <Link href="/get-started/find-a-circle" className="text-brand-red underline underline-offset-4">
            Find a Circle
          </Link>{" "}
          to register your Circle in the Registry.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-2xl text-brand-red">Joining an existing Circle</h2>
        <p className="mt-4 text-foreground">{volunteerPage.joiningExisting.value}</p>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-2xl text-brand-red">A consistent standard</h2>
        <p className="mt-4 text-foreground">{volunteerPage.feedback.value}</p>
      </section>

      <p className="mt-12 border-t border-border pt-8 text-muted-foreground">
        Questions about volunteering? Email{" "}
        <a href={`mailto:${emailAddresses.team}`} className="text-brand-red underline underline-offset-4">
          {emailAddresses.team}
        </a>
        .
      </p>
    </div>
  );
}
