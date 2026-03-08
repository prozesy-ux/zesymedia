export const WhyUsButton = () => {
  return (
    <div className="box-border caret-transparent block order-1 mt-6 md:hidden md:order-none md:mt-8">
      <a
        href="https://www.designmonks.co/services"
        className="relative text-violet-600 items-center bg-[linear-gradient(rgb(89,45,181)_25%,rgb(125,64,255))] shadow-[rgba(255,255,255,0.72)_0px_1.6px_3px_0px_inset] box-border caret-transparent flex flex-col h-14 justify-center max-w-full text-left w-full z-10 overflow-hidden rounded-lg md:max-w-[207px]"
      >
        <div className="absolute items-center bg-neutral-400 box-border caret-transparent flex h-full justify-center rotate-[0.19079996895078108deg] w-full inset-[0%] md:transform-none">
          <div className="absolute bg-[linear-gradient(90deg,rgba(255,255,255,0.79)_61%,rgb(255,255,255)_75%)] box-border caret-transparent blur-[6px] h-20 -translate-y-10 w-full left-2/4 right-[0%] top-2/4 bottom-[0%] md:transform-none"></div>
        </div>
        <div className="absolute bg-[linear-gradient(rgb(89,45,181)_25%,rgb(125,64,255))] box-border caret-transparent m-[1.3px] rounded-lg inset-[0%]"></div>
        <div className="relative text-gray-200 box-border caret-transparent min-h-[auto] min-w-[auto] w-full md:min-h-0 md:min-w-0 md:w-auto">
          <div className="relative items-center box-border caret-transparent gap-x-2 flex h-full justify-center gap-y-2 w-full z-[1]">
            <div className="text-zinc-50 text-base font-bold box-border caret-transparent tracking-[0.32px] leading-[19.2px] min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0">
              Start Project
            </div>
            <img
              src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6734f4f0d4f40160f9368770_CTA Arrow.webp"
              alt=""
              className="box-border caret-transparent h-7 max-w-7 min-h-[auto] min-w-[auto] object-contain w-full md:h-6 md:max-w-6 md:min-h-0 md:min-w-0"
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
  );
};
