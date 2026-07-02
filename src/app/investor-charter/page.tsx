import type { Metadata } from "next";
import { Check, X, Eye, Target, ShieldCheck } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { investorCharter as ic } from "@/content/pages";

export const metadata: Metadata = { title: "Investor Charter" };

export default function Page() {
  return (
    <PageLayout>
      <PageHero
        title="Investor Charter"
        description="Our commitment to investor rights, service standards, and responsibilities as a SEBI Registered Investment Adviser."
      />

      <section className="bg-white py-16 sm:py-20">
        <Container>
          {/* Vision & Mission */}
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl bg-gradient-to-br from-brand to-brand-dark p-8 text-white shadow-xl shadow-brand/20">
              <div className="flex items-center gap-3">
                <Eye className="h-5 w-5 text-accent-light" />
                <h2 className="font-serif text-xl">Vision</h2>
              </div>
              <p className="mt-3 leading-relaxed text-white/85">{ic.vision}</p>
            </div>
            <div className="rounded-2xl border border-ink-900/10 bg-paper-100 p-8 shadow-sm">
              <div className="flex items-center gap-3">
                <Target className="h-5 w-5 text-brand" />
                <h2 className="font-serif text-xl text-ink-900">Mission</h2>
              </div>
              <p className="mt-3 leading-relaxed text-sand-700">{ic.mission}</p>
            </div>
          </div>

          {/* Services */}
          <div className="mt-14">
            <h2 className="font-serif text-2xl text-ink-900">Services we provide</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {ic.services.map((s) => (
                <li
                  key={s}
                  className="flex gap-3 rounded-xl border border-ink-900/10 bg-white p-4 text-sm text-sand-700 shadow-sm"
                >
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <span className="leading-relaxed">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Rights */}
          <div className="mt-14">
            <h2 className="font-serif text-2xl text-ink-900">Rights of investors</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {ic.rights.map((r) => (
                <li key={r} className="flex gap-3 text-sm text-sand-700">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  <span className="leading-relaxed">{r}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Do's & Don'ts */}
          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-brand/20 bg-brand-soft/50 p-7">
              <h3 className="font-serif text-xl text-ink-900">Do&apos;s</h3>
              <ul className="mt-4 space-y-3">
                {ic.dos.map((d) => (
                  <li key={d} className="flex gap-3 text-sm text-sand-700">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    <span className="leading-relaxed">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-red-200 bg-red-50/60 p-7">
              <h3 className="font-serif text-xl text-ink-900">Don&apos;ts</h3>
              <ul className="mt-4 space-y-3">
                {ic.donts.map((d) => (
                  <li key={d} className="flex gap-3 text-sm text-sand-700">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                    <span className="leading-relaxed">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-12 rounded-2xl border border-ink-900/10 bg-paper-100 p-6 text-sm leading-relaxed text-sand-700 shadow-sm">
            Grievances can be raised with us directly and, if unresolved, escalated to
            SEBI via the SCORES portal (scores.sebi.gov.in) or the Smart ODR portal
            (smartodr.in). See our{" "}
            <a href="/grievance-redressal" className="font-medium text-brand hover:underline">
              Grievance Redressal
            </a>{" "}
            page for the full process.
          </p>
        </Container>
      </section>
    </PageLayout>
  );
}
