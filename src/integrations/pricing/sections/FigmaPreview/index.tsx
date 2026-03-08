import { FigmaCard } from "@/integrations/pricing/sections/FigmaPreview/components/FigmaCard";

export const FigmaPreview = () => {
  return (
    <section className="box-border caret-transparent">
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent pt-[60px] px-5 md:pt-[100px] md:px-[94px]">
          <div className="box-border caret-transparent max-w-[1252px] w-full z-[1] mx-auto">
            <div className="items-center box-border caret-transparent gap-x-8 flex flex-col justify-start gap-y-8 md:gap-x-14 md:gap-y-14">
              <div className="items-center box-border caret-transparent gap-x-4 flex flex-col justify-start min-h-[auto] min-w-[auto] gap-y-4 text-center">
                <div className="box-border caret-transparent flex min-h-[auto] min-w-[auto]">
                  <div className="text-green-700 box-border caret-transparent min-h-[auto] min-w-[auto] border border-emerald-400 px-3 py-1 rounded-3xl border-solid">
                    <div className="text-sm box-border caret-transparent leading-[21px] md:text-base md:leading-6">
                      Figma Preview
                    </div>
                  </div>
                </div>
                <h2 className="text-neutral-950 text-[28px] font-bold box-border caret-transparent leading-[33.6px] min-h-[auto] min-w-[auto] font-redhatdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                  See Our Works{" "}
                  <em className="text-[28px] italic box-border caret-transparent leading-[33.6px] capitalize font-playfairdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                    in Action
                  </em>
                </h2>
                <p className="text-neutral-600 text-base box-border caret-transparent tracking-[0.36px] leading-6 min-h-[auto] min-w-[auto] md:text-lg md:leading-[27px]">
                  Dive into our collection of projects that showcase creativity,
                  precision, and purpose.
                </p>
              </div>
              <div className="box-border caret-transparent gap-x-8 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] min-h-[auto] min-w-[auto] gap-y-8 w-full md:grid-cols-[1fr_1fr_1fr_1fr_1fr]">
                <FigmaCard
                  imageUrl="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/68f75ce538411aee83c2c00a_61.avif"
                  title="Need a Product Designer?"
                  description="Turning your big ideas into pixel-perfect products—need a Product Designer?"
                  figmaFileUrl="https://www.figma.com/design/eKzH2d2jWbOwvOSsG9nfNT/Designmonks-Landing-Page-Live-Portfolio?m=auto&t=yjjU815PhhXvf2YG-6"
                  variant="h-[400px] rounded-3xl md:col-end-[span_3] md:col-start-[span_3] md:h-auto"
                />
                <FigmaCard
                  imageUrl="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/68f76205464c6be23237017b_1.avif"
                  title="Need a Mobile Designer?"
                  description="Seeking a Mobile Designer for user-friendly app designs."
                  figmaFileUrl="https://www.figma.com/design/wML2YPnkaI7WhaQOPh3FbB/DM-Mobile-App-Live-Portfolio?m=auto&t=yjjU815PhhXvf2YG-6"
                  variant="md:col-end-[span_2] md:col-start-[span_2]"
                />
                <FigmaCard
                  imageUrl="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/68f7670179e0ba46f675f877_59.avif"
                  title="Need a Brand Designer?"
                  description="Your story, my design—together, we craft a brand that speaks."
                  figmaFileUrl="https://www.figma.com/design/nR9RCciO92pCXVtqT3EXR5/DM-Brand-Book-Live-Portfolio?m=auto&t=yjjU815PhhXvf2YG-6"
                  variant="md:col-end-[span_2] md:col-start-[span_2]"
                />
                <FigmaCard
                  imageUrl="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/68f767013ad25dcff2a5b078_60.avif"
                  title="Need a SaaS Designer?"
                  description="Turning SaaS platforms into user-friendly experiences that people love."
                  figmaFileUrl="https://www.figma.com/design/UV5rZSzHBgZmCWIrvgYDUD/Designmonks-WebApp-Live-Portfolio?m=auto&t=yjjU815PhhXvf2YG-6"
                  variant="h-[400px] rounded-3xl md:col-end-[span_3] md:col-start-[span_3] md:h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
