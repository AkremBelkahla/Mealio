import type { MetadataRoute } from "next";
import { getCategories, getMealsByCategory } from "@/lib/api/menu";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/menu",
    "/about",
    "/contact",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
  }));

  try {
    const categories = await getCategories();
    const dishUrls = await Promise.all(
      categories.map(async (category) => {
        const dishes = await getMealsByCategory(category.name);
        return dishes.map((dish) => ({
          url: `${BASE_URL}/menu/${dish.id}`,
          changeFrequency: "monthly" as const,
          priority: 0.5,
        }));
      }),
    );
    return [...staticRoutes, ...dishUrls.flat()];
  } catch {
    return staticRoutes;
  }
}
