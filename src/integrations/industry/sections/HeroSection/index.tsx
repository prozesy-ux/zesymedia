import { HeroContent } from "@/integrations/industry/sections/HeroSection/components/HeroContent";

export const HeroSection = () => {
  return (
    <section className="relative bg-neutral-950/90 bg-[linear-gradient(rgba(48,255,151,0)_30%,rgba(48,255,151,0.33))] box-border caret-transparent overflow-hidden rounded-b-[20px] md:rounded-b-[32px]">
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent max-w-[1252px] w-full z-[1] mx-auto">
          <HeroContent />
        </div>
      </div>
      <img
        src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6823539e4dc92f106b211c39_e1e77503b0ddf4b18827bbab89904d91_top-right-element.avif"
        alt=""
        className="absolute box-border caret-transparent max-w-44 pointer-events-none z-0 right-[0%] top-[0%] md:max-w-full"
      />
      <img
        src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/680abee77b8b1a005391c27b_d06c4296b2ae60af25ab36e28167df46_box element.avif"
        alt=""
        className="absolute items-end box-border caret-transparent hidden h-[100px] justify-start max-w-20 pointer-events-none w-full left-[0%] bottom-[0%] md:[align-items:normal] md:block md:h-auto md:justify-normal md:max-w-full md:w-auto"
      />
      <video
        loop=""
        autoplay="true"
        muted=""
        preload="auto"
        playsinline="true"
        className="absolute box-border caret-transparent h-full object-cover object-[50%_0%] pointer-events-none w-full z-[-1] inset-[0%]"
      >
        <source
          src="https://github.com/designmonks/webvideos/raw/main/Abstract_objects_(dark_theme).mp4"
          type="video/mp4"
          className="relative text-black text-base box-border caret-transparent block h-full leading-[normal] pointer-events-auto w-full font-times_new_roman"
        />
      </video>
    </section>
  );
};
