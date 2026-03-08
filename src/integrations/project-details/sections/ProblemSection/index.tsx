import { ProblemCard } from "@/integrations/project-details/sections/ProblemSection/components/ProblemCard";

interface ProblemSectionProps {
  projectData?: {
    title?: string;
    challenge?: string;
    adReport?: {
      failedAdsSummary?: string;
      cpaBefore?: string;
      roasBefore?: string;
      goals?: string;
    };
  };
}

const splitSentences = (value: string): string[] => {
  return value
    .split(/(?<=[.!?])\s+/)
    .map((part) => part.trim())
    .filter(Boolean);
};

export const ProblemSection = ({ projectData }: ProblemSectionProps) => {
  const challenge =
    projectData?.challenge ||
    "We identified the core friction points and mapped the key blockers impacting conversion and usability.";

  const challengePoints = splitSentences(challenge).slice(0, 2);
  const adReport = projectData?.adReport;

  const reportPoints = [
    adReport?.failedAdsSummary
      ? `Failed ads: ${adReport.failedAdsSummary}`
      : "",
    adReport?.cpaBefore || adReport?.roasBefore
      ? `Before optimization: CPA ${adReport?.cpaBefore || "N/A"} and ROAS ${adReport?.roasBefore || "N/A"}.`
      : "",
    adReport?.goals ? `Growth target: ${adReport.goals}` : "",
  ].filter(Boolean);

  const fallbackPoints = [
    "Campaign tracking data was split across tools, making performance decisions slower.",
    "Rising acquisition costs made it difficult to scale ad spend while protecting margins.",
    "The team needed clearer audience and creative signals to stop waste and improve ROAS.",
  ];

  const problemItems = [...challengePoints, ...reportPoints, ...fallbackPoints].slice(0, 3);

  return (
    <section className="relative box-border caret-transparent">
      <div className="box-border caret-transparent z-[1] px-5 md:px-[94px]">
        <div className="box-border caret-transparent max-w-[1252px] w-full mx-auto">
          <div className="box-border caret-transparent py-[60px] md:py-[100px]">
            <div className="box-border caret-transparent max-w-[1038px] w-full mx-auto">
              <div className="items-start box-border caret-transparent gap-x-4 flex flex-col justify-between min-h-[auto] min-w-[auto] gap-y-4">
                <h2 className="text-[28px] font-bold box-border caret-transparent leading-[33.6px] min-h-[auto] min-w-[auto] font-redhatdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                  <em className="text-[28px] italic box-border caret-transparent leading-[33.6px] capitalize font-playfairdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                    Problem
                  </em>
                </h2>
                <div className="project-details-desc-wrap box-border caret-transparent">
                  <p className="project-details-desc project-details-desc--problem box-border caret-transparent">
                    {challenge}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 mt-8 md:grid-cols-3 md:gap-8 md:mt-14">
                {problemItems.map((item, index) => (
                  <ProblemCard
                    key={`${projectData?.title || "project"}-problem-${index}`}
                    problemNumber={`Problem ${index + 1}`}
                    description={item}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
