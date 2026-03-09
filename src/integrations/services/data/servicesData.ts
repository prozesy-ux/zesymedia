export type ServiceItem = {
  id: string;
  slug: string;
  number: string;
  title: string;
  href: string;
  isActive: boolean;
};

export type Service = {
  id: string;
  slug: string;
  href: string;
  imageUrl: string;
  imageAlt: string;
  imageVariant: string;
  title: string;
  description: string;
  services: ServiceItem[];
  badgeImageUrl: string;
  badgeImageAlt: string;
};

export const servicesData: Service[] = [
  {
    id: "marketing-meta-ads",
    slug: "marketing-meta-ads",
    href: "/services/marketing-meta-ads",
    imageUrl: "https://wcvjpentbtxtnlrdthdk.supabase.co/storage/v1/object/public/images/5f337e11-6346-48b4-8f2b-d5c417e57077/Firefly_GeminiFlash%20(1).png",
    imageAlt: "Marketing Meta Ads",
    imageVariant: "md:w-auto",
    title: "Marketing Meta Ads",
    description: "Scale your business with performance-driven Meta advertising. We handle strategy, creative direction, audience targeting, and optimization to generate better leads and sales.",
    services: [
      { id: "meta-ads-strategy", slug: "meta-ads-strategy", number: "01", title: "Meta Ads Strategy", href: "#", isActive: true },
      { id: "audience-targeting", slug: "audience-targeting", number: "02", title: "Audience Targeting", href: "#", isActive: false },
      { id: "creative-ugc-direction", slug: "creative-ugc-direction", number: "03", title: "Creative & UGC Direction", href: "#", isActive: false },
      { id: "retargeting-funnels", slug: "retargeting-funnels", number: "04", title: "Retargeting Funnels", href: "#", isActive: false },
      { id: "performance-optimization", slug: "performance-optimization", number: "05", title: "Performance Optimization", href: "#", isActive: true },
    ],
    badgeImageUrl: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/67a0f15d255fb3b52afb2a06_Frame 1618871791.avif",
    badgeImageAlt: "",
  },
  {
    id: "google-ads-ppc",
    slug: "google-ads-ppc",
    href: "/services/google-ads-ppc",
    imageUrl: "https://wcvjpentbtxtnlrdthdk.supabase.co/storage/v1/object/public/images/5f337e11-6346-48b4-8f2b-d5c417e57077/Untitled%20design%20(65).png",
    imageAlt: "Google Ads and PPC",
    imageVariant: "md:w-auto",
    title: "Google Ads & PPC",
    description: "Capture high-intent customers with data-backed Google Ads and PPC management. We build, monitor, and optimize campaigns to lower CPA and improve ROAS.",
    services: [
      { id: "search-campaign-setup", slug: "search-campaign-setup", number: "01", title: "Search Campaign Setup", href: "#", isActive: true },
      { id: "keyword-intent-research", slug: "keyword-intent-research", number: "02", title: "Keyword & Intent Research", href: "#", isActive: false },
      { id: "ad-copy-testing", slug: "ad-copy-testing", number: "03", title: "Ad Copy Testing", href: "#", isActive: false },
      { id: "landing-page-alignment", slug: "landing-page-alignment", number: "04", title: "Landing Page Alignment", href: "#", isActive: false },
      { id: "budget-bid-optimization", slug: "budget-bid-optimization", number: "05", title: "Budget & Bid Optimization", href: "#", isActive: true },
    ],
    badgeImageUrl: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/67a0fbfc31e99d9f49a5edbe_Frame 1618871790.avif",
    badgeImageAlt: "",
  },
  {
    id: "tiktok-ads",
    slug: "tiktok-ads",
    href: "/services/tiktok-ads",
    imageUrl: "https://wcvjpentbtxtnlrdthdk.supabase.co/storage/v1/object/public/images/5f337e11-6346-48b4-8f2b-d5c417e57077/Untitled%20design%20(66).png",
    imageAlt: "TikTok Ads",
    imageVariant: "md:w-auto",
    title: "TikTok Ads",
    description: "Win attention fast with scroll-stopping TikTok ad creatives. We craft campaign concepts, UGC-style hooks, and optimization loops for measurable growth.",
    services: [
      { id: "tiktok-campaign-planning", slug: "tiktok-campaign-planning", number: "01", title: "TikTok Campaign Planning", href: "#", isActive: true },
      { id: "ugc-ad-concepts", slug: "ugc-ad-concepts", number: "02", title: "UGC Ad Concepts", href: "#", isActive: true },
      { id: "hook-script-development", slug: "hook-script-development", number: "03", title: "Hook & Script Development", href: "#", isActive: false },
      { id: "creative-testing-cycles", slug: "creative-testing-cycles", number: "04", title: "Creative Testing Cycles", href: "#", isActive: false },
      { id: "scale-optimization", slug: "scale-optimization", number: "05", title: "Scale & Optimization", href: "#", isActive: false },
    ],
    badgeImageUrl: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/67a100fe2e2ec1fb265444e3_Frame 1618871791 (2).avif",
    badgeImageAlt: "",
  },
  {
    id: "web-app-development",
    slug: "web-app-development",
    href: "/services/web-app-development",
    imageUrl: "https://wcvjpentbtxtnlrdthdk.supabase.co/storage/v1/object/public/images/5f337e11-6346-48b4-8f2b-d5c417e57077/Untitled%20design%20(67).png",
    imageAlt: "Web App Development",
    imageVariant: "md:w-auto",
    title: "Web App Development",
    description: "Build secure and scalable web applications with modern stacks, custom APIs, and cloud-ready architecture. We focus on performance, reliability, and growth.",
    services: [
      { id: "product-architecture", slug: "product-architecture", number: "01", title: "Product Architecture", href: "#", isActive: true },
      { id: "frontend-backend-build", slug: "frontend-backend-build", number: "02", title: "Frontend + Backend Build", href: "#", isActive: true },
      { id: "custom-api-integration", slug: "custom-api-integration", number: "03", title: "Custom API Integration", href: "#", isActive: false },
      { id: "cloud-deployment", slug: "cloud-deployment", number: "04", title: "Cloud Deployment", href: "#", isActive: false },
      { id: "maintenance-scaling", slug: "maintenance-scaling", number: "05", title: "Maintenance & Scaling", href: "#", isActive: false },
    ],
    badgeImageUrl: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/67a0fbbe15bf58f5b51affcf_Frame 1618871790 (5).avif",
    badgeImageAlt: "",
  },
  {
    id: "ui-ux-design",
    slug: "ui-ux-design",
    href: "/services/ui-ux-design",
    imageUrl: "https://wcvjpentbtxtnlrdthdk.supabase.co/storage/v1/object/public/images/5f337e11-6346-48b4-8f2b-d5c417e57077/Untitled%20design%20(68).png",
    imageAlt: "UI UX Design",
    imageVariant: "md:w-auto",
    title: "UI UX Design",
    description: "Design delightful and intuitive user experiences for web and mobile products. We combine research, interaction design, and usability best practices.",
    services: [
      { id: "ux-research", slug: "ux-research", number: "01", title: "UX Research", href: "#", isActive: true },
      { id: "wireframes-flows", slug: "wireframes-flows", number: "02", title: "Wireframes & Flows", href: "#", isActive: false },
      { id: "high-fidelity-ui", slug: "high-fidelity-ui", number: "03", title: "High-Fidelity UI", href: "#", isActive: true },
      { id: "interactive-prototypes", slug: "interactive-prototypes", number: "04", title: "Interactive Prototypes", href: "#", isActive: false },
      { id: "usability-optimization", slug: "usability-optimization", number: "05", title: "Usability Optimization", href: "#", isActive: false },
    ],
    badgeImageUrl: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/67a0fbfc31e99d9f49a5edbe_Frame 1618871790.avif",
    badgeImageAlt: "",
  },
  {
    id: "branding-design",
    slug: "branding-design",
    href: "/services/branding-design",
    imageUrl: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/67a0f89a8c7b92e4b2ade7e0_Logo (1).avif",
    imageAlt: "Branding Design",
    imageVariant: "aspect-[auto_1250_/_400] md:w-[1250px]",
    title: "Branding Design",
    description: "Create a memorable visual identity with logo systems, brand guidelines, and marketing-ready assets designed to build trust and recognition.",
    services: [
      { id: "logo-design", slug: "logo-design", number: "01", title: "Logo Design", href: "#", isActive: true },
      { id: "brand-identity-system", slug: "brand-identity-system", number: "02", title: "Brand Identity System", href: "#", isActive: false },
      { id: "visual-guidelines", slug: "visual-guidelines", number: "03", title: "Visual Guidelines", href: "#", isActive: false },
      { id: "social-ad-creative-kits", slug: "social-ad-creative-kits", number: "04", title: "Social & Ad Creative Kits", href: "#", isActive: false },
      { id: "brand-refresh", slug: "brand-refresh", number: "05", title: "Brand Refresh", href: "#", isActive: true },
    ],
    badgeImageUrl: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/67a0f15d255fb3b52afb2a06_Frame 1618871791.avif",
    badgeImageAlt: "",
  },
  {
    id: "seo-optimization",
    slug: "seo-optimization",
    href: "/services/seo-optimization",
    imageUrl: "https://wcvjpentbtxtnlrdthdk.supabase.co/storage/v1/object/public/images/5f337e11-6346-48b4-8f2b-d5c417e57077/Untitled%20design%20(69).png",
    imageAlt: "SEO Optimization",
    imageVariant: "md:object-fill md:w-auto",
    title: "SEO Optimization",
    description: "Improve organic rankings and conversion quality with technical SEO, on-page optimization, content strategy, and ongoing performance monitoring.",
    services: [
      { id: "technical-seo-audit", slug: "technical-seo-audit", number: "01", title: "Technical SEO Audit", href: "#", isActive: true },
      { id: "on-page-seo", slug: "on-page-seo", number: "02", title: "On-Page SEO", href: "#", isActive: true },
      { id: "keyword-strategy", slug: "keyword-strategy", number: "03", title: "Keyword Strategy", href: "#", isActive: false },
      { id: "local-ecommerce-seo", slug: "local-ecommerce-seo", number: "04", title: "Local & Ecommerce SEO", href: "#", isActive: false },
      { id: "seo-reporting-growth", slug: "seo-reporting-growth", number: "05", title: "SEO Reporting & Growth Plan", href: "#", isActive: false },
    ],
    badgeImageUrl: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/67a0fbfc31e99d9f49a5edbe_Frame 1618871790.avif",
    badgeImageAlt: "",
  },
];
