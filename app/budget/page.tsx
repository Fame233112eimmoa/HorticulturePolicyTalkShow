import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import {
  budgetItems,
  budgetTotal,
  formatCurrency,
  grandTotalNote,
  perDayCost,
  perEpisodeCost,
} from "@/lib/proposal-data";

export const metadata: Metadata = {
  title: "Production Budget",
  description:
    "Production budget for the Horticulture Policy Talk Show, covering studio space, lighting, styling, photography, crew, direction, post-production, and the GH₵85,000 total.",
};

export default function BudgetPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <p className="page-kicker">Production Budget</p>
          <h1 className="page-title">GH₵85,000 budget for 12 episodes across 6 production days.</h1>
          <p className="page-copy">
            The figures below cover studio space, podcast production gear,
            lighting, makeup and styling, photography, crew, direction,
            post-production, and final delivery.
          </p>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
            <article className="rounded-[2rem] border border-line bg-white p-8 shadow-panel">
              <p className="text-sm uppercase tracking-proposal text-graphite">
                Grand Total
              </p>
              <p className="mt-6 font-display text-5xl text-ink sm:text-6xl">
                {formatCurrency(budgetTotal)}
              </p>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-graphite">
                {grandTotalNote}
              </p>
            </article>

            <article className="metric-card bg-white">
              <p className="text-sm uppercase tracking-proposal text-graphite">
                Per episode
              </p>
              <p className="mt-4 font-display text-4xl text-ink">
                {formatCurrency(perEpisodeCost)}
              </p>
              <p className="mt-4 text-sm leading-7 text-graphite">
                Average cost based on 12 completed episodes.
              </p>
            </article>

            <article className="metric-card bg-white">
              <p className="text-sm uppercase tracking-proposal text-graphite">
                Per production day
              </p>
              <p className="mt-4 font-display text-4xl text-ink">
                {formatCurrency(perDayCost)}
              </p>
              <p className="mt-4 text-sm leading-7 text-graphite">
                Average allocation across 6 production days.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="rounded-[2rem] border border-line bg-surface p-8 shadow-panel sm:p-10">
            <div className="max-w-3xl">
              <p className="page-kicker">Budget Summary</p>
              <h2 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
                Category totals for the full production budget.
              </h2>
              <p className="mt-5 text-base leading-8 text-graphite sm:text-lg">
                Review the main allocations first, then the detailed notes for
                each cost line below.
              </p>
            </div>

            <div className="mt-10 overflow-hidden rounded-[1.75rem] border border-line bg-white">
              {budgetItems.map((item, index) => (
                <div
                  key={item.item}
                  className={`grid gap-3 px-5 py-5 sm:grid-cols-[1fr_auto] sm:items-center sm:px-6 ${
                    index === budgetItems.length - 1 ? "" : "border-b border-line"
                  }`}
                >
                  <p className="text-sm uppercase tracking-proposal text-graphite">
                    {item.item}
                  </p>
                  <p className="font-display text-2xl text-ink sm:text-right">
                    {formatCurrency(item.amount)}
                  </p>
                </div>
              ))}

              <div className="grid gap-3 border-t border-line bg-surface px-5 py-6 sm:grid-cols-[1fr_auto] sm:items-center sm:px-6">
                <p className="font-display text-2xl text-ink">Grand Total</p>
                <p className="font-display text-3xl text-ink sm:text-right">
                  {formatCurrency(budgetTotal)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr]">
            <div>
              <SectionHeading
                eyebrow="Budget Breakdown"
                title="Detailed cost lines for the full production investment."
                description="Each line explains what is covered within the GH₵85,000 total."
              />
            </div>

            <div className="space-y-4">
              {budgetItems.map((item) => (
                <article
                  key={item.item}
                  className="rounded-[1.75rem] border border-line bg-surface p-6"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="max-w-2xl">
                      <p className="font-display text-2xl leading-snug text-ink">
                        {item.item}
                      </p>
                      <p className="mt-3 text-sm leading-7 text-graphite">
                        {item.description}
                      </p>
                    </div>

                    <div className="sm:text-right">
                      <p className="text-xs uppercase tracking-proposal text-graphite">
                        Amount
                      </p>
                      <p className="mt-2 font-display text-3xl text-ink">
                        {formatCurrency(item.amount)}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="rounded-[2rem] border border-line bg-white p-8 shadow-panel sm:p-10 lg:flex lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="page-kicker">Final Cost</p>
              <h2 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
                {formatCurrency(budgetTotal)}
              </h2>
              <p className="mt-5 text-base leading-8 text-graphite sm:text-lg">
                {grandTotalNote}
              </p>
            </div>

            <Link
              href="/scope"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-ink px-6 py-3 text-sm text-ink transition-colors duration-300 hover:bg-ink hover:text-white lg:mt-0"
            >
              Revisit Production Scope
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
