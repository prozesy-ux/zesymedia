import { SectionHeader } from "@/aboutdd_components/SectionHeader";
import { CTAButton } from "@/aboutdd_components/CTAButton";

export const AboutSection = () => {
  return (
    <section className="box-border caret-transparent">
      <div className="box-border caret-transparent pt-[60px] md:pt-[100px]">
        <div className="box-border caret-transparent z-[1] px-5 md:px-[94px]">
          <div className="box-border caret-transparent max-w-[1252px] mx-auto">
            <div className="items-start box-border caret-transparent gap-x-8 flex flex-col justify-between gap-y-8 md:items-center md:gap-x-[normal] md:flex-row md:gap-y-[normal]">
              <div className="box-border caret-transparent max-w-full w-full md:max-w-[610px]">
                <SectionHeader />
                <div className="box-border caret-transparent">
                  <h2 className="text-neutral-950 text-[28px] font-bold box-border caret-transparent leading-[33.6px] capitalize font-redhatdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                    Your Go-To Partner for Impactful Designs to Create{" "}
                    <span className="text-[28px] italic box-border caret-transparent inline-block leading-[33.6px] font-playfairdisplay_variablefont_wght md:text-5xl md:inline md:leading-[57.6px]">
                      <em className="text-[28px] box-border caret-transparent leading-[33.6px] md:text-5xl md:leading-[57.6px]">
                        Apps &amp; Websites
                      </em>
                    </span>
                    for Business success!
                  </h2>
                </div>
                <div className="box-border caret-transparent mt-8">
                  <CTAButton
                    href="https://prozesy.com/contact"
                    text="Book a Call"
                    variant="relative text-violet-600 items-center bg-[linear-gradient(rgb(89,45,181)_25%,rgb(125,64,255))] shadow-[rgba(255,255,255,0.72)_0px_1.6px_3px_0px_inset] box-border caret-transparent flex flex-col h-14 justify-center max-w-full text-left w-full z-[5] overflow-hidden rounded-lg md:max-w-[177px]"
                    backgroundVariant="absolute items-center bg-neutral-400 box-border caret-transparent flex h-full justify-center rotate-[-0.08800003360022549deg] w-full inset-[0%]"
                    overlayVariant="absolute bg-[linear-gradient(rgb(89,45,181)_25%,rgb(125,64,255))] box-border caret-transparent m-[1.3px] rounded-lg inset-[0%]"
                    showLeftIcon={false}
                    showRightIcon={true}
                    rightIconSrc="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67adba6a3ab018a0349e2bc2_CTA Arrow (2).svg"
                    rightIconAlt=""
                    showStarImage={true}
                    starImageSrc="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/672a7a8e3a6aba070d15d4c0_Star 6.avif"
                    starImageAlt=""
                  />
                </div>
              </div>
              <div className="relative box-border caret-transparent shrink h-[335px] max-w-full translate-y-[-1.1065px] w-full md:shrink-0 md:h-[570px] md:max-w-none md:w-auto">
                <img
                  src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/673dda6140bcd4600e7ca191_Right Side Mockup (3).avif"
                  alt=""
                  className="relative box-border caret-transparent inline-block h-full max-w-full object-contain w-full z-[999] md:object-fill"
                />
                <div className="absolute bg-emerald-400 box-border caret-transparent blur-[154px] h-[198px] max-w-[275px] opacity-[0.51] rotate-[-14.99999492786973deg] w-full rounded-[275px] right-[10%] top-[31%] bottom-[0%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
