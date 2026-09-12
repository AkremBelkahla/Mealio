import Image from "next/image";
import type { Metadata } from "next";
import { RESTAURANT } from "@/lib/constants";
import { Navbar } from "@/components/layout/Navbar";
import { PageHero } from "@/components/layout/PageHero";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story of Mealio — a seasonal restaurant built around fresh produce, honest cooking and warm hospitality.",
};

const VALUES = [
  {
    initial: "S",
    title: "Seasonal first",
    text: "Our menu follows the market, not the other way around. What is fresh today shapes what we serve tonight.",
  },
  {
    initial: "H",
    title: "Honest cooking",
    text: "Simple techniques, careful seasoning and ingredients allowed to speak for themselves — nothing hidden.",
  },
  {
    initial: "W",
    title: "Warm welcome",
    text: "A table at Mealio is an invitation to slow down, share plates and enjoy the evening at your own pace.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar variant="light" overlay />
      <PageHero
        title="About"
        subtitle="Our story, our kitchen and the people behind every plate."
        image="/images/hero-about.jpg"
        imageAlt="Fresh seasonal produce, the heart of the Mealio kitchen"
      />

      <section className="mx-auto grid max-w-[120rem] grid-cols-1 items-center gap-14 px-6 py-24 md:px-12 lg:grid-cols-2 xl:px-[7.375rem] xl:py-32">
        <div className="flex flex-col items-start gap-8">
          <h2 className="font-heading text-h2 font-bold text-forest">
            A kitchen guided by the seasons
          </h2>
          <p className="font-body text-lg leading-[1.4] tracking-[0.02em] text-stone-text xl:text-2xl">
            Mealio opened with one conviction: great food starts long before
            the stove. It starts at the market, in the field, with growers who
            care about their produce as much as we care about our guests.
          </p>
          <p className="font-body text-lg leading-[1.4] tracking-[0.02em] text-stone-text xl:text-2xl">
            Every morning our chefs walk the stalls, pick what looks best and
            write the day&rsquo;s menu. Some dishes stay all season, others live
            for a single week — that is the point.
          </p>
        </div>
        <div className="relative aspect-[4/3] overflow-clip">
          <Image
            src="/images/hero-contact.jpg"
            alt="An elegant plated dish in the Mealio dining room"
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="bg-sage">
        <div className="mx-auto max-w-[120rem] px-6 py-24 md:px-12 xl:px-[7.375rem] xl:py-32">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
            {VALUES.map((value) => (
              <article
                key={value.title}
                className="flex flex-col items-center gap-8 text-center"
              >
                <div
                  aria-hidden="true"
                  className="flex h-40 w-40 items-center justify-center rounded-full border-2 border-olive/50 bg-paper xl:h-52 xl:w-52"
                >
                  <span className="font-heading text-6xl font-bold text-olive xl:text-7xl">
                    {value.initial}
                  </span>
                </div>
                <h3 className="font-heading text-h4 font-bold text-black">
                  {value.title}
                </h3>
                <p className="font-body text-lg leading-[1.4] tracking-[0.02em] text-stone-text xl:text-2xl">
                  {value.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 py-24 text-center md:px-12 xl:py-32">
        <h2 className="font-heading text-h2 font-bold text-forest">
          Come and taste the season
        </h2>
        <div className="flex flex-col gap-2 font-body text-lg tracking-[0.02em] text-stone-text xl:text-2xl">
          {RESTAURANT.hours.map((row) => (
            <p key={row.days}>
              {row.days} · {row.time}
            </p>
          ))}
        </div>
        <ButtonLink href="/contact" variant="filled-forest">
          Find Us &amp; Book
        </ButtonLink>
      </section>
    </>
  );
}
