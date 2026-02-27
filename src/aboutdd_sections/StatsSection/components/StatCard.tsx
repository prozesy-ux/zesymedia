export type StatCardProps = {
  title: string;
  titleIsBold?: boolean;
  statValue: string;
  description: string;
  variant: string;
  innerVariant: string;
};

export const StatCard = (props: StatCardProps) => {
  return (
    <div
      className={`items-stretch box-border caret-transparent flex justify-start rounded-2xl ${props.variant}`}
    >
      <div
        className={`bg-[#FAFAFA] box-border caret-transparent w-full mx-px px-[30px] py-8 rounded-2xl md:px-[30px] md:py-8 ps-card-content tlr-stroke ${props.innerVariant}`}
      >
        <h3 className="text-neutral-950 text-2xl box-border caret-transparent leading-[28.8px] font-redhatdisplay_variablefont_wght">
          {props.titleIsBold ? (
            <strong className="box-border caret-transparent">
              {props.title}
            </strong>
          ) : (
            props.title
          )}
        </h3>
        <div className="text-neutral-950 text-[32px] box-border caret-transparent leading-[38.4px] my-2 font-redhatdisplay_variablefont_wght md:text-[56px] md:leading-[67.2px] md:mt-12 md:mb-6">
          {props.statValue}
        </div>
        <p className="text-[14px] text-[#333333] box-border caret-transparent leading-[20px] font-outfit_variablefont_wght font-normal">
          {props.description}
        </p>
      </div>
    </div>
  );
};
