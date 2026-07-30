import Link from "next/link";
import { ArrowRight, BadgeCheck, Receipt, ScanSearch } from "lucide-react";

import { budgetTotal, formatCurrency } from "@/lib/proposal-data";
import { SectionHeading } from "@/components/section-heading";

const cards = [
  {
    title: "Production scope",
    description:
      "Review the full scope of planning, Studio 04, production gear, crew roles, post-production, and final deliverables.",
    href: "/scope",
    icon: ScanSearch,
    bullets: [
      "Pre-production through final mastering",
      "Studio 04 podcast facility bundle",
      "Sony FX3, lens set, and Aputure equipment gallery",
    ],
  },
  {
    title: "Budget summary",
    description:
      "Review the GH₵85,000 investment across studio space, lighting, styling, photography, crew, direction, post-production, and miscellaneous costs.",
    href: "/budget",
    icon: Receipt,
    bullets: [
      `Project total: ${formatCurrency(budgetTotal)}`,
      "Transparent line items",
      "Deposit and milestone schedule",
    ],
  },
];

export function ProposalHighlights() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Scope And Budget"
          title="Production work and project cost are outlined separately for easier review."
          description="One section covers the studio, gear, crew, and finishing work. The other breaks down the full budget category by category."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className="rounded-[2rem] border border-line bg-white p-8 shadow-panel"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-line bg-surface">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mt-8 font-display text-3xl text-ink">
                  {card.title}
                </h3>
                <p className="mt-4 max-w-xl text-base leading-8 text-graphite">
                  {card.description}
                </p>
                <div className="mt-8 space-y-3">
                  {card.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-start gap-3">
                      <BadgeCheck className="mt-1 h-4 w-4 shrink-0 text-accent" />
                      <span className="text-sm leading-7 text-graphite">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>
                <Link
                  href={card.href}
                  className="mt-10 inline-flex items-center gap-2 text-sm text-ink transition-colors duration-300 hover:text-accent"
                >
                  View details
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
