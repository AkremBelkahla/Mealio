import Image from "next/image";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  imageAlt: string;
}

/** Full-width page header: photo, dark overlay and a large centered title. */
export function PageHero({ title, subtitle, image, imageAlt }: PageHeroProps) {
  return (
    <section className="relative flex h-[62svh] min-h-[30rem] items-center justify-center overflow-clip xl:h-[53.125rem]">
      <Image
        src={image}
        alt={imageAlt}
        fill
        sizes="100vw"
        className="object-cover"
        loading="eager"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      <div className="relative flex flex-col items-center gap-6 px-6 text-center">
        <h1 className="font-heading text-h1 font-bold text-white">{title}</h1>
        {subtitle ? (
          <p className="max-w-3xl font-body text-lg leading-[1.4] tracking-[0.02em] text-white/90 xl:text-2xl">
            {subtitle}
          </p>
        ) : null}
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-0 right-12 hidden flex-col items-center gap-4 xl:flex"
      >
        <span className="rotate-90 font-heading text-3xl font-bold leading-[1.5] text-white">
          Scroll
        </span>
        <span className="mt-14 h-40 w-0 border-l-2 border-dashed border-white" />
      </div>
    </section>
  );
}
