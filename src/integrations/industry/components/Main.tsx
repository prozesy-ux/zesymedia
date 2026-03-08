import { HeroSection } from "@/integrations/industry/sections/HeroSection";
import { IndustryCardsSection } from "@/integrations/industry/sections/IndustryCardsSection";
import { CTASection } from "@/integrations/industry/sections/CTASection";

export const Main = () => {
  return (
    <main className="box-border caret-transparent">
      <HeroSection />
      <IndustryCardsSection />
      <CTASection />
    </main>
  );
};
