export interface ChecklistItem {
  id: string;
  title: string;
  detail: string;
  phase: "setup" | "launch" | "grow";
}

export const checklist: ChecklistItem[] = [
  {
    id: "pick-model",
    title: "Choose a business model",
    detail:
      "Pick one primary path first: dropshipping, POD, Amazon FBA, or social commerce. Mixing too early slows you down.",
    phase: "setup",
  },
  {
    id: "niche",
    title: "Pick a niche & product angle",
    detail:
      "Narrow to a problem, audience, or aesthetic (e.g. desk organizers for remote workers). Avoid random viral junk.",
    phase: "setup",
  },
  {
    id: "legal",
    title: "Set up legal basics",
    detail:
      "Register a business entity if needed, open a separate bank account, and get a tax ID / sales tax plan for your region.",
    phase: "setup",
  },
  {
    id: "channel",
    title: "Open your first sales channel",
    detail:
      "Start with one: Shopify store, TikTok Shop, Etsy, eBay, or Amazon. Master one before multi-channel.",
    phase: "setup",
  },
  {
    id: "supplier",
    title: "Connect suppliers / fulfillment",
    detail:
      "For dropship: CJ / Zendrop / Spocket / DSers. For POD: Printful or Printify. For FBA: Alibaba + freight + Amazon inbound.",
    phase: "setup",
  },
  {
    id: "payments",
    title: "Enable payments & shipping rules",
    detail:
      "Connect Stripe/PayPal/Shopify Payments or marketplace payouts. Set clear shipping times you can actually meet.",
    phase: "setup",
  },
  {
    id: "listings",
    title: "Create 5–15 strong listings",
    detail:
      "Use real photos or mockups, benefit-led titles, honest shipping estimates, and clear return policies.",
    phase: "launch",
  },
  {
    id: "traffic",
    title: "Pick one traffic engine",
    detail:
      "Marketplaces = SEO + PPC inside the platform. Own store = TikTok/Meta/Google ads or organic content. Don't spray budget.",
    phase: "launch",
  },
  {
    id: "test-order",
    title: "Place a test order",
    detail:
      "Buy your own product once. Check packaging, tracking, quality, and delivery time before scaling ads.",
    phase: "launch",
  },
  {
    id: "metrics",
    title: "Track unit economics",
    detail:
      "Know: product cost, shipping, platform fees, ad spend, refunds, and net profit per order. Kill losers fast.",
    phase: "launch",
  },
  {
    id: "support",
    title: "Set customer support workflow",
    detail:
      "Use email/chat templates for delays, refunds, and replacements. Fast replies protect marketplace accounts.",
    phase: "grow",
  },
  {
    id: "brand",
    title: "Add branding & retention",
    detail:
      "Custom packaging inserts, email/SMS list, and a simple loyalty offer turn one-time buyers into repeat customers.",
    phase: "grow",
  },
  {
    id: "expand",
    title: "Expand channels after proof",
    detail:
      "Once one product is profitable for 2–4 weeks, add a second channel (e.g. Shopify → TikTok Shop, or Amazon → Walmart).",
    phase: "grow",
  },
  {
    id: "systems",
    title: "Automate ops",
    detail:
      "Use AutoDS/DSers, inventory alerts, and accounting tools so growth doesn't create chaos.",
    phase: "grow",
  },
];

export const starterStacks = [
  {
    id: "beginner-dropship",
    name: "Beginner Dropshipping",
    budget: "$100–$500 to start testing",
    path: ["Shopify", "CJDropshipping or DSers + AliExpress", "TikTok organic / small Meta ads"],
    why: "Lowest inventory risk. Learn ads and product testing before buying stock.",
  },
  {
    id: "creator-pod",
    name: "Creator Print-on-Demand",
    budget: "$0–$200",
    path: ["Etsy or TikTok Shop", "Printful / Printify", "Original designs + niche content"],
    why: "No inventory, strong fit for designers and niche communities.",
  },
  {
    id: "amazon-fba",
    name: "Amazon FBA Private Label",
    budget: "$2,000–$10,000+",
    path: ["Product research", "Alibaba supplier", "Amazon FBA + PPC"],
    why: "Highest built-in demand, but needs capital and careful compliance.",
  },
  {
    id: "hybrid-brand",
    name: "Hybrid Brand Builder",
    budget: "$500–$2,000",
    path: ["Shopify storefront", "US/EU suppliers (Spocket/Zendrop)", "TikTok Shop + email list"],
    why: "Own the customer while using social commerce for discovery.",
  },
];
