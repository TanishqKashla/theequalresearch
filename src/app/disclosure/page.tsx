import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { disclosureContent } from "@/content/pages";

export const metadata: Metadata = { title: disclosureContent.title };

export default function Page() {
  return <LegalPage {...disclosureContent} />;
}
