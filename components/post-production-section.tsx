import Image from "next/image";

import { SectionHeading } from "@/components/section-heading";
import { getMediaAsset } from "@/lib/media-library";
import { postProductionItems } from "@/lib/proposal-data";

export function PostProductionSection() {
  const postProductionMedia = getMediaAsset("post-production-workstation");
  const postProductionGallery = [
    postProductionMedia,
    getMediaAsset("post-production-editing-suite"),
    getMediaAsset("post-production-synchronization-desk"),
  ].filter(Boolean);

  if (!postProductionMedia) {
    return null;
  }

  return (
    <section id="post-production" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Post-Production"
          title="Editorial, clean-up, finishing, and final delivery."
          description="The post-production phase covers editing, colour, audio, graphics, mastering, quality checks, and final submission of the completed episodes."
        />

        {postProductionGallery.length > 0 ? (
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {postProductionGallery.map((item) => (
              <article
                key={item.id}
                className="overflow-hidden rounded-[1.5rem] border border-line bg-surface"
              >
                <div className="relative">
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={1000}
                    height={760}
                    sizes="(min-width: 768px) 30vw, 100vw"
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
                <div className="border-t border-line bg-white px-4 py-4">
                  <p className="font-display text-lg text-ink">{item.title}</p>
                  <p className="mt-2 text-sm leading-6 text-graphite">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        ) : null}

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {postProductionItems.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-[1.35rem] border border-line bg-surface p-5"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-white">
                  <Icon className="h-4 w-4 text-accent" />
                </div>
                <h2 className="mt-4 font-display text-xl leading-snug text-ink">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-graphite">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
