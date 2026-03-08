export type SolutionCardProps = {
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
};

export const SolutionCard = (props: SolutionCardProps) => {
  return (
    <div className="bg-[linear-gradient(333deg,rgba(196,196,196,0)_55%,rgba(236,236,236,0.2)_70%,rgb(95,0,224))] shadow-[rgba(95,0,224,0.1)_0px_16px_24px_0px] box-border caret-transparent min-h-[auto] min-w-[auto] overflow-hidden p-px rounded-2xl md:rounded-[32px]">
      <div className="bg-neutral-950 bg-[linear-gradient(347deg,rgba(87,27,210,0.2),rgba(10,10,10,0.2))] shadow-[rgba(255,255,255,0.09)_0px_8px_24px_0px_inset] box-border caret-transparent h-full w-full z-[5] rounded-2xl md:rounded-[32px]">
        <div className="box-border caret-transparent gap-x-6 flex flex-col gap-y-6 px-5 py-7 md:px-8 md:py-11">
          <div className="text-zinc-50 box-border caret-transparent min-h-[auto] min-w-[auto] before:accent-auto before:caret-transparent before:text-zinc-50 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-outfit_variablefont_wght after:accent-auto after:caret-transparent after:clear-both after:text-zinc-50 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-outfit_variablefont_wght">
            <figure className="relative box-border caret-transparent clear-both table max-w-[50px] mb-6">
              <div className="text-transparent text-[0px] box-border inline-block">
                <img
                  src={props.imageUrl}
                  alt={props.imageAlt}
                  className="box-border inline-block max-w-full w-full"
                />
              </div>
            </figure>
            <h3 className="text-xl font-bold box-border caret-transparent leading-6 mb-4 font-redhatdisplay_variablefont_wght md:text-2xl md:leading-[28.8px]">
              {props.title}
            </h3>
            <p className="text-neutral-300 text-base box-border caret-transparent tracking-[0.36px] leading-6">
              {props.description}
            </p>
            <p className="text-neutral-300 text-base box-border caret-transparent tracking-[0.36px] leading-6">
              ‍
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
