export type ServiceCardProps = {
  iconUrl: string;
  iconAlt?: string;
  title: string;
  description: string;
  hasTitleLineBreak?: boolean;
};

export const ServiceCard = (props: ServiceCardProps) => {
  return (
    <div className="bg-[linear-gradient(333deg,rgba(196,196,196,0)_55%,rgba(236,236,236,0.2)_70%,rgb(95,0,224))] shadow-[rgba(95,0,224,0.1)_0px_16px_24px_0px] box-border caret-transparent overflow-hidden p-px rounded-2xl md:rounded-[32px]">
      <div className="bg-neutral-950 bg-[linear-gradient(347deg,rgba(87,27,210,0.2),rgba(10,10,10,0.2))] shadow-[rgba(255,255,255,0.09)_0px_8px_24px_0px_inset] box-border caret-transparent h-full w-full z-[5] rounded-2xl md:rounded-[32px]">
        <div className="box-border caret-transparent gap-x-6 flex flex-col gap-y-6 px-5 py-7 md:px-8 md:py-11">
          <div className="box-border caret-transparent">
            <img
              alt={props.iconAlt || ""}
              src={props.iconUrl}
              className="aspect-[auto_50_/_50] box-border caret-transparent inline-block h-[50px] max-w-full w-[50px]"
            />
          </div>
          <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4">
            <div className="text-zinc-50 box-border caret-transparent">
              <h3 className="text-xl font-bold box-border caret-transparent leading-6 mb-4 font-redhatdisplay_variablefont_wght md:text-2xl md:leading-[28.8px]">
                <strong className="text-xl box-border caret-transparent leading-6 md:text-2xl md:leading-[28.8px]">
                  {props.hasTitleLineBreak ? (
                    <>
                      {props.title.split("<br />")[0]}
                      <br className="text-xl box-border caret-transparent leading-6 md:text-2xl md:leading-[28.8px]" />
                      {props.title.split("<br />")[1]}
                    </>
                  ) : (
                    props.title
                  )}
                </strong>
              </h3>
            </div>
            <div className="text-neutral-300 box-border caret-transparent">
              <p className="text-sm box-border caret-transparent leading-[19.6px] md:text-base md:leading-[22.4px]">
                {props.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
