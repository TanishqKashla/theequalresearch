import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { signatureMismatchContent } from "@/content/pages";

export const metadata: Metadata = { title: signatureMismatchContent.title };

export default function Page() {
  return <LegalPage {...signatureMismatchContent} />;
}
