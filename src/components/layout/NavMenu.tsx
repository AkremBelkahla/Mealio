"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, RESTAURANT } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { IconClose, IconDot, IconMenu } from "@/components/ui/icons";
import { Logo } from "./Logo";

interface NavMenuProps {
  variant?: "dark" | "light";
}

export function NavMenu({ variant = "dark" }: NavMenuProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Close the menu on navigation — adjust state during render (React-recommended
  // alternative to setState inside an effect).
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-controls="site-menu"
        aria-label="Open navigation menu"
        className={cn(
          "flex h-[4.5rem] w-24 items-center justify-center transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4",
          variant === "light"
            ? "text-white focus-visible:outline-white"
            : "text-forest focus-visible:outline-olive",
        )}
      >
        <IconMenu className="h-9 w-12" />
      </button>

      {open ? (
        <div
          id="site-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="fixed inset-0 z-50 flex flex-col bg-paper"
        >
          <div className="flex h-24 items-center justify-between px-6 md:px-12 xl:h-40 xl:px-[7.375rem]">
            <Logo />
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close navigation menu"
              className="flex h-16 w-16 items-center justify-center text-forest transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-olive"
            >
              <IconClose className="h-10 w-10" />
            </button>
          </div>

          <nav className="flex flex-1 items-center px-6 md:px-12 xl:px-[7.375rem]">
            <ul className="flex flex-col gap-8 xl:gap-12">
              {NAV_LINKS.map((link) => (
                <li key={link.href} className="flex items-center gap-5">
                  <IconDot
                    className={cn(
                      "h-3 w-3",
                      pathname === link.href
                        ? "text-olive"
                        : "text-forest/25",
                    )}
                  />
                  <Link
                    href={link.href}
                    aria-current={pathname === link.href ? "page" : undefined}
                    className="font-heading text-[clamp(2.5rem,7vw,4.125rem)] font-bold uppercase leading-none text-forest transition-colors hover:text-olive focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-olive"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-2 border-t-2 border-dashed border-olive/40 px-6 py-8 md:px-12 xl:px-[7.375rem]">
            <a
              href={`tel:${RESTAURANT.phone.replace(/[^+\d]/g, "")}`}
              className="font-body text-lg tracking-[0.02em] text-stone-text hover:text-olive"
            >
              {RESTAURANT.phone}
            </a>
            <a
              href={`mailto:${RESTAURANT.email}`}
              className="font-body text-lg tracking-[0.02em] text-stone-text hover:text-olive"
            >
              {RESTAURANT.email}
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
}
