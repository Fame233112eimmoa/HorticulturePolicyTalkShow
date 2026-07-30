import Image from "next/image";

import { siteLogo } from "@/lib/site";

type SiteLogoProps = {
  variant?: "header" | "footer" | "proposal";
  className?: string;
  priority?: boolean;
};

const variantClasses = {
  header: "w-[156px] sm:w-[182px] lg:w-[210px]",
  footer: "w-[220px] sm:w-[250px]",
  proposal: "w-[190px] sm:w-[230px]",
} as const;

const variantSizes = {
  header: "(min-width: 1024px) 210px, (min-width: 640px) 182px, 156px",
  footer: "(min-width: 640px) 250px, 220px",
  proposal: "(min-width: 640px) 230px, 190px",
} as const;

export function SiteLogo({
  variant = "header",
  className = "",
  priority = false,
}: SiteLogoProps) {
  return (
    <div className={`${variantClasses[variant]} ${className}`.trim()}>
      <Image
        src={siteLogo.src}
        alt={siteLogo.alt}
        width={siteLogo.width}
        height={siteLogo.height}
        priority={priority}
        sizes={variantSizes[variant]}
        className="h-auto w-full object-contain"
      />
    </div>
  );
}
