// Single source of truth for all site copy (from the 2026 Modernization Blueprint).
// Edit content here — components read from this file.

export const company = {
  name: "Equal Research",
  legalName: "Equal Research Investment Advisory",
  established: "2016",
  sebiRia: "INA000004377",
  iso: "ISO 9001:2008 — GCS/QMS/714",
  email: "teamenableuser@gmail.com",
  phone: "+91 00000 00000",
  whatsapp: "910000000000",
} as const;

export const nav = [
  { label: "Home", href: "/#top" },
  { label: "Services", href: "/#services" },
  { label: "Insights", href: "/#insights" },
  { label: "Careers", href: "/#careers" },
  { label: "Contact", href: "/#contact" },
] as const;

export const moreLinks = [
  { label: "Investor Grievance", href: "#" },
  { label: "Regulatory Information", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
  { label: "Disclaimer", href: "#" },
  { label: "Risk Disclosure", href: "#" },
  { label: "Investor Charter", href: "#" },
  { label: "SEBI Registration Details", href: "#" },
  { label: "Complaint Status", href: "#" },
] as const;

export const hero = {
  badge: "SEBI Registered Investment Adviser",
  headline: "Research-Driven Market Intelligence for Better Investment Decisions",
  subheadline:
    "At Equal Research, we combine analytical rigor, market expertise, and continuous research to help investors understand opportunities, assess risks, and stay informed in a constantly evolving financial landscape.",
  primaryCta: { label: "Explore Research", href: "/#services" },
  secondaryCta: { label: "Get In Touch", href: "/#contact" },
} as const;

export const trustStrip = [
  "Data-Driven Research",
  "Market Intelligence",
  "Investor Education",
  "Ethical Approach",
  "Continuous Monitoring",
  "Research-Focused Insights",
] as const;

export const about = {
  eyebrow: "About Equal Research",
  title: "Understanding Markets. Building Futures.",
  intro:
    "Established in 2016, Equal Research Investment Advisory is a SEBI Registered Investment Adviser dedicated to helping investors make informed financial decisions through research, market intelligence, and investor education.",
  body: [
    "We believe successful investing begins with understanding. Financial markets are influenced by businesses, industries, economic cycles, government policies, technological innovation, and investor behaviour. Navigating this complexity requires more than information—it requires disciplined research, structured analysis, and continuous learning.",
    "Our approach combines fundamental analysis, technical analysis, sector intelligence, and market research to provide deeper insights into investment opportunities and emerging market trends. Rather than focusing solely on short-term movements, we emphasize understanding businesses, evaluating risks, and supporting sustainable wealth creation.",
  ],
  mission:
    "To make high-quality financial thinking accessible by delivering research-driven insights, market intelligence, and educational resources that help individuals make more informed financial decisions.",
  vision:
    "To become a trusted financial intelligence platform recognized for analytical excellence, investor education, and meaningful market insights.",
  commitment:
    "Investing Today for Tomorrow's Milestones — a successful long-term investment journey requires clarity of purpose, disciplined decision-making, continuous learning, and focus despite changing market conditions.",
  credentials: [
    { label: "SEBI Registered Investment Adviser (RIA)", value: company.sebiRia },
    { label: "ISO 9001:2008 Certified Organization", value: "GCS/QMS/714" },
    {
      label: "Ethical & Compliant",
      value: "Transparency, investor protection & responsible practice",
    },
  ],
} as const;

export type Service = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  areas: string[];
};

export const services: Service[] = [
  {
    slug: "investment-advisory",
    title: "Investment Advisory",
    tagline: "Strategic Guidance for Meaningful Wealth Creation",
    summary:
      "Helping investors align their investments with their financial goals, risk appetite, and long-term aspirations through disciplined decision-making and strategic planning.",
    areas: [
      "Goal-Based Investing",
      "Portfolio Review & Optimization",
      "Asset Allocation Strategies",
      "Wealth Creation Planning",
      "Financial Independence Planning",
    ],
  },
  {
    slug: "equity-research",
    title: "Equity Research & Market Intelligence",
    tagline: "Turning Market Information into Actionable Understanding",
    summary:
      "Transforming complex market data into meaningful insights through structured research—helping investors understand businesses, sectors, economic trends, and emerging opportunities.",
    areas: [
      "Equity Research",
      "Company Analysis",
      "Sector Intelligence",
      "Market Outlook Reports",
      "Economic & Policy Insights",
      "Thematic Research",
    ],
  },
  {
    slug: "retirement-wealth-planning",
    title: "Retirement & Wealth Planning",
    tagline: "Building Financial Security For Every Stage of Life",
    summary:
      "Strategies that balance wealth creation, capital preservation, and income generation while preparing for life's evolving financial requirements.",
    areas: [
      "Retirement Corpus Planning",
      "Financial Independence (FIRE)",
      "Passive Income Strategies",
      "Inflation Protection",
      "Wealth Preservation",
      "Long-Term Capital Growth",
    ],
  },
  {
    slug: "tax-estate-planning",
    title: "Tax & Estate Planning",
    tagline: "Preserving Wealth Today. Protecting Legacies Tomorrow.",
    summary:
      "Solutions focused on preserving wealth, improving tax efficiency, and ensuring smooth wealth transfer across generations.",
    areas: [
      "Tax-Efficient Investing",
      "Capital Gains Planning",
      "Estate Planning",
      "Succession Planning",
      "Wealth Transfer Strategies",
      "Legacy Creation",
    ],
  },
  {
    slug: "family-wealth-solutions",
    title: "Family Wealth Solutions",
    tagline: "Planning For Life's Most Important Milestones",
    summary:
      "Structured financial plans that support future aspirations while building long-term financial resilience for families.",
    areas: [
      "Child Education Planning",
      "Child Marriage Planning",
      "Family Financial Security",
      "Emergency Corpus Planning",
      "Wealth Preservation",
      "Multi-Generational Wealth Building",
    ],
  },
  {
    slug: "future-wealth-themes",
    title: "Future Wealth Themes",
    tagline: "Identifying Opportunities Shaping Tomorrow's Economy",
    summary:
      "Research-driven thematic investing focused on long-term structural trends shaping industries, economies, and opportunities over the next decade.",
    areas: [
      "Artificial Intelligence",
      "Defence & Aerospace",
      "Renewable Energy",
      "Manufacturing",
      "Digital Infrastructure",
      "Emerging Economic Trends",
    ],
  },
  {
    slug: "investor-learning-hub",
    title: "Investor Learning Hub",
    tagline: "Empowering Investors Through Knowledge and Understanding",
    summary:
      "A dedicated knowledge centre helping individuals strengthen financial literacy, improve analytical thinking, and understand market dynamics.",
    areas: [
      "Financial Literacy",
      "Investment Fundamentals",
      "Risk Management",
      "Market Concepts",
      "Research Methodologies",
      "Investor Awareness Programs",
    ],
  },
];

