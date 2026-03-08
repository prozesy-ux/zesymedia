import { Breadcrumb } from "@/integrations/projects/sections/Hero/components/Breadcrumb";
import { HeroHeading } from "@/integrations/projects/sections/Hero/components/HeroHeading";
import { HeroVideo } from "@/integrations/projects/sections/Hero/components/HeroVideo";

export const Hero = () => {
  return (
    <section className="relative bg-neutral-950/90 bg-[linear-gradient(rgba(48,255,151,0)_30%,rgba(48,255,151,0.33))] box-border caret-transparent overflow-hidden rounded-b-[20px] md:rounded-b-[32px]">
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent max-w-[1252px] w-full z-[1] mx-auto">
          <div className="relative items-center box-border caret-transparent flex-col h-full justify-center text-left w-full z-[2] pb-8 px-5 md:pb-20 md:px-[94px]">
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
              <Breadcrumb />
              <HeroHeading />
            </div>
          </div>
        </div>
      </div>
      <img
        src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67fbb9e09e1ee391a7f159d2_Group 2147223906.avif"
        alt=""
        className="absolute box-border caret-transparent max-w-44 pointer-events-none z-0 right-[0%] top-[0%] md:max-w-full"
      />
      <img
        src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/680abee77b8b1a005391c27b_d06c4296b2ae60af25ab36e28167df46_box element.avif"
        alt=""
        className="absolute items-end box-border caret-transparent hidden h-[100px] justify-start max-w-20 pointer-events-none w-full left-[0%] bottom-[0%] md:[align-items:normal] md:block md:h-auto md:justify-normal md:max-w-full md:w-auto"
      />
      <HeroVideo />
    </section>
  );
};
