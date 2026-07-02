import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { kycContent } from "@/content/pages";

export const metadata: Metadata = { title: kycContent.title };

export default function Page() {
  return <LegalPage {...kycContent} />;
}
