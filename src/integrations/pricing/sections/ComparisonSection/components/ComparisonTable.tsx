export type ComparisonTableProps = {
  variant: string;
  headers?: string[];
  rows?: Array<{
    iconUrl: string;
    iconClassName?: string;
    iconContainerClassName?: string;
    title: string;
    description: string;
    cells: Array<{
      hasCheckmark: boolean;
      checkmarkUrl?: string;
      crossUrl?: string;
      cellClassName?: string;
      iconWrapperClassName?: string;
    }>;
    rowClassName?: string;
    contentClassName?: string;
    titleDescriptionClassName?: string;
    descriptionWrapperClassName?: string;
    descriptionInnerClassName?: string;
  }>;
};

export const ComparisonTable = (props: ComparisonTableProps) => {
  if (props.variant === "header") {
    return (
      <div className="box-border caret-transparent min-h-[auto] mx-5 md:mx-0 items-center gap-x-0 grid auto-cols-[1fr] grid-cols-[1.75fr_1fr_1fr_1fr_1fr_1fr] grid-rows-[auto] min-w-[884px] gap-y-0 w-full px-10 md:grid-cols-[3.5fr_1fr_1fr_1fr_1fr_1fr] md:min-w-[1249px]">
        {props.headers?.map((header, index) => (
          <div
            key={index}
            className={`box-border caret-transparent min-h-[auto] text-neutral-950 min-w-[auto] ${index > 0 ? "text-center" : ""}`}
          >
            <div className="text-base font-bold box-border caret-transparent leading-[19.2px] font-redhatdisplay_variablefont_wght md:text-xl md:leading-6">
              {header}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="box-border caret-transparent min-h-[auto] mx-5 md:mx-0 flex flex-col min-w-[auto] gap-y-8 md:gap-y-14">
      {props.rows?.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={`box-border caret-transparent min-h-[auto] ${row.rowClassName || "items-center bg-neutral-950 bg-[linear-gradient(rgb(89,45,181)_25%,rgb(125,64,255))] gap-x-0 grid auto-cols-[1fr] grid-cols-[1.75fr_1fr_1fr_1fr_1fr_1fr] grid-rows-[auto] min-w-[884px] gap-y-0 w-full px-10 py-[30px] rounded-[32px] md:grid-cols-[3.5fr_1fr_1fr_1fr_1fr_1fr] md:min-w-[1249px] md:py-6"}`}
        >
          <div
            className={`box-border caret-transparent items-center gap-x-6 flex col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1] justify-start min-h-[auto] min-w-[auto] md:col-end-auto md:col-start-auto md:row-end-auto md:row-start-auto`}
          >
            <div
              className={
                row.iconContainerClassName ||
                "items-center bg-white/20 box-border caret-transparent hidden justify-center max-h-[85px] max-w-[85px] min-h-[85px] min-w-[85px] rounded-[10px] md:flex"
              }
            >
              <img
                src={row.iconUrl}
                alt="Icon"
                className={
                  row.iconClassName ||
                  "text-white box-border caret-transparent inline align-baseline w-8 md:block"
                }
              />
            </div>
            <div
              className={
                row.titleDescriptionClassName ||
                "text-zinc-50 box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] gap-y-2"
              }
            >
              <h3 className="text-xl font-bold box-border caret-transparent leading-6 min-h-[auto] min-w-[auto] font-redhatdisplay_variablefont_wght md:text-2xl md:leading-[28.8px]">
                {row.title}
              </h3>
              <div className="box-border caret-transparent hidden min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]">
                <div
                  className={
                    row.descriptionWrapperClassName ||
                    "text-neutral-300 box-border caret-transparent"
                  }
                >
                  <div className={row.descriptionInnerClassName}>
                    <div className="text-base box-border caret-transparent tracking-[0.36px] leading-6 md:text-lg md:leading-[27px]">
                      {row.description}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {row.cells.map((cell, cellIndex) => (
            <div
              key={cellIndex}
              className="items-center box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto]"
            >
              {cell.hasCheckmark ? (
                <div
                  className={
                    cell.iconWrapperClassName ||
                    "text-zinc-50 box-border caret-transparent flex min-h-[auto] min-w-[auto] w-6 md:w-10"
                  }
                >
                  <img
                    src={
                      cell.checkmarkUrl ||
                      "https://c.animaapp.com/mmfqa5b2QIeLaz/assets/icon-12.svg"
                    }
                    alt="Icon"
                    className="box-border caret-transparent align-baseline w-full"
                  />
                </div>
              ) : (
                <img
                  src={
                    cell.crossUrl ||
                    "https://c.animaapp.com/mmfqa5b2QIeLaz/assets/icon-14.svg"
                  }
                  alt="Icon"
                  className="text-red-500 box-border caret-transparent align-baseline w-6 md:w-10"
                />
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
