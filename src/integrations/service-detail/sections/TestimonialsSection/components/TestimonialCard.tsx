export type TestimonialCardProps = {
  ariaLabel: string;
  quoteIconSrc: string;
  quoteIconAlt: string;
  testimonialText: string;
  avatarSrc: string;
  avatarAlt: string;
  decorIconSrc: string;
  decorIconAlt: string;
  authorName: string;
  authorTitle: string;
  companyLogoSrc: string;
  companyLogoAlt: string;
};

export const TestimonialCard = (props: TestimonialCardProps) => {
  return (
    <div
      role="group"
      aria-label={props.ariaLabel}
      className="box-border caret-transparent flex flex-col border border-neutral-200 overflow-clip rounded-3xl border-solid md:flex-row"
    >
      <div className="items-start aspect-auto bg-zinc-50 box-border caret-transparent gap-x-6 flex basis-[0%] flex-col grow justify-start order-last gap-y-6 w-80 p-4 md:aspect-[9_/_16] md:gap-x-12 md:basis-auto md:grow-0 md:order-none md:gap-y-12 md:w-[396px] md:p-8">
        <img
          src={props.quoteIconSrc}
          alt={props.quoteIconAlt}
          className="box-border caret-transparent w-8 md:w-10"
        />
        <p className="text-neutral-600 text-xl box-border caret-transparent tracking-[0.48px] leading-[30px] md:text-2xl md:leading-9">
          {props.testimonialText}
        </p>
      </div>
      <div className="relative aspect-[9_/_16] box-border caret-transparent min-w-80 w-80 overflow-hidden md:min-w-[396px] md:w-[396px]">
        <div className="absolute items-center box-border caret-transparent flex flex-col justify-center">
          <img
            src={props.avatarSrc}
            alt={props.avatarAlt}
            className="box-border caret-transparent h-full max-w-full object-cover w-full"
          />
          <img
            src={props.decorIconSrc}
            alt={props.decorIconAlt}
            className="absolute aspect-square box-border caret-transparent w-12 z-0 md:w-20"
          />
          <div className="absolute items-start backdrop-blur-[1px] box-border caret-transparent gap-x-4 flex flex-col justify-end gap-y-4 w-full z-0 p-4 bottom-0 md:px-8 md:py-6">
            <div className="items-start box-border caret-transparent gap-x-1 flex flex-col justify-start gap-y-1">
              <p className="text-zinc-50 text-base font-bold box-border caret-transparent tracking-[0.36px] leading-[19.2px] font-redhatdisplay_variablefont_wght md:text-xl md:leading-6">
                {props.authorName}
              </p>
              <p className="text-neutral-300 text-sm box-border caret-transparent tracking-[0.36px] leading-[21px] md:text-base md:leading-6">
                {props.authorTitle}
              </p>
              <img
                alt={props.companyLogoAlt}
                src={props.companyLogoSrc}
                className="box-border caret-transparent h-16 max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
