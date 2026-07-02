import Link from "next/link";
import { Check } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { company } from "@/content/site";

export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type LegalContent = {
  title: string;
  description?: string;
  updated?: string;
  sections: LegalSection[];
};

export function LegalPage({ title, description, updated, sections }: LegalContent) {
  return (
    <PageLayout>
      <PageHero title={title} description={description} />
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            {updated && (
              <p className="mb-10 text-sm text-sand-700">
                Last updated: <span className="font-medium text-ink-900">{updated}</span>
              </p>
            )}

            <div className="space-y-10">
              {sections.map((s) => (
                <div key={s.heading}>
                  <h2 className="font-serif text-2xl text-ink-900">{s.heading}</h2>
                  {s.paragraphs?.map((p, i) => (
                    <p key={i} className="mt-3 leading-relaxed text-sand-700">
                      {p}
                    </p>
                  ))}
                  {s.bullets && (
                    <ul className="mt-4 space-y-2.5">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex gap-3 text-sand-700">
                          <Check className="mt-1 h-4 w-4 shrink-0 text-brand" />
                          <span className="leading-relaxed">{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Contact strip */}
            <div className="mt-14 rounded-2xl border border-ink-900/10 bg-paper-100 p-6 text-sm text-sand-700 shadow-sm">
              <p>
                For any questions regarding this page, contact us at{" "}
                <a href={`mailto:${company.email}`} className="font-medium text-brand hover:underline">
                  {company.email}
                </a>{" "}
                or call{" "}
                <a href={`tel:${company.phone}`} className="font-medium text-brand hover:underline">
                  {company.phone}
                </a>
                . You can also{" "}
                <Link href="/contact" className="font-medium text-brand hover:underline">
                  reach our team
                </Link>
                .
              </p>
            </div>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
