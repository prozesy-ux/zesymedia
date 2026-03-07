import { Navbar } from "@/contact_sections/Navbar";
import { Hero } from "@/contact_sections/Hero";
import { ContactSection } from "@/contact_sections/ContactSection";
import { LogoCarousel } from "@/contact_sections/LogoCarousel";
import { Testimonials } from "@/contact_sections/Testimonials";
import { FAQ } from "@/contact_sections/FAQ";
import { CTASection } from "@/contact_sections/CTASection";
import { Footer } from "@/contact_sections/Footer";

export const Contact = () => {
  return (
    <div className="bg-zinc-50 pb-0">
      <Navbar />
      <Hero />
      <ContactSection />
      <LogoCarousel />
      <Testimonials />
      <FAQ />
      <CTASection />
      <Footer />
    </div>
  );
};
