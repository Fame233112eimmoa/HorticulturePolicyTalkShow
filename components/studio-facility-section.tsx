import Image from "next/image";
import { BadgeCheck } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import {
  behindTheScenesImages,
  studioImages,
} from "@/lib/media-library";
import { studioBundleFeatures } from "@/lib/proposal-data";

export function StudioFacilitySection() {
  const heroItem = studioImages[0];
  const detailItems = [...studioImages.slice(1), behindTheScenesImages[0]].filter(
    Boolean,
  );

  if (!heroItem) {
    return null;
  }

  const heroLabel = heroItem.src.endsWith(".svg")
    ? "Image placeholder"
    : "Uploaded image";

  return (
    <section id="studio" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Studio And Podcast Facility"
              title="Studio 04 – Podcast Space and Equipment Bundle"
              description="Studio 04 includes the podcast room, microphone setup, seating, utilities, and technical support required for the recording sessions."
            />

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {studioBundleFeatures.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 rounded-[1.4rem] border border-line bg-surface px-5 py-4"
                >
                  <BadgeCheck className="mt-1 h-4 w-4 shrink-0 text-accent" />
                  <span className="text-sm leading-7 text-graphite">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <article className="overflow-hidden rounded-[2rem] border border-line bg-surface shadow-panel">
            <div className="relative">
              <Image
                src={heroItem.src}
                alt={heroItem.title}
                width={1400}
                height={960}
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="h-auto w-full"
              />
              <span className="absolute left-5 top-5 rounded-full border border-white/70 bg-white/90 px-3 py-1 text-[11px] uppercase tracking-proposal text-graphite">
                {heroLabel}
              </span>
            </div>
            <div className="border-t border-line bg-white px-6 py-5">
              <p className="font-display text-2xl text-ink">{heroItem.title}</p>
              <p className="mt-3 text-sm leading-7 text-graphite">
                {heroItem.description}
              </p>
            </div>
          </article>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {detailItems.map((item) => {
            const mediaLabel =
              item.kind === "video"
                ? item.src.endsWith(".svg")
                  ? "Video placeholder"
                  : "Uploaded video"
                : item.src.endsWith(".svg")
                  ? "Image placeholder"
                  : "Uploaded image";

            return (
              <article
                key={item.title}
                className="overflow-hidden rounded-[1.75rem] border border-line bg-surface"
              >
                <div className="relative">
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={900}
                    height={720}
                    sizes="(min-width: 1280px) 22vw, (min-width: 768px) 44vw, 100vw"
                    className="h-auto w-full"
                  />
                  <span className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/90 px-3 py-1 text-[11px] uppercase tracking-proposal text-graphite">
                    {mediaLabel}
                  </span>
                </div>
                <div className="border-t border-line bg-white px-5 py-5">
                  <p className="font-display text-xl text-ink">{item.title}</p>
                  <p className="mt-3 text-sm leading-7 text-graphite">
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
