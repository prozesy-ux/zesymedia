import { FooterNewsletter } from "@/sections/Footer/components/FooterNewsletter";
import { FooterLocations } from "@/sections/Footer/components/FooterLocations";
import { FooterLinks } from "@/sections/Footer/components/FooterLinks";

export const Footer = () => {
  return (
    <footer className="relative box-border caret-transparent">
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent">
          <FooterNewsletter />
        </div>
        <div className="box-border caret-transparent">
          <FooterLocations />
        </div>
        <div className="box-border caret-transparent">
          <div className="bg-neutral-950 box-border caret-transparent">
            <FooterLinks />
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
      </div>
      <div className="[mask-image:linear-gradient(to_top,rgb(0,0,0)_0%,rgb(0,0,0)_10%,rgba(0,0,0,0.8)_40%,rgba(0,0,0,0.5)_80%,rgba(0,0,0,0)_100%)] fixed backdrop-blur-[15px] shadow-[rgba(255,255,255,0.2)_0px_10px_30px_0px] box-border caret-transparent hidden h-[150px] pointer-events-none w-full z-[777] bottom-[0%] inset-x-[0%] md:block">
        <div className="box-border caret-transparent before:accent-auto before:caret-transparent before:text-zinc-800 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-none before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-outfit_variablefont_wght after:accent-auto after:caret-transparent after:clear-both after:text-zinc-800 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-none after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-outfit_variablefont_wght"></div>
      </div>
    </footer>
  );
};
