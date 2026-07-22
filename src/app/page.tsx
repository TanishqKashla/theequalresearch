import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ComplianceModals } from "@/components/ComplianceModals";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { Goals } from "@/components/sections/Goals";
import { InsightsPreview } from "@/components/sections/InsightsPreview";
import { Careers } from "@/components/sections/Careers";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <ComplianceModals />
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustStrip />
        <About />
        <Services />
        <WhyUs />
        <Goals />
        <InsightsPreview />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
