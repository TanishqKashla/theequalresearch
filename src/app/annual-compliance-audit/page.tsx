import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { complianceAuditContent } from "@/content/pages";

export const metadata: Metadata = { title: complianceAuditContent.title };

export default function Page() {
  return <LegalPage {...complianceAuditContent} />;
}
