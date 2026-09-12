"use client";

import { useState } from "react";

/**
 * Newsletter form — demo only. No data leaves the browser; submission shows a
 * local confirmation since the site has no backend.
 */
export function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <p className="border-2 border-white px-10 py-7 font-body text-xl leading-[1.4] tracking-[0.02em] text-white">
        Thank you — you are on the list.
      </p>
    );
  }

  return (
    <form
      className="flex flex-col gap-6 sm:flex-row sm:items-stretch"
      onSubmit={(event) => {
        event.preventDefault();
        if (email.trim()) setSubmitted(true);
      }}
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email Address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Email Address"
        className="w-full border-2 border-white bg-transparent px-10 py-7 font-body text-xl leading-[1.4] tracking-[0.02em] text-white placeholder:text-white/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      />
      <button
        type="submit"
        className="shrink-0 bg-olive px-[2.875rem] py-5 font-heading text-[clamp(1.25rem,2vw,2rem)] font-bold leading-[1.5] text-white transition-colors hover:bg-lime-leaf focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
      >
        Subscribe
      </button>
    </form>
  );
}
