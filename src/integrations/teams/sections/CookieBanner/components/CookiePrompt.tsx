export const CookiePrompt = () => {
  return (
    <div className="fixed items-start bg-stone-100 shadow-[rgba(15,23,42,0.06)_0px_1px_4px_0px] box-border caret-transparent gap-x-2.5 hidden flex-col auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] justify-center max-w-full gap-y-2.5 w-full z-[99999] overflow-hidden ml-[0%] mr-0 mb-0 rounded-t-xl rounded-b-none right-0 bottom-0 md:gap-x-[normal] md:grid-cols-[1fr_0.25fr_0.25fr_0.25fr] md:max-w-[414.88px] md:gap-y-[normal] md:mb-[1%] md:mx-[2%] md:rounded-b-xl">
      <div className="items-center box-border caret-transparent flex justify-between w-full p-5">
        <div className="text-slate-800 text-xl font-bold box-border caret-transparent mb-0.5 font-redhatdisplay_variablefont_wght md:mb-0">
          Cookie Settings
        </div>
        <a
          href="https://prozesy.com/teams"
          role="button"
          className="text-violet-600 box-border caret-transparent block max-w-full decoration-neutral-600"
        >
          <img
            src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67c88b8f73ba3bff7dd01973_X.svg"
            alt=""
            className="box-border caret-transparent inline-block max-w-full"
          />
        </a>
      </div>
      <div className="bg-purple-100 box-border caret-transparent pt-4 pb-5 px-5 md:pb-4">
        <a
          href="https://prozesy.com/teams"
          role="button"
          className="text-violet-600 box-border caret-transparent inline-block tracking-[0.28px] leading-[21px] border border-violet-600 px-4 py-2.5 rounded-lg border-solid"
        >
          Accept All Cookies
        </a>
        <p className="text-neutral-600 text-xs box-border caret-transparent tracking-[0.32px] leading-4 max-w-[400px] w-full my-[18px] md:text-base md:leading-6 md:w-auto md:mb-5">
          By clicking &quot;Accept All Cookies&quot;, you agree to the storing
          of cookies on your device to enhance site navigation, analyze site
          usage and assist in our marketing efforts.{" "}
          <a
            href="https://prozesy.com/privacy-policy"
            className="text-violet-600 text-xs box-border caret-transparent leading-4 md:text-base md:leading-6"
          >
            More info
          </a>
          <br className="text-xs box-border caret-transparent leading-4 md:text-base md:leading-6" />
        </p>
        <a
          href="https://prozesy.com/teams"
          role="button"
          className="text-violet-600 text-base box-border caret-transparent tracking-[0.36px] md:text-lg"
        >
          Cookie Settings
        </a>
      </div>
    </div>
  );
};
