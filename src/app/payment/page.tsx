import type { Metadata } from "next";
import { Landmark, ShieldAlert, FileText } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { company } from "@/content/site";
import { paymentDocs } from "@/content/pages";

export const metadata: Metadata = { title: "Payments" };

export default function Page() {
  const bankRows: { label: string; value: string }[] = [
    { label: "Account Name", value: company.bank.accountName },
    { label: "Account Number", value: company.bank.accountNumber },
    { label: "IFSC Code", value: company.bank.ifsc },
    { label: "Bank", value: company.bank.name },
    { label: "Branch", value: company.bank.branch },
  ];

  return (
    <PageLayout>
      <PageHero
        title="Payments"
        description="Make your advisory payments securely to our registered company bank account."
      />

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Bank details */}
            <div className="rounded-3xl border border-ink-900/10 bg-paper-100 p-8 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand-soft text-brand">
                  <Landmark className="h-5 w-5" />
                </span>
                <h2 className="font-serif text-xl text-ink-900">Bank Account Details</h2>
              </div>
              <dl className="mt-6 divide-y divide-ink-900/5">
                {bankRows.map((r) => (
                  <div key={r.label} className="flex flex-col gap-1 py-3 sm:flex-row sm:justify-between sm:gap-4">
                    <dt className="text-sm text-sand-700">{r.label}</dt>
                    <dd className="text-sm font-medium text-ink-900 sm:text-right">{r.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Warnings + docs */}
            <div className="space-y-5">
              <div className="rounded-2xl border border-red-200 bg-red-50/60 p-6">
                <div className="flex items-center gap-3">
                  <ShieldAlert className="h-5 w-5 text-red-500" />
                  <h2 className="font-serif text-lg text-ink-900">Important</h2>
                </div>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-sand-700">
                  <li>Payments are accepted only in the company&apos;s registered bank account.</li>
                  <li>Personal-account payments are never accepted.</li>
                  <li>Please beware of fraudulent calls or messages. We never ask for your Demat or banking passwords.</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-ink-900/10 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-brand" />
                  <h2 className="font-serif text-lg text-ink-900">Before you pay</h2>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-sand-700">
                  Please review the following documents so you can make an informed decision:
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {paymentDocs.map((d) => (
                    <li
                      key={d}
                      className="rounded-full bg-paper-200 px-3 py-1 text-xs font-medium text-ink-800"
                    >
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <p className="mt-8 text-sm leading-relaxed text-sand-700">
            After making a payment, please share the transaction reference with our team at{" "}
            <a href={`mailto:${company.email}`} className="font-medium text-brand hover:underline">
              {company.email}
            </a>{" "}
            or on WhatsApp at{" "}
            <a href={`https://wa.me/${company.whatsapp}`} className="font-medium text-brand hover:underline">
              {company.phone}
            </a>{" "}
            so we can activate your subscription. Investment in securities market is subject to
            market risks; past performance is not a guarantee of future performance.
          </p>
        </Container>
      </section>
    </PageLayout>
  );
}
