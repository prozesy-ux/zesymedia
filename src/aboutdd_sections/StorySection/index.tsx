import { FounderImages } from "@/aboutdd_sections/StorySection/components/FounderImages";

export const StorySection = () => {
  return (
    <section className="relative box-border caret-transparent h-auto z-[1] overflow-hidden md:h-[1500px] md:overflow-visible">
      <div className="sticky box-border caret-transparent top-0">
        <div className="box-border caret-transparent h-full pt-0 pb-[60px] md:py-[100px]">
          <div className="box-border caret-transparent h-full z-[1] px-5 md:px-[94px]">
            <div className="box-border caret-transparent h-full max-w-[1252px] mx-auto">
              <div className="items-stretch box-border caret-transparent gap-x-8 flex flex-col h-auto justify-start gap-y-8 md:items-center md:gap-x-20 md:flex-row md:h-[622px] md:gap-y-20">
                <div className="items-center box-border caret-transparent flex flex-col justify-start max-w-full -order-1 text-center w-full md:[align-items:normal] md:block md:flex-row md:justify-normal md:max-w-[565px] md:order-none md:text-start">
                  <div className="box-border caret-transparent flex justify-start min-h-[auto] min-w-[auto] text-center md:min-h-0 md:min-w-0 md:text-start">
                    <div className="text-green-700 box-border caret-transparent text-center border border-emerald-400 px-3 py-1 rounded-3xl border-solid md:text-start">
                      <div className="text-sm box-border caret-transparent tracking-[0.32px] leading-[21px] text-center capitalize md:text-base md:leading-6 md:text-start">
                        Our story
                      </div>
                    </div>
                  </div>
                  <div className="box-border caret-transparent min-h-[auto] min-w-[auto] text-center mt-2 mb-4 md:min-h-0 md:min-w-0 md:text-start">
                    <h2 className="text-neutral-950 text-[28px] font-bold box-border caret-transparent leading-[33.6px] text-center capitalize font-redhatdisplay_variablefont_wght md:text-5xl md:leading-[57.6px] md:text-start">
                      How{" "}
                      <span className="text-[28px] italic box-border caret-transparent inline-block leading-[33.6px] text-center font-playfairdisplay_variablefont_wght md:text-5xl md:inline md:leading-[57.6px] md:text-start">
                        Turning vision into
                      enterprise-level {" "}
                      <span className="text-[28px] italic box-border caret-transparent inline-block leading-[33.6px] text-center font-playfairdisplay_variablefont_wght md:text-5xl md:inline md:leading-[57.6px] md:text-start">
                        impact
                      </span>
                      </span>
                    </h2>
                  </div>
                  <FounderImages
                    variant="single"
                    primaryImageSrc="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/679b105eb813701249cdf945_Frame 2147223329.avif"
                    primaryImageAlt=""
                  />
                  <div className="box-border caret-transparent min-h-[auto] min-w-[auto] text-center md:min-h-0 md:min-w-0 md:text-start">
                    <p className="text-lg box-border caret-transparent tracking-[0.48px] leading-[27px] text-center md:text-2xl md:leading-9 md:text-start">
                     Meet Abdul Azeez Khan and Soikot, co-founders and partners of Prozesy Media. Their journey began in 2015 with a shared vision to build a strong, enduring media brand. After delivering impactful media and marketing projects across diverse industries, they shaped Prozesy Media into a trusted enterprise known for creative and strategic work. Today, the company is home to 40+ passionate professionals, all committed to creating high-impact media and marketing solutions that drive results and long-term growth.
                    </p>
                  </div>
                  <div className="box-border caret-transparent min-h-[auto] min-w-[auto] text-center w-full mt-8 md:min-h-0 md:min-w-0 md:text-start md:w-auto">
                    <a
                      href="https://prozesy.com/teams"
                      className="relative text-violet-600 items-center bg-[linear-gradient(rgb(89,45,181)_25%,rgb(125,64,255))] shadow-[rgba(255,255,255,0.72)_0px_1.6px_3px_0px_inset] box-border caret-transparent flex flex-col h-14 justify-center max-w-full text-left w-full z-10 overflow-hidden rounded-lg md:max-w-[207px]"
                    >
                      <div className="absolute items-center bg-neutral-400 box-border caret-transparent flex h-full justify-center rotate-[-0.4830002007633736deg] w-full inset-[0%]">
                        <div className="absolute bg-[linear-gradient(90deg,rgba(255,255,255,0.79)_61%,rgb(255,255,255)_75%)] box-border caret-transparent blur-[6px] h-20 -translate-y-10 w-full left-2/4 right-[0%] top-2/4 bottom-[0%]"></div>
                      </div>
                      <div className="absolute bg-[linear-gradient(rgb(89,45,181)_25%,rgb(125,64,255))] box-border caret-transparent m-[1.3px] rounded-lg inset-[0%]"></div>
                      <div className="relative text-gray-200 box-border caret-transparent w-full md:w-auto">
                        <div className="relative items-center box-border caret-transparent gap-x-2 flex h-full justify-center gap-y-2 w-full z-[1]">
                          <div className="text-zinc-50 text-base font-bold box-border caret-transparent tracking-[0.32px] leading-[19.2px]">
                            Meet the Team
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
                <FounderImages
                  variant="double"
                  primaryImageSrc="https://anpeyqpnsavhykstwwbq.supabase.co/storage/v1/object/public/images/Our%20Team/71ca36bf-0e40-4b39-a11f-d861c55a69c1-1770662023543.png"
                  primaryImageAlt=""
                  secondaryImageSrc="https://anpeyqpnsavhykstwwbq.supabase.co/storage/v1/object/public/images/Our%20Team/494eafc6-d158-4994-a7fc-9ad7446fd0a1-1770662992220.png"
                  secondaryImageAlt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
