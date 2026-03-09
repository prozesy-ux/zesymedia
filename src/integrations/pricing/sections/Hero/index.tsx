import { HeroContent } from "@/integrations/pricing/sections/Hero/components/HeroContent";
import { PricingTabs } from "@/integrations/pricing/components/PricingTabs";
import { BonusSection } from "@/integrations/pricing/sections/BonusSection";
import { ServicesGrid } from "@/integrations/pricing/components/ServicesGrid";

const HERO_VIDEO_POSTER =
  "https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9%2F674238984b5b15db637f4a63_-60bc-4584-9ad6-9caa931f8372-poster-00001.jpg";

export const Hero = () => {
  return (
    <section className="pricing-video-section relative bg-neutral-950/90 box-border caret-transparent overflow-hidden">
      {/* Static Background Layer */}
      <div 
        className="pricing-bg-video"
        style={{
          backgroundImage: `url('${HERO_VIDEO_POSTER}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      {/* Video Shadow Overlay */}
      <div className="pricing-bg-video-shadow"></div>
      
      {/* Page Background */}
      <div className="pricing-page-bg"></div>
      
      {/* Content Layer */}
      <div className="pricing-video-content box-border caret-transparent">
        <div className="box-border caret-transparent pb-[60px] px-5 md:pb-[100px] md:px-[94px]">
          <div className="box-border caret-transparent max-w-[1252px] w-full z-[1] mx-auto">
            <div className="box-border caret-transparent gap-x-8 flex flex-col gap-y-8 md:gap-x-14 md:gap-y-14">
              <HeroContent />
              <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
                <PricingTabs />
              </div>
              <div className="relative box-border caret-transparent min-h-[auto] min-w-[auto] overflow-hidden mt-8 rounded-3xl md:mt-0">
                <div className="relative z-[2]">
                  <BonusSection />
                </div>
                <div className="pointer-events-none absolute box-border caret-transparent h-full w-full z-[1] inset-[0%]">
                  <div className="absolute bg-[radial-gradient(circle_at_50%_20%,rgba(127,33,255,0.28),rgba(127,33,255,0)_62%)] box-border caret-transparent h-full w-full z-0 left-0 top-0"></div>
                </div>
              </div>
              <ServicesGrid />
            </div>
          </div>
        </div>
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
