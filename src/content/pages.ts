// Content for the dedicated inner pages. Sourced from theequaleresearch.com
// (primary) and adapted from an industry reference where the original lacked a
// page — always using The Equal Research's own details.

import type { LegalContent } from "@/components/layout/LegalPage";
import { company } from "@/content/site";

/* ---------------------------------------------------------------- Services */

export type ResearchService = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  features: string[];
};

export const researchServices: ResearchService[] = [
  {
    slug: "equity-cash",
    title: "Equity Cash Research",
    tagline: "For investors and traders in the NSE cash market",
    summary:
      "Research-backed ideas for the equity cash segment, built on fundamental strength and technical structure for both intraday and short-term delivery participation.",
    features: [
      "Fundamental + technical screening",
      "Intraday & delivery ideas",
      "Defined entry, target & stop-loss",
      "Live market-hours support",
    ],
  },
  {
    slug: "stock-futures",
    title: "Stock Futures Research",
    tagline: "Positional and intraday research for stock F&O",
    summary:
      "Structured research for the stock futures segment, designed for traders who want disciplined, risk-defined participation in leveraged positions.",
    features: [
      "Stock futures trend analysis",
      "Risk-defined position sizing",
      "Rollover & expiry guidance",
      "Intraday & positional views",
    ],
  },
  {
    slug: "index-research",
    title: "Index Research — Nifty & Bank Nifty",
    tagline: "Reading the index during market hours",
    summary:
      "Continuous index research on Nifty and Bank Nifty, tracking trend, momentum, and key levels through the trading day.",
    features: [
      "Nifty & Bank Nifty levels",
      "Trend & momentum reads",
      "Support / resistance mapping",
      "Live intraday updates",
    ],
  },
  {
    slug: "options-strategies",
    title: "Options Research & Strategies",
    tagline: "Nifty option and stock option research",
    summary:
      "Options research focused on structured strategies rather than tips alone — helping participants understand risk, reward, and the rationale behind each idea.",
    features: [
      "Index & stock options",
      "Strategy-based approach",
      "Risk & reward clarity",
      "Market-hours guidance",
    ],
  },
  {
    slug: "commodity-mcx",
    title: "Commodity (MCX) Research",
    tagline: "Global-linked research for the MCX segment",
    summary:
      "Commodity research across gold, silver, crude oil, and base metals, informed by global cues and tracked closely through the session.",
    features: [
      "Bullion, energy & base metals",
      "Global market monitoring",
      "Intraday & positional ideas",
      "HNI-focused coverage",
    ],
  },
  {
    slug: "btst-stbt",
    title: "BTST / STBT Positional",
    tagline: "Overnight, positional research ideas",
    summary:
      "Buy-Today-Sell-Tomorrow and Sell-Today-Buy-Tomorrow positional research — typically one to two well-researched ideas a day with an overnight perspective.",
    features: [
      "1–2 researched calls a day",
      "Overnight positional view",
      "Equity & derivatives",
      "Clear risk parameters",
    ],
  },
];

/* ----------------------------------------------------------------- Pricing */

export type PricingTier = { label: string; price: string; period: string };

export type PricingPlan = {
  segment: string;
  tiers: PricingTier[];
};

