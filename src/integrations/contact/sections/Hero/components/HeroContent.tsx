import { Breadcrumb } from "@/integrations/contact/components/Breadcrumb";

export const HeroContent = () => {
  return (
    <div className="relative items-center box-border caret-transparent flex-col h-full justify-center text-left w-full z-[2] px-[15px] md:px-0">
      <div className="relative items-center box-border caret-transparent flex flex-col text-center z-[2]">
        <div className="box-border caret-transparent mt-7 mb-5 md:mb-14">
          <a
            href="https://prozesy.com/"
            className="text-violet-600 box-border caret-transparent inline-block max-w-full"
          >
            <img
              src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/679a08604def1d26213e6133_designmonks (1).svg"
              alt=""
              className="box-border caret-transparent inline-block max-w-full"
            />
          </a>
        </div>
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
