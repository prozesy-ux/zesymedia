interface StyleGuideSectionProps {
  projectData?: {
    title?: string;
    projectImageUrl?: string;
    styleGuideImages?: string[];
  };
}

const DEFAULT_STYLE_IMAGE =
  "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6992ed3faba4765ae06fab94_Photo (15).avif";

export const StyleGuideSection = ({ projectData }: StyleGuideSectionProps) => {
  const providedImages = (projectData?.styleGuideImages || []).filter(
    (image): image is string => Boolean(image),
  );
  const fallbackImage = projectData?.projectImageUrl || DEFAULT_STYLE_IMAGE;
  const sourceImages =
    providedImages.length > 0
      ? providedImages
      : [fallbackImage, fallbackImage, fallbackImage];

  const firstImage = sourceImages[0] || fallbackImage;
  const secondImage = sourceImages[1] || firstImage;
  const thirdImage = sourceImages[2] || firstImage;

  return (
    <section className="relative bg-neutral-950 box-border caret-transparent overflow-hidden rounded-[21px]">
      <div className="box-border caret-transparent z-[1] px-5 md:px-[94px]">
        <div className="box-border caret-transparent max-w-[1252px] w-full mx-auto">
          <div className="box-border caret-transparent py-[60px] md:py-[100px]">
            <div className="relative box-border caret-transparent max-w-[1038px] w-full z-[1] mx-auto">
              <div className="items-center box-border caret-transparent flex justify-center">
                <h2 className="text-white text-[28px] font-bold box-border caret-transparent leading-[33.6px] min-h-[auto] min-w-[auto] capitalize font-redhatdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                  <span className="text-[28px] italic box-border caret-transparent inline-block leading-[33.6px] font-playfairdisplay_variablefont_wght md:text-5xl md:inline md:leading-[57.6px]">
                    Style Guide
                  </span>
                  &amp; Component
                </h2>
              </div>
              <div className="box-border caret-transparent gap-x-6 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto_auto] gap-y-6 mt-8 md:gap-x-8 md:grid-cols-[1fr_1fr] md:gap-y-8 md:mt-14">
                <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
                  <img
                    src={firstImage}
                    alt={`${projectData?.title || "Project"} style guide 1`}
                    className="box-border caret-transparent inline-block max-w-full w-full"
                  />
                </div>
                <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
                  <img
                    src={secondImage}
                    alt={`${projectData?.title || "Project"} style guide 2`}
                    className="box-border caret-transparent inline-block max-w-full w-full"
                  />
                </div>
                <div className="box-border caret-transparent col-end-2 col-start-1 row-end-3 row-start-2 min-h-[auto] min-w-[auto] md:col-end-3">
                  <img
                    src={thirdImage}
                    alt={`${projectData?.title || "Project"} style guide 3`}
                    className="box-border caret-transparent inline-block max-w-full w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute box-border caret-transparent z-0 bottom-[0%] inset-x-[0%]">
        <img
          src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/676326fc1499b7200de1f037_Shade.avif"
          alt=""
          className="aspect-[auto_1522_/_420] box-border caret-transparent inline-block h-[420px] max-w-full w-full"
        />
      </div>
      <div className="absolute box-border caret-transparent max-w-[74px] w-full right-[0%] top-[0%] md:max-w-[211.522px]">
        <img
          src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67632f43621fc431588b34d4_Isosphere.avif"
          alt=""
          className="box-border caret-transparent inline-block h-full max-w-full w-full"
        />
      </div>
    </section>
  );
};
