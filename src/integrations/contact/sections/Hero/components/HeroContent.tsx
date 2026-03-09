import { Breadcrumb } from "@/integrations/contact/components/Breadcrumb";

export const HeroContent = () => {
  return (
    <div className="relative items-center box-border caret-transparent flex-col h-full justify-center text-left w-full z-[2] px-[15px] md:px-0">
      <div className="relative items-center box-border caret-transparent flex flex-col text-center z-[2]">
        <div className="h-[70px] md:h-[96px]" />
        <Breadcrumb />
        <div className="box-border caret-transparent mt-4">
          <h1 className="text-zinc-50 text-[32px] font-bold box-border caret-transparent leading-[38.4px] capitalize font-redhatdisplay_variablefont_wght md:text-[56px] md:leading-[67.2px]">
            Have a Question or
            <br className="text-[32px] box-border caret-transparent leading-[38.4px] md:text-[56px] md:leading-[67.2px]" />
            <span className="text-[28px] italic box-border caret-transparent inline-block leading-[38.4px] font-playfairdisplay_variablefont_wght md:text-[56px] md:inline md:leading-[67.2px]">
              Just Want to Chat?
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};
