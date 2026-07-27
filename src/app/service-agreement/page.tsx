import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { serviceAgreementContent } from "@/content/pages";

export const metadata: Metadata = { title: serviceAgreementContent.title };

export default function Page() {
  return <LegalPage {...serviceAgreementContent} />;
}
