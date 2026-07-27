import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { specialHoldingContent } from "@/content/pages";

export const metadata: Metadata = { title: specialHoldingContent.title };

export default function Page() {
  return <LegalPage {...specialHoldingContent} />;
}
