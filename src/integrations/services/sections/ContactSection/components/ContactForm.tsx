import { ContactFormFields } from "@/integrations/services/sections/ContactSection/components/ContactFormFields";
import { ContactFormSubmit } from "@/integrations/services/sections/ContactSection/components/ContactFormSubmit";

export const ContactForm = () => {
  return (
    <div className="relative bg-neutral-950 box-border caret-transparent w-full mt-0 rounded-2xl md:mt-11 md:rounded-[32px]">
      <div className="relative items-center box-border caret-transparent gap-x-8 flex flex-col auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] h-full gap-y-8 z-0 overflow-hidden pt-[60px] pb-8 px-3 rounded-2xl md:[align-items:normal] md:grid md:flex-row md:grid-cols-[1fr_1fr] md:p-16 md:rounded-[32px]">
        <ContactFormFields />
        <div className="box-border caret-transparent basis-[0%] grow min-h-[auto] min-w-[auto]">
          <div className="box-border caret-transparent mb-0 md:mb-[15px]">
            <form
              name="wf-form-Contact-Form"
              aria-label="Contact Form"
              className="box-border caret-transparent"
            >
              <div className="box-border caret-transparent gap-x-6 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-6 md:gap-x-9 md:grid-rows-[auto_auto] md:gap-y-9">
                <div className="box-border caret-transparent gap-x-4 flex flex-col min-h-[auto] min-w-[auto] gap-y-4">
                  <label className="text-zinc-50 text-base font-bold box-border caret-transparent block leading-[19.2px] min-h-[auto] min-w-[auto] mb-3 md:text-xl md:leading-6 md:mb-0">
                    Full Name
                  </label>
                  <input
                    name="Full-Name"
                    placeholder="John Doe"
                    type="text"
                    className="text-zinc-50 text-[17px] bg-white/10 box-border caret-transparent block h-[38px] tracking-[0.18px] leading-[25.5px] max-w-full min-h-[50px] min-w-[auto] align-middle w-full border border-neutral-600 px-4 py-3 rounded-lg border-solid"
                  />
                </div>
                <div className="box-border caret-transparent gap-x-6 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] min-h-[auto] min-w-[auto] gap-y-6 md:gap-x-4 md:grid-cols-[1fr_1fr] md:gap-y-4">
                  <div className="box-border caret-transparent gap-x-4 flex flex-col min-h-[auto] min-w-[auto] gap-y-4">
                    <label className="text-zinc-50 text-base font-bold box-border caret-transparent block leading-[19.2px] min-h-[auto] min-w-[auto] mb-3 md:text-xl md:leading-6 md:mb-0">
                      Your Email
                    </label>
                    <input
                      name="Email"
                      placeholder="yourmail@gmail.com"
                      type="email"
                      className="text-zinc-50 text-[17px] bg-white/10 box-border caret-transparent block h-[38px] tracking-[0.18px] leading-[25.5px] max-w-full min-h-[50px] min-w-[auto] align-middle w-full border border-neutral-600 px-4 py-3 rounded-lg border-solid"
                    />
                    <input
                      name="work-email"
                      placeholder="Your email here"
                      type="text"
                      className="text-base bg-transparent bg-[url('https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/676d68deb3516c5b8d5ee90d_EnvelopeSimple.svg')] bg-no-repeat box-border caret-transparent hidden h-[38px] leading-[22.8571px] min-h-14 align-middle w-full border border-neutral-200 bg-[position:16px_52%] pl-12 pr-3 py-2 rounded-lg border-solid"
                    />
                  </div>
                  <div className="box-border caret-transparent gap-x-4 flex flex-col min-h-[auto] min-w-[auto] gap-y-4">
                    <label className="text-zinc-50 text-base font-bold box-border caret-transparent block leading-[19.2px] min-h-[auto] min-w-[auto] mb-3 md:text-xl md:leading-6 md:mb-0">
                      Whatsapp Number{" "}
                    </label>
                    <input
                      name="WhatsApp-Number"
                      placeholder="1 123 1234567"
                      type="tel"
                      className="text-zinc-50 text-[17px] bg-white/10 box-border caret-transparent block h-[38px] tracking-[0.18px] leading-[25.5px] max-w-full min-h-[50px] min-w-[auto] align-middle w-full border border-neutral-600 px-4 py-3 rounded-lg border-solid"
                    />
                  </div>
                </div>
                <div className="box-border caret-transparent gap-x-4 flex flex-col min-h-[auto] min-w-[auto] gap-y-4">
                  <label className="text-zinc-50 text-base font-bold box-border caret-transparent block leading-[19.2px] min-h-[auto] min-w-[auto] mb-3 md:text-xl md:leading-6 md:mb-0">
                    Project Budget
                  </label>
                  <div className="box-border caret-transparent gap-x-3 flex flex-wrap min-h-[auto] min-w-[auto] gap-y-3 md:gap-x-4 md:gap-y-4">
                    <label className="relative font-bold box-border caret-transparent block flex-wrap min-h-[auto] min-w-[auto] before:accent-auto before:caret-transparent before:text-zinc-800 before:table before:text-sm before:not-italic before:normal-nums before:font-bold before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-outfit_variablefont_wght after:accent-auto after:caret-transparent after:clear-both after:text-zinc-800 after:table after:text-sm after:not-italic after:normal-nums after:font-bold after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-outfit_variablefont_wght">
                      <input
                        type="radio"
                        name="Project-Budget"
                        value="Less than $5K"
                        className="bg-transparent box-border caret-transparent hidden float-left leading-[normal] z-[1] overflow-visible -ml-5 mt-[3px] p-0"
                      />
                      <span className="relative text-neutral-400 text-base font-normal items-center box-border caret-transparent inline-block justify-start tracking-[0.18px] leading-6 z-[2] border border-neutral-600 px-5 py-3 rounded-lg border-solid left-[0%] inset-y-[0%] md:text-[17px] md:leading-[25.5px]">
                        Less than $5K
                      </span>
                    </label>
                    <label className="relative font-bold box-border caret-transparent block flex-wrap min-h-[auto] min-w-[auto] before:accent-auto before:caret-transparent before:text-zinc-800 before:table before:text-sm before:not-italic before:normal-nums before:font-bold before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-outfit_variablefont_wght after:accent-auto after:caret-transparent after:clear-both after:text-zinc-800 after:table after:text-sm after:not-italic after:normal-nums after:font-bold after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-outfit_variablefont_wght">
                      <input
                        type="radio"
                        name="Project-Budget"
                        value="$5K - $10K"
                        className="bg-transparent box-border caret-transparent hidden float-left leading-[normal] z-[1] overflow-visible -ml-5 mt-[3px] p-0"
                      />
                      <span className="relative text-neutral-400 text-base font-normal items-center box-border caret-transparent inline-block justify-start tracking-[0.18px] leading-6 z-[2] border border-neutral-600 px-5 py-3 rounded-lg border-solid left-[0%] inset-y-[0%] md:text-[17px] md:leading-[25.5px]">
                        $5K - $10K
                      </span>
                    </label>
                    <label className="relative font-bold box-border caret-transparent block flex-wrap min-h-[auto] min-w-[auto] before:accent-auto before:caret-transparent before:text-zinc-800 before:table before:text-sm before:not-italic before:normal-nums before:font-bold before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-outfit_variablefont_wght after:accent-auto after:caret-transparent after:clear-both after:text-zinc-800 after:table after:text-sm after:not-italic after:normal-nums after:font-bold after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-outfit_variablefont_wght">
                      <input
                        type="radio"
                        name="Project-Budget"
                        value="$10K - $20K"
                        className="bg-transparent box-border caret-transparent hidden float-left leading-[normal] z-[1] overflow-visible -ml-5 mt-[3px] p-0"
                      />
                      <span className="relative text-neutral-400 text-base font-normal items-center box-border caret-transparent inline-block justify-start tracking-[0.18px] leading-6 z-[2] border border-neutral-600 px-5 py-3 rounded-lg border-solid left-[0%] inset-y-[0%] md:text-[17px] md:leading-[25.5px]">
                        $10K - $20K
                      </span>
                    </label>
                    <label className="relative font-bold box-border caret-transparent block flex-wrap min-h-[auto] min-w-[auto] before:accent-auto before:caret-transparent before:text-zinc-800 before:table before:text-sm before:not-italic before:normal-nums before:font-bold before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-outfit_variablefont_wght after:accent-auto after:caret-transparent after:clear-both after:text-zinc-800 after:table after:text-sm after:not-italic after:normal-nums after:font-bold after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-outfit_variablefont_wght">
                      <input
                        type="radio"
                        name="Project-Budget"
                        value="$20K - $50K"
                        className="bg-transparent box-border caret-transparent hidden float-left leading-[normal] z-[1] overflow-visible -ml-5 mt-[3px] p-0"
                      />
                      <span className="relative text-neutral-400 text-base font-normal items-center box-border caret-transparent inline-block justify-start tracking-[0.18px] leading-6 z-[2] border border-neutral-600 px-5 py-3 rounded-lg border-solid left-[0%] inset-y-[0%] md:text-[17px] md:leading-[25.5px]">
                        $20K - $50K
                      </span>
                    </label>
                    <label className="relative font-bold box-border caret-transparent block flex-wrap min-h-[auto] min-w-[auto] before:accent-auto before:caret-transparent before:text-zinc-800 before:table before:text-sm before:not-italic before:normal-nums before:font-bold before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-outfit_variablefont_wght after:accent-auto after:caret-transparent after:clear-both after:text-zinc-800 after:table after:text-sm after:not-italic after:normal-nums after:font-bold after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-outfit_variablefont_wght">
                      <input
                        type="radio"
                        name="Project-Budget"
                        value="More than $50K"
                        className="bg-transparent box-border caret-transparent hidden float-left leading-[normal] z-[1] overflow-visible -ml-5 mt-[3px] p-0"
                      />
                      <span className="relative text-neutral-400 text-base font-normal items-center box-border caret-transparent inline-block justify-start tracking-[0.18px] leading-6 z-[2] border border-neutral-600 px-5 py-3 rounded-lg border-solid left-[0%] inset-y-[0%] md:text-[17px] md:leading-[25.5px]">
                        More than $50K
                      </span>
                    </label>
                    <div className="italic items-center bg-gray-200 box-border caret-transparent hidden justify-center min-h-20 mb-2.5 before:accent-auto before:caret-transparent before:text-zinc-800 before:table before:text-sm before:italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-outfit_variablefont_wght after:accent-auto after:caret-transparent after:clear-both after:text-zinc-800 after:table after:text-sm after:italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-outfit_variablefont_wght"></div>
                  </div>
                </div>
                <div className="box-border caret-transparent gap-x-4 flex flex-col min-h-[auto] min-w-[auto] gap-y-4">
                  <label className="text-zinc-50 text-base font-bold box-border caret-transparent block leading-[19.2px] min-h-[auto] min-w-[auto] mb-3 md:text-xl md:leading-6 md:mb-0">
                    Project Details
                  </label>
                  <textarea
                    name="Project-details"
                    placeholder="I want to redesign my website.."
                    className="text-zinc-50 text-sm bg-white/10 box-border caret-transparent block tracking-[0.18px] leading-[21px] min-h-[105px] min-w-[auto] resize-none align-middle w-full border-neutral-600 px-4 py-3 rounded-lg md:text-base md:leading-6"
                  ></textarea>
                </div>
                <ContactFormSubmit />
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
  );
};