export const whyUs = [
  {
    title: "Research-Centric Approach",
    desc: "We prioritize analysis over assumptions.",
  },
  {
    title: "Continuous Market Monitoring",
    desc: "Markets evolve daily; so does our research.",
  },
  {
    title: "Structured Methodology",
    desc: "Every insight follows a disciplined framework.",
  },
  {
    title: "Investor Education Focus",
    desc: "Helping investors understand, not just act.",
  },
  {
    title: "Ethical Standards",
    desc: "Transparency and responsible communication remain central to our work.",
  },
] as const;

export const goals = [
  {
    title: "Retirement & Financial Independence",
    desc: "A sustainable corpus that supports long-term lifestyle goals after active income years.",
  },
  {
    title: "Wealth Creation & Capital Appreciation",
    desc: "Building wealth systematically through long-term participation across sectors and markets.",
  },
  {
    title: "Child Education Planning",
    desc: "Preparing financially for higher education through structured long-term planning.",
  },
  {
    title: "Child Marriage Planning",
    desc: "Dedicated financial resources to support important family milestones.",
  },
  {
    title: "Dream Home Planning",
    desc: "Accumulating capital for residential property acquisition and asset creation.",
  },
  {
    title: "Wealth Preservation & Inflation Protection",
    desc: "Protecting purchasing power and capital against inflation and uncertainty.",
  },
  {
    title: "Passive Income Generation",
    desc: "Portfolios that may contribute to future income and financial flexibility.",
  },
  {
    title: "Early Retirement (FIRE)",
    desc: "Supporting Financial Independence and Early Retirement through disciplined accumulation.",
  },
  {
    title: "Legacy & Estate Planning",
    desc: "Long-term wealth structures that support future generations and family objectives.",
  },
] as const;

export const insightCategories = [
  "Market Outlook",
  "Sector Reports",
  "Research Notes",
  "Economic Updates",
  "Investor Awareness",
  "Learning Hub",
  "Financial Concepts",
  "Case Studies",
] as const;

export const insightsPreview = [
  {
    category: "Market Outlook",
    title: "Reading the Cycle: What Current Conditions Signal for Long-Term Investors",
    blurb:
      "A structured look at sentiment indicators, valuations, and the themes shaping the months ahead.",
  },
  {
    category: "Sector Reports",
    title: "Defence & Aerospace: Tracking a Decade of Structural Growth",
    blurb:
      "How indigenous manufacturing and modernization are reshaping the sector's opportunity set.",
  },
  {
    category: "Investor Awareness",
    title: "Beyond the Noise: A Framework for Disciplined Decision-Making",
    blurb:
      "Separating short-term market noise from long-term value drivers with a research-first lens.",
  },
] as const;

export const careers = {
  eyebrow: "Careers",
  title: "Build Your Career In Financial Research",
  lead: "Great research begins with curious minds.",
  body: "At Equal Research, we welcome students, graduates, and professionals who are passionate about financial markets, analytical thinking, and continuous learning. Our environment encourages intellectual curiosity, structured thinking, and hands-on exposure to research processes.",
  internships: [
    "Equity Research",
    "Financial Analysis",
    "Sector Studies",
    "Market Intelligence",
    "Report Writing",
    "Data Interpretation",
  ],
  fields: [
    "Finance",
    "Research",
    "Capital Markets",
    "Investment Analysis",
    "Business Strategy",
    "Economics",
  ],
} as const;

export const footerDisclaimer =
  "Investment in securities market is subject to market risks. Read all the related documents carefully before investing. Registration granted by SEBI and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors.";
