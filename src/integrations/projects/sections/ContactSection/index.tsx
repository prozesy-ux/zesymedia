import { ConsultantInfo } from "@/integrations/projects/sections/ContactSection/components/ConsultantInfo";
import { ContactForm } from "@/integrations/projects/sections/ContactSection/components/ContactForm";

export const ContactSection = () => {
  return (
    <section className="box-border caret-transparent">
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent pt-8 pb-[60px] px-5 md:pt-[1.6px] md:pb-[100px] md:px-[94px]">
          <div className="box-border caret-transparent max-w-[1252px] w-full z-[1] mx-auto">
            <div className="relative bg-neutral-950 box-border caret-transparent w-full mt-0 rounded-2xl md:mt-11 md:rounded-[32px]">
              <div className="relative items-center box-border caret-transparent gap-x-8 flex flex-col auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] h-full gap-y-8 z-0 overflow-hidden pt-[60px] pb-8 px-3 rounded-2xl md:[align-items:normal] md:grid md:flex-row md:grid-cols-[1fr_1fr] md:p-16 md:rounded-[32px]">
                <div className="relative box-border caret-transparent h-auto max-w-full min-h-[auto] min-w-[auto] w-full z-[99] md:static md:h-full md:max-w-none md:z-auto">
                  <div className="box-border caret-transparent gap-x-5 flex flex-col gap-y-5 md:gap-x-10 md:gap-y-10">
                    <div className="box-border caret-transparent gap-x-2 flex flex-col min-h-[auto] min-w-[auto] gap-y-2 md:gap-x-4 md:gap-y-4">
                      <div className="box-border caret-transparent flex min-h-[auto] min-w-[auto]">
                        <div className="text-green-500 box-border caret-transparent min-h-[auto] min-w-[auto] border border-green-800 px-3 py-1 rounded-3xl border-solid">
                          <div className="text-sm box-border caret-transparent leading-[21px] md:text-base md:leading-6">
                            Claim a $799 Consultation, on Us!
                          </div>
                        </div>
                      </div>
                      <h2 className="text-zinc-50 text-[28px] font-bold box-border caret-transparent leading-[33.6px] min-h-[auto] min-w-[auto] font-redhatdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                        Enhance Your Brand Potential{" "}
                        <em className="text-[28px] italic box-border caret-transparent leading-[33.6px] capitalize font-playfairdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                          At No Cost!
                        </em>
                      </h2>
                      <div className="box-border caret-transparent gap-x-2 flex flex-col min-h-[auto] min-w-[auto] gap-y-2">
                        <div className="items-start box-border caret-transparent gap-x-2 flex justify-start min-h-[auto] min-w-[auto] gap-y-2">
                          <img
                            src="https://c.animaapp.com/mmfuclz4syuQ81/assets/icon-11.svg"
                            alt="Icon"
                            className="text-zinc-50 box-border caret-transparent shrink-0 align-baseline w-5 mt-[3px] md:w-6 md:mt-0.5"
                          />
                          <p className="text-neutral-300 text-base box-border caret-transparent tracking-[0.36px] leading-6 min-h-[auto] min-w-[auto] md:text-lg md:leading-[27px]">
                            Expect a response from us within 24 hours
                          </p>
                        </div>
                        <div className="items-start box-border caret-transparent gap-x-2 flex justify-start min-h-[auto] min-w-[auto] gap-y-2">
                          <img
                            src="https://c.animaapp.com/mmfuclz4syuQ81/assets/icon-11.svg"
                            alt="Icon"
                            className="text-zinc-50 box-border caret-transparent shrink-0 align-baseline w-5 mt-[3px] md:w-6 md:mt-0.5"
                          />
                          <p className="text-neutral-300 text-base box-border caret-transparent tracking-[0.36px] leading-6 min-h-[auto] min-w-[auto] md:text-lg md:leading-[27px]">
                            We’re happy to sign an NDA upon request.
                          </p>
                        </div>
                        <div className="items-start box-border caret-transparent gap-x-2 flex justify-start min-h-[auto] min-w-[auto] gap-y-2">
                          <img
                            src="https://c.animaapp.com/mmfuclz4syuQ81/assets/icon-11.svg"
                            alt="Icon"
                            className="text-zinc-50 box-border caret-transparent shrink-0 align-baseline w-5 mt-[3px] md:w-6 md:mt-0.5"
                          />
                          <p className="text-neutral-300 text-base box-border caret-transparent tracking-[0.36px] leading-6 min-h-[auto] min-w-[auto] md:text-lg md:leading-[27px]">
                            Get access to a team of dedicated product
                            specialists.
                          </p>
                        </div>
                      </div>
                    </div>
                    <ConsultantInfo />
                  </div>
                </div>
                <div className="box-border caret-transparent basis-[0%] grow min-h-[auto] min-w-[auto]">
                  <div className="box-border caret-transparent mb-0 md:mb-[15px]">
                    <ContactForm />
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
                  <div className="box-border caret-transparent before:accent-auto before:caret-transparent before:text-zinc-800 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-outfit_variablefont_wght after:accent-auto after:caret-transparent after:clear-both after:text-zinc-800 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-outfit_variablefont_wght"></div>
                </div>
                <img
                  alt=""
                  src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/68ba5e44ccb1468ce5b97221_96a931f11af1a2f6b37e251396d130df_6894f274513a65bb1abe220f_Gradient (1)-p-130x130q80.avif"
                  className="absolute box-border caret-transparent max-w-full pointer-events-none z-[-1] left-0 right-[0%] top-[0%] md:left-auto"
                />
                <img
                  src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/68ba5e44dc9d7cd13e738839_92c4e6700f092875cffdf04c77a01999_6894f29b7c0ac32bcac50b5f_Gradient (2)-p-130x130q80.avif"
                  alt=""
                  className="absolute box-border caret-transparent max-w-[190px] pointer-events-none z-[-1] left-[0%] bottom-[0%] md:max-w-full"
                />
              </div>
            </div>
            <div className="relative bg-white shadow-[rgba(15,23,42,0.1)_0px_20px_48px_-12px] box-border caret-transparent border border-neutral-200 overflow-hidden mt-4 px-8 py-3 rounded-[70px] border-solid md:py-4">
              <div className="box-border caret-transparent gap-x-[5px] flex gap-y-[5px]">
                <p className="text-neutral-950 text-lg box-border caret-transparent shrink-0 tracking-[0.48px] leading-[27px] min-h-[auto] min-w-[auto] capitalize text-nowrap md:text-2xl md:leading-9">
                  Why risk it with the{" "}
                  <span className="text-lg italic font-semibold box-border caret-transparent leading-[27px] text-nowrap font-playfairdisplay_variablefont_wght md:text-2xl md:leading-9">
                    wrong partner
                  </span>
                  ? Get 100% value and guarantee. Don’t miss out - Secure your{" "}
                  <span className="text-lg italic font-semibold box-border caret-transparent leading-[27px] text-nowrap font-playfairdisplay_variablefont_wght md:text-2xl md:leading-9">
                    brand’s future
                  </span>
                  today.
                </p>
                <p className="text-neutral-950 text-lg box-border caret-transparent shrink-0 tracking-[0.48px] leading-[27px] min-h-[auto] min-w-[auto] capitalize text-nowrap md:text-2xl md:leading-9">
                  Why risk it with the{" "}
                  <span className="text-lg italic font-semibold box-border caret-transparent leading-[27px] text-nowrap font-playfairdisplay_variablefont_wght md:text-2xl md:leading-9">
                    wrong partner
                  </span>
                  ? Get 100% value and guarantee. Don’t miss out - Secure your{" "}
                  <span className="text-lg italic font-semibold box-border caret-transparent leading-[27px] text-nowrap font-playfairdisplay_variablefont_wght md:text-2xl md:leading-9">
                    brand’s future
                  </span>
                  today.
                </p>
              </div>
              <div className="box-border caret-transparent before:accent-auto before:caret-transparent before:text-zinc-800 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-outfit_variablefont_wght after:accent-auto after:caret-transparent after:clear-both after:text-zinc-800 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-outfit_variablefont_wght"></div>
              <div className="absolute bg-[linear-gradient(90deg,rgb(216,255,132),rgba(251,250,246,0)_50%)] box-border caret-transparent h-full max-w-[480px] w-full left-[0%] inset-y-[0%] md:bg-[linear-gradient(90deg,rgb(216,255,132)_42%,rgba(251,250,246,0))]"></div>
              <div className="absolute bg-[linear-gradient(270deg,rgb(216,255,132),rgba(251,250,246,0)_50%)] box-border caret-transparent h-full max-w-[480px] w-full right-[0%] inset-y-[0%] md:bg-[linear-gradient(270deg,rgb(216,255,132)_18%,rgba(251,250,246,0))]"></div>
              <div className="absolute items-center box-border caret-transparent hidden justify-start max-w-28 mr-auto left-[18px] inset-y-0 md:flex md:max-w-[185px] md:mr-0">
                <img
                  src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67adb7fc40ac25c9c66f4018_aa9ab833b3c7ac4ca1390641d6680d27_CTA Image.avif"
                  alt=""
                  className="box-border caret-transparent inline-block max-w-full min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
