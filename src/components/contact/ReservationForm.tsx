"use client";

import { useState } from "react";
import { RESTAURANT } from "@/lib/constants";
import { IconChevronDown } from "@/components/ui/icons";

const TIME_SLOTS = [
  "12:00 pm",
  "12:30 pm",
  "1:00 pm",
  "1:30 pm",
  "6:00 pm",
  "6:30 pm",
  "7:00 pm",
  "7:30 pm",
  "8:00 pm",
  "8:30 pm",
  "9:00 pm",
];

const PARTY_SIZES = [1, 2, 3, 4, 5, 6, 7, 8];

const fieldClasses =
  "h-20 w-full border-2 border-black bg-transparent px-8 font-body text-base leading-[1.4] tracking-[0.02em] text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-olive xl:text-lg";

/**
 * Reservation-styled contact form. There is no booking backend: submitting
 * opens the visitor's mail client with a pre-filled message instead.
 */
export function ReservationForm() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState(TIME_SLOTS[4]);
  const [guests, setGuests] = useState(2);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(
      `Reservation request — ${guests} guest${guests > 1 ? "s" : ""}`,
    );
    const body = encodeURIComponent(
      [
        "Hello Mealio,",
        "",
        "I would like to request a table with the following details:",
        `Date: ${date || "to be confirmed"}`,
        `Time: ${time}`,
        `Guests: ${guests}`,
        "",
        "Thank you!",
      ].join("\n"),
    );
    window.location.href = `mailto:${RESTAURANT.email}?subject=${subject}&body=${body}`;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex w-full max-w-[103rem] flex-col items-center gap-16"
    >
      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-3 xl:gap-12">
        <div>
          <label htmlFor="reservation-date" className="sr-only">
            Preferred date
          </label>
          <input
            id="reservation-date"
            type="date"
            required
            value={date}
            onChange={(event) => setDate(event.target.value)}
            className={fieldClasses}
          />
        </div>

        <div className="relative">
          <label htmlFor="reservation-time" className="sr-only">
            Preferred time
          </label>
          <select
            id="reservation-time"
            value={time}
            onChange={(event) => setTime(event.target.value)}
            className={`${fieldClasses} appearance-none pr-16`}
          >
            {TIME_SLOTS.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
          <IconChevronDown className="pointer-events-none absolute right-10 top-1/2 h-4 w-7 -translate-y-1/2 text-black" />
        </div>

        <div className="relative">
          <label htmlFor="reservation-guests" className="sr-only">
            Number of guests
          </label>
          <select
            id="reservation-guests"
            value={guests}
            onChange={(event) => setGuests(Number(event.target.value))}
            className={`${fieldClasses} appearance-none pr-16`}
          >
            {PARTY_SIZES.map((size) => (
              <option key={size} value={size}>
                {size} {size === 1 ? "Person" : "People"}
              </option>
            ))}
          </select>
          <IconChevronDown className="pointer-events-none absolute right-10 top-1/2 h-4 w-7 -translate-y-1/2 text-black" />
        </div>
      </div>

      <button
        type="submit"
        className="border-2 border-black bg-forest px-[2.25rem] py-4 font-heading text-[clamp(1.125rem,1.5vw,1.5rem)] font-bold leading-[1.5] text-white transition-colors hover:bg-olive focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-olive"
      >
        Book Now
      </button>
      <p className="-mt-10 text-center font-body text-sm tracking-[0.02em] text-stone-text">
        This opens your mail client with a pre-filled request — no online
        booking is processed.
      </p>
    </form>
  );
}
