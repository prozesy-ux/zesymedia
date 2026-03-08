export const ContactInfo = () => {
  return (
    <div className="items-start box-border caret-transparent gap-x-0 flex flex-col justify-start max-w-full gap-y-0 w-full md:[align-items:normal] md:gap-x-11 md:justify-normal md:max-w-[427px] md:gap-y-11">
      <div className="box-border caret-transparent hidden max-w-[400px] min-h-0 min-w-0 mb-8 md:block md:max-w-[300px] md:min-h-[auto] md:min-w-[auto] md:mb-0">
        <div className="box-border caret-transparent hidden justify-start mb-4">
          <div className="text-green-700 box-border caret-transparent border border-emerald-400 px-3 py-1 rounded-3xl border-solid">
            <div className="text-sm box-border caret-transparent tracking-[0.32px] leading-[21px] capitalize md:text-base md:leading-6">
               Contact Us
            </div>
          </div>
        </div>
        <h2 className="text-neutral-950 text-[28px] font-bold box-border caret-transparent leading-[33.6px] capitalize font-redhatdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
          Tell Us Your Amazing{" "}
          <span className="text-[28px] italic box-border caret-transparent inline-block leading-[33.6px] font-playfairdisplay_variablefont_wght md:text-5xl md:inline md:leading-[57.6px]">
            Project Here
          </span>
        </h2>
      </div>
      <div className="text-neutral-600 text-base box-border caret-transparent gap-x-3 hidden flex-col min-h-0 min-w-0 gap-y-3 md:flex md:min-h-[auto] md:min-w-[auto]">
        <div className="items-start box-border caret-transparent gap-x-2 flex justify-start min-h-0 min-w-0 gap-y-2 md:min-h-[auto] md:min-w-[auto]">
          <img
            src="https://c.animaapp.com/ml6p62229g1sAA/assets/icon-10.svg"
            alt="Icon"
            className="text-violet-600 box-border caret-transparent shrink-0 w-5 mt-[3px] md:w-6 md:mt-0.5"
          />
          <p className="text-base box-border caret-transparent tracking-[0.36px] leading-6 min-h-0 min-w-0 md:text-lg md:leading-[27px] md:min-h-[auto] md:min-w-[auto]">
            Expect a response from us within 24 hours
          </p>
        </div>
        <div className="items-start box-border caret-transparent gap-x-2 flex justify-start min-h-0 min-w-0 gap-y-2 md:min-h-[auto] md:min-w-[auto]">
          <img
            src="https://c.animaapp.com/ml6p62229g1sAA/assets/icon-10.svg"
            alt="Icon"
            className="text-violet-600 box-border caret-transparent shrink-0 w-5 mt-[3px] md:w-6 md:mt-0.5"
          />
          <p className="text-base box-border caret-transparent tracking-[0.36px] leading-6 min-h-0 min-w-0 md:text-lg md:leading-[27px] md:min-h-[auto] md:min-w-[auto]">
            We’re happy to sign an NDA upon request.
          </p>
        </div>
        <div className="items-start box-border caret-transparent gap-x-2 flex justify-start min-h-0 min-w-0 gap-y-2 md:min-h-[auto] md:min-w-[auto]">
          <img
            src="https://c.animaapp.com/ml6p62229g1sAA/assets/icon-10.svg"
            alt="Icon"
            className="text-violet-600 box-border caret-transparent shrink-0 w-5 mt-[3px] md:w-6 md:mt-0.5"
          />
          <p className="text-base box-border caret-transparent tracking-[0.36px] leading-6 min-h-0 min-w-0 md:text-lg md:leading-[27px] md:min-h-[auto] md:min-w-[auto]">
            Get access to a team of dedicated product specialists.
          </p>
        </div>
      </div>
      <div className="relative box-border caret-transparent hidden min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]">
        <video
          loop
          autoPlay
          muted
          playsInline
          preload="auto"
          className="relative items-center box-border caret-transparent flex justify-center w-full z-[5] overflow-hidden mx-auto rounded-lg md:rounded-3xl"
        >
          <source
            src="https://github.com/designmonks/Contact-US-Video/raw/refs/heads/main/Dm-promo_Final.mp4"
            type="video/mp4"
            className="relative text-black text-base box-border caret-transparent block h-full leading-[normal] w-full font-times_new_roman"
          />
        </video>
        <div className="box-border caret-transparent hidden before:accent-auto before:caret-transparent before:text-zinc-800 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-outfit_variablefont_wght after:accent-auto after:caret-transparent after:clear-both after:text-zinc-800 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-outfit_variablefont_wght"></div>
        <div className="absolute items-end box-border caret-transparent flex h-full justify-end pointer-events-none w-full z-[5] pr-2.5 pb-2.5 inset-[0%] md:h-auto md:w-auto">
          <div className="relative items-center box-border caret-transparent flex h-[50px] justify-center min-h-0 min-w-0 w-[50px] md:min-h-[auto] md:min-w-[auto]">
            <img
              src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67bde79a3b8724a2bd6f0357_mute icon.svg"
              alt=""
              className="absolute box-border caret-transparent max-w-full inset-[0%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
