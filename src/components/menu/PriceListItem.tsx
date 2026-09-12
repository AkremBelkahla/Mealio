import Link from "next/link";
import type { DishSummary } from "@/types/menu";
import { formatPrice } from "@/lib/utils";

interface PriceListItemProps {
  dish: DishSummary;
  description?: string;
}

/** Editorial price-list row: price over a dashed rule, then the dish name. */
export function PriceListItem({ dish, description }: PriceListItemProps) {
  return (
    <article className="flex flex-col gap-5">
      <div className="flex flex-col gap-3">
        <p className="text-right font-heading text-h4 font-bold text-black">
          {formatPrice(dish.price)}
        </p>
        <div
          aria-hidden="true"
          className="border-t-2 border-dashed border-black/60"
        />
      </div>
      <h3 className="font-heading text-h3 font-bold leading-[1.15] text-black">
        <Link
          href={`/menu/${dish.id}`}
          className="transition-colors hover:text-olive focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-olive"
        >
          {dish.name}
        </Link>
      </h3>
      <p className="font-body text-lg leading-[1.4] tracking-[0.02em] text-stone-text xl:text-2xl">
        {description ??
          [dish.area && `${dish.area} inspiration`, dish.category]
            .filter(Boolean)
            .join(" · ")}
      </p>
    </article>
  );
}
