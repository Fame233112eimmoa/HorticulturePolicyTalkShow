import { SectionHeading } from "@/components/section-heading";
import { productionProcess } from "@/lib/proposal-data";

export function ProductionProcessSection() {
  return (
    <section id="process" className="bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Production Process"
          title="A clean visual timeline from planning to final submission."
          description="Planning, setup, filming, finishing, review, and handover across the full production cycle."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-6">
          {productionProcess.map((step, index) => (
            <article key={step.title} className="relative">
              {index !== productionProcess.length - 1 ? (
                <>
                  <div className="absolute left-6 top-16 h-[calc(100%-2rem)] w-px bg-line lg:hidden" />
                  <div className="absolute left-[calc(50%+2.5rem)] top-6 hidden h-px w-[calc(100%-2rem)] bg-line lg:block" />
                </>
              ) : null}

              <div className="relative rounded-[1.5rem] border border-line bg-white p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-line bg-surface font-display text-xl text-ink">
                    {index + 1}
                  </div>
                  <h2 className="font-display text-2xl text-ink">{step.title}</h2>
                </div>
                <p className="mt-5 text-sm leading-7 text-graphite">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
