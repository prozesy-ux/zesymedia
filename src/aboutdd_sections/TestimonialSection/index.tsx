import { TestimonialCard } from "@/aboutdd_sections/TestimonialSection/components/TestimonialCard";

export const TestimonialSection = () => {
  return (
    <section className="relative box-border caret-transparent z-[1] overflow-hidden md:overflow-visible">
      <div className="box-border caret-transparent py-[60px] md:py-[100px]">
        <div className="box-border caret-transparent z-[1] px-5 md:px-[94px]">
          <div className="box-border caret-transparent max-w-[1252px] mx-auto">
            <div className="box-border caret-transparent max-w-[400px]">
              <div className="box-border caret-transparent flex justify-start mb-4">
                <div className="text-green-700 box-border caret-transparent border border-emerald-400 px-3 py-1 rounded-3xl border-solid">
                  <div className="text-sm box-border caret-transparent tracking-[0.32px] leading-[21px] capitalize md:text-base md:leading-6">
                    Customer review
                  </div>
                </div>
              </div>
              <div className="box-border caret-transparent">
                <h2 className="text-neutral-950 text-[28px] font-bold box-border caret-transparent leading-[33.6px] capitalize font-redhatdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                  Customer Stories{" "}
                  <span className="text-[28px] italic box-border caret-transparent inline-block leading-[33.6px] font-playfairdisplay_variablefont_wght md:text-5xl md:inline md:leading-[57.6px]">
                    That Inspire Us
                  </span>
                </h2>
              </div>
            </div>
            <div className="items-stretch box-border caret-transparent gap-x-8 flex flex-wrap gap-y-8 mt-14 md:flex-nowrap">
              <TestimonialCard />
              <div className="box-border caret-transparent w-full overflow-hidden rounded-2xl md:w-auto">
                <img
                  src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67bd51096cb5d36997c6224b_Frame 1000004587.avif"
                  alt=""
                  className="box-border caret-transparent inline-block h-full max-w-full object-fill w-full md:object-cover md:w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute box-border caret-transparent hidden max-w-44 pointer-events-none top-[-200px] z-0 right-[0%] md:block md:max-w-none">
        <img
          src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/680db6f4d3c0ca2155a5e42a_dab5b3b75db9828aff43984dd8f15ca5_19.avif"
          alt=""
          className="box-border caret-transparent inline-block max-w-full"
        />
      </div>
    </section>
  );
};
