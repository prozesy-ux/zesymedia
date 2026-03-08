import { PartnersCarousel } from "@/integrations/industry-detail/sections/PartnersSection/components/PartnersCarousel";

export const PartnersSection = () => {
  return (
    <div className="box-border caret-transparent overflow-hidden pb-20 md:overflow-visible md:pb-0">
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent pt-[60px] px-5 md:pt-[100px] md:px-[94px]">
          <div className="box-border caret-transparent max-w-[1252px] w-full z-[1] mx-auto">
            <div className="items-center box-border caret-transparent gap-x-4 flex flex-col justify-start gap-y-4 text-center">
              <div className="box-border caret-transparent flex min-h-[auto] min-w-[auto]">
                <div className="text-green-700 box-border caret-transparent min-h-[auto] min-w-[auto] border border-emerald-400 px-3 py-1 rounded-3xl border-solid">
                  <div className="text-sm box-border caret-transparent leading-[21px] md:text-base md:leading-6">
                    Partners
                  </div>
                </div>
              </div>
              <div className="text-neutral-950 box-border caret-transparent min-h-[auto] min-w-[auto]">
                <h2 className="text-[28px] font-bold box-border caret-transparent leading-[33.6px] font-redhatdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                  Working Hand-in-Hand with
                  <br className="text-[28px] box-border caret-transparent leading-[33.6px] md:text-5xl md:leading-[57.6px]" />
                  <em className="text-[28px] italic box-border caret-transparent leading-[33.6px] capitalize font-playfairdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                    Ambitious Startups
                  </em>
                  &amp;{" "}
                  <em className="text-[28px] italic box-border caret-transparent leading-[33.6px] capitalize font-playfairdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                    Industry Titans
                  </em>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="relative box-border caret-transparent">
          <PartnersCarousel />
          <div className="absolute bg-purple-400/60 box-border caret-transparent blur-[100px] h-36 max-w-[150px] w-full rounded-[100%] left-[0%] inset-y-[0%] md:h-[390px] md:max-w-[424px]"></div>
          <div className="absolute bg-green-200/80 box-border caret-transparent blur-[100px] h-36 max-w-[157px] w-full rounded-[100%] left-[187.5px] right-[25px] inset-y-[0%] md:h-80 md:max-w-[349px] md:left-[1152px] md:right-[50px]"></div>
        </div>
      </div>
    </div>
  );
};
