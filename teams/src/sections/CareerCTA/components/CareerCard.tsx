import { DesktopCTAButton } from "@/sections/CareerCTA/components/DesktopCTAButton";

export const CareerCard = () => {
  return (
    <div className="relative items-center box-border caret-transparent flex flex-col h-auto min-h-[auto] min-w-[auto] z-[1] overflow-hidden rounded-2xl md:[align-items:normal] md:block md:flex-row md:h-[500px] md:min-h-0 md:min-w-0 md:z-[21] md:rounded-[32px]">
      <div className="items-center box-border caret-transparent flex h-full justify-start min-h-[auto] min-w-[auto] w-full pt-8 pb-4 px-6 md:min-h-0 md:min-w-0 md:w-auto md:p-12">
        <div className="relative items-center box-border caret-transparent flex flex-col justify-start w-full md:static md:[align-items:normal] md:block md:flex-row md:justify-normal md:w-[423px]">
          <div className="box-border caret-transparent gap-x-6 flex flex-col min-h-[auto] min-w-[auto] gap-y-6 md:gap-x-8 md:min-h-0 md:min-w-0 md:gap-y-8">
            <div className="items-center box-border caret-transparent gap-x-2 flex flex-col justify-start gap-y-2 text-center md:[align-items:normal] md:gap-x-4 md:justify-normal md:gap-y-4 md:text-start">
              <div className="box-border caret-transparent flex text-center md:text-start">
                <div className="text-green-500 box-border caret-transparent text-center border border-green-800 px-3 py-1 rounded-3xl border-solid md:text-start">
                  <div className="text-sm box-border caret-transparent leading-[21px] text-center md:text-base md:leading-6 md:text-start">
                    Career
                  </div>
                </div>
              </div>
              <div className="text-zinc-50 box-border caret-transparent text-center md:text-start">
                <h2 className="text-[28px] font-bold box-border caret-transparent leading-[33.6px] text-center font-redhatdisplay_variablefont_wght md:text-5xl md:leading-[57.6px] md:text-start">
                  Want to be a{" "}
                  <br className="text-[28px] box-border caret-transparent leading-[33.6px] text-center md:text-5xl md:leading-[57.6px] md:text-start" />
                  <em className="text-[28px] italic box-border caret-transparent leading-[33.6px] text-center capitalize font-playfairdisplay_variablefont_wght md:text-5xl md:leading-[57.6px] md:text-start">
                    monk like us?
                  </em>
                </h2>
              </div>
              <div className="text-neutral-300 box-border caret-transparent text-center md:text-start">
                <p className="text-sm box-border caret-transparent tracking-[0.36px] leading-[21px] text-center md:text-base md:leading-6 md:text-start">
                  Are you a talented and self-motivated person with a positive
                  vibe? If yes, you can be the next member of our Monks family.
                </p>
              </div>
            </div>
            <div className="relative items-start box-border caret-transparent gap-x-8 hidden flex-col max-w-full min-h-0 min-w-0 gap-y-8 w-full z-[3] md:flex md:max-w-[280px] md:min-h-[auto] md:min-w-[auto]">
              <DesktopCTAButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
