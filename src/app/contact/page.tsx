import type { Metadata } from "next";
import { RESTAURANT } from "@/lib/constants";
import { Navbar } from "@/components/layout/Navbar";
import { PageHero } from "@/components/layout/PageHero";
import { ReservationForm } from "@/components/contact/ReservationForm";

export const metadata: Metadata = {
  title: "Contact & Reservations",
  description:
    "Get in touch with Mealio — address, opening hours, phone and reservation requests.",
};

const CONTACT_BLOCKS = [
  {
    title: "Visit Us",
    lines: [RESTAURANT.address, RESTAURANT.city],
  },
  {
    title: "Call or Write",
    lines: [RESTAURANT.phone, RESTAURANT.email],
  },
  {
    title: "Opening Hours",
    lines: RESTAURANT.hours.map((row) => `${row.days} · ${row.time}`),
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar variant="light" overlay />
      <PageHero
        title="Contact"
        subtitle="Reserve a table, ask a question or simply say hello."
        image="/images/hero-contact.jpg"
        imageAlt="Dark heirloom cabbage leaves — seasonal produce at Mealio"
      />

      {/* Reservation request — styled after the reference design form */}
      <section className="bg-sage">
        <div className="mx-auto max-w-[120rem] px-6 py-24 md:px-12 xl:px-[7.375rem] xl:py-32">
          <div className="mx-auto mb-20 flex max-w-5xl flex-col items-center gap-5 text-center">
            <h2 className="font-heading text-h1 font-bold text-black">
              Make a Reservation
            </h2>
            <p className="font-body text-lg leading-[1.4] tracking-[0.02em] text-stone-text xl:text-xl">
              Get in touch with the restaurant
            </p>
          </div>
          <ReservationForm />
        </div>
      </section>

      <section className="mx-auto max-w-[120rem] px-6 py-24 md:px-12 xl:px-[7.375rem] xl:py-32">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
          {CONTACT_BLOCKS.map((block) => (
            <article key={block.title} className="flex flex-col gap-8">
              <h2 className="font-heading text-h5 font-bold text-forest">
                {block.title}
              </h2>
              <div
                aria-hidden="true"
                className="border-t-2 border-dashed border-olive/50"
              />
              <div className="flex flex-col gap-3 font-body text-lg leading-[1.4] tracking-[0.02em] text-stone-text xl:text-xl">
                {block.lines.map((line) =>
                  line === RESTAURANT.phone ? (
                    <a
                      key={line}
                      href={`tel:${RESTAURANT.phone.replace(/[^+\d]/g, "")}`}
                      className="hover:text-olive"
                    >
                      {line}
                    </a>
                  ) : line === RESTAURANT.email ? (
                    <a
                      key={line}
                      href={`mailto:${RESTAURANT.email}`}
                      className="hover:text-olive"
                    >
                      {line}
                    </a>
                  ) : (
                    <p key={line}>{line}</p>
                  ),
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
