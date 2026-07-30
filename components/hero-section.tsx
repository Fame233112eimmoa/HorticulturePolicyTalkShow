import Image from "next/image";
import Link from "next/link";

import { getMediaAsset } from "@/lib/media-library";
import { homeHighlights } from "@/lib/proposal-data";

export function HeroSection() {
  const heroMedia = getMediaAsset("hero-production-setup");

  if (!heroMedia) {
    return null;
  }

  return (
    <section className="border-b border-line bg-white">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="font-sans text-xs uppercase tracking-proposal text-accent">
            Prepared by Lifestyle Studios
          </p>
          <h1 className="mt-6 font-display text-5xl leading-none text-ink sm:text-6xl lg:text-7xl">
            Horticulture Policy Talk Show
          </h1>
          <p className="mt-4 text-xl text-graphite sm:text-2xl">
            Professional Production Proposal
          </p>
          <p className="mt-8 max-w-xl text-base leading-8 text-graphite sm:text-lg">
            Full production for 12 episodes across 6 shoot days, including
            studio setup, crew, and post-production delivery.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/scope"
              className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm text-white transition-colors duration-300 hover:bg-graphite"
            >
              View Production Scope
            </Link>
            <Link
              href="/budget"
              className="inline-flex items-center justify-center rounded-full border border-line px-6 py-3 text-sm text-ink transition-colors duration-300 hover:border-ink"
            >
              View Budget
            </Link>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {homeHighlights.map((highlight) => (
              <div
                key={highlight}
                className="rounded-2xl border border-line bg-surface px-5 py-4 text-sm text-graphite"
              >
                {highlight}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-6 rounded-[2rem] border border-line" />
          <div className="relative overflow-hidden rounded-[2rem] border border-line bg-surface shadow-panel">
            <Image
              src={heroMedia.src}
              alt={heroMedia.title}
              width={1200}
              height={980}
              priority
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="h-auto w-full"
            />
            <div className="border-t border-line bg-white/90 px-6 py-5">
              <p className="font-display text-xl text-ink">{heroMedia.title}</p>
              <p className="mt-2 text-sm leading-7 text-graphite">
                {heroMedia.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
