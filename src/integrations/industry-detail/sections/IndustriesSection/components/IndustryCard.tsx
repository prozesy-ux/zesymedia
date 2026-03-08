export type IndustryCardProps = {
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
  imageClassName?: string;
  descriptionClassName?: string;
};

export const IndustryCard = (props: IndustryCardProps) => {
  return (
    <div className="relative items-stretch box-border caret-transparent flex flex-col shrink-0 h-[350px] justify-end max-w-[250px] w-full z-30 overflow-hidden mx-1.5 p-6 rounded-2xl md:h-96 md:max-w-[416px]">
      <div className="absolute box-border caret-transparent h-full w-full inset-[0%]">
        <img
          src={props.imageUrl}
          alt={props.imageAlt}
          className={
            props.imageClassName ||
            "box-border caret-transparent inline-block h-full max-w-full object-cover align-bottom w-full"
          }
        />
      </div>
      <div className="relative items-start box-border caret-transparent gap-x-0 flex flex-col justify-end min-h-[auto] min-w-[auto] gap-y-0 w-full z-[2] -mb-2">
        <div className="text-zinc-50 text-lg font-bold box-border caret-transparent tracking-[0.48px] leading-[21.6px] min-h-[auto] min-w-[auto] z-[2] font-redhatdisplay_variablefont_wght md:text-2xl md:leading-[28.8px]">
          {props.title}
        </div>
        <div
          className={
            props.descriptionClassName ||
            "text-neutral-300 text-base box-border caret-transparent h-[0%] leading-6 min-h-[auto] min-w-[auto] z-[2] overflow-hidden mt-2"
          }
        >
          {props.description}
        </div>
      </div>
      <div className="absolute bg-[linear-gradient(rgba(23,11,38,0)_27.31%,rgb(15,7,25)_84%)] box-border caret-transparent opacity-60 inset-[0%]"></div>
    </div>
  );
};
