import { TestimonialCarousel } from "@/integrations/pricing/sections/Testimonials/components/TestimonialCarousel";

export const Testimonials = () => {
  return (
    <div className="box-border caret-transparent px-5 py-[60px] md:px-[94px] md:py-[100px]">
      <div className="box-border caret-transparent max-w-[1252px] w-full z-[1] mx-auto">
        <div className="box-border caret-transparent gap-x-8 flex flex-col gap-y-8 md:gap-x-14 md:gap-y-14">
          <div className="items-end box-border caret-transparent gap-x-4 grid auto-cols-[1fr] grid-cols-[1.5fr_1fr] grid-rows-[auto] justify-items-stretch min-h-[auto] min-w-[auto] gap-y-4">
            <div className="box-border caret-transparent gap-x-4 flex flex-col min-h-[auto] min-w-[auto] gap-y-4">
              <div className="box-border caret-transparent flex min-h-[auto] min-w-[auto]">
                <div className="text-green-700 box-border caret-transparent min-h-[auto] min-w-[auto] border border-emerald-400 px-3 py-1 rounded-3xl border-solid">
                  <div className="text-sm box-border caret-transparent leading-[21px] md:text-base md:leading-6">
                    Client Stories
                  </div>
                </div>
              </div>
              <h2 className="text-neutral-950 text-[28px] font-bold box-border caret-transparent leading-[33.6px] min-h-[auto] min-w-[auto] font-redhatdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
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
          <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
            <TestimonialCarousel />
            <span className="box-border caret-transparent"></span>
          </div>
        </div>
      </div>
    </div>
  );
};
