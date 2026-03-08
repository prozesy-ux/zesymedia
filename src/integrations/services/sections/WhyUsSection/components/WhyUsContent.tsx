import { WhyUsText } from "@/integrations/services/sections/WhyUsSection/components/WhyUsText";
import { WhyUsVideo } from "@/integrations/services/sections/WhyUsSection/components/WhyUsVideo";

export const WhyUsContent = () => {
  return (
    <div className="items-center box-border caret-transparent gap-x-8 flex flex-col-reverse justify-between gap-y-8 md:flex-row">
      <WhyUsText />
      <WhyUsVideo />
    </div>
  );
};
