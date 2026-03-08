import { TeamCarousel } from "@/aboutdd_sections/TeamSection/components/TeamCarousel";
import { CTAButton } from "@/aboutdd_components/CTAButton";

export const TeamSection = () => {
  return (
    <div className="box-border caret-transparent pb-[60px] md:pb-[100px]">
      <div className="box-border caret-transparent overflow-hidden">
        <div className="items-center box-border caret-transparent gap-x-4 flex flex-col justify-start gap-y-4 text-center">
          <div className="box-border caret-transparent flex">
            <div className="text-green-500 box-border caret-transparent border border-green-800 px-3 py-1 rounded-3xl border-solid">
              <div className="text-sm box-border caret-transparent leading-[21px] md:text-base md:leading-6">
                Our team
              </div>
            </div>
          </div>
          <div className="text-zinc-50 box-border caret-transparent">
            <h2 className="text-[28px] font-bold box-border caret-transparent leading-[33.6px] font-redhatdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
              Collaborative Minds,
              <span className="text-[28px] italic box-border caret-transparent leading-[33.6px] capitalize font-playfairdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                {" "}
                Singular Focus
              </span>
            </h2>
          </div>
        </div>
        <div role="region" className="relative box-border caret-transparent">
          <TeamCarousel />
        </div>
        <div className="items-center box-border caret-transparent flex justify-center mt-10 px-5 md:mt-14">
          <CTAButton
            href="https://prozesy.com/teams"
            text="Meet the Team"
            variant="text-violet-600 items-center bg-[linear-gradient(rgb(89,45,181)_25%,rgb(125,64,255))] shadow-[rgba(255,255,255,0.72)_0px_1.6px_3px_0px_inset] box-border caret-transparent flex flex-col h-14 justify-center max-w-full text-left w-full z-10 overflow-hidden rounded-lg md:max-w-[207px]"
            backgroundVariant="absolute items-center bg-neutral-400 box-border caret-transparent flex h-full justify-center rotate-[-1.0359980381357696deg] w-full inset-[0%]"
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
    </div>
  );
};
