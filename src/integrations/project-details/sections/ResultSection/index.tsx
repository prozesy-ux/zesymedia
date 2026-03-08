interface ResultSectionProps {
  projectData?: {
    title?: string;
    results?: string;
    stat1Label?: string;
    stat1Value?: string;
    stat2Label?: string;
    stat2Value?: string;
    projectImageUrl?: string;
    resultImageUrl?: string;
    reportMetrics?: Array<{
      label: string;
      value: string;
      note?: string;
    }>;
    adReport?: {
      totalAdSpend?: string;
      cpaBefore?: string;
      cpaAfter?: string;
      roasBefore?: string;
      roasAfter?: string;
      salesBefore?: string;
      salesAfter?: string;
      seoGrowth?: string;
    };
  };
}

const RESULT_FALLBACK_IMAGE =
  "https://cdn.prod.website-files.com/plugins/Basic/assets/placeholder.60f9b1840c.svg";

const AD_REPORT_FALLBACK_COPY =
  "Campaign diagnostics, channel split optimization, and creative testing produced stronger conversion quality and more predictable growth.";

export const ResultSection = ({ projectData }: ResultSectionProps) => {
  const resultImage =
    projectData?.resultImageUrl ||
    projectData?.projectImageUrl ||
    RESULT_FALLBACK_IMAGE;

  const metrics = projectData?.reportMetrics || [];
  const adReport = projectData?.adReport;

  const reportSummaryItems = [
    {
      label: projectData?.stat1Label || "Primary KPI",
      value: projectData?.stat1Value || "-",
    },
    {
      label: projectData?.stat2Label || "Secondary KPI",
      value: projectData?.stat2Value || "-",
    },
  ];

  const detailedReportItems = adReport
    ? [
        {
          label: "Total Ad Spend",
          value: adReport.totalAdSpend || "N/A",
        },
        {
          label: "CPA Improvement",
          value: `${adReport.cpaBefore || "N/A"} to ${adReport.cpaAfter || "N/A"}`,
        },
        {
          label: "ROAS Improvement",
          value: `${adReport.roasBefore || "N/A"} to ${adReport.roasAfter || "N/A"}`,
        },
        {
          label: "Sales + SEO Growth",
          value: `${adReport.salesBefore || "N/A"} to ${adReport.salesAfter || "N/A"}`,
          note: adReport.seoGrowth || "N/A",
        },
      ]
    : [];

  return (
    <section className="box-border caret-transparent">
      <div className="box-border caret-transparent z-[1] px-5 md:px-[94px]">
        <div className="box-border caret-transparent max-w-[1252px] w-full mx-auto">
          <div className="box-border caret-transparent py-[60px] md:py-[100px]">
            <div className="box-border caret-transparent max-w-[1038px] w-full mx-auto">
              <h2 className="text-[28px] font-bold box-border caret-transparent leading-[33.6px] font-redhatdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                <span className="text-[28px] italic box-border caret-transparent inline-block leading-[33.6px] font-playfairdisplay_variablefont_wght md:text-5xl md:inline md:leading-[57.6px]">
                  The Result
                </span>
              </h2>
              <p className="project-details-desc project-details-desc--problem box-border caret-transparent mt-4 md:mt-6">
                {projectData?.results ||
                  "The final delivery improved user confidence, increased conversion performance, and created a scalable product foundation."}
              </p>

              <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 md:gap-8 md:mt-14">
                <div
                  className="relative box-border caret-transparent overflow-hidden rounded-[30px] border border-[#f0d6dd] p-6 md:p-8"
                  style={{
                    background:
                      "linear-gradient(160deg, #fff8fa 0%, #ffffff 48%, #f6f9ff 100%)",
                  }}
                >
                  <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#ffd7de] blur-3xl" />
                  <div className="pointer-events-none absolute -bottom-14 -left-10 h-36 w-36 rounded-full bg-[#dce9ff] blur-3xl" />

                  <div className="relative">
                    <span className="inline-flex items-center rounded-full border border-[#ffc2cc] bg-white/80 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-[#7d4650]">
                      Meta + Google Ads
                    </span>
                    <h3 className="mt-3 text-neutral-950 text-xl font-bold leading-8 md:text-[32px] md:leading-10">
                      Ads Performance Report
                    </h3>
                    <p className="mt-2 font-outfit_variablefont_wght text-[#5b6677] text-sm tracking-[0.02em] leading-6 md:text-base">
                      {adReport ? "Channel-level spend and performance movement after optimization." : AD_REPORT_FALLBACK_COPY}
                    </p>

                    <div className="grid grid-cols-1 gap-3 mt-6 sm:grid-cols-2">
                      {reportSummaryItems.map((item) => (
                        <div
                          key={item.label}
                          className="rounded-2xl border border-[#efe3e6] bg-white/95 p-4"
                        >
                          <p className="text-[#6b7280] text-xs tracking-[0.08em] leading-5 uppercase">
                            {item.label}
                          </p>
                          <p className="text-neutral-950 text-[28px] font-bold leading-8 mt-2">
                            {item.value}
                          </p>
                        </div>
                      ))}
                    </div>

                    {detailedReportItems.length > 0 ? (
                      <div className="grid grid-cols-1 gap-3 mt-4 sm:grid-cols-2">
                        {detailedReportItems.map((item) => (
                          <div
                            key={item.label}
                            className="rounded-2xl border border-[#e7edf8] bg-white/90 p-4"
                          >
                            <p className="text-[#667085] text-xs tracking-[0.08em] leading-5 uppercase">
                              {item.label}
                            </p>
                            <p className="text-neutral-950 text-base font-semibold leading-6 mt-2">
                              {item.value}
                            </p>
                            {item.note ? (
                              <p className="text-[#667085] text-sm leading-5 mt-1">{item.note}</p>
                            ) : null}
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>

                <div className="overflow-hidden rounded-[30px] border border-neutral-200 bg-white p-3 shadow-[rgba(15,23,42,0.08)_0px_8px_24px_-10px]">
                  <img
                    src={resultImage}
                    alt={`${projectData?.title || "Project"} result`}
                    className="h-full min-h-[340px] w-full rounded-[22px] object-cover"
                  />
                </div>
              </div>

              {metrics.length > 0 && (
                <div className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-3">
                  {metrics.map((metric, index) => (
                    <div
                      key={`${metric.label}-${index}`}
                      className="bg-[#f8fafc] border border-[#e8edf4] rounded-2xl p-5"
                    >
                      <p className="text-[#667085] text-xs tracking-[0.08em] leading-5 uppercase">
                        {metric.label}
                      </p>
                      <p className="text-neutral-950 text-2xl font-bold leading-8 mt-2">
                        {metric.value}
                      </p>
                      {metric.note ? (
                        <p className="text-[#667085] text-sm leading-5 mt-1">
                          {metric.note}
                        </p>
                      ) : null}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
