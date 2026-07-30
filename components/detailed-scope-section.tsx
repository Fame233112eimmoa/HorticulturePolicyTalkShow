import { SectionHeading } from "@/components/section-heading";
import { detailedProductionScope } from "@/lib/proposal-data";

export function DetailedScopeSection() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Detailed Scope"
          title="Every production stage is clearly accounted for from planning to final submission."
          description="Planning, setup, filming, finishing, and delivery tasks are itemized below so every part of the production is clearly covered."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {detailedProductionScope.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-[1.5rem] border border-line bg-white p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <h2 className="mt-6 font-display text-2xl leading-snug text-ink">
                  {item.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-graphite">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
