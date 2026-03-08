import { Breadcrumb } from "@/integrations/service-detail/components/Breadcrumb";
import { CTAButton } from "@/integrations/service-detail/components/CTAButton";
import { Service } from "@/integrations/services/data/servicesData";

type HeroContentProps = {
  serviceData?: Service;
};

export const HeroContent = ({ serviceData }: HeroContentProps) => {
  const defaultTitle = "Website Design Services: Cause";
  const defaultSubtitle = "First Impressions Matter";
  const defaultDescription = "Transform your digital identity with our web design service, designed to turn clicks into long-lasting connections.";

  return (
    <div className="items-center box-border caret-transparent gap-x-5 flex flex-col justify-start gap-y-5 md:gap-x-10 md:gap-y-10">
      <div className="items-center box-border caret-transparent gap-x-4 flex flex-col justify-start gap-y-4 text-center md:gap-x-7 md:gap-y-7">
        <div className="items-center box-border caret-transparent gap-x-4 flex flex-col justify-start gap-y-4">
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
          <Breadcrumb serviceTitle={serviceData?.title} />
          <div className="text-zinc-50 box-border caret-transparent">
            <h1 className="text-[32px] font-bold box-border caret-transparent leading-[38.4px] font-redhatdisplay_variablefont_wght md:text-[56px] md:leading-[67.2px]">
              {serviceData?.title || defaultTitle}:{" "}
              <em className="text-[32px] italic box-border caret-transparent leading-[38.4px] capitalize font-playfairdisplay_variablefont_wght md:text-[56px] md:leading-[67.2px]">
                {defaultSubtitle}
              </em>
            </h1>
          </div>
        </div>
        <div className="box-border caret-transparent w-auto md:w-4/5">
          <div className="text-neutral-300 box-border caret-transparent">
            <p className="text-base box-border caret-transparent tracking-[0.36px] leading-6 md:text-lg md:leading-[27px]">
              {serviceData?.description || defaultDescription}
            </p>
          </div>
        </div>
      </div>
      <CTAButton />
    </div>
  );
};
