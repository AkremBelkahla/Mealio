import Image from "next/image";
import Link from "next/link";
import type { DishSummary } from "@/types/menu";
import { formatPrice } from "@/lib/utils";

interface DishCardProps {
  dish: DishSummary;
}

/** Square dish card with photo, name, category and price. */
export function DishCard({ dish }: DishCardProps) {
  return (
    <Link
      href={`/menu/${dish.id}`}
      className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-olive"
    >
      <div className="relative aspect-square overflow-clip bg-sage">
        {dish.image ? (
          <Image
            src={dish.image}
            alt={`${dish.name} dish`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            aria-hidden="true"
            className="flex h-full items-center justify-center font-heading text-6xl font-bold text-olive/30"
          >
            {dish.name.charAt(0)}
          </div>
        )}
      </div>
      <div className="mt-6 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-heading text-2xl font-bold leading-snug text-forest transition-colors group-hover:text-olive xl:text-[2rem]">
            {dish.name}
          </h3>
          <p className="mt-2 font-body text-base tracking-[0.02em] text-stone-text">
            {[dish.area, dish.category].filter(Boolean).join(" · ")}
          </p>
        </div>
        <p className="shrink-0 font-heading text-2xl font-bold text-olive">
          {formatPrice(dish.price)}
        </p>
      </div>
    </Link>
  );
}
