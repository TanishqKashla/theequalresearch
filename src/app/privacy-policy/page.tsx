import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { privacyContent } from "@/content/pages";

export const metadata: Metadata = { title: privacyContent.title };

export default function Page() {
  return <LegalPage {...privacyContent} />;
}
