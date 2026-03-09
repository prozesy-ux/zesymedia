import { useState } from 'react';
import { PricingCards } from './PricingCards';

interface Package {
  price: string;
  priceSubtext: string;
  title: string;
  features: string[];
  ctaUrl: string;
  ctaText: string;
  isPopular?: boolean;
}

export const PricingTabs = () => {
  const [activeMainTab, setActiveMainTab] = useState(0);
  const [activeSubTab, setActiveSubTab] = useState(0);

  const handleMainTabClick = (index: number) => {
    setActiveMainTab(index);
    setActiveSubTab(0);
  };

  const handleSubTabClick = (index: number) => {
    setActiveSubTab(index);
  };

  // Ads Service packages
  const adsQuickLaunch: Package[] = [
    {
      price: '$100',
      priceSubtext: 'One-time setup',
      title: 'Starter Ads Setup',
      features: ['Meta Ads Setup', 'Google Ads Setup', 'TikTok Ads Pixel Setup', 'PPC Search Campaign Setup', 'Video Ad Brief', 'Tracking Setup (Pixel + GA4)'],
      ctaUrl: '#',
      ctaText: 'Get Started'
    },
    {
      price: '$300',
      priceSubtext: 'One-time setup',
      title: 'Core Ads Setup',
      features: ['Meta + Google + TikTok Campaign Build', 'PPC Search + Display Setup', 'UGC Script Ideas (2 Concepts)', 'Video Ads Creative Direction', 'Retargeting Audience Setup', '7-Day Launch Support'],
      ctaUrl: '#',
      ctaText: 'Get Started',
      isPopular: true
    },
    {
      price: '$600',
      priceSubtext: 'One-time setup',
      title: 'Performance Funnel Setup',
      features: ['Full-Funnel Campaign Structure', 'Search + Video + Retargeting Ads', 'UGC Ad Plan (5 Concepts)', 'CAPI + Conversion Tracking', 'Landing Page CRO Recommendations', '14-Day Optimization Support'],
      ctaUrl: '#',
      ctaText: 'Get Started'
    }
  ];

  const adsIndividual: Package[] = [
    {
      price: '$300/mo',
      priceSubtext: 'Monthly subscription',
      title: 'Individual Ads Management',
      features: ['Meta, Google, or TikTok Ads (Choose One)', 'PPC Search Optimization', 'Monthly Campaign Optimization', '5 Ad Creatives/Month', 'Performance Report', 'Email Support'],
      ctaUrl: '#',
      ctaText: 'Get Started'
    },
    {
      price: '$600/mo',
      priceSubtext: 'Monthly subscription',
      title: 'Large Work Management',
      features: ['Meta + Google + TikTok Campaigns', 'PPC Search + Video Ads', 'Weekly Optimization + Testing', '10 Ad Creatives/Month', 'Detailed Analytics Dashboard', 'Priority Support'],
      ctaUrl: '#',
      ctaText: 'Get Started',
      isPopular: true
    },
    {
      price: '$1,000/mo',
      priceSubtext: 'Monthly subscription',
      title: 'Growth Service',
      features: ['All Ads + Content + UGC', 'Full-Funnel Campaign Management', 'Daily Optimization + Scaling', 'Advanced Audience Testing', 'Campaign Budget Support up to $10,000', 'Dedicated Growth Manager'],
      ctaUrl: '#',
      ctaText: 'Get Started'
    }
  ];

  const adsLargeScale: Package[] = [
    {
      price: '$600/mo',
      priceSubtext: 'Monthly subscription',
      title: 'Campaign Boost',
      features: ['Multi-Campaign Management', 'Meta + Google + TikTok', 'Search + Video Ads Coverage', '15 Ad Creatives/Month', 'Advanced Reporting', 'Conversion Optimization'],
      ctaUrl: '#',
      ctaText: 'Get Started'
    },
    {
      price: '$1,500/mo',
      priceSubtext: 'Monthly subscription',
      title: 'Scale Engine',
      features: ['PPC Search + Video + Retargeting', 'UGC Creative Pipeline', 'Custom Growth Strategy', 'Unlimited Ad Variants', 'Full Analytics Suite', 'Dedicated Team'],
      ctaUrl: '#',
      ctaText: 'Get Started',
      isPopular: true
    },
    {
      price: 'Custom',
      priceSubtext: 'Contact for enterprise quote',
      title: 'Enterprise Ads Ops',
      features: ['Enterprise Multi-Region Campaigns', 'Unlimited Ad Spend Management', 'Custom Attribution + Tracking', 'Creative + UGC Production Team', 'White-Label Performance Ops', 'Executive Reporting + SLA'],
      ctaUrl: '#',
      ctaText: 'Get Started'
    }
  ];

  // Web & Mobile App packages
  const webMobileBasic: Package[] = [
    {
      price: '$5,000',
      priceSubtext: 'One-time payment',
      title: 'Website or Mobile App Design',
      features: ['Website Design or Mobile App UI', 'Landing Page + Dashboard Design', 'Shopify Store Setup (Basic)', 'Webflow or Framer Build', 'Responsive UX/UI', '14-Day Delivery'],
      ctaUrl: '#',
      ctaText: 'Get Started'
    },
    {
      price: '$10,000',
      priceSubtext: 'One-time payment',
      title: 'SaaS Product Build',
      features: ['SaaS App Design + Product UX', 'Web + Mobile App Experience', 'Custom API Integrations', 'Cloud Deployment (Vercel/AWS)', 'Subscription + Pricing Tiers UI', '21-Day Delivery'],
      ctaUrl: '#',
      ctaText: 'Get Started',
      isPopular: true
    },
    {
      price: '$18,000',
      priceSubtext: 'One-time payment',
      title: 'Ecommerce + App Platform',
      features: ['Shopify Ecommerce Specialization', 'Custom Web App + Admin Dashboard', 'Custom Server + API Architecture', 'Payments + Membership Tiers', 'Scalable Cloud Deployment', '30-Day Delivery'],
      ctaUrl: '#',
      ctaText: 'Get Started'
    }
  ];

  const webMobileAdvanced: Package[] = [
    {
      price: '$15,000',
      priceSubtext: 'One-time payment',
      title: 'Advanced SaaS App',
      features: ['SaaS Design System', 'Generative AI Tool UI', 'Chatbot UI + User Flows', 'Interactive Prototyping', 'Advanced Product UX', '30-Day Delivery'],
      ctaUrl: '#',
      ctaText: 'Get Started'
    },
    {
      price: '$25,000',
      priceSubtext: 'One-time payment',
      title: 'Growth Product Suite',
      features: ['Web App + Mobile App + Dashboard', 'UI Animation + Micro Interactions', 'Usability Testing + User Testing', 'Membership + Subscription UX', 'API + Automation Integrations', '45-Day Delivery'],
      ctaUrl: '#',
      ctaText: 'Get Started',
      isPopular: true
    },
    {
      price: '$40,000',
      priceSubtext: 'One-time payment',
      title: 'Enterprise Platform Engineering',
      features: ['Custom Server Development', 'All API Integrations (Internal + Third-Party)', 'Cloud Infra + CI/CD Deployment', 'Scalable Architecture + Security', 'Performance Monitoring', '60-Day Delivery'],
      ctaUrl: '#',
      ctaText: 'Get Started'
    }
  ];

  const webMobileCustom: Package[] = [
    {
      price: 'Custom',
      priceSubtext: 'Contact for quote',
      title: 'Custom Development',
      features: ['Custom SaaS, Web, and Mobile Products', 'Shopify, Webflow, and Framer Specialists', 'Custom Server + API Development', 'Cloud Deployment + DevOps Automation', 'AI Tool UI, Chatbot UI, and Product UX', 'Flexible Scope with Dedicated Team'],
      ctaUrl: '#',
      ctaText: 'Contact Us'
    }
  ];

  // SEO packages
  const seoBasic: Package[] = [
    {
      price: '$800',
      priceSubtext: 'One-time payment',
      title: 'Search Visibility Starter',
      features: ['Website + Shopify SEO Audit', 'Keyword + PPC Search Mapping', 'On-Page SEO Fixes', 'Technical SEO Cleanup', 'Basic Content Plan', 'Monthly Report'],
      ctaUrl: '#',
      ctaText: 'Get Started'
    },
    {
      price: '$1,500',
      priceSubtext: 'One-time payment',
      title: 'SEO + CRO Professional',
      features: ['Complete SEO Audit', 'Advanced Keyword Strategy', 'Technical SEO + Speed Optimization', 'Landing Page CRO', 'Authority Link Building', 'Competitor Analysis', 'Bi-weekly Reports'],
      ctaUrl: '#',
      ctaText: 'Get Started',
      isPopular: true
    },
    {
      price: '$3,000',
      priceSubtext: 'One-time payment',
      title: 'SEO Enterprise Growth',
      features: ['Full SEO Ecosystem', 'Content + Technical SEO at Scale', 'Local + International SEO', 'Conversion-Focused Content Strategy', 'Advanced Tracking + Attribution', 'Executive Reporting'],
      ctaUrl: '#',
      ctaText: 'Get Started'
    }
  ];

  const seoMonthly: Package[] = [
    {
      price: '$500/mo',
      priceSubtext: 'Monthly subscription',
      title: 'SEO Maintenance',
      features: ['Ongoing On-Page Optimization', 'Monthly Content Updates', 'Technical Monitoring', 'Link Building Support', 'Algorithm Adaptation', 'Monthly Reports'],
      ctaUrl: '#',
      ctaText: 'Get Started'
    },
    {
      price: '$1,000/mo',
      priceSubtext: 'Monthly subscription',
      title: 'SEO Growth',
      features: ['Aggressive SEO Strategy', 'Weekly Content + Optimization', 'Advanced Link Building', 'CRO + UX Recommendations', 'Competitor Monitoring', 'Bi-weekly Strategy Calls'],
      ctaUrl: '#',
      ctaText: 'Get Started',
      isPopular: true
    },
    {
      price: '$2,500/mo',
      priceSubtext: 'Monthly subscription',
      title: 'SEO Enterprise',
      features: ['Enterprise SEO Operations', 'Daily Content + Optimization', 'Premium Link Building', 'Multi-Location + International SEO', 'Dedicated SEO Team', 'Weekly Reports + Calls'],
      ctaUrl: '#',
      ctaText: 'Contact Us'
    }
  ];

  // Branding packages
  const brandingBasic: Package[] = [
    {
      price: '$800',
      priceSubtext: 'One-time payment',
      title: 'Logo + Visual Identity',
      features: ['Logo Designs (3 Concepts)', 'Branding + Visual Identity', 'Typography + Color System', 'Social Brand Kit', '5-Day Delivery'],
      ctaUrl: '#',
      ctaText: 'Get Started'
    },
    {
      price: '$1,500',
      priceSubtext: 'One-time payment',
      title: 'Brand Identity Pro',
      features: ['5 Logo Concepts', 'Business + Social Brand Assets', 'Brand Guidelines', 'Marketing Visuals', 'Motion-Ready Design Kit', '7-Day Delivery'],
      ctaUrl: '#',
      ctaText: 'Get Started',
      isPopular: true
    },
    {
      price: '$3,000',
      priceSubtext: 'One-time payment',
      title: 'Complete Branding',
      features: ['Full Brand System', 'Ad Creatives for Meta/Google/TikTok', 'Brand Guidelines Book', 'Marketing Templates', 'Campaign Visual Direction', '10-Day Delivery'],
      ctaUrl: '#',
      ctaText: 'Get Started'
    }
  ];

  const brandingAdvanced: Package[] = [
    {
      price: '$5,000',
      priceSubtext: 'One-time payment',
      title: 'Brand Motion Pack',
      features: ['Advanced Brand Identity', 'Motion Graphics', 'UI Animation Assets', 'Product Launch Video Storyboard', 'Campaign Visual Toolkit', '14-Day Delivery'],
      ctaUrl: '#',
      ctaText: 'Get Started'
    },
    {
      price: '$8,000',
      priceSubtext: 'One-time payment',
      title: 'Product Launch Branding',
      features: ['Logo + Full Brand System', 'Product Launching Video', 'Motion Graphics Package', 'Ad Creative Direction', 'Brand Strategy Document', '21-Day Delivery'],
      ctaUrl: '#',
      ctaText: 'Get Started',
      isPopular: true
    },
    {
      price: '$15,000',
      priceSubtext: 'One-time payment',
      title: '3D Brand Experience',
      features: ['3D Design for Product Visuals', 'Video + Motion Production', 'Advanced Visual Identity System', 'Full Cross-Channel Asset Library', 'Campaign Creative Direction', '30-Day Delivery'],
      ctaUrl: '#',
      ctaText: 'Get Started'
    }
  ];

  // Subscription packages
  const subscriptionMonthly: Package[] = [
    {
      price: '$999/mo',
      priceSubtext: 'Monthly subscription',
      title: 'Design Support Starter',
      features: ['Website Design Requests', 'Landing + Pricing Tier Design', 'Membership + Subscription UI', 'User Flow Design', '48-Hour Turnaround', 'Cancel Anytime'],
      ctaUrl: '#',
      ctaText: 'Subscribe Now'
    },
    {
      price: '$1,999/mo',
      priceSubtext: 'Monthly subscription',
      title: 'Product UX Pro',
      features: ['SaaS App + Product Design Requests', 'Dashboard + Mobile App UI', 'Interactive Prototyping', 'UX Consultation', 'Usability Testing + User Testing', '24-Hour Turnaround', 'Cancel Anytime'],
      ctaUrl: '#',
      ctaText: 'Subscribe Now',
      isPopular: true
    },
    {
      price: '$3,999/mo',
      priceSubtext: 'Monthly subscription',
      title: 'Creative Growth Partner',
      features: ['Unlimited UI/UX + Branding Requests', 'Generative AI Tool UI + Chatbot UI', 'Motion Graphics + UI Animation', 'eBook + Marketing Design', 'Dedicated Team + Account Manager', '12-Hour Turnaround', 'Cancel Anytime'],
      ctaUrl: '#',
      ctaText: 'Subscribe Now'
    }
  ];

  const subscriptionAnnual: Package[] = [
    {
      price: '$9,990/yr',
      priceSubtext: 'Annual subscription (Save 17%)',
      title: 'Design Support Starter Annual',
      features: ['Website + Landing Design Requests', 'Pricing + Membership UI', 'User Flow Design', '48-Hour Turnaround', '2 Months Free'],
      ctaUrl: '#',
      ctaText: 'Subscribe Now'
    },
    {
      price: '$19,990/yr',
      priceSubtext: 'Annual subscription (Save 17%)',
      title: 'Product UX Pro Annual',
      features: ['Unlimited Product Design Requests', 'SaaS + Mobile + Dashboard UI', 'Interactive Prototypes + Testing', 'Dedicated UX Consultation', 'Priority Support', '2 Months Free'],
      ctaUrl: '#',
      ctaText: 'Subscribe Now',
      isPopular: true
    },
    {
      price: '$39,990/yr',
      priceSubtext: 'Annual subscription (Save 17%)',
      title: 'Creative Growth Partner Annual',
      features: ['Unlimited UI/UX + Brand + Motion Work', 'AI UI + Chatbot UI + Advanced Prototyping', 'User Testing + Optimization', 'Dedicated Team + Account Manager', '12-Hour Turnaround', '2 Months Free'],
      ctaUrl: '#',
      ctaText: 'Subscribe Now'
    }
  ];

  // Main tabs configuration
  const mainTabs = [
    { label: 'Ads Service', subTabs: ['Quick Launch', 'Individual', 'Large Scale'] },
    { label: 'Web & Mobile App', subTabs: ['Basic', 'Advanced', 'Custom'] },
    { label: 'SEO', subTabs: ['One-Time', 'Monthly'] },
    { label: 'Branding', subTabs: ['Basic', 'Advanced'] },
    { label: 'Subscription', subTabs: ['Monthly', 'Annual'] }
  ];

  const getPackagesForCurrentSelection = (): Package[] => {
    // Ads Service packages
    if (activeMainTab === 0) {
      if (activeSubTab === 0) return adsQuickLaunch;
      if (activeSubTab === 1) return adsIndividual;
      if (activeSubTab === 2) return adsLargeScale;
    }
    // Web & Mobile App packages
    if (activeMainTab === 1) {
      if (activeSubTab === 0) return webMobileBasic;
      if (activeSubTab === 1) return webMobileAdvanced;
      if (activeSubTab === 2) return webMobileCustom;
    }
    // SEO packages
    if (activeMainTab === 2) {
      if (activeSubTab === 0) return seoBasic;
      if (activeSubTab === 1) return seoMonthly;
    }
    // Branding packages
    if (activeMainTab === 3) {
      if (activeSubTab === 0) return brandingBasic;
      if (activeSubTab === 1) return brandingAdvanced;
    }
    // Subscription packages
    if (activeMainTab === 4) {
      if (activeSubTab === 0) return subscriptionMonthly;
      if (activeSubTab === 1) return subscriptionAnnual;
    }
    return adsQuickLaunch;
  };

  // Custom pricing data
  const customPricingData = {
    title: 'Custom Build & Growth Process',
    description: 'From Ads to SaaS platforms, we plan, build, deploy, and optimize for performance and growth.',
    steps: [
      { number: '1', text: 'Share your goals for ads, app, and growth' },
      { number: '2', text: 'Receive strategy for UI/UX, APIs, and cloud deployment' },
      { number: '3', text: 'We build your custom web/mobile platform and integrations' },
      { number: '4', text: 'Launch, optimize, and scale with ongoing support' }
    ],
    stepsImage: 'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/673a372ca8de37d4fb0e5816_Group 1000004381.avif',
    formTitle: 'Get a Custom Quote',
    formDescription: 'Tell us about your Ads, Shopify, SaaS, API, or cloud needs and we\'ll provide a detailed quote within 24 hours.',
    formFields: [
      { label: 'Full Name', name: 'name', placeholder: 'Enter your name', type: 'text' },
      { label: 'Email Address', name: 'email', placeholder: 'Enter your email', type: 'email' },
      { label: 'Company Name', name: 'company', placeholder: 'Enter your company name', type: 'text' },
      { label: 'Project Details', name: 'message', placeholder: 'Describe your project requirements', type: 'textarea' }
    ],
    submitButtonText: 'Request Quote',
    consultationTitle: 'Free Strategy Consultation',
    consultationDescription: 'Schedule a free 30-minute strategy call for Ads growth, product UX, and scalable platform development.',
    consultationImage: 'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/673a038c80806ed8478ebd33_Frame (2).svg',
    revisionsTitle: 'Unlimited Revisions',
    revisionsDescription: 'We optimize design, development, and campaign execution until the solution meets your goals.',
    revisionsImage: 'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/673a038df944f8b1aefac679_Frame (3).svg'
  };

  // Get current variant
  const getCurrentVariant = () => {
    // Custom variant for Web & Mobile App Custom
    if (activeMainTab === 1 && activeSubTab === 2) {
      return 'custom';
    }
    return 'default';
  };

  return (
    <div className="relative box-border caret-transparent flex flex-col">
      {/* Main tabs */}
      <div
        role="tablist"
        className="relative bg-neutral-950 box-border caret-transparent gap-x-6 flex max-w-[356.25px] min-h-[auto] min-w-[auto] gap-y-6 border-neutral-600 overflow-auto mx-auto p-2 rounded-r-none rounded-l-[10px] border-r-0 border-b border-l border-t md:max-w-none md:overflow-visible md:rounded-r-[10px] md:border-r"
      >
        {mainTabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleMainTabClick(index)}
            role="tab"
            className={`relative box-border caret-transparent block shrink-0 tracking-[0.28px] leading-[21px] max-w-full min-h-[auto] min-w-[auto] text-left align-top p-3 rounded-lg md:shrink ${
              activeMainTab === index ? 'text-zinc-50 bg-violet-600' : 'text-zinc-50'
            }`}
          >
            <div className="text-sm box-border caret-transparent leading-[21px] md:text-base md:leading-6">
              {tab.label}
            </div>
          </button>
        ))}
      </div>

      {/* Sub tabs */}
      <div
        role="tablist"
        className="relative bg-neutral-950 box-border caret-transparent gap-x-4 flex max-w-[356.25px] min-h-[auto] min-w-[auto] gap-y-4 border-neutral-600 overflow-auto mx-auto p-2 rounded-[10px] border mt-4 md:max-w-none md:overflow-visible"
      >
        {mainTabs[activeMainTab].subTabs.map((subTab, index) => (
          <button
            key={index}
            onClick={() => handleSubTabClick(index)}
            role="tab"
            className={`relative box-border caret-transparent block shrink-0 tracking-[0.28px] leading-[21px] max-w-full min-h-[auto] min-w-[auto] text-left align-top p-3 rounded-lg md:shrink ${
              activeSubTab === index ? 'text-zinc-50 bg-violet-600' : 'text-zinc-50'
            }`}
          >
            <div className="text-sm box-border caret-transparent leading-[21px] md:text-base md:leading-6">
              {subTab}
            </div>
          </button>
        ))}
      </div>

      {/* Pricing cards */}
      <div className="relative box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto]">
        <PricingCards 
          variant={getCurrentVariant()} 
          packages={getPackagesForCurrentSelection()}
          customPricing={getCurrentVariant() === 'custom' ? customPricingData : undefined}
        />
      </div>
    </div>
  );
};
