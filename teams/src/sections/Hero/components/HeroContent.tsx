import { Breadcrumb } from "@/components/Breadcrumb";

export const HeroContent = () => {
  return (
    <div className="relative items-center box-border caret-transparent flex-col h-full justify-center text-left w-full z-[2] pb-[92px] px-5 md:pb-[560px] md:px-[94px]">
      <div className="items-center box-border caret-transparent gap-x-4 flex flex-col justify-start gap-y-4 text-center">
        <div className="h-[70px] md:h-[96px]" />
        <Breadcrumb />
        <div className="text-zinc-50 box-border caret-transparent">
          <h1 className="text-[32px] font-bold box-border caret-transparent leading-[38.4px] font-redhatdisplay_variablefont_wght md:text-[56px] md:leading-[67.2px]">
            Our Awesome{" "}
            <br className="text-[32px] box-border caret-transparent leading-[38.4px] md:text-[56px] md:leading-[67.2px]" />
            ‍
            <em className="text-[32px] italic box-border caret-transparent leading-[38.4px] capitalize font-playfairdisplay_variablefont_wght md:text-[56px] md:leading-[67.2px]">
              Monks family
            </em>
          </h1>
        </div>
      </div>
    </div>
  );
};
