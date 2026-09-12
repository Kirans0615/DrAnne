import Link from "next/link";
import type { Metadata } from "next";
import { independentProviders } from "@/content/providers";
import { independentProvidersFraming } from "@/content/getStarted";
import { emailAddresses } from "@/content/org";

export const metadata: Metadata = {
  title: "Independent Providers",
  description:
    "Meet the health professionals certified by the dr.Anne Association to deliver the Training Course, lead Practice Circles, and offer one-to-one coaching.",
};

export default function IndependentProvidersPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-display text-4xl text-brand-red sm:text-5xl">Independent Providers</h1>
      <p className="mt-6 text-lg leading-relaxed text-foreground">
        {independentProvidersFraming.value}
      </p>
      <p className="mt-4 text-muted-foreground">
        This page lists providers who are already certified. Interested in becoming one yourself
        instead?{" "}
        <Link href="/get-started/independent" className="text-brand-red underline underline-offset-4">
          See how to become an Independent Guide
        </Link>
        .
      </p>

      <ul className="mt-10 space-y-6">
        {independentProviders.map((provider) => (
          <li key={provider.name} className="rounded-xl border border-border p-6">
            <p className="font-display text-xl text-foreground">{provider.name}</p>
            <dl className="mt-3 grid gap-x-6 gap-y-2 sm:grid-cols-3">
              <div>
                <dt className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                  Specialty
                </dt>
                <dd className="text-foreground">{provider.specialty}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                  Location
                </dt>
                <dd className="text-foreground">{provider.location}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                  Time zone
                </dt>
                <dd className="text-foreground">{provider.timezone}</dd>
              </div>
            </dl>
            <p className="mt-4 text-sm">
              <a
                href={`mailto:${emailAddresses.vip}`}
                className="text-brand-red underline underline-offset-4"
              >
                Contact via email
              </a>
            </p>
          </li>
        ))}
      </ul>

      <p className="mt-10 text-sm text-muted-foreground">
        Fees for one-to-one coaching vary by provider — ask about pricing when you reach out. We
        don&apos;t publish phone numbers for our providers; email is the fastest way to reach them.
      </p>
    </div>
  );
}
