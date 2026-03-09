import { ServiceHero } from "@/integrations/service-detail/sections/ServiceHero";
import { ImageCarouselSection } from "@/integrations/service-detail/sections/ImageCarouselSection";
import { TrustedBrandsCarouselSection } from "@/integrations/service-detail/sections/TrustedBrandsCarouselSection";
import { IdeaTransformationSection } from "@/integrations/service-detail/sections/IdeaTransformationSection";
import { WhySection } from "@/integrations/service-detail/sections/WhySection";
import { FigmaPreview } from "@/integrations/service-detail/sections/FigmaPreview";
import { WorkProcess } from "@/integrations/service-detail/sections/WorkProcess";
import { ServicesSection } from "@/integrations/service-detail/sections/ServicesSection";
import { TestimonialsSection } from "@/integrations/service-detail/sections/TestimonialsSection";
import { PortfolioSection } from "@/integrations/service-detail/sections/PortfolioSection";
import { ContactSection } from "@/sections/ContactSection";
import { FAQSection } from "@/sections/FAQSection";

export const ServiceDetail = () => {
  return (
    <div className="box-border caret-transparent overflow-x-clip">
      <main className="box-border caret-transparent">
        <ServiceHero />
        <ImageCarouselSection />
        <TrustedBrandsCarouselSection />
        <IdeaTransformationSection />
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
