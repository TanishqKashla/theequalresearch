import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { grievanceContent } from "@/content/pages";

export const metadata: Metadata = { title: "Grievance Redressal" };

export default function Page() {
  return <LegalPage {...grievanceContent} />;
}
