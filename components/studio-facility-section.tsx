import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { productionVideos, studioImages } from "@/lib/media-library";
import { studioBundleFeatures } from "@/lib/proposal-data";

export function StudioFacilitySection() {
  const studioOptions = productionVideos.filter((item) =>
    item.id.startsWith("studio-option-"),
  );

  if (studioOptions.length === 0) {
    return null;
  }

  return (
    <section id="studio" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow="Studio Options"
            title="Choose the preferred studio option for the production."
            description="Review the two available studio walkthroughs below. Both options use the same core Studio 04 podcast facility bundle and the client only needs to select the preferred room setup."
          />
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {studioBundleFeatures.map((feature) => (
            <div
              key={feature}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm text-graphite"
            >
              <BadgeCheck className="h-4 w-4 shrink-0 text-accent" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 xl:grid-cols-2">
          {studioOptions.map((item, index) => {
            const optionLabel = `Studio Option ${index + 1}`;
            return (
              <article
                key={item.id}
                className="overflow-hidden rounded-[2rem] border border-line bg-surface shadow-panel"
              >
                <div className="border-b border-line bg-white px-6 py-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="text-xs uppercase tracking-proposal text-graphite">
                        Client choice
                      </p>
                      <h2 className="mt-2 font-display text-3xl text-ink">
                        {optionLabel}
                      </h2>
                    </div>
                    <span className="rounded-full border border-line bg-surface px-3 py-1 text-[11px] uppercase tracking-proposal text-graphite">
                      Studio walkthrough
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-graphite">
                    {item.description}
                  </p>
                </div>

                <div className="px-6 py-6">
                  <div className="mx-auto max-w-[20rem] overflow-hidden rounded-[1.5rem] border border-line bg-black">
                    <video
                      controls
                      playsInline
                      preload="auto"
                      poster={item.poster}
                      className="aspect-[9/16] h-full w-full object-contain bg-black"
                    >
                      <source src={item.src} />
                    </video>
                  </div>

                  <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="max-w-xl text-sm leading-7 text-graphite">
                      Select the preferred room layout, camera spacing, and
                      visual atmosphere for the recording setup.
                    </p>
                    <Link
                      href={`/contact?studio=${encodeURIComponent(item.id)}`}
                      aria-label={`Choose ${optionLabel}`}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink text-ink transition-colors duration-300 hover:bg-ink hover:text-white"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12">
          <div className="flex items-center justify-between gap-4">
            <p className="text-xs uppercase tracking-proposal text-graphite">
              Seating Settings
            </p>
            <p className="text-sm text-graphite">Visual references</p>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {studioImages.map((item) => (
              <article
                key={item.id}
                className="overflow-hidden rounded-[1.5rem] border border-line bg-surface"
              >
                <div className="relative">
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={1200}
                    height={900}
                    sizes="(min-width: 768px) 44vw, 100vw"
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
                <div className="border-t border-line bg-white px-4 py-4">
                  <p className="font-display text-lg text-ink">{item.title}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-[1.5rem] border border-line bg-surface px-6 py-5">
          <p className="text-sm leading-7 text-graphite">
            The selected studio option can be confirmed during approval, and
            the rest of the production package can remain the same.
          </p>
        </div>
      </div>
    </section>
  );
}
