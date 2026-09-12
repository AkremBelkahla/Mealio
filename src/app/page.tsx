import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getFeaturedDishes } from "@/lib/api/menu";
import { RESTAURANT, SITE } from "@/lib/constants";
import { Navbar } from "@/components/layout/Navbar";
import { PriceListItem } from "@/components/menu/PriceListItem";
import { IconBox } from "@/components/home/IconBox";
import { SpotlightCard } from "@/components/home/SpotlightCard";
import { Testimonial } from "@/components/home/Testimonial";
import { ReservationForm } from "@/components/contact/ReservationForm";
import { IconArrowRight } from "@/components/ui/icons";
import {
  SvgCarrot,
  SvgFish,
  SvgLemon,
  VectorLeaf,
  VectorMint,
} from "@/components/svg";

const MENU_CATEGORIES = [
  {
    name: "Starters",
    slug: "starter",
    image: "/images/home-card-starters.png",
    alt: "Steamed dumplings topped with bacon and fresh dill",
  },
  {
    name: "Mains",
    slug: "lamb",
    image: "/images/home-mains.png",
    alt: "Lamb chops with carrots, corn and rosemary",
  },
  {
    name: "Soups",
    slug: "side",
    image: "/images/home-soups.png",
    alt: "Cream soup served with fresh mint",
  },
] as const;

const FEATURES = [
  {
    icon: SvgFish,
    title: "Premium Quality",
    text: "Fresh fish and seafood delivered every morning and prepared the same day.",
  },
  {
    icon: SvgCarrot,
    title: "Seasonal Vegetables",
    text: "Vegetables picked at their peak from local growers we know by name.",
  },
  {
    icon: SvgLemon,
    title: "Fresh Fruit",
    text: "Bright seasonal fruit that keeps every dessert light and honest.",
  },
] as const;

