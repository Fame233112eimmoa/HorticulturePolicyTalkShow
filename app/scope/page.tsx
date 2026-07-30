import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck } from "lucide-react";

import { DetailedScopeSection } from "@/components/detailed-scope-section";
import { GearRentalsSection } from "@/components/gear-rentals-section";
import { PostProductionSection } from "@/components/post-production-section";
import { SectionHeading } from "@/components/section-heading";
import { StudioFacilitySection } from "@/components/studio-facility-section";
import {
  deliverables,
  crewMembers,
  overviewCards,
  scopePillars,
  serviceFlow,
} from "@/lib/proposal-data";

export const metadata: Metadata = {
  title: "Production Scope",
  description:
    "Detailed production scope for the Horticulture Policy Talk Show proposal, including studio facility, crew, gear, post-production, and deliverables.",
};

export default function ScopePage() {
  return (
    <>
      <section id="scope" className="page-hero">
        <div className="page-hero-inner">
          <p className="page-kicker">Production Scope</p>
          <h1 className="page-title">Full-service studio production for 12 polished episodes.</h1>
          <p className="page-copy">
            This page outlines the practical scope of work for the Horticulture
            Business Platform Policy Talk Show, including how Lifestyle Studios
            will plan, capture, finish, and deliver the production.
          </p>
        </div>
      </section>

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
            eyebrow="Production Scope"
            title="The project covers planning, studio capture, finishing, and final delivery."
            description="Each work area supports the 12-episode schedule across 6 production days."
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
      <StudioFacilitySection />
      <GearRentalsSection />

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

      <section id="crew" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <SectionHeading
                eyebrow="Production Crew"
                title="Specialist crew roles covering direction, filming, styling, support, and finishing."
                description="Each role below contributes directly to recording quality, set operations, logistics, and final delivery."
              />
            </div>

            <div className="space-y-4">
              {crewMembers.map((member) => (
                <article
                  key={member.role}
                  className="rounded-[1.5rem] border border-line bg-surface px-6 py-5"
                >
                  <p className="font-display text-2xl text-ink">{member.role}</p>
                  <p className="mt-3 text-sm leading-7 text-graphite">
                    {member.detail}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PostProductionSection />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Project Deliverables"
            title="Final deliverables for the completed 12-episode package."
            description="The handover includes edited episodes, mixed audio, graded visuals, branded graphics, and high-resolution masters."
          />

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {deliverables.map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-[1.5rem] border border-line bg-surface px-6 py-5"
              >
                <BadgeCheck className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <p className="text-sm leading-7 text-graphite">{item}</p>
              </div>
            ))}
          </div>

          <Link
            href="/budget"
            className="mt-12 inline-flex items-center gap-2 rounded-full border border-ink px-6 py-3 text-sm text-ink transition-colors duration-300 hover:bg-ink hover:text-white"
          >
            Continue to Budget
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
