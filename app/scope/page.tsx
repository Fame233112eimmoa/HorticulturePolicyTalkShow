import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { DeliverablesSection } from "@/components/deliverables-section";
import { DetailedScopeSection } from "@/components/detailed-scope-section";
import { SectionHeading } from "@/components/section-heading";
import {
  overviewCards,
  scopePillars,
  serviceFlow,
} from "@/lib/proposal-data";

export const metadata: Metadata = {
  title: "Production Scope",
  description:
    "Overview of the Horticulture Business Platform production scope, workflow, deliverables, and related proposal pages for studio, gear, crew, and post-production.",
};

const relatedPages = [
  {
    title: "Studio",
    description:
      "Studio 04 bundle, room setup, and uploaded studio-option videos.",
    href: "/studio",
  },
  {
    title: "Equipment",
    description:
      "Camera bodies, lenses, lighting, support gear, and production accessories.",
    href: "/equipment",
  },
  {
    title: "Crew",
    description:
      "Direction, videographers, photography, styling, support, and finishing roles.",
    href: "/crew",
  },
  {
    title: "Post-Production",
    description:
      "Editing, colour, audio, graphics, mastering, and delivery workflow.",
    href: "/post-production",
  },
];

export default function ScopePage() {
  return (
    <>
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {overviewCards.map((card) => {
              const Icon = card.icon;

              return (
                <article key={card.title} className="metric-card">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-line bg-surface">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <p className="mt-6 text-sm uppercase tracking-proposal text-graphite">
                    {card.title}
                  </p>
                  <p className="mt-3 font-display text-2xl leading-snug text-ink">
                    {card.value}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Production Structure"
            title="The work is organised around planning, capture, finishing, and delivery."
            description="These scope pillars frame the broader project before you move into the dedicated studio, equipment, crew, and post-production pages."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {scopePillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <article
                  key={pillar.title}
                  className="rounded-[2rem] border border-line bg-surface p-8"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-line bg-white">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <h2 className="mt-8 font-display text-3xl text-ink">
                    {pillar.title}
                  </h2>
                  <p className="mt-4 text-base leading-8 text-graphite">
                    {pillar.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <DetailedScopeSection />

      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-14 lg:grid-cols-[0.92fr_1.08fr]">
            <div>
              <SectionHeading
                eyebrow="Workflow"
                title="A practical production flow from planning through delivery."
                description="The work moves from pre-production to capture, finishing, and handover across the full episode schedule."
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {serviceFlow.map((step) => {
                const Icon = step.icon;

                return (
                  <article
                    key={step.title}
                    className="rounded-[1.75rem] border border-line bg-white p-6"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <h2 className="mt-6 font-display text-2xl text-ink">
                      {step.title}
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-graphite">
                      {step.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Related Pages"
            title="Review each technical area on its own dedicated page."
            description="These routes break the proposal into cleaner decision blocks instead of keeping every section on one scroll."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {relatedPages.map((item) => (
              <article
                key={item.title}
                className="rounded-[2rem] border border-line bg-surface p-8"
              >
                <h2 className="font-display text-3xl text-ink">{item.title}</h2>
                <p className="mt-4 text-sm leading-7 text-graphite">
                  {item.description}
                </p>
                <Link
                  href={item.href}
                  className="mt-8 inline-flex items-center gap-2 text-sm text-ink transition-colors duration-300 hover:text-accent"
                >
                  Open page
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <DeliverablesSection />

      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="rounded-[2rem] border border-line bg-white p-8 shadow-panel sm:p-10 lg:flex lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="page-kicker">Next Review Step</p>
              <h2 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
                Continue from scope into package comparison or the printable proposal.
              </h2>
              <p className="mt-5 text-base leading-8 text-graphite sm:text-lg">
                Once the overall work structure is clear, the next decision is
                comparing the available package options and confirming the
                preferred route.
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
                href="/proposal"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-6 py-3 text-sm text-ink transition-colors duration-300 hover:border-ink"
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
