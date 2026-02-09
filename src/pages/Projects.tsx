import { projects } from "@/data/projects";
import { ProjectCard } from "@/sections/IndustryWinsSection/components/ProjectCard";

export const Projects = () => {
  return (
    <section className="relative bg-zinc-50 box-border caret-transparent h-full z-10 pt-[150px] pb-20">
      <div className="box-border caret-transparent px-5 md:px-[94px]">
        <div className="box-border caret-transparent max-w-[1252px] w-full mx-auto">
          <div className="box-border caret-transparent mb-14 text-center">
            <h1 className="text-[40px] font-bold box-border caret-transparent leading-[48px] font-redhatdisplay_variablefont_wght md:text-7xl md:leading-[86.4px] mb-6">
              Our <span className="italic font-playfairdisplay_variablefont_wght">Projects</span>
            </h1>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              Explore our portfolio of successful projects where we've helped brands transform their digital presence.
            </p>
          </div>
          
          <div className="relative box-border caret-transparent gap-x-8 flex flex-col gap-y-8 md:gap-x-20 md:gap-y-20">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                href={`/projects/${project.slug}`}
                linkClassName={project.linkClassName.replace("sticky", "relative").replace("top-[100px]", "").replace("top-40", "").replace("top-[216px]", "").replace("top-[272px]", "").replace("top-[-28.8px]", "")}
                category={project.category}
                title={project.title}
                description={project.description}
                stat1Label={project.stat1Label}
                stat1Value={project.stat1Value}
                stat2Label={project.stat2Label}
                stat2Value={project.stat2Value}
                testimonialBgColor={project.testimonialBgColor}
                testimonialImageUrl={project.testimonialImageUrl}
                testimonialImageAlt={project.testimonialImageAlt}
                testimonialName={project.testimonialName}
                testimonialTitle={project.testimonialTitle}
                projectImageUrl={project.projectImageUrl}
                projectImageAlt={project.projectImageAlt}
                arrowIconUrl={project.arrowIconUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
