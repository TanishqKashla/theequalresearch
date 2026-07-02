import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { goals } from "@/content/site";

export function Goals() {
  return (
    <section className="bg-wash-brand relative overflow-hidden py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-brand/10 blur-[120px]"
      />
      <Container className="relative">
        <SectionHeading
          eyebrow="Long-Term Goals We Support"
          title="Every milestone, backed by a plan"
          description="From financial independence to legacy creation, our research and planning frameworks are built around the goals that matter most across a lifetime."
          align="center"
        />

        <div className="mx-auto mt-12 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {goals.map((g, i) => (
            <Reveal as="div" key={g.title} delay={(i % 3) * 0.05}>
              <div className="h-full rounded-xl border border-ink-900/10 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/10">
                <span className="font-serif text-lg font-semibold text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-medium text-ink-900">{g.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-sand-700">
                  {g.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
