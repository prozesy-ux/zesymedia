import { useEffect, useRef, useState } from "react";
import { IndustryCard } from "@/integrations/service-detail/sections/IndustriesSection/components/IndustryCard";

const industries = [
  {
    title: "Hotel Management",
    description: "Get impactful UI/UX for hotel management platforms to improve bookings & streamline guest experiences.",
    imageUrl: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6840a79760880a09c69aa5cf_Industry_Hospitality & Travel Industry.avif",
    href: "/industry/hotel-management"
  },
  {
    title: "Gaming",
    description: "Gaming websites need seamless UX to captivate players and create unforgettable experiences.",
    imageUrl: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6840a68a0dc28dd9070d3062_Industry_Gaming Web design.avif",
    href: "/industry/gaming"
  },
  {
    title: "eCRM Portals",
    description: "We design intuitive eCRM portals that boost engagement and strengthen customer loyalty.",
    imageUrl: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/684bcc71a554a6a4f7377189_eCRM Portal Industry.avif",
    href: "/industry/ecrm-portals"
  },
  {
    title: "Portfolio",
    description: "Engaging UI/UX solutions built to highlight your portfolio with effortless navigation and style.",
    imageUrl: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6840a6bbd245de2f3acc7fa4_Industry_Portfolio.avif",
    href: "/industry/portfolio"
  },
  {
    title: "On‑Demand Services",
    description: "Your on-demand platform deserves smooth design that builds confidence and keeps users connected.",
    imageUrl: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/684bcbf0349c5fa200ec7ee4_On-Demand Service.avif",
    href: "/industry/on-demand-services"
  },
  {
    title: "Transportation & Logistics",
    description: "Effective UI/UX that boosts efficiency, real-time tracking, and enhances user control in logistics.",
    imageUrl: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/686b45259af34177290712ce_Transportation & Logistics ✅.avif",
    imageClassName: "aspect-[auto_416_/_384] box-border caret-transparent inline-block h-full max-w-full object-cover align-bottom w-full",
    href: "/industry/transportation-logistics"
  },
  {
    title: "SaaS",
    description: "Effective SaaS UI/UX solutions that enhance usability, build trust, and drive subscription growth.",
    imageUrl: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6840a6d281f9b991aec28eac_Industry_SaaS.avif",
    href: "/industry/saas"
  },
  {
    title: "Real Estate",
    description: "Innovative UI/UX design for real estate platforms that boosts engagement, trust, and lead conversions.",
    imageUrl: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6840a6de8b900052ace6150e_Industry_Real Estate.avif",
    href: "/industry/real-estate"
  },
  {
    title: "Mental Health Services",
    description: "User-centered UI/UX solutions that simplify appointments, consultations, and create a safe digital space.",
    imageUrl: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6840a6e8c80bb385323e66a0_Industry_Mental Health Services.avif",
    href: "/industry/mental-health-services"
  },
  {
    title: "Legal Services",
    description: "Your legal practice deserves intuitive design that improves user confidence and streamlines document management.",
    imageUrl: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/686b44db0aa9997b176415e2_Legal Services ✅.avif",
    imageClassName: "aspect-[auto_416_/_384] box-border caret-transparent inline-block h-full max-w-full object-cover align-bottom w-full",
    href: "/industry/legal-services"
  },
  {
    title: "IT Solutions",
    description: "Innovative UI/UX strategies that boost productivity and keep users engaged with your IT solutions.",
    imageUrl: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6840a6f78117758eda324e75_Industry_IT Solutions.avif",
    href: "/industry/it-solutions"
  },
  {
    title: "Insurance",
    description: "We create straightforward UI/UX for insurance businesses to simplify policies and increase customer trust.",
    imageUrl: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6840a716fa67ce4e051a1582_Industry_Insurance.avif",
    href: "/industry/insurance"
  },
  {
    title: "Food & Beverages",
    description: "Smart UI/UX designs for food and beverage platforms that simplify browsing, ordering, and delivery tracking.",
    imageUrl: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6840a72011a14b1864c5ac8b_Industry_Food & Beverages.avif",
    href: "/industry/food-beverages"
  },
  {
    title: "Fitness & Gym",
    description: "Your fitness brand deserves intuitive design that encourages consistency and keeps users actively engaged.",
    imageUrl: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6840a728985a398f5510b16a_Industry_Fitness & Gym.avif",
    href: "/industry/fitness-gym"
  },
  {
    title: "Fashion & Apparel",
    description: "Distinct digital experiences for apparel businesses that combine aesthetics, usability, and smooth shopping journeys.",
    imageUrl: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6840a73a0775571eff9491e1_Industry_Fashion & Apparel.avif",
    href: "/industry/fashion-apparel"
  },
  {
    title: "Event Management",
    description: "Modern UI/UX solutions for event platforms to enhance discovery, streamline booking, and drive engagement.",
    imageUrl: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6840a74389d8fd1793261fa4_Industry_Event Management.avif",
    href: "/industry/event-management"
  },
  {
    title: "Entertainment",
    description: "Personalize digital experiences for entertainment brands to streamline access, boost retention, and delight every interaction.",
    imageUrl: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6840a752b6275fd32d629136_Industry_Entertainment.avif",
    href: "/industry/entertainment"
  },
  {
    title: "Electronics",
    description: "Modern design solutions for electronics brands that boost usability, increase retention, and drive consistent engagement.",
    imageUrl: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/684bcbe7d86fe807243059c4_Electronics.avif",
    href: "/industry/electronics"
  },
  {
    title: "Tourism",
    description: "We create smooth UX designs for tourism websites to simplify travel planning and inspire confident bookings.",
    imageUrl: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6840a765c1b2b8973eef9bdd_Industry_Tourism.avif",
    href: "/industry/tourism"
  },
  {
    title: "Social Media Platforms",
    description: "Your social media platform deserves smooth, intuitive design that transforms visitors into loyal users.",
    imageUrl: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/684bcbde8354211e0caa7d30_Social Media Platforms.avif",
    href: "/industry/social-media-platforms"
  },
  {
    title: "HealthTech Startups",
    description: "Intuitive UI/UX design that supports healthcare professionals in making fast, accurate, and confident decisions.",
    imageUrl: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6840a774cff1d004e34f8120_Industry_HealthTech Startups.avif",
    href: "/industry/healthtech-startups"
  },
  {
    title: "EdTech",
    description: "Your education product deserves user-focused design that makes digital learning feel natural, fast, and frustration-free.",
    imageUrl: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6840a77f6939a9607610db19_Industry_EdTech.avif",
    href: "/industry/edtech"
  },
  {
    title: "Renewable Energy",
    description: "We deliver user-focused UX designs that simplify renewable energy info and inspire sustainable choices.",
    imageUrl: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/686e48291803991fb851a6bc_Industry_Renewable Energy.avif",
    href: "/industry/renewable-energy",
    imageClassName: "aspect-[auto_416_/_384] box-border caret-transparent inline-block h-full max-w-full object-cover align-bottom w-full"
  },
  {
    title: "Fintech",
    description: "We deliver secure and user-friendly FinTech UX to simplify transactions and build lasting customer trust.",
    imageUrl: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6840a79fdf6e61d09c641734_Industry_FinTech.avif",
    href: "/industry/fintech"
  },
  {
    title: "Automotive",
    description: "Empower your automotive businesses with intuitive UI/UX to simplify journeys and build stronger brands.",
    imageUrl: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6840a7a7baeed139263297a9_Industry_Automotive.avif",
    href: "/industry/automotive"
  },
  {
    title: "Business Consulting",
    description: "Smart UI/UX solutions for consulting firms to help communicate value, build credibility, and drive conversions.",
    imageUrl: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6840a7b0e6545795f963f1ac_Industry_Business Consulting.avif",
    href: "/industry/business-consulting"
  },
  {
    title: "Cybersecurity",
    description: "We create secure, modern UI/UX for cybersecurity brands to build instant trust and user confidence.",
    imageUrl: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/684bcbc81d295b59aca6e277_Cybersecurity.avif",
    href: "/industry/cybersecurity"
  },
  {
    title: "AI & Machine learning",
    description: "We deliver smart & responsive UI/UX for AI platforms to help boost usability, trust, and user retention.",
    imageUrl: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6840a7c102389addcf09837d_Industry_AI & Machine learning.avif",
    href: "/industry/ai-machine-learning"
  },
  {
    title: "Construction",
    description: "Your construction brand deserves a professional digital presence to convert leads and support business growth.",
    imageUrl: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6840a7cbe2733b53303af16a_Industry_Construction.avif",
    href: "/industry/construction"
  },
  {
    title: "Beauty & Cosmetics",
    description: "Enhance your beauty brand experiences with elegant UX to increase sales, loyalty, and customer satisfaction.",
    imageUrl: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6840a7d575c5622f63978b93_Industry_Beauty & Cosmetics.png",
    href: "/industry/beauty-cosmetics"
  }
];

