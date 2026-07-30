import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { HeroSection } from "@/components/hero-section";
import { ProjectOverview } from "@/components/project-overview";
import { ProposalHighlights } from "@/components/proposal-highlights";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Production proposal options for Horticulture Business Platform, including talk-show and cooking-show packages, equipment, crew, post-production, and quoted budgets.",
};

export default function HomePage() {
  const pageLinks = [
    {
      title: "About Lifestyle Studios",
      description:
        "Company background, strengths, and the reasons Lifestyle Studios is positioned to deliver the work professionally.",
      href: "/about",
    },
    {
      title: "Production Scope",
      description:
        "Project scope, workflow, and the practical structure behind the proposed 12-episode production.",
      href: "/scope",
    },
    {
      title: "Studio and Equipment",
      description:
        "Separate pages for studio options, equipment coverage, and the production setup references used in the proposal.",
      href: "/studio",
    },
    {
      title: "Gallery and Contact",
      description:
        "Review images, videos, and package options, then move directly into contact and approval.",
      href: "/gallery",
    },
  ];

  return (
    <>
      <HeroSection />
      <ProjectOverview />
      <ProposalHighlights />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="page-kicker">Proposal Pages</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
              Every major part of the proposal now lives on its own page.
            </h2>
            <p className="mt-5 text-base leading-8 text-graphite sm:text-lg">
              Use the navigation or the page links below to move directly into
              the area you want to review without scrolling through one long
              presentation.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {pageLinks.map((item) => (
              <article
                key={item.title}
                className="rounded-[2rem] border border-line bg-surface p-8"
              >
                <h3 className="font-display text-3xl text-ink">{item.title}</h3>
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

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="rounded-[2rem] border border-line bg-surface p-8 sm:p-10 lg:flex lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="page-kicker">Next Step</p>
              <h2 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
                Ready to choose the preferred package, confirm production dates, and lock the final setup.
              </h2>
              <p className="mt-5 text-base leading-8 text-graphite sm:text-lg">
                The next steps are selecting one of the four quoted production
                options, locking the 6 production days, and confirming any
                final adjustments to the format, setup, or deliverables.
              </p>
            </div>

            <Link
              href="/budget"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-ink px-6 py-3 text-sm text-ink transition-colors duration-300 hover:bg-ink hover:text-white lg:mt-0"
            >
              Review Full Budget
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
