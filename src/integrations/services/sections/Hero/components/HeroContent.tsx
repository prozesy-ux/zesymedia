import { HeroBreadcrumb } from "@/integrations/services/sections/Hero/components/HeroBreadcrumb";
import { HeroHeading } from "@/integrations/services/sections/Hero/components/HeroHeading";

export const HeroContent = () => {
  return (
    <div className="box-border caret-transparent max-w-[1252px] w-full z-[1] mx-auto">
      <div className="relative items-center box-border caret-transparent flex-col h-full justify-center max-w-[960px] text-left w-full z-[2] mx-auto pb-8 px-5 md:pb-20 md:px-[94px]">
        <div className="items-center box-border caret-transparent gap-x-4 flex flex-col justify-start gap-y-4 text-center">
          <div className="items-center box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] z-[99] pt-[27px] pb-[7px] md:py-7">
            <a
              href="https://www.designmonks.co/"
              className="text-violet-600 box-border caret-transparent block max-w-full min-h-[auto] min-w-[auto]"
            >
              <img
                src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/679a08604def1d26213e6133_designmonks (1).svg"
                alt=""
                className="box-border caret-transparent inline-block max-w-full"
              />
            </a>
          </div>
          <HeroBreadcrumb />
          <HeroHeading />
        </div>
      </div>
    </div>
  );
};
