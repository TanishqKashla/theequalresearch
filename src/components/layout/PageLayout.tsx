import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

/** Standard chrome for every non-home page: header, main content, footer. */
export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
