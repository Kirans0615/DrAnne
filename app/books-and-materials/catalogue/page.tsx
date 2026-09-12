import type { Metadata } from "next";
import { BookShelf } from "@/components/dranne/book-shelf";
import {
  isbn,
  otherPurchaseLinks,
  publisher,
  saladSpinner,
  starterKit,
} from "@/content/books";
import {
  bookPrices,
  COURSE_FEE,
  COURSE_FEE_WITH_MATERIALS,
} from "@/content/pricing";
import { emailAddresses } from "@/content/org";
import { catalogueProceedsNote, whereToGetHeading } from "@/content/booksAndMaterials";

export const metadata: Metadata = {
  title: "Catalogue",
  description:
    "Order the three dr.Anne plan books, the eBook and audio edition, the Handy Chits Counter app, and the dAp Starter Kit — with real per-item purchase links and prices.",
};

export default function CatalogueContentPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-display text-4xl text-brand-red sm:text-5xl">
        Books & Materials Catalogue
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        Use the links below and your order will be processed by the vendor
        directly, or through PayPal. Prices may vary slightly by vendor and
        shipping.
      </p>

      <section aria-labelledby="shelf-heading" className="mt-14">
        <h2 id="shelf-heading" className="sr-only">
          The dr.Anne plan books
        </h2>
        <BookShelf />
      </section>

      <section aria-labelledby="where-heading" className="mt-16 border-t border-border pt-10">
        <h2 id="where-heading" className="font-display text-2xl text-brand-red">
          {whereToGetHeading}
        </h2>
        <ul className="mt-4 space-y-2 text-lg">
          <li>
            <a
              href={otherPurchaseLinks.amazon}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-brand-red-ink hover:underline"
            >
              Order dr.Anne plan Manual &amp; Practice from Amazon
            </a>
          </li>
          <li>
            <a
              href={otherPurchaseLinks.barnesAndNoble}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-brand-red-ink hover:underline"
            >
              Order from Barnes &amp; Noble
            </a>
          </li>
          <li>
            <a
              href={otherPurchaseLinks.payhip}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-brand-red-ink hover:underline"
            >
              eBook and audio editions at PayHip
            </a>
          </li>
        </ul>
        <dl className="mt-6 grid grid-cols-2 gap-4 text-sm sm:max-w-md">
          <div>
            <dt className="text-muted-foreground">ISBN</dt>
            <dd className="font-medium">{isbn.value}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Publisher</dt>
            <dd className="font-medium">{publisher}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Digital edition</dt>
            <dd className="font-medium">${bookPrices.digital.value}</dd>
          </div>
        </dl>
      </section>

      <section aria-labelledby="products-heading" className="mt-16 border-t border-border pt-10">
        <h2 id="products-heading" className="font-display text-2xl text-brand-red">
          Products
        </h2>
        <ul className="mt-6 space-y-8">
          <li>
            <h3 className="text-lg font-semibold">Handy Chits Counter app</h3>
            <p className="mt-1 text-muted-foreground">
              For your smartphone or computer. Special order — ${bookPrices.handyChitsApp.value}.
              Contact{" "}
              <a href={`mailto:${emailAddresses.vip}`} className="text-brand-red-ink hover:underline">
                {emailAddresses.vip}
              </a>{" "}
              to place an order.
            </p>
          </li>
          <li>
            <h3 className="text-lg font-semibold">dr.Anne Salad Spinner</h3>
            <p className="mt-1 text-muted-foreground">{saladSpinner.value}</p>
          </li>
          <li>
            <h3 className="text-lg font-semibold">dAp Starter Kit</h3>
            <p className="mt-1 text-muted-foreground">{starterKit.value}</p>
          </li>
        </ul>
        <p className="mt-8 text-sm text-muted-foreground">{catalogueProceedsNote.value}</p>
      </section>

      <section aria-labelledby="training-heading" className="mt-16 border-t border-border pt-10">
        <h2 id="training-heading" className="font-display text-2xl text-brand-red">
          Training Options
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Arrange with the Association to have your company, organization or
          club sponsor or present our training course — nine sessions over a
          three-week period.
        </p>
        <dl className="mt-6 grid grid-cols-2 gap-4 text-sm sm:max-w-md">
          <div>
            <dt className="text-muted-foreground">Participant fee</dt>
            <dd className="text-lg font-semibold">${COURSE_FEE}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">With prior materials purchase</dt>
            <dd className="text-lg font-semibold">${COURSE_FEE_WITH_MATERIALS}</dd>
          </div>
        </dl>
        <p className="mt-4 text-muted-foreground">
          Private consultations, coaching and speakers — fees will vary.
          Contact{" "}
          <a href={`mailto:${emailAddresses.vip}`} className="text-brand-red-ink hover:underline">
            {emailAddresses.vip}
          </a>
          .
        </p>
      </section>
    </div>
  );
}
