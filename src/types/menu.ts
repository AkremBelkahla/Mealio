/** Raw shapes returned by the public menu data provider. */

export interface ApiCategory {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

export interface ApiCategoriesResponse {
  categories: ApiCategory[] | null;
}

export interface ApiMealSummary {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
  strArea?: string;
  strCountry?: string;
}

export interface ApiMealsResponse {
  meals: ApiMealSummary[] | null;
}

export interface ApiMeal {
  idMeal: string;
  strMeal: string;
  strCategory: string | null;
  strArea: string | null;
  strInstructions: string | null;
  strMealThumb: string | null;
  strTags: string | null;
  strYoutube: string | null;
  strSource: string | null;
  [key: `strIngredient${number}`]: string | null;
  [key: `strMeasure${number}`]: string | null;
}

export interface ApiMealDetailResponse {
  meals: ApiMeal[] | null;
}

/** Normalized models used across the UI. */

export interface MenuCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string | null;
}

export interface DishSummary {
  id: string;
  name: string;
  image: string | null;
  category: string;
  categorySlug: string;
  area: string | null;
  price: number;
}

export interface DishIngredient {
  ingredient: string;
  measure: string;
}

export interface Dish extends DishSummary {
  instructions: string[];
  ingredients: DishIngredient[];
  tags: string[];
  youtube: string | null;
  source: string | null;
}
