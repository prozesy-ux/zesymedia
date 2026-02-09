export type FeatureCardProps = {
  iconVariant: string;
  iconSrc: string;
  iconAlt: string;
  iconClassName: string;
  decorIconSrc: string;
  decorIconAlt: string;
  title: string;
  titleEmphasis: string;
  description: string;
  featureImageSrc: string;
  featureImageAlt: string;
  connectionLine?: React.ReactNode;
};

export const FeatureCard = (props: FeatureCardProps) => {
  return (
    <div className="relative bg-[linear-gradient(160deg,rgba(127,33,255,0.6)_0%,rgba(127,33,255,0)_41%,rgba(127,33,255,0)_71%,rgb(127,33,255)_100%)] box-border caret-transparent w-full z-[1] overflow-hidden rounded-3xl md:overflow-visible md:rounded-[40px] before:accent-auto before:bg-slate-900 before:caret-transparent before:text-zinc-800 before:block before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:z-[-1] before:rounded-3xl before:border-separate before:inset-px before:font-outfit_variablefont_wght before:md:rounded-[40px]">
      <div
        className={`absolute box-border caret-transparent hidden z-[-1] md:block before:accent-auto before:caret-transparent before:text-zinc-800 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-outfit_variablefont_wght after:accent-auto after:caret-transparent after:clear-both after:text-zinc-800 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-outfit_variablefont_wght ${props.iconVariant}`}
      >
        {props.connectionLine ? (
          props.connectionLine
        ) : (
          <img
            src={props.iconSrc}
            alt={props.iconAlt}
            className={`box-border caret-transparent ${props.iconClassName}`}
          />
        )}
        <img
          src={props.decorIconSrc}
          alt={props.decorIconAlt}
          className="box-border caret-transparent h-2 w-2"
        />
      </div>
      <div className="relative box-border caret-transparent gap-x-6 flex flex-col h-full gap-y-6 w-full overflow-hidden pt-7 pb-px px-5 md:gap-x-10 md:gap-y-10 md:pt-8 md:px-8">
        <div className="box-border caret-transparent gap-x-3 flex flex-col gap-y-3">
          <h3 className="text-zinc-50 text-xl font-bold box-border caret-transparent leading-6 font-redhatdisplay_variablefont_wght md:text-2xl md:leading-[28.8px]">
            {props.title}{" "}
            <em className="text-xl italic box-border caret-transparent leading-6 capitalize font-playfairdisplay_variablefont_wght md:text-2xl md:leading-[28.8px]">
              {props.titleEmphasis}
            </em>
          </h3>
          <p className="text-neutral-300 text-base box-border caret-transparent tracking-[0.36px] leading-6 md:text-lg md:leading-[27px]">
            {props.description}
          </p>
        </div>
        <div className="box-border caret-transparent overflow-hidden mt-auto rounded-br-[5px]">
          <img
            src={props.featureImageSrc}
            alt={props.featureImageAlt}
            className="box-border caret-transparent inline-block max-w-full"
          />
        </div>
      </div>
    </div>
  );
};
