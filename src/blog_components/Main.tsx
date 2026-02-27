import { HeroSection } from "@/sections/HeroSection";
import { BlogSection } from "@/sections/BlogSection";
import { AuthorsSection } from "@/sections/AuthorsSection";
import { NewsletterSection } from "@/sections/NewsletterSection";
import { FAQSection } from "@/sections/FAQSection";
import { CTASection } from "@/sections/CTASection";
import { Footer } from "@/sections/Footer";

export const Main = () => {
  return (
    <main className="box-border caret-transparent">
      <HeroSection />
      <BlogSection />
      <AuthorsSection />
      <NewsletterSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
};
