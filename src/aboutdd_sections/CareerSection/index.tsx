import { DesktopCTA } from "@/aboutdd_sections/CareerSection/components/DesktopCTA";
import { MobileCTA } from "@/aboutdd_sections/CareerSection/components/MobileCTA";

export const CareerSection = () => {
  return (
    <div className="box-border caret-transparent">
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent pt-0 px-5 md:pt-[156px] md:px-[94px]">
          <div className="box-border caret-transparent max-w-[1252px] z-[1] mx-auto">
            <div className="relative bg-neutral-950 bg-[url('https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/680ce2c7ccbfc46d3d64d42c_dea7841b0e3986b5c5471118785093c7_Dots%20Background%20dark.avif')] box-border caret-transparent flex flex-col w-full overflow-hidden bg-[position:0px_0px] rounded-2xl md:bg-none md:block md:flex-row md:overflow-visible md:bg-left-top md:rounded-[32px]">
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
                            Are you a talented and self-motivated person with a
                            positive vibe? If yes, you can be the next member of
                            our Monks family.
                          </p>
                        </div>
                      </div>
                      <DesktopCTA />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative box-border caret-transparent h-[425px] min-h-[auto] min-w-[auto] order-1 w-full z-[2] right-[0%] bottom-[0%] md:absolute md:h-auto md:min-h-0 md:min-w-0 md:order-none md:w-[675px] md:z-20">
                <img
                  alt=""
                  src="https://anpeyqpnsavhykstwwbq.supabase.co/storage/v1/object/public/images/Our%20Team/871cb903-b223-4a2b-bae1-43df794f8c99-1770651859360.png"
                  className="aspect-[auto_675_/_630] box-border caret-transparent h-full max-w-full object-cover object-[50%_0%] w-full md:object-fill md:object-[50%_50%]"
                />
                <MobileCTA />
              </div>
              <div className="absolute box-border caret-transparent pointer-events-none overflow-hidden rounded-2xl inset-[0%] md:rounded-[32px]">
                <div className="absolute box-border caret-transparent left-0 right-[0%] top-[0%] md:left-auto">
                  <img
                    src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/680ce24b995fd04d3ca18883_Group 2147225317.avif"
                    alt=""
                    className="box-border caret-transparent block h-full max-w-full w-full md:hidden"
                  />
                  <img
                    alt=""
                    src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/674237f27912e40806ed4a51_Gradient (4).avif"
                    className="aspect-[auto_1252_/_886] box-border caret-transparent hidden h-full max-w-full w-full md:inline-block"
                  />
                </div>
                <div className="absolute box-border caret-transparent max-w-[190px] z-0 left-[0%] bottom-[0%] md:max-w-none">
                  <img
                    src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/674237f20b709b60e0d2c3ee_Gradient (3).avif"
                    alt=""
                    className="box-border caret-transparent inline-block h-full max-w-full w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
