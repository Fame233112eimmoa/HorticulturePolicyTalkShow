import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { BudgetPackageCard } from "@/components/budget-package-card";
import { SectionHeading } from "@/components/section-heading";
import {
  cookingShowBudgetPackages,
  talkShowBudgetPackages,
} from "@/lib/proposal-data";

export const metadata: Metadata = {
  title: "Production Packages",
  description:
    "Compare the four quoted Horticulture Business Platform production packages across talk-show and cooking-show formats, from GH₵56,000 to GH₵85,000.",
};

export default function BudgetPage() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Talk Show Packages"
            title="Two quoted options for the studio panel discussion format."
            description="Choose between the premium multi-camera route and a more cost-conscious studio package for the talk-show brief."
          />

          <div className="mt-12 grid gap-6 xl:grid-cols-2">
            {talkShowBudgetPackages.map((item) => (
              <BudgetPackageCard
                key={item.id}
                packageOption={item}
                showChooseLink
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Cooking Show Packages"
            title="Two quoted options for the cooking-show production format."
            description="These routes shift the production package toward kitchen coverage, food presentation, and cooking-show camera support."
          />

          <div className="mt-12 grid gap-6 xl:grid-cols-2">
            {cookingShowBudgetPackages.map((item) => (
              <BudgetPackageCard
                key={item.id}
                packageOption={item}
                showChooseLink
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="rounded-[2rem] border border-line bg-surface p-8 shadow-panel sm:p-10 lg:flex lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="page-kicker">Selection Note</p>
              <h2 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
                Every package is presented as a quoted production option for
                client approval.
              </h2>
              <p className="mt-5 text-base leading-8 text-graphite sm:text-lg">
                Review the preferred format, total, and support level first.
                Once the client selects a package, Lifestyle Studios can confirm
                scheduling, final inclusions, and production dates.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0">
              <Link
                href="/scope"
                className="inline-flex items-center gap-2 rounded-full border border-ink px-6 py-3 text-sm text-ink transition-colors duration-300 hover:bg-ink hover:text-white"
              >
                Revisit Production Scope
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/proposal"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-6 py-3 text-sm text-ink transition-colors duration-300 hover:border-ink"
              >
                Open Printable Proposal
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
