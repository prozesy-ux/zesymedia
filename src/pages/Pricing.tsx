import { Hero } from "@/integrations/pricing/sections/Hero";
import { Testimonials } from "@/integrations/pricing/sections/Testimonials";
import { ComparisonSection } from "@/integrations/pricing/sections/ComparisonSection";
import { AlternativesSection } from "@/integrations/pricing/sections/AlternativesSection";
import { BenefitsSection } from "@/integrations/pricing/sections/BenefitsSection";
import { FigmaPreview } from "@/integrations/pricing/sections/FigmaPreview";
import { FAQ } from "@/integrations/pricing/sections/FAQ";
import { TestimonialsAlt } from "@/integrations/pricing/sections/TestimonialsAlt";
import { ContactSection } from "@/sections/ContactSection";

export const Pricing = () => {
  return (
    <>
      <Hero />
      <div className="box-border caret-transparent">
        <div className="bg-zinc-50 box-border caret-transparent">
          <Testimonials />
        </div>
      </div>
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
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent">
          <BenefitsSection />
        </div>
      </div>
      <FigmaPreview />
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent">
          <FAQ />
        </div>
      </div>
      <TestimonialsAlt />
      <section className="box-border caret-transparent">
        <div className="box-border caret-transparent">
          <ContactSection />
        </div>
      </section>
    </>
  );
};
