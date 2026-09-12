"use client";

import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Book, type BookAspect } from "@/components/ui/book";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { books, type Book as BookEntry } from "@/content/books";

/**
 * The Book Shelf (build prompt §11.1). Three real covers driven entirely
 * from content/books.ts — no JSX literals for title/blurb/price/links.
 */

const ASPECT_RATIO: Record<BookAspect, number> = {
  "4/5": 4 / 5,
  "2/3": 2 / 3,
  "1/1": 1,
};

// A shared target height keeps the shelf visually level while widths stay
// proportionally honest to each book's real trim size.
const SHELF_HEIGHT = 280;

function widthForAspect(aspect: BookAspect): number {
  return Math.round(SHELF_HEIGHT * ASPECT_RATIO[aspect]);
}

// Idle "breathing" tilt: 2-3deg, mirrored over ~8s, motion-safe only.
const IDLE_TILT = [-2.5, 2.5, -2.5];

function BookCover({ book }: { book: BookEntry }) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-2 p-4 text-center">
      <span className="font-display text-lg leading-tight text-balance">
        {book.title}
      </span>
      {book.subtitle && (
        <span className="text-xs opacity-90">{book.subtitle}</span>
      )}
    </div>
  );
}

export function BookShelf() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const openBook = useMemo(
    () => books.find((book) => book.slug === openSlug) ?? null,
    [openSlug]
  );

  return (
    <div className="w-full">
      <ul
        aria-label="dr.Anne plan books"
        className="flex list-none flex-wrap items-end justify-center gap-10 pb-6 sm:gap-14"
      >
        {books.map((book, index) => (
          <li key={book.slug}>
            <motion.div
              style={{ transformOrigin: "bottom center" }}
              animate={
                prefersReducedMotion ? { rotate: 0 } : { rotate: IDLE_TILT }
              }
              transition={
                prefersReducedMotion
                  ? { duration: 0 }
                  : {
                      duration: 8,
                      delay: index * 0.6,
                      repeat: Infinity,
                      repeatType: "mirror",
                      ease: "easeInOut",
                    }
              }
            >
              <Book
                title={book.title}
                pages={book.pages.value}
                aspect={book.aspect}
                width={widthForAspect(book.aspect)}
                color={book.color}
                onOpen={() => setOpenSlug(book.slug)}
              >
                <BookCover book={book} />
              </Book>
            </motion.div>
          </li>
        ))}
      </ul>

      <Drawer
        open={openBook !== null}
        onOpenChange={(open) => {
          if (!open) setOpenSlug(null);
        }}
      >
        <DrawerContent>
          {openBook && (
            <div className="mx-auto w-full max-w-xl px-4 pb-8">
              <DrawerHeader>
                <DrawerTitle className="font-display text-2xl">
                  {openBook.title}
                </DrawerTitle>
                {openBook.subtitle && (
                  <DrawerDescription>{openBook.subtitle}</DrawerDescription>
                )}
              </DrawerHeader>

              <dl className="grid grid-cols-3 gap-4 px-4 text-sm">
                <div>
                  <dt className="text-muted-foreground">Year</dt>
                  <dd className="font-medium">{openBook.year}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Pages</dt>
                  <dd className="font-medium">{openBook.pages.value}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Trim</dt>
                  <dd className="font-medium">{openBook.trim}</dd>
                </div>
              </dl>

              <p className="px-4 py-4 leading-relaxed">{openBook.blurb}</p>

              <DrawerFooter className="flex-row items-center justify-between gap-4 px-4">
                <span className="text-lg font-semibold">
                  ${openBook.price.value}
                </span>
                {/* Each book links to its own purchaseUrl — never the same
                    URL for all three (the legacy site's bug). */}
                <Button asChild>
                  <a
                    href={openBook.purchaseUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {openBook.purchaseLabel}
                  </a>
                </Button>
              </DrawerFooter>
              <div className="px-4">
                <DrawerClose asChild>
                  <Button variant="ghost" className="w-full">
                    Close
                  </Button>
                </DrawerClose>
              </div>
            </div>
          )}
        </DrawerContent>
      </Drawer>
    </div>
  );
}
