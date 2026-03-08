import { BenefitCard } from "@/integrations/pricing/sections/BenefitsSection/components/BenefitCard";

export const BenefitsSection = () => {
  return (
    <div className="box-border caret-transparent pt-[60px] px-5 md:pt-[100px] md:px-[94px]">
      <div className="box-border caret-transparent max-w-[1252px] w-full z-[1] mx-auto">
        <div className="box-border caret-transparent">
          <div className="box-border caret-transparent gap-x-8 flex flex-col gap-y-8 md:gap-x-14 md:gap-y-14">
            <div className="box-border caret-transparent max-w-[700px] min-h-[auto] min-w-[auto]">
              <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4">
                <div className="box-border caret-transparent flex min-h-[auto] min-w-[auto]">
                  <div className="text-green-700 box-border caret-transparent min-h-[auto] min-w-[auto] border border-emerald-400 px-3 py-1 rounded-3xl border-solid">
                    <div className="text-sm box-border caret-transparent leading-[21px] md:text-base md:leading-6">
                      Endless Advantages
                    </div>
                  </div>
                </div>
                <div className="text-neutral-950 box-border caret-transparent min-h-[auto] min-w-[auto]">
                  <h2 className="text-[28px] font-bold box-border caret-transparent leading-[33.6px] font-redhatdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                    Strategic Design
                    <span className="text-[28px] italic box-border caret-transparent leading-[33.6px] capitalize font-playfairdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                      {" "}
                      Benefits
                    </span>
                    <span className="text-[28px] box-border caret-transparent leading-[33.6px] lowercase md:text-5xl md:leading-[57.6px]">
                      for
                    </span>
                    Your Business
                    <span className="text-[28px] italic box-border caret-transparent leading-[33.6px] capitalize font-playfairdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                      {" "}
                      Growth
                    </span>
                     
                  </h2>
                </div>
              </div>
            </div>
            <div className="box-border caret-transparent gap-x-4 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] min-h-[auto] min-w-[auto] gap-y-4 w-full md:gap-x-8 md:grid-cols-[1fr_1fr] md:grid-rows-[auto_auto] md:gap-y-8">
              <BenefitCard
                imageUrl="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67bbf4557f15dfc01f0bbe24_Infinity.avif"
                imageAlt=""
                imageContainerHeightClass="h-[47px]"
                imageContainerMaxWidthClass="max-w-[93px]"
                imageContainerMdHeightClass="md:h-[68px]"
                imageContainerMdMaxWidthClass="md:max-w-[133px]"
                title="Unlimited Revisions"
                description="We’re committed to your satisfaction with unlimited revisions at every step. Our mission is to make your vision come to life exactly as you imagine."
              />
              <BenefitCard
                imageUrl="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67bbf455cd6e05ec201e5e82_Profile.avif"
                imageAlt=""
                imageAspectClass="aspect-[auto_70_/_68]"
                imageContainerHeightClass="h-[57px]"
                imageContainerMaxWidthClass="max-w-[59px]"
                imageContainerMdHeightClass="md:h-[68px]"
                imageContainerMdMaxWidthClass="md:max-w-[70px]"
                title="Lifetime Support"
                description="With our lifetime support, you’re never alone. We’ll be there for you at every stage with necessary guidance and assistance whenever you need it."
              />
              <BenefitCard
                imageUrl="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67bbf455bde8347a515f5d6c_Dollar.avif"
                imageAlt=""
                imageAspectClass="aspect-[auto_60_/_84]"
                imageContainerHeightClass="h-[67px]"
                imageContainerMaxWidthClass="max-w-[47px]"
                imageContainerMdHeightClass="md:h-[84px]"
                imageContainerMdMaxWidthClass="md:max-w-[60px]"
                title="Personalised Plans"
                description="Get top-quality service without breaking the bank. Our rates are designed to fit your budget so that you can get the best value for your investment."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
