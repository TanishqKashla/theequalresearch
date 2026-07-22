// Single source of truth for all site copy (from the 2026 Modernization Blueprint).
// Edit content here — components read from this file.

export const company = {
  name: "Equal Research",
  legalName: "The Equal Research Investment Adviser",
  established: "2016",
  founder: "Raju Satpute",
  sebiRia: "INA000004377",
  iso: "ISO 9001:2008 — GCS/QMS/714",
  email: "info@theequaleresearch.com",
  phone: "+91 77720 80777",
  landline: "0731-4069421",
  whatsapp: "917772080777",
  address:
    "295, PU4, Scheme No. 54, 2nd Floor, Behind Orbit Mall, Near Vijay Nagar Square, Indore, Madhya Pradesh 452010",
  hours: "Mon–Fri, 10:00 AM – 6:00 PM",
  bank: {
    name: "State Bank of India",
    accountName: "The Equal Research Investment Adviser",
    accountNumber: "40375417430",
    ifsc: "SBIN0030450",
    branch: "Scheme No. 54, A.B. Road, Indore, M.P. 452010",
  },
} as const;

// Navigation IA: high-value pages stay flat; research and SEBI-regulatory
// links collapse into two labeled dropdowns to keep the header uncluttered.
// (Home is intentionally omitted — the logo links back to the homepage.)
export const primaryNav = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Careers", href: "/careers" },
] as const;

export const navGroups = [
  {
    label: "Insights",
    items: [
      { label: "Blogs", href: "/blog" },
      { label: "Market Overview", href: "/market-overview" },
      { label: "Methodology", href: "/methodology" },
    ],
  },
  {
    label: "Compliance",
    items: [
      { label: "Investor Charter", href: "/investor-charter" },
      { label: "Complaint Status", href: "/complaint-status" },
      { label: "Disclaimer", href: "/disclaimer" },
      { label: "Disclosure", href: "/disclosure" },
      { label: "KYC Documents", href: "/kyc" },
      { label: "Grievance Redressal", href: "/grievance-redressal" },
      { label: "Termination & Refund Policy", href: "/refund-policy" },
    ],
  },
] as const;

// Transactional utility link — sits beside the CTA, not inside a dropdown.
export const paymentsLink = { label: "Payments", href: "/payment" } as const;

// Primary call-to-action button in the header (right-aligned, like the reference).
export const headerCta = { label: "Contact Us", href: "/contact" } as const;

// Compliance acknowledgement popups shown in sequence on the home page,
// on every visit. Each must be acknowledged via its button to proceed.
export const compliancePopups = [
  {
    id: "notice",
    icon: "⚠️",
    title: "Important Notice",
    body: [
      "Investments in the securities market are subject to market risks. Please read all related documents carefully before making any investment.",
      "We do not guarantee any kind of assured returns. When you invest in the securities market, your capital is at risk, and the value of your portfolio can fluctuate. You may end up with less than your investment / traded amount.",
      "The fees (service charge) you pay to the company are solely for our services and not for investment purposes. All investments should be made through your own Demat account and managed independently.",
      "We will never ask for your Demat ID or password, and we strongly advise you not to share this information with anyone, including our employees. If you choose to share this information, we cannot be held responsible for any consequences.",
      "Please do not deposit any funds (payment) into a person's personal accounts or accounts that are not listed on our official website.",
      "Never make payments for Demat account opening, handling, or any investment-related purposes unless specified on our website.",
      "We do not offer services that are not mentioned on our website.",
      "If you have any concerns or doubts regarding fraudulent activities, please refer to our terms and conditions or contact us directly.",
    ],
    cta: "I Agree",
  },
  {
    id: "disclaimer",
    title: "Important Disclaimer",
    body: [
      "Disclaimer: Investment in securities market are subject to market risks. Please read all related documents carefully before investing.",
      "SEBI registration does not guarantee returns or assure performance of the intermediary.",
      "Important Notice: We provide only research-based advisory services. We do not offer guaranteed profit services, profit sharing, portfolio management, or trading on behalf of clients.",
      "If any individual falsely claims to represent our company and offers such services, please report it to us immediately.",
      "User Consent: By using our services, you confirm that you are doing so voluntarily after understanding all terms, conditions, and associated risks.",
      "अस्वीकरण: प्रतिभूति बाजार में निवेश बाजार जोखिमों के अधीन है। कृपया निवेश करने से पहले सभी दस्तावेज ध्यानपूर्वक पढ़ें।",
      "सेबी पंजीकरण किसी भी प्रकार के रिटर्न की गारंटी नहीं देता है।",
      "महत्वपूर्ण सूचना: हम केवल सलाहकारी सेवाएं प्रदान करते हैं। हम किसी भी प्रकार की गारंटी प्रॉफिट, प्रॉफिट शेयरिंग या आपके behalf पर ट्रेडिंग सेवाएं प्रदान नहीं करते हैं।",
      "यदि कोई व्यक्ति हमारी कंपनी के नाम पर ऐसी सेवाएं देने का दावा करता है, तो तुरंत हमसे संपर्क करें।",
      "नोट: हमारी सेवाएं लेना पूर्णतः आपकी इच्छा पर आधारित है और आप हमारे नियम एवं शर्तों से सहमत हैं।",
    ],
    cta: "I Understand",
  },
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
  eyebrow: "About Our Company",
  title: "Smart Financial Guidance Backed by Technology",
  intro:
    "At Equal Research, we are committed to delivering intelligent, research-driven financial guidance powered by technology. As a modern advisory firm, we focus on helping individuals navigate the dynamic world of equity, derivatives, and commodity markets with confidence and clarity.",
  body: [
    "Our approach is built on a strong foundation of data analysis, market research, and disciplined trading methodologies. We aim to simplify complex market behavior into actionable insights, enabling our clients to make informed and timely decisions.",
    "By integrating technology with financial expertise, we strive to provide a seamless advisory experience that emphasizes transparency, consistency, and professionalism. Our goal is not just to guide trades, but to build understanding and long-term confidence in market participation.",
  ],
  mission:
    "To deliver accurate, research-backed market insights and practical trading guidance through a structured and disciplined approach, enabling clients to make confident and well-informed financial decisions.",
  vision:
    "To become a trusted and technology-driven financial advisory platform that empowers individuals with insightful knowledge and encourages responsible, informed participation in financial markets.",
  goals: [
    "To build long-term relationships based on trust, transparency, and ethical practices.",
    "To consistently deliver high-quality market insights and advisory support.",
    "To simplify financial markets for clients through clear and structured guidance.",
    "To continuously evolve our strategies and services in line with changing market conditions.",
    "To promote disciplined and responsible trading habits among our clients.",
  ],
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

// Current open positions shown on the Careers page.
export const careerOpenings = [
  {
    title: "HR Executive",
    description:
      "Manage recruitment, onboarding, employee relations, and HR compliance within the organization.",
  },
] as const;

export const footerDisclaimer =
  "Investment in securities market is subject to market risks. Read all the related documents carefully before investing. Registration granted by SEBI and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors.";
