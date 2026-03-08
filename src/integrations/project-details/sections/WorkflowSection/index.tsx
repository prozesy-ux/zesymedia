interface WorkflowSectionProps {
  projectData?: {
    title?: string;
    solution?: string;
    workflowScenario?: string;
    projectImageUrl?: string;
    workflowImageUrl?: string;
    adReport?: {
      period?: string;
      monthlyBudget?: string;
      metaAdsSpend?: string;
      googleAdsSpend?: string;
      retargetingShare?: string;
    };
  };
}

const WORKFLOW_FALLBACK_IMAGE =
  "https://cdn.prod.website-files.com/plugins/Basic/assets/placeholder.60f9b1840c.svg";

export const WorkflowSection = ({ projectData }: WorkflowSectionProps) => {
  const workflowImage =
    projectData?.workflowImageUrl ||
    projectData?.projectImageUrl ||
    WORKFLOW_FALLBACK_IMAGE;

  const adReport = projectData?.adReport;
  const workflowText =
    projectData?.workflowScenario ||
    projectData?.solution ||
    "The workflow maps each user action from discovery to conversion, reducing friction and improving decision speed.";

  return (
    <section className="relative bg-neutral-950 box-border caret-transparent overflow-hidden rounded-[21px] md:overflow-visible">
      <div className="relative box-border caret-transparent z-[1] px-5 md:px-[94px]">
        <div className="box-border caret-transparent max-w-[1252px] w-full mx-auto">
          <div className="box-border caret-transparent py-[60px] md:py-[100px]">
            <div className="relative box-border caret-transparent max-w-[1038px] w-full z-[1] mx-auto">
              <h2 className="text-white text-[28px] font-bold box-border caret-transparent leading-[33.6px] text-left capitalize font-redhatdisplay_variablefont_wght md:text-5xl md:leading-[57.6px] md:text-start">
                <span className="text-[28px] italic box-border caret-transparent inline-block leading-[33.6px] text-left font-playfairdisplay_variablefont_wght md:text-5xl md:inline md:leading-[57.6px] md:text-start">
                  Wireframe
                </span>
                <br className="text-[28px] box-border caret-transparent leading-[33.6px] text-left md:text-5xl md:leading-[57.6px] md:text-start" />
                &amp; UI Design
              </h2>

              <div className="box-border caret-transparent mt-8 mb-6 md:mt-14 md:mb-8 overflow-hidden rounded-2xl md:rounded-3xl">
                <img
                  src={workflowImage}
                  alt={`${projectData?.title || "Project"} workflow`}
                  className="box-border caret-transparent inline-block h-auto max-w-full w-full md:h-full"
                />
              </div>
            </div>

            <div className="relative box-border caret-transparent max-w-[1038px] w-full z-[1] mt-[60px] mx-auto md:mt-[100px]">
              <h2 className="text-white text-[28px] font-bold box-border caret-transparent leading-[33.6px] capitalize font-redhatdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                Workflow
                <span className="text-[28px] italic box-border caret-transparent inline-block leading-[33.6px] font-playfairdisplay_variablefont_wght md:text-5xl md:inline md:leading-[57.6px]">
                  Scenario
                </span>
              </h2>
              <p className="text-white/85 text-lg box-border caret-transparent tracking-[0.36px] leading-7 mt-4 md:text-2xl md:leading-10 md:mt-6">
                {workflowText}
              </p>

              {adReport && (
                <div className="grid grid-cols-1 gap-3 mt-6 md:grid-cols-2">
                  <div className="bg-white/10 border border-white/20 rounded-xl p-4">
                    <p className="text-white/70 text-sm leading-5">Campaign Window</p>
                    <p className="text-white text-lg font-bold leading-7 mt-1">
                      {adReport.period || "Ongoing"}
                    </p>
                  </div>
                  <div className="bg-white/10 border border-white/20 rounded-xl p-4">
                    <p className="text-white/70 text-sm leading-5">Monthly Budget</p>
                    <p className="text-white text-lg font-bold leading-7 mt-1">
                      {adReport.monthlyBudget || "N/A"}
                    </p>
                  </div>
                  <div className="bg-white/10 border border-white/20 rounded-xl p-4">
                    <p className="text-white/70 text-sm leading-5">Meta Ads Spend</p>
                    <p className="text-white text-lg font-bold leading-7 mt-1">
                      {adReport.metaAdsSpend || "N/A"}
                    </p>
                  </div>
                  <div className="bg-white/10 border border-white/20 rounded-xl p-4">
                    <p className="text-white/70 text-sm leading-5">Google Ads Spend</p>
                    <p className="text-white text-lg font-bold leading-7 mt-1">
                      {adReport.googleAdsSpend || "N/A"}
                    </p>
                  </div>
                  <div className="bg-white/10 border border-white/20 rounded-xl p-4 md:col-span-2">
                    <p className="text-white/70 text-sm leading-5">Retargeting Contribution</p>
                    <p className="text-white text-lg font-bold leading-7 mt-1">
                      {adReport.retargetingShare || "N/A"}
                    </p>
                  </div>
                </div>
              )}
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
    </section>
  );
};
