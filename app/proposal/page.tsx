import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { PrintProposalButton } from "@/components/print-proposal-button";
import { SiteLogo } from "@/components/site-logo";
import {
  aboutCopy,
  budgetMaximumTotal,
  budgetMinimumTotal,
  budgetRangeLabel,
  budgetSelectionNote,
  contactDetails,
  cookingShowBudgetPackages,
  crewMembers,
  deliverables,
  detailedProductionScope,
  equipmentScheduleGroups,
  formatCurrency,
  gearRentals,
  grandTotalNote,
  overviewCards,
  postProductionItems,
  productionProcess,
  socialLinks,
  studioBundleFeatures,
  talkShowBudgetPackages,
  whyLifestyleItems,
} from "@/lib/proposal-data";
import type { BudgetPackage } from "@/lib/proposal-data";
import { siteName, siteTagline } from "@/lib/site";

export const metadata: Metadata = {
  title: "Printable Proposal",
  description:
    "Six-page print-ready summary of the Horticulture Business Platform production scope, equipment, crew, deliverables, and four quoted package options.",
};

function PrintablePage({
  pageNumber,
  title,
  children,
}: {
  pageNumber: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="print-sheet print-six-page rounded-[2rem] border border-line bg-white px-5 py-5 shadow-panel sm:px-7 sm:py-6">
      <div className="flex items-center justify-between border-b border-line pb-3">
        <p className="page-kicker">{title}</p>
        <p className="text-[11px] uppercase tracking-proposal text-graphite">
          Page {pageNumber} of 6
        </p>
      </div>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function CompactGrid({
  items,
  columns = "sm:grid-cols-2",
}: {
  items: string[];
  columns?: string;
}) {
  return (
    <div className={`print-page-grid grid gap-2 ${columns}`}>
      {items.map((item) => (
        <div
          key={item}
          className="print-keep rounded-[0.95rem] border border-line bg-surface px-3 py-2 text-xs leading-5 text-ink"
        >
          {item}
        </div>
      ))}
    </div>
  );
}

function CompactPackageSummary({
  packageOption,
}: {
  packageOption: BudgetPackage;
}) {
  return (
    <div className="print-keep rounded-[1rem] border border-line bg-surface p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[11px] uppercase tracking-proposal text-graphite">
            {packageOption.format} {packageOption.optionLabel}
          </p>
          <h3 className="mt-1 font-display text-xl leading-snug text-ink">
            {packageOption.title}
          </h3>
        </div>
        <p className="font-display text-2xl text-ink">
          {formatCurrency(packageOption.total)}
        </p>
      </div>

      <p className="mt-2 text-xs leading-5 text-graphite">
        {packageOption.shortSummary}
      </p>

      <div className="mt-3 grid gap-1.5">
        {packageOption.highlights.map((item) => (
          <p key={item} className="text-xs leading-5 text-graphite">
            {item}
          </p>
        ))}
      </div>

      <div className="mt-3 overflow-hidden rounded-[0.9rem] border border-line bg-white">
        <div className="grid grid-cols-[1fr_auto] gap-3 border-b border-line px-3 py-2 text-[10px] uppercase tracking-proposal text-graphite">
          <p>Line item</p>
          <p>Amount</p>
        </div>
        {packageOption.lineItems.map((item, index) => (
          <div
            key={`${packageOption.id}-${item.item}`}
            className={`grid grid-cols-[1fr_auto] gap-3 px-3 py-2 ${
              index === packageOption.lineItems.length - 1
                ? ""
                : "border-b border-line"
            }`}
          >
            <p className="text-xs leading-5 text-ink">{item.item}</p>
            <p className="text-xs leading-5 text-ink">
              {formatCurrency(item.amount)}
            </p>
          </div>
        ))}
        <div className="grid grid-cols-[1fr_auto] gap-3 border-t border-line bg-surface px-3 py-2">
          <p className="font-display text-lg text-ink">Grand Total</p>
          <p className="font-display text-lg text-ink">
            {formatCurrency(packageOption.total)}
          </p>
        </div>
      </div>
    </div>
  );
}

const aboutSummary = aboutCopy.split("\n\n");
const scopeTitles = detailedProductionScope.map((item) => item.title);
const postTitles = postProductionItems.map((item) => item.title);
const studioSummary = [
  ...studioBundleFeatures,
  "Studio Option 1 walkthrough available",
  "Studio Option 2 walkthrough available",
];
const equipmentSummary = gearRentals.map(
  (item) => `${item.name} (${item.quantity})`,
);
const crewSummary = crewMembers.map((item) => item.role);
const processSummary = productionProcess.map(
  (item) => `${item.title}: ${item.description}`,
);
const comparisonRows = [
  {
    label: "Talk Show Option 1",
    amount: formatCurrency(talkShowBudgetPackages[0]?.total ?? 0),
    note: "Premium multi-camera studio route",
  },
  {
    label: "Talk Show Option 2",
    amount: formatCurrency(talkShowBudgetPackages[1]?.total ?? 0),
    note: "Standard studio route",
  },
  {
    label: "Cooking Show Option 1",
    amount: formatCurrency(cookingShowBudgetPackages[0]?.total ?? 0),
    note: "Cinema cooking-show route",
  },
  {
    label: "Cooking Show Option 2",
    amount: formatCurrency(cookingShowBudgetPackages[1]?.total ?? 0),
    note: "Standard cooking-show route",
  },
];

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

        <div className="space-y-6">
          <PrintablePage pageNumber={1} title="Cover and Project Summary">
            <SiteLogo variant="proposal" />
            <h1 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-5xl">
              Horticulture Business Platform
            </h1>
            <p className="mt-2 text-base text-graphite">
              Production proposal summary and package options
            </p>

            <div className="print-page-grid mt-4 grid gap-3 sm:grid-cols-2">
              <div className="print-keep rounded-[1rem] border border-line bg-surface px-4 py-4">
                <p className="text-xs uppercase tracking-proposal text-graphite">
                  Prepared by
                </p>
                <p className="mt-1 font-display text-xl text-ink">{siteName}</p>
                <p className="mt-1 text-sm leading-6 text-graphite">
                  {siteTagline}
                </p>
              </div>
              <div className="print-keep rounded-[1rem] border border-line bg-surface px-4 py-4">
                <p className="text-xs uppercase tracking-proposal text-graphite">
                  Package range
                </p>
                <p className="mt-1 font-display text-3xl text-ink">
                  {budgetRangeLabel}
                </p>
                <p className="mt-1 text-sm leading-6 text-graphite">
                  {budgetSelectionNote}
                </p>
              </div>
            </div>

            <div className="mt-4 rounded-[1rem] border border-line bg-surface px-4 py-4">
              <h2 className="font-display text-xl text-ink">
                Lifestyle Studios Introduction
              </h2>
              <p className="mt-2 text-sm leading-6 text-graphite">
                {aboutSummary[0]}
              </p>
              <p className="mt-2 text-sm leading-6 text-graphite">
                {aboutSummary[1]}
              </p>
            </div>

            <div className="print-page-grid mt-4 grid gap-3 sm:grid-cols-2">
              {overviewCards.map((item) => (
                <div
                  key={item.title}
                  className="print-keep rounded-[1rem] border border-line bg-surface px-4 py-3"
                >
                  <p className="text-xs uppercase tracking-proposal text-graphite">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-ink">{item.value}</p>
                </div>
              ))}
            </div>
          </PrintablePage>

          <PrintablePage pageNumber={2} title="Scope, Process, and Deliverables">
            <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <h2 className="font-display text-2xl text-ink">
                  Production Scope
                </h2>
                <div className="mt-3">
                  <CompactGrid items={scopeTitles} />
                </div>

                <h2 className="mt-5 font-display text-2xl text-ink">
                  Post-Production
                </h2>
                <div className="mt-3">
                  <CompactGrid items={postTitles} />
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-[1rem] border border-line bg-surface px-4 py-4">
                  <h2 className="font-display text-2xl text-ink">
                    Production Process
                  </h2>
                  <div className="mt-3 grid gap-2">
                    {processSummary.map((item) => (
                      <p key={item} className="text-xs leading-5 text-graphite">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="rounded-[1rem] border border-line bg-surface px-4 py-4">
                  <h2 className="font-display text-2xl text-ink">
                    Deliverables
                  </h2>
                  <div className="mt-3">
                    <CompactGrid
                      items={deliverables}
                      columns="grid-cols-1 sm:grid-cols-1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </PrintablePage>

          <PrintablePage pageNumber={3} title="Studio, Equipment, Crew, and Capability Summary">
            <div className="grid gap-4 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="rounded-[1rem] border border-line bg-surface px-4 py-4">
                  <h2 className="font-display text-2xl text-ink">
                    Studio Summary
                  </h2>
                  <div className="mt-3">
                    <CompactGrid
                      items={studioSummary}
                      columns="grid-cols-1 sm:grid-cols-1"
                    />
                  </div>
                </div>

                <div className="rounded-[1rem] border border-line bg-surface px-4 py-4">
                  <h2 className="font-display text-2xl text-ink">Equipment</h2>
                  <div className="mt-3">
                    <CompactGrid
                      items={equipmentSummary}
                      columns="grid-cols-1 sm:grid-cols-1"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-[1rem] border border-line bg-surface px-4 py-4">
                  <h2 className="font-display text-2xl text-ink">Crew</h2>
                  <div className="mt-3">
                    <CompactGrid
                      items={crewSummary}
                      columns="grid-cols-1 sm:grid-cols-1"
                    />
                  </div>
                </div>

                <div className="rounded-[1rem] border border-line bg-surface px-4 py-4">
                  <h2 className="font-display text-2xl text-ink">
                    Why Lifestyle Studios
                  </h2>
                  <div className="mt-3">
                    <CompactGrid
                      items={whyLifestyleItems.map((item) => item.title)}
                    />
                  </div>
                </div>

                <div className="rounded-[1rem] border border-line bg-surface px-4 py-4">
                  <h2 className="font-display text-2xl text-ink">
                    Media and Facility References
                  </h2>
                  <div className="mt-3 grid gap-2">
                    {equipmentScheduleGroups.map((group) => (
                      <p key={group.title} className="text-xs leading-5 text-graphite">
                        {group.title}: {group.description}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </PrintablePage>

          <PrintablePage pageNumber={4} title="Talk Show Packages">
            <h2 className="font-display text-2xl text-ink">
              Talk Show Package Options
            </h2>
            <p className="mt-2 text-sm leading-6 text-graphite">
              Premium and standard talk-show routes are both quoted for client
              selection.
            </p>
            <div className="mt-4 space-y-4">
              {talkShowBudgetPackages.map((item) => (
                <CompactPackageSummary key={item.id} packageOption={item} />
              ))}
            </div>
          </PrintablePage>

          <PrintablePage pageNumber={5} title="Cooking Show Packages">
            <h2 className="font-display text-2xl text-ink">
              Cooking Show Package Options
            </h2>
            <p className="mt-2 text-sm leading-6 text-graphite">
              Premium and standard cooking-show routes are both quoted for
              client selection.
            </p>
            <div className="mt-4 space-y-4">
              {cookingShowBudgetPackages.map((item) => (
                <CompactPackageSummary key={item.id} packageOption={item} />
              ))}
            </div>
          </PrintablePage>

          <PrintablePage pageNumber={6} title="Package Comparison, Contact, and Approval">
            <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="space-y-4">
                <div className="rounded-[1rem] border border-line bg-surface px-4 py-4">
                  <h2 className="font-display text-2xl text-ink">
                    Package Comparison
                  </h2>
                  <div className="mt-3 overflow-hidden rounded-[0.9rem] border border-line bg-white">
                    <div className="grid grid-cols-[1fr_auto] gap-3 border-b border-line px-3 py-2 text-[10px] uppercase tracking-proposal text-graphite">
                      <p>Package</p>
                      <p>Total</p>
                    </div>
                    {comparisonRows.map((item, index) => (
                      <div
                        key={item.label}
                        className={`grid grid-cols-[1fr_auto] gap-3 px-3 py-2 ${
                          index === comparisonRows.length - 1
                            ? ""
                            : "border-b border-line"
                        }`}
                      >
                        <div>
                          <p className="text-xs leading-5 text-ink">{item.label}</p>
                          <p className="text-[11px] leading-4 text-graphite">
                            {item.note}
                          </p>
                        </div>
                        <p className="text-xs leading-5 text-ink">{item.amount}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-3 text-xs leading-5 text-graphite">
                    {grandTotalNote}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-graphite">
                    Range confirmed from {formatCurrency(budgetMinimumTotal)} to{" "}
                    {formatCurrency(budgetMaximumTotal)}.
                  </p>
                </div>

                <div className="rounded-[1rem] border border-line bg-surface px-4 py-4">
                  <h2 className="font-display text-2xl text-ink">
                    Final Notes
                  </h2>
                  <div className="mt-3 grid gap-2 text-xs leading-5 text-graphite">
                    <p>
                      The client may choose one of the four quoted packages
                      based on the preferred production format and support level.
                    </p>
                    <p>
                      Talk-show packages cover the Studio 04 route, while the
                      cooking-show packages include the revised sound-gear line
                      and updated production totals.
                    </p>
                    <p>
                      All quoted amounts and line-item summaries shown here are
                      aligned with the latest budget revision for the printable
                      proposal.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-[1rem] border border-line bg-surface px-4 py-4">
                  <h2 className="font-display text-2xl text-ink">
                    Contact Information
                  </h2>
                  <div className="mt-3 grid gap-2">
                    {[...contactDetails, ...socialLinks].map((item) => (
                      <div
                        key={item.label}
                        className="rounded-[0.95rem] border border-line bg-white px-3 py-2"
                      >
                        <p className="text-[11px] uppercase tracking-proposal text-graphite">
                          {item.label}
                        </p>
                        <p className="mt-1 text-xs leading-5 text-ink">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[1rem] border border-line bg-surface px-4 py-4">
                  <h2 className="font-display text-2xl text-ink">
                    Approval Note
                  </h2>
                  <div className="mt-3 grid gap-2 text-xs leading-5 text-graphite">
                    <p>
                      Select one of the four quoted packages to confirm the
                      preferred production route.
                    </p>
                    <p>
                      Studio selection for the talk-show route can be confirmed
                      alongside package approval.
                    </p>
                    <p>
                      Scheduling, deposit confirmation, and final production
                      planning begin after approval.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </PrintablePage>
        </div>
      </div>
    </div>
  );
}
