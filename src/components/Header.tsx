"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { nav, moreLinks, headerCta } from "@/content/site";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/cn";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-9 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg shadow-ink-900/5 ring-1 ring-ink-900/5"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5" aria-label="The Equal Research home">
          <Logo className="h-14 sm:h-16" priority />
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden items-center gap-3.5 xl:flex 2xl:gap-5"
          aria-label="Primary"
        >
          {nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="whitespace-nowrap text-[13px] font-medium text-ink-800/80 transition-colors hover:text-brand"
            >
              {item.label}
            </Link>
          ))}
          <div
            className="relative"
            onMouseEnter={() => setMoreOpen(true)}
            onMouseLeave={() => setMoreOpen(false)}
          >
            <button
              className="flex items-center gap-1 whitespace-nowrap text-[13px] font-medium text-ink-800/80 transition-colors hover:text-brand"
              aria-expanded={moreOpen}
              aria-haspopup="true"
              onClick={() => setMoreOpen((v) => !v)}
            >
              More <ChevronDown className="h-4 w-4" />
            </button>
            {moreOpen && (
              <div className="absolute right-0 top-full w-64 pt-3">
                <ul className="overflow-hidden rounded-xl border border-ink-900/10 bg-white py-2 shadow-2xl shadow-ink-900/10">
                  {moreLinks.map((m) => (
                    <li key={m.label}>
                      <Link
                        href={m.href}
                        className="block px-4 py-2 text-sm text-ink-800/80 transition-colors hover:bg-brand-soft hover:text-brand-dark"
                      >
                        {m.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <Link
            href={headerCta.href}
            className="whitespace-nowrap rounded-full bg-brand px-5 py-2.5 text-[13px] font-semibold text-white shadow-lg shadow-brand/25 transition-all hover:bg-brand-dark hover:-translate-y-0.5"
          >
            {headerCta.label}
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="text-ink-900 xl:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="xl:hidden">
          <nav
            className="max-h-[calc(100vh-4.5rem)] overflow-y-auto border-t border-ink-900/10 bg-white px-5 pb-8 pt-4 shadow-xl shadow-ink-900/5"
            aria-label="Mobile"
          >
            {nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block border-b border-ink-900/5 py-3 text-base font-medium text-ink-900"
              >
                {item.label}
              </Link>
            ))}
            <p className="pt-5 pb-2 text-xs font-semibold uppercase tracking-widest text-brand">
              Regulatory & More
            </p>
            {moreLinks.map((m) => (
              <Link
                key={m.label}
                href={m.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm text-sand-700"
              >
                {m.label}
              </Link>
            ))}
            <Link
              href={headerCta.href}
              onClick={() => setOpen(false)}
              className="mt-6 block rounded-full bg-brand px-5 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-brand/25"
            >
              {headerCta.label}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
