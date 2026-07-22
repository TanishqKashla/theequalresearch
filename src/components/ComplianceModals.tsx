"use client";

import { useEffect, useRef, useState } from "react";
import { compliancePopups } from "@/content/site";
import { cn } from "@/lib/cn";

// Sequential compliance acknowledgement popups shown on every home-page visit.
// The user must click each popup's button to advance; the backdrop is
// intentionally non-dismissable so the acknowledgement cannot be skipped.
export function ComplianceModals() {
  const [step, setStep] = useState(0);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const total = compliancePopups.length;
  const active = compliancePopups[step];
  const open = step < total;

  // Lock body scroll while a popup is showing.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Move focus to the acknowledge button whenever a new popup appears.
  useEffect(() => {
    if (open) buttonRef.current?.focus();
  }, [step, open]);

  if (!active) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={`compliance-${active.id}-title`}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
    >
      <div
        className="absolute inset-0 bg-ink-950/70 backdrop-blur-sm"
        aria-hidden="true"
      />

      <div className="relative flex max-h-[85vh] w-full max-w-lg flex-col overflow-hidden rounded-2xl bg-white shadow-2xl shadow-ink-950/30 ring-1 ring-ink-900/10">
        {/* Header */}
        <div className="border-b border-ink-900/10 bg-wash-brand px-6 py-5">
          {total > 1 && (
            <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-brand">
              Step {step + 1} of {total}
            </p>
          )}
          <h2
            id={`compliance-${active.id}-title`}
            className="font-serif text-xl font-semibold text-ink-900"
          >
            {"icon" in active && active.icon ? `${active.icon} ` : ""}
            {active.title}
          </h2>
        </div>

        {/* Scrollable body */}
        <div className="space-y-3 overflow-y-auto px-6 py-5 text-sm leading-relaxed text-sand-700">
          {active.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        {/* Footer / acknowledge action */}
        <div className="border-t border-ink-900/10 bg-paper-100 px-6 py-4">
          <button
            ref={buttonRef}
            onClick={() => setStep((s) => s + 1)}
            className={cn(
              "w-full rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white",
              "shadow-lg shadow-brand/25 transition-all hover:bg-brand-dark hover:-translate-y-0.5",
              "focus-visible:outline-2 focus-visible:outline-offset-2",
            )}
          >
            {active.cta}
          </button>
        </div>
      </div>
    </div>
  );
}
