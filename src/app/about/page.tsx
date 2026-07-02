import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/layout/PageHero";
import { About } from "@/components/sections/About";
import { WhyUs } from "@/components/sections/WhyUs";

export const metadata: Metadata = { title: "About Us" };

export default function Page() {
  return (
    <PageLayout>
      <PageHero
        title="About Us"
        description="A SEBI Registered Investment Adviser founded in 2016, combining disciplined research, market intelligence, and investor education."
      />
      <About />
      <WhyUs />
    </PageLayout>
  );
}
