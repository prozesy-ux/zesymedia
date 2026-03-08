import { IndustryCarousel } from "@/integrations/service-detail/sections/IndustriesSection/components/IndustryCarousel";

export const IndustriesSection = () => {
  return (
    <section className="bg-neutral-950 box-border caret-transparent">
      <div className="box-border caret-transparent py-[60px] md:py-[100px]">
        <div className="box-border caret-transparent max-w-[1252px] w-full mx-auto">
          <div className="items-end box-border caret-transparent flex justify-between px-2.5">
            <div className="items-start box-border caret-transparent gap-x-4 flex flex-col justify-start max-w-[665px] gap-y-4">
              <div className="text-green-500 box-border caret-transparent border border-green-800 px-3 py-1 rounded-3xl border-solid">
                <div className="text-green-700 text-sm box-border caret-transparent tracking-[0.32px] leading-[21px] capitalize md:text-base md:leading-6">
                  Industries
                </div>
              </div>
              <h2 className="text-white text-[28px] font-bold box-border caret-transparent leading-[33.6px] capitalize font-redhatdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                Our Expertise Across Diverse
                <span className="text-[28px] italic box-border caret-transparent inline-block leading-[33.6px] font-playfairdisplay_variablefont_wght md:text-5xl md:inline md:leading-[57.6px]">
                  {" "}
                  Design{" "}
                </span>
                <span className="text-[28px] italic box-border caret-transparent inline-block leading-[33.6px] font-playfairdisplay_variablefont_wght md:text-5xl md:inline md:leading-[57.6px]">
                  Service
                </span>
                <span className="text-[28px] italic box-border caret-transparent inline-block leading-[33.6px] font-playfairdisplay_variablefont_wght md:text-5xl md:inline md:leading-[57.6px]">
                  {" "}
                  Industries
                </span>
              </h2>
            </div>
            <a
              href="/industry"
              className="relative text-violet-600 items-center bg-violet-500 shadow-[rgba(255,255,255,0.72)_0px_2px_3px_0px_inset] box-border caret-transparent hidden flex-col h-14 justify-center max-w-full min-h-0 min-w-0 text-left w-full z-[99] overflow-hidden px-8 py-4 rounded-lg md:flex md:max-w-[158px] md:min-h-[auto] md:min-w-[auto]"
            >
              <div className="relative text-gray-200 box-border caret-transparent min-h-0 min-w-0 w-full md:min-h-[auto] md:min-w-[auto] md:w-auto">
                <div className="relative items-center box-border caret-transparent gap-x-2 flex h-full justify-center gap-y-2 w-full z-[1]">
                  <div className="text-zinc-50 text-base font-bold box-border caret-transparent tracking-[0.32px] leading-[19.2px] min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
                    See All
                  </div>
                  <img
                    src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67adba6a3ab018a0349e2bc2_CTA Arrow (2).svg"
                    alt=""
                    className="box-border caret-transparent h-7 max-w-7 min-h-0 min-w-0 object-contain w-full md:h-6 md:max-w-6 md:min-h-[auto] md:min-w-[auto]"
                  />
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="items-center box-border caret-transparent flex flex-col justify-start">
          <IndustryCarousel />
        </div>
        <div className="box-border caret-transparent mt-6 px-5 md:mt-0 md:px-0">
          <a
            href="https://prozesy.com/projects"
            className="relative text-violet-600 items-center bg-violet-500 shadow-[rgba(255,255,255,0.72)_0px_2px_3px_0px_inset] box-border caret-transparent flex flex-col h-14 justify-center max-w-full text-left w-full z-[99] overflow-hidden px-8 py-4 rounded-lg md:hidden md:max-w-[158px]"
          >
            <div className="relative text-gray-200 box-border caret-transparent min-h-[auto] min-w-[auto] w-full md:min-h-0 md:min-w-0 md:w-auto">
              <div className="relative items-center box-border caret-transparent gap-x-2 flex h-full justify-center gap-y-2 w-full z-[1]">
                <div className="text-zinc-50 text-base font-bold box-border caret-transparent tracking-[0.32px] leading-[19.2px] min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0">
                  See All
                </div>
                <img
                  src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67adba6a3ab018a0349e2bc2_CTA Arrow (2).svg"
                  alt=""
                  className="box-border caret-transparent h-7 max-w-7 min-h-[auto] min-w-[auto] object-contain w-full md:h-6 md:max-w-6 md:min-h-0 md:min-w-0"
                />
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
