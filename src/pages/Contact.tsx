import { Hero } from "@/integrations/contact/sections/Hero";
import { ContactSection } from "@/integrations/contact/sections/ContactSection";
import { LogoCarousel } from "@/integrations/contact/sections/LogoCarousel";
import { Testimonials } from "@/integrations/contact/sections/Testimonials";
import { CTASection } from "@/integrations/contact/sections/CTASection";
import { FAQSection } from "@/sections/FAQSection";

export const Contact = () => {
  return (
    <div className="box-border caret-transparent overflow-x-clip bg-[position:0px_0px]">
      <main className="box-border caret-transparent">
        <Hero />
        <ContactSection />
        <LogoCarousel />
        <Testimonials />
        <FAQSection />
        <CTASection />
      </main>
    </div>
  );
};
