import type { Metadata } from "next";
import Link from "next/link";
import {
  LineChart,
  TrendingUp,
  Activity,
  Layers,
  Coins,
  Clock,
  ArrowUpRight,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/Reveal";
import { researchServices } from "@/content/pages";

export const metadata: Metadata = { title: "Services" };

const icons: Record<string, LucideIcon> = {
  "equity-cash": LineChart,
  "stock-futures": TrendingUp,
  "index-research": Activity,
  "options-strategies": Layers,
  "commodity-mcx": Coins,
  "btst-stbt": Clock,
};

export default function Page() {
  return (
    <PageLayout>
      <PageHero
        title="Our Services"
        description="Research and advisory across equity and commodity markets — grounded in fundamental and technical analysis, delivered with disciplined risk management."
      />

      <section className="bg-paper-200 py-16 sm:py-20">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {researchServices.map((s, i) => {
              const Icon = icons[s.slug] ?? LineChart;
              return (
                <Reveal as="div" key={s.slug} delay={(i % 3) * 0.06}>
                  <article className="group flex h-full flex-col rounded-2xl border border-ink-900/10 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl hover:shadow-brand/10">
                    <div className="flex items-center justify-between">
                      <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                        <Icon className="h-6 w-6" />
                      </span>
                      <ArrowUpRight className="h-5 w-5 text-ink-900/20 transition-colors group-hover:text-brand" />
                    </div>
                    <h2 className="mt-5 font-serif text-xl text-ink-900">{s.title}</h2>
                    <p className="mt-1 text-xs font-medium uppercase tracking-wider text-accent-dark">
                      {s.tagline}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-sand-700">
                      {s.summary}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-2 border-t border-ink-900/10 pt-5">
                      {s.features.map((f) => (
                        <li
                          key={f}
                          className="rounded-full bg-paper-200 px-3 py-1 text-xs text-ink-800"
                        >
                          {f}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-3xl border border-ink-900/10 bg-white p-8 shadow-sm sm:flex-row sm:items-center">
            <div>
              <h2 className="font-serif text-2xl text-ink-900">
                Explore plans that fit your segment
              </h2>
              <p className="mt-2 text-sm text-sand-700">
                See transparent, tiered pricing for each research service.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button href="/pricing" variant="primary">
                View Pricing <ArrowRight className="h-4 w-4" />
              </Button>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-brand hover:text-brand-dark"
              >
                Talk to our team <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
