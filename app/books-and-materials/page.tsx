import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  basicSection,
  booksAndMaterialsIntro,
} from "@/content/booksAndMaterials";

export const metadata: Metadata = {
  title: "Books & Materials",
  description:
    "The three dr.Anne plan books, digital editions and starter products that support the dAp Course and Practice Circles — with proceeds funding volunteer activities.",
};

export default function BooksAndMaterialsPage() {
  return (
    <>
      <section className="bg-brand-red-quiet">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl text-brand-red sm:text-5xl">
            Books & Materials
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-foreground">
            {booksAndMaterialsIntro.value}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl text-brand-red">Basic</h2>
        <p className="mt-4 text-lg leading-relaxed text-foreground">
          {basicSection.value}
        </p>

        <div className="mt-10">
          <Button asChild size="lg">
            <Link href="/books-and-materials/catalogue">
              See the full catalogue
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
