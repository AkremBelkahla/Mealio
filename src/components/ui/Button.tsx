import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant =
  | "border-dark"
  | "border-light"
  | "filled-forest"
  | "filled-olive";

const baseClasses =
  "inline-flex items-center justify-center border-2 px-[2.875rem] py-5 font-heading text-[clamp(1.25rem,2vw,2rem)] font-bold leading-[1.5] whitespace-nowrap transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4";

const variantClasses: Record<ButtonVariant, string> = {
  "border-dark":
    "border-black text-black hover:bg-forest hover:text-paper hover:border-forest focus-visible:outline-olive",
  "border-light":
    "border-white text-white hover:bg-paper hover:text-forest focus-visible:outline-white",
  "filled-forest":
    "border-black bg-forest text-white hover:bg-olive focus-visible:outline-olive",
  "filled-olive":
    "border-transparent bg-olive text-white hover:bg-forest focus-visible:outline-white",
};

interface ButtonLinkProps extends ComponentProps<typeof Link> {
  variant?: ButtonVariant;
}

export function ButtonLink({
  variant = "border-dark",
  className,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(baseClasses, variantClasses[variant], className)}
      {...props}
    />
  );
}

interface ButtonProps extends ComponentProps<"button"> {
  variant?: ButtonVariant;
}

export function Button({
  variant = "border-dark",
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(baseClasses, variantClasses[variant], className)}
      {...props}
    />
  );
}
