import { Navbar } from "@/components/layout/Navbar";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <section className="mx-auto flex max-w-4xl flex-col items-center gap-8 px-6 py-32 text-center md:px-12 xl:py-40">
        <p className="font-heading text-h1 font-bold text-olive/30">404</p>
        <h1 className="font-heading text-h2 font-bold text-forest">
          This plate is empty
        </h1>
        <p className="font-body text-lg leading-[1.4] tracking-[0.02em] text-stone-text xl:text-xl">
          The page you are looking for is not on today&rsquo;s menu. Let us take
          you back to something delicious.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
          <ButtonLink href="/" variant="filled-forest">
            Back Home
          </ButtonLink>
          <ButtonLink href="/menu" variant="border-dark">
            View the Menu
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
