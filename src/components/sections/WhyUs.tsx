import { Microscope, Activity, Layers, BookOpen, Scale } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { whyUs } from "@/content/site";

const icons = [Microscope, Activity, Layers, BookOpen, Scale];

export function WhyUs() {
  return (
    <section className="bg-paper py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="Why Equal Research"
            title="Research first. Conviction always."
            description="Our process is built on disciplined analysis and education — so investors don't just act, they understand."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {whyUs.map((w, i) => {
              const Icon = icons[i] ?? Microscope;
              return (
                <Reveal as="div" key={w.title} delay={(i % 2) * 0.06}>
                  <div className="flex h-full gap-4 rounded-2xl border border-ink-900/10 bg-white p-6 transition-shadow hover:shadow-lg hover:shadow-brand/10">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-medium text-ink-900">{w.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-sand-700">
                        {w.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
