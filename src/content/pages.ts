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
    title: "Stock / Equity Cash",
    tagline: "Lifetime Beginner",
    summary:
      "Unlock powerful insights into your cash flow with our expert cash analysis service to make smarter, data-driven financial decisions",
    features: [],
  },
  {
    slug: "index-option",
    title: "Index Option",
    tagline: "Lifetime Beginner",
    summary:
      "Stay ahead of market trends with our Future Analysis service, designed to forecast potential movements and optimize your trading strategies.",
    features: [],
  },
  {
    slug: "stock-option",
    title: "Stock Option",
    tagline: "Lifetime Beginner",
    summary:
      "Master the complexities of stock options with expert analysis tailored to enhance your trading strategy and manage risk effectively.",
    features: [],
  },
  {
    slug: "btst-options",
    title: "BTST OPTIONS",
    tagline: "Lifetime Beginner",
    summary:
      "Gain an edge in trading index options with expert analysis that helps you decode market trends, hedge smartly, and boost returns.",
    features: [],
  },
  {
    slug: "stock-futures",
    title: "Stock Futures",
    tagline: "Lifetime Beginner",
    summary:
      "Strategically analyze long-term cash positions to build stronger portfolios with reduced risk and enhanced return potential.",
    features: [],
  },
  {
    slug: "commodity-mcx",
    title: "Commodity (MCX)",
    tagline: "Lifetime Beginner",
    summary:
      "Trade in gold, silver, crude oil, and other commodities on the MCX with expert insights and real-time updates.",
    features: [],
  },
  {
    slug: "financial-planning",
    title: "Financial Planning",
    tagline: "Planning Service",
    summary:
      "Expert financial planning services cover investments, retirement, taxes, and more. We create tailored plans to secure your financial future.",
    features: [],
  },
  {
    slug: "investment-advisory",
    title: "Investment Advisory",
    tagline: "Advisory Service",
    summary:
      "Investment advisory services drive financial goal achievement through expert planning and portfolio management.",
    features: [],
  },
  {
    slug: "estate-planning",
    title: "Estate Planning",
    tagline: "Wealth Transfer",
    summary:
      "Strategically manage assets and wealth transfer through comprehensive estate planning services.",
    features: [],
  },
  {
    slug: "tax-planning",
    title: "Tax Planning",
    tagline: "Tax Advisory",
    summary:
      "Optimize financial decisions to minimize tax liabilities with expert tax planning guidance.",
    features: [],
  },
];

/* ------------------------------------------------- Service detail pages */

export type ServiceSection = {
  heading: string;
  intro?: string;
  list?: string[];
  ordered?: boolean;
  outro?: string;
};

export type ServiceDetail = {
  slug: string;
  intro: string[];
  sections: ServiceSection[];
  sampleCall?: { buy: string; targets: string; stopLoss: string };
  note?: string;
};

const tradingRulesHeading = "Trading Rules Every Trader Must Follow";

