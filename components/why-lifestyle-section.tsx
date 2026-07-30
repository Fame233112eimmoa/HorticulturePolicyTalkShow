import { SectionHeading } from "@/components/section-heading";
import { whyLifestyleItems } from "@/lib/proposal-data";

export function WhyLifestyleSection() {
  return (
    <section id="why" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Why Lifestyle Studios"
          title="A clear case for choosing Lifestyle Studios as the production partner."
          description="This section distils the practical reasons the project is positioned to be managed and delivered professionally from pre-production through final mastering."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {whyLifestyleItems.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-[1.75rem] border border-line bg-surface p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white">
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
