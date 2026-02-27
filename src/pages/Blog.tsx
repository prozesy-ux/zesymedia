import { HeroSection } from "@/blog_sections/HeroSection";
import { BlogSection } from "@/blog_sections/BlogSection";
import { AuthorsSection } from "@/blog_sections/AuthorsSection";
import { FAQSection } from "@/blog_sections/FAQSection";
import { CTASection } from "@/blog_sections/CTASection";


export const Blog = () => {
  return (
    <main className="box-border caret-transparent">
      <HeroSection />
      <BlogSection />
      <AuthorsSection />
      <FAQSection />
      <CTASection />
    </main>
  );
};
