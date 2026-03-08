import { FooterNav } from "@/integrations/industry-page/sections/Footer/components/FooterNav";
import { FooterBadges } from "@/integrations/industry-page/sections/Footer/components/FooterBadges";
import { FooterCopyright } from "@/integrations/industry-page/sections/Footer/components/FooterCopyright";

export const FooterLinks = () => {
  return (
    <div className="box-border caret-transparent">
      <div className="bg-neutral-950 box-border caret-transparent">
        <div className="box-border caret-transparent z-0 pt-[60px] px-5 md:px-[94px]">
          <div className="box-border caret-transparent max-w-[1252px] w-full z-[1] mx-auto">
            <div className="box-border caret-transparent gap-x-8 flex flex-col gap-y-8 md:gap-x-14 md:gap-y-14">
              <FooterNav />
              <FooterBadges />
              <FooterCopyright />
            </div>
          </div>
        </div>
        <img
          alt=""
          src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67cb19c5fc7cea1c4b1fc709_9e07db1ecae6aafdfe7fe0fa6c077ee6_FOOTER.avif"
          className="box-border caret-transparent hidden h-full max-w-full w-full md:inline-block"
        />
        <img
          alt=""
          src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/68a1bbb5ef83f7891cb7fcd0_Group 2147224414.avif"
          className="box-border caret-transparent block h-full max-w-full w-full pb-6 md:hidden md:pb-0"
        />
      </div>
    </div>
  );
};
