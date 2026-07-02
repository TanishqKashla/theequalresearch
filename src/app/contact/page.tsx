import type { Metadata } from "next";
import { MapPin, Clock } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/layout/PageHero";
import { Contact } from "@/components/sections/Contact";
import { Container } from "@/components/ui/Container";
import { company } from "@/content/site";

export const metadata: Metadata = { title: "Contact Us" };

export default function Page() {
  return (
    <PageLayout>
      <PageHero
        title="Contact Us"
        description="Start with a conversation about your goals — our team is here to help with research-driven clarity."
      />

      {/* Office details */}
      <section className="bg-white pt-16 sm:pt-20">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="flex gap-4 rounded-2xl border border-ink-900/10 bg-paper-100 p-6 shadow-sm">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-ink-900">
                  Registered Office
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-sand-700">
                  {company.address}
                </p>
              </div>
            </div>
            <div className="flex gap-4 rounded-2xl border border-ink-900/10 bg-paper-100 p-6 shadow-sm">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand">
                <Clock className="h-5 w-5" />
              </span>
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-ink-900">
                  Working Hours
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-sand-700">
                  {company.hours}
                </p>
                <p className="mt-1 text-sm text-sand-700">
                  Landline: {company.landline}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Contact />
    </PageLayout>
  );
}
