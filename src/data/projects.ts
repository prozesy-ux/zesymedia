export type ProjectMetric = {
  label: string;
  value: string;
  note?: string;
};

export type ProjectAdReport = {
  period: string;
  goals: string;
  monthlyBudget: string;
  metaAdsSpend: string;
  googleAdsSpend: string;
  totalAdSpend: string;
  failedAdsSummary: string;
  retargetingShare: string;
  cpaBefore: string;
  cpaAfter: string;
  roasBefore: string;
  roasAfter: string;
  salesBefore: string;
  salesAfter: string;
  seoGrowth: string;
  topCreativeWinner: string;
  topAudienceWinner: string;
};

export type Project = {
  id: string;
  slug: string;
  category: string;
  title: string;
  description: string;
  stat1Label: string;
  stat1Value: string;
  stat2Label: string;
  stat2Value: string;
  testimonialBgColor: string;
  testimonialImageUrl: string;
  testimonialImageAlt: string;
  testimonialName: string;
  testimonialTitle: string;
  testimonialQuote: string;
  projectImageUrl: string;
  projectImageAlt: string;
  problemImageUrl?: string;
  solutionImageUrl?: string;
  workflowImageUrl?: string;
  resultImageUrl?: string;
  styleGuideImages?: string[];
  arrowIconUrl: string;
  linkClassName: string;
  fullDescription: string;
  challenge: string;
  solution: string;
  solutionBullets?: string[];
  workflowScenario?: string;
  results: string;
  reportMetrics?: ProjectMetric[];
  adReport: ProjectAdReport;
};

