"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ reset }: ErrorPageProps) {
  return (
    <>
      <Navbar />
      <section className="mx-auto flex max-w-4xl flex-col items-center gap-8 px-6 py-32 text-center md:px-12 xl:py-40">
        <h1 className="font-heading text-h2 font-bold text-forest">
          Something went wrong in the kitchen
        </h1>
        <p className="font-body text-lg leading-[1.4] tracking-[0.02em] text-stone-text xl:text-2xl">
          We could not prepare this page right now. Please try again in a
          moment.
        </p>
        <Button variant="filled-forest" onClick={reset}>
          Try Again
        </Button>
      </section>
    </>
  );
}
