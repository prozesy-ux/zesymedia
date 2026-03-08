export type TestimonialCardProps = {
  clientImageUrl: string;
  clientImageAlt: string;
  iconUrl: string;
  iconAlt: string;
  companyLogoUrl: string;
  companyLogoAlt: string;
  testimonialText: string;
  clientName: string;
  clientTitle: string;
};

export const TestimonialCard = (props: TestimonialCardProps) => {
  return (
    <div className="absolute items-center box-border caret-transparent flex flex-col justify-center">
      <img
        src={props.clientImageUrl}
        alt={props.clientImageAlt}
        className="box-border caret-transparent h-full max-w-full min-h-[auto] min-w-[auto] object-cover w-full"
      />
      <img
        src={props.iconUrl}
        alt={props.iconAlt}
        className="absolute aspect-square box-border caret-transparent align-baseline w-12 z-0 md:w-20"
      />
      <div className="absolute items-start backdrop-blur-[1px] box-border caret-transparent gap-x-4 flex flex-col justify-end gap-y-4 w-full z-0 p-4 bottom-0 md:px-8 md:py-6">
        <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
          <img
            src={props.companyLogoUrl}
            alt={props.companyLogoAlt}
            className="box-border caret-transparent inline-block h-16 max-w-full"
          />
          <p className="text-zinc-50 text-base box-border caret-transparent flow-root tracking-[0.36px] leading-6 overflow-hidden md:text-lg md:leading-[27px]">
            {props.testimonialText}
          </p>
        </div>
        <div className="items-start box-border caret-transparent gap-x-1 flex flex-col justify-start min-h-[auto] min-w-[auto] gap-y-1">
          <p className="text-zinc-50 text-base font-bold box-border caret-transparent tracking-[0.36px] leading-[19.2px] min-h-[auto] min-w-[auto] font-redhatdisplay_variablefont_wght md:text-xl md:leading-6">
            {props.clientName}
          </p>
          <p className="text-neutral-300 text-sm box-border caret-transparent tracking-[0.36px] leading-[21px] min-h-[auto] min-w-[auto] md:text-base md:leading-6">
            {props.clientTitle}
          </p>
        </div>
      </div>
    </div>
  );
};
