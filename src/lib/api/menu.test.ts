import { afterEach, describe, expect, it, vi } from "vitest";
import { getCategories, getMealById, getMealsByCategory } from "./menu";

function mockFetch(payload: unknown, ok = true) {
  vi.stubGlobal(
    "fetch",
    vi.fn(async () => ({
      ok,
      status: ok ? 200 : 500,
      json: async () => payload,
    })),
  );
}

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("getCategories", () => {
  it("normalizes the provider response", async () => {
    mockFetch({
      categories: [
        {
          idCategory: "1",
          strCategory: "Beef",
          strCategoryThumb: "https://img.test/beef.png",
          strCategoryDescription: "Beef dishes",
        },
      ],
    });
    const categories = await getCategories();
    expect(categories).toEqual([
      {
        id: "1",
        name: "Beef",
        slug: "beef",
        description: "Beef dishes",
        image: "https://img.test/beef.png",
      },
    ]);
  });

  it("returns an empty array when the provider returns null", async () => {
    mockFetch({ categories: null });
    expect(await getCategories()).toEqual([]);
  });
});

describe("getMealsByCategory", () => {
  it("normalizes dishes and assigns deterministic prices", async () => {
    mockFetch({
      meals: [
        { strMeal: "Burger", strMealThumb: "https://img.test/b.jpg", idMeal: "1" },
        { strMeal: "Fries", strMealThumb: "", idMeal: "2" },
      ],
    });
    const dishes = await getMealsByCategory("Beef");
    expect(dishes).toHaveLength(2);
    expect(dishes[0]).toMatchObject({
      id: "1",
      name: "Burger",
      category: "Beef",
      categorySlug: "beef",
      image: "https://img.test/b.jpg",
    });
    expect(dishes[0].price).toBeGreaterThanOrEqual(9);
    expect(dishes[1].image).toBeNull();
  });
});

describe("getMealById", () => {
  it("extracts ingredients, measures and instructions", async () => {
    mockFetch({
      meals: [
        {
          idMeal: "52772",
          strMeal: "Teriyaki Chicken",
          strCategory: "Chicken",
          strArea: "Japanese",
          strInstructions: "Step one.\r\nStep two.",
          strMealThumb: "https://img.test/t.jpg",
          strTags: "Meat,Main",
          strYoutube: "https://youtube.test/x",
          strSource: null,
          strIngredient1: "Chicken",
          strMeasure1: "1 whole",
          strIngredient2: "Soy sauce",
          strMeasure2: "3 tbsp",
          strIngredient3: " ",
          strMeasure3: "",
        },
      ],
    });
    const dish = await getMealById("52772");
    expect(dish).not.toBeNull();
    expect(dish?.ingredients).toEqual([
      { ingredient: "Chicken", measure: "1 whole" },
      { ingredient: "Soy sauce", measure: "3 tbsp" },
    ]);
    expect(dish?.instructions).toEqual(["Step one.", "Step two."]);
    expect(dish?.tags).toEqual(["Meat", "Main"]);
    expect(dish?.categorySlug).toBe("chicken");
  });

  it("returns null when the dish does not exist", async () => {
    mockFetch({ meals: null });
    expect(await getMealById("99999")).toBeNull();
  });
});

describe("fetch errors", () => {
  it("throws on non-ok responses", async () => {
    mockFetch({}, false);
    await expect(getCategories()).rejects.toThrow("status 500");
  });
});
