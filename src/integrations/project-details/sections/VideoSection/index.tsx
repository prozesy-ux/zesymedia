interface VideoSectionProps {
  projectData?: {
    title?: string;
    videoUrl?: string;
    projectImageUrl?: string;
    fullDescription?: string;
  };
}

const FALLBACK_IMAGE =
  "https://cdn.prod.website-files.com/plugins/Basic/assets/placeholder.60f9b1840c.svg";

export const VideoSection = ({ projectData }: VideoSectionProps) => {
  const hasVideo = Boolean(projectData?.videoUrl);

  return (
    <section className="relative box-border caret-transparent -mt-20 md:mt-[-250px]">
      <div className="box-border caret-transparent z-[1] px-5 md:px-[94px]">
        <div className="box-border caret-transparent max-w-[1252px] w-full mx-auto">
          <div className="box-border caret-transparent h-[180px] max-w-[1038px] w-full overflow-hidden mx-auto rounded-2xl md:h-[600px] md:rounded-[32px]">
            <div className="relative box-border caret-transparent h-full w-full md:h-auto">
              {hasVideo ? (
                <video
                  loop
                  autoPlay
                  muted
                  playsInline
                  preload="auto"
                  className="relative items-center box-border caret-transparent flex h-full justify-center object-cover align-baseline w-full z-[5] mx-auto rounded-lg md:h-auto md:rounded-3xl"
                >
                  <source src={projectData?.videoUrl} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={projectData?.projectImageUrl || FALLBACK_IMAGE}
                  alt={projectData?.title || "Project preview"}
                  className="relative items-center box-border caret-transparent flex h-full justify-center object-cover align-baseline w-full z-[5] mx-auto rounded-lg md:h-auto md:rounded-3xl"
                />
              )}
            </div>
          </div>
          <div className="box-border caret-transparent py-[60px] md:py-[100px]">
            <div className="box-border caret-transparent">
              <div className="box-border caret-transparent max-w-[1038px] text-center w-full mx-auto project-details-desc-wrap">
                <h2 className="text-neutral-950 text-[28px] font-bold box-border caret-transparent leading-[33.6px] capitalize font-redhatdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                  <span className="text-[28px] italic box-border caret-transparent inline-block leading-[33.6px] font-playfairdisplay_variablefont_wght md:text-5xl md:inline md:leading-[57.6px]">
                    Project
                  </span>
                  Description
                </h2>
                <p className="project-details-desc box-border caret-transparent">
                  {projectData?.fullDescription ||
                    "Our project focused on creating an exceptional user experience. We worked through every detail to ensure the solution meets the highest standards and delivers measurable results."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
