import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { disclaimerContent } from "@/content/pages";

export const metadata: Metadata = { title: disclaimerContent.title };

export default function Page() {
  return <LegalPage {...disclaimerContent} />;
}
