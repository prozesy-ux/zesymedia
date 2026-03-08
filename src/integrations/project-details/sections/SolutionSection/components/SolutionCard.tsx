export type SolutionCardProps = {
  solutionNumber: string;
  description: string;
  hasExtraSpacing?: boolean;
};

export const SolutionCard = (props: SolutionCardProps) => {
  return (
    <div className="bg-green-50 box-border caret-transparent min-h-[auto] min-w-[auto] border border-green-200 p-6 rounded-2xl border-solid md:rounded-3xl before:accent-auto before:caret-transparent before:text-zinc-800 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-outfit_variablefont_wght after:accent-auto after:caret-transparent after:clear-both after:text-zinc-800 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-outfit_variablefont_wght">
      <ul
        role="list"
        className="box-border caret-transparent list-none overflow-hidden mb-2.5 pl-0"
      >
        <li className="text-neutral-950 text-xl bg-[url('https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/68df9a1dae1200921c85fb73_checkmark-circle-02.avif')] bg-no-repeat box-border caret-transparent leading-[30px] bg-[position:0px_0px] pl-9 md:text-2xl md:leading-9 md:bg-[position:left_4px]">
          {props.solutionNumber}
        </li>
      </ul>
      <p className="text-neutral-600 text-xl box-border caret-transparent tracking-[0.36px] leading-[30px] mt-2 md:text-2xl md:leading-9 md:mt-4">
        {props.description}
      </p>
      {props.hasExtraSpacing && (
        <p className="text-neutral-600 text-xl box-border caret-transparent tracking-[0.36px] leading-[30px] mt-2 md:text-2xl md:leading-9 md:mt-4">
          ‍
        </p>
      )}
    </div>
  );
};
