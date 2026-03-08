import { Breadcrumb } from "@/integrations/project-details/sections/Hero/components/Breadcrumb";
import { HeroStats } from "@/integrations/project-details/sections/Hero/components/HeroStats";

const HERO_FALLBACK_POSTER =
  "https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/674238984b5b15db637f4a63_-60bc-4584-9ad6-9caa931f8372-poster-00001.jpg";

const HERO_BACKGROUND_VIDEO =
  "https://anpeyqpnsavhykstwwbq.supabase.co/storage/v1/object/public/images/Prozesy%20Project%20Image/8217d5dd-f5b9-4ac6-9530-447e953c04ff-1772926402531.mp4";

interface HeroProps {
  projectData?: {
    title?: string;
    category?: string;
    stat1Label?: string;
    stat1Value?: string;
    stat2Label?: string;
    stat2Value?: string;
    projectImageUrl?: string;
    slug?: string;
  };
}

export const Hero = ({ projectData }: HeroProps) => {
  if (!projectData) return null;

  const heroPoster = projectData.projectImageUrl || HERO_FALLBACK_POSTER;

  return (
    <section className="relative bg-[linear-gradient(159deg,rgba(0,0,0,0.72),rgba(20,22,21,0.84)_44%,rgb(14,65,39))] box-border caret-transparent w-full overflow-hidden rounded-b-[20px] md:bg-[linear-gradient(159deg,rgba(0,0,0,0.72),rgba(20,22,21,0.84)_44%,rgba(14,65,39,0.71))] md:rounded-b-[32px]">
      <div className="relative text-white box-border caret-transparent h-full object-cover w-full overflow-hidden pb-[100px] md:pb-[300px]">
        <div className="absolute inset-0 z-[-100] overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster={heroPoster}
            className="absolute h-full w-full object-cover m-auto -inset-full z-[-100]"
            style={{
              backgroundImage: `url(${heroPoster})`,
              backgroundPosition: "50%",
              backgroundSize: "cover",
            }}
          >
            <source src={HERO_BACKGROUND_VIDEO} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="box-border caret-transparent z-[1] px-5 md:px-[94px]">
          <div className="box-border caret-transparent max-w-[1252px] w-full mx-auto">
            <div className="relative items-center box-border caret-transparent flex-col h-full justify-center text-left w-full z-[2] px-[15px] md:px-0">
              <div className="relative items-center box-border caret-transparent flex flex-col text-center z-[2]">
                <div className="box-border caret-transparent min-h-[auto] min-w-[auto] mt-7 mb-5 md:mb-14">
                  <a
                    href="/"
                    className="text-violet-600 box-border caret-transparent inline-block max-w-full"
                  >
                    <img
                      src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/679a08604def1d26213e6133_designmonks (1).svg"
                      alt=""
                      className="box-border caret-transparent inline-block max-w-full"
                    />
                  </a>
                </div>
                <Breadcrumb projectTitle={projectData.title} slug={projectData.slug} />
                <div className="box-border caret-transparent max-w-[800px] min-h-[auto] min-w-[auto] w-full mt-4 mx-auto">
                  <h1 className="text-zinc-50 text-[32px] font-bold box-border caret-transparent leading-[38.4px] capitalize font-redhatdisplay_variablefont_wght md:text-[56px] md:leading-[67.2px]">
                    {projectData.title}
                  </h1>
                </div>
              </div>
              <div className="items-stretch box-border caret-transparent gap-x-3.5 flex justify-center max-w-[1038px] gap-y-3.5 w-full mt-4 mx-auto md:[align-items:normal] md:gap-x-[normal] md:justify-between md:gap-y-[normal] md:mt-10">
                <HeroStats
                  label="Category"
                  value={projectData.category || ""}
                  variant="max-w-[158px] min-h-[auto] min-w-[auto]"
                  textVariant="min-h-[auto] min-w-[auto]"
                />
                <HeroStats
                  label={projectData.stat1Label || "Stats"}
                  value={projectData.stat1Value || ""}
                  variant="flex max-w-[158px] min-h-[auto] min-w-[auto]"
                  textVariant="min-h-[auto] min-w-[auto]"
                />
                <HeroStats
                  label={projectData.stat2Label || "Info"}
                  value={projectData.stat2Value || ""}
                  variant="flex max-w-[158px] min-h-[auto] min-w-[auto]"
                  textVariant="min-h-[auto] min-w-[auto]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute box-border caret-transparent h-[100px] max-w-20 w-full z-[4] right-[0%] top-[0%] md:h-auto md:max-w-none md:w-auto">
        <img
          src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67424426f5b29ed4026778df_Cube.avif"
          alt=""
          className="box-border caret-transparent inline-block max-w-full"
        />
      </div>
      <div className="absolute items-end box-border caret-transparent flex h-[100px] justify-start max-w-20 w-full left-[0%] bottom-[0%] md:[align-items:normal] md:block md:h-auto md:justify-normal md:max-w-none md:w-auto">
        <img
          src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/674d7289f26b0c0ef65da954_Cube.avif"
          alt=""
          className="box-border caret-transparent block blur-[2.5px] max-w-full min-h-[auto] min-w-[auto] md:inline-block md:min-h-0 md:min-w-0"
        />
      </div>
      <div className="absolute items-start box-border caret-transparent flex h-[200px] justify-end max-w-[260px] right-[-10%] top-[-2%] w-full z-[1] md:h-auto md:max-w-none md:right-[-6%] md:top-[-3%] md:w-auto">
        <img
          src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6798a3cca97b5f56d4a2f0ca_Ellipse 36.svg"
          alt=""
          className="box-border caret-transparent h-full max-w-full min-h-[auto] min-w-[auto] w-full"
        />
      </div>
    </section>
  );
};
