export type Recipe = {
  slug: string;
  title: string;
  ingredients: string[];
  method: string;
  chitLine: string;
};

/** Verbatim from audit §4.16, typos corrected ("mix in flour", "comes out clean", "appetite", "Bon Appétit!"). */
export const recipes: Recipe[] = [
  {
    slug: "peasant-yeast-bread",
    title: "Peasant Yeast Bread",
    ingredients: [
      "1/4 cup cornmeal",
      "3/4 cup warm water",
      "2 packets (1/4 oz.) dry active yeast",
      "1 1/4 cups milk mixed with 1 1/2 T. lemon juice",
      "1 T. baking powder",
      "5 cups whole wheat/oat flour",
    ],
    method:
      "Mix warm water with yeast. Cover and let stand for 10 minutes. Add warmed soured milk and baking powder, and stir. Beat in 2 cups of flour for one minute. Cover bowl and let stand for 15 minutes. Slowly beat in remaining flour. Turn out dough on floured board and knead ten minutes or until smooth and elastic. Roll into round or desired shape and place on baking sheet that has been sprinkled with cornmeal. Bake for 30 minutes in preheated 350 degree oven. Makes 2 loaves.",
    chitLine: "1 palm-size, thumb-thick serving = 1 Carbohydrate chit",
  },
  {
    slug: "mom-hoyts-special-spread",
    title: "Mom Hoyt's Special Spread",
    ingredients: [
      "1 cup cheddar cheese, shredded",
      "1 can (6 oz.) crab meat",
      "1 T. pickle relish",
      "1/4 green pepper, diced",
      "2-3 rolls (cupped-palm size)",
      "1/4 onion, diced",
      "1 t. prepared mustard",
    ],
    method:
      "Preheat oven to 375 degrees. Mix crab, cheese, relish, onion, pepper and mustard. Slice rolls in half. Spread rounded 1–1 1/2 T. of mixture on each half roll. Bake in oven for 15 minutes or until cheese starts to melt. (Can be served hot or cold.) Makes 2–3 servings.",
    chitLine: "1 roll serving = 1 Carbohydrate chit + 1 Protein chit",
  },
  {
    slug: "brussels-sprouts-souffle",
    title: "Brussels Sprouts Soufflé",
    ingredients: [
      "1/4 cup butter or margarine",
      "1/4 cup whole wheat or oat flour",
      "1 cup milk",
      "4 egg whites",
      "2 cups cooked Brussels sprouts, chopped",
      "4 egg yolks",
      "4 oz. cheddar cheese, shredded",
    ],
    method:
      "Melt butter and blend in the flour. Add milk and cook until mixture thickens, stirring constantly for white sauce. Remove from heat. Beat egg yolks until thick and lemon-colored. Slowly blend the egg yolks into the white sauce and stir rapidly. Add in shredded cheese, finely chopped Brussels sprouts. Beat egg whites until stiff, but not dry; fold into mixture. Pour into an ungreased 2-quart soufflé dish. Bake in moderate oven, 350 degrees, for 40 minutes or until knife inserted comes out clean. Makes 4 servings.",
    chitLine: "1 serving or 2 cupped palms = 1 Protein chit + 1 Milk chit",
  },
  {
    slug: "white-sauce",
    title: "White Sauce",
    ingredients: [
      "1 t. butter or margarine",
      "1/2 cup milk (at least 2% fat)",
      "1 T. enriched white flour",
      "(optional: 1 T. mixed carrots and peas)",
    ],
    method:
      "Melt butter in saucepan. Remove from heat and mix in flour. Slowly add milk over heat and bring to a slow boil for about one minute, mixing constantly until thickened. (Add carrots and peas.) Serve immediately. Makes 1 serving.",
    chitLine: "1 serving = 1 Milk chit + 1 Oil chit",
  },
];
