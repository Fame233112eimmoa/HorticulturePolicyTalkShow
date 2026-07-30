import Image from "next/image";

import { SectionHeading } from "@/components/section-heading";
import { getMediaAsset } from "@/lib/media-library";
import { aboutCopy, strengths } from "@/lib/proposal-data";

export function AboutSection() {
  const aboutMedia = getMediaAsset("studio-team");

  if (!aboutMedia) {
    return null;
  }

  return (
    <section id="about" className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-8 lg:py-24">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -left-6 top-10 hidden h-56 w-56 rounded-full bg-surface lg:block" />
          <div className="relative overflow-hidden rounded-[2rem] border border-line bg-surface shadow-panel">
            <Image
              src={aboutMedia.src}
              alt={aboutMedia.title}
              width={1200}
              height={980}
              sizes="(min-width: 1024px) 44vw, 100vw"
              className="h-auto w-full"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="About Lifestyle Studios"
            title="A production partner built around quality, clarity, and dependable delivery."
            description={aboutCopy}
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {strengths.map((strength) => {
              const Icon = strength.icon;

              return (
                <article
                  key={strength.title}
                  className="rounded-[1.5rem] border border-line bg-surface p-5"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white">
                      <Icon className="h-4 w-4 text-accent" />
                    </div>
                    <p className="font-display text-xl text-ink">
                      {strength.title}
                    </p>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-graphite">
                    {strength.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
