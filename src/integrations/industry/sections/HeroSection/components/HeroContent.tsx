import { Breadcrumb } from "@/integrations/industry/components/Breadcrumb";
import { HeroHeading } from "@/integrations/industry/sections/HeroSection/components/HeroHeading";

export const HeroContent = () => {
  return (
    <div className="relative items-center box-border caret-transparent flex-col h-full justify-center text-left w-full z-[2] pb-8 px-5 md:pb-20 md:px-[94px]">
      <div className="items-center box-border caret-transparent gap-x-4 flex flex-col justify-start gap-y-4 text-center">
        <div className="items-center box-border caret-transparent flex justify-center z-[99] pt-[27px] pb-[7px] md:py-7">
          <a
            href="https://prozesy.com/"
            className="text-violet-600 box-border caret-transparent block max-w-full"
          >
            <img
              src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/679a08604def1d26213e6133_designmonks (1).svg"
              alt=""
              className="box-border caret-transparent inline-block max-w-full"
            />
          </a>
        </div>
        <Breadcrumb />
        <HeroHeading />
      </div>
    </div>
  );
};
