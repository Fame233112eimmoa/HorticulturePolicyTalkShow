import Link from "next/link";
import { ArrowRight, BadgeCheck } from "lucide-react";

import type { BudgetPackage } from "@/lib/proposal-data";
import { formatCurrency } from "@/lib/proposal-data";

type BudgetPackageCardProps = {
  packageOption: BudgetPackage;
  showChooseLink?: boolean;
  showDescriptions?: boolean;
  className?: string;
};

export function BudgetPackageCard({
  packageOption,
  showChooseLink = false,
  showDescriptions = false,
  className = "",
}: BudgetPackageCardProps) {
  const chooseHref = `/contact?package=${encodeURIComponent(packageOption.id)}`;

  return (
    <article
      className={`print-flow rounded-[2rem] border border-line bg-white p-6 shadow-panel sm:p-8 ${className}`.trim()}
    >
      <div className="flex flex-wrap items-center gap-3">
        <span className="rounded-full border border-line bg-surface px-3 py-1 text-[11px] uppercase tracking-proposal text-graphite">
          {packageOption.format}
        </span>
        <span className="rounded-full border border-line bg-surface px-3 py-1 text-[11px] uppercase tracking-proposal text-graphite">
          {packageOption.optionLabel}
        </span>
      </div>

      <h2 className="mt-6 font-display text-3xl leading-tight text-ink">
        {packageOption.title}
      </h2>
      <p className="mt-4 text-sm leading-7 text-graphite">
        {packageOption.shortSummary}
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
        <div className="flex flex-wrap gap-3 text-xs uppercase tracking-proposal text-graphite">
          <span className="rounded-full border border-line px-3 py-1">
            12 episodes
          </span>
          <span className="rounded-full border border-line px-3 py-1">
            6 production days
          </span>
        </div>
        <div className="sm:text-right">
          <p className="text-xs uppercase tracking-proposal text-graphite">
            Quoted total
          </p>
          <p className="mt-2 font-display text-4xl text-ink">
            {formatCurrency(packageOption.total)}
          </p>
        </div>
      </div>

      <div className="mt-8 space-y-3">
        {packageOption.highlights.map((item) => (
          <div key={item} className="flex items-start gap-3">
            <BadgeCheck className="mt-1 h-4 w-4 shrink-0 text-accent" />
            <p className="text-sm leading-7 text-graphite">{item}</p>
          </div>
        ))}
      </div>

      <div className="print-flow mt-8 overflow-hidden rounded-[1.5rem] border border-line bg-surface">
        {packageOption.lineItems.map((item, index) => (
          <div
            key={`${packageOption.id}-${item.item}`}
            className={`print-keep px-5 py-4 sm:px-6 ${
              index === packageOption.lineItems.length - 1
                ? ""
                : "border-b border-line"
            }`}
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <p className="font-display text-xl leading-snug text-ink">
                {item.item}
              </p>
              <p className="text-sm text-ink sm:text-right">
                {formatCurrency(item.amount)}
              </p>
            </div>
            {showDescriptions ? (
              <p className="mt-2 text-sm leading-7 text-graphite">
                {item.description}
              </p>
            ) : null}
          </div>
        ))}

        <div className="border-t border-line bg-white px-5 py-5 sm:px-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <p className="font-display text-2xl text-ink">Grand Total</p>
            <p className="font-display text-3xl text-ink">
              {formatCurrency(packageOption.total)}
            </p>
          </div>
        </div>
      </div>

      {showChooseLink ? (
        <Link
          href={chooseHref}
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-ink px-5 py-3 text-sm text-ink transition-colors duration-300 hover:bg-ink hover:text-white"
        >
          Choose This Package
          <ArrowRight className="h-4 w-4" />
        </Link>
      ) : null}
    </article>
  );
}
