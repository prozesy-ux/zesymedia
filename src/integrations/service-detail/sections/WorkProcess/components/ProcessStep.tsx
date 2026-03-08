export type ProcessStepProps = {
  week: string;
  title: string;
  description: string;
  sectionLabel: string;
  tasks: string[];
  imageUrl: string;
  imageAlt?: string;
};

export const ProcessStep = (props: ProcessStepProps) => {
  return (
    <div className="static items-center bg-white shadow-[rgba(15,23,42,0.06)_0px_1px_4px_0px] box-border caret-transparent gap-x-4 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] justify-items-end gap-y-4 border border-neutral-100 px-5 py-7 rounded-[32px] border-solid top-[100px] md:sticky md:grid-cols-[1fr_0.4fr] md:p-10">
      <div className="items-start box-border caret-transparent gap-x-6 flex flex-col justify-start gap-y-6">
        <div className="items-start box-border caret-transparent gap-x-4 flex flex-col justify-start gap-y-4">
          <div className="text-zinc-50 bg-violet-600 box-border caret-transparent px-3 py-1 rounded-[50px]">
            <p className="text-base box-border caret-transparent tracking-[0.36px] leading-6 md:text-lg md:leading-[27px]">
              {props.week}
            </p>
          </div>
          <h2 className="text-neutral-950 text-xl font-bold box-border caret-transparent leading-6 font-redhatdisplay_variablefont_wght md:text-[32px] md:leading-[38.4px]">
            {props.title}
          </h2>
          <p className="text-neutral-600 text-base box-border caret-transparent tracking-[0.36px] leading-6 md:text-lg md:leading-[27px]">
            {props.description}
          </p>
        </div>
        <div className="box-border caret-transparent gap-x-2 flex flex-col gap-y-2">
          <p className="text-neutral-950 text-base box-border caret-transparent tracking-[0.36px] leading-6 md:text-lg md:leading-[27px]">
            {props.sectionLabel}
          </p>
          <div className="box-border caret-transparent gap-x-3 flex flex-wrap gap-y-3">
            {props.tasks.map((task, index) => (
              <div
                key={index}
                className="text-neutral-950 bg-zinc-950/0 box-border caret-transparent px-3 py-1 rounded-[50px]"
              >
                <p className="text-sm box-border caret-transparent tracking-[0.36px] leading-[21px] md:text-base md:leading-6">
                  {task}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <img
        src={props.imageUrl}
        alt={props.imageAlt || ""}
        className="box-border caret-transparent hidden max-w-full min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]"
      />
    </div>
  );
};
