import { CookieForm } from "@/integrations/industry-page/components/CookieForm";

export const CookieModal = () => {
  return (
    <div className="fixed items-end backdrop-blur-sm bg-slate-800/70 shadow-[rgba(15,23,42,0.06)_0px_1px_4px_0px] box-border caret-transparent hidden h-full justify-center z-[9999] overflow-hidden top-auto bottom-[0%] inset-x-[0%] md:items-center md:backdrop-blur-[5px] md:h-auto md:z-[999] md:overflow-visible md:top-[0%]">
      <div className="relative bg-white box-border caret-transparent max-h-none max-w-full min-w-full z-[99999] overflow-hidden pt-[25px] pb-5 px-3 rounded-none md:max-h-[1080px] md:max-w-[550px] md:min-w-[550px] md:overflow-visible md:pt-5 md:pb-[18px] md:px-5 md:rounded-xl">
        <div className="text-neutral-950 text-lg font-bold box-border caret-transparent leading-[21.6px] mb-2 font-redhatdisplay_variablefont_wght md:text-[22px] md:leading-[26.4px] md:mb-[18px]">
          Cookie Settings
        </div>
        <p className="text-sm box-border caret-transparent tracking-[0.36px] leading-[21px] md:text-lg md:leading-[27px]">
          By clicking &quot;Accept All Cookies&quot;, you agree to the storing
          of cookies on your device to enhance site navigation, analyze site
          usage and assist in our marketing efforts.{" "}
          <a
            href="https://www.designmonks.co/privacy-policy"
            className="text-violet-600 text-sm box-border caret-transparent leading-[21px] md:text-lg md:leading-[27px]"
          >
            <span className="text-sm box-border caret-transparent leading-[21px] md:text-lg md:leading-[27px]">
              More info
            </span>
          </a>
        </p>
        <a
          href="https://www.designmonks.co/industry"
          role="button"
          className="absolute text-violet-600 box-border caret-transparent block max-w-full right-2.5 top-2.5 md:right-5 md:top-5"
        >
          <img
            src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67c88b8f73ba3bff7dd01973_X.svg"
            alt=""
            className="box-border caret-transparent inline-block max-w-full"
          />
        </a>
        <div className="box-border caret-transparent mt-8">
          <CookieForm />
          <div
            role="region"
            aria-label="Email Form success"
            className="bg-zinc-300 box-border caret-transparent hidden text-center p-5"
          >
            <div className="box-border caret-transparent">
              Thank you! Your submission has been received!
            </div>
          </div>
          <div
            role="region"
            aria-label="Email Form failure"
            className="bg-red-100 box-border caret-transparent hidden mt-2.5 p-2.5"
          >
            <div className="box-border caret-transparent">
              Oops! Something went wrong while submitting the form.
            </div>
          </div>
        </div>
        <div className="box-border caret-transparent before:accent-auto before:caret-transparent before:text-zinc-800 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-outfit_variablefont_wght after:accent-auto after:caret-transparent after:clear-both after:text-zinc-800 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-outfit_variablefont_wght"></div>
      </div>
    </div>
  );
};
