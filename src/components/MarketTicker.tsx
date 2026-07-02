"use client";

import { useEffect, useState } from "react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import type { Quote } from "@/app/api/ticker/route";

const REFRESH_MS = 15_000; // re-poll the route every 15s for near-live updates

function QuoteLogo({ q }: { q: Quote }) {
  const [failed, setFailed] = useState(false);
  const showImg = q.logo && !failed;

  return (
    <span className="grid h-4 w-4 shrink-0 place-items-center overflow-hidden rounded-sm bg-ink-900/5">
      {showImg ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={q.logo}
          alt=""
          width={16}
          height={16}
          className="h-4 w-4 object-contain"
          onError={() => setFailed(true)}
        />
      ) : (
        <span className="text-[9px] font-bold text-ink-700">{q.symbol.charAt(0)}</span>
      )}
    </span>
  );
}

function QuoteItem({ q }: { q: Quote }) {
  const up = q.change >= 0;
  return (
    <span className="mx-5 inline-flex items-center gap-2 whitespace-nowrap text-[13px] leading-none">
      <QuoteLogo q={q} />
      <span className="font-semibold text-ink-900">{q.symbol}</span>
      <span className="tabular-nums text-sand-700">
        {q.price.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
      </span>
      <span
        className={`inline-flex items-center gap-0.5 tabular-nums font-medium ${
          up ? "text-emerald-600" : "text-red-600"
        }`}
      >
        {up ? <ArrowUpRight className="h-3.5 w-3.5" /> : <ArrowDownRight className="h-3.5 w-3.5" />}
        {up ? "+" : ""}
        {q.change.toFixed(2)} ({up ? "+" : ""}
        {q.changePercent.toFixed(2)}%)
      </span>
    </span>
  );
}

export function MarketTicker() {
  const [quotes, setQuotes] = useState<Quote[]>([]);

  useEffect(() => {
    let active = true;

    const load = async () => {
      try {
        const res = await fetch("/api/ticker", { cache: "no-store" });
        if (!res.ok) return;
        const data = (await res.json()) as { quotes: Quote[] };
        if (active && Array.isArray(data.quotes)) setQuotes(data.quotes);
      } catch {
        /* keep last good data on transient failure */
      }
    };

    load();
    const id = setInterval(load, REFRESH_MS);
    return () => {
      active = false;
      clearInterval(id);
    };
  }, []);

  if (quotes.length === 0) {
    // Reserve the bar height so layout doesn't jump before first paint.
    return (
      <div
        aria-hidden
        className="fixed inset-x-0 top-0 z-[60] h-9 border-b border-ink-900/10 bg-white"
      />
    );
  }

  // Duration scales with the number of items for a steady speed (~4s per item).
  const durationSec = Math.max(20, quotes.length * 4);

  return (
    <div
      className="group fixed inset-x-0 top-0 z-[60] h-9 overflow-hidden border-b border-ink-900/10 bg-white/95 backdrop-blur"
      role="marquee"
      aria-label="Live market quotes"
    >
      <div className="flex h-full items-center">
        <div
          className="animate-ticker flex shrink-0 items-center group-hover:[animation-play-state:paused]"
          style={{ animationDuration: `${durationSec}s` }}
        >
          {quotes.map((q, i) => (
            <QuoteItem key={`a-${q.symbol}-${i}`} q={q} />
          ))}
        </div>
        {/* Duplicate track for a seamless, gap-free loop. */}
        <div
          aria-hidden
          className="animate-ticker flex shrink-0 items-center group-hover:[animation-play-state:paused]"
          style={{ animationDuration: `${durationSec}s` }}
        >
          {quotes.map((q, i) => (
            <QuoteItem key={`b-${q.symbol}-${i}`} q={q} />
          ))}
        </div>
      </div>
    </div>
  );
}
