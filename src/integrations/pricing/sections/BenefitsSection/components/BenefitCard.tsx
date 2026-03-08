export type BenefitCardProps = {
  imageUrl: string;
  imageAlt?: string;
  imageAspectClass?: string;
  imageContainerHeightClass: string;
  imageContainerMaxWidthClass: string;
  imageContainerMdHeightClass: string;
  imageContainerMdMaxWidthClass: string;
  title: string;
  description: string;
  containerVariant?: string;
};

export const BenefitCard = (props: BenefitCardProps) => {
  return (
    <div
      className={
        props.containerVariant ||
        "box-border caret-transparent relative bg-white min-h-[auto] min-w-[auto] border border-neutral-200 overflow-hidden px-5 py-7 rounded-2xl border-solid md:p-8"
      }
    >
      <div className="box-border caret-transparent">
        <div
          className={`box-border caret-transparent ${props.imageContainerHeightClass} ${props.imageContainerMaxWidthClass} w-full ${props.imageContainerMdHeightClass} ${props.imageContainerMdMaxWidthClass}`}
        >
          <img
            src={props.imageUrl}
            alt={props.imageAlt || ""}
            className={`${props.imageAspectClass || ""} box-border caret-transparent inline-block h-full max-w-full object-contain w-full`}
          />
        </div>
        <div className="box-border caret-transparent gap-x-2 flex flex-col gap-y-2 mt-8">
          <div className="text-neutral-950 box-border caret-transparent min-h-[auto] min-w-[auto]">
            <h3 className="text-xl font-bold box-border caret-transparent leading-6 font-redhatdisplay_variablefont_wght md:text-[32px] md:leading-[38.4px]">
              {props.title}
            </h3>
          </div>
          <div className="text-neutral-600 box-border caret-transparent min-h-[auto] min-w-[auto]">
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
