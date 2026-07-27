import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { ipvContent } from "@/content/pages";

export const metadata: Metadata = { title: ipvContent.title };

export default function Page() {
  return <LegalPage {...ipvContent} />;
}
