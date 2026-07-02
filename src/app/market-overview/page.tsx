import type { Metadata } from "next";
import { TrendingUp, ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/Reveal";
import { marketSegments } from "@/content/pages";

export const metadata: Metadata = { title: "Market Overview" };

export default function Page() {
  return (
    <PageLayout>
      <PageHero
        title="Market Overview"
        description="A research-driven view of the markets we track — across equity, index, options, and commodities — updated through the trading day."
      />

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <p className="max-w-2xl leading-relaxed text-sand-700">
            Live index and stock quotes scroll across the top of every page. Below are the
            segments our research desk actively covers, monitoring trend, momentum, and key
            levels so our clients stay informed.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {marketSegments.map((m, i) => (
              <Reveal as="div" key={m.name} delay={(i % 3) * 0.06}>
                <div className="flex h-full gap-4 rounded-2xl border border-ink-900/10 bg-paper-100 p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/10">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand">
                    <TrendingUp className="h-5 w-5" />
                  </span>
                  <div>
                    <h2 className="font-medium text-ink-900">{m.name}</h2>
                    <p className="mt-1.5 text-sm leading-relaxed text-sand-700">{m.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-3xl bg-gradient-to-br from-brand to-brand-dark p-8 text-white shadow-xl shadow-brand/20 sm:flex-row sm:items-center">
            <div>
              <h2 className="font-serif text-2xl">Want research on a specific segment?</h2>
              <p className="mt-2 text-sm text-white/85">
                Explore our services or talk to our team about the coverage that fits you.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button href="/services" variant="outline" className="border-white/40 bg-white/10 text-white hover:bg-white hover:text-brand-dark">
                Our Services <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <p className="mt-8 text-xs leading-relaxed text-sand-700">
            Market data shown on this website is indicative and for information only.
            Investment in securities market is subject to market risks; past performance is
            not indicative of future results.
          </p>
        </Container>
      </section>
    </PageLayout>
  );
}
