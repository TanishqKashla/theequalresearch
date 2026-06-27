import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://theequaleresearch.com"),
  title: {
    default: "Equal Research — Research-Driven Market Intelligence",
    template: "%s | Equal Research",
  },
  description:
    "Equal Research is a SEBI Registered Investment Adviser combining analytical rigor, market intelligence, and investor education to help investors make informed financial decisions.",
  keywords: [
    "Equal Research",
    "SEBI Registered Investment Adviser",
    "equity research",
    "market intelligence",
    "wealth planning",
    "investor education",
  ],
  openGraph: {
    title: "Equal Research — Research-Driven Market Intelligence",
    description:
      "Analytical rigor, market intelligence, and investor education for better investment decisions.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink-900">
        {children}
      </body>
    </html>
  );
}
