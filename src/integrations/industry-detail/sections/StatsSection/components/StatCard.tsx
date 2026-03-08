export type StatCardProps = {
  iconUrl: string;
  iconAlt: string;
  statValue: string;
  description: string;
};

export const StatCard = (props: StatCardProps) => {
  return (
    <div className="bg-zinc-50 bg-[linear-gradient(rgba(184,125,255,0.05),rgb(250,250,250))] box-border caret-transparent min-h-[auto] min-w-[auto] border border-neutral-200 px-5 py-7 rounded-2xl border-solid md:p-8">
      <img
        src={props.iconUrl}
        alt={props.iconAlt}
        className="box-border caret-transparent inline-block max-w-full"
      />
      <div className="text-neutral-950 box-border caret-transparent">
        <div className="text-[32px] font-bold box-border caret-transparent leading-[38.4px] font-redhatdisplay_variablefont_wght md:text-[56px] md:leading-[67.2px]">
          {props.statValue}
        </div>
      </div>
      <div className="text-neutral-600 box-border caret-transparent">
        <p className="text-base box-border caret-transparent tracking-[0.36px] leading-6">
          {props.description}
        </p>
      </div>
    </div>
  );
};
