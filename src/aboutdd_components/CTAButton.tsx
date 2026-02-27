export type CTAButtonProps = {
  href: string;
  text: string;
  variant: string;
  backgroundVariant: string;
  overlayVariant: string;
  showLeftIcon?: boolean;
  leftIconSrc?: string;
  leftIconAlt?: string;
  showRightIcon?: boolean;
  rightIconSrc?: string;
  rightIconAlt?: string;
  showStarImage?: boolean;
  starImageSrc?: string;
  starImageAlt?: string;
};

export const CTAButton = (props: CTAButtonProps) => {
  return (
    <a
      href={props.href}
      className={`relative box-border caret-transparent flex items-center justify-center max-w-full ${props.variant}`}
    >
      <div
        className={`absolute box-border caret-transparent inset-[0%] ${props.backgroundVariant}`}
      >
        {props.showStarImage === false && (
          <div className="absolute bg-[linear-gradient(90deg,rgba(255,255,255,0.79)_61%,rgb(255,255,255)_75%)] box-border caret-transparent blur-[6px] h-20 -translate-y-10 w-full left-2/4 right-[0%] top-2/4 bottom-[0%]"></div>
        )}
      </div>
      <div className={`box-border caret-transparent ${props.overlayVariant}`}>
        {props.showLeftIcon !== false && props.leftIconSrc && (
          <>
            <div className="absolute bg-[linear-gradient(rgb(89,45,181)_25%,rgb(125,64,255))] shadow-[rgba(255,255,255,0.72)_0px_2px_3px_0px_inset] box-border caret-transparent pointer-events-none z-[-1] inset-[0%]"></div>
            <img
              src={props.leftIconSrc}
              alt={props.leftIconAlt || "Icon"}
              className="text-[32px] box-border caret-transparent shrink-0 h-8 leading-[48px] w-8 md:text-2xl md:h-6 md:leading-9 md:w-6"
            />
          </>
        )}
        {props.showLeftIcon === false && <></>}
        <span
          className={
            props.showLeftIcon !== false
              ? "box-border caret-transparent hidden min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]"
              : "relative w-full md:w-auto"
          }
        >
          {props.showLeftIcon === false ? (
            <div className="relative text-gray-200 box-border caret-transparent w-full md:w-auto h-full flex items-center justify-center">
              <div className="relative flex items-center justify-center gap-x-2 gap-y-2 z-[1]">
                <div className="text-zinc-50 text-base font-bold box-border caret-transparent tracking-[0.32px] leading-[19.2px] whitespace-nowrap">
                  {props.text}
                </div>
                {props.showRightIcon !== false && props.rightIconSrc && (
                  <img
                    src={props.rightIconSrc}
                    alt={props.rightIconAlt || ""}
                    className="box-border caret-transparent h-7 max-w-7 object-contain w-auto md:h-6 md:max-w-6"
                  />
                )}
              </div>
            </div>
          ) : (
            props.text
          )}
        </span>
        {props.showLeftIcon !== false &&
          props.showRightIcon !== false &&
          props.rightIconSrc && (
            <img
              src={props.rightIconSrc}
              alt={props.rightIconAlt || "Icon"}
              className="absolute text-white/50 box-border caret-transparent blur-[2.5px] h-16 pointer-events-none translate-x-[50.0%] translate-y-[-50.0%] w-16 right-[0%] top-[0%]"
            />
          )}
      </div>
      {props.showStarImage !== false && props.starImageSrc && (
        <img
          src={props.starImageSrc}
          alt={props.starImageAlt || ""}
          className="absolute box-border caret-transparent max-w-full right-[0%] top-[0%]"
        />
      )}
    </a>
  );
};
