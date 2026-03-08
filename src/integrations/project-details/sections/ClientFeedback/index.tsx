interface ClientFeedbackProps {
  projectData?: {
    testimonialName?: string;
    testimonialTitle?: string;
    testimonialImageUrl?: string;
    testimonialImageAlt?: string;
    testimonialBgColor?: string;
    testimonialQuote?: string;
    results?: string;
  };
}

const TESTIMONIAL_FALLBACK_IMAGE =
  "https://cdn.prod.website-files.com/plugins/Basic/assets/placeholder.60f9b1840c.svg";

export const ClientFeedback = ({ projectData }: ClientFeedbackProps) => {
  if (!projectData) return null;

  const quote =
    projectData.testimonialQuote ||
    projectData.results ||
    "The team delivered a clear and intuitive experience that improved user confidence and engagement.";

  const testimonialImage = projectData.testimonialImageUrl || TESTIMONIAL_FALLBACK_IMAGE;
  const testimonialAlt =
    projectData.testimonialImageAlt || `${projectData.testimonialName || "Client"} portrait`;

  return (
    <section className="box-border caret-transparent">
      <div className="box-border caret-transparent z-[1] px-5 md:px-[94px]">
        <div className="box-border caret-transparent max-w-[1252px] w-full mx-auto">
          <div className="box-border caret-transparent pb-[60px] md:pb-[100px]">
            <h2 className="text-[28px] font-bold box-border caret-transparent leading-[33.6px] text-left font-redhatdisplay_variablefont_wght md:text-5xl md:leading-[57.6px] md:text-center">
              Client{" "}
              <span className="text-[28px] italic box-border caret-transparent inline-block leading-[33.6px] text-left font-playfairdisplay_variablefont_wght md:text-5xl md:inline md:leading-[57.6px] md:text-center">
                feedback
              </span>
            </h2>
            <div className="box-border caret-transparent shrink-0 w-full mt-8 md:mt-14">
              <div className="box-border caret-transparent overflow-hidden rounded-[30px] border border-neutral-200 bg-white shadow-[rgba(15,23,42,0.08)_0px_10px_28px_-12px]">
                <div className="box-border caret-transparent grid grid-cols-1 md:grid-cols-[minmax(0,455px)_1fr]">
                  <div
                    className={`relative box-border caret-transparent p-4 md:p-5 ${projectData.testimonialBgColor || "bg-[#f6f3f4]"}`}
                  >
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,#ffffff_0%,transparent_58%)]" />
                    <img
                      src={testimonialImage}
                      alt={testimonialAlt}
                      className="relative box-border caret-transparent inline-block h-[280px] w-full rounded-[24px] object-cover shadow-[rgba(15,23,42,0.18)_0px_18px_40px_-18px] md:h-[519px]"
                    />
                  </div>

                  <div className="box-border caret-transparent flex flex-col justify-center p-5 md:px-10 md:py-9">
                    <div className="box-border caret-transparent max-w-[35px] w-full mb-4 md:max-w-none md:w-auto">
                      <img
                        src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/676867d77d744ee62cc34c90_.webp"
                        alt=""
                        className="box-border caret-transparent inline-block max-w-full"
                      />
                    </div>

                    <div className="text-neutral-600 box-border caret-transparent">
                      <p className="font-outfit_variablefont_wght text-lg box-border caret-transparent tracking-[0.03em] leading-8 md:text-[26px] md:leading-10">
                        {quote}
                      </p>
                    </div>

                    <div className="items-start box-border caret-transparent gap-x-4 flex flex-col justify-between gap-y-4 mt-auto pt-6 md:items-end md:flex-row md:pt-8">
                      <div className="text-neutral-950 items-start box-border caret-transparent gap-x-0 flex flex-col justify-center gap-y-0 md:gap-x-1.5 md:gap-y-1.5">
                        <h3 className="text-2xl font-bold box-border caret-transparent leading-[28.8px] font-redhatdisplay_variablefont_wght">
                          {projectData.testimonialName || "Client Name"}
                        </h3>
                        <div className="font-outfit_variablefont_wght text-neutral-600 text-base box-border caret-transparent tracking-[0.02em] leading-6">
                          {projectData.testimonialTitle || "Position at Company"}
                        </div>
                      </div>

                      <div className="box-border caret-transparent">
                        <img
                          alt={testimonialAlt}
                          src={testimonialImage}
                          className="box-border caret-transparent inline-block h-16 w-16 rounded-2xl object-cover ring-2 ring-white"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
