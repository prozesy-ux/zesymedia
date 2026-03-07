export type TestimonialData = {
      image: string;
      clientImage: string;
      clientName: string;
      clientRole: string;
      quote: string;
      logo: string;
    };

    export const TestimonialCard = ({ data }: { data: TestimonialData }) => {
      return (
        <div role="tabpanel" className="relative box-border caret-transparent w-full">
          <div className="box-border caret-transparent">
            <div role="list" className="box-border caret-transparent">
              <div
                role="listitem"
                className="relative items-center box-border caret-transparent gap-x-0 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] h-full justify-end gap-y-0 md:grid-cols-[1fr_0.75fr]"
              >
                <img
                  src={data.image}
                  alt=""
                  className="aspect-[auto_715_/_537] box-border caret-transparent h-full max-w-full object-cover w-full rounded-l-lg"
                />
                <div className="relative box-border caret-transparent flex h-auto z-[1] p-4 md:h-full md:p-10">
                  <img
                    src={data.image}
                    alt=""
                    className="absolute aspect-[auto_537_/_537] shadow-[rgb(255,255,255)_0px_2px_20px_0px] box-border caret-transparent blur-[20px] h-full max-w-full object-cover w-full z-[-1] inset-[0%]"
                  />
                  <div className="absolute bg-[linear-gradient(rgb(255,255,255),rgb(255,255,255))] box-border caret-transparent blur-[33px] h-[100px] left-[-10%] mix-blend-soft-light top-[-50px] w-[120%] z-[-1] bottom-[0%] md:h-[120%] md:top-[-10%] md:w-40 md:-left-20"></div>
                  <div className="items-start bg-zinc-50 box-border caret-transparent gap-x-4 flex flex-col justify-between gap-y-4 p-4 rounded-lg md:gap-x-8 md:gap-y-8 md:p-10 w-full">
                    <div className="items-center box-border caret-transparent gap-x-2 flex justify-start gap-y-2">
                      <img
                        src={data.clientImage}
                        alt={data.clientName}
                        className="aspect-square box-border caret-transparent max-w-full object-cover w-[52px] border border-stone-500/20 rounded-lg border-solid"
                      />
                      <div className="box-border caret-transparent">
                        <p className="text-neutral-950 text-base font-bold box-border caret-transparent tracking-[0.36px] leading-[19.2px] font-redhatdisplay_variablefont_wght md:text-xl md:leading-6">
                          {data.clientName}
                        </p>
                        <p className="text-neutral-600 text-sm box-border caret-transparent tracking-[0.36px] leading-[21px] md:text-base md:leading-6">
                          {data.clientRole}
                        </p>
                      </div>
                    </div>
                    <p className="text-neutral-950 text-base box-border caret-transparent tracking-[0.36px] leading-6 md:text-lg md:leading-[27px]">
                      {data.quote}
                    </p>
                    <div className="items-start box-border caret-transparent gap-x-8 flex flex-col justify-between gap-y-8 w-full md:items-center md:flex-row">
                      <img
                        src={data.logo}
                        alt="Company Logo"
                        className="items-start box-border caret-transparent h-14 justify-center max-w-full object-contain object-[0%_50%] -my-4 md:h-20"
                      />
                      <a
                        href="https://www.designmonks.co/contact"
                        className="relative text-violet-600 items-center box-border caret-transparent flex flex-col h-12 justify-center max-w-full text-left w-full z-[5] border border-violet-600 overflow-hidden rounded-lg border-solid md:max-w-[177px] md:w-[152px] hover:bg-violet-50 transition-colors"
                      >
                        <div className="relative items-center box-border caret-transparent gap-x-2 flex h-full justify-center gap-y-2 w-full z-[1]">
                          <div className="text-base font-bold box-border caret-transparent shrink-0 tracking-[0.32px] leading-[19.2px]">
                            Book a call
                          </div>
                          <img
                            src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/681e1fb873e6b12294196342_CTA Arrow.svg"
                            alt=""
                            className="box-border caret-transparent h-7 max-w-7 object-contain w-full md:h-6 md:max-w-6"
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };
