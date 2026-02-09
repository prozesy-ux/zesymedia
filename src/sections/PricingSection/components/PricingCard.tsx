export type PricingCardProps = {
  price: string;
  subtitle: string;
  title: string;
  features: Array<{
    iconUrl: string;
    text: string;
  }>;
  ctaUrl: string;
  ctaText: string;
  ctaArrowUrl: string;
  ctaStarUrl: string;
  containerVariant: string;
  innerContainerVariant: string;
  buttonVariant: string;
  showDecorations?: boolean;
  decorationEllipseUrl?: string;
};

export const PricingCard = (props: PricingCardProps) => {
  return (
    <div className={props.containerVariant}>
      <div
        className={`box-border caret-transparent rounded-2xl md:rounded-3xl ${props.innerContainerVariant}`}
      >
        <div className="relative bg-neutral-950 box-border caret-transparent text-left pt-7 pb-5 px-5 rounded-2xl md:pt-[72px] md:pb-8 md:px-8 md:rounded-3xl bg-[linear-gradient(162deg,rgba(95,0,224,0.2)_8%,rgba(95,0,224,0)_47%,rgba(95,0,224,0)_80%,rgba(95,0,224,0.2)_100%,rgb(10,10,10))]">
          <div className="box-border caret-transparent h-full md:h-auto">
            <div className="text-zinc-50 box-border caret-transparent">
              <div className="box-border caret-transparent gap-x-2 flex flex-col gap-y-2">
                <div className="text-[28px] font-bold box-border caret-transparent leading-[33.6px] font-redhatdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                  {props.price}
                </div>
                <div className="text-base box-border caret-transparent tracking-[0.36px] leading-6 md:text-lg md:leading-[27px]">
                  {props.subtitle}
                </div>
              </div>
              <h3 className="text-lime-300 text-2xl font-bold box-border caret-transparent leading-[28.8px] capitalize mt-6 font-redhatdisplay_variablefont_wght md:text-[32px] md:leading-[38.4px]">
                {props.title}
              </h3>
            </div>
            <div className="bg-[linear-gradient(90deg,rgb(24,0,55),rgb(67,0,157)_50%,rgb(24,0,55))] box-border caret-transparent h-px w-full my-6"></div>
            <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4">
              {props.features.map((feature, index) => (
                <div
                  key={index}
                  className="text-zinc-50 items-start box-border caret-transparent gap-x-2 flex justify-start gap-y-2"
                >
                  <div className="box-border caret-transparent shrink-0">
                    <div className="box-border caret-transparent h-6 w-6">
                      <img
                        src={feature.iconUrl}
                        alt="Icon"
                        className="box-border caret-transparent w-full"
                      />
                    </div>
                  </div>
                  <div className="text-base box-border caret-transparent tracking-[0.36px] leading-6 md:text-lg md:leading-[27px]">
                    {feature.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="box-border caret-transparent inline-block w-full z-30 mt-6 md:mt-[55px]">
              <a
                href={props.ctaUrl}
                className="relative text-violet-600 items-center bg-violet-500 bg-[linear-gradient(rgb(89,45,181)_25%,rgb(125,64,255))] shadow-[rgba(255,255,255,0.72)_0px_1.6px_3px_0px_inset] box-border caret-transparent flex flex-col h-14 justify-center w-full z-[5] overflow-hidden rounded-lg md:bg-transparent"
              >
                <div
                  className={`absolute items-center bg-neutral-400 box-border caret-transparent flex h-full justify-center w-full inset-[0%] md:transform-none ${props.buttonVariant}`}
                >
                  <div className="absolute bg-[linear-gradient(90deg,rgba(255,255,255,0.79)_61%,rgb(255,255,255)_75%)] box-border caret-transparent blur-[6px] h-20 -translate-y-10 w-full left-2/4 right-[0%] top-2/4 bottom-[0%] md:translate-y-[-50.0%]"></div>
                </div>
                <div className="absolute bg-[linear-gradient(rgb(89,45,181)_25%,rgb(125,64,255))] box-border caret-transparent rounded-lg inset-[0%]"></div>
                <div className="relative text-gray-200 box-border caret-transparent w-full md:w-auto">
                  <div className="relative items-center box-border caret-transparent gap-x-2 flex h-full justify-center gap-y-2 w-full z-[1]">
                    <div className="text-zinc-50 text-base font-bold box-border caret-transparent tracking-[0.32px] leading-[19.2px]">
                      {props.ctaText}
                    </div>
                    <img
                      src={props.ctaArrowUrl}
                      alt=""
                      className="box-border caret-transparent h-7 max-w-7 object-contain w-full md:h-6 md:max-w-6"
                    />
                  </div>
                </div>
                <img
                  src={props.ctaStarUrl}
                  alt=""
                  className="absolute box-border caret-transparent max-w-full right-[0%] top-[0%]"
                />
              </a>
            </div>
          </div>
        </div>
        {props.showDecorations && (
          <div className="box-border caret-transparent before:accent-auto before:caret-transparent before:text-zinc-800 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-left before:indent-[0px] before:normal-case before:visible before:border-separate before:font-outfit_variablefont_wght after:accent-auto after:caret-transparent after:clear-both after:text-zinc-800 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-left after:indent-[0px] after:normal-case after:visible after:border-separate after:font-outfit_variablefont_wght"></div>
        )}
      </div>
      {props.showDecorations && props.decorationEllipseUrl && (
        <>
          <img
            src={props.decorationEllipseUrl}
            alt=""
            className="absolute box-border caret-transparent h-[200px] max-w-[200px] pointer-events-none right-[-92px] top-[-79px] z-[21] bottom-[0%]"
          />
          <img
            src={props.decorationEllipseUrl}
            alt=""
            className="absolute bottom-[-53px] box-border caret-transparent h-[200px] max-w-[200px] pointer-events-none right-[-55px] w-full z-[21]"
          />
          <div className="absolute bg-[linear-gradient(rgb(89,45,181)_25%,rgb(125,64,255))] shadow-[rgba(0,0,0,0.55)_0px_20px_41px_0px] box-border caret-transparent blur-[50px] h-full opacity-60 w-full z-[2] rounded-2xl inset-[0%] md:h-auto md:w-auto md:rounded-3xl"></div>
        </>
      )}
    </div>
  );
};