export const serviceDetails: Record<string, ServiceDetail> = {
  "equity-cash": {
    slug: "equity-cash",
    intro: [
      "We provide research-based recommendations in the Cash Segment through our team of experienced Research Analysts.",
      "Our recommendations are generated after in-depth technical analysis and market trend assessment, with a focus on identifying potential intraday trading opportunities in the Cash Market.",
      "Considering the volatility of the securities market, this service is designed specifically for intraday trading opportunities, and clients are advised to evaluate risks before taking any position.",
      "Recommendations are shared in stocks listed and traded on the National Stock Exchange (NSE) and are intended to assist clients in making informed trading decisions.",
    ],
    sections: [
      {
        heading: "Service Highlights",
        list: [
          "1 to 2 intraday research recommendations daily (subject to prevailing market conditions)",
          "Clearly defined entry price, stop loss, and target levels",
          "Timely trade updates and follow-ups",
          "Research-driven market direction analysis",
          "Recommendations based on technical and market analysis",
          "Intraday-focused trade opportunities in NSE cash stocks",
        ],
      },
      {
        heading: "Trading Guidelines",
        ordered: true,
        list: [
          "Avoid overtrading",
          "Use disciplined position sizing",
          "Always trade with a predefined stop loss",
          "Avoid emotional decision-making",
          "Be cautious in volatile market conditions",
          "Protect trading capital through risk management",
          "Avoid excessive leverage",
          "Book profits and losses as per your trading plan",
          "Consider transaction costs while trading",
          "Capital preservation should remain the first priority",
        ],
      },
    ],
    sampleCall: {
      buy: "BUY LUXIND CASH ABOVE ₹1220",
      targets: "₹1240 | ₹1260 | ₹1285",
      stopLoss: "₹1200",
    },
  },

  "index-option": {
    slug: "index-option",
    intro: [
      "We provide research-based recommendations in the Index Options Segment, supported by in-depth market analysis from our experienced Research Analyst team.",
      "Our research focuses on major index derivatives such as NIFTY, BANKNIFTY, SENSEX and FINNIFTY, with an emphasis on identifying potential intraday opportunities in call and put options based on market direction, volatility, price action, and technical indicators.",
      "Considering the high volatility in the derivatives market, this service is designed primarily for intraday trading opportunities, and clients are advised to evaluate risk before taking any position.",
      "All recommendations are shared with clearly defined entry level, target range, and stop loss parameters to support disciplined trading decisions.",
    ],
    sections: [
      {
        heading: "What You Will Get",
        list: [
          "1 to 2 Index Option recommendations daily (subject to market conditions)",
          "Research calls in NIFTY / BANKNIFTY / FINNIFTY options",
          "Clearly defined entry, stop loss, and target levels",
          "Intraday trade follow-ups and exit updates",
          "Market direction and volatility analysis",
          "Technical indicator-based trade setups",
          "Support and resistance-based option strategy guidance",
        ],
      },
      {
        heading: "Our Research Approach",
        intro: "Our recommendations are based on:",
        list: [
          "price action analysis",
          "support and resistance levels",
          "option chain observation",
          "open interest trends",
          "volatility and momentum indicators",
          "intraday market sentiment",
        ],
        outro:
          "This service is intended to help traders follow a structured and disciplined derivatives trading approach. Index options are widely used in Indian markets for intraday strategies and volatility-based setups.",
      },
      {
        heading: tradingRulesHeading,
        ordered: true,
        list: [
          "Trade only with predefined risk.",
          "Always use stop loss.",
          "Avoid overleveraging in volatile markets.",
          "Do not hold positions emotionally.",
          "Maintain disciplined lot sizing.",
          "Follow entry and exit levels strictly.",
          "Avoid overnight exposure unless separately planned.",
          "Protect trading capital first.",
          "Consider brokerage and transaction costs.",
          "Not taking a trade is also a valid strategy.",
        ],
      },
    ],
    sampleCall: {
      buy: "BUY NIFTY 22500 CE ABOVE ₹250",
      targets: "₹280 | ₹310 | ₹350",
      stopLoss: "₹220",
    },
  },

  "stock-option": {
    slug: "stock-option",
    intro: [
      "We provide research-based recommendations in the Stock Options Segment through a team of experienced Research Analysts.",
      "Our research focuses on stock-specific options contracts traded on NSE, where recommendations are generated after in-depth technical analysis, price action study, open interest review, and market trend assessment.",
      "This service is designed for traders looking to participate in intraday opportunities in stock call and put options, with clearly defined entry, target, and stop loss levels.",
      "Considering the volatility of the derivatives segment, clients are advised to follow disciplined risk management and evaluate their suitability before trading.",
    ],
    sections: [
      {
        heading: "What You Will Get",
        list: [
          "1 to 2 stock option recommendations daily (subject to market conditions)",
          "Research calls in selected stock options",
          "Clearly defined entry price, target levels, and stop loss",
          "Timely trade follow-ups and exit updates",
          "Technical analysis-based trade setups",
          "Volatility and momentum-based stock option opportunities",
          "Intraday focused recommendations",
        ],
      },
      {
        heading: "Research Methodology",
        intro: "Our recommendations are prepared using:",
        list: [
          "price action analysis",
          "support and resistance zones",
          "option chain analysis",
          "open interest movement",
          "volume breakout confirmation",
          "market momentum indicators",
          "stock-specific news and trend assessment",
        ],
      },
      {
        heading: tradingRulesHeading,
        ordered: true,
        list: [
          "Always trade with predefined risk.",
          "Use stop loss in every position.",
          "Avoid overleveraging.",
          "Never trade emotionally.",
          "Follow disciplined position sizing.",
          "Protect capital first.",
          "Consider transaction costs and slippage.",
          "Do not hold positions without a plan.",
          "Exit trades as per levels provided.",
          "Not taking a trade is also a valid strategy.",
        ],
      },
    ],
    sampleCall: {
      buy: "BUY RELIANCE 3000 CE ABOVE ₹132",
      targets: "₹142 | ₹152 | ₹165",
      stopLoss: "₹122",
    },
  },

  "btst-options": {
    slug: "btst-options",
    intro: [
      "BTST (Buy Today, Sell Tomorrow) in stock options represents a short-term strategy where positions are initiated in selected stock option contracts during the current trading session and may be carried forward to the next trading day based on market setup and momentum.",
      "The research focuses on identifying stock-specific breakout, momentum continuation, and overnight carry opportunities in NSE stock option contracts through in-depth technical and market analysis.",
      "Since BTST positions involve overnight risk, gap movement risk, and option premium decay, this service is intended for traders who understand short-term derivatives trading and follow disciplined risk management.",
    ],
    sections: [
      {
        heading: "What You Will Get",
        list: [
          "1 BTST stock option setup daily (subject to market conditions)",
          "Research calls in selected NSE stock options",
          "Clearly defined entry, target, and stop loss levels",
          "End-of-day trade setup before market close",
          "Next-day exit guidance and timely follow-ups",
          "Stock-specific momentum and breakout analysis",
          "Risk-managed overnight carry strategy",
        ],
      },
      {
        heading: "Our Research Approach",
        intro: "Setups are based on:",
        list: [
          "Stock-specific price action",
          "Volume breakout confirmation",
          "Support and resistance zones",
          "Open interest and option chain trends",
          "Overnight market sentiment",
          "Stock news and sector momentum",
          "Gap-up / gap-down probability assessment",
        ],
        outro:
          "This structured research approach is designed to help traders identify short-duration overnight opportunities in stock options.",
      },
      {
        heading: tradingRulesHeading,
        ordered: true,
        list: [
          "Carry positions only with predefined risk.",
          "Always use stop loss.",
          "Avoid overleveraging in overnight trades.",
          "Be cautious of gap-up and gap-down openings.",
          "Consider option premium time decay.",
          "Protect capital first.",
          "Maintain disciplined lot sizing.",
          "Exit positions as per next-day research updates.",
          "Consider brokerage and transaction costs.",
          "Avoid emotional carry-forward decisions.",
        ],
      },
    ],
    note: "Retail discussions often highlight that BTST in options can be highly risky, especially around volatile sessions or weekends due to time decay and overnight gaps.",
  },

  "stock-futures": {
    slug: "stock-futures",
    intro: [
      "We offer research-based recommendations in stock futures through experienced analysts, focusing on NSE-traded contracts using technical analysis, market trends, volume studies, and open interest movement.",
    ],
    sections: [
      {
        heading: "What You Will Get",
        list: [
          "1 to 2 stock futures research calls daily (subject to market conditions)",
          "Research calls in selected NSE stock futures",
          "Clearly defined entry, target, and stop loss levels",
          "Timely trade follow-ups and exit guidance",
          "Stock-specific momentum and trend analysis",
          "Technical and open interest-based setups",
          "Intraday and short-term trade opportunities",
        ],
      },
      {
        heading: "Our Research Approach",
        list: [
          "Price action analysis",
          "Support and resistance levels",
          "Open interest trends",
          "Volume breakout confirmation",
          "Market sentiment analysis",
          "Sector strength and momentum",
          "Intraday trend continuation setups",
        ],
      },
      {
        heading: tradingRulesHeading,
        ordered: true,
        list: [
          "Always trade with predefined risk.",
          "Use stop loss in every futures position.",
          "Avoid overleveraging.",
          "Maintain disciplined lot sizing.",
          "Protect trading capital first.",
          "Do not trade emotionally.",
          "Consider brokerage and carrying costs.",
          "Follow exit levels strictly.",
          "Avoid holding positions without a plan.",
          "Not taking a trade is also a valid strategy.",
        ],
      },
    ],
    sampleCall: {
      buy: "BUY HDFCBANK FUT ABOVE ₹750",
      targets: "₹770 | ₹800 | ₹830",
      stopLoss: "₹730",
    },
  },

  "commodity-mcx": {
    slug: "commodity-mcx",
    intro: [
      "We provide research-based recommendations in the Commodity Segment (MCX) through our Research Analyst team.",
      "Our research covers commodity contracts on the Multi Commodity Exchange of India, including Bullion, Base Metals, and Energy Commodities such as Gold, Silver, Crude Oil, Natural Gas, Copper, Zinc, and others.",
      "The service targets traders seeking intraday and short-term opportunities in commodity futures and options through technical analysis, market momentum, global cues, and price action.",
    ],
    sections: [
      {
        heading: "What You Will Get",
        list: [
          "1 to 2 commodity research calls daily (subject to market conditions)",
          "Research calls in MCX bullion, metals, and energy contracts",
          "Clearly defined entry, target, and stop loss levels",
          "Timely trade follow-ups and exit guidance",
          "Intraday and short-term trade setups",
          "Global trend and volatility-based analysis",
          "Research-driven market direction assessment",
        ],
      },
      {
        heading: "Research Coverage",
        intro:
          "Gold, Silver, Crude Oil, Natural Gas, Copper, Zinc, Aluminium, Nickel",
      },
      {
        heading: "Research Methodology",
        intro: "Our methods include:",
        list: [
          "price action analysis",
          "support and resistance zones",
          "global commodity price movement",
          "US Dollar and crude correlation",
          "international market cues",
          "volume and momentum indicators",
          "volatility and breakout setups",
        ],
      },
      {
        heading: tradingRulesHeading,
        ordered: true,
        list: [
          "Always trade with predefined risk.",
          "Use stop loss in every trade.",
          "Avoid overleveraging in volatile commodities.",
          "Protect capital first.",
          "Follow disciplined lot sizing.",
          "Consider overnight and global risk factors.",
          "Do not trade emotionally.",
          "Follow exit levels strictly.",
          "Consider brokerage and transaction costs.",
          "Not taking a trade is also a strategy.",
        ],
      },
    ],
    sampleCall: {
      buy: "BUY CRUDE OIL ABOVE ₹6520",
      targets: "₹6580 | ₹6640 | ₹6700",
      stopLoss: "₹6460",
    },
  },

  "financial-planning": {
    slug: "financial-planning",
    intro: [
      "Our financial planning services cover investments, retirement, taxes, and more. We create tailored plans designed to secure your financial future.",
      "We follow a structured, step-by-step process — understanding your goals, identifying areas of improvement, analysing your current position, and reviewing, monitoring, and updating the plan as your circumstances evolve.",
    ],
    sections: [
      {
        heading: "Our Financial Planning Process",
        ordered: true,
        list: [
          "Understand — Understand Financial Goal, Risk Appetite and Return expectations",
          "Identify — Identify areas of improvement",
          "Analyze — Analyze the current course of action",
          "Recommend & Review — Provide recommendation based on the analysis",
          "Monitor — Monitor progress and update portfolio",
          "Update & Reanalyze — Periodically update and reanalyze the plan",
        ],
      },
    ],
  },

  "investment-advisory": {
    slug: "investment-advisory",
    intro: [
      "Our investment advisory services are designed to help you achieve your financial goals through expert planning and disciplined portfolio management across a range of investment avenues.",
    ],
    sections: [
      {
        heading: "Mutual Fund",
        intro:
          "Our team assists clients in making informed investments in Direct Mutual Funds, aligning with their Risk Appetite, Financial Goals and Time Horizon. We meticulously consider Asset Allocation to optimize returns over the investment horizon.",
      },
      {
        heading: "Stock Portfolio",
        intro:
          "We provide expert guidance on Stock Market investments, offering insights and strategies to help clients navigate the complexities of the stock market and make well-informed decisions.",
      },
      {
        heading: "Portfolio Management System",
        intro:
          "A portfolio management system is a tool or software that helps investors track and optimize their investments, aiming to achieve their financial goals by managing risk and maximizing returns.",
      },
      {
        heading: "Alternate Assets",
        intro:
          "Alternative assets are non-traditional investments like real estate, private equity, or hedge funds, offering diversification beyond stocks and bonds in a portfolio.",
      },
    ],
  },

  "estate-planning": {
    slug: "estate-planning",
    intro: [
      "We help you strategically manage your assets and plan for wealth transfer through comprehensive estate planning.",
    ],
    sections: [
      {
        heading: "Will Planning",
        intro:
          "We help you draft a legally sound will and assist in making crucial nominations, ensuring your assets are distributed according to your wishes.",
      },
    ],
  },

  "tax-planning": {
    slug: "tax-planning",
    intro: [
      "We help you optimise financial decisions to minimise tax liabilities, with tailored guidance for both individuals and businesses.",
    ],
    sections: [
      {
        heading: "Individual Tax Planning",
        intro:
          "Minimize tax liabilities for individuals. Optimize deductions, credits, and exemptions under sections 80C, 80CCC, 80CCD, 80D & 80E, and ensure compliance with tax regulations. Key sections for individuals include:",
        list: [
          "Income Tax",
          "Capital Gains Tax",
          "Estate Tax",
          "Deductions",
          "Credits",
        ],
      },
      {
        heading: "Corporate Tax Planning",
        intro:
          "Optimize tax strategies for businesses. Minimize corporate tax liabilities through effective deductions and credits, with guidance on Transfer Pricing, International Taxation, and Compliance.",
      },
    ],
  },
};

