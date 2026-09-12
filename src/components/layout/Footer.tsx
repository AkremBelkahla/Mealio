import { RESTAURANT, SITE } from "@/lib/constants";
import {
  IconFacebook,
  IconInstagram,
  IconTwitter,
  IconYoutube,
} from "@/components/ui/icons";
import { SubscribeForm } from "./SubscribeForm";

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com", Icon: IconInstagram },
  { label: "Twitter", href: "https://twitter.com", Icon: IconTwitter },
  { label: "Facebook", href: "https://facebook.com", Icon: IconFacebook },
  { label: "YouTube", href: "https://youtube.com", Icon: IconYoutube },
] as const;

export function Footer() {
  return (
    <footer className="bg-forest text-white">
      <div className="mx-auto grid max-w-[120rem] grid-cols-1 gap-16 px-6 py-20 md:px-12 lg:grid-cols-[1.1fr_1fr_1.6fr] xl:px-[8.625rem] xl:py-28">
        <div>
          <p className="font-heading text-6xl font-bold leading-[1.1] xl:text-[4.25rem]">
            {SITE.name}
            <span className="text-lime-leaf">.</span>
          </p>
          <p className="mt-6 font-body text-lg leading-[1.4] tracking-[0.02em] text-white/80">
            {SITE.tagline}
          </p>
        </div>

        <div>
          <h2 className="font-heading text-[2rem] font-bold leading-[1.5]">
            Contact
          </h2>
          <div className="mt-12 flex flex-col gap-12 font-body text-lg leading-[25px] tracking-[0.02em]">
            <p>
              <a
                href={`tel:${RESTAURANT.phone.replace(/[^+\d]/g, "")}`}
                className="transition-colors hover:text-lime-leaf focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                {RESTAURANT.phone}
              </a>
              <br />
              <a
                href={`mailto:${RESTAURANT.email}`}
                className="transition-colors hover:text-lime-leaf focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                {RESTAURANT.email}
              </a>
            </p>
            <p>
              {RESTAURANT.address}
              <br />
              {RESTAURANT.city}
            </p>
          </div>
        </div>

        <div>
          <h2 className="font-heading text-[2rem] font-bold leading-[1.5]">
            Never Miss a Recipe
          </h2>
          <div className="mt-12">
            <SubscribeForm />
          </div>
          <p className="mt-10 font-body text-sm leading-[1.4] tracking-[0.02em] text-white/80">
            Join our subscribers and get our best recipes delivered each week!
          </p>
        </div>
      </div>

      <div className="border-t-2 border-dashed border-olive/60">
        <div className="mx-auto flex max-w-[120rem] flex-col items-start justify-between gap-6 px-6 py-10 md:px-12 lg:flex-row lg:items-center xl:px-[8.625rem]">
          <p className="font-body text-lg leading-[1.4] tracking-[0.02em] xl:text-2xl">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <ul className="flex items-center gap-7">
            {SOCIAL_LINKS.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${SITE.name} on ${label}`}
                  className="block text-white transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  <Icon className="h-6 w-7" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
