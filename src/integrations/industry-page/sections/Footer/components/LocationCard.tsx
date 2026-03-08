export type LocationCardProps = {
  country: string;
  address: string;
  variant?: string;
};

export const LocationCard = (props: LocationCardProps) => {
  return (
    <div
      className={`backdrop-blur-[56px] shadow-[rgba(255,255,255,0.59)_-2px_-2px_0px_-1.75px,rgba(255,255,255,0.59)_2px_2px_0px_-1.75px] box-border caret-transparent w-full border px-3 py-[11.2px] rounded-2xl border-solid border-white/20 md:w-[220px] ${props.variant || "md:px-[11.2px]"}`}
    >
      <div className="text-zinc-50 items-start box-border caret-transparent gap-x-2 flex flex-col justify-between gap-y-2 text-left md:items-center md:text-center">
        <p className="text-base font-bold box-border caret-transparent tracking-[0.36px] leading-[19.2px] text-left font-redhatdisplay_variablefont_wght md:text-xl md:leading-6 md:text-center">
          {props.country}
        </p>
        <div className="text-neutral-400 box-border caret-transparent text-left md:text-center">
          <p className="box-border caret-transparent tracking-[0.36px] leading-[21px] text-left md:text-center">
            {props.address}
          </p>
        </div>
      </div>
    </div>
  );
};
