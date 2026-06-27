"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { nav, moreLinks } from "@/content/site";
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
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-ink-950/90 backdrop-blur-md shadow-lg shadow-ink-950/20"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/#top" className="flex items-center gap-2.5" aria-label="Equal Research home">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-accent font-serif text-lg font-semibold text-ink-950">
            E
          </span>
          <span className="font-serif text-lg font-semibold text-white">
            Equal<span className="text-accent"> Research</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-accent"
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
              className="flex items-center gap-1 text-sm font-medium text-white/80 transition-colors hover:text-accent"
              aria-expanded={moreOpen}
              aria-haspopup="true"
              onClick={() => setMoreOpen((v) => !v)}
            >
              More <ChevronDown className="h-4 w-4" />
            </button>
            {moreOpen && (
              <div className="absolute right-0 top-full w-64 pt-3">
                <ul className="overflow-hidden rounded-xl border border-white/10 bg-ink-900 py-2 shadow-2xl">
                  {moreLinks.map((m) => (
                    <li key={m.label}>
                      <Link
                        href={m.href}
                        className="block px-4 py-2 text-sm text-white/75 transition-colors hover:bg-ink-800 hover:text-accent"
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
            href="/#contact"
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-ink-950 transition-all hover:bg-accent-light hover:-translate-y-0.5"
          >
            Get In Touch
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden">
          <nav
            className="max-h-[calc(100vh-4.5rem)] overflow-y-auto border-t border-white/10 bg-ink-950 px-5 pb-8 pt-4"
            aria-label="Mobile"
          >
            {nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block border-b border-white/5 py-3 text-base font-medium text-white/85"
              >
                {item.label}
              </Link>
            ))}
            <p className="pt-5 pb-2 text-xs font-semibold uppercase tracking-widest text-accent">
              Regulatory & More
            </p>
            {moreLinks.map((m) => (
              <Link
                key={m.label}
                href={m.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm text-white/65"
              >
                {m.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-6 block rounded-full bg-accent px-5 py-3 text-center text-sm font-semibold text-ink-950"
            >
              Get In Touch
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