export const pricingPlans: PricingPlan[] = [
  {
    segment: "Equity Cash",
    tiers: [
      { label: "Basic", price: "₹7,000", period: "month" },
      { label: "Standard", price: "₹16,000", period: "quarter" },
      { label: "Premium", price: "₹29,000", period: "quarter" },
    ],
  },
  {
    segment: "Index Options",
    tiers: [
      { label: "Basic", price: "₹10,000", period: "month" },
      { label: "Standard", price: "₹25,000", period: "quarter" },
      { label: "Premium", price: "₹40,000", period: "quarter" },
    ],
  },
  {
    segment: "Stock Options",
    tiers: [
      { label: "Basic", price: "₹12,000", period: "month" },
      { label: "Standard", price: "₹29,500", period: "quarter" },
      { label: "Premium", price: "₹49,000", period: "quarter" },
    ],
  },
  {
    segment: "Stock Futures",
    tiers: [
      { label: "Basic", price: "₹12,000", period: "month" },
      { label: "Standard", price: "₹29,500", period: "quarter" },
      { label: "Premium", price: "₹49,000", period: "quarter" },
    ],
  },
  {
    segment: "BTST / STBT",
    tiers: [
      { label: "Basic", price: "₹12,500", period: "month" },
      { label: "Standard", price: "₹37,500", period: "quarter" },
    ],
  },
  {
    segment: "Commodity (MCX)",
    tiers: [
      { label: "Basic", price: "₹15,000", period: "month" },
      { label: "Premium", price: "₹45,000", period: "quarter" },
    ],
  },
];

export const pricingIncludes = [
  "Research ideas with clear entry, target and stop-loss",
  "Support during market hours",
  "Delivery via SMS / messaging and the client portal",
  "Access to research notes and market updates",
  "Guidance aligned to your chosen segment",
];

export const pricingNote =
  "Fees are for research and advisory services only and are not investment amounts. All payments must be made to the company's registered bank account — personal-account payments are never accepted. Investment in securities market is subject to market risks; past performance is not indicative of future results.";

/* --------------------------------------------------------- Investor Charter */

export const investorCharter = {
  vision: "Invest with knowledge and safety.",
  mission:
    "To help investors access appropriate research and advice, make informed decisions aligned to their goals, and progress towards financial wellness with transparency and fairness.",
  services: [
    "Onboarding of clients with sharing of terms and completion of KYC.",
    "Disclosure of material information, applicable fees, and service timelines.",
    "Research and advice shared without discrimination among eligible clients.",
    "Protection of client data, confidentiality, and honest, unbiased treatment.",
  ],
  rights: [
    "Right to privacy and confidentiality of your information.",
    "Right to transparent practices and fair, honest treatment.",
    "Right to adequate disclosure of services, fees, and risks.",
    "Right to a timely and effective grievance-redressal mechanism.",
    "Right to exit from the service as per agreed terms.",
    "Right to clear guidance on complex or high-risk products.",
    "Right to accessible services, including for differently-abled investors.",
    "Right to be free from coercive or one-sided contract clauses.",
  ],
  dos: [
    "Verify our SEBI registration (INA000004377) before engaging.",
    "Read all disclosures, terms, and the risk documents carefully.",
    "Make payments only through banking channels to our registered account.",
    "Ask questions until you fully understand the service and its risks.",
    "Be aware of your right to terminate the service as per terms.",
  ],
  donts: [
    "Do not hand over funds to us for trading or investment on your behalf.",
    "Do not ignore risk warnings or disclosures.",
    "Do not accept assured-return or profit-sharing promises from anyone.",
    "Do not share your Demat, bank, or login credentials with anyone.",
  ],
};

/* --------------------------------------------------------- Complaint status */

export type ComplaintRow = {
  period: string;
  pendingStart: number;
  received: number;
  resolved: number;
  pendingEnd: number;
};

export const complaintData: ComplaintRow[] = [
  { period: "Current month", pendingStart: 0, received: 0, resolved: 0, pendingEnd: 0 },
  { period: "Last 3 months", pendingStart: 0, received: 0, resolved: 0, pendingEnd: 0 },
  { period: "Financial year to date", pendingStart: 0, received: 0, resolved: 0, pendingEnd: 0 },
];

/* ----------------------------------------------------------------- Payment */

export const paymentDocs = [
  "Disclaimer",
  "Terms & Conditions",
  "Refund Policy",
  "Risk Disclosure",
];

/* ---------------------------------------------------------- Market overview */

