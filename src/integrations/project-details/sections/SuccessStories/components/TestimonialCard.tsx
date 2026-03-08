export type TestimonialCardProps = {
  variant: string;
  logoUrl?: string;
  testimonialText: string;
  clientImageUrl: string;
  clientName: string;
  clientTitle: string;
  thumbnailUrl?: string;
  additionalLogos?: Array<{ url: string; alt: string }>;
  orderClass?: string;
};

export const TestimonialCard = (props: TestimonialCardProps) => {
  if (props.variant === "variant-1") {
    return (
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] gap-x-6 grid flex-col auto-cols-[1fr] col-end-[span_1] col-start-[span_1] row-end-[span_3] row-start-[span_3] grid-cols-[1fr] grid-rows-[auto_auto_auto_auto] gap-y-6">
        <div className="box-border caret-transparent col-end-[span_1] col-start-[span_1] min-h-[auto] min-w-[auto] row-end-[span_2] row-start-[span_2] h-full">
          <div role="list" className="box-border caret-transparent h-full">
            <div
              role="listitem"
              className="box-border caret-transparent items-start bg-zinc-950/0 gap-x-12 flex flex-col h-full justify-between gap-y-12 w-full border border-neutral-200 p-6 rounded-2xl border-solid md:py-8"
            >
              <div className="items-start box-border caret-transparent gap-x-6 flex flex-col justify-start min-h-[auto] min-w-[auto] gap-y-6">
                <img
                  src={props.logoUrl}
                  alt=""
                  className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] items-start h-[57.6px] justify-center object-contain object-[0%_50%] -my-4"
                />
                <p className="text-neutral-950 text-base box-border caret-transparent tracking-[0.36px] leading-6 min-h-[auto] min-w-[auto] md:text-lg md:leading-[27px] flow-root overflow-hidden">
                  {props.testimonialText}
                </p>
              </div>
              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] items-center gap-x-2 flex justify-start gap-y-2">
                <img
                  src={props.clientImageUrl}
                  alt=""
                  className="aspect-square box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] object-cover w-[52px] border border-stone-500/20 rounded-lg border-solid"
                />
                <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
                  <p className="text-neutral-950 text-base font-bold box-border caret-transparent tracking-[0.36px] leading-[19.2px] font-redhatdisplay_variablefont_wght md:text-xl md:leading-6">
                    {props.clientName}
                  </p>
                  <p className="text-neutral-600 text-sm box-border caret-transparent tracking-[0.36px] leading-[21px] md:text-base md:leading-6">
                    {props.clientTitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="box-border caret-transparent col-end-[span_1] col-start-[span_1] min-h-[auto] min-w-[auto] row-end-[span_2] row-start-[span_2] h-full">
          <div role="list" className="box-border caret-transparent h-full">
            <div
              role="listitem"
              className="bg-zinc-950/0 box-border caret-transparent gap-x-12 gap-y-12 border border-neutral-200 rounded-2xl border-solid h-full overflow-hidden"
            >
              <img
                src={props.thumbnailUrl}
                alt=""
                className="box-border caret-transparent max-w-full inline-block h-full min-h-[400px] object-cover w-full"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (props.variant === "variant-2") {
    return (
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] col-end-[span_1] col-start-[span_1] row-end-[span_3] row-start-[span_3] h-full">
        <div
          role="list"
          className="box-border caret-transparent h-full before:accent-auto before:caret-transparent before:text-zinc-800 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-outfit_variablefont_wght after:accent-auto after:caret-transparent after:clear-both after:text-zinc-800 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-outfit_variablefont_wght"
        >
          <div
            role="listitem"
            className="box-border caret-transparent h-full relative items-start bg-zinc-950/0 gap-x-12 flex flex-col float-left justify-between min-h-px gap-y-12 w-full border border-neutral-200 p-6 rounded-2xl border-solid md:py-8"
          >
            <div className="items-start box-border caret-transparent gap-x-6 flex flex-col justify-start min-h-[auto] min-w-[auto] gap-y-6">
              <img
                src={props.logoUrl}
                alt=""
                className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] items-start h-[57.6px] justify-center object-contain object-[0%_50%] -my-4"
              />
              <p className="text-neutral-950 text-base box-border caret-transparent tracking-[0.36px] leading-6 min-h-[auto] min-w-[auto] md:text-lg md:leading-[27px] flow-root overflow-hidden">
                {props.testimonialText}
              </p>
            </div>
            <div className="box-border caret-transparent min-h-[auto] min-w-[auto] items-center gap-x-2 flex justify-start gap-y-2">
              <img
                src={props.clientImageUrl}
                alt=""
                className="aspect-square box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] object-cover w-[52px] border border-stone-500/20 rounded-lg border-solid"
              />
              <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
                <p className="text-neutral-950 text-base font-bold box-border caret-transparent tracking-[0.36px] leading-[19.2px] font-redhatdisplay_variablefont_wght md:text-xl md:leading-6">
                  {props.clientName}
                </p>
                <p className="text-neutral-600 text-sm box-border caret-transparent tracking-[0.36px] leading-[21px] md:text-base md:leading-6">
                  {props.clientTitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (props.variant === "variant-3") {
    return (
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] gap-x-6 grid flex-col auto-cols-[1fr] col-end-[span_1] col-start-[span_1] row-end-[span_2] row-start-[span_2] grid-cols-[1fr] grid-rows-[auto_auto_auto_auto] gap-y-6">
        <div
          className={`box-border caret-transparent min-h-[auto] min-w-[auto] col-end-[span_1] col-start-[span_1] row-end-[span_3] row-start-[span_3] h-full ${props.orderClass || "order-last md:order-none"}`}
        >
          <div role="list" className="box-border caret-transparent h-full">
            <div
              role="listitem"
              className="bg-zinc-950/0 box-border caret-transparent gap-x-12 gap-y-12 border border-neutral-200 rounded-2xl border-solid h-full overflow-hidden"
            >
              <img
                src={props.thumbnailUrl}
                alt=""
                className="box-border caret-transparent max-w-full inline-block h-full min-h-[400px] object-cover w-full"
              />
            </div>
          </div>
        </div>
        <div className="box-border caret-transparent col-end-[span_1] col-start-[span_1] min-h-[auto] min-w-[auto] row-end-[span_1] row-start-[span_1]">
          <div
            role="list"
            className="box-border caret-transparent h-full gap-x-8 grid auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto] gap-y-8"
          >
            {props.additionalLogos?.map((logo, index) => (
              <div
                key={index}
                role="listitem"
                className="relative items-center bg-zinc-950/0 box-border caret-transparent gap-x-12 flex flex-col justify-center min-h-full min-w-[auto] gap-y-12 border border-neutral-200 px-6 py-8 rounded-2xl border-solid"
              >
                <img
                  src={logo.url}
                  alt={logo.alt}
                  className="absolute box-border caret-transparent h-[57.6px] max-w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (props.variant === "variant-4") {
    return (
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] col-end-[span_2] col-start-[span_2] row-end-[span_1] row-start-[span_1] h-full">
        <div role="list" className="box-border caret-transparent h-full">
          <div
            role="listitem"
            className="box-border caret-transparent items-start bg-zinc-950/0 gap-x-12 flex flex-col h-full justify-between gap-y-12 w-full border border-neutral-200 p-6 rounded-2xl border-solid md:py-8"
          >
            <div className="items-start box-border caret-transparent gap-x-6 flex flex-col justify-start min-h-[auto] min-w-[auto] gap-y-6">
              <p className="text-neutral-950 text-base box-border caret-transparent tracking-[0.36px] leading-6 min-h-[auto] min-w-[auto] md:text-lg md:leading-[27px]">
                {props.testimonialText}
              </p>
            </div>
            <div className="items-center box-border caret-transparent flex min-h-[auto] min-w-[auto] justify-between w-full">
              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] items-center gap-x-2 flex justify-start gap-y-2">
                <img
                  src={props.clientImageUrl}
                  alt=""
                  className="aspect-square box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] object-cover w-[52px] border border-stone-500/20 rounded-lg border-solid"
                />
                <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
                  <p className="text-neutral-950 text-base font-bold box-border caret-transparent tracking-[0.36px] leading-[19.2px] font-redhatdisplay_variablefont_wght md:text-xl md:leading-6">
                    {props.clientName}
                  </p>
                  <p className="text-neutral-600 text-sm box-border caret-transparent tracking-[0.36px] leading-[21px] md:text-base md:leading-6">
                    {props.clientTitle}
                  </p>
                </div>
              </div>
              <img
                src={props.logoUrl}
                alt=""
                className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] items-start h-[57.6px] justify-center object-contain object-[0%_50%] -my-4"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};
