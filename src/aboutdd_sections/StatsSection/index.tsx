import { StatCard } from "@/aboutdd_sections/StatsSection/components/StatCard";

export const StatsSection = () => {
  return (
    <section className="relative box-border caret-transparent overflow-hidden md:overflow-visible">
      <div className="box-border caret-transparent pt-10 pb-[60px] md:py-[100px]">
        <div className="box-border caret-transparent z-[1] px-5 md:px-[94px]">
          <div className="box-border caret-transparent max-w-[1252px] mx-auto">
            <div className="box-border caret-transparent">
              <div className="items-center box-border caret-transparent flex flex-col max-w-[988px] text-center mb-8 mx-auto md:mb-10">
                <div className="box-border caret-transparent flex justify-start">
                  <div className="text-green-700 box-border caret-transparent border border-emerald-400 px-3 py-1 rounded-3xl border-solid">
                    <div className="text-sm box-border caret-transparent tracking-[0.32px] leading-[21px] capitalize md:text-base md:leading-6">
                      Visionary partnerships
                    </div>
                  </div>
                </div>
                <div className="box-border caret-transparent my-4">
                  <h2 className="text-neutral-950 text-[28px] font-bold box-border caret-transparent leading-[33.6px] capitalize font-redhatdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                    <span className="text-[28px] italic box-border caret-transparent inline-block leading-[33.6px] font-playfairdisplay_variablefont_wght md:text-5xl md:inline md:leading-[57.6px]">
                      <em className="text-[28px] box-border caret-transparent leading-[33.6px] md:text-5xl md:leading-[57.6px]">
                        Pioneering
                      </em>
                    </span>
                    Impactful Change with Forward-Thinking{" "}
                    <span className="text-[28px] italic box-border caret-transparent inline-block leading-[33.6px] font-playfairdisplay_variablefont_wght md:text-5xl md:inline md:leading-[57.6px]">
                      <em className="text-[28px] box-border caret-transparent leading-[33.6px] md:text-5xl md:leading-[57.6px]">
                        Partners
                      </em>
                    </span>
                    since 2021.
                  </h2>
                </div>
              </div>
              <div className="relative box-border caret-transparent z-0">
                <div className="box-border caret-transparent gap-x-6 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-6 md:gap-x-8 md:grid-cols-[1fr_1fr_1fr_1fr] md:gap-y-8">
                  <StatCard
                    title="Clients"
                    statValue="150+"
                    description="Collaborating with ambitious brands to create meaningful experiences."
                    variant="bg-[linear-gradient(rgb(216,211,223),rgba(0,0,0,0))]"
                    innerVariant="mt-px"
                  />
                  <StatCard
                    title="Countries Served"
                    titleIsBold={true}
                    statValue="7"
                    description="Bringing creativity and strategy together for brand success worldwide"
                    variant="bg-[linear-gradient(rgba(21,21,22,0.1),rgba(0,0,0,0)_0%,rgb(216,211,223))] overflow-hidden"
                    innerVariant="mb-px"
                  />
                  <StatCard
                    title="Experience"
                    statValue="4"
                    description="Designing with passion, precision, and expertise over the years."
                    variant="bg-[linear-gradient(rgb(216,211,223),rgba(0,0,0,0))]"
                    innerVariant="mt-px"
                  />
                  <StatCard
                    title="Biriyani Plates"
                    statValue="999"
                    description="We’re serious about our Biriyani Joytun Birani is our top spot (not sponsored, but we wouldn’t mind)."
                    variant="bg-[linear-gradient(rgba(21,21,22,0.1),rgba(0,0,0,0)_0%,rgb(216,211,223))] overflow-hidden"
                    innerVariant="mb-px"
                  />
                </div>
                <div className="absolute bg-emerald-400 box-border caret-transparent blur-[65px] h-40 max-w-40 opacity-70 w-full z-[-1] rounded-[100%] left-[230px] top-[22px] bottom-[0%]"></div>
                <div className="absolute bg-violet-600 box-border caret-transparent blur-[65px] h-[127px] max-w-44 opacity-70 w-full z-[-1] rounded-[100%] right-[280px] bottom-[123px] md:bottom-[17px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[-5%] box-border caret-transparent hidden z-[2] left-[0%] md:bottom-[-15%] md:block">
        <img
          src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67442176136b5a00063d765f_lightning.avif"
          alt=""
          className="box-border caret-transparent inline-block max-w-[80%] md:max-w-full"
        />
      </div>
    </section>
  );
};
