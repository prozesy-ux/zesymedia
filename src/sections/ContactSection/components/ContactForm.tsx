export const ContactForm = () => {
  return (
    <div className="box-border caret-transparent mb-0 md:mb-[15px]">
      <form
        name="wf-form-Contact-Form"
        aria-label="Contact Form"
        className="box-border caret-transparent"
      >
        <div className="box-border caret-transparent gap-x-6 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-6 md:gap-x-9 md:grid-rows-[auto_auto] md:gap-y-9">
          <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4">
            <label className="text-zinc-50 text-base font-bold box-border caret-transparent block leading-[19.2px] mb-3 md:text-xl md:leading-6 md:mb-0">
              Full Name
            </label>
            <input
              name="Full-Name"
              placeholder="John Doe"
              type="text"
              className="text-zinc-50 text-[17px] bg-white/10 box-border caret-transparent block h-[38px] tracking-[0.18px] leading-[25.5px] max-w-full min-h-[50px] align-middle w-full border border-neutral-600 px-4 py-3 rounded-lg border-solid"
            />
          </div>
          <div className="box-border caret-transparent gap-x-6 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-6 md:gap-x-4 md:grid-cols-[1fr_1fr] md:gap-y-4">
            <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4">
              <label className="text-zinc-50 text-base font-bold box-border caret-transparent block leading-[19.2px] mb-3 md:text-xl md:leading-6 md:mb-0">
                Your Email
              </label>
              <input
                name="Email"
                placeholder="yourmail@gmail.com"
                type="email"
                className="text-zinc-50 text-[17px] bg-white/10 box-border caret-transparent block h-[38px] tracking-[0.18px] leading-[25.5px] max-w-full min-h-[50px] align-middle w-full border border-neutral-600 px-4 py-3 rounded-lg border-solid"
              />
              <input
                name="work-email"
                placeholder="Your email here"
                type="text"
                className="text-base bg-transparent bg-[url('https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/676d68deb3516c5b8d5ee90d_EnvelopeSimple.svg')] bg-no-repeat box-border caret-transparent hidden h-[38px] leading-[22.8571px] min-h-14 align-middle w-full border border-neutral-200 bg-[position:16px_52%] pl-12 pr-3 py-2 rounded-lg border-solid"
              />
            </div>
            <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4">
              <label className="text-zinc-50 text-base font-bold box-border caret-transparent block leading-[19.2px] mb-3 md:text-xl md:leading-6 md:mb-0">
                Whatsapp Number{" "}
              </label>
              <input
                name="WhatsApp-Number"
                placeholder="1 123 1234567"
                type="tel"
                className="text-zinc-50 text-[17px] bg-white/10 box-border caret-transparent block h-[38px] tracking-[0.18px] leading-[25.5px] max-w-full min-h-[50px] align-middle w-full border border-neutral-600 px-4 py-3 rounded-lg border-solid"
              />
            </div>
          </div>
          <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4">
            <label className="text-zinc-50 text-base font-bold box-border caret-transparent block leading-[19.2px] mb-3 md:text-xl md:leading-6 md:mb-0">
              Project Budget
            </label>
            <div className="box-border caret-transparent gap-x-3 flex flex-wrap gap-y-3 md:gap-x-4 md:gap-y-4">
              <label className="relative font-bold box-border caret-transparent block flex-wrap before:accent-auto before:caret-transparent before:text-zinc-800 before:table before:text-sm before:not-italic before:normal-nums before:font-bold before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-outfit_variablefont_wght after:accent-auto after:caret-transparent after:clear-both after:text-zinc-800 after:table after:text-sm after:not-italic after:normal-nums after:font-bold after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-outfit_variablefont_wght">
                <input
                  type="radio"
                  name="Project-Budget"
                  value="Less than $5K"
                  className="bg-transparent box-border caret-transparent hidden float-left leading-[normal] z-[1] -ml-5 mt-[3px] p-0"
                />
                <span className="relative text-neutral-400 text-base font-normal items-center box-border caret-transparent inline-block justify-start tracking-[0.18px] leading-6 z-[2] border border-neutral-600 px-5 py-3 rounded-lg border-solid left-[0%] inset-y-[0%] md:text-[17px] md:leading-[25.5px]">
                  Less than $5K
                </span>
              </label>
              <label className="relative font-bold box-border caret-transparent block flex-wrap before:accent-auto before:caret-transparent before:text-zinc-800 before:table before:text-sm before:not-italic before:normal-nums before:font-bold before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-outfit_variablefont_wght after:accent-auto after:caret-transparent after:clear-both after:text-zinc-800 after:table after:text-sm after:not-italic after:normal-nums after:font-bold after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-outfit_variablefont_wght">
                <input
                  type="radio"
                  name="Project-Budget"
                  value="$5K - $10K"
                  className="bg-transparent box-border caret-transparent hidden float-left leading-[normal] z-[1] -ml-5 mt-[3px] p-0"
                />
                <span className="relative text-neutral-400 text-base font-normal items-center box-border caret-transparent inline-block justify-start tracking-[0.18px] leading-6 z-[2] border border-neutral-600 px-5 py-3 rounded-lg border-solid left-[0%] inset-y-[0%] md:text-[17px] md:leading-[25.5px]">
                  $5K - $10K
                </span>
              </label>
              <label className="relative font-bold box-border caret-transparent block flex-wrap before:accent-auto before:caret-transparent before:text-zinc-800 before:table before:text-sm before:not-italic before:normal-nums before:font-bold before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-outfit_variablefont_wght after:accent-auto after:caret-transparent after:clear-both after:text-zinc-800 after:table after:text-sm after:not-italic after:normal-nums after:font-bold after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-outfit_variablefont_wght">
                <input
                  type="radio"
                  name="Project-Budget"
                  value="$10K - $20K"
                  className="bg-transparent box-border caret-transparent hidden float-left leading-[normal] z-[1] -ml-5 mt-[3px] p-0"
                />
                <span className="relative text-neutral-400 text-base font-normal items-center box-border caret-transparent inline-block justify-start tracking-[0.18px] leading-6 z-[2] border border-neutral-600 px-5 py-3 rounded-lg border-solid left-[0%] inset-y-[0%] md:text-[17px] md:leading-[25.5px]">
                  $10K - $20K
                </span>
              </label>
              <label className="relative font-bold box-border caret-transparent block flex-wrap before:accent-auto before:caret-transparent before:text-zinc-800 before:table before:text-sm before:not-italic before:normal-nums before:font-bold before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-outfit_variablefont_wght after:accent-auto after:caret-transparent after:clear-both after:text-zinc-800 after:table after:text-sm after:not-italic after:normal-nums after:font-bold after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-outfit_variablefont_wght">
                <input
                  type="radio"
                  name="Project-Budget"
                  value="$20K - $50K"
                  className="bg-transparent box-border caret-transparent hidden float-left leading-[normal] z-[1] -ml-5 mt-[3px] p-0"
                />
                <span className="relative text-neutral-400 text-base font-normal items-center box-border caret-transparent inline-block justify-start tracking-[0.18px] leading-6 z-[2] border border-neutral-600 px-5 py-3 rounded-lg border-solid left-[0%] inset-y-[0%] md:text-[17px] md:leading-[25.5px]">
                  $20K - $50K
                </span>
              </label>
              <label className="relative font-bold box-border caret-transparent block flex-wrap before:accent-auto before:caret-transparent before:text-zinc-800 before:table before:text-sm before:not-italic before:normal-nums before:font-bold before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-outfit_variablefont_wght after:accent-auto after:caret-transparent after:clear-both after:text-zinc-800 after:table after:text-sm after:not-italic after:normal-nums after:font-bold after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-outfit_variablefont_wght">
                <input
                  type="radio"
                  name="Project-Budget"
                  value="More than $50K"
                  className="bg-transparent box-border caret-transparent hidden float-left leading-[normal] z-[1] -ml-5 mt-[3px] p-0"
                />
                <span className="relative text-neutral-400 text-base font-normal items-center box-border caret-transparent inline-block justify-start tracking-[0.18px] leading-6 z-[2] border border-neutral-600 px-5 py-3 rounded-lg border-solid left-[0%] inset-y-[0%] md:text-[17px] md:leading-[25.5px]">
                  More than $50K
                </span>
              </label>
              <div className="italic items-center bg-gray-200 box-border caret-transparent hidden justify-center min-h-20 mb-2.5 before:accent-auto before:caret-transparent before:text-zinc-800 before:table before:text-sm before:italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-outfit_variablefont_wght after:accent-auto after:caret-transparent after:clear-both after:text-zinc-800 after:table after:text-sm after:italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-outfit_variablefont_wght"></div>
            </div>
          </div>
          <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4">
            <label className="text-zinc-50 text-base font-bold box-border caret-transparent block leading-[19.2px] mb-3 md:text-xl md:leading-6 md:mb-0">
              Project Details
            </label>
            <textarea
              name="Project-details"
              placeholder="I want to redesign my website.."
              className="text-zinc-50 text-sm bg-white/10 box-border caret-transparent block tracking-[0.18px] leading-[21px] min-h-[105px] align-middle w-full border-neutral-600 px-4 py-3 rounded-lg md:text-base md:leading-6"
            ></textarea>
          </div>
          <div className="relative items-center bg-[linear-gradient(rgb(89,45,181)_25%,rgb(125,64,255))] shadow-[rgba(255,255,255,0.72)_0px_1.6px_3px_0px_inset] box-border caret-transparent flex flex-col h-14 justify-center max-w-full text-left w-full z-[5] overflow-hidden rounded-lg md:max-w-[177px]">
            <input
              type="submit"
              value=""
              className="absolute text-transparent bg-transparent box-border caret-transparent block text-center text-nowrap z-10 px-[15px] py-[9px] inset-[0%]"
            />
            <figure className="absolute items-center bg-neutral-400 box-border caret-transparent flex h-full justify-center rotate-[0.3744000858317898deg] w-full inset-[0%] md:transform-none">
              <div className="absolute bg-[linear-gradient(90deg,rgba(255,255,255,0.79)_61%,rgb(255,255,255)_75%)] box-border caret-transparent blur-[6px] h-20 -translate-y-10 w-full left-2/4 right-[0%] top-2/4 bottom-[0%] md:translate-y-[-50.0%]"></div>
            </figure>
            <div className="absolute bg-[linear-gradient(rgb(89,45,181)_25%,rgb(125,64,255))] box-border caret-transparent rounded-lg inset-[0%]"></div>
            <div className="relative text-gray-200 box-border caret-transparent w-full md:w-auto">
              <div className="relative items-center box-border caret-transparent gap-x-2 flex h-full justify-center gap-y-2 w-full z-[1]">
                <div className="text-zinc-50 text-base font-bold box-border caret-transparent tracking-[0.32px] leading-[19.2px]">
                  Let&#39;s Connect
                </div>
                <img
                  src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/67adba6a3ab018a0349e2bc2_CTA_Arrow_(2).svg"
                  alt=""
                  className="box-border caret-transparent h-7 max-w-7 object-contain w-full md:h-6 md:max-w-6"
                />
              </div>
            </div>
            <img
              src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/672a7a8e3a6aba070d15d4c0_Star_6.avif"
              alt=""
              className="absolute box-border caret-transparent max-w-full right-[0%] top-[0%]"
            />
          </div>
        </div>
      </form>
      <div
        role="region"
        aria-label="Contact Form success"
        className="bg-zinc-300 box-border caret-transparent hidden text-center p-5"
      >
        <div className="box-border caret-transparent">
          Thank you! Your submission has been received!
        </div>
      </div>
      <div
        role="region"
        aria-label="Contact Form failure"
        className="bg-red-100 box-border caret-transparent hidden mt-2.5 p-2.5"
      >
        <div className="box-border caret-transparent">
          Oops! Something went wrong while submitting the form.
        </div>
      </div>
    </div>
  );
};
