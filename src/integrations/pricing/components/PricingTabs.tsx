import { useState } from 'react';
import { PricingCards } from './PricingCards';

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

  console.log('__ANIMA_DBG__ PricingTabs render - activeMainTab:', activeMainTab);

  const metaAdsPackages = [
    {
      price: '$2,500/mo',
      priceSubtext: 'Monthly management',
      title: 'Meta Ads Starter',
      features: ['$5K-$15K Ad Spend', 'Campaign Setup & Management', 'Audience Targeting', 'Creative Testing (3 variants)', 'Weekly Performance Reports', 'Monthly Strategy Call'],
      ctaUrl: '#',
      ctaText: 'Get Started'
    },
    {
      price: '$4,500/mo',
      priceSubtext: 'Monthly management',
      title: 'Meta Ads Growth',
      features: ['$15K-$50K Ad Spend', 'Advanced Campaign Structure', 'Custom Audience Building', 'Creative Testing (5+ variants)', 'Retargeting Campaigns', 'Bi-weekly Strategy Calls', 'ROAS Optimization'],
      ctaUrl: '#',
      ctaText: 'Get Started',
      isPopular: true
    },
    {
      price: '$8,500/mo',
      priceSubtext: 'Monthly management',
      title: 'Meta Ads Scale',
      features: ['$50K+ Ad Spend', 'Full-Funnel Strategy', 'Lookalike Audiences', 'Advanced Creative Testing', 'Conversion Tracking Setup', 'Weekly Strategy Calls', 'Dedicated Account Manager', 'Custom Reporting Dashboard'],
      ctaUrl: '#',
      ctaText: 'Get Started'
    }
  ];

  const googleAdsPackages = [
    {
      price: '$2,000/mo',
      priceSubtext: 'Monthly management',
      title: 'Google Ads Starter',
      features: ['$5K-$15K Ad Spend', 'Search Campaign Setup', 'Keyword Research', 'Ad Copy Testing', 'Conversion Tracking', 'Monthly Reports'],
      ctaUrl: '#',
      ctaText: 'Get Started'
    },
    {
      price: '$4,000/mo',
      priceSubtext: 'Monthly management',
      title: 'Google Ads Growth',  
      features: ['$15K-$50K Ad Spend', 'Search + Display Campaigns', 'Advanced Keyword Strategy', 'Negative Keyword Management', 'Shopping Campaigns', 'Bi-weekly Optimization', 'CPA Optimization'],
      ctaUrl: '#',
      ctaText: 'Get Started',
      isPopular: true
    },
    {
      price: '$7,500/mo',
      priceSubtext: 'Monthly management',
      title: 'Google Ads Scale',
      features: ['$50K+ Ad Spend', 'Multi-Channel Strategy', 'YouTube Ads', 'Performance Max Campaigns', 'Advanced Bidding Strategies', 'Weekly Calls', 'Dedicated Manager', 'Custom Dashboards'],
      ctaUrl: '#',
      ctaText: 'Get Started'
    }
  ];

  const combinedAdsPackages = [
    {
      price: '$4,000/mo',
      priceSubtext: 'Monthly management',
      title: 'Meta + Google Starter',
      features: ['$10K-$25K Combined Spend', 'Meta & Google Campaign Setup', 'Cross-Platform Strategy', 'Unified Reporting', 'Creative & Copy Testing', 'Monthly Strategy Call'],
      ctaUrl: '#',
      ctaText: 'Get Started'
    },
    {
      price: '$7,500/mo',
      priceSubtext: 'Monthly management',
      title: 'Meta + Google Growth',      
      features: ['$25K-$75K Combined Spend', 'Full-Funnel Advertising', 'Retargeting Across Platforms', 'Advanced Audience Segmentation', 'Bi-weekly Optimization', 'Blended ROAS Tracking', '2x Monthly Strategy Calls'],
      ctaUrl: '#',
      ctaText: 'Get Started',
      isPopular: true
    },
    {
      price: '$14,000/mo',
      priceSubtext: 'Monthly management',
      title: 'Meta + Google Enterprise',
      features: ['$75K+ Combined Spend', 'Enterprise Campaign Architecture', 'Cross-Platform Attribution', 'Weekly Strategy Sessions', 'Dedicated Growth Team', 'Custom Analytics & Dashboards', 'Priority Support', 'Quarterly Business Reviews'],
      ctaUrl: '#',
      ctaText: 'Get Started'
    }
  ];

  const retargetingPackages = [
    {
      price: '$1,500/mo',
      priceSubtext: 'Monthly management',
      title: 'Retargeting Essentials',
      features: ['Meta Retargeting Setup', 'Google Remarketing', 'Abandoned Cart Campaigns', 'Basic Segmentation', '3-5 Ad Variants', 'Monthly Reports'],
      ctaUrl: '#',
      ctaText: 'Get Started'
    },
    {
      price: '$3,000/mo',
      priceSubtext: 'Monthly management',
      title: 'Retargeting Advanced',
      features: ['Multi-Platform Retargeting', 'Advanced Segmentation', 'Dynamic Product Ads', 'Sequential Messaging', 'Email Integration', 'Bi-weekly Optimization', 'ROAS Focus'],
      ctaUrl: '#',
      ctaText: 'Get Started',
      isPopular: true
    },
    {
      price: '$5,500/mo',
      priceSubtext: 'Monthly management',
      title: 'Retargeting Enterprise',
      features: ['Full-Funnel Retargeting', 'Cross-Device Tracking', 'Predictive Audience Building', 'CRM Integration', 'Custom Creative Development', 'Weekly Optimization', 'Dedicated Specialist'],
      ctaUrl: '#',
      ctaText: 'Get Started'
    }
  ];

  const seoPackages = [
    {
      price: '$2,500/mo',
      priceSubtext: 'Monthly service',
      title: 'SEO Foundation',
      features: ['Technical SEO Audit', 'Keyword Research', 'On-Page Optimization (10 pages)', 'Content Strategy', 'Monthly Ranking Reports', 'Basic Link Building'],
      ctaUrl: '#',
      ctaText: 'Get Started'
    },
    {
      price: '$4,500/mo',
      priceSubtext: 'Monthly service',
      title: 'SEO Growth',
      features: ['Advanced Technical SEO', 'Competitive Analysis', 'On-Page Optimization (25 pages)', 'Content Creation (4 articles/mo)', 'Link Building Campaign', 'Local SEO (if needed)', 'Bi-weekly Reports'],
      ctaUrl: '#',
      ctaText: 'Get Started',
      isPopular: true
    },
    {
      price: '$8,000/mo',
      priceSubtext: 'Monthly service',
      title: 'SEO Enterprise',
      features: ['Enterprise SEO Strategy', 'Unlimited Page Optimization', 'Content Hub Development', '8+ Articles per Month', 'Advanced Link Building', 'Conversion Rate Optimization', 'Weekly Performance Calls', 'Dedicated SEO Manager'],
      ctaUrl: '#',
      ctaText: 'Get Started'
    }
  ];

  const getPackagesForTab = (tabIndex: number) => {
    console.log('__ANIMA_DBG__ getPackagesForTab called with:', tabIndex);
    switch (tabIndex) {
      case 0: return metaAdsPackages;
      case 1: return googleAdsPackages;
      case 2: return combinedAdsPackages;
      case 3: return retargetingPackages;
      case 4: return seoPackages;
      default: return metaAdsPackages;
    }
  };

  return (
    <div className="relative box-border caret-transparent flex flex-col">
      <div
        role="tablist"
        className="relative bg-neutral-950 box-border caret-transparent gap-x-6 flex max-w-[356.25px] min-h-[auto] min-w-[auto] gap-y-6 border-neutral-600 overflow-auto mx-auto p-2 rounded-r-none rounded-l-[10px] border-r-0 border-b border-l border-t md:max-w-none md:overflow-visible md:rounded-r-[10px] md:border-r"
      >
        <button
          onClick={() => handleMainTabClick(0)}
          role="tab"
          className={`relative box-border caret-transparent block shrink-0 tracking-[0.28px] leading-[21px] max-w-full min-h-[auto] min-w-[auto] text-left align-top p-3 rounded-lg md:shrink ${
            activeMainTab === 0 ? 'text-zinc-50 bg-violet-600' : 'text-zinc-50'
          }`}
        >
          <div className="text-sm box-border caret-transparent leading-[21px] md:text-base md:leading-6">
            Meta Ads
          </div>
        </button>
        <button
          onClick={() => handleMainTabClick(1)}
          role="tab"
          className={`relative box-border caret-transparent block shrink-0 tracking-[0.28px] leading-[21px] max-w-full min-h-[auto] min-w-[auto] text-left align-top p-3 md:shrink ${
            activeMainTab === 1 ? 'text-zinc-50 bg-violet-600' : 'text-zinc-50'
          }`}
        >
          <div className="text-sm box-border caret-transparent leading-[21px] md:text-base md:leading-6">
            Google Ads
          </div>
        </button>
        <button
          onClick={() => handleMainTabClick(2)}
          role="tab"
          className={`relative box-border caret-transparent block shrink-0 tracking-[0.28px] leading-[21px] max-w-full min-h-[auto] min-w-[auto] text-left align-top p-3 md:shrink ${
            activeMainTab === 2 ? 'text-zinc-50 bg-violet-600' : 'text-zinc-50'
          }`}
        >
          <div className="text-sm box-border caret-transparent leading-[21px] md:text-base md:leading-6">
            Meta + Google
          </div>
        </button>
        <button
          onClick={() => handleMainTabClick(3)}
          role="tab"
          className={`relative box-border caret-transparent block shrink-0 tracking-[0.28px] leading-[21px] max-w-full min-h-[auto] min-w-[auto] text-left align-top p-3 md:shrink ${
            activeMainTab === 3 ? 'text-zinc-50 bg-violet-600' : 'text-zinc-50'
          }`}
        >
          <div className="text-sm box-border caret-transparent leading-[21px] md:text-base md:leading-6">
            Retargeting
          </div>
        </button>
        <button
          onClick={() => handleMainTabClick(4)}
          role="tab"
          className={`relative box-border caret-transparent block shrink-0 tracking-[0.28px] leading-[21px] max-w-full min-h-[auto] min-w-[auto] text-left align-top p-3 md:shrink ${
            activeMainTab === 4 ? 'text-zinc-50 bg-violet-600' : 'text-zinc-50'
          }`}
        >
          <div className="text-sm box-border caret-transparent leading-[21px] md:text-base md:leading-6">
            SEO
          </div>
        </button>
      </div>
      <div className="relative box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto]">
        <PricingCards variant="default" packages={getPackagesForTab(activeMainTab)} />
      </div>
    </div>
  );
};
