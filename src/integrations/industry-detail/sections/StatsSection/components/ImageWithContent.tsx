import { WhyChooseUs } from "@/integrations/industry-detail/sections/StatsSection/components/WhyChooseUs";

export const ImageWithContent = () => {
  return (
    <div className="box-border caret-transparent gap-x-8 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-8 md:grid-cols-[1fr_1fr]">
      <img
        src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/68373c0103152c9d0f288d01_image 307.avif"
        alt=""
        className="box-border caret-transparent h-full max-w-full min-h-[auto] min-w-[auto] object-cover w-full rounded-2xl"
      />
      <div className="box-border caret-transparent gap-x-8 flex flex-col min-h-[auto] min-w-[auto] gap-y-8">
        <WhyChooseUs />
        <a
          href="/contact"
          className="relative text-violet-600 items-center bg-[linear-gradient(rgb(89,45,181)_25%,rgb(125,64,255))] shadow-[rgba(255,255,255,0.72)_0px_1.6px_3px_0px_inset] box-border caret-transparent flex flex-col h-14 justify-center max-w-full min-h-[auto] min-w-[auto] text-left w-full z-[5] overflow-hidden rounded-lg md:max-w-[177px]"
        >
          <div className="absolute items-center bg-neutral-400 box-border caret-transparent flex h-full justify-center w-full inset-[0%]">
            <div className="absolute bg-[linear-gradient(90deg,rgba(255,255,255,0.79)_61%,rgb(255,255,255)_75%)] box-border caret-transparent blur-[6px] h-20 translate-y-[-50.0%] w-full left-2/4 right-[0%] top-2/4 bottom-[0%]"></div>
          </div>
          <div className="absolute bg-[linear-gradient(rgb(89,45,181)_25%,rgb(125,64,255))] box-border caret-transparent m-[1.3px] rounded-lg inset-[0%]"></div>
          <div className="relative text-gray-200 box-border caret-transparent min-h-[auto] min-w-[auto] w-full md:w-auto">
            <div className="relative items-center box-border caret-transparent gap-x-2 flex h-full justify-center gap-y-2 w-full z-[1]">
              <div className="text-zinc-50 text-base font-bold box-border caret-transparent tracking-[0.32px] leading-[19.2px] min-h-[auto] min-w-[auto]">
                Why Choose Us
              </div>
              <img
                src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67adba6a3ab018a0349e2bc2_CTA Arrow (2).svg"
                alt=""
                className="box-border caret-transparent h-7 max-w-7 min-h-[auto] min-w-[auto] object-contain w-full md:h-6 md:max-w-6"
              />
            </div>
          </div>
          <img
            src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/672a7a8e3a6aba070d15d4c0_Star 6.avif"
            alt=""
            className="absolute box-border caret-transparent max-w-full right-[0%] top-[0%]"
          />
        </a>
      </div>
    </div>
  );
};
