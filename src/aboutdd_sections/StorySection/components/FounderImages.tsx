import { useEffect, useRef } from "react";

export type FounderImagesProps = {
  variant: string;
  primaryImageSrc: string;
  primaryImageAlt?: string;
  secondaryImageSrc?: string;
  secondaryImageAlt?: string;
};

export const FounderImages = (props: FounderImagesProps) => {
  return (
    <div
      className={`box-border caret-transparent gap-x-4 basis-[0%] grow gap-y-4 md:gap-x-8 md:basis-auto md:grow-0 md:gap-y-8 ${props.variant === "single" ? "flex min-h-[auto] min-w-[auto] text-center mt-8 mb-6 md:hidden md:min-h-0 md:min-w-0 md:text-start md:my-0" : "hidden min-h-0 min-w-0 md:flex md:min-h-[auto] md:min-w-[auto]"}`}
    >
      <div
        className={`relative box-border caret-transparent overflow-hidden rounded-2xl top-0 md:top-auto group ${props.variant === "single" ? "min-h-[auto] min-w-[auto] text-center translate-y-[-50px] md:min-h-0 md:min-w-0 md:text-start md:transform-none" : "min-h-0 min-w-0 transform-none md:min-h-[auto] md:min-w-[auto] md:translate-y-[-50px]"}`}
      >
        <img
          src={props.primaryImageSrc}
          alt={props.primaryImageAlt || ""}
          className={`box-border caret-transparent inline-block max-w-full transition-transform duration-500 ease-out group-hover:scale-110 ${props.variant === "single" ? "text-center md:text-start" : ""}`}
        />
        <div
          className={`absolute box-border caret-transparent blur-[65px] h-[70px] max-w-[120px] opacity-100 w-full z-[-1] rounded-[100%] md:h-[157px] md:max-w-[148px] md:opacity-70 ${props.variant === "single" ? "bg-emerald-400 text-center right-[0%] top-[0%] md:text-start" : "bg-violet-600 bottom-[-10%] left-[0%] md:bottom-[0%]"}`}
        ></div>
        {props.variant === "single" && (
          <div className="absolute bg-violet-600 bottom-[-10%] box-border caret-transparent blur-[65px] h-[70px] max-w-[120px] opacity-100 text-center w-full z-[-1] rounded-[100%] left-[0%] md:h-[157px] md:max-w-[148px] md:opacity-70 md:text-start md:bottom-[0%]"></div>
        )}
      </div>
      {props.variant === "double" && (
        <div className="relative box-border caret-transparent overflow-hidden rounded-2xl min-h-0 min-w-0 transform-none top-6 md:min-h-[auto] md:min-w-[auto] md:translate-y-[50px] md:top-auto group">
          <img
            src={props.secondaryImageSrc}
            alt={props.secondaryImageAlt || ""}
            className="box-border caret-transparent inline-block max-w-full transition-transform duration-500 ease-out group-hover:scale-110"
          />
          <div className="absolute bg-emerald-400 box-border caret-transparent blur-[65px] h-[70px] max-w-[120px] opacity-100 w-full z-[-1] rounded-[100%] right-[0%] top-[0%] md:h-[157px] md:max-w-[148px] md:opacity-70"></div>
        </div>
      )}
    </div>
  );
};
