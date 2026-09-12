import Image from "next/image";
import Link from "next/link";
import type { MenuCategory } from "@/types/menu";
import { IconArrowRight } from "@/components/ui/icons";

interface CategoryCardProps {
  category: MenuCategory;
}

/** Tall photo card with gradient overlay, title and arrow — per the reference design. */
export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/menu?category=${category.slug}`}
      className="group relative block aspect-[508/710] overflow-clip focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-olive"
    >
      {category.image ? (
        <Image
          src={category.image}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover object-bottom transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 bg-sage" aria-hidden="true" />
      )}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[22%] bg-gradient-to-b from-forest/30 to-transparent"
      />
      <div className="absolute inset-x-0 top-0 flex items-center justify-between px-[8%] pt-[7%]">
        <h3 className="font-heading text-h4 font-bold text-forest transition-colors group-hover:text-olive">
          {category.name}
        </h3>
        <IconArrowRight className="h-7 w-12 shrink-0 text-forest transition-transform duration-300 group-hover:translate-x-2" />
      </div>
      <span className="sr-only">Browse {category.name} dishes</span>
    </Link>
  );
}
