import Link from "next/link";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/constants";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
}

export function Logo({ variant = "dark", className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "font-heading text-4xl font-bold leading-none tracking-tight xl:text-5xl",
        variant === "light" ? "text-white" : "text-forest",
        className,
      )}
      aria-label={`${SITE.name} — Home`}
    >
      {SITE.name}
      <span className="text-lime-leaf">.</span>
    </Link>
  );
}