const SPOTLIGHTS = [
  {
    image: "/images/home-dish-pear.jpg",
    imageAlt: "Poached pear dessert with crumbles and fresh herbs",
    tag: "Dessert",
    author: "Julie Christie",
    authorImage: "/images/home-avatar-julie.png",
    date: "October 17, 2021",
    time: "3:33 pm",
    comments: "2 comments",
    title: "Fruit and vegetables and protection against diseases",
    excerpt:
      "A closer look at how our kitchen turns simple seasonal produce into dishes worth remembering.",
  },
  {
    image: "/images/home-asparagus-spears.png",
    imageAlt: "Fresh asparagus spears ready for the kitchen",
    tag: "Vegetarian",
    author: "Dianne Russell",
    authorImage: "/images/home-avatar-dianne.png",
    date: "October 17, 2021",
    time: "4:20 pm",
    comments: "5 comments",
    title: "Asparagus Spring Salad with Rocket, Goat's Cheese",
    excerpt:
      "Green asparagus, peppery rocket and a soft goat's cheese — the plate that opens our spring menu.",
  },
] as const;

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
  const menuDishes = await getFeaturedDishes(4);

  return (
    <>
      <RestaurantJsonLd />

      {/* Dark forest opening block: hero + "plan your diet" */}
      <section className="relative overflow-clip bg-forest text-white">
        <Navbar variant="light" />

        {/* Hero — editorial headline beside the feature dish photograph */}
        <div className="mx-auto grid max-w-[120rem] grid-cols-1 gap-10 px-6 md:px-12 lg:grid-cols-[1.6fr_1fr] xl:gap-0 xl:px-[7.375rem]">
          <div className="flex flex-col justify-center gap-10 py-14 lg:py-32">
            <h1 className="font-heading font-bold text-white text-display">
              Healthy Eating
              <br />
              is important
              <br />
              part of lifestyle
            </h1>
            <p className="max-w-xl font-body text-lg leading-[1.4] tracking-[0.02em] text-white/85 xl:text-xl">
              A seasonal menu built around fresh, honest ingredients — prepared
              with care and served with pride.
            </p>

            {/* Scroll indicator — vertical label over a dashed rule */}
            <div
              aria-hidden="true"
              className="pointer-events-none mt-10 hidden items-center gap-5 xl:flex"
            >
              <span className="font-body text-sm uppercase tracking-[0.4em] text-white/70 [writing-mode:vertical-rl]">
                Scroll
              </span>
              <span className="h-28 border-l-2 border-dashed border-white/50" />
            </div>
          </div>

          <div className="relative pb-16 lg:pb-0">
            <div className="relative aspect-[4/5] overflow-clip lg:aspect-auto lg:h-[54rem] xl:h-[60rem]">
              <Image
                src="/images/home-hero-steak.png"
                alt="A seared steak on a white plate with fennel, mushrooms and rosemary"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
                loading="eager"
                fetchPriority="high"
              />
            </div>
            {/* Three circular spice photographs overlapping the dish corner */}
            <div className="absolute -bottom-8 left-0 flex items-end -space-x-4 lg:-left-6">
              <Image
                src="/images/home-spice-1.png"
                alt="Bowl of star anise and turmeric"
                width={200}
                height={200}
                className="size-24 rounded-full object-cover shadow-lg xl:size-36"
              />
              <Image
                src="/images/home-spice-2.png"
                alt="Bowl of mixed peppercorns"
                width={200}
                height={200}
                className="size-28 rounded-full object-cover shadow-lg xl:size-40"
              />
              <Image
                src="/images/home-spice-3.png"
                alt="Bowl of ground spices"
                width={200}
                height={200}
                className="size-24 rounded-full object-cover shadow-lg xl:size-36"
              />
            </div>
          </div>
        </div>

        {/* "Start to plan your diet" — offset image pair */}
        <div className="mx-auto grid max-w-[120rem] grid-cols-1 gap-14 px-6 pb-24 md:px-12 lg:grid-cols-2 xl:gap-24 xl:px-[7.375rem] xl:pb-36">
          <div className="flex flex-col gap-10">
            <div className="relative aspect-[11/10] w-full max-w-[42rem] overflow-clip">
              <Image
                src="/images/home-soup-bowl.png"
                alt="A bowl of clam chowder with fresh herbs"
                fill
                sizes="(max-width: 1024px) 100vw, 38vw"
                className="object-cover"
              />
            </div>
            <h2 className="font-heading text-h2 font-bold text-white">
              Start to plan your diet today
            </h2>
            <p className="max-w-lg font-body text-lg leading-[1.4] tracking-[0.02em] text-white/85 xl:text-xl">
              Our chef builds a balanced plate around what the season offers —
              vegetables, grains and proteins chosen each morning.
            </p>
          </div>
          <div className="flex flex-col gap-10 lg:pt-24">
            <p className="max-w-lg font-body text-lg leading-[1.4] tracking-[0.02em] text-white/85 lg:ml-auto xl:text-xl">
              Every dish on the menu can be adapted — ask the kitchen for a
              lighter version or a vegetarian twist.
            </p>
            <div className="relative aspect-[11/10] w-full max-w-[42rem] overflow-clip lg:ml-auto">
              <Image
                src="/images/home-grinders.png"
                alt="Salt and pepper grinders on the kitchen counter"
                fill
                sizes="(max-width: 1024px) 100vw, 38vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Menu — price list with an eucalyptus photograph bleeding off the top-right */}
      <section className="relative overflow-clip">
        <Image
          src="/images/home-eucalyptus-branch.png"
          alt=""
          width={400}
          height={580}
          aria-hidden="true"
          className="pointer-events-none absolute -top-6 right-0 hidden w-72 object-contain object-top lg:block xl:w-[24rem]"
        />
        <div className="mx-auto max-w-[120rem] px-6 py-24 md:px-12 xl:px-[7.375rem] xl:py-32">
          <div>
            <h2 className="font-heading text-h2 font-bold text-forest">
              Our Menu
            </h2>
            <p className="mt-6 max-w-md font-body text-lg leading-[1.4] tracking-[0.02em] text-stone-text xl:text-xl">
              This is a section of your menu. A short description keeps it
              light and easy to read.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-x-20 gap-y-16 lg:grid-cols-2 xl:mt-20">
            {menuDishes.map((dish) => (
              <PriceListItem key={dish.id} dish={dish} />
            ))}
          </div>
        </div>
      </section>

      {/* Excellent cook — chef photograph on sage with line-art leaves */}
      <section className="relative overflow-clip bg-sage">
        <div className="mx-auto grid max-w-[120rem] grid-cols-1 items-center gap-14 px-6 py-24 md:px-12 lg:grid-cols-2 xl:px-[7.375rem] xl:py-32">
          <div className="relative">
            <VectorLeaf className="pointer-events-none absolute -top-16 -left-10 size-56 text-white opacity-60 xl:size-72" />
            <div className="relative aspect-[37/50] overflow-clip">
              <Image
                src="/images/home-chef-plating.png"
                alt="Our chef plating a salmon dish in the kitchen"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="relative flex flex-col items-start gap-8">
            <h2 className="font-heading text-h2 font-bold text-forest">
              Excellent cook
            </h2>
            <p className="max-w-lg font-body text-lg leading-[1.4] tracking-[0.02em] text-stone-text xl:text-xl">
              Our kitchen is led by people who love the ingredient first. Every
              dish starts at the market and ends on your plate with as little
              interference as possible.
            </p>
            <VectorMint className="pointer-events-none absolute -right-6 -bottom-24 w-64 text-white opacity-60 xl:w-80" />
          </div>
        </div>
      </section>

      {/* Feature icon boxes */}
      <section className="mx-auto max-w-[120rem] px-6 py-24 md:px-12 xl:px-[7.375rem] xl:py-32">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-3 xl:gap-10">
          {FEATURES.map((feature) => (
            <IconBox key={feature.title} {...feature} />
          ))}
        </div>
      </section>

      {/* Kitchen journal — two editorial spotlight cards */}
      <section className="mx-auto max-w-[120rem] px-6 pb-24 md:px-12 xl:px-[7.375rem] xl:pb-32">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 xl:gap-24">
          {SPOTLIGHTS.map((spotlight) => (
            <SpotlightCard key={spotlight.title} href="/menu" {...spotlight} />
          ))}
        </div>
      </section>

      {/* Reservation */}
      <section className="bg-sage">
        <div className="mx-auto flex max-w-[103rem] flex-col items-center gap-8 px-6 py-24 text-center md:px-12 xl:py-32">
          <h2 className="font-heading text-h1 font-bold text-black">
            Make a Reservation
          </h2>
          <p className="font-body text-lg leading-[1.4] tracking-[0.02em] text-stone-text xl:text-xl">
            Get in touch with the restaurant
          </p>
          <div className="mt-10 w-full">
            <ReservationForm />
          </div>
        </div>
      </section>

      {/* Calories Energy Balance — three menu category cards */}
      <section className="mx-auto max-w-[120rem] px-6 py-24 md:px-12 xl:px-[7.375rem] xl:py-32">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <h2 className="font-heading text-h2 font-bold text-black">
            Calories
            <br />
            Energy Balance
          </h2>
          <p className="font-body text-lg leading-[1.4] tracking-[0.02em] text-stone-text xl:text-xl">
            Explore the menu by course — from light starters to generous mains
            and comforting soups.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {MENU_CATEGORIES.map((card) => (
            <Link
              key={card.slug}
              href={`/menu?category=${card.slug}`}
              className="group relative block aspect-[508/710] overflow-clip focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-olive"
            >
              <Image
                src={card.image}
                alt={card.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-bottom transition-transform duration-500 group-hover:scale-105"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-[22%] bg-gradient-to-b from-forest/20 to-transparent"
              />
              <div className="absolute inset-x-0 top-0 flex items-center justify-between px-[8%] pt-[7%]">
                <h3 className="font-heading text-xl font-bold text-forest transition-colors group-hover:text-olive xl:text-2xl">
                  {card.name}
                </h3>
                <IconArrowRight className="h-5 w-9 shrink-0 text-forest transition-transform duration-300 group-hover:translate-x-2" />
              </div>
              <span className="sr-only">Browse {card.name} dishes</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="mx-auto max-w-[120rem] px-6 pb-24 md:px-12 xl:px-[7.375rem] xl:pb-40">
        <div className="mx-auto max-w-4xl">
          <Testimonial />
        </div>
      </section>
    </>
  );
}
