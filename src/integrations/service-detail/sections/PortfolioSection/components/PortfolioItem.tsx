export type PortfolioItemProps = {
  href: string;
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
  tags: string[];
};

export const PortfolioItem = (props: PortfolioItemProps) => {
  return (
    <div
      role="listitem"
      className="box-border caret-transparent h-full max-w-full w-full md:h-auto md:max-w-none md:w-auto"
    >
      <div className="box-border caret-transparent max-w-full w-full md:max-w-none">
        <a
          href={props.href}
          className="text-neutral-950 box-border caret-transparent inline-block max-w-full w-full"
        >
          <div className="box-border caret-transparent h-[245px] max-w-full w-full overflow-hidden rounded-2xl md:h-[370px]">
            <img
              src={props.imageUrl}
              alt={props.imageAlt}
              className="box-border caret-transparent inline-block h-full max-w-full object-cover object-[50%_0%] w-full"
            />
          </div>
        </a>
        <div className="box-border caret-transparent mt-4 md:mt-6">
          <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4">
            <div className="box-border caret-transparent gap-x-2 flex flex-col gap-y-2">
              <div className="text-zinc-50 box-border caret-transparent">
                <h2 className="text-xl font-bold box-border caret-transparent flow-root leading-6 overflow-hidden font-redhatdisplay_variablefont_wght md:text-2xl md:leading-[28.8px]">
                  {props.title}
                </h2>
              </div>
              <div className="text-neutral-300 box-border caret-transparent">
                <p className="text-base box-border caret-transparent flow-root tracking-[0.36px] leading-6 overflow-hidden md:text-lg md:leading-[27px]">
                  {props.description}
                </p>
              </div>
            </div>
            <div className="box-border caret-transparent">
              <div
                role="list"
                className="box-border caret-transparent gap-x-3 flex flex-wrap gap-y-3"
              >
                {props.tags.map((tag, index) => (
                  <div
                    key={index}
                    role="listitem"
                    className="bg-neutral-800 box-border caret-transparent px-3 py-1 rounded-[48px]"
                  >
                    <p className="text-zinc-50 text-sm box-border caret-transparent tracking-[0.36px] leading-[21px] md:text-base md:leading-6">
                      {tag}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
