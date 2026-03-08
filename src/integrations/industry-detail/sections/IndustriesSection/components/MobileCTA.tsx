export const MobileCTA = () => {
  return (
    <a
      href="https://prozesy.com/projects"
      className="relative text-violet-600 items-center bg-violet-500 shadow-[rgba(255,255,255,0.72)_0px_2px_3px_0px_inset] box-border caret-transparent flex flex-col h-14 justify-center max-w-full text-left w-full z-[99] overflow-hidden px-8 py-4 rounded-lg md:hidden md:max-w-[158px]"
    >
      <div className="relative text-gray-200 box-border caret-transparent min-h-[auto] min-w-[auto] w-full md:min-h-0 md:min-w-0 md:w-auto">
        <div className="relative items-center box-border caret-transparent gap-x-2 flex h-full justify-center gap-y-2 w-full z-[1]">
          <div className="text-zinc-50 text-base font-bold box-border caret-transparent tracking-[0.32px] leading-[19.2px] min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0">
            See All
          </div>
          <img
            src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67adba6a3ab018a0349e2bc2_CTA Arrow (2).svg"
            alt=""
            className="box-border caret-transparent h-7 max-w-7 min-h-[auto] min-w-[auto] object-contain w-full md:h-6 md:max-w-6 md:min-h-0 md:min-w-0"
          />
        </div>
      </div>
    </a>
  );
};
