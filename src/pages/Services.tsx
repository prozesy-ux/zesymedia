import { useState } from "react";
import { Hero } from "@/integrations/services/sections/Hero";
import { ServicesSection } from "@/integrations/services/sections/ServicesSection";
import { WhyUsSection } from "@/integrations/services/sections/WhyUsSection";
import { DesignExcellenceSection } from "@/integrations/services/sections/DesignExcellenceSection";
import { TestimonialsSection } from "@/integrations/services/sections/TestimonialsSection";
import { ContactSection } from "@/sections/ContactSection";
import { FAQSection } from "@/sections/FAQSection";

export const Services = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handleServiceClick = (serviceId: string) => {
    // Navigate to service detail page
    const serviceDetailPath = `/services/${serviceId}`;
    history.pushState(null, "", serviceDetailPath);
    window.dispatchEvent(new Event("locationchange"));
  };

  return (
    <div className="box-border caret-transparent overflow-x-clip">
      <main className="box-border caret-transparent">
        <Hero />
        <ServicesSection onServiceClick={handleServiceClick} />
        <WhyUsSection />
        <DesignExcellenceSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
    </div>
  );
};

