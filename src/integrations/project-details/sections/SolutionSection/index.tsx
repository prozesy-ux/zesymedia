import { SolutionCard } from "@/integrations/project-details/sections/SolutionSection/components/SolutionCard";

interface SolutionSectionProps {
  projectData?: {
    title?: string;
    solution?: string;
    projectImageUrl?: string;
    solutionImageUrl?: string;
    solutionBullets?: string[];
    adReport?: {
      retargetingShare?: string;
      topCreativeWinner?: string;
      topAudienceWinner?: string;
    };
  };
}

const SOLUTION_FALLBACK_IMAGE =
  "https://cdn.prod.website-files.com/plugins/Basic/assets/placeholder.60f9b1840c.svg";

const splitSentences = (value: string): string[] => {
  return value
    .split(/(?<=[.!?])\s+/)
    .map((part) => part.trim())
    .filter(Boolean);
};

export const SolutionSection = ({ projectData }: SolutionSectionProps) => {
  const solution =
    projectData?.solution ||
    "We built a clean conversion path, simplified decision points, and aligned UX with business goals.";

  const adReport = projectData?.adReport;
  const baseItems =
    projectData?.solutionBullets && projectData.solutionBullets.length > 0
      ? projectData.solutionBullets
      : splitSentences(solution).slice(0, 4);

  const enhancedItems = [
    ...baseItems,
    adReport?.retargetingShare
      ? `Retargeting impact: ${adReport.retargetingShare}`
      : "",
    adReport?.topCreativeWinner
      ? `Top creative winner: ${adReport.topCreativeWinner}`
      : "",
    adReport?.topAudienceWinner
      ? `Top audience winner: ${adReport.topAudienceWinner}`
      : "",
  ].filter(Boolean);

  const solutionItems = enhancedItems.slice(0, 4);

  const solutionImage =
    projectData?.solutionImageUrl ||
    projectData?.projectImageUrl ||
    SOLUTION_FALLBACK_IMAGE;

  return (
    <section className="relative box-border caret-transparent">
      <div className="box-border caret-transparent z-[1] px-5 md:px-[94px]">
        <div className="box-border caret-transparent max-w-[1252px] w-full mx-auto">
          <div className="box-border caret-transparent pb-[60px] md:pb-[100px]">
            <div className="box-border caret-transparent max-w-[1038px] w-full mx-auto">
              <div className="items-start box-border caret-transparent gap-x-4 flex flex-col justify-between min-h-[auto] min-w-[auto] gap-y-4">
                <h2 className="text-[28px] font-bold box-border caret-transparent leading-[33.6px] min-h-[auto] min-w-[auto] font-redhatdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                  <em className="text-[28px] italic box-border caret-transparent leading-[33.6px] capitalize font-playfairdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                    Solution
                  </em>
                </h2>
                <p className="text-neutral-950 text-lg box-border caret-transparent tracking-[0.36px] leading-7 md:text-2xl md:leading-10">
                  {solution}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 md:gap-8 md:mt-14">
                <div className="box-border caret-transparent gap-y-4 grid">
                  {solutionItems.map((item, index) => (
                    <SolutionCard
                      key={`${projectData?.title || "project"}-solution-${index}`}
                      solutionNumber={`Solution ${index + 1}`}
                      description={item}
                      hasExtraSpacing={false}
                    />
                  ))}
                </div>

                <div className="overflow-hidden rounded-2xl border border-green-200 md:rounded-3xl">
                  <img
                    src={solutionImage}
                    alt={`${projectData?.title || "Project"} solution`}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
