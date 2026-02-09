import { PricingCard } from "@/sections/PricingSection/components/PricingCard";
import { BonusSection } from "@/sections/PricingSection/components/BonusSection";

export const PricingSection = () => {
  return (
    <div className="relative bg-neutral-950 box-border caret-transparent mt-[60px] rounded-[20px] md:mt-[100px] md:rounded-[32px]">
      <div className="relative box-border caret-transparent overflow-clip rounded-[20px] md:rounded-[32px]">
        <div className="box-border caret-transparent">
          <div className="bg-neutral-950 box-border caret-transparent">
            <div className="relative box-border caret-transparent px-5 py-[60px] md:px-[94px] md:py-[100px]">
              <div className="box-border caret-transparent max-w-[1252px] w-full z-[1] mx-auto">
                <div className="box-border caret-transparent">
                  <div className="box-border caret-transparent gap-x-8 flex flex-col gap-y-8 md:gap-x-14 md:gap-y-14">
                    <div className="box-border caret-transparent gap-x-8 flex flex-col gap-y-8 md:gap-x-14 md:gap-y-14">
                      <div className="items-center box-border caret-transparent gap-x-4 flex flex-col justify-start gap-y-4 text-center">
                        <div className="box-border caret-transparent flex">
                          <div className="text-green-500 box-border caret-transparent border border-green-800 px-3 py-1 rounded-3xl border-solid">
                            <div className="text-sm box-border caret-transparent leading-[21px] md:text-base md:leading-6">
                              Pricing plans
                            </div>
                          </div>
                        </div>
                        <div className="text-zinc-50 box-border caret-transparent">
                          <h2 className="text-[28px] font-bold box-border caret-transparent leading-[33.6px] font-redhatdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                            <span className="text-[28px] italic box-border caret-transparent leading-[33.6px] capitalize font-playfairdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                              Unbeatable{" "}
                            </span>
                            Value
                            <br className="text-[28px] box-border caret-transparent leading-[33.6px] md:text-5xl md:leading-[57.6px]" />
                            Unmatched{" "}
                            <span className="text-[28px] italic box-border caret-transparent leading-[33.6px] capitalize font-playfairdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                              Quality
                            </span>
                          </h2>
                        </div>
                      </div>
                      <div className="items-center box-border caret-transparent gap-x-4 flex flex-col auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] h-full gap-y-4 mt-9 md:gap-x-8 md:flex-row md:grid-cols-[1fr_1fr_1fr] md:h-auto md:gap-y-8 md:mt-14">
                        <PricingCard
                          price="$500"
                          subtitle="Perfect for small businesses"
                          title="Starter Plan"
                          features={[
                            {
                              iconUrl:
                                "https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-18.svg",
                              text: "Ad account setup & optimization",
                            },
                            {
                              iconUrl:
                                "https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-18.svg",
                              text: "Up to 3 ad campaigns",
                            },
                            {
                              iconUrl:
                                "https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-18.svg",
                              text: "Basic audience targeting",
                            },
                            {
                              iconUrl:
                                "https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-18.svg",
                              text: "Monthly performance report",
                            },
                          ]}
                          ctaUrl="https://www.designmonks.co/pricing#meta-ads/starter"
                          ctaText="Get Started"
                          ctaArrowUrl="https://c.animaapp.com/mkiynesyxwO7zZ/assets/67adba6a3ab018a0349e2bc2_CTA_Arrow_(2).svg"
                          ctaStarUrl="https://c.animaapp.com/mkiynesyxwO7zZ/assets/672a7a8e3a6aba070d15d4c0_Star_6.avif"
                          containerVariant="box-border caret-transparent h-full w-full"
                          innerContainerVariant="bg-[linear-gradient(157deg,rgba(127,33,255,0.6),rgba(127,33,255,0)_41%,rgba(127,33,255,0)_71%,rgb(127,33,255))] box-border caret-transparent p-px rounded-2xl md:rounded-3xl"
                          buttonVariant="rotate-[-1.9835975136645745deg]"
                          showDecorations={false}
                        />
                        <PricingCard
                          price="$1,200"
                          subtitle="For growing businesses"
                          title="Professional Plan"
                          features={[
                            {
                              iconUrl:
                                "https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-18.svg",
                              text: "Advanced campaign strategy",
                            },
                            {
                              iconUrl:
                                "https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-18.svg",
                              text: "Up to 10 ad campaigns",
                            },
                            {
                              iconUrl:
                                "https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-18.svg",
                              text: "A/B testing & optimization",
                            },
                            {
                              iconUrl:
                                "https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-18.svg",
                              text: "Custom audience creation",
                            },
                            {
                              iconUrl:
                                "https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-18.svg",
                              text: "Bi-weekly performance reports",
                            },
                            {
                              iconUrl:
                                "https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-18.svg",
                              text: "Dedicated account manager",
                            },
                          ]}
                          ctaUrl="https://www.designmonks.co/pricing#meta-ads/professional"
                          ctaText="Get Started"
                          ctaArrowUrl="https://c.animaapp.com/mkiynesyxwO7zZ/assets/67adba6a3ab018a0349e2bc2_CTA_Arrow_(2).svg"
                          ctaStarUrl="https://c.animaapp.com/mkiynesyxwO7zZ/assets/672a7a8e3a6aba070d15d4c0_Star_6.avif"
                          containerVariant="box-border caret-transparent h-full w-full overflow-hidden rounded-2xl md:overflow-visible md:rounded-none"
                          innerContainerVariant="relative bg-[linear-gradient(234deg,rgba(235,248,252,0.56),rgb(127,184,239)_30%,rgb(81,66,241)_58%,rgb(29,29,41))] box-border caret-transparent h-full max-w-full w-full z-[3] overflow-hidden rounded-2xl md:rounded-3xl p-[1.5px]"
                          buttonVariant="rotate-[39.17520765419399deg]"
                          showDecorations={true}
                          decorationEllipseUrl="https://c.animaapp.com/mkiynesyxwO7zZ/assets/6739c28667cf85fd63abe210_Ellipse_8.svg"
                        />
                        <PricingCard
                          price="$2,500+"
                          subtitle="For enterprise & scale"
                          title="Enterprise Plan"
                          features={[
                            {
                              iconUrl:
                                "https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-18.svg",
                              text: "Unlimited ad campaigns",
                            },
                            {
                              iconUrl:
                                "https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-18.svg",
                              text: "Full-funnel strategy",
                            },
                            {
                              iconUrl:
                                "https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-18.svg",
                              text: "Advanced analytics & insights",
                            },
                            {
                              iconUrl:
                                "https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-18.svg",
                              text: "Priority support 24/7",
                            },
                          ]}
                          ctaUrl="https://www.designmonks.co/pricing#meta-ads/enterprise"
                          ctaText="Get Started"
                          ctaArrowUrl="https://c.animaapp.com/mkiynesyxwO7zZ/assets/67adba6a3ab018a0349e2bc2_CTA_Arrow_(2).svg"
                          ctaStarUrl="https://c.animaapp.com/mkiynesyxwO7zZ/assets/672a7a8e3a6aba070d15d4c0_Star_6.avif"
                          containerVariant="box-border caret-transparent h-full w-full"
                          innerContainerVariant="bg-[linear-gradient(157deg,rgba(127,33,255,0.6),rgba(127,33,255,0)_41%,rgba(127,33,255,0)_71%,rgb(127,33,255))] box-border caret-transparent p-px rounded-2xl md:rounded-3xl"
                          buttonVariant="rotate-[25.502411148859533deg]"
                          showDecorations={false}
                        />
                      </div>
                    </div>
                    <BonusSection />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[-220px] box-border caret-transparent hidden pointer-events-none right-0 md:block">
                <img
                  src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/680db6f4d3c0ca2155a5e42a_dab5b3b75db9828aff43984dd8f15ca5_19.avif"
                  alt=""
                  className="box-border caret-transparent inline-block max-w-full"
                />
              </div>
            </div>
            <div className="box-border caret-transparent py-[60px] md:py-[100px]">
              <div className="box-border caret-transparent max-w-[1252px] w-full z-[1] mx-auto">
                <div className="box-border caret-transparent gap-x-10 flex flex-col gap-y-10">
                  <div className="items-center box-border caret-transparent gap-x-4 flex flex-col justify-start gap-y-4 text-center">
                    <div className="box-border caret-transparent flex">
                      <div className="text-green-500 box-border caret-transparent border border-green-800 px-3 py-1 rounded-3xl border-solid">
                        <div className="text-sm box-border caret-transparent leading-[21px] md:text-base md:leading-6">
                          Why Choose Us
                        </div>
                      </div>
                    </div>
                    <div className="text-zinc-50 box-border caret-transparent">
                      <h2 className="text-[28px] font-bold box-border caret-transparent leading-[33.6px] font-redhatdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                        <span className="text-[28px] italic box-border caret-transparent leading-[33.6px] capitalize font-playfairdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                          Design Monks’s
                        </span>
                        Alternative?
                        <br className="text-[28px] box-border caret-transparent leading-[33.6px] md:text-5xl md:leading-[57.6px]" />
                        <span className="text-[28px] italic box-border caret-transparent leading-[33.6px] capitalize font-playfairdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                          Think
                        </span>
                        One More Time!
                      </h2>
                    </div>
                  </div>
                  <div className="box-border caret-transparent gap-x-2.5 flex flex-col gap-y-2.5 overflow-auto md:gap-x-10 md:gap-y-10 md:overflow-visible">
                    <div className="items-center box-border caret-transparent gap-x-0 grid auto-cols-[1fr] grid-cols-[1.75fr_1fr_1fr_1fr_1fr_1fr] grid-rows-[auto] min-w-[884px] gap-y-0 w-full mx-5 px-10 md:grid-cols-[3.5fr_1fr_1fr_1fr_1fr_1fr] md:min-w-[1249px] md:mx-0">
                      <div className="text-zinc-50 box-border caret-transparent">
                        <div className="text-base font-bold box-border caret-transparent leading-[19.2px] font-redhatdisplay_variablefont_wght md:text-xl md:leading-6">
                          Platform
                        </div>
                      </div>
                      <div className="text-zinc-50 box-border caret-transparent text-center">
                        <div className="text-base font-bold box-border caret-transparent leading-[19.2px] font-redhatdisplay_variablefont_wght md:text-xl md:leading-6">
                          Speed
                        </div>
                      </div>
                      <div className="text-zinc-50 box-border caret-transparent text-center">
                        <div className="text-base font-bold box-border caret-transparent leading-[19.2px] font-redhatdisplay_variablefont_wght md:text-xl md:leading-6">
                          Flexibility
                        </div>
                      </div>
                      <div className="text-zinc-50 box-border caret-transparent text-center">
                        <div className="text-base font-bold box-border caret-transparent leading-[19.2px] font-redhatdisplay_variablefont_wght md:text-xl md:leading-6">
                          Quality
                        </div>
                      </div>
                      <div className="text-zinc-50 box-border caret-transparent text-center">
                        <div className="text-base font-bold box-border caret-transparent leading-[19.2px] font-redhatdisplay_variablefont_wght md:text-xl md:leading-6">
                          Scalability
                        </div>
                      </div>
                      <div className="text-zinc-50 box-border caret-transparent text-center">
                        <div className="text-base font-bold box-border caret-transparent leading-[19.2px] font-redhatdisplay_variablefont_wght md:text-xl md:leading-6">
                          Affordability
                        </div>
                      </div>
                    </div>
                    <div className="box-border caret-transparent flex flex-col gap-y-8 mx-5 md:gap-y-14 md:mx-0">
                      <div className="relative bg-[linear-gradient(183deg,rgb(235,248,252),rgb(127,184,239)_30%,rgb(81,66,241)_62%,rgb(29,29,41))] box-border caret-transparent min-w-[884px] w-full overflow-hidden p-[1.5px] rounded-[32px] md:min-w-[1252px]">
                        <div className="items-center bg-neutral-950 bg-[linear-gradient(202deg,rgba(87,27,210,0.2),rgba(10,10,10,0.2))] shadow-[rgba(23,11,38,0.1)_0px_16px_24px_0px,rgba(255,255,255,0.09)_0px_8px_24px_0px_inset] box-border caret-transparent gap-x-0 grid auto-cols-[1fr] grid-cols-[1.75fr_1fr_1fr_1fr_1fr_1fr] grid-rows-[auto] min-w-[884px] gap-y-0 w-full px-10 py-[30px] rounded-[32px] md:grid-cols-[3.5fr_1fr_1fr_1fr_1fr_1fr] md:min-w-[1249px] md:py-6">
                          <div className="items-center box-border caret-transparent gap-x-6 flex col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1] justify-start md:col-end-auto md:col-start-auto md:row-end-auto md:row-start-auto">
                            <div className="items-center bg-violet-600 box-border caret-transparent hidden justify-center max-h-[85px] max-w-[85px] min-h-[85px] min-w-[85px] rounded-[10px] md:flex">
                              <img
                                src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-19.svg"
                                alt="Icon"
                                className="text-white box-border caret-transparent inline w-8 md:block"
                              />
                            </div>
                            <div className="text-zinc-50 box-border caret-transparent flex flex-col gap-y-2">
                              <h3 className="text-xl font-bold box-border caret-transparent leading-6 font-redhatdisplay_variablefont_wght md:text-2xl md:leading-[28.8px]">
                                Design Monks
                              </h3>
                              <div className="box-border caret-transparent hidden min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]">
                                <div className="text-neutral-300 box-border caret-transparent">
                                  <div className="text-base box-border caret-transparent tracking-[0.36px] leading-6 md:text-lg md:leading-[27px]">
                                    Expert-driven &amp; committed to higher
                                    quality. Get effective result &amp; full
                                    support without hiring in-house employees
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="items-center box-border caret-transparent flex justify-center">
                            <div className="text-zinc-50 box-border caret-transparent flex w-6 md:w-10">
                              <img
                                src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-20.svg"
                                alt="Icon"
                                className="box-border caret-transparent w-full"
                              />
                            </div>
                          </div>
                          <div className="items-center box-border caret-transparent flex justify-center">
                            <div className="text-zinc-50 box-border caret-transparent flex w-6 md:w-10">
                              <img
                                src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-20.svg"
                                alt="Icon"
                                className="box-border caret-transparent w-full"
                              />
                            </div>
                          </div>
                          <div className="items-center box-border caret-transparent flex justify-center">
                            <div className="text-zinc-50 box-border caret-transparent flex w-6 md:w-10">
                              <img
                                src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-20.svg"
                                alt="Icon"
                                className="box-border caret-transparent w-full"
                              />
                            </div>
                          </div>
                          <div className="items-center box-border caret-transparent flex justify-center">
                            <div className="text-zinc-50 box-border caret-transparent flex w-6 md:w-10">
                              <img
                                src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-20.svg"
                                alt="Icon"
                                className="box-border caret-transparent w-full"
                              />
                            </div>
                          </div>
                          <div className="items-center box-border caret-transparent flex justify-center">
                            <div className="text-zinc-50 box-border caret-transparent flex w-6 md:w-10">
                              <img
                                src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-20.svg"
                                alt="Icon"
                                className="box-border caret-transparent w-full"
                              />
                            </div>
                          </div>
                        </div>
                        <img
                          src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/681244ac644e26ebc70402b7_Ellipse_11.avif"
                          alt=""
                          className="absolute box-border caret-transparent max-w-full right-[0%] top-[0%]"
                        />
                        <img
                          src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/68124543eaad0129fcf9956e_Ellipse_13.avif"
                          alt=""
                          className="absolute box-border caret-transparent max-w-full left-[0%] bottom-[0%]"
                        />
                      </div>
                      <div className="items-center border-b-neutral-600/50 border-l-zinc-800 border-r-zinc-800 border-t-zinc-800 box-border caret-transparent gap-x-0 grid auto-cols-[1fr] grid-cols-[1.75fr_1fr_1fr_1fr_1fr_1fr] grid-rows-[auto] min-w-[884px] gap-y-0 w-full pb-6 px-10 border-b md:grid-cols-[3.5fr_1fr_1fr_1fr_1fr_1fr] md:min-w-[1249px]">
                        <div className="items-center box-border caret-transparent gap-x-6 flex col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1] justify-start md:col-end-auto md:col-start-auto md:row-end-auto md:row-start-auto">
                          <div className="items-center bg-blue-600/30 box-border caret-transparent hidden justify-center max-h-[85px] max-w-[85px] min-h-[85px] min-w-[85px] rounded-[10px] md:flex">
                            <img
                              src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-21.svg"
                              alt="Icon"
                              className="text-white box-border caret-transparent inline w-8 md:block"
                            />
                          </div>
                          <div className="text-zinc-50 box-border caret-transparent flex flex-col gap-y-2">
                            <h3 className="text-xl font-bold box-border caret-transparent leading-6 font-redhatdisplay_variablefont_wght md:text-2xl md:leading-[28.8px]">
                              In House Team
                            </h3>
                            <div className="box-border caret-transparent hidden min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]">
                              <div className="box-border caret-transparent hidden md:block">
                                <div className="text-neutral-300 box-border caret-transparent">
                                  <div className="text-base box-border caret-transparent tracking-[0.36px] leading-6 md:text-lg md:leading-[27px]">
                                    A full-time designer may ensure brand
                                    consistency, but there’s a risk of limited
                                    expertise even though you pay regularly
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center">
                          <img
                            src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-22.svg"
                            alt="Icon"
                            className="text-red-500 box-border caret-transparent w-6 md:w-10"
                          />
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center">
                          <img
                            src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-22.svg"
                            alt="Icon"
                            className="text-red-500 box-border caret-transparent w-6 md:w-10"
                          />
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center">
                          <img
                            src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-22.svg"
                            alt="Icon"
                            className="text-red-500 box-border caret-transparent w-6 md:w-10"
                          />
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center">
                          <div className="text-zinc-50 box-border caret-transparent flex w-6 md:w-10">
                            <img
                              src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-20.svg"
                              alt="Icon"
                              className="box-border caret-transparent w-full"
                            />
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center">
                          <img
                            src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-22.svg"
                            alt="Icon"
                            className="text-red-500 box-border caret-transparent w-6 md:w-10"
                          />
                        </div>
                      </div>
                      <div className="items-center border-b-neutral-600/50 border-l-zinc-800 border-r-zinc-800 border-t-zinc-800 box-border caret-transparent gap-x-0 grid auto-cols-[1fr] grid-cols-[1.75fr_1fr_1fr_1fr_1fr_1fr] grid-rows-[auto] min-w-[884px] gap-y-0 w-full pb-6 px-10 border-b md:grid-cols-[3.5fr_1fr_1fr_1fr_1fr_1fr] md:min-w-[1249px]">
                        <div className="items-center box-border caret-transparent gap-x-6 flex col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1] justify-start md:col-end-auto md:col-start-auto md:row-end-auto md:row-start-auto">
                          <div className="items-center bg-blue-600/30 box-border caret-transparent hidden justify-center max-h-[85px] max-w-[85px] min-h-[85px] min-w-[85px] rounded-[10px] md:flex">
                            <img
                              src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-23.svg"
                              alt="Icon"
                              className="text-white box-border caret-transparent inline w-8 md:block"
                            />
                          </div>
                          <div className="text-zinc-50 box-border caret-transparent flex flex-col gap-y-2">
                            <h3 className="text-xl font-bold box-border caret-transparent leading-6 font-redhatdisplay_variablefont_wght md:text-2xl md:leading-[28.8px]">
                              Creative Agencies
                            </h3>
                            <div className="box-border caret-transparent hidden min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]">
                              <div className="text-neutral-300 box-border caret-transparent">
                                <div className="text-base box-border caret-transparent tracking-[0.36px] leading-6 md:text-lg md:leading-[27px]">
                                  Agencies offer structured processes but mostly
                                  with high costs, long timelines, and less
                                  flexibility for your projects
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center">
                          <img
                            src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-22.svg"
                            alt="Icon"
                            className="text-red-500 box-border caret-transparent w-6 md:w-10"
                          />
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center">
                          <img
                            src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-22.svg"
                            alt="Icon"
                            className="text-red-500 box-border caret-transparent w-6 md:w-10"
                          />
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center">
                          <div className="text-zinc-50 box-border caret-transparent flex w-6 md:w-10">
                            <img
                              src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-20.svg"
                              alt="Icon"
                              className="box-border caret-transparent w-full"
                            />
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center">
                          <div className="text-zinc-50 box-border caret-transparent flex w-6 md:w-10">
                            <img
                              src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-20.svg"
                              alt="Icon"
                              className="box-border caret-transparent w-full"
                            />
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center">
                          <img
                            src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-22.svg"
                            alt="Icon"
                            className="text-red-500 box-border caret-transparent w-6 md:w-10"
                          />
                        </div>
                      </div>
                      <div className="items-center border-b-neutral-600/50 border-l-zinc-800 border-r-zinc-800 border-t-zinc-800 box-border caret-transparent gap-x-0 grid auto-cols-[1fr] grid-cols-[1.75fr_1fr_1fr_1fr_1fr_1fr] grid-rows-[auto] min-w-[884px] gap-y-0 w-full pb-6 px-10 border-b md:grid-cols-[3.5fr_1fr_1fr_1fr_1fr_1fr] md:min-w-[1249px]">
                        <div className="items-center box-border caret-transparent gap-x-6 flex col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1] justify-start md:col-end-auto md:col-start-auto md:row-end-auto md:row-start-auto">
                          <div className="items-center bg-blue-600/30 box-border caret-transparent hidden justify-center max-h-[85px] max-w-[85px] min-h-[85px] min-w-[85px] rounded-[10px] md:flex">
                            <img
                              src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-24.svg"
                              alt="Icon"
                              className="text-white box-border caret-transparent inline w-8 md:block"
                            />
                          </div>
                          <div className="text-zinc-50 box-border caret-transparent flex flex-col gap-y-2">
                            <h3 className="text-xl font-bold box-border caret-transparent leading-6 font-redhatdisplay_variablefont_wght md:text-2xl md:leading-[28.8px]">
                              Freelancers
                            </h3>
                            <div className="box-border caret-transparent hidden min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]">
                              <div className="text-base box-border caret-transparent tracking-[0.36px] leading-6 md:text-lg md:leading-[27px]">
                                Freelancers may provide affordable design
                                services but they mostly lack consistency,
                                reliability, and collaboration
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center">
                          <img
                            src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-22.svg"
                            alt="Icon"
                            className="text-red-500 box-border caret-transparent w-6 md:w-10"
                          />
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center">
                          <div className="text-zinc-50 box-border caret-transparent flex w-6 md:w-10">
                            <img
                              src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-20.svg"
                              alt="Icon"
                              className="box-border caret-transparent w-full"
                            />
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center">
                          <img
                            src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-22.svg"
                            alt="Icon"
                            className="text-red-500 box-border caret-transparent w-6 md:w-10"
                          />
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center">
                          <img
                            src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-22.svg"
                            alt="Icon"
                            className="text-red-500 box-border caret-transparent w-6 md:w-10"
                          />
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center">
                          <div className="text-zinc-50 box-border caret-transparent flex w-6 md:w-10">
                            <img
                              src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-20.svg"
                              alt="Icon"
                              className="box-border caret-transparent w-full"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="items-center box-border caret-transparent gap-x-0 grid auto-cols-[1fr] grid-cols-[1.75fr_1fr_1fr_1fr_1fr_1fr] grid-rows-[auto] min-w-[884px] gap-y-0 w-full pb-6 px-10 md:grid-cols-[3.5fr_1fr_1fr_1fr_1fr_1fr] md:min-w-[1249px]">
                        <div className="items-center box-border caret-transparent gap-x-6 flex col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1] justify-start md:col-end-auto md:col-start-auto md:row-end-auto md:row-start-auto">
                          <div className="items-center bg-blue-600/30 box-border caret-transparent hidden justify-center max-h-[85px] max-w-[85px] min-h-[85px] min-w-[85px] rounded-[10px] md:flex">
                            <img
                              src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-25.svg"
                              alt="Icon"
                              className="text-white box-border caret-transparent inline w-8 md:block"
                            />
                          </div>
                          <div className="text-zinc-50 box-border caret-transparent flex flex-col gap-y-2">
                            <h3 className="text-xl font-bold box-border caret-transparent leading-6 font-redhatdisplay_variablefont_wght md:text-2xl md:leading-[28.8px]">
                              Self-Service Tools
                            </h3>
                            <div className="box-border caret-transparent hidden min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]">
                              <div className="text-neutral-300 box-border caret-transparent">
                                <div className="text-base box-border caret-transparent tracking-[0.36px] leading-6 md:text-lg md:leading-[27px]">
                                  DIY tools like website builders are
                                  budget-friendly, but you can’t expect
                                  strategic thinking &amp; originality
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center">
                          <img
                            src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-22.svg"
                            alt="Icon"
                            className="text-red-500 box-border caret-transparent w-6 md:w-10"
                          />
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center">
                          <img
                            src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-22.svg"
                            alt="Icon"
                            className="text-red-500 box-border caret-transparent w-6 md:w-10"
                          />
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center">
                          <div className="text-zinc-50 box-border caret-transparent flex w-6 md:w-10">
                            <img
                              src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-20.svg"
                              alt="Icon"
                              className="box-border caret-transparent w-full"
                            />
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center">
                          <div className="text-zinc-50 box-border caret-transparent flex w-6 md:w-10">
                            <img
                              src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-20.svg"
                              alt="Icon"
                              className="box-border caret-transparent w-full"
                            />
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center">
                          <img
                            src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-22.svg"
                            alt="Icon"
                            className="text-red-500 box-border caret-transparent w-6 md:w-10"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute box-border caret-transparent pointer-events-none w-full top-0">
          <img
            src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/6812483c6bde6e720d880757_Shade_(1).avif"
            sizes="100vw"
            alt=""
            className="box-border caret-transparent inline-block max-w-full"
          />
        </div>
      </div>
      <div className="absolute box-border caret-transparent block overflow-hidden left-1 bottom-[3px] md:hidden">
        <img
          src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/67fa4f5fbcba998c365983d4_Cursor.avif"
          alt=""
          className="box-border caret-transparent inline-block max-w-full"
        />
      </div>
    </div>
  );
};