/* ----------------------------------------------------------------- Pricing */

export type PricingTier = { label: string; price: string; period: string };

export type PricingPlan = {
  segment: string;
  tiers: PricingTier[];
};

export const pricingPlans: PricingPlan[] = [
  {
    segment: "Stock / Equity Cash",
    tiers: [
      { label: "Basic", price: "₹8,000", period: "month" },
      { label: "Standard", price: "₹18,000", period: "quarter" },
      { label: "Premium", price: "₹27,500", period: "quarter" },
    ],
  },
  {
    segment: "Index Option",
    tiers: [
      { label: "Basic", price: "₹11,500", period: "month" },
      { label: "Standard", price: "₹23,500", period: "quarter" },
      { label: "Premium", price: "₹41,500", period: "quarter" },
    ],
  },
  {
    segment: "Stock Option",
    tiers: [
      { label: "Basic", price: "₹13,500", period: "month" },
      { label: "Standard", price: "₹31,000", period: "quarter" },
      { label: "Premium", price: "₹47,500", period: "quarter" },
    ],
  },
  {
    segment: "BTST OPTIONS",
    tiers: [
      { label: "Basic", price: "₹14,000", period: "month" },
      { label: "Standard", price: "₹36,000", period: "quarter" },
    ],
  },
  {
    segment: "Stock Futures",
    tiers: [
      { label: "Basic", price: "₹10,500", period: "month" },
      { label: "Standard", price: "₹31,500", period: "quarter" },
      { label: "Premium", price: "₹50,500", period: "quarter" },
    ],
  },
  {
    segment: "Commodity (MCX)",
    tiers: [
      { label: "Basic", price: "₹16,500", period: "month" },
      { label: "Premium", price: "₹43,500", period: "quarter" },
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

export type ComplaintTable = {
  title: string;
  columns: string[];
  rows: (string | number)[][];
  grandTotal: (string | number)[];
  notes?: string[];
};

export const complaintMonthEnding = "APR-2026";

export const complaintTables: ComplaintTable[] = [
  {
    title: `Data for the month ending - ${complaintMonthEnding}`,
    columns: [
      "Sr. No.",
      "Received from",
      "Pending at end of last month",
      "Received",
      "Resolved*",
      "Total Pending#",
      "Pending complaints > 3 months",
      "Average Resolution time^ (in days)",
    ],
    rows: [
      [1, "Directly from Investors", 0, 0, 0, 0, 0, 0],
      [2, "SEBI (SCORES)", 0, 0, 0, 0, 0, 0],
      [3, "Other Sources (if any)", 0, 1, 1, 0, 0, 0],
    ],
    grandTotal: ["", "Grand Total", 0, 1, 1, 0, 0, 0],
    notes: [
      "^ Average Resolution time is the sum total of time taken to resolve each complaint in days, in the current month divided by total number of complaints resolved in the current month.",
    ],
  },
  {
    title: "Trend of monthly disposal of complaints",
    columns: [
      "Sr. No.",
      "Month",
      "Carried forward from previous month",
      "Received",
      "Resolved*",
      "Pending#",
    ],
    rows: [
      [4, "April, 2026", 0, 0, 0, 0],
      [5, "May, 2026", 0, 0, 0, 0],
      [6, "June, 2025", 0, 1, 1, 0],
      [7, "July, 2025", 0, 0, 0, 0],
      [8, "August, 2025", 0, 0, 0, 0],
      [9, "September, 2025", 0, 0, 0, 0],
      [10, "October, 2025", 0, 0, 0, 0],
      [11, "November, 2025", 0, 0, 0, 0],
      [12, "December, 2025", 0, 0, 0, 0],
      [1, "January, 2026", 0, 0, 0, 0],
      [2, "February, 2026", 0, 0, 0, 0],
      [3, "March, 2026", 0, 0, 0, 0],
    ],
    grandTotal: ["", "Grand Total", 0, 1, 1, 0],
    notes: [
      "* Inclusive of complaints of previous months resolved in the current month.",
      "# Inclusive of complaints pending as on the last day of the month.",
    ],
  },
  {
    title: "Trend of annual disposal of complaints",
    columns: [
      "Sr. No.",
      "Year",
      "Carried forward from previous year",
      "Received",
      "Resolved**",
      "Pending##",
    ],
    rows: [
      [1, "2024-2025", 0, 0, 0, 0],
      [2, "2025-2026", 0, 1, 1, 0],
      [3, "2026-2027", 0, 0, 0, 0],
    ],
    grandTotal: ["", "Grand Total", 0, 1, 1, 0],
    notes: [
      "** Inclusive of complaints of previous years resolved in the current year.",
      "## Inclusive of complaints pending as on the last day of the year.",
    ],
  },
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
