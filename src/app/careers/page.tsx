import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/layout/PageHero";
import { Careers } from "@/components/sections/Careers";

export const metadata: Metadata = { title: "Careers" };

export default function Page() {
  return (
    <PageLayout>
      <PageHero
        title="Careers"
        description="Great research begins with curious minds. Build your career in financial research with The Equal Research."
      />
      <Careers />
    </PageLayout>
  );
}
