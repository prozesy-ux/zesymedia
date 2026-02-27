import { HeroVideo } from "@/blog_sections/HeroSection/components/HeroVideo";

export const HeroSection = () => {
  return (
    <section className="relative bg-neutral-950/90 bg-[linear-gradient(rgba(48,255,151,0)_30%,rgba(48,255,151,0.33))] box-border caret-transparent overflow-hidden rounded-b-[20px] md:rounded-b-[32px]">
      <div className="box-border caret-transparent">
        <HeroVideo />
      </div>
      <div className="absolute box-border caret-transparent max-w-44 pointer-events-none z-0 right-[0%] top-[0%] md:max-w-none">
        <img
          src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/681c5174b41dc82eef9c661e_Group 2147225318.avif"
          alt=""
          className="aspect-[auto_240_/_192] box-border caret-transparent inline-block h-48 max-w-full w-60"
        />
      </div>
      <div className="absolute items-end box-border caret-transparent hidden h-[100px] justify-start max-w-20 pointer-events-none w-full left-[0%] bottom-[0%] md:[align-items:normal] md:block md:h-auto md:justify-normal md:max-w-none md:w-auto">
        <img
          src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/680abee77b8b1a005391c27b_d06c4296b2ae60af25ab36e28167df46_box element.avif"
          alt=""
          className="box-border caret-transparent inline-block max-w-full"
        />
      </div>
    </section>
  );
};
