import { TestimonialCarousel } from "@/sections/TestimonialsSection/components/TestimonialCarousel";

export const TestimonialsSection = () => {
  return (
    <div className="box-border caret-transparent">
      <div className="bg-zinc-50 box-border caret-transparent">
        <div className="box-border caret-transparent px-5 py-[60px] md:px-[94px] md:py-[100px]">
          <div className="box-border caret-transparent max-w-[1252px] w-full z-[1] mx-auto mb-8 md:mb-14">
            <div className="items-end box-border caret-transparent gap-x-4 grid auto-cols-[1fr] grid-cols-[1.5fr_1fr] grid-rows-[auto] justify-items-stretch gap-y-4">
              <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4">
                <div className="box-border caret-transparent flex">
                  <div className="text-green-700 box-border caret-transparent border border-emerald-400 px-3 py-1 rounded-3xl border-solid">
                    <div className="text-sm box-border caret-transparent leading-[21px] md:text-base md:leading-6">
                      Client Stories
                    </div>
                  </div>
                </div>
                <h2 className="text-neutral-950 text-[28px] font-bold box-border caret-transparent leading-[33.6px] font-redhatdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                  Success{" "}
                  <em className="text-[28px] italic box-border caret-transparent leading-[33.6px] capitalize font-playfairdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                    Stories
                  </em>
                  <br className="text-[28px] box-border caret-transparent leading-[33.6px] md:text-5xl md:leading-[57.6px]" />
                  That{" "}
                  <em className="text-[28px] italic box-border caret-transparent leading-[33.6px] capitalize font-playfairdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                    Inspire Us
                  </em>
                </h2>
              </div>
            </div>
          </div>
          <TestimonialCarousel />
        </div>
      </div>
    </div>
  );
};
