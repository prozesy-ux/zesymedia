export type CookieCheckboxProps = {
  checkboxLabel: string;
  title: string;
  description: string;
  isAlwaysActive?: boolean;
  containerVariant?: string;
  labelVariant?: string;
  checkboxVariant?: string;
};

export const CookieCheckbox = (props: CookieCheckboxProps) => {
  const containerClass = props.isAlwaysActive
    ? "relative items-start box-border caret-transparent gap-x-3 flex auto-cols-[1fr] grid-cols-[1fr_0.25fr] grid-rows-[auto] gap-y-3 pb-[5px] pointer-events-none"
    : props.containerVariant ||
      "relative items-start box-border caret-transparent gap-x-3 flex auto-cols-[1fr] grid-cols-[1fr_0.25fr] grid-rows-[auto] gap-y-3 pb-[5px]";

  const labelClass = props.isAlwaysActive
    ? "absolute font-bold box-border caret-transparent block inset-[0%] before:accent-auto before:caret-transparent before:text-zinc-800 before:table before:text-sm before:not-italic before:normal-nums before:font-bold before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-outfit_variablefont_wght after:accent-auto after:caret-transparent after:clear-both after:text-zinc-800 after:table after:text-sm after:not-italic after:normal-nums after:font-bold after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-outfit_variablefont_wght before:pointer-events-none after:pointer-events-none"
    : props.labelVariant ||
      "absolute font-bold box-border caret-transparent block inset-[0%] before:accent-auto before:caret-transparent before:text-zinc-800 before:table before:text-sm before:not-italic before:normal-nums before:font-bold before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-outfit_variablefont_wght after:accent-auto after:caret-transparent after:clear-both after:text-zinc-800 after:table after:text-sm after:not-italic after:normal-nums after:font-bold after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-outfit_variablefont_wght before:pointer-events-auto after:pointer-events-auto";

  const checkboxClass = props.isAlwaysActive
    ? "box-border caret-transparent h-[18px] leading-[normal] w-[18px] border mt-px rounded-[100%] border-solid md:h-[22px] md:w-[22px] text-[10px] bg-black bg-[url('https://d3e54v103j8qbb.cloudfront.net/static/custom-checkbox-checkmark.589d534424.svg')] bg-no-repeat bg-cover border-blue-500 bg-center"
    : props.checkboxVariant ||
      "box-border caret-transparent h-[18px] leading-[normal] w-[18px] border mt-px rounded-[100%] border-solid md:h-[22px] md:w-[22px] bg-blue-600/20 border-stone-300";

  return (
    <div className={containerClass}>
      <label className={labelClass}>
        <div className={checkboxClass}></div>
        <span className="font-normal box-border caret-transparent hidden">
          {props.checkboxLabel}
        </span>
      </label>
      <div className="box-border caret-transparent pl-8">
        <label className="text-neutral-950 text-base box-border caret-transparent block tracking-[0.36px] leading-6 mb-0.5 md:text-lg md:leading-[27px] md:mb-1.5">
          {props.title}
          {props.isAlwaysActive && " (Always Active)"}
        </label>
        <div className="text-neutral-600 text-sm box-border caret-transparent tracking-[0.32px] leading-[18px] md:text-base md:leading-6">
          {props.description}
        </div>
      </div>
    </div>
  );
};
