import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { tradingPrinciplesContent } from "@/content/pages";

export const metadata: Metadata = { title: tradingPrinciplesContent.title };

export default function Page() {
  return <LegalPage {...tradingPrinciplesContent} />;
}
