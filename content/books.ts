import { sourced, type Sourced } from "./types";
import { bookPrices } from "./pricing";

export type BookAspect = "4/5" | "2/3" | "1/1";

export type Book = {
  slug: string;
  title: string;
  subtitle?: string;
  year: number;
  pages: Sourced<number>;
  trim: string;
  aspect: BookAspect;
  price: Sourced<number>;
  color: string;
  blurb: string;
  purchaseUrl: string;
  purchaseLabel: string;
};

/**
 * Depth is derived, never hand-picked, from real page counts:
 * depth = clamp(round(pages / 22), 3, 12). Build prompt §7.1.
 */
export function bookDepth(pages: number): number {
  return Math.min(12, Math.max(3, Math.round(pages / 22)));
}

export const books: Book[] = [
  {
    slug: "manual-and-practice",
    title: "dr.Anne plan Manual & Practice",
    subtitle: "The Handbook for Good Health, Happiness and Weight Control™",
    year: 2025,
    // .org says 146, .net catalogue says 144. Catalogue wins — it also
    // carries price, year and publisher. Build prompt §13-6.
    pages: sourced(144, ".net Open Sesame catalogue (audit §4.10)", {
      provisional: true,
      conflictsWith: [146],
    }),
    trim: "8×10",
    aspect: "4/5",
    price: bookPrices.manualAndPractice,
    color: "var(--color-brand-red)",
    blurb:
      "Unlock the revolutionary method that's changing lives. Created by dr. Anne, a renowned epidemiologist and nutrition expert, this simple yet powerful guide gives you lifelong tools for: healthy eating without calorie counting, portion control using just your hand, and long-term weight control that works. This is not a diet. It's a way of life. “Once you learn healthy eating, it's yours for the rest of your life.”",
    purchaseUrl: "https://shop.lightningsource.com/b/085",
    purchaseLabel: "Order from Lightning Source",
  },
  {
    slug: "good-health-at-hand-expanded",
    title: "dr.Anne Good Health at Hand — Expanded Edition",
    subtitle: "Your lifelong way to eat, exercise and meditate",
    // .org says 2022/192pp, .net catalogue says 2023/190pp. Catalogue wins. §13-7.
    year: 2023,
    pages: sourced(190, ".net Open Sesame catalogue (audit §4.10)", {
      provisional: true,
      conflictsWith: [192],
    }),
    trim: "6×9",
    aspect: "2/3",
    price: bookPrices.expandedEdition,
    color: "#3D2B4F",
    blurb:
      "In this expanded edition of the dr.Anne plan, Dr. Anne Seifert presents a gentle, research-based approach to lifelong wellness. Drawing on decades of work in public health and epidemiology, she introduces a flexible and intuitive plan built around portion control, mindful movement, and stress reduction. Ideal for anyone seeking a simple, sustainable lifestyle that doesn't rely on calorie counting, food restrictions, or unrealistic routines.",
    purchaseUrl: "https://shop.lightningsource.com/b/085",
    purchaseLabel: "Order from Lightning Source",
  },
  {
    slug: "quick-start",
    title: "dr.Anne Good Health at Hand — Quick Start",
    subtitle: "Clear and easy to follow guidance",
    year: 2020,
    // .org says 82, .net catalogue says 80. Catalogue wins. §13-8.
    pages: sourced(80, ".net Open Sesame catalogue (audit §4.10)", {
      provisional: true,
      conflictsWith: [82],
    }),
    trim: "8.5×8.5",
    aspect: "1/1",
    price: bookPrices.quickStart,
    color: "#B4690E",
    blurb:
      "This Quick Start edition is perfect for those who want to jump right into the dr. Anne plan with clear, easy-to-follow guidance. Ideal for new readers just starting their health journey, and for busy individuals looking for a clear, practical system — short, simple, and to the point, with many fun illustrations.",
    purchaseUrl: "https://shop.lightningsource.com/b/085",
    purchaseLabel: "Order from Lightning Source",
  },
];

export const isbn = sourced("978-0-943584-00-3", "corrected per build prompt §13-16", {
  provisional: true,
  conflictsWith: ["978-943584-00-3"],
});

export const publisher = "Varnes";

export const otherPurchaseLinks = {
  amazon:
    "https://www.amazon.com/dr-Anne-plan-MANUAL-PRACTICE-Happiness/dp/0943584000/",
  barnesAndNoble:
    "https://www.barnesandnoble.com/w/dranne-plan-manual-practice-anne-seifert/1147811562",
  // .org used payhip.com/drAnneAssociation, .net used payhip.com/dranneassociation.
  // Normalized to one casing per build prompt §10.8.
  payhip: "https://payhip.com/drAnneAssociation",
};

export const saladSpinner = sourced(
  "dr.Anne Salad Spinner — in development, not yet purchasable.",
  ".net Open Sesame (audit §4.10)"
);

export const starterKit = sourced(
  "dAp Starter Kit — by arrangement with sponsoring Partner organizations; hand-drawn materials, the book and more. Contact vip@dranne.org.",
  ".net Open Sesame (audit §4.10)"
);
