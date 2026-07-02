import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/Reveal";
import { methodologySteps } from "@/content/pages";

export const metadata: Metadata = { title: "Methodology" };

export default function Page() {
  return (
    <PageLayout>
      <PageHero
        title="Our Methodology"
        description="Every insight we publish follows a disciplined, structured framework — grounded in analysis, not assumptions."
      />

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <p className="max-w-2xl leading-relaxed text-sand-700">
            Our research is delivered by a team of NISM-certified professionals with a
            minimum of three years&apos; experience in equity and commodity markets. We
            combine multiple analytical lenses and rigorous risk management at every step.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {methodologySteps.map((step, i) => (
              <Reveal as="div" key={step.title} delay={(i % 3) * 0.06}>
                <div className="flex h-full flex-col rounded-2xl border border-ink-900/10 bg-paper-100 p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/10">
                  <span className="font-serif text-lg font-semibold text-brand">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-2 font-serif text-xl text-ink-900">{step.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-sand-700">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12">
            <Button href="/services" variant="primary">
              See how it applies to our services <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
