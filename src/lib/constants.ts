export const SITE = {
  name: "Mealio",
  tagline: "Healthy Food Restaurant",
  description:
    "A seasonal restaurant celebrating honest food, fresh ingredients and carefully crafted menus.",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

/**
 * Fictional placeholder contact details for the demo restaurant.
 * These values are not real and are documented as such in the README.
 */
export const RESTAURANT = {
  address: "12 Olive Lane, Greenfield District",
  city: "Portland, OR 97205",
  phone: "+1 (503) 555-0148",
  email: "hello@mealio.example.com",
  hours: [
    { days: "Monday — Friday", time: "12:00 — 22:30" },
    { days: "Saturday — Sunday", time: "11:00 — 23:00" },
  ],
} as const;

export const REVALIDATE_SECONDS = 3600;