export const projects: Project[] = [
  {
    id: "triply",
    slug: "e-shop-easy-shopping",
    category: "Meta + Google Ads",
    title: "E-Shop Ads Growth System",
    description:
      "Full-funnel Meta and Google Ads for an eCommerce brand, with landing-page CRO, retargeting, and SEO support to scale profitable sales.",
    stat1Label: "Meta ROAS",
    stat1Value: "4.8x",
    stat2Label: "Google CPA",
    stat2Value: "$11.90",
    testimonialBgColor: "bg-indigo-300",
    testimonialImageUrl:
      "https://indiawhispers.com/wp-content/uploads/2025/01/Nalco-CMD-Brijendra-Pratap-Singh-.jpeg",
    testimonialImageAlt: "Client portrait",
    testimonialName: "Bijendra Pratap Singh",
    testimonialTitle: "CEO, E-Shop Mart",
    testimonialQuote:
      "Our old ads were spending money without stable sales. The new Meta + Google structure gave us clear winners, lower CPA, and predictable weekly growth.",
    projectImageUrl:
      "https://wcvjpentbtxtnlrdthdk.supabase.co/storage/v1/object/public/images/5f337e11-6346-48b4-8f2b-d5c417e57077/Untitled%20design%20(55).png",
    projectImageAlt: "E-Shop ads dashboard",
    problemImageUrl:
      "https://wcvjpentbtxtnlrdthdk.supabase.co/storage/v1/object/public/images/5f337e11-6346-48b4-8f2b-d5c417e57077/Untitled%20design%20(55).png",
    solutionImageUrl:
      "https://wcvjpentbtxtnlrdthdk.supabase.co/storage/v1/object/public/images/5f337e11-6346-48b4-8f2b-d5c417e57077/Untitled%20design%20(55).png",
    workflowImageUrl:
      "https://wcvjpentbtxtnlrdthdk.supabase.co/storage/v1/object/public/images/5f337e11-6346-48b4-8f2b-d5c417e57077/Untitled%20design%20(55).png",
    resultImageUrl:
      "https://wcvjpentbtxtnlrdthdk.supabase.co/storage/v1/object/public/images/5f337e11-6346-48b4-8f2b-d5c417e57077/Untitled%20design%20(55).png",
    styleGuideImages: [
      "https://wcvjpentbtxtnlrdthdk.supabase.co/storage/v1/object/public/images/5f337e11-6346-48b4-8f2b-d5c417e57077/Untitled%20design%20(55).png",
      "https://anpeyqpnsavhykstwwbq.supabase.co/storage/v1/object/public/images/ff/1770490032237-4.png",
      "https://anpeyqpnsavhykstwwbq.supabase.co/storage/v1/object/public/images/ff/1770490031278-3.png",
    ],
    arrowIconUrl:
      "https://c.animaapp.com/mkiynesyxwO7zZ/assets/6799f28b6dbb92499048ec9a_CTA_Arrow_(1).svg",
    linkClassName:
      "static text-violet-600 items-center bg-indigo-200 box-border caret-transparent gap-x-0 flex flex-col justify-start max-w-full gap-y-0 p-4 rounded-2xl top-[100px] md:sticky md:gap-x-[140px] md:flex-row md:gap-y-[140px] md:pl-10 md:pr-5 md:py-5",
    fullDescription:
      "E-Shop needed a complete growth stack: Meta ads for demand generation, Google ads for high-intent capture, retargeting for abandoned users, and SEO-backed landing pages for long-term product ranking. We rebuilt the account architecture, creative testing loop, and conversion tracking end-to-end.",
    challenge:
      "The account was scaling on unstable ad sets. 14 creatives and 5 broad campaigns were burning budget with weak purchase intent. Tracking had duplicate events, retargeting windows were too wide, and landing pages were slow, causing high bounce and low checkout completion.",
    solution:
      "We launched a 3-layer funnel: prospecting on Meta, intent capture on Google Search/PMax, and segmented retargeting based on product-view and add-to-cart behavior. We rebuilt pixel + CAPI tracking, replaced weak creatives weekly, compressed landing-page load times, and aligned SEO product pages with ad messaging.",
    solutionBullets: [
      "Meta campaign stack split by cold, warm-video, and catalog remarketing audiences.",
      "Google Search + PMax for high-intent keywords and best-selling SKU clusters.",
      "Retargeting windows reduced from 30 days to 7/14-day intent segments.",
      "SEO and landing-page improvements lifted quality score and conversion rate.",
    ],
    workflowScenario:
      "Every week followed a strict optimization loop: budget pacing check, creative fatigue check, failed-ad shutdown, retargeting refresh, and bid/copy updates. This kept scaling controlled while protecting margin.",
    results:
      "In 6 months, blended CPA dropped from $27.30 to $11.90 and ROAS improved from 1.9x to 4.8x. Monthly sales scaled from $82K to $231K with stronger repeat purchases driven by retargeting and better product-page SEO visibility.",
    reportMetrics: [
      { label: "Blended CAC", value: "-56%" },
      { label: "Checkout CVR", value: "+61%" },
      { label: "AOV", value: "+18%" },
      { label: "Retargeting ROAS", value: "8.1x" },
      { label: "SEO Revenue Share", value: "21%" },
      { label: "Purchase Volume", value: "+182%" },
    ],
    adReport: {
      period: "Jan 2025 - Jun 2025",
      goals: "Scale profitable purchases and reduce blended CAC while improving product ranking.",
      monthlyBudget: "$18K - $22K",
      metaAdsSpend: "$74,200",
      googleAdsSpend: "$41,800",
      totalAdSpend: "$116,000",
      failedAdsSummary:
        "Stopped 72% of underperforming creatives in first 3 weeks after strict winner/loser rules.",
      retargetingShare: "26% of spend generated 43% of purchases",
      cpaBefore: "$27.30",
      cpaAfter: "$11.90",
      roasBefore: "1.9x",
      roasAfter: "4.8x",
      salesBefore: "$82K / month",
      salesAfter: "$231K / month",
      seoGrowth: "+137% non-branded clicks",
      topCreativeWinner: "UGC problem-solution hook + offer-first PDP",
      topAudienceWinner: "1% Purchaser LAL + warm-video stack",
    },
  },
  {
    id: "plate",
    slug: "shoplift-design-marketing",
    category: "Shopify Growth Marketing",
    title: "ShopLift Design + Ads + SEO",
    description:
      "Shopify store growth across Meta and Google Ads, with CRO-led redesign and SEO content strategy to increase conversion quality.",
    stat1Label: "Google ROAS",
    stat1Value: "5.1x",
    stat2Label: "Meta CTR",
    stat2Value: "3.7%",
    testimonialBgColor: "bg-rose-400",
    testimonialImageUrl:
      "https://anpeyqpnsavhykstwwbq.supabase.co/storage/v1/object/public/images/ff/1770490032237-4.png",
    testimonialImageAlt: "ShopLift owner",
    testimonialName: "Rina Nail",
    testimonialTitle: "Founder, ShopLift",
    testimonialQuote:
      "Design plus ad strategy changed everything. We finally knew where money was leaking and which audiences actually bought.",
    projectImageUrl:
      "https://anpeyqpnsavhykstwwbq.supabase.co/storage/v1/object/public/images/ff/1770490032237-4.png",
    projectImageAlt: "ShopLift growth view",
    problemImageUrl:
      "https://anpeyqpnsavhykstwwbq.supabase.co/storage/v1/object/public/images/ff/1770490032237-4.png",
    solutionImageUrl:
      "https://anpeyqpnsavhykstwwbq.supabase.co/storage/v1/object/public/images/ff/1770490032237-4.png",
    workflowImageUrl:
      "https://anpeyqpnsavhykstwwbq.supabase.co/storage/v1/object/public/images/ff/1770490032237-4.png",
    resultImageUrl:
      "https://anpeyqpnsavhykstwwbq.supabase.co/storage/v1/object/public/images/ff/1770490032237-4.png",
    styleGuideImages: [
      "https://anpeyqpnsavhykstwwbq.supabase.co/storage/v1/object/public/images/ff/1770490032237-4.png",
      "https://anpeyqpnsavhykstwwbq.supabase.co/storage/v1/object/public/images/ff/1770490031278-3.png",
      "https://anpeyqpnsavhykstwwbq.supabase.co/storage/v1/object/public/images/ff/1770490029303-1.png",
    ],
    arrowIconUrl:
      "https://c.animaapp.com/mkiynesyxwO7zZ/assets/6799f28b6dbb92499048ec9a_CTA_Arrow_(1).svg",
    linkClassName:
      "static text-violet-600 items-center bg-rose-300 box-border caret-transparent gap-x-0 flex flex-col justify-start max-w-full gap-y-0 z-[3] pl-5 pr-4 py-4 rounded-2xl top-40 md:sticky md:gap-x-[140px] md:flex-row md:gap-y-[140px] md:pl-10 md:pr-5 md:py-5",
    fullDescription:
      "ShopLift needed more than media buying. We paired Shopify UX improvements, Meta/Google account restructuring, and SEO-led collection page optimization so paid traffic could convert at higher margin.",
    challenge:
      "The store had expensive traffic, weak product-page trust, and broad campaigns with little intent filtering. Ads were generating clicks but not enough qualified checkouts. Branded search also lacked organic support, increasing dependency on paid spend.",
    solution:
      "We rebuilt campaign segmentation by product line, launched Meta angle testing by customer pain-point, and introduced Google Search coverage for high-converting long-tail terms. On-site, we improved bundle logic, review placement, and sticky CTA modules while launching SEO content for key collections.",
    solutionBullets: [
      "Meta creatives mapped to top three purchase objections.",
      "Google Search campaigns by high-intent query themes and match type control.",
      "Retargeting split by product depth and cart value tiers.",
      "Shopify CRO + SEO collection improvements for lower acquisition pressure.",
    ],
    workflowScenario:
      "Optimization moved from random edits to a scorecard system: creative score, search-term quality, landing CVR, and margin-safe scaling thresholds every 7 days.",
    results:
      "Within 7 months, paid conversion rate improved from 1.7% to 3.9%, Google ROAS reached 5.1x, and Meta CTR increased to 3.7%. Paid dependence dropped as SEO sessions rose 92%, helping protect blended profitability.",
    reportMetrics: [
      { label: "Paid CVR", value: "+129%" },
      { label: "CPA", value: "-41%" },
      { label: "Google ROAS", value: "5.1x" },
      { label: "Meta Hook Rate", value: "+48%" },
      { label: "SEO Sessions", value: "+92%" },
      { label: "Net Sales", value: "+167%" },
    ],
    adReport: {
      period: "Feb 2025 - Aug 2025",
      goals: "Increase profitable conversions while reducing reliance on broad paid traffic.",
      monthlyBudget: "$14K - $19K",
      metaAdsSpend: "$58,900",
      googleAdsSpend: "$33,400",
      totalAdSpend: "$92,300",
      failedAdsSummary:
        "29 ad variants failed hook/hold benchmarks and were removed in the first 45 days.",
      retargetingShare: "22% of spend generated 39% of total paid revenue",
      cpaBefore: "$31.50",
      cpaAfter: "$18.60",
      roasBefore: "2.3x",
      roasAfter: "4.9x",
      salesBefore: "$61K / month",
      salesAfter: "$163K / month",
      seoGrowth: "+92% organic sessions on money pages",
      topCreativeWinner: "Problem-first static + social proof card stack",
      topAudienceWinner: "Warm catalog viewers 7-day + value-based LAL",
    },
  },
  {
    id: "yenex",
    slug: "adflow-ads-marketing-system",
    category: "Performance Ads Infrastructure",
    title: "AdFlow Meta + Google Revenue Engine",
    description:
      "Built a full paid media operating system: channel split, creative testing, conversion tracking, and retargeting automation for scale.",
    stat1Label: "Lead CPL",
    stat1Value: "$18.40",
    stat2Label: "Pipeline ROAS",
    stat2Value: "6.3x",
    testimonialBgColor: "bg-amber-300",
    testimonialImageUrl:
      "https://c.animaapp.com/mkiynesyxwO7zZ/assets/67bfffa4029650aa984d4193_Yenex.avif",
    testimonialImageAlt: "AdFlow founder",
    testimonialName: "Ted Nash",
    testimonialTitle: "Founder, AdFlow",
    testimonialQuote:
      "We did not just get better ads, we got a repeatable growth model. Budget decisions are now data-backed every week.",
    projectImageUrl:
      "https://anpeyqpnsavhykstwwbq.supabase.co/storage/v1/object/public/images/ff/1770490031278-3.png",
    projectImageAlt: "AdFlow report dashboard",
    problemImageUrl:
      "https://anpeyqpnsavhykstwwbq.supabase.co/storage/v1/object/public/images/ff/1770490031278-3.png",
    solutionImageUrl:
      "https://anpeyqpnsavhykstwwbq.supabase.co/storage/v1/object/public/images/ff/1770490031278-3.png",
    workflowImageUrl:
      "https://anpeyqpnsavhykstwwbq.supabase.co/storage/v1/object/public/images/ff/1770490031278-3.png",
    resultImageUrl:
      "https://anpeyqpnsavhykstwwbq.supabase.co/storage/v1/object/public/images/ff/1770490031278-3.png",
    styleGuideImages: [
      "https://anpeyqpnsavhykstwwbq.supabase.co/storage/v1/object/public/images/ff/1770490031278-3.png",
      "https://anpeyqpnsavhykstwwbq.supabase.co/storage/v1/object/public/images/ff/1770490027209-0.png",
      "https://anpeyqpnsavhykstwwbq.supabase.co/storage/v1/object/public/images/ff/1770490029303-1.png",
    ],
    arrowIconUrl:
      "https://c.animaapp.com/mkiynesyxwO7zZ/assets/6799f28b6dbb92499048ec9a_CTA_Arrow_(1).svg",
    linkClassName:
      "static text-violet-600 items-center bg-orange-200 box-border caret-transparent gap-x-0 flex flex-col justify-start max-w-full gap-y-0 z-[4] p-4 rounded-2xl top-[216px] md:sticky md:gap-x-[140px] md:flex-row md:gap-y-[140px] md:pl-10 md:pr-5 md:py-5",
    fullDescription:
      "AdFlow wanted a deep media system with transparent reporting across Meta Ads, Google Ads, and website conversion events. We built campaign architecture, attribution clarity, and a creative-ops cadence to drive lower CPL and higher pipeline quality.",
    challenge:
      "Leads were inconsistent, attribution was fragmented, and several ad sets were over-optimized to vanity metrics. Failed ad groups consumed budget while sales teams reported poor lead fit. The website also lacked conversion-focused intent paths.",
    solution:
      "We implemented structured campaign tiers by funnel stage, synced CRM conversion events into ad platforms, and introduced creative-score thresholds to prevent fatigue spend. We redesigned lead pages around intent signals, then launched SEO support pages to rank high-converting use-case keywords.",
    solutionBullets: [
      "Meta lead-gen and conversion campaigns split by audience temperature.",
      "Google Search + demand capture around buyer-intent query clusters.",
      "Retargeting by page depth, form-start behavior, and video engagement.",
      "Attribution cleanup with CRM feedback loop for quality scoring.",
    ],
    workflowScenario:
      "Every sprint combined media diagnostics, failed-ad cleanup, CRO adjustments, and sales feedback review so budget flowed only to qualified-demand segments.",
    results:
      "In 5 months, lead CPL dropped to $18.40, pipeline ROAS reached 6.3x, and qualified lead rate improved 73%. Consistent reporting allowed safer scale decisions and fewer spend spikes from failed campaigns.",
    reportMetrics: [
      { label: "Lead CPL", value: "-47%" },
      { label: "SQL Rate", value: "+73%" },
      { label: "Pipeline ROAS", value: "6.3x" },
      { label: "Meta CVR", value: "+64%" },
      { label: "Google IS", value: "+29%" },
      { label: "Cost Waste", value: "-38%" },
    ],
    adReport: {
      period: "Mar 2025 - Jul 2025",
      goals: "Lower CPL, improve lead quality, and scale budget without efficiency collapse.",
      monthlyBudget: "$16K - $24K",
      metaAdsSpend: "$49,600",
      googleAdsSpend: "$37,200",
      totalAdSpend: "$86,800",
      failedAdsSummary:
        "Eliminated 41 underperforming ad/ad set combinations after quality-score and CPL guardrails.",
      retargetingShare: "19% of spend generated 34% of qualified form submissions",
      cpaBefore: "$34.80",
      cpaAfter: "$18.40",
      roasBefore: "2.1x",
      roasAfter: "6.3x",
      salesBefore: "$44K / month pipeline value",
      salesAfter: "$126K / month pipeline value",
      seoGrowth: "+81% organic leads from use-case pages",
      topCreativeWinner: "Case-study ad with pain-first headline and proof snippet",
      topAudienceWinner: "Intent visitors + CRM-qualified lookalike model",
    },
  },
  {
    id: "fitmate",
    slug: "clickcart-ads-sales-app",
    category: "Meta Ads + App Growth",
    title: "ClickCart Mobile Ads Scale",
    description:
      "Meta-first mobile growth strategy with app-store conversion optimization, remarketing loops, and Google UAC support campaigns.",
    stat1Label: "Meta CAC",
    stat1Value: "$9.80",
    stat2Label: "D7 ROAS",
    stat2Value: "4.2x",
    testimonialBgColor: "bg-cyan-300",
    testimonialImageUrl:
      "https://anpeyqpnsavhykstwwbq.supabase.co/storage/v1/object/public/images/ff/1770490029303-1.png",
    testimonialImageAlt: "ClickCart founder",
    testimonialName: "Omar Rahim",
    testimonialTitle: "Founder, ClickCart",
    testimonialQuote:
      "We were spending on installs, not revenue. After the funnel rebuild, ad cost dropped and repeat buyers became a real growth channel.",
    projectImageUrl:
      "https://anpeyqpnsavhykstwwbq.supabase.co/storage/v1/object/public/images/ff/1770490029303-1.png",
    projectImageAlt: "ClickCart app growth dashboard",
    problemImageUrl:
      "https://anpeyqpnsavhykstwwbq.supabase.co/storage/v1/object/public/images/ff/1770490029303-1.png",
    solutionImageUrl:
      "https://anpeyqpnsavhykstwwbq.supabase.co/storage/v1/object/public/images/ff/1770490029303-1.png",
    workflowImageUrl:
      "https://anpeyqpnsavhykstwwbq.supabase.co/storage/v1/object/public/images/ff/1770490029303-1.png",
    resultImageUrl:
      "https://anpeyqpnsavhykstwwbq.supabase.co/storage/v1/object/public/images/ff/1770490029303-1.png",
    styleGuideImages: [
      "https://anpeyqpnsavhykstwwbq.supabase.co/storage/v1/object/public/images/ff/1770490029303-1.png",
      "https://anpeyqpnsavhykstwwbq.supabase.co/storage/v1/object/public/images/ff/1770490029303-1.png",
      "https://anpeyqpnsavhykstwwbq.supabase.co/storage/v1/object/public/images/ff/1770490029303-1.png",
    ],
    arrowIconUrl:
      "https://c.animaapp.com/mkiynesyxwO7zZ/assets/6799f28b6dbb92499048ec9a_CTA_Arrow_(1).svg",
    linkClassName:
      "static text-violet-600 items-center bg-cyan-200 box-border caret-transparent gap-x-0 flex flex-col justify-start max-w-full gap-y-0 z-[5] p-4 rounded-2xl top-[272px] md:sticky md:gap-x-[140px] md:flex-row md:gap-y-[140px] md:pl-10 md:pr-5 md:py-5",
    fullDescription:
      "ClickCart combined app-growth media buying, Meta retargeting, and store conversion optimization. We aligned install campaigns with downstream purchase events so performance reflected revenue, not just app installs.",
    challenge:
      "Initial campaigns optimized for cheap installs, but post-install purchase rates were weak. Several creatives drove accidental clicks, D1 retention was low, and retargeting audiences were too generic to recover high-intent users.",
    solution:
      "We shifted optimization to in-app purchase events, launched audience ladders by cart behavior, and created ad variants for value bundles and urgency windows. Google UAC supported incremental scale while Meta handled core conversion and retargeting depth.",
    solutionBullets: [
      "Meta conversion campaigns optimized for purchase-value events.",
      "Retargeting by D1 churn, cart abandoners, and repeat-buyer signals.",
      "Creative testing by offer format: discount, bundle, and social proof.",
      "App funnel fixes to shorten time-to-first-purchase.",
    ],
    workflowScenario:
      "Daily checks handled spend pacing and delivery health, while weekly decisions used cohort retention, D7 ROAS, and failed-ad kill rules to protect budget quality.",
    results:
      "Over 4 months, CAC dropped from $19.20 to $9.80, D7 ROAS climbed to 4.2x, and repeat-purchase share increased from 14% to 29%. Revenue scaled without relying on high-cost acquisition spikes.",
    reportMetrics: [
      { label: "CAC", value: "-49%" },
      { label: "D7 ROAS", value: "4.2x" },
      { label: "Repeat Buyers", value: "+107%" },
      { label: "Install->Purchase CVR", value: "+68%" },
      { label: "Retargeting ROAS", value: "7.4x" },
      { label: "Refund Rate", value: "-22%" },
    ],
    adReport: {
      period: "Apr 2025 - Jul 2025",
      goals: "Reduce CAC and increase revenue quality from paid mobile traffic.",
      monthlyBudget: "$11K - $15K",
      metaAdsSpend: "$32,700",
      googleAdsSpend: "$19,900",
      totalAdSpend: "$52,600",
      failedAdsSummary:
        "Removed 23 low-intent creatives that generated installs but weak purchase retention.",
      retargetingShare: "24% of spend generated 46% of purchase value",
      cpaBefore: "$19.20",
      cpaAfter: "$9.80",
      roasBefore: "1.8x",
      roasAfter: "4.2x",
      salesBefore: "$29K / month",
      salesAfter: "$92K / month",
      seoGrowth: "+58% branded search demand from ad-assisted awareness",
      topCreativeWinner: "Short-form UGC with 3-second product outcome hook",
      topAudienceWinner: "Cart abandoners + D1 app-open non-buyers",
    },
  },
  {
    id: "zantrik",
    slug: "shopify-ads-conversion-project",
    category: "Meta + Google + SEO",
    title: "Shopify Ads Conversion Project",
    description:
      "Ongoing conversion growth project combining Meta ads, Google intent capture, SEO ranking support, and website CRO for stable sales.",
    stat1Label: "Meta ROAS",
    stat1Value: "5.4x",
    stat2Label: "Store CVR",
    stat2Value: "4.9%",
    testimonialBgColor: "bg-teal-300",
    testimonialImageUrl:
      "https://c.animaapp.com/mkiynesyxwO7zZ/assets/67bfffa4c7cf7ce8c1000112_Zantrik.avif",
    testimonialImageAlt: "Shopify conversion client",
    testimonialName: "Daniel K.",
    testimonialTitle: "Growth Lead, Shopify Brand",
    testimonialQuote:
      "The campaign reporting is now clear: spend, failed tests, retargeting output, and SEO lift are all visible in one growth dashboard.",
    projectImageUrl:
      "https://anpeyqpnsavhykstwwbq.supabase.co/storage/v1/object/public/images/ff/1770490027209-0.png",
    projectImageAlt: "Shopify conversion report",
    problemImageUrl:
      "https://anpeyqpnsavhykstwwbq.supabase.co/storage/v1/object/public/images/ff/1770490027209-0.png",
    solutionImageUrl:
      "https://anpeyqpnsavhykstwwbq.supabase.co/storage/v1/object/public/images/ff/1770490027209-0.png",
    workflowImageUrl:
      "https://anpeyqpnsavhykstwwbq.supabase.co/storage/v1/object/public/images/ff/1770490027209-0.png",
    resultImageUrl:
      "https://anpeyqpnsavhykstwwbq.supabase.co/storage/v1/object/public/images/ff/1770490027209-0.png",
    styleGuideImages: [
      "https://anpeyqpnsavhykstwwbq.supabase.co/storage/v1/object/public/images/ff/1770490027209-0.png",
      "https://anpeyqpnsavhykstwwbq.supabase.co/storage/v1/object/public/images/ff/1770490032237-4.png",
      "https://wcvjpentbtxtnlrdthdk.supabase.co/storage/v1/object/public/images/5f337e11-6346-48b4-8f2b-d5c417e57077/Untitled%20design%20(55).png",
    ],
    arrowIconUrl:
      "https://c.animaapp.com/mkiynesyxwO7zZ/assets/6799f28b6dbb92499048ec9a_CTA_Arrow_(1).svg",
    linkClassName:
      "static text-violet-600 items-center bg-teal-100 box-border caret-transparent gap-x-0 flex flex-col justify-start max-w-full gap-y-0 top-[-28.8px] z-[7] p-4 rounded-2xl md:sticky md:gap-x-[140px] md:flex-row md:gap-y-[140px] md:pl-10 md:pr-5 md:py-5",
    fullDescription:
      "This ongoing engagement focuses on profitable scale: Meta ads for demand, Google ads for active buyers, retargeting for recovery, and SEO for ranked product/category pages. Website performance and UX updates ensure ad traffic converts efficiently.",
    challenge:
      "The brand had growth potential but faced costly peaks and unstable ROAS. Broad audience campaigns often failed after scaling, creative fatigue appeared quickly, and category pages lacked SEO structure to support low-cost long-term acquisition.",
    solution:
      "We built an always-on testing framework with clear fail-fast thresholds, moved budget toward winning audience-creative pairs, tightened retargeting windows, and deployed SEO improvements on product/category templates. CRO updates aligned offers, trust blocks, and checkout flow with ad intent.",
    solutionBullets: [
      "Meta testing matrix for hooks, offers, and post-click intent alignment.",
      "Google Search + Shopping coverage for high-margin and high-intent terms.",
      "Retargeting stack by cart value, purchase recency, and product affinity.",
      "SEO structure + technical fixes to rank money pages and reduce paid pressure.",
    ],
    workflowScenario:
      "The team follows a rolling 14-day cycle: failed-ad audit, budget reallocation, creative refresh, landing-page update, and SEO ranking check tied directly to paid funnel goals.",
    results:
      "Performance stabilized at scale: Meta ROAS reached 5.4x, store conversion rate rose to 4.9%, and blended revenue more than doubled. SEO ranking gains now support additional sales with lower incremental ad cost.",
    reportMetrics: [
      { label: "Meta ROAS", value: "5.4x" },
      { label: "Google CVR", value: "+72%" },
      { label: "Store CVR", value: "4.9%" },
      { label: "Blended Revenue", value: "+214%" },
      { label: "Retargeting Revenue Share", value: "41%" },
      { label: "Organic Sales Share", value: "27%" },
    ],
    adReport: {
      period: "Ongoing (last 180 days)",
      goals: "Scale revenue while preserving margin and reducing dependence on unstable campaigns.",
      monthlyBudget: "$20K - $28K",
      metaAdsSpend: "$86,300",
      googleAdsSpend: "$52,700",
      totalAdSpend: "$139,000",
      failedAdsSummary:
        "Paused 37 failed ad/ad-set experiments using ROAS + CPA fail-fast thresholds.",
      retargetingShare: "28% of spend generated 41% of paid-attributed revenue",
      cpaBefore: "$24.10",
      cpaAfter: "$12.70",
      roasBefore: "2.4x",
      roasAfter: "5.4x",
      salesBefore: "$95K / month",
      salesAfter: "$298K / month",
      seoGrowth: "+149% clicks on category and product intent pages",
      topCreativeWinner: "Offer-led UGC + comparison angle for high AOV bundles",
      topAudienceWinner: "High-LTV purchaser seed + segmented retargeting pools",
    },
  },
];