export const marketSegments = [
  { name: "Equity — Cash", detail: "NSE cash-market stocks for intraday and delivery." },
  { name: "Equity — Futures", detail: "Stock futures across the F&O universe." },
  { name: "Index", detail: "Nifty 50 and Bank Nifty trend and levels." },
  { name: "Options", detail: "Index and stock options with a strategy-first lens." },
  { name: "Commodity (MCX)", detail: "Bullion, energy, and base metals." },
  { name: "Positional", detail: "BTST / STBT overnight and swing ideas." },
];

/* ------------------------------------------------------------- Methodology */

export const methodologySteps = [
  {
    title: "Fundamental Analysis",
    desc: "We study business quality, financials, sector trends, and valuations to understand the underlying strength of an idea.",
  },
  {
    title: "Technical Analysis",
    desc: "Price action, trend, momentum, and key levels help us time entries, targets, and stop-losses with discipline.",
  },
  {
    title: "News & Event Tracking",
    desc: "Corporate actions, policy, and global cues are monitored continuously, especially for commodities and index research.",
  },
  {
    title: "Risk Management",
    desc: "Every idea carries a defined stop-loss and risk parameters — capital protection comes before returns.",
  },
  {
    title: "Continuous Monitoring",
    desc: "Positions and markets are tracked through the session by our research desk, with timely updates to clients.",
  },
  {
    title: "Client-Fit & Review",
    desc: "Our business-development team reviews each client's capital and segment fit so guidance stays relevant.",
  },
];

/* ------------------------------------------------------- Legal / regulatory */

export const disclaimerContent: LegalContent = {
  title: "Disclaimer",
  description:
    "Please read this disclaimer carefully before using our research and advisory services.",
  sections: [
    {
      heading: "Market risk",
      paragraphs: [
        "Investment in securities market is subject to market risks. Read all the related documents carefully before investing. The Equal Research Investment Adviser does not provide any guarantee or assurance of returns on any investment.",
        "Past performance is not a guarantee of future performance. Any historical results referenced are for information only and should not be construed as a promise of similar outcomes.",
      ],
    },
    {
      heading: "Nature of our service",
      paragraphs: [
        "We provide research and investment advisory services as a SEBI Registered Investment Adviser (Reg. No. INA000004377). Our recommendations are based on fundamental and technical analysis and are shared for your consideration; the decision to act on any recommendation is entirely yours.",
        "We never take custody of client funds or securities and never trade on a client's behalf. All investments should be executed through your own broker and Demat account.",
      ],
    },
    {
      heading: "No liability",
      paragraphs: [
        "The Equal Research shall not be liable for any loss or damage arising directly or indirectly from the use of, or reliance on, the information and recommendations we provide. Clients are advised to consult their own financial position and risk tolerance before acting.",
      ],
    },
    {
      heading: "Beware of fraud",
      paragraphs: [
        "Payments are accepted only in the company's registered bank account. We never accept payments into personal accounts and never ask for your Demat or banking passwords. Please beware of fraudulent calls or messages claiming to represent us.",
      ],
    },
  ],
};

export const disclosureContent: LegalContent = {
  title: "Disclosure",
  description:
    "Disclosures made in the interest of transparency and investor protection.",
  sections: [
    {
      heading: "Registration",
      paragraphs: [
        "The Equal Research Investment Adviser is registered with the Securities and Exchange Board of India (SEBI) as an Investment Adviser under Registration No. INA000004377. Registration with SEBI and certification from NISM in no way guarantee the performance of the intermediary or provide any assurance of returns to investors.",
      ],
    },
    {
      heading: "Conflicts of interest",
      bullets: [
        "We do not offer any assured or guaranteed returns.",
        "We do not engage in profit-sharing arrangements with clients.",
        "We do not receive any consideration from product manufacturers or third parties for the advice we provide.",
        "Any material conflict of interest, if it arises, will be disclosed to affected clients.",
      ],
    },
    {
      heading: "Fees",
      paragraphs: [
        "Clients pay a fee solely for research and advisory services. These fees are not investment amounts and are not pooled for trading. Applicable fees and payment terms are disclosed before onboarding.",
      ],
    },
    {
      heading: "Independence of advice",
      paragraphs: [
        "Our research is prepared independently by our NISM-certified research team and is based on publicly available information and our own analysis. Recommendations are made in good faith and in the interest of the client.",
      ],
    },
  ],
};

