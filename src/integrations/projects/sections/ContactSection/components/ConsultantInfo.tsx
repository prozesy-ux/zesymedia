export const ConsultantInfo = () => {
  return (
    <div className="items-start box-border caret-transparent gap-x-3 flex flex-col justify-start min-h-[auto] min-w-[auto] gap-y-3 mt-3 md:mt-0">
      <img
        src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/68ba60d9c5b148b316094a05_528b1902db108edb0c76b243a29e624d_misbah gunabi.png"
        alt=""
        className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] w-full rounded-[20px] md:w-60"
      />
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
        <p className="text-zinc-50 text-xl font-bold box-border caret-transparent tracking-[0.36px] leading-6 font-redhatdisplay_variablefont_wght md:text-2xl md:leading-[28.8px]">
          Abdullah Al Noman
        </p>
        <p className="text-neutral-400 text-sm box-border caret-transparent tracking-[0.36px] leading-[21px] md:text-base md:leading-6">
          COO &amp; Co-founder
        </p>
        <div className="items-start box-border caret-transparent gap-x-2 flex flex-col justify-start gap-y-2 mt-6">
          <a
            href="https://wa.me/+17165036335"
            className="text-neutral-300 items-center box-border caret-transparent gap-x-2 flex justify-start max-w-full min-h-[auto] min-w-[auto] gap-y-2"
          >
            <img
              src="https://c.animaapp.com/mmfuclz4syuQ81/assets/icon-12.svg"
              alt="Icon"
              className="box-border caret-transparent align-baseline w-6"
            />
            <p className="text-base box-border caret-transparent tracking-[0.36px] leading-6 min-h-[auto] min-w-[auto] md:text-lg md:leading-[27px]">
              +1 (716) 503-6335
            </p>
          </a>
          <a
            href="http://designmonks.co/meeting"
            className="text-violet-400 text-base font-bold box-border caret-transparent block leading-[19.2px] min-h-[auto] min-w-[auto] decoration-neutral-300 md:text-lg md:leading-[21.6px]"
          >
            Book a Call Directly
          </a>
        </div>
      </div>
    </div>
  );
};
