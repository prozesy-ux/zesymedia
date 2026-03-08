import { useRef, useState, useEffect } from "react";
import { ServiceCard } from "@/sections/ServicesSection/components/ServiceCard";
import { useInView } from "framer-motion";

const services = [
  {
    id: 0,
    titlePrefix: "UI/UX",
    titleSuffix: "Design",
    description:
      "UI/UX Design, App Design, Website Design, Dashboard Design, Wireframing & Prototyping, Interaction Design, and Product Design.",
    linkHref: "/services/ui-ux",
    images: [
      "https://c.animaapp.com/mkiynesyxwO7zZ/assets/679a9c4888217669122eebaf_3d41798d228903d42862a148dd56aeb1_Project_Cards_(10)_(1).avif",
      "https://c.animaapp.com/mkiynesyxwO7zZ/assets/67ac78087a5b72120cc3e5db_d1a5f14e5e5fc69f2dbac575600f06f4_Project_Cards-6.avif",
    ],
  },
  {
    id: 1,
    titlePrefix: "Web",
    titleSuffix: "Development",
    description:
      "Frontend Development, Backend Development, Full Stack Solutions, Mobile App Development, Custom Web Applications, API Integration.",
    linkHref: "/services/web-design",
    images: [
      "https://c.animaapp.com/mkiynesyxwO7zZ/assets/67ac78084947770a14f1eb7c_d1cec41f22346c1c941376236623384b_Project_Cards.avif",
      "https://c.animaapp.com/mkiynesyxwO7zZ/assets/67ac78089c9a93e810fbfa6e_Project_Cards-1.avif",
    ],
  },
  {
    id: 2,
    titlePrefix: "Logo & Branding",
    titleSuffix: "",
    description:
      "Logo Design, Full Branding, Business Branding, 3d logo, Custom Logo, Visual Identity, Brand Strategy, Social Media Branding, and Brand Guidelines.",
    linkHref: "/services/logo-branding",
    images: [
      "https://c.animaapp.com/mkiynesyxwO7zZ/assets/67ac7809638da68108df9847_Project_Cards-4.avif",
      "https://c.animaapp.com/mkiynesyxwO7zZ/assets/67ac78089a0d6cfed1675211_Project_Cards-5.avif",
    ],
  },
  {
    id: 3,
    titlePrefix: "Webflow",
    titleSuffix: "Framer",
    description:
      "Custom Webflow Websites, Webflow Plugin, Framer Prototypes, Framer Material, Framer App, CMS Integration, Rapid Development.",
    linkHref: "/services/framer-design",
    images: [
      "https://c.animaapp.com/mkiynesyxwO7zZ/assets/67ac780912dabe81710b65ed_8e70a34a4056237eca17e1209cecdebe_Project_Cards-2.avif",
      "https://c.animaapp.com/mkiynesyxwO7zZ/assets/67ac78088c2757d4cdf75977_Project_Cards-3.avif",
    ],
  },
];

const ServiceImageGroup = ({
  images,
  index,
  setActiveService,
}: {
  images: string[];
  index: number;
  setActiveService: (i: number) => void;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    if (isInView) {
      setActiveService(index);
    }
  }, [isInView, index, setActiveService]);

  return (
    <div
      ref={ref}
      className="items-start box-border caret-transparent gap-x-[22px] flex flex-col h-auto gap-y-[22px] w-full md:gap-x-8 md:flex-row md:h-[680px] md:gap-y-8 md:w-auto"
    >
      <div className="relative bg-black box-border caret-transparent h-[270px] max-w-full w-full overflow-hidden p-[0.4px] rounded-lg md:h-[556px] md:max-w-[396px]">
        <img
          src={images[0]}
          alt=""
          className="box-border caret-transparent inline-block h-full max-w-full object-cover object-[50%_0%] w-full"
        />
      </div>
      <div className="relative bg-black box-border caret-transparent h-[270px] max-w-full w-full overflow-hidden mt-0 p-[0.4px] rounded-lg md:h-[556px] md:max-w-[396px] md:mt-[120px]">
        <img
          src={images[1]}
          alt=""
          className="box-border caret-transparent inline-block h-full max-w-full object-cover object-[50%_0%] w-full"
        />
      </div>
    </div>
  );
};

