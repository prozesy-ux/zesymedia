export const CookieConsent = () => {
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
            href="/privacy-policy"
            className="text-violet-600 text-sm box-border caret-transparent leading-[21px] md:text-lg md:leading-[27px]"
          >
            <span className="text-sm box-border caret-transparent leading-[21px] md:text-lg md:leading-[27px]">
              More info
            </span>
          </a>
        </p>
        <a
          href="#"
          role="button"
          className="absolute text-violet-600 box-border caret-transparent block max-w-full right-2.5 top-2.5 md:right-5 md:top-5"
        >
          <img
            src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/67c88b8f73ba3bff7dd01973_X.svg"
            alt=""
            className="box-border caret-transparent inline-block max-w-full"
          />
        </a>
        <div className="box-border caret-transparent mt-8">
          <form
            name="email-form"
            aria-label="Email Form"
            className="box-border caret-transparent"
          >
            <div className="box-border caret-transparent gap-x-2.5 flex flex-col gap-y-2.5 mb-4 md:gap-x-[18px] md:gap-y-[18px] md:mb-8">
              <div className="relative items-start box-border caret-transparent gap-x-3 flex auto-cols-[1fr] grid-cols-[1fr_0.25fr] grid-rows-[auto] pointer-events-none gap-y-3 pb-[5px]">
                <label className="absolute font-bold box-border caret-transparent block inset-[0%] before:accent-auto before:caret-transparent before:text-zinc-800 before:table before:text-sm before:not-italic before:normal-nums before:font-bold before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-none before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-outfit_variablefont_wght after:accent-auto after:caret-transparent after:clear-both after:text-zinc-800 after:table after:text-sm after:not-italic after:normal-nums after:font-bold after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-none after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-outfit_variablefont_wght">
                  <div className="text-[10px] bg-black bg-[url('https://d3e54v103j8qbb.cloudfront.net/static/custom-checkbox-checkmark.589d534424.svg')] bg-no-repeat bg-size-[14px] box-border caret-transparent h-[18px] leading-[normal] w-[18px] border border-blue-500 bg-center mt-px rounded-[100%] border-solid md:h-[22px] md:w-[22px]"></div>
                  <span className="font-normal box-border caret-transparent hidden">
                    Checkbox 4
                  </span>
                </label>
                <div className="box-border caret-transparent pl-8">
                  <label className="text-neutral-950 text-base box-border caret-transparent block tracking-[0.36px] leading-6 mb-0.5 md:text-lg md:leading-[27px] md:mb-1.5">
                    Strictly Necessary (Always Active)
                  </label>
                  <div className="text-neutral-600 text-sm box-border caret-transparent tracking-[0.32px] leading-[18px] md:text-base md:leading-6">
                    Cookies required to enable basic website functionality.
                  </div>
                </div>
              </div>
              <div className="relative items-start box-border caret-transparent gap-x-3 flex auto-cols-[1fr] grid-cols-[1fr_0.25fr] grid-rows-[auto] gap-y-3 pb-[5px]">
                <label className="absolute font-bold box-border caret-transparent block inset-[0%] before:accent-auto before:caret-transparent before:text-zinc-800 before:table before:text-sm before:not-italic before:normal-nums before:font-bold before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-outfit_variablefont_wght after:accent-auto after:caret-transparent after:clear-both after:text-zinc-800 after:table after:text-sm after:not-italic after:normal-nums after:font-bold after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-outfit_variablefont_wght">
                  <div className="text-[10px] bg-black bg-[url('https://d3e54v103j8qbb.cloudfront.net/static/custom-checkbox-checkmark.589d534424.svg')] bg-no-repeat bg-size-[14px] box-border caret-transparent h-[18px] leading-[normal] w-[18px] border border-blue-500 bg-center mt-px rounded-[100%] border-solid md:h-[22px] md:w-[22px]"></div>
                  <span className="font-normal box-border caret-transparent hidden">
                    Checkbox 4
                  </span>
                </label>
                <div className="box-border caret-transparent pl-8">
                  <label className="text-neutral-950 text-base box-border caret-transparent block tracking-[0.36px] leading-6 mb-0.5 md:text-lg md:leading-[27px] md:mb-1.5">
                    Marketing
                  </label>
                  <div className="text-neutral-600 text-sm box-border caret-transparent tracking-[0.32px] leading-[18px] md:text-base md:leading-6">
                    Cookies used to deliver advertising that is more relevant to
                    you and your interests.
                  </div>
                </div>
              </div>
              <div className="relative items-start box-border caret-transparent gap-x-3 flex auto-cols-[1fr] grid-cols-[1fr_0.25fr] grid-rows-[auto] gap-y-3 pb-[5px]">
                <label className="absolute font-bold box-border caret-transparent block inset-[0%] before:accent-auto before:caret-transparent before:text-zinc-800 before:table before:text-sm before:not-italic before:normal-nums before:font-bold before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-outfit_variablefont_wght after:accent-auto after:caret-transparent after:clear-both after:text-zinc-800 after:table after:text-sm after:not-italic after:normal-nums after:font-bold after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-outfit_variablefont_wght">
                  <div className="text-[10px] bg-black bg-[url('https://d3e54v103j8qbb.cloudfront.net/static/custom-checkbox-checkmark.589d534424.svg')] bg-no-repeat bg-size-[14px] box-border caret-transparent h-[18px] leading-[normal] w-[18px] border border-blue-500 bg-center mt-px rounded-[100%] border-solid md:h-[22px] md:w-[22px]"></div>
                  <span className="font-normal box-border caret-transparent hidden">
                    Checkbox 4
                  </span>
                </label>
                <div className="box-border caret-transparent pl-8">
                  <label className="text-neutral-950 text-base box-border caret-transparent block tracking-[0.36px] leading-6 mb-0.5 md:text-lg md:leading-[27px] md:mb-1.5">
                    Personalization
                  </label>
                  <div className="text-neutral-600 text-sm box-border caret-transparent tracking-[0.32px] leading-[18px] md:text-base md:leading-6">
                    Cookies allowing the website to remember choices you make
                    (such as your user name, language, or the region you are
                    in).
                  </div>
                </div>
              </div>
              <div className="relative items-start box-border caret-transparent gap-x-3 flex auto-cols-[1fr] grid-cols-[1fr_0.25fr] grid-rows-[auto] gap-y-3 pb-[5px]">
                <label className="absolute font-bold box-border caret-transparent block inset-[0%] before:accent-auto before:caret-transparent before:text-zinc-800 before:table before:text-sm before:not-italic before:normal-nums before:font-bold before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-outfit_variablefont_wght after:accent-auto after:caret-transparent after:clear-both after:text-zinc-800 after:table after:text-sm after:not-italic after:normal-nums after:font-bold after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-outfit_variablefont_wght">
                  <div className="text-[10px] bg-black bg-[url('https://d3e54v103j8qbb.cloudfront.net/static/custom-checkbox-checkmark.589d534424.svg')] bg-no-repeat bg-size-[14px] box-border caret-transparent h-[18px] leading-[normal] w-[18px] border border-blue-500 bg-center mt-px rounded-[100%] border-solid md:h-[22px] md:w-[22px]"></div>
                  <span className="font-normal box-border caret-transparent hidden">
                    Checkbox 4
                  </span>
                </label>
                <div className="box-border caret-transparent pl-8">
                  <label className="text-neutral-950 text-base box-border caret-transparent block tracking-[0.36px] leading-6 mb-0.5 md:text-lg md:leading-[27px] md:mb-1.5">
                    Analytics
                  </label>
                  <div className="text-neutral-600 text-sm box-border caret-transparent tracking-[0.32px] leading-[18px] md:text-base md:leading-6">
                    Cookies helping understand how this website performs, how
                    visitors interact with the site, and whether there may be
                    technical issues.
                  </div>
                </div>
              </div>
            </div>
            <div className="items-center box-border caret-transparent flex flex-col">
              <input
                type="submit"
                value="Accept All Cookies"
                role="button"
                className="text-zinc-50 text-base items-center bg-violet-600 box-border caret-transparent flex justify-center tracking-[0.28px] leading-6 text-center text-nowrap w-full border border-violet-600 px-8 py-2.5 rounded-lg border-solid md:py-3"
              />
              <a
                href="#"
                role="button"
                className="text-violet-600 text-base font-bold box-border caret-transparent block leading-6 mt-2.5 md:mt-5"
              >
                Save Settings
              </a>
            </div>
          </form>
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
