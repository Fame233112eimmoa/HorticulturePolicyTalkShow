import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { BudgetPackageCard } from "@/components/budget-package-card";
import { PrintProposalButton } from "@/components/print-proposal-button";
import { SiteLogo } from "@/components/site-logo";
import {
  aboutCopy,
  budgetRangeLabel,
  budgetSelectionNote,
  contactDetails,
  cookingShowBudgetPackages,
  crewMembers,
  deliverables,
  detailedProductionScope,
  gearRentals,
  overviewCards,
  postProductionItems,
  socialLinks,
  talkShowBudgetPackages,
} from "@/lib/proposal-data";
import { siteName, siteTagline } from "@/lib/site";

export const metadata: Metadata = {
  title: "Printable Proposal",
  description:
    "Print-ready summary of the Horticulture Business Platform production scope, equipment, crew, deliverables, and four quoted package options.",
};

export default function ProposalPage() {
  return (
    <div className="bg-surface print-flow">
      <div className="print-page-wrap mx-auto max-w-5xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="no-print mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-graphite transition-colors duration-300 hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to overview
          </Link>
          <div className="flex flex-col items-start gap-2 sm:items-end">
            <PrintProposalButton />
            <p className="text-xs text-graphite">
              Use your browser&apos;s print dialog to save this page as a PDF.
            </p>
          </div>
        </div>

        <article className="print-sheet rounded-[2rem] border border-line bg-white px-6 py-8 shadow-panel sm:px-8 sm:py-10 lg:px-10">
          <header className="border-b border-line pb-8">
            <SiteLogo variant="proposal" />
            <p className="page-kicker">Printable Proposal</p>
            <h1 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
              Horticulture Business Platform
            </h1>
            <p className="mt-3 text-lg text-graphite">
              Production proposal and package options
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="print-keep rounded-[1.5rem] border border-line bg-surface px-5 py-5">
                <p className="text-xs uppercase tracking-proposal text-graphite">
                  Prepared by
                </p>
                <p className="mt-2 font-display text-2xl text-ink">{siteName}</p>
                <p className="mt-2 text-sm leading-7 text-graphite">
                  {siteTagline}
                </p>
              </div>
              <div className="print-keep rounded-[1.5rem] border border-line bg-surface px-5 py-5">
                <p className="text-xs uppercase tracking-proposal text-graphite">
                  Package range
                </p>
                <p className="mt-2 font-display text-4xl text-ink">
                  {budgetRangeLabel}
                </p>
                <p className="mt-2 text-sm leading-7 text-graphite">
                  {budgetSelectionNote}
                </p>
              </div>
            </div>
          </header>

          <section className="print-page-section print-flow border-b border-line py-8">
            <h2 className="font-display text-3xl text-ink">
              Lifestyle Studios Introduction
            </h2>
            <p className="mt-4 text-sm leading-8 text-graphite">{aboutCopy}</p>
          </section>

          <section className="print-page-section print-flow border-b border-line py-8">
            <h2 className="font-display text-3xl text-ink">Project Overview</h2>
            <div className="print-page-grid mt-6 grid gap-4 sm:grid-cols-2">
              {overviewCards.map((item) => (
                <div
                  key={item.title}
                  className="print-keep rounded-[1.4rem] border border-line bg-surface px-5 py-4"
                >
                  <p className="text-xs uppercase tracking-proposal text-graphite">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-ink">{item.value}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="print-page-section print-flow border-b border-line py-8">
            <h2 className="font-display text-3xl text-ink">Production Scope</h2>
            <div className="print-page-grid mt-6 grid gap-4 sm:grid-cols-2">
              {detailedProductionScope.map((item) => (
                <div
                  key={item.title}
                  className="print-keep rounded-[1.4rem] border border-line bg-surface px-5 py-4"
                >
                  <p className="font-display text-xl text-ink">{item.title}</p>
                  <p className="mt-2 text-sm leading-7 text-graphite">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="print-page-section print-flow border-b border-line py-8">
            <h2 className="font-display text-3xl text-ink">Equipment</h2>
            <div className="mt-6 space-y-4">
              {gearRentals.map((item) => (
                <div
                  key={item.name}
                  className="print-keep rounded-[1.4rem] border border-line bg-surface px-5 py-4"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <p className="font-display text-xl text-ink">{item.name}</p>
                    <p className="text-sm text-graphite">{item.quantity}</p>
                  </div>
                  <p className="mt-2 text-sm leading-7 text-graphite">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="print-page-section print-flow border-b border-line py-8">
            <h2 className="font-display text-3xl text-ink">Crew</h2>
            <div className="mt-6 space-y-4">
              {crewMembers.map((member) => (
                <div
                  key={member.role}
                  className="print-keep rounded-[1.4rem] border border-line bg-surface px-5 py-4"
                >
                  <p className="font-display text-xl text-ink">{member.role}</p>
                  <p className="mt-2 text-sm leading-7 text-graphite">
                    {member.detail}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="print-page-section print-flow border-b border-line py-8">
            <h2 className="font-display text-3xl text-ink">Post-Production</h2>
            <div className="print-page-grid mt-6 grid gap-4 sm:grid-cols-2">
              {postProductionItems.map((item) => (
                <div
                  key={item.title}
                  className="print-keep rounded-[1.4rem] border border-line bg-surface px-5 py-4"
                >
                  <p className="font-display text-xl text-ink">{item.title}</p>
                  <p className="mt-2 text-sm leading-7 text-graphite">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="print-page-section print-flow border-b border-line py-8">
            <h2 className="font-display text-3xl text-ink">Deliverables</h2>
            <div className="print-page-grid mt-6 grid gap-4 sm:grid-cols-2">
              {deliverables.map((item) => (
                <div
                  key={item}
                  className="print-keep rounded-[1.4rem] border border-line bg-surface px-5 py-4 text-sm leading-7 text-ink"
                >
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section className="print-page-section print-flow border-b border-line py-8">
            <h2 className="font-display text-3xl text-ink">
              Talk Show Package Options
            </h2>
            <p className="mt-4 text-sm leading-7 text-graphite">
              The talk-show brief is available as a premium route and a standard
              route so the client can compare production depth against cost.
            </p>
            <div className="mt-6 space-y-6">
              {talkShowBudgetPackages.map((item) => (
                <BudgetPackageCard
                  key={item.id}
                  packageOption={item}
                  showDescriptions
                  className="print-flow shadow-none"
                />
              ))}
            </div>
          </section>

          <section className="print-page-section print-flow border-b border-line py-8">
            <h2 className="font-display text-3xl text-ink">
              Cooking Show Package Options
            </h2>
            <p className="mt-4 text-sm leading-7 text-graphite">
              The cooking-show brief is also presented in premium and standard
              routes, with the gear, lighting, and crew support adjusted to the
              format.
            </p>
            <div className="mt-6 space-y-6">
              {cookingShowBudgetPackages.map((item) => (
                <BudgetPackageCard
                  key={item.id}
                  packageOption={item}
                  showDescriptions
                  className="print-flow shadow-none"
                />
              ))}
            </div>
          </section>

          <section className="print-page-section print-flow pt-8">
            <h2 className="font-display text-3xl text-ink">
              Contact Information
            </h2>
            <div className="print-page-grid mt-6 grid gap-4 sm:grid-cols-2">
              {[...contactDetails, ...socialLinks].map((item) => (
                <div
                  key={item.label}
                  className="print-keep rounded-[1.4rem] border border-line bg-surface px-5 py-4"
                >
                  <p className="text-xs uppercase tracking-proposal text-graphite">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-ink">{item.value}</p>
                </div>
              ))}
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}