export const ServicesSection = () => {
  const [activeService, setActiveService] = useState(0);

  return (
    <section className="relative bg-neutral-950 box-border caret-transparent rounded-[32px]">
      <div className="box-border caret-transparent py-[60px] md:py-[100px]">
        <div className="box-border caret-transparent z-[1] px-5 md:px-[94px]">
          <div className="box-border caret-transparent max-w-[1252px] w-full mx-auto">
            <div className="box-border caret-transparent">
              <div className="box-border caret-transparent gap-x-2 flex flex-col gap-y-2 md:gap-x-4 md:gap-y-4">
                <div className="box-border caret-transparent flex justify-start mb-2">
                  <div className="text-green-700 box-border caret-transparent border border-emerald-400 px-3 py-1 rounded-3xl border-solid">
                    <div className="text-sm box-border caret-transparent tracking-[0.32px] leading-[21px] capitalize md:text-base md:leading-6">
                      What We Do
                    </div>
                  </div>
                </div>
                <div className="box-border caret-transparent">
                  <h2 className="text-white text-[28px] font-bold box-border caret-transparent leading-[33.6px] capitalize font-redhatdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                    <span className="text-[28px] box-border caret-transparent leading-[33.6px] md:text-5xl md:leading-[57.6px]">
                      We Design{" "}
                    </span>
                    <span className="text-[28px] italic box-border caret-transparent inline-block leading-[33.6px] font-playfairdisplay_variablefont_wght md:text-5xl md:inline md:leading-[57.6px]">
                      Brands
                    </span>
                    <span className="text-[28px] box-border caret-transparent leading-[33.6px] md:text-5xl md:leading-[57.6px]">
                      {" "}
                      That{" "}
                    </span>
                    <span className="text-[28px] italic box-border caret-transparent inline-block leading-[33.6px] font-playfairdisplay_variablefont_wght md:text-5xl md:inline md:leading-[57.6px]">
                      Speak
                    </span>
                    <span className="text-[28px] box-border caret-transparent leading-[33.6px] md:text-5xl md:leading-[57.6px]">
                      <em className="text-[28px] italic box-border caret-transparent leading-[33.6px] font-playfairdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]"></em>
                      to Audiences
                    </span>
                  </h2>
                </div>
              </div>

              <div className="items-start box-border caret-transparent gap-x-8 flex flex-col justify-start gap-y-8 mt-8 md:flex-row md:mt-14">
                {/* Left Side - Sticky Text (Desktop) */}
                <div className="sticky top-[150px] bg-neutral-950 box-border caret-transparent h-auto max-w-full w-full z-[999] py-5 md:bg-transparent md:h-[400px] md:max-w-[396px] md:z-auto md:py-0 self-start hidden md:block">
                  <div className="relative box-border caret-transparent h-full w-full">
                    {services.map((service, index) => (
                      <div
                        key={service.id}
                        className={`absolute top-0 left-0 w-full transition-all duration-500 ease-in-out ${
                          activeService === index
                            ? "opacity-100 translate-y-0 pointer-events-auto"
                            : "opacity-0 translate-y-8 pointer-events-none"
                        }`}
                      >
                        <ServiceCard
                          titlePrefix={service.titlePrefix}
                          titleSuffix={service.titleSuffix}
                          description={service.description}
                          linkHref={service.linkHref}
                          variant=""
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile View - Interleaved */}
                <div className="md:hidden w-full flex flex-col gap-12">
                  {services.map((service) => (
                    <div key={service.id} className="flex flex-col gap-6">
                      <ServiceCard
                        titlePrefix={service.titlePrefix}
                        titleSuffix={service.titleSuffix}
                        description={service.description}
                        linkHref={service.linkHref}
                        variant=""
                      />
                      <div className="flex flex-col gap-4">
                        {service.images.map((img, i) => (
                          <div
                            key={i}
                            className="relative bg-black box-border caret-transparent h-[270px] w-full overflow-hidden p-[0.4px] rounded-lg"
                          >
                            <img
                              src={img}
                              alt=""
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Right Side - Scrolling Images (Desktop) */}
                <div className="hidden md:flex items-center box-border caret-transparent gap-x-[50px] basis-[0%] flex-col grow gap-y-[50px] w-full md:[align-items:normal] md:w-3/5">
                  {services.map((service, index) => (
                    <ServiceImageGroup
                      key={service.id}
                      images={service.images}
                      index={index}
                      setActiveService={setActiveService}
                    />
                  ))}
                </div>
              </div>

              <div className="relative items-center box-border caret-transparent flex justify-center mt-10 md:mt-14">
                <a
                  href="/contact"
                  className="relative text-violet-600 items-center bg-[linear-gradient(rgb(89,45,181)_25%,rgb(125,64,255))] shadow-[rgba(255,255,255,0.72)_0px_1.6px_3px_0px_inset] box-border caret-transparent flex flex-col h-14 justify-center max-w-full text-left w-full z-[5] overflow-hidden rounded-lg md:max-w-[177px]"
                >
                  <div className="absolute items-center bg-neutral-400 box-border caret-transparent flex h-full justify-center rotate-[-125.28359891018994deg] w-full inset-[0%] md:transform-none">
                    <div className="absolute bg-[linear-gradient(90deg,rgba(255,255,255,0.79)_61%,rgb(255,255,255)_75%)] box-border caret-transparent blur-[6px] h-20 -translate-y-10 w-full left-2/4 right-[0%] top-2/4 bottom-[0%] md:translate-y-[-50.0%]"></div>
                  </div>
                  <div className="absolute bg-[linear-gradient(rgb(89,45,181)_25%,rgb(125,64,255))] box-border caret-transparent rounded-lg inset-[0%]"></div>
                  <div className="relative text-gray-200 box-border caret-transparent w-full md:w-auto">
                    <div className="relative items-center box-border caret-transparent gap-x-2 flex h-full justify-center gap-y-2 w-full z-[1]">
                      <div className="text-zinc-50 text-base font-bold box-border caret-transparent tracking-[0.32px] leading-[19.2px]">
                        Book a Call
                      </div>
                      <img
                        src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/67adba6a3ab018a0349e2bc2_CTA_Arrow_(2).svg"
                        alt=""
                        className="box-border caret-transparent h-7 max-w-7 object-contain w-full md:h-6 md:max-w-6"
                      />
                    </div>
                  </div>
                  <img
                    src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/672a7a8e3a6aba070d15d4c0_Star_6.avif"
                    alt=""
                    className="absolute box-border caret-transparent max-w-full right-[0%] top-[0%]"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
