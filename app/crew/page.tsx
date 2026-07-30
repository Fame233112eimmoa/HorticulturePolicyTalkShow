import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { CrewSection } from "@/components/crew-section";

export const metadata: Metadata = {
  title: "Crew",
  description:
    "Production crew structure for direction, camera operation, photography, styling, support, and post-production.",
};

export default function CrewPage() {
  return (
    <>
      <CrewSection />

      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="rounded-[2rem] border border-line bg-white p-8 shadow-panel sm:p-10 lg:flex lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="page-kicker">Next Page</p>
              <h2 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
                Continue into post-production or move directly to package pricing.
              </h2>
              <p className="mt-5 text-base leading-8 text-graphite sm:text-lg">
                After reviewing the on-set team, the next practical area is the
                finishing workflow and the package route the client prefers.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0">
              <Link
                href="/post-production"
                className="inline-flex items-center gap-2 rounded-full border border-ink px-6 py-3 text-sm text-ink transition-colors duration-300 hover:bg-ink hover:text-white"
              >
                View Post-Production
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/budget"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-6 py-3 text-sm text-ink transition-colors duration-300 hover:border-ink"
              >
                View Packages
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