export const IndustryCarousel = () => {
  const [offset, setOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    let lastTime = Date.now();
    const speed = 30; // pixels per second

    const animate = () => {
      const currentTime = Date.now();
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      setOffset((prevOffset) => {
        const newOffset = prevOffset + speed * deltaTime;
        
        // Calculate total width of one set of cards
        // Each card is approximately 440px (416px + margins)
        const cardWidth = 440;
        const totalWidth = industries.length * cardWidth;
        
        // Reset when we've scrolled through one complete set
        if (newOffset >= totalWidth) {
          return newOffset - totalWidth;
        }
        
        return newOffset;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Triple the industries array for seamless looping
  const tripleIndustries = [...industries, ...industries, ...industries];

  return (
    <div className="items-center box-border caret-transparent gap-x-2 justify-start gap-y-2 w-screen">
      <div role="region" className="relative box-border caret-transparent">
        <div className="relative box-border caret-transparent z-0 overflow-hidden mt-6 pt-14 md:mt-0">
          <div
            ref={containerRef}
            role="presentation"
            className="box-border caret-transparent flex h-full transition-transform"
            style={{ transform: `translateX(-${offset}px)` }}
          >
            {tripleIndustries.map((industry, index) => (
              <div
                key={`${industry.title}-${index}`}
                role="group"
                aria-label={`${(index % industries.length) + 1} of ${industries.length}`}
                className="relative box-border caret-transparent shrink-0 list-none"
              >
                <IndustryCard {...industry} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="box-border caret-transparent before:accent-auto before:caret-transparent before:text-zinc-800 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-outfit_variablefont_wght after:accent-auto after:caret-transparent after:clear-both after:text-zinc-800 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-outfit_variablefont_wght"></div>
    </div>
  );
};
