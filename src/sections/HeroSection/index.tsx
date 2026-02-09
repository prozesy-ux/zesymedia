import { HeroContent } from "@/sections/HeroSection/components/HeroContent";
import { LogoCarousel } from "@/sections/HeroSection/components/LogoCarousel";

export const HeroSection = () => {
  return (
    <section className="relative text-zinc-50 bg-neutral-950 box-border caret-transparent h-auto overflow-hidden pt-[90px] pb-20 md:h-[980px] md:pb-0">
      <div className="box-border caret-transparent h-full z-[1] px-5 md:px-[94px]">
        <div className="box-border caret-transparent h-full max-w-[1252px] w-full mx-auto">
          <div className="box-border caret-transparent h-[570px] justify-around md:h-full md:justify-normal">
            <HeroContent />
            <div className="box-border caret-transparent">
              <LogoCarousel />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute box-border caret-transparent hidden flex-col left-[0%] top-[90px] md:flex">
        <img
          src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/6772a59f9e4d013c6a671384_Mockups.avif"
          alt=""
          className="relative box-border caret-transparent inline-block h-full max-w-full min-h-0 min-w-0 transform-none w-full z-[1] md:block md:h-auto md:min-h-[auto] md:min-w-[auto] md:translate-y-[6.34848px] md:w-[245px]"
        />
        <img
          src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/6772a59fa5a5e8b8e00985f8_Ai.avif"
          alt=""
          className="absolute box-border caret-transparent max-w-full w-[81px] right-[70px] bottom-[70px] md:w-[117px] md:bottom-[60px]"
        />
        <img
          src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/6772a59fb66e3dddbecf4561_Cube.avif"
          alt=""
          className="absolute box-border caret-transparent max-w-full w-[108px] top-[30px]"
        />
      </div>
      <div className="absolute box-border caret-transparent hidden flex-col right-[0%] top-[125px] md:flex">
        <img
          src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/6772a8cda0faac73a2d81fb2_Frame_1618873776.avif"
          alt=""
          className="relative box-border caret-transparent inline-block h-full max-w-full min-h-0 min-w-0 transform-none w-[290px] z-[1] md:block md:h-auto md:min-h-[auto] md:min-w-[auto] md:translate-y-[0.25248px] md:w-[310px]"
        />
        <img
          src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/6772a59f7b1eefa28a38aa7d_cursor.avif"
          alt=""
          className="absolute box-border caret-transparent max-w-full w-[61px] z-[2] right-[143px] top-[166px] md:right-[140px] md:top-[168px]"
        />
        <img
          src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/6772a5a00b29b82dff1f0438_ring.avif"
          alt=""
          className="absolute box-border caret-transparent max-w-full w-[71px] right-[0%] top-9"
        />
      </div>
      <div className="absolute items-center box-border caret-transparent flex justify-center opacity-[0.88] pointer-events-none z-[1] bottom-[1%] inset-x-[0%] md:bottom-[0%]">
        <img
          src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/673b29a85449a44b5ebfdfe7_Glow_(1).avif"
          alt=""
          sizes="(max-width: 479px) 100vw, 240px"
          className="box-border caret-transparent h-full max-w-full w-full md:h-auto"
        />
      </div>
    </section>
  );
};
