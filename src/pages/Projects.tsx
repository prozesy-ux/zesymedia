import { Hero } from "@/integrations/projects/sections/Hero";
import { ProjectsSection } from "@/integrations/projects/sections/ProjectsSection";
import { ContactSection } from "@/sections/ContactSection";

export const Projects = () => {
  return (
    <main className="box-border caret-transparent">
      <Hero />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
};
