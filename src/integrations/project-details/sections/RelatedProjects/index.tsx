import { ProjectCard } from "@/integrations/project-details/sections/RelatedProjects/components/ProjectCard";

export const RelatedProjects = () => {
  return (
    <section className="relative bg-neutral-950 box-border caret-transparent overflow-hidden mb-[60px] rounded-[20px] md:mb-0 md:rounded-none">
      <div className="relative box-border caret-transparent z-[1] px-5 md:px-[94px]">
        <div className="box-border caret-transparent max-w-[1252px] w-full mx-auto">
          <div className="box-border caret-transparent py-[60px] md:py-[100px]">
            <div className="box-border caret-transparent flex justify-between px-0 md:px-5">
              <h2 className="text-white text-[28px] font-bold box-border caret-transparent leading-[33.6px] min-h-[auto] min-w-[auto] capitalize font-redhatdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                <span className="text-[28px] italic box-border caret-transparent inline-block leading-[33.6px] font-playfairdisplay_variablefont_wght md:text-5xl md:inline md:leading-[57.6px]">
                  Related
                </span>
                Projects
              </h2>
              <div className="items-center box-border caret-transparent flex justify-start min-h-[auto] min-w-[auto] md:[align-items:normal]">
                <a
                  href="/projects"
                  className="relative text-violet-600 items-center bg-violet-500 shadow-[rgba(255,255,255,0.72)_0px_2px_3px_0px_inset] box-border caret-transparent hidden flex-col h-14 justify-center max-w-full min-h-0 min-w-0 text-left w-full z-[99] overflow-hidden px-8 py-4 rounded-lg md:flex md:max-w-[158px] md:min-h-[auto] md:min-w-[auto]"
                >
                  <div className="relative text-gray-200 box-border caret-transparent min-h-0 min-w-0 w-full md:min-h-[auto] md:min-w-[auto] md:w-auto">
                    <div className="relative items-center box-border caret-transparent gap-x-2 flex h-full justify-center gap-y-2 w-full z-[1]">
                      <div className="text-zinc-50 text-base font-bold box-border caret-transparent tracking-[0.32px] leading-[19.2px] min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
                        See All
                      </div>
                      <img
                        src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67adba6a3ab018a0349e2bc2_CTA Arrow (2).svg"
                        alt=""
                        className="box-border caret-transparent h-7 max-w-7 min-h-0 min-w-0 object-contain w-full md:h-6 md:max-w-6 md:min-h-[auto] md:min-w-[auto]"
                      />
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="box-border caret-transparent z-[1]">
              <div
                role="list"
                className="relative box-border caret-transparent gap-x-8 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-8 z-[1] mt-8 mb-6 md:gap-x-6 md:grid-cols-[1fr_1fr_1fr] md:gap-y-6 md:mt-14 md:mb-0"
              >
                <ProjectCard
                  href="/projects/materio-unified-supply-dashboard"
                  imageUrl="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6984914b8df3c167977316c2_Thumbnail.avif"
                  imageAlt=""
                  title="Materio - Unified Supply Dashboard"
                />
                <ProjectCard
                  href="/projects/esdiac-borderless-communication"
                  imageUrl="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/696887601c99f2cd330b64a5_UX _ Prozesy Media.avif"
                  imageAlt=""
                  title="Esdiac - Borderless Communication"
                />
                <ProjectCard
                  href="/projects/bearister-ai-tool-for-future-lawyers"
                  imageUrl="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/691b0a5f64632f65ce6feb57_Thumbnail (35).avif"
                  imageAlt=""
                  title="Bearister AI - A Tool for the Future Lawyers"
                />
              </div>
            </div>
            <a
              href="/projects"
              className="relative text-violet-600 items-center bg-violet-500 shadow-[rgba(255,255,255,0.72)_0px_2px_3px_0px_inset] box-border caret-transparent flex flex-col h-14 justify-center max-w-full text-left w-full z-[99] overflow-hidden px-8 py-4 rounded-lg md:hidden md:max-w-[158px]"
            >
              <div className="relative text-gray-200 box-border caret-transparent min-h-[auto] min-w-[auto] w-full md:min-h-0 md:min-w-0 md:w-auto">
                <div className="relative items-center box-border caret-transparent gap-x-2 flex h-full justify-center gap-y-2 w-full z-[1]">
                  <div className="text-zinc-50 text-base font-bold box-border caret-transparent tracking-[0.32px] leading-[19.2px] min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0">
                    See All
                  </div>
                  <img
                    src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6734f4f0d4f40160f9368770_CTA Arrow.webp"
                    alt=""
                    className="box-border caret-transparent h-7 max-w-7 min-h-[auto] min-w-[auto] object-contain w-full md:h-6 md:max-w-6 md:min-h-0 md:min-w-0"
                  />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[-110px] box-border caret-transparent z-0 inset-x-[0%]">
        <img
          src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/676326fc1499b7200de1f037_Shade.avif"
          alt=""
          className="aspect-[auto_1522_/_420] box-border caret-transparent inline-block h-[420px] max-w-full w-full"
        />
      </div>
    </section>
  );
};
