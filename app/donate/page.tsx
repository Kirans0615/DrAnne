import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { SponsorWall } from "@/components/dranne/sponsor-wall";
import { org } from "@/content/org";
import { donatePage } from "@/content/pages";
import { COURSE_FEE, bookPrices, pointSessionFee } from "@/content/pricing";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support the dr.Anne Association's website, volunteer activities and Practice Circles with a tax-deductible donation through PayPal — no PayPal account required.",
};

const suggestedAmounts = [
  {
    amount: pointSessionFee.value,
    outcome: "funds one Point session with a professional coach",
  },
  {
    amount: bookPrices.manualAndPractice.value,
    outcome: "provides one dr.Anne plan book to a participant",
  },
  {
    amount: COURSE_FEE,
    outcome: "covers a full course place for someone who couldn't otherwise afford it",
  },
];

export default function DonatePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-display text-4xl text-brand-red sm:text-5xl">
        Donate
      </h1>
      <p className="mt-6 text-lg leading-relaxed">{donatePage.taxDeductible}</p>
      <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
        {donatePage.whereMoneyGoes.value}
      </p>

      <section aria-labelledby="amounts-heading" className="mt-12">
        <h2 id="amounts-heading" className="text-xl font-semibold">
          What your gift does
        </h2>
        <ul className="mt-6 grid gap-6 sm:grid-cols-3">
          {suggestedAmounts.map((item) => (
            <li
              key={item.amount}
              className="rounded-lg border border-border bg-muted/30 p-6 text-center"
            >
              <p className="font-display text-3xl text-brand-red">${item.amount}</p>
              <p className="mt-2 text-sm text-muted-foreground">{item.outcome}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="give-heading" className="mt-12 border-t border-border pt-10">
        <h2 id="give-heading" className="text-xl font-semibold">
          Give via PayPal
        </h2>
        <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">
          {donatePage.paymentWindow.value}
        </p>
        <Button asChild size="lg" className="mt-6">
          <a href={org.paypalDonateUrl} target="_blank" rel="noreferrer">
            Donate with PayPal
          </a>
        </Button>
        {org.ein && (
          <p className="mt-4 text-sm text-muted-foreground">EIN: {org.ein}</p>
        )}
      </section>

      <section aria-labelledby="donate-sponsors-heading" className="mt-14 border-t border-border pt-10">
        <h2 id="donate-sponsors-heading" className="text-xl font-semibold">
          Thank you to our sponsors, collaborators, volunteers, and donors.
        </h2>
        <div className="mt-6">
          <SponsorWall />
        </div>
      </section>
    </div>
  );
}
