import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { AboutSection } from "@/components/about-section";
import { ContactApprovalSection } from "@/components/contact-approval-section";
import { HeroSection } from "@/components/hero-section";
import { MediaGallerySection } from "@/components/media-gallery-section";
import { ProjectOverview } from "@/components/project-overview";
import { ProposalHighlights } from "@/components/proposal-highlights";
import { WhyLifestyleSection } from "@/components/why-lifestyle-section";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Full-service studio production for 12 episodes of the Horticulture Policy Talk Show, including equipment, crew, post-production, and budget.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProjectOverview />
      <AboutSection />
      <ProposalHighlights />
      <MediaGallerySection />
      <WhyLifestyleSection />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="rounded-[2rem] border border-line bg-surface p-8 sm:p-10 lg:flex lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="page-kicker">Next Step</p>
              <h2 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
                Ready to confirm budget approval, production dates, and final setup choices.
              </h2>
              <p className="mt-5 text-base leading-8 text-graphite sm:text-lg">
                The next steps are approving the GH₵85,000 budget, locking the
                6 production days, and confirming any final adjustments to the
                studio setup or deliverables.
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

      <ContactApprovalSection />
    </>
  );
}
