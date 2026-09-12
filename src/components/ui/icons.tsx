import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function IconArrowRight(props: IconProps) {
  return (
    <svg
      viewBox="0 0 48 28"
      fill="none"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <line x1="0" y1="14" x2="44" y2="14" stroke="currentColor" strokeWidth="3" />
      <path
        d="M32 3l12 11-12 11"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
        strokeLinecap="square"
      />
    </svg>
  );
}

export function IconArrowLeft(props: IconProps) {
  return (
    <svg
      viewBox="0 0 48 28"
      fill="none"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <line x1="4" y1="14" x2="48" y2="14" stroke="currentColor" strokeWidth="3" />
      <path
        d="M16 3L4 14l12 11"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
        strokeLinecap="square"
      />
    </svg>
  );
}

export function IconChevronDown(props: IconProps) {
  return (
    <svg
      viewBox="0 0 28 16"
      fill="none"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path
        d="M2 2l12 12L26 2"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="square"
      />
    </svg>
  );
}

export function IconMenu(props: IconProps) {
  return (
    <svg
      viewBox="0 0 48 36"
      fill="none"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <line x1="0" y1="2" x2="48" y2="2" stroke="currentColor" strokeWidth="4" />
      <line x1="0" y1="18" x2="48" y2="18" stroke="currentColor" strokeWidth="4" />
      <line x1="0" y1="34" x2="34" y2="34" stroke="currentColor" strokeWidth="4" />
    </svg>
  );
}

export function IconClose(props: IconProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path
        d="M4 4l32 32M36 4L4 36"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="square"
      />
    </svg>
  );
}

export function IconInstagram(props: IconProps) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <rect x="2" y="2" width="24" height="24" rx="7" stroke="currentColor" strokeWidth="2" />
      <circle cx="14" cy="14" r="6" stroke="currentColor" strokeWidth="2" />
      <circle cx="21" cy="7" r="1.6" fill="currentColor" />
    </svg>
  );
}

export function IconTwitter(props: IconProps) {
  return (
    <svg
      viewBox="0 0 28 22"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M17.2 0h3.4l-7.4 8.5L22 22h-6.8l-5.3-7-6.1 7H.4l7.9-9.1L0 0h7l4.8 6.4L17.2 0Zm-1.2 15.2h1.9L7.6 1.7H5.5L16 15.2Z" />
    </svg>
  );
}

export function IconFacebook(props: IconProps) {
  return (
    <svg
      viewBox="0 0 26 26"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M17 26v-9.6h3.2l.5-3.7H17V10c0-1.1.3-1.8 1.9-1.8h2V4.8c-.4 0-1.6-.2-3-.2-3 0-5 1.8-5 5.1v3H9.6v3.7h3.3V26H17Z" />
    </svg>
  );
}

export function IconYoutube(props: IconProps) {
  return (
    <svg
      viewBox="0 0 28 22"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M27.4 3.4a3.5 3.5 0 0 0-2.4-2.5C22.9.3 14 .3 14 .3s-8.9 0-11 .6A3.5 3.5 0 0 0 .6 3.4 36.7 36.7 0 0 0 0 11c0 2.5.2 5 .6 7.6a3.5 3.5 0 0 0 2.4 2.4c2.1.6 11 .6 11 .6s8.9 0 11-.6a3.5 3.5 0 0 0 2.4-2.4c.4-2.6.6-5.1.6-7.6 0-2.5-.2-5-.6-7.6ZM11.2 15.7V6.3L18.5 11l-7.3 4.7Z" />
    </svg>
  );
}

export function IconDot(props: IconProps) {
  return (
    <svg
      viewBox="0 0 12 12"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <circle cx="6" cy="6" r="6" />
    </svg>
  );
}
