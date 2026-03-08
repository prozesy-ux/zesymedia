export type PartnerLogosProps = {
  logos: Array<{
    src: string;
    alt: string;
  }>;
  containerClassName?: string;
  hasWrapper?: boolean;
};

export const PartnerLogos = (props: PartnerLogosProps) => {
  const content = (
    <div
      role="list"
      className={
        props.hasWrapper
          ? "box-border caret-transparent shrink-0 items-center gap-x-3.5 flex justify-start gap-y-3.5 w-max pr-4 md:gap-x-8 md:gap-y-8 md:pr-8"
          : "box-border caret-transparent gap-x-3.5 flex shrink-0 gap-y-3.5 w-max pr-3.5 md:gap-x-8 md:gap-y-8 md:pr-8"
      }
    >
      {props.logos.map((logo, index) => {
        const isEven = index % 2 === 0;
        const itemClassName = props.hasWrapper
          ? `box-border caret-transparent shrink-0 h-[70px] max-w-[118px] min-h-[auto] min-w-[auto] w-[260px] overflow-hidden p-px rounded-lg md:h-36 md:max-w-[260px] md:rounded-2xl ${isEven ? "bg-[linear-gradient(rgb(255,255,255),rgb(233,233,233))]" : "bg-[linear-gradient(rgba(220,216,226,0.75),rgb(255,255,255))]"}`
          : `box-border caret-transparent shrink-0 h-[70px] max-w-[118px] min-h-[auto] min-w-[auto] w-[260px] overflow-hidden p-px rounded-lg md:h-36 md:max-w-[260px] md:rounded-2xl ${isEven ? "bg-[linear-gradient(rgba(220,216,226,0.75),rgb(255,255,255))]" : "bg-[linear-gradient(rgb(255,255,255),rgb(233,233,233))]"}`;

        return (
          <div key={index} role="listitem" className={itemClassName}>
            <div className="items-center bg-zinc-50 box-border caret-transparent flex h-full justify-center w-full rounded-lg md:rounded-2xl">
              <img
                src={logo.src}
                alt={logo.alt}
                className="box-border caret-transparent h-[70%] max-w-full min-h-[auto] min-w-[auto] w-[70%]"
              />
            </div>
          </div>
        );
      })}
    </div>
  );

  if (props.hasWrapper) {
    return (
      <div
        className={
          props.containerClassName ||
          "box-border caret-transparent min-h-[auto] min-w-[auto]"
        }
      >
        {content}
      </div>
    );
  }

  return content;
};
