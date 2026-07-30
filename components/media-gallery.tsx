"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Play, X } from "lucide-react";

type MediaGalleryItem = {
  title: string;
  description: string;
  kind: "image" | "video";
  src: string;
  poster?: string;
  duration?: string;
};

type MediaGalleryProps = {
  items: MediaGalleryItem[];
};

export function MediaGallery({ items }: MediaGalleryProps) {
  const [activeImage, setActiveImage] = useState<MediaGalleryItem | null>(null);

  useEffect(() => {
    if (!activeImage) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveImage(null);
      }
    };

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeImage]);

  return (
    <>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) =>
          item.kind === "image" ? (
            <button
              key={item.title}
              type="button"
              onClick={() => setActiveImage(item)}
              className="overflow-hidden rounded-[1.75rem] border border-line bg-white text-left shadow-panel transition-transform duration-300 hover:-translate-y-1"
              aria-label={`Open ${item.title}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="border-t border-line px-6 py-6">
                <p className="font-display text-2xl leading-snug text-ink">
                  {item.title}
                </p>
                <p className="mt-4 text-sm leading-7 text-graphite">
                  {item.description}
                </p>
              </div>
            </button>
          ) : (
            <article
              key={item.title}
              className="overflow-hidden rounded-[1.75rem] border border-line bg-white shadow-panel"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                {item.src.endsWith(".mp4") || item.src.endsWith(".webm") ? (
                  <video
                    controls
                    preload="metadata"
                    poster={item.poster}
                    className="h-full w-full object-cover"
                  >
                    <source src={item.src} />
                  </video>
                ) : (
                  <>
                    <Image
                      src={item.poster ?? item.src}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 border-t border-white/60 bg-white/92 px-4 py-4">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white">
                            <Play className="ml-0.5 h-4 w-4 fill-current" />
                          </div>
                          <div>
                            <p className="text-sm text-ink">
                              Premium video player
                            </p>
                            <p className="text-xs text-graphite">
                              {item.duration ?? "Pending upload"}
                            </p>
                          </div>
                        </div>
                        <div className="hidden w-28 rounded-full bg-line sm:block">
                          <div className="h-1.5 w-1/3 rounded-full bg-accent" />
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div className="border-t border-line px-6 py-6">
                <p className="font-display text-2xl leading-snug text-ink">
                  {item.title}
                </p>
                <p className="mt-4 text-sm leading-7 text-graphite">
                  {item.description}
                </p>
              </div>
            </article>
          ),
        )}
      </div>

      {activeImage ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-white/96 p-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="gallery-lightbox-title"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] border border-line bg-white shadow-panel"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveImage(null)}
              className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink transition-colors duration-300 hover:bg-surface"
              aria-label="Close image preview"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative aspect-[16/10] bg-surface">
              <Image
                src={activeImage.src}
                alt={activeImage.title}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>

            <div className="border-t border-line px-6 py-5">
              <p
                id="gallery-lightbox-title"
                className="font-display text-3xl text-ink"
              >
                {activeImage.title}
              </p>
              <p className="mt-3 text-sm leading-7 text-graphite">
                {activeImage.description}
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
