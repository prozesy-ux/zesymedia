import { TestimonialsCarousel } from "@/integrations/services/sections/TestimonialsSection/components/TestimonialsCarousel";

export const TestimonialsSection = () => {
  return (
    <section className="box-border caret-transparent">
      <div className="box-border caret-transparent hidden before:accent-auto before:caret-transparent before:text-zinc-800 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-outfit_variablefont_wght after:accent-auto after:caret-transparent after:clear-both after:text-zinc-800 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-outfit_variablefont_wght"></div>
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent px-5 py-[60px] md:px-[94px] md:py-[100px]">
          <div className="box-border caret-transparent max-w-[1252px] w-full z-[1] mx-auto">
            <div className="box-border caret-transparent gap-x-[60px] flex flex-col gap-y-[60px] md:gap-x-[100px] md:gap-y-[100px]">
              <div className="items-center box-border caret-transparent gap-x-8 flex flex-col justify-start min-h-[auto] min-w-[auto] gap-y-8 md:gap-x-14 md:gap-y-14">
                <div className="items-center box-border caret-transparent gap-x-4 flex flex-col justify-start min-h-[auto] min-w-[auto] gap-y-4 text-center">
                  <div className="box-border caret-transparent flex min-h-[auto] min-w-[auto]">
                    <div className="text-green-700 box-border caret-transparent min-h-[auto] min-w-[auto] border border-emerald-400 px-3 py-1 rounded-3xl border-solid">
                      <div className="text-sm box-border caret-transparent leading-[21px] md:text-base md:leading-6">
                        Client Stories
                      </div>
                    </div>
                  </div>
                  <div className="text-neutral-950 box-border caret-transparent min-h-[auto] min-w-[auto]">
                    <h2 className="text-[28px] font-bold box-border caret-transparent leading-[33.6px] font-redhatdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                      Our Clients Love{" "}
                      <br className="text-[28px] box-border caret-transparent leading-[33.6px] md:text-5xl md:leading-[57.6px]" />
                      to{" "}
                      <em className="text-[28px] italic box-border caret-transparent leading-[33.6px] capitalize font-playfairdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                        Recommend us
                      </em>
                    </h2>
                  </div>
                </div>
                <TestimonialsCarousel />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
