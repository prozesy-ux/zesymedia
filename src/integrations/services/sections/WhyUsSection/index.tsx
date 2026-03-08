import { WhyUsContent } from "@/integrations/services/sections/WhyUsSection/components/WhyUsContent";
import { WhyUsButton } from "@/integrations/services/sections/WhyUsSection/components/WhyUsButton";

export const WhyUsSection = () => {
  return (
    <section className="relative bg-white box-border caret-transparent z-[1] overflow-hidden md:overflow-visible">
      <div className="box-border caret-transparent py-[60px] md:py-[100px]">
        <div className="box-border caret-transparent z-[1] px-5 md:px-[94px]">
          <div className="box-border caret-transparent max-w-[1252px] w-full mx-auto">
            <WhyUsContent />
            <WhyUsButton />
          </div>
        </div>
      </div>
    </section>
  );
};
