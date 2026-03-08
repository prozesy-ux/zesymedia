export type IndustryCardProps = {
  href: string;
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
  iconUrl?: string;
  imageClassName?: string;
};

export const IndustryCard = (props: IndustryCardProps) => {
  return (
    <div role="listitem" className="box-border caret-transparent">
      <div className="bg-zinc-50 shadow-[rgba(15,23,42,0.08)_0px_4px_16px_-2px] box-border caret-transparent flex flex-col rounded-2xl">
        <a
          href={props.href}
          className="text-violet-600 box-border caret-transparent block max-w-full"
        >
          <div className="box-border caret-transparent h-[335px] overflow-hidden rounded-t-2xl md:h-64">
            <img
              src={props.imageUrl}
              alt={props.imageAlt}
              className={
                props.imageClassName ||
                "box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
              }
            />
          </div>
        </a>
        <div className="items-start box-border caret-transparent flex flex-col border-neutral-200 pt-5 pb-7 px-5 rounded-b-2xl border-b border-l border-r md:pt-8 md:pb-12 md:px-8">
          <div className="items-start box-border caret-transparent gap-x-4 flex flex-col justify-start gap-y-4 md:gap-x-6 md:gap-y-6">
            <a
              href={props.href}
              className="text-violet-600 box-border caret-transparent block max-w-full"
            >
              <div className="box-border caret-transparent gap-x-2 flex flex-col gap-y-2 md:gap-x-4 md:gap-y-4">
                <div className="items-center box-border caret-transparent flex justify-between">
                  <div className="text-neutral-950 box-border caret-transparent">
                    <div className="box-border caret-transparent flow-root overflow-hidden">
                      <h2 className="text-xl font-bold box-border caret-transparent leading-6 font-redhatdisplay_variablefont_wght md:text-[32px] md:leading-[38.4px]">
                        {props.title}
                      </h2>
                    </div>
                  </div>
                  <div className="text-neutral-900 bg-white box-border caret-transparent hidden shrink-0 h-[42px] min-h-0 min-w-0 w-[42px] border border-neutral-100 p-[13px] rounded-[50%] border-solid md:block md:min-h-[auto] md:min-w-[auto]">
                    <div className="box-border caret-transparent">
                      <img
                        src={
                          props.iconUrl ||
                          "https://c.animaapp.com/mlfdctysFhPPqn/assets/icon-10.svg"
                        }
                        alt="Icon"
                        className="box-border caret-transparent w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-neutral-600 box-border caret-transparent">
                  <div className="box-border caret-transparent flow-root overflow-hidden">
                    <p className="text-base box-border caret-transparent tracking-[0.36px] leading-6 md:text-lg md:leading-[27px]">
                      {props.description}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
