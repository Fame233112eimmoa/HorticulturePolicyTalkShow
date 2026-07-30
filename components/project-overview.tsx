import { SectionHeading } from "@/components/section-heading";
import { overviewCards } from "@/lib/proposal-data";

export function ProjectOverview() {
  return (
    <section id="overview" className="bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Project Overview"
          title="Key production facts for the 12-episode talk show."
          description="Project format, episode count, shoot days, on-screen structure, and coverage model are outlined below."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {overviewCards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className="rounded-[1.75rem] border border-line bg-white p-7 shadow-panel transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-line bg-surface">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <p className="mt-8 text-sm uppercase tracking-proposal text-graphite">
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
  );
}
