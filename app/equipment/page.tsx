import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { GearRentalsSection } from "@/components/gear-rentals-section";

export const metadata: Metadata = {
  title: "Equipment",
  description:
    "Dedicated equipment page covering cameras, lenses, monitors, lighting, tripods, and production accessories for the proposal.",
};

export default function EquipmentPage() {
  return (
    <>
      <GearRentalsSection />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="rounded-[2rem] border border-line bg-surface p-8 sm:p-10 lg:flex lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="page-kicker">Next Page</p>
              <h2 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
                Continue into crew structure or package pricing.
              </h2>
              <p className="mt-5 text-base leading-8 text-graphite sm:text-lg">
                Equipment supports the picture standard, but the final outcome
                also depends on the crew structure and the package level chosen.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0">
              <Link
                href="/crew"
                className="inline-flex items-center gap-2 rounded-full border border-ink px-6 py-3 text-sm text-ink transition-colors duration-300 hover:bg-ink hover:text-white"
              >
                View Crew
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/budget"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-6 py-3 text-sm text-ink transition-colors duration-300 hover:border-ink"
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
