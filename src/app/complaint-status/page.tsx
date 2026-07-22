import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { complaintTables } from "@/content/pages";

export const metadata: Metadata = { title: "Complaint Status" };

export default function Page() {
  return (
    <PageLayout>
      <PageHero
        title="Complaint Board"
        description="Periodic disclosure of investor complaints, in line with SEBI requirements."
      />

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-4xl space-y-14">
            {complaintTables.map((table) => (
              <div key={table.title}>
                <h2 className="font-serif text-xl text-ink-900 sm:text-2xl">
                  {table.title}
                </h2>

                <div className="mt-5 overflow-x-auto rounded-2xl border border-ink-900/10 shadow-sm">
                  <table className="w-full min-w-[44rem] text-left text-sm">
                    <thead>
                      <tr className="bg-ink-900 text-white">
                        {table.columns.map((col) => (
                          <th key={col} className="px-4 py-3.5 font-semibold">
                            {col}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {table.rows.map((row, r) => (
                        <tr
                          key={r}
                          className={r % 2 === 0 ? "bg-white" : "bg-paper-100"}
                        >
                          {row.map((cell, c) => (
                            <td
                              key={c}
                              className={
                                c === 1
                                  ? "px-4 py-3.5 font-medium text-ink-900"
                                  : "px-4 py-3.5 tabular-nums text-sand-700"
                              }
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                      <tr className="border-t-2 border-ink-900/20 bg-brand-soft/50 font-semibold text-ink-900">
                        {table.grandTotal.map((cell, c) => (
                          <td
                            key={c}
                            className={
                              c === 1
                                ? "px-4 py-3.5"
                                : "px-4 py-3.5 tabular-nums"
                            }
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>

                {table.notes && (
                  <div className="mt-4 space-y-1.5">
                    {table.notes.map((note) => (
                      <p key={note} className="text-xs leading-relaxed text-sand-700">
                        {note}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="space-y-4 border-t border-ink-900/10 pt-10 text-sm leading-relaxed text-sand-700">
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
