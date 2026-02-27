import { Hero } from "@/aboutdd_sections/Hero";
import { AboutSection } from "@/aboutdd_sections/AboutSection";
import { StatsSection } from "@/aboutdd_sections/StatsSection";
import { StorySection } from "@/aboutdd_sections/StorySection";
import { ImpactSection } from "@/aboutdd_sections/ImpactSection";
import { TestimonialSection } from "@/aboutdd_sections/TestimonialSection";
import { PartnersSection } from "@/aboutdd_sections/PartnersSection";
import { CareerSection } from "@/aboutdd_sections/CareerSection";
import { FAQSection } from "@/aboutdd_sections/FAQSection";
import { CTASection } from "@/aboutdd_sections/CTASection";

export const About = () => {
  return (
    <div className="bg-zinc-50 pt-[0px] pb-0">
      <Hero />
      <AboutSection />
      <StatsSection />
      <StorySection />
      <ImpactSection />
      <TestimonialSection />
      <PartnersSection />
      <CareerSection />
      <FAQSection />
      <CTASection />
    </div>
  );
};
