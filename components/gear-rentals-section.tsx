import Image from "next/image";

import { SectionHeading } from "@/components/section-heading";
import { getMediaAsset } from "@/lib/media-library";
import { gearRentals } from "@/lib/proposal-data";

export function GearRentalsSection() {
  return (
    <section id="equipment" className="bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Professional Production Gears"
          title="A premium equipment gallery combining real camera imagery with replaceable media slots."
          description="Each card represents a core production item within the proposal. Uploaded Sony camera imagery is now included, while the remaining items can still be replaced with additional equipment photography later."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {gearRentals.map((item) => {
            const media = getMediaAsset(item.mediaId);

            if (!media) {
              return null;
            }

            const mediaLabel = media.src.endsWith(".svg")
              ? "Image placeholder"
              : "Equipment image";

            return (
              <article
                key={item.name}
                className="overflow-hidden rounded-[1.75rem] border border-line bg-white shadow-panel"
              >
                <div className="relative">
                  <Image
                    src={media.src}
                    alt={item.name}
                    width={960}
                    height={720}
                    sizes="(min-width: 1280px) 30vw, (min-width: 768px) 44vw, 100vw"
                    className="h-auto w-full"
                />
                  <span className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/92 px-3 py-1 text-[11px] uppercase tracking-proposal text-graphite">
                    {mediaLabel}
                  </span>
                  <span className="absolute right-4 top-4 rounded-full border border-white/70 bg-white/92 px-3 py-1 text-[11px] uppercase tracking-proposal text-graphite">
                    {item.quantity}
                  </span>
                </div>
                <div className="border-t border-line px-6 py-6">
                  <p className="font-display text-2xl leading-snug text-ink">
                    {item.name}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-graphite">
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
