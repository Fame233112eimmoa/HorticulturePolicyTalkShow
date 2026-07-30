import Image from "next/image";

import { SectionHeading } from "@/components/section-heading";
import { getMediaAsset } from "@/lib/media-library";
import { postProductionItems } from "@/lib/proposal-data";

export function PostProductionSection() {
  const postProductionMedia = getMediaAsset("post-production-workstation");

  if (!postProductionMedia) {
    return null;
  }

  const mediaLabel =
    postProductionMedia.kind === "video"
      ? postProductionMedia.src.endsWith(".svg")
        ? "Video placeholder"
        : "Uploaded video"
      : postProductionMedia.src.endsWith(".svg")
        ? "Image placeholder"
        : "Uploaded image";

  return (
    <section id="post-production" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.96fr_1.04fr] lg:items-start">
          <article className="overflow-hidden rounded-[2rem] border border-line bg-surface shadow-panel">
            <div className="relative">
              <Image
                src={postProductionMedia.src}
                alt={postProductionMedia.title}
                width={1400}
                height={980}
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="h-auto w-full"
              />
              <span className="absolute left-5 top-5 rounded-full border border-white/70 bg-white/90 px-3 py-1 text-[11px] uppercase tracking-proposal text-graphite">
                {mediaLabel}
              </span>
            </div>
            <div className="border-t border-line bg-white px-6 py-5">
              <p className="font-display text-2xl text-ink">
                {postProductionMedia.title}
              </p>
              <p className="mt-3 text-sm leading-7 text-graphite">
                {postProductionMedia.description}
              </p>
            </div>
          </article>

          <div>
            <SectionHeading
              eyebrow="Post-Production"
              title="Everything included after filming is organised as a complete finishing workflow."
              description="The post-production phase covers editorial, colour, audio, graphics, mastering, quality checks, and final submission of all completed episodes."
            />

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {postProductionItems.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="rounded-[1.5rem] border border-line bg-surface p-5"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white">
                      <Icon className="h-4 w-4 text-accent" />
                    </div>
                    <h2 className="mt-5 font-display text-2xl leading-snug text-ink">
                      {item.title}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-graphite">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
