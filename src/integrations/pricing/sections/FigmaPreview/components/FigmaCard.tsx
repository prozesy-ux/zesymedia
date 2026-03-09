export type FigmaCardProps = {
  imageUrl: string;
  title: string;
  description: string;
  figmaFileUrl: string;
  variant: string;
  buttonText?: string;
};

export const FigmaCard = (props: FigmaCardProps) => {
  return (
    <div
      className={`relative box-border caret-transparent col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1] min-h-[auto] min-w-[auto] overflow-hidden ${props.variant}`}
    >
      <img
        src={props.imageUrl}
        alt=""
        className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full rounded-2xl md:object-fill md:rounded-3xl"
      />
      <div className="absolute box-border caret-transparent gap-x-6 flex flex-col gap-y-6 p-4 bottom-[0%] inset-x-[0%] md:p-8">
        <div className="box-border caret-transparent gap-x-2 flex flex-col min-h-[auto] min-w-[auto] gap-y-2 md:gap-x-3 md:gap-y-3">
          <h3 className="text-zinc-50 text-xl font-bold box-border caret-transparent leading-6 min-h-[auto] min-w-[auto] font-redhatdisplay_variablefont_wght md:text-2xl md:leading-[28.8px]">
            {props.title}
          </h3>
          <p className="text-neutral-300 text-base box-border caret-transparent tracking-[0.36px] leading-6 min-h-[auto] min-w-[auto] md:text-lg md:leading-[27px]">
            {props.description}
          </p>
        </div>
        <a
          href={props.figmaFileUrl}
          className="relative text-violet-600 items-center bg-white/20 shadow-[rgba(255,255,255,0.72)_0px_1.6px_3px_0px_inset] box-border caret-transparent flex flex-col h-14 justify-center max-w-full min-h-[auto] min-w-[auto] text-left w-full z-[5] border overflow-hidden rounded-lg border-solid border-white"
        >
          <div className="relative text-gray-200 box-border caret-transparent min-h-[auto] min-w-[auto] w-full md:w-auto">
            <div className="relative items-center box-border caret-transparent gap-x-2 flex h-full justify-center gap-y-2 w-full z-[1]">
              <div className="text-zinc-50 text-base font-bold box-border caret-transparent tracking-[0.32px] leading-[19.2px] min-h-[auto] min-w-[auto]">
                {props.buttonText || "See Figma File"}
              </div>
              <img
                src="https://c.animaapp.com/mmfqa5b2QIeLaz/assets/icon-21.svg"
                alt="Icon"
                className="box-border caret-transparent h-7 object-contain align-baseline w-full md:h-6"
              />
            </div>
          </div>
          <img
            src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/672a7a8e3a6aba070d15d4c0_Star 6.avif"
            alt=""
            className="absolute box-border caret-transparent max-w-full right-[0%] top-[0%]"
          />
        </a>
      </div>
    </div>
  );
};
