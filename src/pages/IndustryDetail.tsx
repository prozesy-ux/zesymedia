import { HeroSection } from "@/integrations/industry-detail/sections/HeroSection";
import { ImageSection } from "@/integrations/industry-detail/sections/ImageSection";
import { ContentSection } from "@/integrations/industry-detail/sections/ContentSection";
import { StatsSection } from "@/integrations/industry-detail/sections/StatsSection";
import { SolutionsSection } from "@/integrations/industry-detail/sections/SolutionsSection";
import { PartnersSection } from "@/integrations/industry-detail/sections/PartnersSection";
import { TestimonialsSection } from "@/integrations/industry-detail/sections/TestimonialsSection";
import { ContactSection } from "@/integrations/industry-detail/sections/ContactSection";
import { FAQSection } from "@/sections/FAQSection";

export const IndustryDetail = () => {
  return (
    <div className="box-border caret-transparent overflow-x-clip bg-[position:0px_0px]">
      <main className="box-border caret-transparent">
        <HeroSection />
        <ImageSection />
        <ContentSection />
        <StatsSection />
        <SolutionsSection />
        <PartnersSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
    </div>
  );
};
