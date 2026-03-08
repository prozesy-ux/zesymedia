import { Hero } from "@/integrations/service-detail/sections/Hero";
import { TrustedBrands } from "@/integrations/service-detail/sections/TrustedBrands";
import { WhySection } from "@/integrations/service-detail/sections/WhySection";
import { FigmaPreview } from "@/integrations/service-detail/sections/FigmaPreview";
import { WorkProcess } from "@/integrations/service-detail/sections/WorkProcess";
import { ServicesSection } from "@/integrations/service-detail/sections/ServicesSection";
import { TestimonialsSection } from "@/integrations/service-detail/sections/TestimonialsSection";
import { PortfolioSection } from "@/integrations/service-detail/sections/PortfolioSection";
import { ContactSection } from "@/integrations/service-detail/sections/ContactSection";
import { FAQSection } from "@/sections/FAQSection";

export const ServiceDetail = () => {
  return (
    <div className="box-border caret-transparent overflow-x-clip">
      <main className="box-border caret-transparent">
        <Hero />
        <TrustedBrands />
        <WhySection />
        <FigmaPreview />
        <WorkProcess />
        <ServicesSection />
        <TestimonialsSection />
        <PortfolioSection />
        <FAQSection />
        <ContactSection />
      </main>
    </div>
  );
};
