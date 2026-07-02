import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { refundContent } from "@/content/pages";

export const metadata: Metadata = { title: "Termination & Refund Policy" };

export default function Page() {
  return <LegalPage {...refundContent} />;
}
