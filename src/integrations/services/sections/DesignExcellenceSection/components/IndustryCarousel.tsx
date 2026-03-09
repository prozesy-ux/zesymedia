import { useEffect, useRef } from "react";

interface IndustryCardData {
  id: number;
  href: string;
  imageSrc: string;
  title: string;
  description: string;
}

const industriesData: IndustryCardData[] = [
  {
    id: 1,
    href: "https://www.designmonks.co/industry/hotel-management",
    imageSrc: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6840a79760880a09c69aa5cf_Industry_Hospitality & Travel Industry.avif",
    title: "Hotel Management",
    description: "Get impactful UI/UX for hotel management platforms to improve bookings & streamline guest experiences."
  },
  {
    id: 2,
    href: "https://www.designmonks.co/industry/gaming",
    imageSrc: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6840a68a0dc28dd9070d3062_Industry_Gaming Web design.avif",
    title: "Gaming",
    description: "Gaming websites need seamless UX to captivate players and create unforgettable experiences."
  },
  {
    id: 3,
    href: "https://www.designmonks.co/industry/ecrm-portals",
    imageSrc: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/684bcc71a554a6a4f7377189_eCRM Portal Industry.avif",
    title: "eCRM Portals",
    description: "We design intuitive eCRM portals that boost engagement and strengthen customer loyalty."
  },
  {
    id: 4,
    href: "https://www.designmonks.co/industry/portfolio",
    imageSrc: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6840a6bbd245de2f3acc7fa4_Industry_Portfolio.avif",
    title: "Portfolio",
    description: "Engaging UI/UX solutions built to highlight your portfolio with effortless navigation and style."
  },
  {
    id: 5,
    href: "https://www.designmonks.co/industry/on-demand-services",
    imageSrc: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6840a6e1c9b3f7dd90ca9a96_Industry_On-Demand Services.avif",
    title: "On-Demand Services",
    description: "Create frictionless UI/UX for on-demand platforms that connect users with services they need."
  },
  {
    id: 6,
    href: "https://www.designmonks.co/industry/insurance",
    imageSrc: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6840a6a8fdeab3b99df1b866_Industry_Insurance.avif",
    title: "Insurance",
    description: "Transform insurance experiences with intuitive interfaces that simplify complex processes."
  },
  {
    id: 7,
    href: "https://www.designmonks.co/industry/crypto",
    imageSrc: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6840a66bc8bf00d22bf4b9de_Industry_Crypto Web design.avif",
    title: "Crypto",
    description: "Build trust and engagement with secure, user-friendly crypto platform designs."
  },
  {
    id: 8,
    href: "https://www.designmonks.co/industry/edtech",
    imageSrc: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6840a672ad93dbc07e2c37e6_Industry_EdTech.avif",
    title: "EdTech",
    description: "Design educational platforms that make learning interactive, engaging, and accessible."
  },
  {
    id: 9,
    href: "https://www.designmonks.co/industry/social-media",
    imageSrc: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6840a70ba8b0017d0f8f3b39_Industry_Social Media.avif",
    title: "Social Media",
    description: "Create vibrant, engaging social platforms that keep users connected and coming back."
  },
  {
    id: 10,
    href: "https://www.designmonks.co/industry/fintech",
    imageSrc: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6840a67d2a450a83f5f6e27d_Industry_FinTech Web design.avif",
    title: "FinTech",
    description: "Deliver seamless financial experiences with secure, intuitive fintech solutions."
  }
];

export const IndustryCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add animation styles
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes scrollLeft {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }
      
      .industry-carousel-track {
        animation: scrollLeft 40s linear infinite;
      }
      
      .industry-carousel-track:hover {
        animation-play-state: paused;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Duplicate the items to create seamless infinite scroll
  const duplicatedItems = [...industriesData, ...industriesData];

  return (
    <div className="relative box-border caret-transparent z-0 overflow-hidden mt-6 pt-14 md:mt-0">
      <div
        ref={carouselRef}
        role="presentation"
        className="industry-carousel-track box-border caret-transparent flex h-full"
      >
        {duplicatedItems.map((industry, index) => (
          <div
            key={`${industry.id}-${index}`}
            role="group"
            aria-label={`${(index % industriesData.length) + 1} of ${industriesData.length}`}
            className="relative box-border caret-transparent shrink-0 list-none min-h-[auto] min-w-[auto]"
          >
            <a
              href={industry.href}
              className="text-violet-600 box-border caret-transparent inline-block max-w-full"
            >
              <div className="relative items-stretch box-border caret-transparent flex flex-col shrink-0 h-[350px] justify-end max-w-[250px] w-full z-30 overflow-hidden mx-1.5 p-6 rounded-2xl md:h-96 md:max-w-[416px]">
                <div className="absolute box-border caret-transparent h-full w-full inset-[0%]">
                  <img
                    src={industry.imageSrc}
                    alt={industry.title}
                    className="box-border caret-transparent inline-block h-full max-w-full object-cover align-bottom w-full"
                  />
                </div>
                <div className="relative items-start box-border caret-transparent gap-x-0 flex flex-col justify-end min-h-[auto] min-w-[auto] gap-y-0 w-full z-[2] -mb-2">
                  <div className="text-zinc-50 text-lg font-bold box-border caret-transparent tracking-[0.48px] leading-[21.6px] min-h-[auto] min-w-[auto] z-[2] font-redhatdisplay_variablefont_wght md:text-2xl md:leading-[28.8px]">
                    {industry.title}
                  </div>
                  <div className="text-neutral-300 text-base box-border caret-transparent h-[0%] leading-6 min-h-[auto] min-w-[auto] z-[2] overflow-hidden mt-2">
                    {industry.description}
                  </div>
                </div>
                <div className="absolute bg-[linear-gradient(rgba(23,11,38,0)_27.31%,rgb(15,7,25)_84%)] box-border caret-transparent opacity-60 inset-[0%]"></div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
