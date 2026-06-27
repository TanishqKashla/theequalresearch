import Link from "next/link";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import {
  company,
  nav,
  moreLinks,
  services,
  footerDisclaimer,
} from "@/content/site";

export function Footer() {
  return (
    <footer className="bg-ink-950 text-white/70">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-md bg-accent font-serif text-lg font-semibold text-ink-950">
                E
              </span>
              <span className="font-serif text-lg font-semibold text-white">
                Equal<span className="text-accent"> Research</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              A SEBI Registered Investment Adviser delivering research-driven
              insights, market intelligence, and investor education since{" "}
              {company.established}.
            </p>
            <div className="mt-5 space-y-2 text-sm">
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-2 hover:text-accent"
              >
                <Mail className="h-4 w-4 text-accent" /> {company.email}
              </a>
              <a
                href={`tel:${company.phone}`}
                className="flex items-center gap-2 hover:text-accent"
              >
                <Phone className="h-4 w-4 text-accent" /> {company.phone}
              </a>
              <a
                href={`https://wa.me/${company.whatsapp}`}
                className="flex items-center gap-2 hover:text-accent"
              >
                <MessageCircle className="h-4 w-4 text-accent" /> WhatsApp
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav.map((n) => (
                <li key={n.label}>
                  <Link href={n.href} className="hover:text-accent">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link href={`/#services`} className="hover:text-accent">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Regulatory */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
              Regulatory
            </h3>
            <ul className="mt-4 grid grid-cols-1 gap-2.5 text-sm sm:grid-cols-2 lg:grid-cols-1">
              {moreLinks.map((m) => (
                <li key={m.label}>
                  <Link href={m.href} className="hover:text-accent">
                    {m.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Credentials row */}
        <div className="mt-12 grid gap-4 rounded-xl border border-white/10 bg-ink-900/50 p-5 text-sm sm:grid-cols-2">
          <p>
            <span className="text-white/50">SEBI Reg. No. (RIA): </span>
            <span className="font-medium text-white">{company.sebiRia}</span>
          </p>
          <p className="sm:text-right">
            <span className="text-white/50">Certification: </span>
            <span className="font-medium text-white">{company.iso}</span>
          </p>
        </div>

        {/* Disclaimer */}
        <p className="mt-8 text-xs leading-relaxed text-white/45">
          {footerDisclaimer}
        </p>
        <div className="mt-6 flex flex-col items-start justify-between gap-2 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center">
          <p>
            © {company.established}–2026 {company.legalName}. All rights reserved.
          </p>
          <p>Built for clarity, compliance & conviction.</p>
        </div>
      </Container>
    </footer>
  );
}
