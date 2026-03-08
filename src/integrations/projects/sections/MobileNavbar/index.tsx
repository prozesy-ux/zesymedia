import { NavbarLogo } from "@/integrations/projects/sections/MobileNavbar/components/NavbarLogo";
import { NavLink } from "@/integrations/projects/sections/MobileNavbar/components/NavLink";
import { StartProjectButton } from "@/integrations/projects/sections/MobileNavbar/components/StartProjectButton";
import { MoreMenu } from "@/integrations/projects/sections/MobileNavbar/components/MoreMenu";

export const MobileNavbar = () => {
  return (
    <div className="fixed box-border caret-transparent max-w-none z-[99999] mx-auto pb-6 bottom-[0%] inset-x-[0%] md:max-w-[713px]">
      <nav className="relative box-border caret-transparent grid grid-cols-[1fr_1fr_92px_1fr_1fr] z-[2] pt-4 pb-[22px] px-0 rounded-2xl md:grid-cols-[1fr_1fr_auto_1fr_1fr] md:p-2">
        <NavbarLogo />
        <NavLink
          href="https://www.designmonks.co/projects"
          iconSrc="https://c.animaapp.com/mmfuclz4syuQ81/assets/icon-2.svg"
          label="Projects"
        />
        <NavLink
          href="https://www.designmonks.co/services"
          iconSrc="https://c.animaapp.com/mmfuclz4syuQ81/assets/icon-3.svg"
          label="Services"
          variant="md:hidden"
          textVariant="md:inline md:min-h-0 md:min-w-0"
        />
        <div className="relative items-center box-border caret-transparent hidden justify-center text-left mx-auto md:contents">
          <div
            role="button"
            className="relative text-neutral-800 box-border caret-transparent contents text-nowrap align-top mx-auto pl-5 pr-10 py-5"
          >
            <a
              href="https://www.designmonks.co/services"
              className="relative text-zinc-50 text-[12.8px] items-center box-border caret-transparent gap-x-2 flex flex-col justify-center tracking-[0.256px] leading-[19.2px] max-w-full min-h-0 min-w-0 gap-y-2 text-nowrap w-full my-0 p-[5px] md:text-base md:tracking-[0.32px] md:leading-6 md:min-h-[auto] md:min-w-[auto] md:-my-2 hover:text-violet-400 hover:border-violet-400"
            >
              <img
                src="https://c.animaapp.com/mmfuclz4syuQ81/assets/icon-3.svg"
                alt="Icon"
                className="text-2xl box-border caret-transparent block shrink-0 h-6 tracking-[0.256px] leading-9 text-nowrap align-baseline w-6 md:hidden md:tracking-[0.32px]"
              />
              <div className="text-[12.8px] box-border caret-transparent tracking-[0.256px] leading-[19.2px] min-h-0 min-w-0 text-nowrap md:text-base md:tracking-[0.32px] md:leading-6 md:min-h-[auto] md:min-w-[auto]">
                Services
              </div>
            </a>
          </div>
        </div>
        <StartProjectButton />
        <NavLink
          href="/contact"
          iconSrc="https://c.animaapp.com/mmfuclz4syuQ81/assets/icon-7.svg"
          label="Contact"
        />
        <MoreMenu />
        <div className="absolute bg-neutral-950 shadow-[rgba(48,255,151,0.4)_0px_3px_4px_0px_inset] box-border caret-transparent pointer-events-none z-[-1] rounded-2xl inset-[0%]"></div>
      </nav>
    </div>
  );
};
