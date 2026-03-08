export type PricingCardsProps = {
  variant: string;
  tabs?: Array<{
    label: string;
    href: string;
    isActive: boolean;
  }>;
  packages: Array<{
    price: string;
    priceSubtext: string;
    title: string;
    features: string[];
    ctaUrl: string;
    ctaText: string;
    isPopular?: boolean;
    cardWrapperClass?: string;
    buttonBackgroundClass?: string;
  }>;
  customPricing?: {
    title: string;
    description: string;
    steps: Array<{
      number: string;
      text: string;
    }>;
    stepsImage: string;
    formTitle: string;
    formDescription: string;
    formFields: Array<{
      label: string;
      name: string;
      placeholder: string;
      type: string;
    }>;
    submitButtonText: string;
    consultationTitle: string;
    consultationDescription: string;
    consultationImage: string;
    revisionsTitle: string;
    revisionsDescription: string;
    revisionsImage: string;
  };
};

export const PricingCards = (props: PricingCardsProps) => {
  if (props.variant === "custom") {
    return (
      <div className="items-start box-border caret-transparent gap-x-4 flex flex-col auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] h-full justify-center gap-y-4 mt-9 md:gap-x-8 md:flex-row md:grid-cols-[1fr_1fr_1fr] md:h-auto md:gap-y-8 md:mt-14">
        <div className="box-border caret-transparent gap-x-8 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-8 w-full md:grid-cols-[1fr_1fr_1fr]">
          <div className="bg-[linear-gradient(157deg,rgba(127,33,255,0.6),rgba(127,33,255,0)_41%,rgba(127,33,255,0)_71%,rgb(127,33,255))] box-border caret-transparent col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1] p-px rounded-2xl md:col-end-[span_2] md:col-start-[span_2] md:rounded-3xl">
            <div className="relative items-end bg-neutral-950 bg-[linear-gradient(162deg,rgba(95,0,224,0.2)_8%,rgba(95,0,224,0)_47%,rgba(95,0,224,0)_80%,rgba(95,0,224,0.2)_100%,rgb(10,10,10))] box-border caret-transparent flex h-full justify-center text-left w-full pt-7 px-5 rounded-2xl md:pt-8 md:px-8 md:rounded-3xl">
              <div className="items-start box-border caret-transparent gap-x-4 flex flex-col justify-start gap-y-4 md:gap-x-6 md:gap-y-6">
                <div className="box-border caret-transparent gap-x-2 flex flex-col gap-y-2">
                  <h2 className="text-zinc-50 text-2xl font-bold box-border caret-transparent leading-[28.8px] font-redhatdisplay_variablefont_wght md:text-[40px] md:leading-[48px]">
                    {props.customPricing?.title}
                  </h2>
                  <p className="text-neutral-300 text-base box-border caret-transparent tracking-[0.36px] leading-6 md:text-lg md:leading-[27px]">
                    {props.customPricing?.description}
                  </p>
                </div>
                <div className="items-center box-border caret-transparent gap-x-8 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] justify-items-start gap-y-8 w-full md:gap-x-4 md:grid-cols-[1fr_1fr] md:gap-y-4">
                  <div className="box-border caret-transparent gap-x-2 flex flex-col gap-y-2 md:gap-x-3 md:gap-y-3">
                    {props.customPricing?.steps.map((step, index) => (
                      <div
                        key={index}
                        className="items-start box-border caret-transparent gap-x-2 flex justify-start gap-y-2"
                      >
                        <div className="text-neutral-950 items-center bg-zinc-50 box-border caret-transparent flex shrink-0 h-5 justify-center w-5 mt-0.5 pt-px rounded-[100%]">
                          <p className="box-border caret-transparent tracking-[0.36px] leading-[21px]">
                            {step.number}
                          </p>
                        </div>
                        <p className="text-neutral-300 text-base box-border caret-transparent tracking-[0.36px] leading-6 md:text-lg md:leading-[27px]">
                          {step.text}
                        </p>
                      </div>
                    ))}
                  </div>
                  <img
                    alt=""
                    src={props.customPricing?.stepsImage}
                    className="box-border caret-transparent max-w-full"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[linear-gradient(157deg,rgba(127,33,255,0.6),rgba(127,33,255,0)_41%,rgba(127,33,255,0)_71%,rgb(127,33,255))] box-border caret-transparent col-end-[span_1] col-start-[span_1] row-end-[span_2] row-start-[span_2] p-px rounded-2xl md:rounded-3xl">
            <div className="relative items-center bg-neutral-950 bg-[linear-gradient(162deg,rgba(95,0,224,0.2)_8%,rgba(95,0,224,0)_47%,rgba(95,0,224,0)_80%,rgba(95,0,224,0.2)_100%,rgb(10,10,10))] box-border caret-transparent flex h-full justify-center text-left w-full px-5 py-7 rounded-2xl md:p-8 md:rounded-3xl">
              <div className="box-border caret-transparent gap-x-8 flex flex-col gap-y-8 md:gap-x-14 md:gap-y-14">
                <div className="box-border caret-transparent gap-x-2 flex flex-col gap-y-2">
                  <h2 className="text-zinc-50 text-2xl font-bold box-border caret-transparent leading-[28.8px] font-redhatdisplay_variablefont_wght md:text-[40px] md:leading-[48px]">
                    {props.customPricing?.formTitle}
                  </h2>
                  <p className="text-neutral-300 text-base box-border caret-transparent tracking-[0.36px] leading-6 md:text-lg md:leading-[27px]">
                    {props.customPricing?.formDescription}
                  </p>
                </div>
                <div className="box-border caret-transparent mb-0 md:mb-[15px]">
                  <form
                    name="wf-form-Contact-Form"
                    aria-label="Contact Form"
                    className="box-border caret-transparent"
                  >
                    <div className="box-border caret-transparent gap-x-6 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-6 md:gap-x-9 md:grid-rows-[auto_auto] md:gap-y-9">
                      {props.customPricing?.formFields.map((field, index) => (
                        <div
                          key={index}
                          className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4"
                        >
                          <label className="text-zinc-50 text-base font-bold box-border caret-transparent block leading-[19.2px] mb-3 md:text-xl md:leading-6 md:mb-0">
                            {field.label}
                          </label>
                          {field.type === "textarea" ? (
                            <textarea
                              name={field.name}
                              placeholder={field.placeholder}
                              className="text-zinc-50 text-sm bg-white/10 box-border caret-transparent block tracking-[0.18px] leading-[21px] min-h-[105px] resize-none text-start align-middle w-full border-neutral-600 px-4 py-3 rounded-lg md:text-base md:leading-6"
                            ></textarea>
                          ) : (
                            <input
                              name={field.name}
                              placeholder={field.placeholder}
                              type={field.type}
                              className="text-zinc-50 text-[17px] bg-white/10 box-border caret-transparent block h-[38px] tracking-[0.18px] leading-[25.5px] max-w-full min-h-[50px] text-start align-middle w-full border border-neutral-600 px-4 py-3 rounded-lg border-solid"
                            />
                          )}
                        </div>
                      ))}
                      <div className="relative items-center bg-[linear-gradient(rgb(89,45,181)_25%,rgb(125,64,255))] shadow-[rgba(255,255,255,0.72)_0px_1.6px_3px_0px_inset] box-border caret-transparent flex flex-col h-14 justify-center max-w-full w-full z-[5] overflow-hidden rounded-lg">
                        <input
                          type="submit"
                          value=""
                          className="absolute text-transparent bg-transparent box-border caret-transparent block text-center text-nowrap z-10 px-[15px] py-[9px] inset-[0%]"
                        />
                        <figure className="absolute items-center bg-neutral-400 box-border caret-transparent flex h-full justify-center w-full inset-[0%]">
                          <div className="absolute bg-[linear-gradient(90deg,rgba(255,255,255,0.79)_61%,rgb(255,255,255)_75%)] box-border caret-transparent blur-[6px] h-20 w-full left-2/4 right-[0%] top-2/4 bottom-[0%]"></div>
                        </figure>
                        <div className="absolute bg-[linear-gradient(rgb(89,45,181)_25%,rgb(125,64,255))] box-border caret-transparent rounded-lg inset-[0%]"></div>
                        <div className="relative text-gray-200 box-border caret-transparent w-full md:w-auto">
                          <div className="relative items-center box-border caret-transparent gap-x-2 flex h-full justify-center gap-y-2 w-full z-[1]">
                            <div className="text-zinc-50 text-base font-bold box-border caret-transparent tracking-[0.32px] leading-[19.2px]">
                              {props.customPricing?.submitButtonText}
                            </div>
                            <img
                              src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67adba6a3ab018a0349e2bc2_CTA Arrow (2).svg"
                              alt=""
                              className="box-border caret-transparent h-7 max-w-7 object-contain w-full md:h-6 md:max-w-6"
                            />
                          </div>
                        </div>
                        <img
                          src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/672a7a8e3a6aba070d15d4c0_Star 6.avif"
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
              </div>
            </div>
          </div>
          <div className="bg-[linear-gradient(157deg,rgba(127,33,255,0.6),rgba(127,33,255,0)_41%,rgba(127,33,255,0)_71%,rgb(127,33,255))] box-border caret-transparent p-px rounded-2xl md:rounded-3xl">
            <div className="relative items-end bg-neutral-950 bg-[linear-gradient(162deg,rgba(95,0,224,0.2)_8%,rgba(95,0,224,0)_47%,rgba(95,0,224,0)_80%,rgba(95,0,224,0.2)_100%,rgb(10,10,10))] box-border caret-transparent flex h-full justify-center text-left w-full pt-7 px-5 rounded-2xl md:pt-8 md:px-8 md:rounded-3xl">
              <div className="box-border caret-transparent gap-x-5 flex flex-col gap-y-5 md:gap-x-10 md:gap-y-10">
                <div className="box-border caret-transparent gap-x-2 flex flex-col gap-y-2">
                  <h2 className="text-zinc-50 text-xl font-bold box-border caret-transparent leading-6 font-redhatdisplay_variablefont_wght md:text-2xl md:leading-[28.8px]">
                    {props.customPricing?.consultationTitle}
                  </h2>
                  <p className="text-neutral-300 text-base box-border caret-transparent tracking-[0.36px] leading-6 md:text-lg md:leading-[27px]">
                    {props.customPricing?.consultationDescription}
                  </p>
                </div>
                <img
                  src={props.customPricing?.consultationImage}
                  alt=""
                  className="box-border caret-transparent max-w-full"
                />
              </div>
            </div>
          </div>
          <div className="bg-[linear-gradient(157deg,rgba(127,33,255,0.6),rgba(127,33,255,0)_41%,rgba(127,33,255,0)_71%,rgb(127,33,255))] box-border caret-transparent p-px rounded-2xl md:rounded-3xl">
            <div className="relative items-end bg-neutral-950 bg-[linear-gradient(162deg,rgba(95,0,224,0.2)_8%,rgba(95,0,224,0)_47%,rgba(95,0,224,0)_80%,rgba(95,0,224,0.2)_100%,rgb(10,10,10))] box-border caret-transparent flex h-full justify-center text-left w-full pt-7 px-5 rounded-2xl md:pt-8 md:px-8 md:rounded-3xl">
              <div className="box-border caret-transparent gap-x-5 flex flex-col gap-y-5 md:gap-x-10 md:gap-y-10">
                <div className="box-border caret-transparent gap-x-2 flex flex-col gap-y-2">
                  <h2 className="text-zinc-50 text-xl font-bold box-border caret-transparent leading-6 font-redhatdisplay_variablefont_wght md:text-2xl md:leading-[28.8px]">
                    {props.customPricing?.revisionsTitle}
                  </h2>
                  <p className="text-neutral-300 text-base box-border caret-transparent tracking-[0.36px] leading-6 md:text-lg md:leading-[27px]">
                    {props.customPricing?.revisionsDescription}
                  </p>
                </div>
                <img
                  src={props.customPricing?.revisionsImage}
                  alt=""
                  className="box-border caret-transparent max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (props.variant === "with-tabs") {
    return (
      <div
        role="tabpanel"
        className="relative box-border caret-transparent hidden"
      >
        <div className="box-border caret-transparent relative flex flex-col before:accent-auto before:caret-transparent before:text-zinc-800 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-outfit_variablefont_wght after:accent-auto after:caret-transparent after:clear-both after:text-zinc-800 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-outfit_variablefont_wght">
          <div
            role="tablist"
            className="box-border caret-transparent relative gap-x-3 flex justify-start max-w-full gap-y-3 overflow-auto mt-9 mx-auto p-2 rounded-[10px] md:justify-center md:max-w-none md:overflow-visible md:mt-10"
          >
            {props.tabs?.map((tab, index) => (
              <a
                key={index}
                href={tab.href}
                role="tab"
                className={`relative ${
                  tab.isActive
                    ? "text-zinc-50 bg-violet-600"
                    : "text-neutral-400 bg-neutral-950"
                } box-border caret-transparent block shrink-0 tracking-[0.28px] leading-[21px] max-w-full text-left align-top border border-neutral-600 px-2.5 py-2 rounded-lg border-solid`}
              >
                <div className="text-sm box-border caret-transparent leading-[21px] md:text-base md:leading-6">
                  {tab.label}
                </div>
              </a>
            ))}
          </div>
          <div className="box-border caret-transparent relative flex flex-col">
            <div
              role="tabpanel"
              className="relative box-border caret-transparent"
            >
              <div className="items-start box-border caret-transparent gap-x-4 flex flex-col auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] h-full justify-center gap-y-4 mt-9 md:gap-x-8 md:flex-row md:grid-cols-[1fr_1fr_1fr] md:h-auto md:gap-y-8 md:mt-14">
                {props.packages.map((pkg, index) => (
                  <div
                    key={index}
                    className={`${pkg.cardWrapperClass || "box-border caret-transparent h-full w-full"} ${
                      index === 1
                        ? "overflow-hidden rounded-2xl md:overflow-visible md:rounded-none"
                        : ""
                    }`}
                  >
                    <div
                      className={
                        index === 1
                          ? "relative bg-[linear-gradient(234deg,rgba(235,248,252,0.56),rgb(127,184,239)_30%,rgb(81,66,241)_58%,rgb(29,29,41))] box-border caret-transparent h-full max-w-full w-full z-[3] overflow-hidden rounded-2xl md:rounded-3xl"
                          : "bg-[linear-gradient(157deg,rgba(127,33,255,0.6),rgba(127,33,255,0)_41%,rgba(127,33,255,0)_71%,rgb(127,33,255))] box-border caret-transparent p-px rounded-2xl md:rounded-3xl"
                      }
                    >
                      <div
                        className={
                          index === 1
                            ? "relative bg-neutral-950 bg-[linear-gradient(162deg,rgba(95,0,224,0.2)_8.41%,rgba(95,0,224,0)_47.02%,rgba(95,0,224,0)_81.37%,rgba(95,0,224,0.2)_100%),none] bg-size-[auto,auto] shadow-[rgba(255,255,255,0.09)_0px_8px_24px_0px_inset,rgba(23,11,38,0.1)_0px_16px_24px_0px] box-border caret-transparent h-full text-left z-20 border border-violet-600/60 bg-[position:0%,0%_0%,0%] m-0 pt-7 pb-5 px-5 rounded-2xl border-solid inset-[0%] md:m-0.5 md:pt-[72px] md:pb-8 md:px-8 md:rounded-3xl md:inset-auto"
                            : "relative bg-neutral-950 bg-[linear-gradient(162deg,rgba(95,0,224,0.2)_8%,rgba(95,0,224,0)_47%,rgba(95,0,224,0)_80%,rgba(95,0,224,0.2)_100%,rgb(10,10,10))] box-border caret-transparent text-left pt-7 pb-5 px-5 rounded-2xl md:pt-[72px] md:pb-8 md:px-8 md:rounded-3xl"
                        }
                      >
                        <div className="box-border caret-transparent h-full md:h-auto">
                          <div className="text-zinc-50 box-border caret-transparent">
                            <div className="box-border caret-transparent gap-x-2 flex flex-col gap-y-2">
                              <div className="text-[28px] font-bold box-border caret-transparent leading-[33.6px] font-redhatdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                                {pkg.price}
                              </div>
                              <div className="text-base box-border caret-transparent tracking-[0.36px] leading-6 md:text-lg md:leading-[27px]">
                                {pkg.priceSubtext}
                              </div>
                            </div>
                            <h3 className="text-lime-300 text-2xl font-bold box-border caret-transparent leading-[28.8px] capitalize mt-6 font-redhatdisplay_variablefont_wght md:text-[32px] md:leading-[38.4px]">
                              {pkg.title}
                            </h3>
                          </div>
                          <div className="bg-[linear-gradient(90deg,rgb(24,0,55),rgb(67,0,157)_50%,rgb(24,0,55))] box-border caret-transparent h-px w-full my-6"></div>
                          <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4">
                            {pkg.features.map((feature, featureIndex) => (
                              <div
                                key={featureIndex}
                                className="text-zinc-50 items-start box-border caret-transparent gap-x-2 flex justify-start gap-y-2"
                              >
                                <div className="box-border caret-transparent shrink-0">
                                  <div className="box-border caret-transparent h-6 w-6">
                                    <img
                                      src="https://c.animaapp.com/mmfqa5b2QIeLaz/assets/icon-9.svg"
                                      alt="Icon"
                                      className="box-border caret-transparent inline align-baseline w-full"
                                    />
                                  </div>
                                </div>
                                <div className="text-base box-border caret-transparent tracking-[0.36px] leading-6 md:text-lg md:leading-[27px]">
                                  {feature}
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="box-border caret-transparent inline-block w-full z-30 mt-6 md:mt-[55px]">
                            <a
                              href={pkg.ctaUrl}
                              className="relative text-violet-600 items-center bg-violet-500 bg-[linear-gradient(rgb(89,45,181)_25%,rgb(125,64,255))] shadow-[rgba(255,255,255,0.72)_0px_1.6px_3px_0px_inset] box-border caret-transparent flex flex-col h-14 justify-center w-full z-[5] overflow-hidden rounded-lg md:bg-transparent"
                            >
                              <div className="absolute items-center bg-neutral-400 box-border caret-transparent flex h-full justify-center w-full inset-[0%]">
                                <div className="absolute bg-[linear-gradient(90deg,rgba(255,255,255,0.79)_61%,rgb(255,255,255)_75%)] box-border caret-transparent blur-[6px] h-20 w-full left-2/4 right-[0%] top-2/4 bottom-[0%]"></div>
                              </div>
                              <div className="absolute bg-[linear-gradient(rgb(89,45,181)_25%,rgb(125,64,255))] box-border caret-transparent rounded-lg inset-[0%]"></div>
                              <div className="relative text-gray-200 box-border caret-transparent w-full md:w-auto">
                                <div className="relative items-center box-border caret-transparent gap-x-2 flex h-full justify-center gap-y-2 w-full z-[1]">
                                  <div className="text-zinc-50 text-base font-bold box-border caret-transparent tracking-[0.32px] leading-[19.2px]">
                                    {pkg.ctaText}
                                  </div>
                                  <img
                                    src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67adba6a3ab018a0349e2bc2_CTA Arrow (2).svg"
                                    alt=""
                                    className="box-border caret-transparent h-7 max-w-7 object-contain w-full md:h-6 md:max-w-6"
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
                        {pkg.isPopular && (
                          <>
                            <div className="box-border caret-transparent before:accent-auto before:caret-transparent before:text-zinc-800 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-outfit_variablefont_wght after:accent-auto after:caret-transparent after:clear-both after:text-zinc-800 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-left after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-outfit_variablefont_wght"></div>
                            <div className="absolute items-center bg-lime-300 box-border caret-transparent gap-x-1 flex gap-y-1 px-[12.8px] py-3 rounded-b-lg right-6 -top-0.5">
                              <img
                                src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6739bdd37b0f4ddbd45c9c30_Frame (1).svg"
                                alt=""
                                className="box-border caret-transparent max-w-full"
                              />
                              <div className="text-neutral-950 text-base font-bold box-border caret-transparent tracking-[0.32px] leading-6">
                                Popular
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="items-start box-border caret-transparent gap-x-4 flex flex-col auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] h-full justify-center gap-y-4 mt-9 md:gap-x-8 md:flex-row md:grid-cols-[1fr_1fr_1fr] md:h-auto md:gap-y-8 md:mt-14">
      {props.packages.map((pkg, index) => (
        <div
          key={index}
          className={`${pkg.cardWrapperClass || "box-border caret-transparent h-full min-h-[auto] min-w-[auto] w-full"} ${
            index === 1
              ? "overflow-hidden rounded-2xl md:overflow-visible md:rounded-none"
              : ""
          }`}
        >
          <div
            className={
              index === 1
                ? "relative bg-[linear-gradient(234deg,rgba(235,248,252,0.56),rgb(127,184,239)_30%,rgb(81,66,241)_58%,rgb(29,29,41))] box-border caret-transparent h-full max-w-full w-full z-[3] overflow-hidden rounded-2xl md:rounded-3xl"
                : "bg-[linear-gradient(157deg,rgba(127,33,255,0.6),rgba(127,33,255,0)_41%,rgba(127,33,255,0)_71%,rgb(127,33,255))] box-border caret-transparent p-px rounded-2xl md:rounded-3xl"
            }
          >
            <div
              className={
                index === 1
                  ? "relative bg-neutral-950 bg-[linear-gradient(162deg,rgba(95,0,224,0.2)_8.41%,rgba(95,0,224,0)_47.02%,rgba(95,0,224,0)_81.37%,rgba(95,0,224,0.2)_100%),none] bg-size-[auto,auto] shadow-[rgba(255,255,255,0.09)_0px_8px_24px_0px_inset,rgba(23,11,38,0.1)_0px_16px_24px_0px] box-border caret-transparent h-full text-left z-20 border border-violet-600/60 bg-[position:0%,0%_0%,0%] m-0 pt-7 pb-5 px-5 rounded-2xl border-solid inset-[0%] md:m-0.5 md:pt-[72px] md:pb-8 md:px-8 md:rounded-3xl md:inset-auto"
                  : "relative bg-neutral-950 bg-[linear-gradient(162deg,rgba(95,0,224,0.2)_8%,rgba(95,0,224,0)_47%,rgba(95,0,224,0)_80%,rgba(95,0,224,0.2)_100%,rgb(10,10,10))] box-border caret-transparent text-left pt-7 pb-5 px-5 rounded-2xl md:pt-[72px] md:pb-8 md:px-8 md:rounded-3xl"
              }
            >
              <div className="box-border caret-transparent h-full md:h-auto">
                <div className="text-zinc-50 box-border caret-transparent">
                  <div className="box-border caret-transparent gap-x-2 flex flex-col gap-y-2">
                    <div className="text-[28px] font-bold box-border caret-transparent leading-[33.6px] min-h-[auto] min-w-[auto] font-redhatdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                      {pkg.price}
                    </div>
                    <div className="text-base box-border caret-transparent tracking-[0.36px] leading-6 min-h-[auto] min-w-[auto] md:text-lg md:leading-[27px]">
                      {pkg.priceSubtext}
                    </div>
                  </div>
                  <h3 className="text-lime-300 text-2xl font-bold box-border caret-transparent leading-[28.8px] capitalize mt-6 font-redhatdisplay_variablefont_wght md:text-[32px] md:leading-[38.4px]">
                    {pkg.title}
                  </h3>
                </div>
                <div className="bg-[linear-gradient(90deg,rgb(24,0,55),rgb(67,0,157)_50%,rgb(24,0,55))] box-border caret-transparent h-px w-full my-6"></div>
                <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4">
                  {pkg.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="text-zinc-50 items-start box-border caret-transparent gap-x-2 flex justify-start min-h-[auto] min-w-[auto] gap-y-2"
                    >
                      <div className="box-border caret-transparent shrink-0 min-h-[auto] min-w-[auto]">
                        <div className="box-border caret-transparent h-6 w-6">
                          <img
                            src="https://c.animaapp.com/mmfqa5b2QIeLaz/assets/icon-9.svg"
                            alt="Icon"
                            className="box-border caret-transparent inline align-baseline w-full"
                          />
                        </div>
                      </div>
                      <div className="text-base box-border caret-transparent tracking-[0.36px] leading-6 min-h-[auto] min-w-[auto] md:text-lg md:leading-[27px]">
                        {feature}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="box-border caret-transparent inline-block w-full z-30 mt-6 md:mt-[55px]">
                  <a
                    href={pkg.ctaUrl}
                    className="relative text-violet-600 items-center bg-violet-500 bg-[linear-gradient(rgb(89,45,181)_25%,rgb(125,64,255))] shadow-[rgba(255,255,255,0.72)_0px_1.6px_3px_0px_inset] box-border caret-transparent flex flex-col h-14 justify-center w-full z-[5] overflow-hidden rounded-lg md:bg-transparent"
                  >
                    <div
                      className={
                        pkg.buttonBackgroundClass ||
                        "absolute items-center bg-neutral-400 box-border caret-transparent flex h-full justify-center rotate-[2.23920295125699deg] w-full inset-[0%]"
                      }
                    >
                      <div className="absolute bg-[linear-gradient(90deg,rgba(255,255,255,0.79)_61%,rgb(255,255,255)_75%)] box-border caret-transparent blur-[6px] h-20 -translate-y-10 w-full left-2/4 right-[0%] top-2/4 bottom-[0%]"></div>
                    </div>
                    <div className="absolute bg-[linear-gradient(rgb(89,45,181)_25%,rgb(125,64,255))] box-border caret-transparent rounded-lg inset-[0%]"></div>
                    <div className="relative text-gray-200 box-border caret-transparent min-h-[auto] min-w-[auto] w-full md:w-auto">
                      <div className="relative items-center box-border caret-transparent gap-x-2 flex h-full justify-center gap-y-2 w-full z-[1]">
                        <div className="text-zinc-50 text-base font-bold box-border caret-transparent tracking-[0.32px] leading-[19.2px] min-h-[auto] min-w-[auto]">
                          {pkg.ctaText}
                        </div>
                        <img
                          src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67adba6a3ab018a0349e2bc2_CTA Arrow (2).svg"
                          alt=""
                          className="box-border caret-transparent h-7 max-w-7 min-h-[auto] min-w-[auto] object-contain w-full md:h-6 md:max-w-6"
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
              {pkg.isPopular && (
                <>
                  <div className="box-border caret-transparent before:accent-auto before:caret-transparent before:text-zinc-800 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-outfit_variablefont_wght after:accent-auto after:caret-transparent after:clear-both after:text-zinc-800 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-left after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-outfit_variablefont_wght"></div>
                  <div className="absolute items-center bg-lime-300 box-border caret-transparent gap-x-1 flex gap-y-1 px-[12.8px] py-3 rounded-b-lg right-6 -top-0.5">
                    <img
                      src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6739bdd37b0f4ddbd45c9c30_Frame (1).svg"
                      alt=""
                      className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto]"
                    />
                    <div className="text-neutral-950 text-base font-bold box-border caret-transparent tracking-[0.32px] leading-6 min-h-[auto] min-w-[auto]">
                      Popular
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
