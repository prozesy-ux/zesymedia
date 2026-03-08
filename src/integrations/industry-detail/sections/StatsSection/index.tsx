import { StatsGrid } from "@/integrations/industry-detail/sections/StatsSection/components/StatsGrid";
import { ImageWithContent } from "@/integrations/industry-detail/sections/StatsSection/components/ImageWithContent";

export const StatsSection = () => {
  return (
    <div className="box-border caret-transparent">
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent px-5 py-[60px] md:px-[94px] md:py-[100px]">
          <div className="box-border caret-transparent max-w-[1252px] w-full z-[1] mx-auto">
            <div className="box-border caret-transparent gap-x-[60px] flex flex-col gap-y-[60px] md:gap-x-[100px] md:gap-y-[100px]">
              <div className="items-center box-border caret-transparent gap-x-8 flex flex-col justify-start min-h-[auto] min-w-[auto] gap-y-8 md:gap-x-14 md:gap-y-14">
                <div className="items-center box-border caret-transparent gap-x-4 flex flex-col justify-start min-h-[auto] min-w-[auto] gap-y-4 text-center">
                  <div className="box-border caret-transparent flex min-h-[auto] min-w-[auto]">
                    <div className="text-green-700 box-border caret-transparent min-h-[auto] min-w-[auto] border border-emerald-400 px-3 py-1 rounded-3xl border-solid">
                      <div className="text-sm box-border caret-transparent leading-[21px] md:text-base md:leading-6">
                        Web Design Success
                      </div>
                    </div>
                  </div>
                  <div className="text-neutral-950 box-border caret-transparent min-h-[auto] min-w-[auto]">
                    <h2 className="text-[28px] font-bold box-border caret-transparent leading-[33.6px] font-redhatdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                      Our{" "}
                      <em className="text-[28px] italic box-border caret-transparent leading-[33.6px] capitalize font-playfairdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                        Impact in Action
                      </em>
                    </h2>
                  </div>
                </div>
                <div className="relative box-border caret-transparent min-h-[auto] min-w-[auto] z-0">
                  <StatsGrid />
                  <div className="absolute bg-emerald-400 box-border caret-transparent blur-[65px] h-40 max-w-40 opacity-70 w-full z-[-1] rounded-[100%] left-[230px] top-[22px] bottom-[0%]"></div>
                  <div className="absolute bg-violet-600 box-border caret-transparent blur-[65px] h-[127px] max-w-44 opacity-70 w-full z-[-1] rounded-[100%] right-[280px] bottom-[123px] md:bottom-[17px]"></div>
                </div>
              </div>
              <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
                <ImageWithContent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
