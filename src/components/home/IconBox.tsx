import type { ComponentType, SVGProps } from "react";

interface IconBoxProps {
  /** SVG component rendered inside the sage circle. */
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  text: string;
}

/** Circular sage feature block with a food icon, title and description. */
export function IconBox({ icon: Icon, title, text }: IconBoxProps) {
  return (
    <div className="flex flex-col items-center gap-10 text-center">
      <div className="flex size-52 items-center justify-center rounded-full bg-sage xl:size-[16.25rem]">
        <Icon className="size-24 xl:size-32 text-black" />
      </div>
      <h3 className="font-heading text-h4 font-bold text-black">{title}</h3>
      <p className="max-w-md font-body text-lg leading-[1.4] tracking-[0.02em] text-stone-text xl:text-xl">
        {text}
      </p>
    </div>
  );
}
