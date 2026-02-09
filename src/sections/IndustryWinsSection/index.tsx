import { ProjectCard } from "@/sections/IndustryWinsSection/components/ProjectCard";
import { projects } from "@/data/projects";

export const IndustryWinsSection = () => {
  return (
    <section className="relative bg-zinc-50 box-border caret-transparent h-full z-10 -mt-10 rounded-t-[20px] md:rounded-t-[32px]">
      <div className="box-border caret-transparent py-[60px] md:py-[100px]">
        <div className="box-border caret-transparent z-[1] px-5 md:px-[94px]">
          <div className="box-border caret-transparent max-w-[1252px] w-full mx-auto">
            <div className="sticky box-border caret-transparent">
              <div className="box-border caret-transparent">
                <div className="box-border caret-transparent flex justify-start mb-2">
                  <div className="text-green-700 box-border caret-transparent border border-emerald-400 px-3 py-1 rounded-3xl border-solid">
                    <div className="text-sm box-border caret-transparent tracking-[0.32px] leading-[21px] capitalize md:text-base md:leading-6">
                      Industry Wins
                    </div>
                  </div>
                </div>
                <div className="box-border caret-transparent max-w-[420px] mb-8 md:mb-14">
                  <h2 className="text-[28px] font-bold box-border caret-transparent leading-[33.6px] font-redhatdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                    Proven Success in{" "}
                    <span className="text-[28px] italic box-border caret-transparent inline-block leading-[33.6px] font-playfairdisplay_variablefont_wght md:text-5xl md:inline md:leading-[57.6px]">
                      Every Industry
                    </span>
                  </h2>
                </div>
              </div>
              <div className="relative box-border caret-transparent gap-x-8 flex flex-col gap-y-8 md:gap-x-20 md:gap-y-20">
                {projects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    href={`/projects/${project.slug}`}
                    linkClassName={project.linkClassName}
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
              <div className="relative items-center box-border caret-transparent flex justify-center mt-10 md:mt-[60px]">
                <a
                  href="/projects"
                  className="relative text-violet-600 items-center bg-[linear-gradient(rgb(89,45,181)_25%,rgb(125,64,255))] shadow-[rgba(255,255,255,0.72)_0px_1.6px_3px_0px_inset] box-border caret-transparent flex flex-col h-14 justify-center max-w-full text-left w-full z-10 overflow-hidden rounded-lg md:max-w-[207px]"
                >
                  <div className="absolute items-center bg-neutral-400 box-border caret-transparent flex h-full justify-center rotate-[-4.510797363871153deg] w-full inset-[0%] md:transform-none">
                    <div className="absolute bg-[linear-gradient(90deg,rgba(255,255,255,0.79)_61%,rgb(255,255,255)_75%)] box-border caret-transparent blur-[6px] h-20 -translate-y-10 w-full left-2/4 right-[0%] top-2/4 bottom-[0%] md:translate-y-[-50.0%]"></div>
                  </div>
                  <div className="absolute bg-[linear-gradient(rgb(89,45,181)_25%,rgb(125,64,255))] box-border caret-transparent rounded-lg inset-[0%]"></div>
                  <div className="relative text-gray-200 box-border caret-transparent w-full md:w-auto">
                    <div className="relative items-center box-border caret-transparent gap-x-2 flex h-full justify-center gap-y-2 w-full z-[1]">
                      <div className="text-zinc-50 text-base font-bold box-border caret-transparent tracking-[0.32px] leading-[19.2px]">
                        See All Projects
                      </div>
                      <img
                        src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/67adba6a3ab018a0349e2bc2_CTA_Arrow_(2).svg"
                        alt=""
                        className="box-border caret-transparent h-7 max-w-7 object-contain w-full md:h-6 md:max-w-6"
                      />
                    </div>
                  </div>
                  <img
                    src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/672a7a8e3a6aba070d15d4c0_Star_6.avif"
                    alt=""
                    className="absolute box-border caret-transparent max-w-full right-[0%] top-[0%]"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
