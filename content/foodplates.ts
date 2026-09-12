export type FoodPlate = {
  slug: string;
  caption: string;
  chits: string;
  image: string;
};

/**
 * Five plates from audit §4.15. The fifth caption is truncated in the
 * source ("Sandwich &salad, some") with no chit count — per build prompt
 * §13-8/§10.6 that plate renders with its caption omitted entirely rather
 * than completing someone else's sentence.
 */
export const foodPlates: FoodPlate[] = [
  {
    slug: "lunch-plate",
    caption: "Lunch plate: salad, English muffin, roast beef",
    chits: "1 Protein, 1 Fat, 1 Carbohydrate, Vegetables",
    image: "/assets/foodplates/lunch-plate.jpg",
  },
  {
    slug: "pancake-blueberries",
    caption: "Pancake, blueberries and butter",
    chits: "1 Carbohydrate, 1 Fat, ½ Fruit",
    image: "/assets/foodplates/pancake-blueberries.jpg",
  },
  {
    slug: "salad-feta",
    caption: "Salad with feta cheese and dressing, cucumbers, lettuce",
    chits: "1 Fat, ½ Milk, Vegetables",
    image: "/assets/foodplates/salad-feta.jpg",
  },
  {
    slug: "french-toast-bacon",
    caption: "French toast & bacon",
    chits: "1 Fat, ½ Protein, 1 Protein (for egg in toast), 1 Carbohydrate",
    image: "/assets/foodplates/french-toast-bacon.jpg",
  },
  {
    slug: "sandwich-salad",
    // Caption intentionally omitted — source text is truncated mid-sentence
    // with no chit count. Build prompt §10.6 / §13-8.
    caption: "",
    chits: "",
    image: "/assets/foodplates/sandwich-salad.jpg",
  },
];
