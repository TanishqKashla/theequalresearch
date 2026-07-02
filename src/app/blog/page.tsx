import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/layout/PageHero";
import { InsightsPreview } from "@/components/sections/InsightsPreview";

export const metadata: Metadata = { title: "Blogs" };

export default function Page() {
  return (
    <PageLayout>
      <PageHero
        title="Blogs & Insights"
        description="Market outlooks, sector reports, research notes, and investor education — turning information into understanding."
      />
      <InsightsPreview />
    </PageLayout>
  );
}
