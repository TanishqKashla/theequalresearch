import { NextResponse } from "next/server";

// Real-time quotes from MoneyControl's public price feed. Cache for 15s so the
// strip feels live without re-hitting MoneyControl on every visitor poll.
export const revalidate = 15;

export type Quote = {
  symbol: string;
  price: number;
  change: number; // absolute change vs previous close
  changePercent: number; // percentage change vs previous close
  logo?: string; // company logo URL (may be absent)
};

const MC = "https://priceapi.moneycontrol.com/pricefeed";
const stockUrl = (scid: string) => `${MC}/nse/equitycash/${scid}`;
const indexUrl = (id: string) =>
  `${MC}/notapplicable/inidicesindia/${encodeURIComponent(id)}`;

const logo = (domain: string) =>
  `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;

type SymbolDef = { display: string; url: string; logo?: string };

/**
 * Token -> MoneyControl feed config. The token is what you put in TICKER_SYMBOLS.
 * `url` uses MoneyControl's internal codes (SCID for stocks, index id for
 * indices), which were verified against the live feed. To add a stock, look up
 * its SCID and add a row here.
 */
const SYMBOLS: Record<string, SymbolDef> = {
  "^NSEI": { display: "NIFTY 50", url: indexUrl("in;NSX"), logo: logo("nseindia.com") },
  "^BSESN": { display: "SENSEX", url: indexUrl("in;SEN"), logo: logo("bseindia.com") },
  RELIANCE: { display: "RELIANCE", url: stockUrl("RI"), logo: logo("ril.com") },
  TCS: { display: "TCS", url: stockUrl("TCS"), logo: logo("tcs.com") },
  INFY: { display: "INFY", url: stockUrl("IT"), logo: logo("infosys.com") },
  HDFCBANK: { display: "HDFCBANK", url: stockUrl("HDF01"), logo: logo("hdfcbank.com") },
  ICICIBANK: { display: "ICICIBANK", url: stockUrl("ICI02"), logo: logo("icicibank.com") },
  SBIN: { display: "SBIN", url: stockUrl("SBI"), logo: logo("sbi.co.in") },
  "BAJAJ-AUTO": { display: "BAJAJ-AUTO", url: stockUrl("BA06"), logo: logo("bajajauto.com") },
  HINDUNILVR: { display: "HINDUNILVR", url: stockUrl("HL"), logo: logo("hul.co.in") },
  ITC: { display: "ITC", url: stockUrl("ITC"), logo: logo("itcportal.com") },
  LT: { display: "LT", url: stockUrl("LT"), logo: logo("larsentoubro.com") },
  HCLTECH: { display: "HCLTECH", url: stockUrl("HCL02"), logo: logo("hcltech.com") },
  WIPRO: { display: "WIPRO", url: stockUrl("W"), logo: logo("wipro.com") },
  AXISBANK: { display: "AXISBANK", url: stockUrl("UTI10"), logo: logo("axisbank.com") },
  KOTAKBANK: { display: "KOTAKBANK", url: stockUrl("KMF"), logo: logo("kotak.com") },
  MARUTI: { display: "MARUTI", url: stockUrl("MU01"), logo: logo("marutisuzuki.com") },
  BHARTIARTL: { display: "BHARTIARTL", url: stockUrl("BTV"), logo: logo("airtel.in") },
  TATAMOTORS: { display: "TATAMOTORS", url: stockUrl("TML02"), logo: logo("tatamotors.com") },
};

const DEFAULT_SYMBOLS =
  "^NSEI,^BSESN,RELIANCE,TCS,INFY,HDFCBANK,ICICIBANK,SBIN,BAJAJ-AUTO,HINDUNILVR,ITC,LT";

const num = (v: unknown): number => {
  if (typeof v === "number") return v;
  if (typeof v === "string") {
    const n = parseFloat(v.replace(/[,%₹\s]/g, ""));
    return Number.isFinite(n) ? n : 0;
  }
  return 0;
};

async function fetchQuote(token: string): Promise<Quote | null> {
  const def = SYMBOLS[token];
  if (!def) {
    console.warn(`[ticker] no MoneyControl mapping for "${token}" — skipping`);
    return null;
  }

  try {
    const res = await fetch(def.url, {
      headers: { "User-Agent": "Mozilla/5.0", Accept: "application/json" },
      next: { revalidate: 15 },
    });
    if (!res.ok) return null;

    const json = await res.json();
    const d = json?.data;
    const price = num(d?.pricecurrent);
    if (!price) return null; // closed/halted or bad code

    return {
      symbol: def.display,
      price,
      change: num(d?.pricechange),
      changePercent: num(d?.pricepercentchange),
      logo: def.logo,
    };
  } catch {
    return null;
  }
}

export async function GET() {
  const tokens = (process.env.TICKER_SYMBOLS || DEFAULT_SYMBOLS)
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  const settled = await Promise.all(tokens.map(fetchQuote));
  const quotes = settled.filter((q): q is Quote => q !== null);

  return NextResponse.json(
    { quotes, live: quotes.length > 0 },
    // Tell the CDN/browser this is short-lived live data.
    { headers: { "Cache-Control": "public, s-maxage=15, stale-while-revalidate=30" } },
  );
}
