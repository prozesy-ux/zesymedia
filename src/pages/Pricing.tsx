import { Hero } from "@/integrations/pricing/sections/Hero";
import { TestimonialsSection } from "@/sections/TestimonialsSection";
import { ComparisonSection } from "@/integrations/pricing/sections/ComparisonSection";
import { AlternativesSection } from "@/integrations/pricing/sections/AlternativesSection";
import { WhyChooseUsSection } from "@/sections/WhyChooseUsSection";
import { FigmaPreview } from "@/integrations/pricing/sections/FigmaPreview";
import { FAQ } from "@/integrations/pricing/sections/FAQ";
import { ContactSection } from "@/sections/ContactSection";

export const Pricing = () => {
  return (
    <>
      <Hero />
      <TestimonialsSection />
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent">
          <div className="box-border caret-transparent py-[60px] md:py-[100px]">
            <div className="box-border caret-transparent max-w-[1252px] w-full z-[1] mx-auto">
              <ComparisonSection />
            </div>
          </div>
        </div>
      </div>
      <div className="relative box-border caret-transparent overflow-clip rounded-[20px] md:rounded-[32px]">
        <AlternativesSection />
      </div>
      <WhyChooseUsSection />
      <FigmaPreview />
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent">
          <FAQ />
        </div>
      </div>
      <section className="box-border caret-transparent">
        <div className="box-border caret-transparent">
          <ContactSection />
        </div>
      </section>
    </>
  );
};
