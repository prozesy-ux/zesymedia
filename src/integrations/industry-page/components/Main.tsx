import { HeroSection } from "@/integrations/industry-page/sections/HeroSection";
import { IndustryCardsSection } from "@/integrations/industry-page/sections/IndustryCardsSection";
import { CTASection } from "@/integrations/industry-page/sections/CTASection";

export const Main = () => {
  return (
    <main className="box-border caret-transparent">
      <HeroSection />
      <IndustryCardsSection />
      <CTASection />
    </main>
  );
};
