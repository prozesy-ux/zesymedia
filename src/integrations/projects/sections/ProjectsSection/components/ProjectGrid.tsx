import { ProjectCard } from "@/integrations/projects/sections/ProjectsSection/components/ProjectCard";
import { projects } from "@/data/projects";

export const ProjectGrid = () => {
  return (
    <div
      role="list"
      className="box-border caret-transparent gap-x-9 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] max-w-full gap-y-9 w-full md:gap-x-8 md:grid-cols-[1fr_1fr] md:grid-rows-[auto_auto] md:max-w-none md:gap-y-14 md:w-auto"
    >
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          href={`/projects/${project.slug}`}
          imageUrl={project.projectImageUrl}
          imageAlt={project.projectImageAlt}
          title={project.title}
          description={project.description}
          tags={[project.category]}
        />
      ))}
    </div>
  );
};
