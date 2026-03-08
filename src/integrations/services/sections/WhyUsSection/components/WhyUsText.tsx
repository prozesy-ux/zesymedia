export const WhyUsText = () => {
  return (
    <div className="box-border caret-transparent shrink max-w-full min-h-[auto] min-w-[auto] w-full md:shrink-0 md:max-w-[620px]">
      <div className="box-border caret-transparent flex justify-start">
        <div className="text-green-700 box-border caret-transparent min-h-[auto] min-w-[auto] border border-emerald-400 px-3 py-1 rounded-3xl border-solid">
          <div className="text-sm box-border caret-transparent tracking-[0.32px] leading-[21px] capitalize md:text-base md:leading-6">
            Why Us?
          </div>
        </div>
      </div>
      <div className="box-border caret-transparent my-4">
        <h2 className="text-neutral-950 text-[28px] font-bold box-border caret-transparent leading-[33.6px] capitalize font-redhatdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
          Because Our Premium{" "}
          <em className="text-[28px] italic box-border caret-transparent leading-[33.6px] font-playfairdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
            Design
          </em>
          Always{" "}
          <em className="text-[28px] italic box-border caret-transparent leading-[33.6px] font-playfairdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
            Pays
          </em>
          for Itself
        </h2>
      </div>
      <div className="box-border caret-transparent">
        <p className="text-lg box-border caret-transparent tracking-[0.48px] leading-[27px]">
          Great products are built by teams that move fast and think clearly.
          Prozesy Media is designed exactly for that. 
          <br className="box-border caret-transparent" />
          <br className="box-border caret-transparent" />
          We combine strategy, design, and execution into a single, focused
          system that reduces friction and increases output quality. You don’t
          just get designs, you get momentum. Also, that momentum comes 20x
          faster and at about half the cost of traditional agencies.
        </p>
      </div>
      <div className="box-border caret-transparent hidden mt-8 md:block">
        <a
          href="https://www.designmonks.co/contact"
          className="relative text-violet-600 items-center bg-[linear-gradient(rgb(89,45,181)_25%,rgb(125,64,255))] shadow-[rgba(255,255,255,0.72)_0px_1.6px_3px_0px_inset] box-border caret-transparent flex flex-col h-14 justify-center max-w-full text-left w-full z-10 overflow-hidden rounded-lg md:max-w-[207px]"
        >
          <div className="absolute items-center bg-neutral-400 box-border caret-transparent flex h-full justify-center w-full inset-[0%]">
            <div className="absolute bg-[linear-gradient(90deg,rgba(255,255,255,0.79)_61%,rgb(255,255,255)_75%)] box-border caret-transparent blur-[6px] h-20 transform-none w-full left-2/4 right-[0%] top-2/4 bottom-[0%] md:translate-y-[-50.0%]"></div>
          </div>
          <div className="absolute bg-[linear-gradient(rgb(89,45,181)_25%,rgb(125,64,255))] box-border caret-transparent m-[1.3px] rounded-lg inset-[0%]"></div>
          <div className="relative text-gray-200 box-border caret-transparent min-h-0 min-w-0 w-full md:min-h-[auto] md:min-w-[auto] md:w-auto">
            <div className="relative items-center box-border caret-transparent gap-x-2 flex h-full justify-center gap-y-2 w-full z-[1]">
              <div className="text-zinc-50 text-base font-bold box-border caret-transparent tracking-[0.32px] leading-[19.2px] min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
                Start Project
              </div>
              <img
                src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67adba6a3ab018a0349e2bc2_CTA Arrow (2).svg"
                alt=""
                className="box-border caret-transparent h-7 max-w-7 min-h-0 min-w-0 object-contain w-full md:h-6 md:max-w-6 md:min-h-[auto] md:min-w-[auto]"
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
