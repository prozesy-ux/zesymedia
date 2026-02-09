export type BenefitCardProps = {
  iconUrl: string;
  iconAlt?: string;
  iconSizes?: string;
  iconHeight: string;
  iconMaxWidth: string;
  iconHeightMd: string;
  iconMaxWidthMd: string;
  title: string;
  description: string;
  variant?: string;
};

export const BenefitCard = (props: BenefitCardProps) => {
  return (
    <div
      className={`relative bg-white box-border caret-transparent border border-neutral-200 overflow-hidden px-5 py-7 rounded-2xl border-solid md:p-8 ${props.variant || ""}`}
    >
      <div className="box-border caret-transparent">
        <div
          className={`box-border caret-transparent ${props.iconHeight} ${props.iconMaxWidth} w-full ${props.iconHeightMd} ${props.iconMaxWidthMd}`}
        >
          <img
            src={props.iconUrl}
            alt={props.iconAlt || ""}
            sizes={props.iconSizes}
            className="box-border caret-transparent inline-block h-full max-w-full object-contain w-full"
          />
        </div>
        <div className="box-border caret-transparent gap-x-2 flex flex-col gap-y-2 mt-8">
          <div className="text-neutral-950 box-border caret-transparent">
            <h3 className="text-xl font-bold box-border caret-transparent leading-6 font-redhatdisplay_variablefont_wght md:text-[32px] md:leading-[38.4px]">
              {props.title}
            </h3>
          </div>
          <div className="text-neutral-600 box-border caret-transparent">
            <p className="text-base box-border caret-transparent tracking-[0.36px] leading-6 md:text-lg md:leading-[27px]">
              {props.description}
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bg-purple-400/30 box-border caret-transparent blur-[100px] h-[200px] left-[-90px] max-w-[450px] top-[-170px] rotate-[7.699991005283499deg] w-full"></div>
    </div>
  );
};
