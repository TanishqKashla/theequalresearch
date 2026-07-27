import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { mitcContent } from "@/content/pages";

export const metadata: Metadata = { title: mitcContent.title };

export default function Page() {
  return <LegalPage {...mitcContent} />;
}
