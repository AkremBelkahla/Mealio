import Image from "next/image";
import type { Metadata } from "next";
import { getCategories, getFeaturedDishes } from "@/lib/api/menu";
import { RESTAURANT, SITE } from "@/lib/constants";
import { Navbar } from "@/components/layout/Navbar";
import { ButtonLink } from "@/components/ui/Button";
import { CategoryCard } from "@/components/menu/CategoryCard";
import { DishCard } from "@/components/menu/DishCard";
import { IconArrowRight } from "@/components/ui/icons";

const HOME_CATEGORY_ORDER = ["Starter", "Seafood", "Pasta", "Dessert"];

export const metadata: Metadata = {
  title: "Mealio — Seasonal Restaurant & Honest Food",
  description: SITE.description,
};

function RestaurantJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: SITE.name,
    description: SITE.description,
    telephone: RESTAURANT.phone,
    email: RESTAURANT.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: RESTAURANT.address,
      addressLocality: "Portland",
      addressRegion: "OR",
      postalCode: "97205",
      addressCountry: "US",
    },
    servesCuisine: "Seasonal",
    url: process.env.NEXT_PUBLIC_SITE_URL,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default async function HomePage() {
  const [categories, featured] = await Promise.all([
    getCategories(),
    getFeaturedDishes(6),
  ]);

  const menuCategories = HOME_CATEGORY_ORDER.map((name) =>
    categories.find((category) => category.name === name),
  ).filter((category) => category !== undefined);

  return (
    <>
      <RestaurantJsonLd />
      <Navbar />

      {/* Hero — large editorial headline beside the feature photograph */}
      <section className="relative overflow-clip">
        <div className="mx-auto grid max-w-[120rem] grid-cols-1 items-center gap-12 px-6 pb-20 md:px-12 lg:grid-cols-[1.15fr_1fr] lg:gap-0 lg:pb-0 xl:px-[7.375rem]">
          <div className="flex flex-col gap-10 py-10 lg:py-24">
            <h1 className="font-heading text-display font-bold text-black">
              Seasonal food is an important part of lifestyle
            </h1>
            <p className="max-w-xl font-body text-lg leading-[1.4] tracking-[0.02em] text-stone-text xl:text-2xl">
              At {SITE.name}, we cook honest food with fresh, local ingredients —
              a menu that changes with the seasons and celebrates every plate.
            </p>
            <div>
              <ButtonLink href="/menu" variant="filled-forest">
                View Our Menu
              </ButtonLink>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-clip lg:aspect-auto lg:h-[52rem]">
            <Image
              src="/images/hero-home.jpg"
              alt="A vibrant plate of seasonal vegetables and citrus"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      {/* Menu categories */}
      <section className="mx-auto max-w-[120rem] px-6 py-24 md:px-12 xl:px-[7.375rem] xl:py-32">
        <div className="flex items-end justify-between gap-8">
          <h2 className="font-heading text-h2 font-bold text-forest">
            Our Menu
          </h2>
          <ButtonLink href="/menu" variant="border-dark" className="hidden md:inline-flex">
            See All Dishes
          </ButtonLink>
        </div>
        <div
          aria-hidden="true"
          className="mt-8 border-t-2 border-dashed border-olive/50"
        />
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {menuCategories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </section>

      {/* Chef's selection */}
      <section className="bg-sage">
        <div className="mx-auto max-w-[120rem] px-6 py-24 md:px-12 xl:px-[7.375rem] xl:py-32">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-5 text-center">
            <h2 className="font-heading text-h2 font-bold text-forest">
              Chef&rsquo;s Selection
            </h2>
            <p className="font-body text-lg leading-[1.4] tracking-[0.02em] text-stone-text xl:text-2xl">
              A rotating selection of dishes our kitchen is proud of right now.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((dish) => (
              <DishCard key={dish.id} dish={dish} />
            ))}
          </div>
          <div className="mt-16 flex justify-center">
            <ButtonLink href="/menu" variant="border-dark">
              Explore the Full Menu
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="mx-auto grid max-w-[120rem] grid-cols-1 items-center gap-14 px-6 py-24 md:px-12 lg:grid-cols-2 xl:px-[7.375rem] xl:py-32">
        <div className="relative aspect-[4/3] overflow-clip">
          <Image
            src="/images/hero-about.jpg"
            alt="Fresh cabbage and seasonal produce from the market"
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col items-start gap-8">
          <h2 className="font-heading text-h2 font-bold text-forest">
            Cooked with care, served with pride
          </h2>
          <p className="font-body text-lg leading-[1.4] tracking-[0.02em] text-stone-text xl:text-2xl">
            {SITE.name} began with a simple idea: let the ingredient lead. Every
            morning we choose what the season offers and build the day&rsquo;s
            menu around it — vegetables, fish, meats and desserts prepared with
            restraint and respect.
          </p>
          <ButtonLink href="/about" variant="border-dark">
            More About Us
            <IconArrowRight className="ml-4 h-6 w-10" />
          </ButtonLink>
        </div>
      </section>

      {/* Reservation call to action */}
      <section className="bg-sage">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-24 text-center md:px-12 xl:py-32">
          <h2 className="font-heading text-h1 font-bold text-black">
            Make a Reservation
          </h2>
          <p className="font-body text-lg leading-[1.4] tracking-[0.02em] text-stone-text xl:text-2xl">
            Get in touch with the restaurant
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
            <ButtonLink href="/contact" variant="filled-forest">
              Book a Table
            </ButtonLink>
            <a
              href={`tel:${RESTAURANT.phone.replace(/[^+\d]/g, "")}`}
              className="font-body text-xl tracking-[0.02em] text-forest underline-offset-4 transition-colors hover:text-olive hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-olive"
            >
              or call {RESTAURANT.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
