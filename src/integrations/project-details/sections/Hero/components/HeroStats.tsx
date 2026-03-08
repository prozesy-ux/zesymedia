export type HeroStatsProps = {
  label: string;
  value: string;
  variant: string;
  textVariant: string;
};

export const HeroStats = (props: HeroStatsProps) => {
  return (
    <div
      className={`items-center box-border caret-transparent gap-x-0 basis-auto flex-col grow-0 shrink-0 gap-y-0 text-center w-full md:gap-x-1 md:basis-[0%] md:grow md:shrink md:max-w-none md:gap-y-1 md:w-auto ${props.variant}`}
    >
      <div
        className={`text-neutral-400 text-base box-border caret-transparent tracking-[0.36px] leading-6 md:text-lg md:leading-[27px] ${props.textVariant}`}
      >
        {props.label}
      </div>
      <div
        className={`text-zinc-50 text-base font-semibold box-border caret-transparent tracking-[0.48px] leading-6 md:text-2xl md:font-normal md:leading-9 ${props.textVariant}`}
      >
        {props.value}
      </div>
    </div>
  );
};
