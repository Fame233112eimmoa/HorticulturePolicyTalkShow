import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { MediaGallerySection } from "@/components/media-gallery-section";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Image and video gallery for studio references, equipment, crew activity, behind-the-scenes photography, and post-production visuals.",
};

export default function GalleryPage() {
  return (
    <>
      <MediaGallerySection />

      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="rounded-[2rem] border border-line bg-white p-8 shadow-panel sm:p-10 lg:flex lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="page-kicker">Next Page</p>
              <h2 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
                Continue into package approval or direct contact.
              </h2>
              <p className="mt-5 text-base leading-8 text-graphite sm:text-lg">
                After reviewing the media references, the next step is choosing
                a package or sending approval and revisions through the contact
                page.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0">
              <Link
                href="/budget"
                className="inline-flex items-center gap-2 rounded-full border border-ink px-6 py-3 text-sm text-ink transition-colors duration-300 hover:bg-ink hover:text-white"
              >
                View Packages
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-6 py-3 text-sm text-ink transition-colors duration-300 hover:border-ink"
              >
                Contact Lifestyle Studios
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
