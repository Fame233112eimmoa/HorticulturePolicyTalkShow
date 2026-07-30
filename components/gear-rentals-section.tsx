import Image from "next/image";

import { SectionHeading } from "@/components/section-heading";
import { getMediaAsset } from "@/lib/media-library";
import {
  equipmentScheduleGroups,
  gearRentals,
} from "@/lib/proposal-data";

export function GearRentalsSection() {
  return (
    <section id="equipment" className="bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Equipment Schedule"
          title="Every quoted camera, lens, light, monitor, and support tool used across the proposal."
          description="The main gallery highlights the core Sony and Canon camera routes, and the equipment schedule below lists the full toolset attached to each production option."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {gearRentals.map((item) => {
            const media = getMediaAsset(item.mediaId);

            if (!media) {
              return null;
            }

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
                </div>
                <div className="border-t border-line px-6 py-6">
                  <p className="font-display text-2xl leading-snug text-ink">
                    {item.name}
                  </p>
                  <p className="mt-2 text-sm text-graphite">{item.quantity}</p>
                  <p className="mt-4 text-sm leading-7 text-graphite">
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-14">
          <div className="max-w-3xl">
            <p className="page-kicker">Full Package Breakdown</p>
            <h3 className="mt-4 font-display text-3xl leading-tight text-ink sm:text-4xl">
              All cameras and tools, package by package.
            </h3>
            <p className="mt-4 text-sm leading-7 text-graphite sm:text-base">
              Each production route below shows the exact equipment attached to
              that option, including the Sony premium packages, the Canon
              standard packages, and the Studio 04 podcast facility tools.
            </p>
          </div>

          <div className="mt-8 grid gap-5 xl:grid-cols-2">
            {equipmentScheduleGroups.map((group) => (
              <article
                key={group.title}
                className="overflow-hidden rounded-[1.75rem] border border-line bg-white shadow-panel"
              >
                <div className="border-b border-line px-6 py-6">
                  <h3 className="font-display text-2xl leading-snug text-ink">
                    {group.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-graphite">
                    {group.description}
                  </p>
                </div>

                <ul className="divide-y divide-line">
                  {group.items.map((item) => (
                    <li key={`${group.title}-${item.name}`} className="px-6 py-4">
                      <p className="text-sm font-medium leading-7 text-ink">
                        {item.name}
                      </p>
                      {item.detail ? (
                        <p className="text-sm leading-7 text-graphite">
                          {item.detail}
                        </p>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
