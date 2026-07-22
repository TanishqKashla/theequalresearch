"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { primaryNav, navGroups, paymentsLink, headerCta } from "@/content/site";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/cn";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  // Single source of truth for the desktop dropdowns — only one open at a time.
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  // Which mobile accordion sections are expanded.
  const [openSections, setOpenSections] = useState<string[]>([]);
  const navRef = useRef<HTMLElement>(null);

  const isActive = (href: string) => pathname === href;
  const isGroupActive = (items: readonly { href: string }[]) =>
    items.some((i) => pathname === i.href);

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

  // Escape closes any open desktop dropdown or the mobile drawer.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Click outside the desktop nav closes the open dropdown.
  useEffect(() => {
    if (!openMenu) return;
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [openMenu]);

  const toggleSection = (label: string) =>
    setOpenSections((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label],
    );

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
          ref={navRef}
          className="hidden items-center gap-2 lg:flex xl:gap-3.5 2xl:gap-5"
          aria-label="Primary"
        >
          {primaryNav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={cn(
                "whitespace-nowrap rounded-md px-2 py-1.5 text-[13px] font-medium transition-colors",
                isActive(item.href)
                  ? "text-brand"
                  : "text-ink-800/80 hover:text-brand",
              )}
            >
              {item.label}
            </Link>
          ))}

          {navGroups.map((group) => {
            const active = isGroupActive(group.items);
            const isOpen = openMenu === group.label;
            return (
              <div
                key={group.label}
                className="relative"
                onMouseEnter={() => setOpenMenu(group.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button
                  className={cn(
                    "flex items-center gap-1 whitespace-nowrap rounded-md px-2 py-1.5 text-[13px] font-medium transition-colors",
                    active || isOpen
                      ? "text-brand"
                      : "text-ink-800/80 hover:text-brand",
                  )}
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                  onClick={() => setOpenMenu(isOpen ? null : group.label)}
                >
                  {group.label}
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform",
                      isOpen ? "rotate-180" : "rotate-0",
                    )}
                  />
                </button>
                {isOpen && (
                  <div className="absolute right-0 top-full w-64 pt-3">
                    <ul
                      role="menu"
                      className="overflow-hidden rounded-xl border border-ink-900/10 bg-white py-2 shadow-2xl shadow-ink-900/10"
                    >
                      {group.items.map((m) => (
                        <li key={m.label} role="none">
                          <Link
                            role="menuitem"
                            href={m.href}
                            aria-current={isActive(m.href) ? "page" : undefined}
                            onClick={() => setOpenMenu(null)}
                            className={cn(
                              "block px-4 py-2 text-sm transition-colors",
                              isActive(m.href)
                                ? "bg-brand-soft font-medium text-brand-dark"
                                : "text-ink-800/80 hover:bg-brand-soft hover:text-brand-dark",
                            )}
                          >
                            {m.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}

          <Link
            href={paymentsLink.href}
            aria-current={isActive(paymentsLink.href) ? "page" : undefined}
            className={cn(
              "whitespace-nowrap rounded-md px-2 py-1.5 text-[13px] font-medium transition-colors",
              isActive(paymentsLink.href)
                ? "text-brand"
                : "text-ink-800/80 hover:text-brand",
            )}
          >
            {paymentsLink.label}
          </Link>

          <Link
            href={headerCta.href}
            className="whitespace-nowrap rounded-full bg-brand px-5 py-2.5 text-[13px] font-semibold text-white shadow-lg shadow-brand/25 transition-all hover:bg-brand-dark hover:-translate-y-0.5"
          >
            {headerCta.label}
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="text-ink-900 lg:hidden"
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
            className="max-h-[calc(100vh-4.5rem)] overflow-y-auto border-t border-ink-900/10 bg-white px-5 pb-8 pt-4 shadow-xl shadow-ink-900/5"
            aria-label="Mobile"
          >
            {primaryNav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "block border-b border-ink-900/5 py-3 text-base font-medium",
                  isActive(item.href) ? "text-brand" : "text-ink-900",
                )}
              >
                {item.label}
              </Link>
            ))}

            {navGroups.map((group) => {
              const expanded = openSections.includes(group.label);
              return (
                <div key={group.label} className="border-b border-ink-900/5">
                  <button
                    onClick={() => toggleSection(group.label)}
                    aria-expanded={expanded}
                    className={cn(
                      "flex w-full items-center justify-between py-3 text-base font-medium",
                      isGroupActive(group.items) ? "text-brand" : "text-ink-900",
                    )}
                  >
                    {group.label}
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 transition-transform",
                        expanded ? "rotate-180" : "rotate-0",
                      )}
                    />
                  </button>
                  {expanded && (
                    <div className="pb-2">
                      {group.items.map((m) => (
                        <Link
                          key={m.label}
                          href={m.href}
                          onClick={() => setOpen(false)}
                          aria-current={isActive(m.href) ? "page" : undefined}
                          className={cn(
                            "block py-2 pl-3 text-sm",
                            isActive(m.href)
                              ? "font-medium text-brand"
                              : "text-sand-700",
                          )}
                        >
                          {m.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            <Link
              href={paymentsLink.href}
              onClick={() => setOpen(false)}
              aria-current={isActive(paymentsLink.href) ? "page" : undefined}
              className={cn(
                "block border-b border-ink-900/5 py-3 text-base font-medium",
                isActive(paymentsLink.href) ? "text-brand" : "text-ink-900",
              )}
            >
              {paymentsLink.label}
            </Link>

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
