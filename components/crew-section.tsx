import { SectionHeading } from "@/components/section-heading";
import { crewMembers } from "@/lib/proposal-data";

export function CrewSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHeading
              eyebrow="Production Crew"
              title="Specialist roles covering direction, filming, styling, support, and finishing."
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
  );
}
