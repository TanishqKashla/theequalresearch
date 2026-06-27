import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { goals } from "@/content/site";

export function Goals() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-accent/8 blur-[120px]"
      />
      <Container className="relative">
        <SectionHeading
          eyebrow="Long-Term Goals We Support"
          title="Every milestone, backed by a plan"
          description="From financial independence to legacy creation, our research and planning frameworks are built around the goals that matter most across a lifetime."
          align="center"
          invert
        />

        <div className="mx-auto mt-12 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {goals.map((g, i) => (
            <Reveal as="div" key={g.title} delay={(i % 3) * 0.05}>
              <div className="h-full rounded-xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-accent/40">
                <span className="font-serif text-sm text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-medium text-white">{g.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
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
