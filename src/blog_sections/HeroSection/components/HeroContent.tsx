import { Breadcrumb } from "@/blog_components/Breadcrumb";
import { SearchForm } from "@/blog_components/forms/SearchForm";

export const HeroContent = () => {
  return (
    <div className="relative items-center box-border caret-transparent flex-col h-full justify-center text-left w-full z-[2] pb-8 px-5 md:pb-20 md:px-[94px]">
      <div className="items-center box-border caret-transparent gap-x-5 flex flex-col justify-start gap-y-5 md:gap-x-10 md:gap-y-10">
        <div className="items-center box-border caret-transparent gap-x-4 flex flex-col justify-start gap-y-4 text-center">
          <div className="items-center box-border caret-transparent flex justify-center z-[99] pt-[27px] pb-[7px] md:py-7">
            <a
              href="https://prozesy.com/"
              className="text-violet-600 box-border caret-transparent block max-w-full"
            >
              <img
                src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/679a08604def1d26213e6133_designmonks (1).svg"
                alt=""
                className="box-border caret-transparent inline-block max-w-full"
              />
            </a>
          </div>
          <Breadcrumb />
          <div className="text-zinc-50 box-border caret-transparent">
            <h1 className="text-[32px] font-bold box-border caret-transparent leading-[38.4px] font-redhatdisplay_variablefont_wght md:text-[56px] md:leading-[67.2px]">
              Your Go-To Source:{" "}
              <br className="text-[32px] box-border caret-transparent leading-[38.4px] md:text-[56px] md:leading-[67.2px]" />
              <em className="text-[32px] italic box-border caret-transparent leading-[38.4px] capitalize font-playfairdisplay_variablefont_wght md:text-[56px] md:leading-[67.2px]">
                Blog Highlights &amp; More
              </em>
            </h1>
          </div>
        </div>
        <div className="items-center box-border caret-transparent flex justify-center max-w-none w-full mx-auto md:max-w-[580px]">
          <SearchForm />
          <div
            role="region"
            aria-label="search success"
            className="bg-zinc-300 box-border caret-transparent hidden text-center p-5"
          >
            <div className="box-border caret-transparent">
              Thank you! Your submission has been received!
            </div>
          </div>
          <div
            role="region"
            aria-label="search failure"
            className="bg-red-100 box-border caret-transparent hidden mt-2.5 p-2.5"
          >
            <div className="box-border caret-transparent">
              Oops! Something went wrong while submitting the form.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
