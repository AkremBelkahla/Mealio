import { Suspense } from "react";
import type { Metadata } from "next";
import { getCategories, getMealsByCategory } from "@/lib/api/menu";
import { Navbar } from "@/components/layout/Navbar";
import { PageHero } from "@/components/layout/PageHero";
import { MenuFilter, type MenuSection } from "@/components/menu/MenuFilter";

export const metadata: Metadata = {
  title: "Our Menu",
  description:
    "Explore the full Mealio menu — starters, mains, seafood, vegetarian dishes and desserts, organized by category.",
};

export default async function MenuPage() {
  const categories = await getCategories();
  const sections: MenuSection[] = await Promise.all(
    categories.map(async (category) => ({
      category,
      dishes: await getMealsByCategory(category.name),
    })),
  );

  return (
    <>
      <Navbar variant="light" overlay />
      <PageHero
        title="Our Menu"
        subtitle="Seasonal dishes prepared daily with fresh, honest ingredients."
        image="/images/hero-menu-detail.jpg"
        imageAlt="A fresh cut of steak with garlic and rosemary"
      />

      <section className="mx-auto max-w-[120rem] px-6 py-24 md:px-12 xl:px-[7.375rem] xl:py-32">
        <Suspense fallback={null}>
          <MenuFilter sections={sections} />
        </Suspense>
      </section>
    </>
  );
}
