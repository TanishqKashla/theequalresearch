import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { amlContent } from "@/content/pages";

export const metadata: Metadata = { title: amlContent.title };

export default function Page() {
  return <LegalPage {...amlContent} />;
}
