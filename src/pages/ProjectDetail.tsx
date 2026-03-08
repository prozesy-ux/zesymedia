import { useEffect, useState } from "react";
import { Hero } from "@/integrations/project-details/sections/Hero";
import { VideoSection } from "@/integrations/project-details/sections/VideoSection";
import { ProblemSection } from "@/integrations/project-details/sections/ProblemSection";
import { SolutionSection } from "@/integrations/project-details/sections/SolutionSection";
import { StyleGuideSection } from "@/integrations/project-details/sections/StyleGuideSection";
import { WorkflowSection } from "@/integrations/project-details/sections/WorkflowSection";
import { ResultSection } from "@/integrations/project-details/sections/ResultSection";
import { ClientFeedback } from "@/integrations/project-details/sections/ClientFeedback";
import { RelatedProjects } from "@/integrations/project-details/sections/RelatedProjects";
import { SuccessStories } from "@/integrations/project-details/sections/SuccessStories";
import { ContactForm } from "@/integrations/project-details/sections/ContactForm";
import { FAQSection } from "@/sections/FAQSection";
import { projects } from "@/data/projects";

export const ProjectDetail = () => {
  const [projectData, setProjectData] = useState<any>(null);

  useEffect(() => {
    // Get slug from URL
    const path = window.location.pathname;
    const slug = path.split("/projects/")[1];

    // Find project by slug
    const project = projects.find((p) => p.slug === slug);
    
    if (project) {
      setProjectData(project);
      document.title = `${project.title} - Zesymedia`;
    }
  }, []);

  if (!projectData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Loading project...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="box-border caret-transparent overflow-x-clip">
      <main className="box-border caret-transparent">
        <Hero projectData={projectData} />
        <VideoSection projectData={projectData} />
        <ProblemSection projectData={projectData} />
        <SolutionSection projectData={projectData} />
        <StyleGuideSection projectData={projectData} />
        <WorkflowSection projectData={projectData} />
        <ResultSection projectData={projectData} />
        <ClientFeedback projectData={projectData} />
        <RelatedProjects currentProjectId={projectData.id} />
        <SuccessStories />
        <FAQSection />
        <ContactForm />
      </main>
    </div>
  );
};
