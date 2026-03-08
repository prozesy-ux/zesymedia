import { TestimonialSlider } from "@/integrations/pricing/sections/TestimonialsAlt/components/TestimonialSlider";

export const TestimonialsAlt = () => {
  return (
    <section className="box-border caret-transparent">
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent px-5 py-[60px] md:px-[94px] md:py-[100px]">
          <div className="box-border caret-transparent max-w-[1252px] w-full z-[1] mx-auto">
            <div className="items-center box-border caret-transparent gap-x-8 flex flex-col justify-start gap-y-8 md:gap-x-14 md:gap-y-14">
              <div className="items-center box-border caret-transparent gap-x-4 flex flex-col justify-start min-h-[auto] min-w-[auto] gap-y-4 text-center">
                <div className="box-border caret-transparent flex min-h-[auto] min-w-[auto]">
                  <div className="text-green-700 box-border caret-transparent min-h-[auto] min-w-[auto] border border-emerald-400 px-3 py-1 rounded-3xl border-solid">
                    <div className="text-sm box-border caret-transparent leading-[21px] md:text-base md:leading-6">
                      Testimonial
                    </div>
                  </div>
                </div>
                <h2 className="text-neutral-950 text-[28px] font-bold box-border caret-transparent leading-[33.6px] min-h-[auto] min-w-[auto] font-redhatdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                  Success Stories
                  <br className="text-[28px] box-border caret-transparent leading-[33.6px] md:text-5xl md:leading-[57.6px]" />
                  <em className="text-[28px] italic box-border caret-transparent leading-[33.6px] capitalize font-playfairdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                    That Inspire Us
                  </em>
                </h2>
                <p className="text-neutral-600 text-base box-border caret-transparent tracking-[0.36px] leading-6 min-h-[auto] min-w-[auto] md:text-lg md:leading-[27px]">
                  This app makes finances simple—bills, savings, transfers all
                  streamlined.
                </p>
              </div>
              <div className="items-center box-border caret-transparent flex flex-col justify-start min-h-[auto] min-w-[auto]">
                <TestimonialSlider />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
