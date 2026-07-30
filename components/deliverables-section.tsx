import { BadgeCheck } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { deliverables } from "@/lib/proposal-data";

export function DeliverablesSection() {
  return (
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
      </div>
    </section>
  );
}