export const kycContent: LegalContent = {
  title: "KYC Documents",
  description:
    "Know Your Customer requirements for onboarding as a client of The Equal Research.",
  sections: [
    {
      heading: "Why KYC is required",
      paragraphs: [
        "As a SEBI Registered Investment Adviser, we are required to complete Know Your Customer (KYC) verification for every fee-paying client before providing services. KYC helps us confirm your identity, assess suitability, and comply with regulatory obligations.",
      ],
    },
    {
      heading: "Documents you will need",
      bullets: [
        "PAN card (mandatory).",
        "Aadhaar card or other government-issued address proof.",
        "A recent passport-size photograph.",
        "Bank account details for fee payment (registered account only).",
        "A completed and signed client-onboarding / risk-profiling form.",
      ],
    },
    {
      heading: "Suitability & risk profiling",
      paragraphs: [
        "As part of onboarding, we assess your investment objectives, experience, and risk tolerance so that the segment and service you choose are appropriate for you. You can update this information whenever your circumstances change.",
      ],
    },
    {
      heading: "Data protection",
      paragraphs: [
        "All KYC information is kept confidential and used only for regulatory and service-related purposes. We never share your credentials or personal data with unauthorised third parties.",
      ],
    },
  ],
};

export const grievanceContent: LegalContent = {
  title: "Grievance Redressal Mechanism",
  description:
    "How to raise a concern and the process we follow to resolve it promptly and fairly.",
  sections: [
    {
      heading: "How to reach us",
      paragraphs: [
        `You can register a complaint by email at ${company.email}, by phone at ${company.landline} during working hours (${company.hours}), or by post to our office at ${company.address}.`,
        "We aim to acknowledge every complaint on receipt and provide a resolution within 21 working days from the date the complaint is received.",
      ],
    },
    {
      heading: "Escalation matrix",
      bullets: [
        `Customer Care — ${company.founder}, ${company.phone}`,
        `Head of Customer Care — ${company.founder}, ${company.phone}`,
        `Compliance Officer — ${company.founder}, ${company.phone}`,
        `Principal Officer — ${company.founder}, ${company.phone}`,
      ],
    },
    {
      heading: "If your complaint is not resolved",
      paragraphs: [
        "If you are not satisfied with our response, you may escalate to SEBI through the SCORES portal at https://scores.sebi.gov.in, or opt for online dispute resolution through the Smart ODR portal at https://smartodr.in.",
      ],
    },
  ],
};

export const refundContent: LegalContent = {
  title: "Termination & Refund Policy",
  description:
    "The terms governing cancellation, termination, and refunds for our advisory services.",
  sections: [
    {
      heading: "Refund window",
      paragraphs: [
        "Clients who are dissatisfied with our services may request a refund within seven (7) days of subscription. This policy reflects our confidence in the quality of our research and our commitment to helping you make an informed decision before you commit.",
      ],
    },
    {
      heading: "Before you subscribe",
      paragraphs: [
        "We encourage you to thoroughly evaluate the quality and nature of our services before making any payment, and to review our disclaimer, terms & conditions, risk disclosure, and FAQs. Fees are for research and advisory services and are not investment amounts.",
      ],
    },
    {
      heading: "Termination",
      bullets: [
        "You may terminate the service at any time as per the agreed terms.",
        "We may terminate the service in case of misuse, non-compliance, or breach of terms.",
        "On termination, access to research and updates will be discontinued.",
      ],
    },
    {
      heading: "How to request",
      paragraphs: [
        `To request a refund or terminate a service, contact us at ${company.email} or ${company.phone}. Approved refunds are processed to the original registered payment source.`,
      ],
    },
  ],
};
