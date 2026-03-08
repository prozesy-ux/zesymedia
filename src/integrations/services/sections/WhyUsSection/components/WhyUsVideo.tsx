export const WhyUsVideo = () => {
  return (
    <div className="box-border caret-transparent gap-x-4 shrink-0 h-60 max-w-full min-h-[auto] min-w-[auto] -order-1 gap-y-4 w-full overflow-hidden rounded-2xl md:gap-x-8 md:shrink md:h-[476px] md:max-w-[610px] md:order-none md:gap-y-8">
      <div className="relative box-border caret-transparent h-full">
        <video
          loop=""
          autoplay=""
          muted=""
          playsinline=""
          preload="auto"
          className="relative items-center box-border caret-transparent flex h-full justify-center object-cover align-baseline w-full z-[5] mx-auto rounded-lg md:rounded-3xl"
        >
          <source
            src="https://github.com/designmonks/Contact-US-Video/raw/refs/heads/main/DM Intro 5x4.mp4"
            type="video/mp4"
            className="relative text-black text-base box-border caret-transparent block h-full leading-[normal] w-full font-times_new_roman"
          />
        </video>
        <div className="box-border caret-transparent hidden before:accent-auto before:caret-transparent before:text-zinc-800 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-outfit_variablefont_wght after:accent-auto after:caret-transparent after:clear-both after:text-zinc-800 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-outfit_variablefont_wght"></div>
        <div className="absolute items-end box-border caret-transparent flex h-full justify-end pointer-events-none w-full z-[5] pr-2.5 pb-2.5 inset-[0%] md:h-auto md:w-auto">
          <div className="relative items-center box-border caret-transparent flex h-[50px] justify-center min-h-[auto] min-w-[auto] w-[50px]">
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
