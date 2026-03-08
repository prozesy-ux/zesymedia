import { CategoryCarousel } from "@/integrations/projects/sections/ProjectsSection/components/CategoryCarousel";
import { ProjectGrid } from "@/integrations/projects/sections/ProjectsSection/components/ProjectGrid";
import { Pagination } from "@/integrations/projects/sections/ProjectsSection/components/Pagination";

export const ProjectsSection = () => {
  return (
    <section className="box-border caret-transparent">
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent px-5 py-[60px] md:px-[94px] md:py-[100px]">
          <div className="box-border caret-transparent max-w-[1252px] w-full z-[1] mx-auto">
            <div className="items-center box-border caret-transparent gap-x-8 flex flex-col justify-start gap-y-8 md:gap-x-14 md:gap-y-14">
              <div className="items-start box-border caret-transparent gap-x-4 flex justify-start min-h-[auto] min-w-[auto] gap-y-4 w-full overflow-hidden">
                <CategoryCarousel />
              </div>
              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] z-[1]">
                <ProjectGrid />
                <Pagination />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
