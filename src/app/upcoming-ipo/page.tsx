import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { upcomingIpoContent } from "@/content/pages";

export const metadata: Metadata = { title: upcomingIpoContent.title };

export default function Page() {
  return <LegalPage {...upcomingIpoContent} />;
}
