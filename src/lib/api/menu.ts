import { fetchJSON } from "./client";
import { priceForDish } from "../pricing";
import { slugify } from "../utils";
import type {
  ApiCategoriesResponse,
  ApiMeal,
  ApiMealDetailResponse,
  ApiMealsResponse,
  ApiMealSummary,
  Dish,
  DishIngredient,
  DishSummary,
  MenuCategory,
} from "@/types/menu";

function toCategory(category: {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}): MenuCategory {
  return {
    id: category.idCategory,
    name: category.strCategory,
    slug: slugify(category.strCategory),
    description: category.strCategoryDescription,
    image: category.strCategoryThumb || null,
  };
}

function toDishSummary(
  meal: ApiMealSummary,
  category: string,
  area?: string | null,
): DishSummary {
  return {
    id: meal.idMeal,
    name: meal.strMeal,
    image: meal.strMealThumb || null,
    category,
    categorySlug: slugify(category),
    area: area ?? meal.strArea ?? meal.strCountry ?? null,
    price: priceForDish(meal.idMeal),
  };
}

const MAX_INGREDIENTS = 20;

function extractIngredients(meal: ApiMeal): DishIngredient[] {
  const ingredients: DishIngredient[] = [];
  for (let index = 1; index <= MAX_INGREDIENTS; index += 1) {
    const ingredient = meal[`strIngredient${index}`]?.trim();
    if (!ingredient) continue;
    ingredients.push({
      ingredient,
      measure: meal[`strMeasure${index}`]?.trim() ?? "",
    });
  }
  return ingredients;
}

function toDish(meal: ApiMeal): Dish {
  const category = meal.strCategory ?? "Miscellaneous";
  const summary = toDishSummary(
    {
      idMeal: meal.idMeal,
      strMeal: meal.strMeal,
      strMealThumb: meal.strMealThumb ?? "",
    },
    category,
    meal.strArea,
  );

  return {
    ...summary,
    instructions: (meal.strInstructions ?? "")
      .split(/\r?\n/)
      .map((step) => step.trim())
      .filter(Boolean),
    ingredients: extractIngredients(meal),
    tags: (meal.strTags ?? "")
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean),
    youtube: meal.strYoutube || null,
    source: meal.strSource || null,
  };
}

export async function getCategories(): Promise<MenuCategory[]> {
  const data = await fetchJSON<ApiCategoriesResponse>("categories.php");
  return (data.categories ?? []).map(toCategory);
}

export async function getMealsByCategory(
  category: string,
): Promise<DishSummary[]> {
  const data = await fetchJSON<ApiMealsResponse>(
    `filter.php?c=${encodeURIComponent(category)}`,
  );
  return (data.meals ?? []).map((meal) => toDishSummary(meal, category));
}

export async function getMealById(id: string): Promise<Dish | null> {
  const data = await fetchJSON<ApiMealDetailResponse>(
    `lookup.php?i=${encodeURIComponent(id)}`,
  );
  const meal = data.meals?.[0];
  return meal ? toDish(meal) : null;
}

export async function searchMeals(query: string): Promise<Dish[]> {
  const trimmed = query.trim();
  if (!trimmed) return [];
  const data = await fetchJSON<ApiMealDetailResponse>(
    `search.php?s=${encodeURIComponent(trimmed)}`,
  );
  return (data.meals ?? []).map(toDish);
}

/** A deterministic spread of dishes across categories for featured sections. */
export async function getFeaturedDishes(limit = 6): Promise<DishSummary[]> {
  const categories = await getCategories();
  const picked = await Promise.all(
    categories.slice(0, limit).map(async (category, index) => {
      const meals = await getMealsByCategory(category.name);
      return meals[index % Math.max(meals.length, 1)] ?? null;
    }),
  );
  return picked
    .filter((dish): dish is DishSummary => dish !== null && dish.image !== null)
    .slice(0, limit);
}
