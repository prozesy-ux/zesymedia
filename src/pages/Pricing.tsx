import { PricingSection } from "@/sections/PricingSection";
import { FAQSection } from "@/sections/FAQSection";

export const Pricing = () => {
  return (
    <div className="bg-zinc-50 pt-[120px] pb-20">
      <div className="flex flex-col gap-20">
        <PricingSection />
        <FAQSection />
      </div>
    </div>
  );
};
