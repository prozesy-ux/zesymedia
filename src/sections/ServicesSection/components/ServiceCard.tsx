export type ServiceCardProps = {
  titlePrefix: string;
  titleSuffix?: string;
  description: string;
  linkHref: string;
  variant: string;
};

export const ServiceCard = (props: ServiceCardProps) => {
  return (
    <div
      className={`items-start box-border caret-transparent flex flex-col justify-center min-h-[230px] md:min-h-[327px] md:transform-none ${props.variant}`}
    >
      <div className="box-border caret-transparent">
        <h3 className="text-zinc-50 text-[32px] font-bold box-border caret-transparent leading-[38.4px] font-redhatdisplay_variablefont_wght md:text-[40px] md:leading-[48px]">
          {props.titlePrefix}
          {props.titleSuffix && (
            <>
              {" "}
              <span className="text-[32px] italic box-border caret-transparent leading-[38.4px] font-playfairdisplay_variablefont_wght md:text-[40px] md:leading-[48px]">
                {props.titleSuffix}
              </span>
            </>
          )}
        </h3>
      </div>
      <div className="bg-[linear-gradient(90deg,rgb(67,0,157),rgb(24,0,55))] box-border caret-transparent h-px w-full my-2 md:my-4"></div>
      <div className="box-border caret-transparent mb-[18px] md:mb-7">
        <p className="text-neutral-300 text-base box-border caret-transparent tracking-[0.36px] leading-6">
          {props.description}
        </p>
      </div>
      <a
        href={props.linkHref}
        className="text-slate-500 text-base font-bold box-border caret-transparent gap-x-2 flex tracking-[0.32px] leading-6 max-w-full gap-y-2 capitalize"
      >
        <div className="text-violet-600 box-border caret-transparent">
          See More
        </div>
        <div className="box-border caret-transparent">
          <img
            src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/67326d59201cc3b185432b90_CTA_Arrow.svg"
            alt=""
            className="box-border caret-transparent inline-block max-w-full"
          />
        </div>
      </a>
    </div>
  );
};
