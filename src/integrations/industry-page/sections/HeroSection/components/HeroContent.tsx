import { Breadcrumb } from "@/integrations/industry-page/components/Breadcrumb";
import { HeroHeading } from "@/integrations/industry-page/sections/HeroSection/components/HeroHeading";

export const HeroContent = () => {
  return (
    <div className="relative items-center box-border caret-transparent flex-col h-full justify-center text-left w-full z-[2] pb-8 px-5 md:pb-20 md:px-[94px]">
      <div className="items-center box-border caret-transparent gap-x-4 flex flex-col justify-start gap-y-4 text-center">
        <div className="h-[70px] md:h-[96px]" />
        <Breadcrumb />
        <HeroHeading />
      </div>
    </div>
  );
};
