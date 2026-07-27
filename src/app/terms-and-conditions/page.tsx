import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { termsContent } from "@/content/pages";

export const metadata: Metadata = { title: termsContent.title };

export default function Page() {
  return <LegalPage {...termsContent} />;
}
