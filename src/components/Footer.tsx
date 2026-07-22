import Link from "next/link";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import {
  company,
  primaryNav,
  navGroups,
  paymentsLink,
  footerDisclaimer,
} from "@/content/site";
import { researchServices } from "@/content/pages";

const insightsGroup = navGroups.find((g) => g.label === "Insights");
const complianceGroup = navGroups.find((g) => g.label === "Compliance");

// Explore column: primary pages + research links + the payments utility link.
const exploreLinks = [
  ...primaryNav,
  ...(insightsGroup?.items ?? []),
  paymentsLink,
];
const regulatoryLinks = complianceGroup?.items ?? [];

export function Footer() {
  return (
    <footer className="border-t border-ink-900/10 bg-wash-brand text-sand-700">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Logo className="h-16 sm:h-20" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              A SEBI Registered Investment Adviser delivering research-driven
              insights, market intelligence, and investor education since{" "}
              {company.established}.
            </p>
            <div className="mt-5 space-y-2 text-sm">
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-2 transition-colors hover:text-brand"
              >
                <Mail className="h-4 w-4 text-brand" /> {company.email}
              </a>
              <a
                href={`tel:${company.phone}`}
                className="flex items-center gap-2 transition-colors hover:text-brand"
              >
                <Phone className="h-4 w-4 text-brand" /> {company.phone}
              </a>
              <a
                href={`https://wa.me/${company.whatsapp}`}
                className="flex items-center gap-2 transition-colors hover:text-brand"
              >
                <MessageCircle className="h-4 w-4 text-brand" /> WhatsApp
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-ink-900">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {exploreLinks.map((n) => (
                <li key={n.label}>
                  <Link href={n.href} className="transition-colors hover:text-brand">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-ink-900">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {researchServices.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link href="/services" className="transition-colors hover:text-brand">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Regulatory */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-ink-900">
              Regulatory
            </h3>
            <ul className="mt-4 grid grid-cols-1 gap-2.5 text-sm sm:grid-cols-2 lg:grid-cols-1">
              {regulatoryLinks.map((m) => (
                <li key={m.label}>
                  <Link href={m.href} className="transition-colors hover:text-brand">
                    {m.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Credentials row */}
        <div className="mt-12 grid gap-4 rounded-xl border border-ink-900/10 bg-white/70 p-5 text-sm shadow-sm sm:grid-cols-2">
          <p>
            <span className="text-sand-700">SEBI Reg. No. (RIA): </span>
            <span className="font-medium text-ink-900">{company.sebiRia}</span>
          </p>
          <p className="sm:text-right">
            <span className="text-sand-700">Certification: </span>
            <span className="font-medium text-ink-900">{company.iso}</span>
          </p>
        </div>

        {/* Disclaimer */}
        <p className="mt-8 text-xs leading-relaxed text-sand-700/80">
          {footerDisclaimer}
        </p>
        <div className="mt-6 flex flex-col items-start justify-between gap-2 border-t border-ink-900/10 pt-6 text-xs text-sand-700/80 sm:flex-row sm:items-center">
          <p>
            © {company.established}–2026 {company.legalName}. All rights reserved.
          </p>
          <p>Built for clarity, compliance & conviction.</p>
        </div>
      </Container>
    </footer>
  );
}
