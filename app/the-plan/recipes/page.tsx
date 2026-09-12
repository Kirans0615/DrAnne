import type { Metadata } from "next";
import { recipes } from "@/content/recipes";
import { emailAddresses, org } from "@/content/org";

export const metadata: Metadata = {
  title: "Recipes",
  description:
    "Four dr.Anne plan recipes with ingredients, method and chit counts: Peasant Yeast Bread, Mom Hoyt's Special Spread, Brussels Sprouts Soufflé and White Sauce.",
};

export default function RecipesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-display text-4xl text-brand-red sm:text-5xl">Recipes</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        Four recipes from the dr.Anne plan, each with its chit count. Measure by palm and thumb
        portions, not by counting calories.
      </p>

      <div className="mt-10 space-y-12 print:space-y-8">
        {recipes.map((recipe) => (
          <article key={recipe.slug} id={recipe.slug} className="border-t border-border pt-8 first:border-t-0 first:pt-0">
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Recipe",
                  name: recipe.title,
                  author: {
                    "@type": "Organization",
                    name: org.legalName,
                  },
                  recipeIngredient: recipe.ingredients,
                  recipeInstructions: recipe.method,
                }),
              }}
            />
            <h2 className="font-display text-2xl text-brand-red">{recipe.title}</h2>
            <p className="mt-1 text-sm font-medium text-key-move">{recipe.chitLine}</p>

            <h3 className="mt-6 text-lg font-semibold text-foreground">Ingredients</h3>
            <ul className="mt-2 space-y-1 text-foreground">
              {recipe.ingredients.map((ingredient) => (
                <li key={ingredient} className="flex gap-2">
                  <span aria-hidden="true" className="text-brand-red">
                    &bull;
                  </span>
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-6 text-lg font-semibold text-foreground">Method</h3>
            <p className="mt-2 leading-relaxed text-foreground">{recipe.method}</p>
          </article>
        ))}
      </div>

      <p className="mt-12 border-t border-border pt-8 text-sm text-muted-foreground print:hidden">
        Have your own recipe to share? Send it our way — measure in palm and thumb portions — to{" "}
        <a href={`mailto:${emailAddresses.team}`} className="font-medium text-brand-red hover:underline">
          {emailAddresses.team}
        </a>
        .
      </p>
    </div>
  );
}
