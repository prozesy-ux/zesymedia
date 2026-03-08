import { HeroContent } from "@/integrations/pricing/sections/Hero/components/HeroContent";
import { PricingTabs } from "@/integrations/pricing/components/PricingTabs";
import { BonusSection } from "@/integrations/pricing/sections/BonusSection";
import { ServicesGrid } from "@/integrations/pricing/components/ServicesGrid";

export const Hero = () => {
  return (
    <section className="relative bg-neutral-950/90 box-border caret-transparent overflow-hidden">
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent pb-[60px] px-5 md:pb-[100px] md:px-[94px]">
          <div className="box-border caret-transparent max-w-[1252px] w-full z-[1] mx-auto">
            <div className="box-border caret-transparent gap-x-8 flex flex-col gap-y-8 md:gap-x-14 md:gap-y-14">
              <HeroContent />
              <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
                <PricingTabs />
              </div>
              <div className="relative box-border caret-transparent min-h-[auto] min-w-[auto] overflow-hidden mt-8 rounded-3xl md:mt-0">
                <BonusSection />
                <div className="absolute box-border caret-transparent h-full w-full z-[2] inset-[0%]">
                  <div className="absolute bg-[linear-gradient(rgba(127,33,255,0.6),rgb(52,109,255)_29%,rgb(191,199,101)_52%,rgb(80,65,255)_79%,rgba(127,33,255,0.6)),linear-gradient(25deg,rgba(127,33,255,0.6),rgba(219,219,219,0.79)_41%,rgba(255,255,255,0.89)_61%,rgba(80,60,120,0.07))] bg-size-[auto,auto] box-border caret-transparent blur-[10px] h-[150%] translate-x-[-50.0%] w-[150%] z-0 bg-[position:0%,0%_0%,0%] left-2/4 top-[0%] md:top-2/4"></div>
                </div>
              </div>
              <ServicesGrid />
            </div>
          </div>
        </div>
        <div className="absolute text-white box-border caret-transparent h-[1200px] w-full z-[-1] overflow-hidden top-0">
          <video
            autoplay=""
            loop=""
            muted=""
            playsinline=""
            className="absolute bg-[url('https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9%2F674238984b5b15db637f4a63_-60bc-4584-9ad6-9caa931f8372-poster-00001.jpg')] bg-cover box-border caret-transparent h-full object-cover align-baseline w-full z-[-100] bg-center m-auto -inset-full"
          >
            <source
              src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/674238984b5b15db637f4a63_-60bc-4584-9ad6-9caa931f8372-transcode.mp4"
              className="text-black text-base box-border caret-transparent leading-[normal] font-times_new_roman"
            />
            <source
              src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/674238984b5b15db637f4a63_-60bc-4584-9ad6-9caa931f8372-transcode.webm"
              className="text-black text-base box-border caret-transparent leading-[normal] font-times_new_roman"
            />
          </video>
          <div className="absolute bg-[linear-gradient(rgba(10,10,10,0),rgb(10,10,10)_70%)] box-border caret-transparent h-[200px] bottom-[0%] inset-x-[0%]"></div>
        </div>
        <div className="absolute bg-neutral-950 box-border caret-transparent z-[-2] inset-[0%]"></div>
      </div>
      <div className="absolute box-border caret-transparent max-w-44 pointer-events-none z-0 right-[0%] top-[0%] md:max-w-none">
        <img
          src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67fbb9e09e1ee391a7f159d2_Group 2147223906.avif"
          alt=""
          className="box-border caret-transparent inline-block max-w-full"
        />
      </div>
      <div className="absolute box-border caret-transparent hidden pointer-events-none z-[4] left-[0%] top-32 md:block">
        <img
          src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67fb7165998436ceed3442d0_Group 2147223905.avif"
          alt=""
          className="box-border caret-transparent inline-block max-w-full"
        />
      </div>
      <div className="absolute box-border caret-transparent hidden pointer-events-none w-full z-[3] bottom-0 md:block">
        <img
          src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/680db5b649c720006c8d6cd6_Shade.avif"
          alt=""
          className="box-border caret-transparent inline-block max-w-full"
        />
      </div>
      <div className="absolute bottom-[-220px] box-border caret-transparent hidden pointer-events-none right-0 md:block">
        <img
          src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/680db6f4d3c0ca2155a5e42a_dab5b3b75db9828aff43984dd8f15ca5_19.avif"
          alt=""
          className="box-border caret-transparent inline-block max-w-full"
        />
      </div>
    </section>
  );
};
