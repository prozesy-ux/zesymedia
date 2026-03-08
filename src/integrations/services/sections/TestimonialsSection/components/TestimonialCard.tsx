export type TestimonialCardProps = {
  ariaLabel: string;
  slideClassName: string;
  clientImageUrl: string;
  clientImageAlt: string;
  quoteIconUrl: string;
  quoteIconAlt: string;
  testimonialText: string;
  clientName: string;
  clientTitle: string;
  companyLogoUrl: string;
  companyLogoAlt: string;
};

export const TestimonialCard = (props: TestimonialCardProps) => {
  return (
    <div
      role="group"
      aria-label={props.ariaLabel}
      className={`relative bg-white box-border caret-transparent shrink-0 h-full min-h-[auto] min-w-[auto] origin-[50%_100%] w-[1000px] border border-neutral-200 overflow-hidden rounded-[20px] border-solid ${props.slideClassName}`}
    >
      <div className="box-border caret-transparent gap-x-6 flex flex-col h-full gap-y-6 pt-[15px] pb-6 px-[15px] md:gap-x-8 md:flex-row md:gap-y-8 md:pt-6 md:px-6">
        <div className="box-border caret-transparent shrink-0 h-auto max-w-full min-h-[auto] min-w-[auto] w-full overflow-hidden rounded-lg md:shrink md:h-full md:max-w-[300px]">
          <img
            src={props.clientImageUrl}
            alt={props.clientImageAlt}
            className="aspect-square box-border caret-transparent inline-block h-full max-w-full object-cover w-full md:aspect-auto"
          />
        </div>
        <div className="box-border caret-transparent flex flex-col max-w-none min-h-[auto] min-w-[auto] md:max-w-[552px]">
          <div className="box-border caret-transparent max-w-[35px] min-h-[auto] min-w-[auto] w-full mb-4 md:max-w-none md:w-auto">
            <img
              src={props.quoteIconUrl}
              alt={props.quoteIconAlt}
              className="box-border caret-transparent inline-block max-w-full"
            />
          </div>
          <div className="text-neutral-600 box-border caret-transparent min-h-[auto] min-w-[auto] mt-0 md:mt-5">
            <p className="text-base box-border caret-transparent tracking-[0.48px] leading-6 md:text-2xl md:leading-9">
              {props.testimonialText}
            </p>
          </div>
          <div className="items-start box-border caret-transparent gap-x-4 flex flex-col justify-between min-h-[auto] min-w-[auto] gap-y-4 mt-auto pt-6 md:items-end md:gap-x-[normal] md:flex-row md:gap-y-[normal] md:pt-8">
            <div className="text-neutral-950 items-start box-border caret-transparent gap-x-0 flex flex-col justify-center min-h-[auto] min-w-[auto] gap-y-0 md:gap-x-1.5 md:gap-y-1.5">
              <h3 className="text-2xl font-bold box-border caret-transparent leading-[28.8px] min-h-[auto] min-w-[auto] font-redhatdisplay_variablefont_wght">
                {props.clientName}
              </h3>
              <div className="text-neutral-600 text-base box-border caret-transparent tracking-[0.32px] leading-6 min-h-[auto] min-w-[auto]">
                {props.clientTitle}
              </div>
            </div>
            <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
              <img
                alt={props.companyLogoAlt}
                src={props.companyLogoUrl}
                className="box-border caret-transparent inline-block h-[70px] max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-white box-border caret-transparent h-full pointer-events-none w-full z-10 left-0 top-0"></div>
    </div>
  );
};
