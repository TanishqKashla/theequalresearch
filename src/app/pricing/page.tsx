import type { Metadata } from "next";
import { Check, ArrowRight, Info } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/Reveal";
import { pricingPlans, pricingIncludes, pricingNote } from "@/content/pages";

export const metadata: Metadata = { title: "Pricing" };

export default function Page() {
  return (
    <PageLayout>
      <PageHero
        title="Pricing"
        description="Transparent, research-led plans for each market segment. Choose the service that matches your focus and start with a plan that suits you."
      />

      <section className="bg-paper-200 py-16 sm:py-20">
        <Container>
          {/* Plans */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {pricingPlans.map((plan, i) => (
              <Reveal as="div" key={plan.segment} delay={(i % 3) * 0.06}>
                <div className="flex h-full flex-col rounded-2xl border border-ink-900/10 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl hover:shadow-brand/10">
                  <h2 className="font-serif text-xl text-ink-900">{plan.segment}</h2>
                  <div className="mt-5 space-y-3">
                    {plan.tiers.map((t) => (
                      <div
                        key={t.label}
                        className="flex items-baseline justify-between border-b border-ink-900/5 pb-3 last:border-0"
                      >
                        <span className="text-sm font-medium text-ink-800">{t.label}</span>
                        <span className="text-right">
                          <span className="font-serif text-lg text-brand-dark">{t.price}</span>
                          <span className="text-xs text-sand-700"> / {t.period}</span>
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Button href="/payment" variant="ghost" className="w-full">
                      Subscribe <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* What's included */}
          <div className="mt-12 grid gap-8 rounded-3xl border border-ink-900/10 bg-white p-8 shadow-sm lg:grid-cols-[1fr_1.2fr] lg:p-10">
            <div>
              <h2 className="font-serif text-2xl text-ink-900">
                What every plan includes
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-sand-700">
                Each subscription is designed to give you clear, research-backed guidance
                with the support you need through the trading day.
              </p>
              <div className="mt-6">
                <Button href="/contact" variant="primary">
                  Talk to our team <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {pricingIncludes.map((f) => (
                <li key={f} className="flex gap-3 text-sm text-sand-700">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  <span className="leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Note */}
          <p className="mt-8 flex gap-3 rounded-2xl border border-accent/25 bg-accent-soft/60 p-5 text-sm leading-relaxed text-ink-800">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-accent-dark" />
            <span>{pricingNote}</span>
          </p>
        </Container>
      </section>
    </PageLayout>
  );
}
