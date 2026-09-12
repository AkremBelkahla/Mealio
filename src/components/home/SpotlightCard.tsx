import Image from "next/image";
import Link from "next/link";
import { IconArrowRight } from "@/components/ui/icons";

interface SpotlightCardProps {
  image: string;
  imageAlt: string;
  /** Category chip rendered on the image, top-right. */
  tag: string;
  author: string;
  authorImage: string;
  date: string;
  time: string;
  comments: string;
  title: string;
  excerpt: string;
  href: string;
}

/** Editorial card: square photo, category tag, author metadata, dashed rule and read-more link. */
export function SpotlightCard({
  image,
  imageAlt,
  tag,
  author,
  authorImage,
  date,
  time,
  comments,
  title,
  excerpt,
  href,
}: SpotlightCardProps) {
  const meta = [author, date, time, comments];
  return (
    <article>
      <div className="relative aspect-square overflow-clip">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 40vw"
          className="object-cover"
        />
        <span className="absolute right-8 top-3 bg-olive px-8 py-2 font-heading text-lg font-bold leading-[1.85] text-white xl:right-14 xl:text-[1.625rem]">
          {tag}
        </span>
      </div>

      <div className="mt-12 flex flex-wrap items-center gap-x-4 gap-y-3 px-2 xl:flex-nowrap xl:px-14">
        <Image
          src={authorImage}
          alt={`Portrait of ${author}`}
          width={60}
          height={60}
          className="size-15 shrink-0 rounded-none object-cover shadow-[1px_1px_12px_rgba(0,0,0,0.08)]"
        />
        {meta.map((item, index) => (
          <span key={item} className="flex items-center gap-4">
            {index > 0 ? (
              <span aria-hidden="true" className="size-1 rounded-full bg-olive" />
            ) : null}
            <span className="font-body text-base tracking-[0.02em] text-olive whitespace-nowrap xl:text-lg">
              {item}
            </span>
          </span>
        ))}
      </div>

      <div className="mt-10 flex flex-col gap-5 px-2 xl:px-14">
        <h3 className="font-heading text-[1.6rem] font-bold leading-[1.3] text-black xl:text-[2.25rem]">{title}</h3>
        <div
          aria-hidden="true"
          className="border-t-4 border-dashed border-black/80"
        />
        <p className="font-body text-lg leading-[1.4] tracking-[0.02em] text-stone-text xl:text-[1.375rem]">
          {excerpt}
        </p>
        <Link
          href={href}
          className="group mt-6 inline-flex items-center gap-4 font-body text-lg leading-[1.4] tracking-[0.02em] text-black transition-colors hover:text-olive focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-olive xl:text-2xl"
        >
          Read More
          <IconArrowRight className="h-7 w-12 transition-transform duration-300 group-hover:translate-x-2" />
        </Link>
      </div>
    </article>
  );
}
