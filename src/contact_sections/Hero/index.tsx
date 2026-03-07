import { HeroVideo } from "@/contact_sections/Hero/components/HeroVideo";
import { HeroContent } from "@/contact_sections/Hero/components/HeroContent";

export const Hero = () => {
  return (
    <section className="relative bg-[linear-gradient(159deg,rgba(0,0,0,0.72),rgba(20,22,21,0.84)_44%,rgb(14,65,39))] box-border caret-transparent h-[540px] w-full overflow-hidden rounded-b-[20px] md:bg-[linear-gradient(159deg,rgba(0,0,0,0.72),rgba(20,22,21,0.84)_44%,rgba(14,65,39,0.71))] md:h-[845px] md:rounded-b-[32px]">
      <HeroVideo />
      <HeroContent />
      <div className="absolute box-border caret-transparent h-[100px] max-w-20 w-full z-[4] right-[0%] top-[0%] md:h-auto md:max-w-none md:w-auto">
        <img
          src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6769d15882d31372a6582687_earth.avif"
          alt=""
          className="box-border caret-transparent inline-block max-w-full"
        />
      </div>
      <div className="absolute items-end box-border caret-transparent flex h-[100px] justify-start max-w-20 w-full left-[0%] bottom-[0%] md:[align-items:normal] md:block md:h-auto md:justify-normal md:max-w-none md:w-auto">
        <img
          src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/674d7289f26b0c0ef65da954_Cube.avif"
          alt=""
          className="box-border caret-transparent block blur-[2.5px] max-w-full min-h-[auto] min-w-[auto] md:inline-block md:min-h-0 md:min-w-0"
        />
      </div>
      <div className="absolute items-start box-border caret-transparent flex h-[200px] justify-end max-w-[260px] right-[-10%] top-[-2%] w-full z-[1] md:h-auto md:max-w-none md:right-[-6%] md:top-[-3%] md:w-auto">
        <img
          src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6798a3cca97b5f56d4a2f0ca_Ellipse 36.svg"
          alt=""
          className="box-border caret-transparent h-full max-w-full w-full"
        />
      </div>
    </section>
  );
};
