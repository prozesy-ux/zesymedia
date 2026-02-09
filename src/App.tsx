import { Navbar } from "@/sections/Navbar";
import { Logo } from "@/components/Logo";
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
import { Footer } from "@/sections/Footer";
import { CookieConsent } from "@/components/CookieConsent";

export const App = () => {
  return (
    <body className="text-zinc-800 text-sm not-italic normal-nums font-normal accent-auto bg-zinc-50 box-border caret-transparent block tracking-[normal] leading-5 list-outside list-disc min-h-full pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-outfit_variablefont_wght">
      <div className="box-border caret-transparent overflow-x-clip">
        <div className="box-border caret-transparent hidden before:accent-auto before:caret-transparent before:text-zinc-800 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-outfit_variablefont_wght after:accent-auto after:caret-transparent after:clear-both after:text-zinc-800 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-outfit_variablefont_wght"></div>
        <Navbar />
        <Logo />
        <main className="box-border caret-transparent">
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
        </main>
        <Footer />
      </div>
      <div className="relative box-border caret-transparent flex z-[99999]">
        <CookieConsent />
      </div>
    </body>
  );
};
