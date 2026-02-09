import { HeroSection } from "@/sections/HeroSection";
import { IndustryWinsSection } from "@/sections/IndustryWinsSection";
import { TestimonialsSection } from "@/sections/TestimonialsSection";
import { AIDesignSection } from "@/sections/AIDesignSection";
import { VideoSection } from "@/sections/VideoSection";
import { ServicesSection } from "@/sections/ServicesSection";
import { WhyChooseUsSection } from "@/sections/WhyChooseUsSection";
import { SkillsMarquee } from "@/sections/SkillsMarquee";
import { PricingSection } from "@/sections/PricingSection";
import { JobOpeningsSection } from "@/sections/JobOpeningsSection";
import { ReferralTestimonials } from "@/sections/ReferralTestimonials";
import { FAQSection } from "@/sections/FAQSection";
import { ContactSection } from "@/sections/ContactSection";

export const Home = () => {
  return (
    <>
      <HeroSection />
      <IndustryWinsSection />
      <TestimonialsSection />
      <AIDesignSection />
      <VideoSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <SkillsMarquee />
      <PricingSection />
      <JobOpeningsSection />
      <ReferralTestimonials />
      <FAQSection />
      <ContactSection />
    </>
  );
};
