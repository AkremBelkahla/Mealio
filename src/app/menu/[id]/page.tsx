import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getMealById } from "@/lib/api/menu";
import { formatPrice } from "@/lib/utils";
import { Navbar } from "@/components/layout/Navbar";
import { ButtonLink } from "@/components/ui/Button";
import { IconDot } from "@/components/ui/icons";

export async function generateMetadata({
  params,
}: PageProps<"/menu/[id]">): Promise<Metadata> {
  const { id } = await params;
  const dish = await getMealById(id);
  if (!dish) return { title: "Dish not found" };
  return {
    title: dish.name,
    description: `${dish.name} — a ${dish.category.toLowerCase()} dish at Mealio.`,
    openGraph: dish.image ? { images: [{ url: dish.image }] } : undefined,
  };
}

export default async function DishPage({ params }: PageProps<"/menu/[id]">) {
  const { id } = await params;
  const dish = await getMealById(id);
  if (!dish) notFound();

  return (
    <>
      <Navbar />

      <article className="mx-auto max-w-[120rem] px-6 py-16 md:px-12 xl:px-[7.375rem] xl:py-24">
        <nav aria-label="Breadcrumb" className="mb-12">
          <ol className="flex items-center gap-3 font-body text-base tracking-[0.02em] text-stone-text">
            <li>
              <Link href="/" className="hover:text-olive">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/menu" className="hover:text-olive">
                Menu
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-forest">
              {dish.name}
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 xl:gap-20">
          <div className="relative aspect-square overflow-clip bg-sage">
            {dish.image ? (
              <Image
                src={dish.image}
                alt={`${dish.name} dish`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                loading="eager"
                fetchPriority="high"
              />
            ) : null}
          </div>

          <div className="flex flex-col items-start gap-8">
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href={`/menu?category=${dish.categorySlug}`}
                className="border-2 border-forest px-5 py-2 font-heading text-base font-bold text-forest transition-colors hover:bg-forest hover:text-white"
              >
                {dish.category}
              </Link>
              {dish.area ? (
                <span className="border-2 border-olive/40 px-5 py-2 font-body text-base text-stone-text">
                  {dish.area} inspiration
                </span>
              ) : null}
            </div>

            <h1 className="font-heading text-h3 font-bold leading-[1.1] text-forest">
              {dish.name}
            </h1>

            <p className="font-heading text-h4 font-bold text-olive">
              {formatPrice(dish.price)}
            </p>

            <div
              aria-hidden="true"
              className="w-full border-t-2 border-dashed border-olive/50"
            />

            {dish.tags.length > 0 ? (
              <div className="flex flex-wrap items-center gap-4 font-body text-base tracking-[0.02em] text-stone-text">
                {dish.tags.map((tag) => (
                  <span key={tag} className="flex items-center gap-2">
                    <IconDot className="h-2 w-2 text-olive" />
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}

            {dish.ingredients.length > 0 ? (
              <div className="w-full">
                <h2 className="font-heading text-h5 font-bold text-forest">
                  Ingredients
                </h2>
                <ul className="mt-6 grid grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2">
                  {dish.ingredients.map((item) => (
                    <li
                      key={`${item.ingredient}-${item.measure}`}
                      className="flex items-baseline gap-3 font-body text-lg leading-[1.4] text-stone-text"
                    >
                      <IconDot className="h-2 w-2 shrink-0 translate-y-[-2px] text-olive" />
                      <span>
                        {item.measure ? `${item.measure} ` : ""}
                        {item.ingredient}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>

        {dish.instructions.length > 0 ? (
          <section className="mt-24 max-w-5xl">
            <h2 className="font-heading text-h3 font-bold text-forest">
              How we prepare it
            </h2>
            <div
              aria-hidden="true"
              className="mt-6 border-t-2 border-dashed border-olive/50"
            />
            <ol className="mt-12 flex flex-col gap-10">
              {dish.instructions.map((step, index) => (
                <li key={index} className="flex gap-6">
                  <span
                    aria-hidden="true"
                    className="font-heading text-h4 font-bold leading-none text-olive/40"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="font-body text-lg leading-[1.4] tracking-[0.02em] text-stone-text xl:text-2xl">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </section>
        ) : null}

        <div className="mt-24 flex flex-wrap items-center gap-6">
          <ButtonLink href="/menu" variant="border-dark">
            Back to Menu
          </ButtonLink>
          <ButtonLink href="/contact" variant="filled-forest">
            Book a Table
          </ButtonLink>
        </div>
      </article>
    </>
  );
}
