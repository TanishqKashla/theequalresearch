import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowLeft, AlertTriangle } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/Reveal";
import { researchServices, serviceDetails } from "@/content/pages";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return researchServices.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = researchServices.find((s) => s.slug === slug);
  return { title: service ? service.title : "Service" };
}

export default async function Page({ params }: Params) {
  const { slug } = await params;
  const service = researchServices.find((s) => s.slug === slug);
  const detail = serviceDetails[slug];

  if (!service || !detail) notFound();

  return (
    <PageLayout>
      <PageHero
        eyebrow="Our Services"
        title={service.title}
        description={service.summary}
      />

      <section className="bg-paper py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            {/* Intro */}
            <Reveal>
              <div className="space-y-4">
                {detail.intro.map((p, i) => (
                  <p
                    key={i}
                    className={
                      i === 0
                        ? "text-lg font-medium leading-relaxed text-ink-900"
                        : "leading-relaxed text-sand-700"
                    }
                  >
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>

            {/* Sections */}
            <div className="mt-12 space-y-12">
              {detail.sections.map((section) => (
                <Reveal key={section.heading}>
                  <div>
                    <h2 className="font-serif text-2xl text-ink-900">
                      {section.heading}
                    </h2>
                    {section.intro && (
                      <p className="mt-3 leading-relaxed text-sand-700">
                        {section.intro}
                      </p>
                    )}
                    {section.list &&
                      (section.ordered ? (
                        <ol className="mt-4 list-decimal space-y-2.5 pl-5 marker:font-semibold marker:text-brand">
                          {section.list.map((item) => (
                            <li key={item} className="pl-1 text-ink-800">
                              {item}
                            </li>
                          ))}
                        </ol>
                      ) : (
                        <ul className="mt-4 space-y-2.5">
                          {section.list.map((item) => (
                            <li key={item} className="flex gap-3 text-ink-800">
                              <span
                                aria-hidden
                                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                              />
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      ))}
                    {section.outro && (
                      <p className="mt-4 leading-relaxed text-sand-700">
                        {section.outro}
                      </p>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Sample research call */}
            {detail.sampleCall && (
              <Reveal>
                <div className="mt-12 rounded-2xl border border-brand/20 bg-brand-soft/50 p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-dark">
                    Sample Research Call{" "}
                    <span className="font-normal normal-case text-sand-700">
                      (For Illustrative Purpose Only)
                    </span>
                  </p>
                  <p className="mt-3 font-serif text-lg font-semibold text-ink-900">
                    {detail.sampleCall.buy}
                  </p>
                  <p className="mt-1 text-sm text-ink-800">
                    Targets: {detail.sampleCall.targets}
                  </p>
                  <p className="text-sm text-ink-800">
                    Stop Loss: {detail.sampleCall.stopLoss}
                  </p>
                </div>
              </Reveal>
            )}

            {/* Additional note */}
            {detail.note && (
              <Reveal>
                <div className="mt-6 flex gap-3 rounded-2xl border border-accent/30 bg-accent-soft/60 p-5">
                  <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-accent-dark" />
                  <p className="text-sm leading-relaxed text-ink-800">
                    {detail.note}
                  </p>
                </div>
              </Reveal>
            )}

            {/* Risk disclaimer */}
            <p className="mt-10 border-t border-ink-900/10 pt-6 text-xs leading-relaxed text-sand-700">
              Investment in securities market is subject to market risks. Read all
              the related documents carefully before investing. Recommendations are
              shared for research and information purposes only and do not guarantee
              any assured returns. Fees are for research and advisory services and
              are not investment amounts.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
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

            <div className="mt-10">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-medium text-sand-700 hover:text-brand"
              >
                <ArrowLeft className="h-4 w-4" /> Back to all services
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
