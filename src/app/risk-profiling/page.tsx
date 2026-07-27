import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { riskProfilingContent } from "@/content/pages";

export const metadata: Metadata = { title: riskProfilingContent.title };

export default function Page() {
  return <LegalPage {...riskProfilingContent} />;
}
