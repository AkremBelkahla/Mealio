import { RESTAURANT } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/Button";
import { Logo } from "./Logo";
import { NavMenu } from "./NavMenu";

interface NavbarProps {
  /** `light` renders white text for use over the page hero image. */
  variant?: "dark" | "light";
  /** `overlay` positions the bar absolutely on top of a hero section. */
  overlay?: boolean;
}

export function Navbar({ variant = "dark", overlay = false }: NavbarProps) {
  const light = variant === "light";
  return (
    <header
      className={cn(
        "z-40",
        overlay ? "absolute inset-x-0 top-0" : "relative",
      )}
    >
      <div className="mx-auto flex h-24 max-w-[120rem] items-center gap-4 px-6 md:px-12 xl:h-52 xl:gap-10 xl:px-[7.375rem]">
        <Logo variant={variant} />
        <NavMenu variant={variant} />
        <div className="ml-auto flex items-center gap-10">
          <a
            href={`tel:${RESTAURANT.phone.replace(/[^+\d]/g, "")}`}
            className={cn(
              "hidden font-body text-lg leading-none tracking-[0.02em] transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 lg:block",
              light
                ? "text-white focus-visible:outline-white"
                : "text-forest focus-visible:outline-olive",
            )}
          >
            {RESTAURANT.phone}
          </a>
          <div className="hidden sm:block">
            <ButtonLink
              href="/contact"
              variant={light ? "border-light" : "border-dark"}
            >
              Reservations
            </ButtonLink>
          </div>
        </div>
      </div>
    </header>
  );
}
