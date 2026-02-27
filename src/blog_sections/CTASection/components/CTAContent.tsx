import { CTAButton } from "@/blog_sections/CTASection/components/CTAButton";

export const CTAContent = () => {
  return (
    <div className="relative box-border caret-transparent h-auto max-w-full min-h-[auto] min-w-[auto] w-full z-[99] md:static md:h-full md:max-w-[480px] md:min-h-0 md:min-w-0 md:z-auto">
      <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4 md:gap-x-8 md:gap-y-8">
        <div className="box-border caret-transparent gap-x-2 flex flex-col gap-y-2 md:gap-x-4 md:gap-y-4">
          <div className="box-border caret-transparent flex">
            <div className="text-green-500 bg-emerald-400/10 box-border caret-transparent border border-green-800 px-3 py-1 rounded-3xl border-solid">
              <div className="text-sm box-border caret-transparent leading-[21px] md:text-base md:leading-6">
                Claim a $999 Free Consultation, on Us!
              </div>
            </div>
          </div>
          <div className="text-zinc-50 box-border caret-transparent">
            <h2 className="text-[28px] font-bold box-border caret-transparent leading-[33.6px] font-redhatdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
              Your Brand Deserves the{" "}
              <em className="text-[28px] italic box-border caret-transparent leading-[33.6px] capitalize font-playfairdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                Next Level!
              </em>
            </h2>
          </div>
          <div className="text-neutral-400 box-border caret-transparent">
            <p className="text-base box-border caret-transparent tracking-[0.36px] leading-6 md:text-lg md:leading-[27px]">
              Get expert advice and a custom strategy session worth $799 at no
              cost
            </p>
          </div>
        </div>
        <div className="relative items-start box-border caret-transparent gap-x-8 flex flex-col max-w-full gap-y-8 w-full z-[3] md:max-w-[280px]">
          <div className="box-border caret-transparent max-w-40 mr-auto md:max-w-[185px] md:mr-0">
            <img
              src="https://anpeyqpnsavhykstwwbq.supabase.co/storage/v1/object/public/images/group1line/1770493792748-0.png"
              alt=""
              className="box-border caret-transparent inline-block max-w-full"
            />
          </div>
          <div className="relative items-center box-border caret-transparent flex justify-start w-full z-20 md:static md:[align-items:normal] md:z-auto">
            <CTAButton />
          </div>
          <div className="absolute box-border caret-transparent h-12 max-w-10 rotate-[-40.00003345093182deg] w-full right-[38%] top-[10%] bottom-[0%] md:h-auto md:max-w-none md:rotate-[0.9999993263990709deg] md:w-auto md:right-[7%] md:top-[24%]">
            <img
              src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6734f538ffac18e161c9c9de_Group 7 (3).avif"
              alt=""
              className="box-border caret-transparent inline-block max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
