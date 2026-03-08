import { CTAContainer } from "@/integrations/industry-page/sections/CTASection/components/CTAContainer";
import { MarqueeText } from "@/integrations/industry-page/sections/CTASection/components/MarqueeText";

export const CTASection = () => {
  return (
    <section className="box-border caret-transparent">
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent pt-8 pb-[60px] px-5 md:pt-[1.6px] md:pb-[100px] md:px-[94px]">
          <div className="box-border caret-transparent max-w-[1252px] w-full z-[1] mx-auto">
            <CTAContainer />
            <MarqueeText />
          </div>
        </div>
      </div>
    </section>
  );
};
