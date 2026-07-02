import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { complaintData } from "@/content/pages";

export const metadata: Metadata = { title: "Complaint Status" };

export default function Page() {
  return (
    <PageLayout>
      <PageHero
        title="Complaint Status"
        description="Periodic disclosure of investor complaints, in line with SEBI requirements."
      />

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="overflow-x-auto rounded-2xl border border-ink-900/10 shadow-sm">
              <table className="w-full min-w-[40rem] text-left text-sm">
                <thead>
                  <tr className="bg-ink-900 text-white">
                    <th className="px-5 py-4 font-semibold">Period</th>
                    <th className="px-5 py-4 font-semibold">Pending at start</th>
                    <th className="px-5 py-4 font-semibold">Received</th>
                    <th className="px-5 py-4 font-semibold">Resolved</th>
                    <th className="px-5 py-4 font-semibold">Pending at end</th>
                  </tr>
                </thead>
                <tbody>
                  {complaintData.map((row, i) => (
                    <tr
                      key={row.period}
                      className={i % 2 === 0 ? "bg-white" : "bg-paper-100"}
                    >
                      <td className="px-5 py-4 font-medium text-ink-900">{row.period}</td>
                      <td className="px-5 py-4 tabular-nums text-sand-700">{row.pendingStart}</td>
                      <td className="px-5 py-4 tabular-nums text-sand-700">{row.received}</td>
                      <td className="px-5 py-4 tabular-nums text-sand-700">{row.resolved}</td>
                      <td className="px-5 py-4 tabular-nums text-sand-700">{row.pendingEnd}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-10 space-y-4 text-sm leading-relaxed text-sand-700">
              <p>
                The data above is updated periodically and reflects complaints received
                directly, as well as through SEBI SCORES and other regulatory channels.
              </p>
              <p>
                If you have a grievance, please first raise it with us. If it remains
                unresolved, you may escalate to SEBI via the{" "}
                <a
                  href="https://scores.sebi.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-brand hover:underline"
                >
                  SCORES portal
                </a>{" "}
                or opt for online dispute resolution through the{" "}
                <a
                  href="https://smartodr.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-brand hover:underline"
                >
                  Smart ODR portal
                </a>
                . Full details are on our{" "}
                <a href="/grievance-redressal" className="font-medium text-brand hover:underline">
                  Grievance Redressal
                </a>{" "}
                page.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
