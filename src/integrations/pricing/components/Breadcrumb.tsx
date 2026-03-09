export const Breadcrumb = () => {
  return (
    <div className="items-center box-border caret-transparent gap-x-4 flex flex-col justify-start min-h-[auto] min-w-[auto] gap-y-4">
      <div className="relative items-center bg-white/10 box-border caret-transparent gap-x-[5px] flex min-h-[auto] min-w-[auto] gap-y-[5px] z-[88] mt-[70px] px-3 py-1 rounded-[18px] md:static md:z-auto md:mt-[96px]">
        <a
          href="https://prozesy.com/"
          className="text-neutral-400 text-xs box-border caret-transparent block tracking-[0.24px] leading-[18px] max-w-full min-h-[auto] min-w-[auto] capitalize"
        >
          <div className="box-border caret-transparent normal-case">Home</div>
        </a>
        <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
          <img
            src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67423a8542288605dea89299_CaretRight.webp"
            alt=""
            className="box-border caret-transparent inline-block max-w-full"
          />
        </div>
        <a
          href="/contact"
          className="text-white text-xs box-border caret-transparent block tracking-[0.24px] leading-[18px] max-w-full min-h-[auto] min-w-[auto] capitalize"
        >
          <div className="box-border caret-transparent normal-case">
            Pricing
          </div>
        </a>
      </div>
      <div className="text-zinc-50 box-border caret-transparent min-h-[auto] min-w-[auto]">
        <h1 className="text-[32px] font-bold box-border caret-transparent leading-[38.4px] font-redhatdisplay_variablefont_wght md:text-[56px] md:leading-[67.2px]">
          Premium Quality With
          <span className="text-[32px] italic box-border caret-transparent leading-[38.4px] capitalize font-playfairdisplay_variablefont_wght md:text-[56px] md:leading-[67.2px]">
            <br className="text-[32px] box-border caret-transparent leading-[38.4px] md:text-[56px] md:leading-[67.2px]" />
            Affordability &amp; Flexibility
          </span>
        </h1>
      </div>
    </div>
  );
};
