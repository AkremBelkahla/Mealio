"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import type { DishSummary, MenuCategory } from "@/types/menu";
import { cn } from "@/lib/utils";
import { PriceListItem } from "./PriceListItem";

export interface MenuSection {
  category: MenuCategory;
  dishes: DishSummary[];
}

interface MenuFilterProps {
  sections: MenuSection[];
}

/** Client-side category filtering over the menu sections. */
export function MenuFilter({ sections }: MenuFilterProps) {
  const searchParams = useSearchParams();
  const initial = searchParams.get("category") ?? "all";
  const [active, setActive] = useState(initial);

  const visible =
    active === "all"
      ? sections
      : sections.filter((section) => section.category.slug === active);

  return (
    <div>
      <div
        role="group"
        aria-label="Filter menu by category"
        className="flex flex-wrap gap-4"
      >
        <FilterChip
          label="All"
          active={active === "all"}
          onClick={() => setActive("all")}
        />
        {sections.map(({ category }) => (
          <FilterChip
            key={category.slug}
            label={category.name}
            active={active === category.slug}
            onClick={() => setActive(category.slug)}
          />
        ))}
      </div>

      {visible.map(({ category, dishes }) => (
        <section key={category.slug} className="mt-20 xl:mt-28">
          <div className="flex items-baseline justify-between gap-6">
            <h2 className="font-heading text-h3 font-bold text-forest">
              {category.name}
            </h2>
            <span className="font-body text-lg tracking-[0.02em] text-stone-text">
              {dishes.length} dishes
            </span>
          </div>
          <div
            aria-hidden="true"
            className="mt-6 border-t-2 border-dashed border-olive/50"
          />
          <div className="mt-12 grid grid-cols-1 gap-x-20 gap-y-16 lg:grid-cols-2">
            {dishes.map((dish) => (
              <PriceListItem key={dish.id} dish={dish} />
            ))}
          </div>
        </section>
      ))}

      {visible.length === 0 ? (
        <p className="mt-20 text-center font-body text-xl text-stone-text">
          No dishes found in this category.
        </p>
      ) : null}
    </div>
  );
}

interface FilterChipProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

function FilterChip({ label, active, onClick }: FilterChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "border-2 border-black px-7 py-3 font-heading text-xl font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-olive",
        active
          ? "bg-forest text-white"
          : "bg-transparent text-forest hover:bg-sage",
      )}
    >
      {label}
    </button>
  );
}
