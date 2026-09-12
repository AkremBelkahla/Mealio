"use client";

import { useState } from "react";
import Image from "next/image";
import { IconArrowLeft, IconArrowRight } from "@/components/ui/icons";

interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

const TESTIMONIALS: TestimonialItem[] = [
  {
    quote:
      "Every plate at Mealio tells the story of the season — honest ingredients, treated with real care.",
    name: "Amelia Stone",
    role: "Food Writer",
    avatar: "/images/home-avatar-guest.png",
  },
  {
    quote:
      "The kind of cooking that makes you slow down: simple produce, quietly spectacular results.",
    name: "Marcus Hale",
    role: "Restaurant Critic",
    avatar: "/images/home-avatar-julie.png",
  },
  {
    quote:
      "A room that feels like home and a menu that changes with the market — my favourite table in town.",
    name: "John Doe",
    role: "Regular Guest",
    avatar: "/images/home-avatar-john.png",
  },
];

/** Rotating testimonial with a large editorial quote and previous/next controls. */
export function Testimonial() {
  const [index, setIndex] = useState(0);
  const item = TESTIMONIALS[index];
  const go = (step: number) =>
    setIndex((current) =>
      (current + step + TESTIMONIALS.length) % TESTIMONIALS.length,
    );

  return (
    <div className="relative">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 right-0 select-none font-heading text-[8rem] font-bold leading-none text-sage xl:-top-28 xl:text-[13rem]"
      >
        &ldquo;
      </span>

      <blockquote className="relative font-heading text-2xl font-bold leading-[1.35] text-black xl:text-[2rem]">
        {item.quote}
      </blockquote>

      <div className="mt-12 flex flex-wrap items-end justify-between gap-8">
        <div className="flex items-center gap-6">
          <Image
            src={item.avatar}
            alt={`Portrait of ${item.name}`}
            width={96}
            height={96}
            className="size-24 rounded-full object-cover"
          />
          <div>
            <p className="font-heading text-xl font-bold text-black xl:text-xl">
              {item.name}
            </p>
            <p className="font-body text-lg tracking-[0.02em] text-stone-text">
              {item.role}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="flex h-14 w-20 items-center justify-center text-forest transition-colors hover:text-olive focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-olive"
          >
            <IconArrowLeft className="h-7 w-12" />
          </button>
          <span
            aria-live="polite"
            className="font-body text-lg tracking-[0.02em] text-stone-text"
          >
            {index + 1} / {TESTIMONIALS.length}
          </span>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="flex h-14 w-20 items-center justify-center text-forest transition-colors hover:text-olive focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-olive"
          >
            <IconArrowRight className="h-7 w-12" />
          </button>
        </div>
      </div>
    </div>
  );
}
