import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { AboutSection } from "@/components/about-section";
import { WhyLifestyleSection } from "@/components/why-lifestyle-section";

export const metadata: Metadata = {
  title: "About",
  description:
    "Lifestyle Studios company profile, core strengths, and production capabilities for the Horticulture Business Platform proposal.",
};

export default function AboutPage() {
  return (
    <>
      <AboutSection />
      <WhyLifestyleSection />

      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="rounded-[2rem] border border-line bg-white p-8 shadow-panel sm:p-10 lg:flex lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="page-kicker">Next Page</p>
              <h2 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
                Continue into the proposal scope and package comparison.
              </h2>
              <p className="mt-5 text-base leading-8 text-graphite sm:text-lg">
                Once the production partner is clear, the next review step is
                the actual work scope, studio setup, and package options.
              </p>
            </div>

            <Link
              href="/scope"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-ink px-6 py-3 text-sm text-ink transition-colors duration-300 hover:bg-ink hover:text-white lg:mt-0"
            >
              View Production Scope
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
