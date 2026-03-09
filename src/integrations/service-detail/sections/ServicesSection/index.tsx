import { useEffect, useState } from "react";
import { ServiceCard } from "@/integrations/service-detail/sections/ServicesSection/components/ServiceCard";
import { servicesData, Service } from "@/integrations/services/data/servicesData";

export const ServicesSection = () => {
  const [currentService, setCurrentService] = useState<Service | null>(null);

  useEffect(() => {
    const getServiceIdFromUrl = () => {
      const path = window.location.pathname;
      const match = path.match(/\/services\/([^/]+)/);
      return match ? match[1] : null;
    };

    const serviceId = getServiceIdFromUrl();
    if (serviceId) {
      const service = servicesData.find((s) => s.id === serviceId);
      setCurrentService(service || null);
    }
  }, []);

  const handleItemClick = (itemSlug: string) => {
    if (currentService) {
      window.history.pushState(null, "", `/services/${currentService.id}/${itemSlug}`);
      window.dispatchEvent(new Event("locationchange"));
    }
  };

  if (!currentService) {
    return null;
  }

  return (
    <div className="relative box-border caret-transparent overflow-clip rounded-[20px] md:rounded-[32px]">
      <div className="box-border caret-transparent">
        <div className="bg-neutral-950 box-border caret-transparent">
          <div className="box-border caret-transparent px-5 py-[60px] md:px-[94px] md:py-[100px]">
            <div className="box-border caret-transparent max-w-[1252px] w-full z-[1] mx-auto">
              <div className="box-border caret-transparent gap-x-[60px] flex flex-col gap-y-[60px] md:gap-x-[100px] md:gap-y-[100px]">
                <div className="items-center box-border caret-transparent gap-x-8 flex flex-col justify-start gap-y-8 md:gap-x-14 md:gap-y-14">
                  <div className="items-center box-border caret-transparent gap-x-4 flex flex-col justify-start gap-y-4 text-center">
                    <div className="box-border caret-transparent flex">
                      <div className="text-green-500 box-border caret-transparent border border-green-800 px-3 py-1 rounded-3xl border-solid">
                        <div className="text-sm box-border caret-transparent leading-[21px] md:text-base md:leading-6">
                          What We Offer
                        </div>
                      </div>
                    </div>
                    <div className="text-zinc-50 box-border caret-transparent">
                      <h2 className="text-[28px] font-bold box-border caret-transparent leading-[33.6px] font-redhatdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                        Our{" "}
                        <span className="text-[28px] italic box-border caret-transparent leading-[33.6px] capitalize font-playfairdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                          <em className="text-[28px] box-border caret-transparent leading-[33.6px] md:text-5xl md:leading-[57.6px]">
                            {currentService.title}
                          </em>
                        </span>
                        <br className="text-[28px] box-border caret-transparent leading-[33.6px] md:text-5xl md:leading-[57.6px]" />
                        Services
                      </h2>
                    </div>
                  </div>
                  <div className="box-border caret-transparent gap-x-8 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-8 w-full md:grid-cols-[1fr_1fr_1fr]">
                    {currentService.services.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => handleItemClick(item.slug)}
                        className="cursor-pointer"
                      >
                        <ServiceCard
                          iconUrl="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67b5bc3e78d0ad0b137c46b9_Frame (41).avif"
                          iconAlt=""
                          title={item.title}
                          description={item.title}
                        />
                      </div>
                    ))}
                  </div>
                  <a
                    href="/contact"
                    className="relative text-violet-600 items-center bg-[linear-gradient(rgb(89,45,181)_25%,rgb(125,64,255))] shadow-[rgba(255,255,255,0.72)_0px_1.6px_3px_0px_inset] box-border caret-transparent flex flex-col h-14 justify-center max-w-full text-left w-full z-[5] overflow-hidden rounded-lg md:max-w-[177px]"
                  >
                    <div className="absolute items-center bg-neutral-400 box-border caret-transparent flex h-full justify-center w-full inset-[0%]">
                      <div className="absolute bg-[linear-gradient(90deg,rgba(255,255,255,0.79)_61%,rgb(255,255,255)_75%)] box-border caret-transparent blur-[6px] h-20 translate-y-[-50.0%] w-full left-2/4 right-[0%] top-2/4 bottom-[0%]"></div>
                    </div>
                    <div className="absolute bg-[linear-gradient(rgb(89,45,181)_25%,rgb(125,64,255))] box-border caret-transparent m-[1.3px] rounded-lg inset-[0%]"></div>
                    <div className="relative text-gray-200 box-border caret-transparent w-full md:w-auto">
                      <div className="relative items-center box-border caret-transparent gap-x-2 flex h-full justify-center gap-y-2 w-full z-[1]">
                        <div className="text-zinc-50 text-base font-bold box-border caret-transparent tracking-[0.32px] leading-[19.2px]">
                          Start Project
                        </div>
                        <img
                          src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67adba6a3ab018a0349e2bc2_CTA Arrow (2).svg"
                          alt=""
                          className="box-border caret-transparent h-7 max-w-7 object-contain w-full md:h-6 md:max-w-6"
                        />
                      </div>
                    </div>
                    <img
                      src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/672a7a8e3a6aba070d15d4c0_Star 6.avif"
                      alt=""
                      className="absolute box-border caret-transparent max-w-full right-[0%] top-[0%]"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
