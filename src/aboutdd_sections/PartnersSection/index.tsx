import { LogoCarousel } from "@/aboutdd_sections/PartnersSection/components/LogoCarousel";

export const PartnersSection = () => {
  return (
    <div className="box-border caret-transparent overflow-hidden pb-20 md:overflow-visible md:pb-0">
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent px-5 md:px-[94px]">
          <div className="box-border caret-transparent max-w-[1252px] z-[1] mx-auto">
            <div className="items-center box-border caret-transparent gap-x-4 flex flex-col justify-start gap-y-4 text-center">
              <div className="box-border caret-transparent flex">
                <div className="text-green-700 box-border caret-transparent border border-emerald-400 px-3 py-1 rounded-3xl border-solid">
                  <div className="text-sm box-border caret-transparent leading-[21px] md:text-base md:leading-6">
                    Partners
                  </div>
                </div>
              </div>
              <div className="text-neutral-950 box-border caret-transparent">
                <h2 className="text-[28px] font-bold box-border caret-transparent leading-[33.6px] font-redhatdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                  Collaborating with Ambitious{" "}
                  <em className="text-[28px] italic box-border caret-transparent leading-[33.6px] capitalize font-playfairdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                    Startups and Industry
                  </em>
                  Titans Alike
                </h2>
              </div>
            </div>
            <div className="items-center box-border caret-transparent flex flex-col justify-start">
              <div className="items-center box-border caret-transparent flex flex-wrap justify-start w-screen">
                <div className="relative box-border caret-transparent">
                  <LogoCarousel />
                  <div className="absolute bg-purple-400/60 box-border caret-transparent blur-[100px] h-36 max-w-[150px] w-full rounded-[100%] left-[0%] inset-y-[0%] md:h-[390px] md:max-w-[424px]"></div>
                  <div className="absolute bg-green-200/80 box-border caret-transparent blur-[100px] h-36 max-w-[157px] w-full rounded-[100%] left-[187.5px] right-[25px] inset-y-[0%] md:h-80 md:max-w-[349px] md:left-[1152px] md:right-[50px]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
