import { NavbarLogo } from "@/integrations/industry-detail/sections/FixedNavbar/components/NavbarLogo";
import { NavbarLink } from "@/integrations/industry-detail/sections/FixedNavbar/components/NavbarLink";
import { NavbarCTA } from "@/integrations/industry-detail/sections/FixedNavbar/components/NavbarCTA";

export const NavbarContent = () => {
  return (
    <nav className="relative box-border caret-transparent grid grid-cols-[1fr_1fr_92px_1fr_1fr] z-[2] pt-4 pb-[22px] px-0 rounded-2xl md:grid-cols-[1fr_1fr_auto_1fr_1fr] md:p-2">
      <img
        src="https://c.animaapp.com/mmfoqfr1V2uuVb/assets/icon-1.svg"
        alt="Icon"
        className="absolute box-border caret-transparent block h-[92px] pointer-events-none translate-x-[-50.0%] align-baseline w-screen left-2/4 top-[0%] md:hidden md:transform-none md:w-[375px]"
      />
      <NavbarLogo />
      <NavbarLink
        href="/services"
        iconSrc="https://c.animaapp.com/mmfoqfr1V2uuVb/assets/icon-3.svg"
        text="Services"
        variant="md:hidden md:min-h-0 md:min-w-0"
      />
      <div className="relative items-center box-border caret-transparent hidden justify-center text-left mx-auto md:contents">
        <div
          role="button"
          className="relative text-neutral-800 box-border caret-transparent contents text-nowrap align-top mx-auto pl-5 pr-10 py-5"
        >
          <a
            href="/services"
            className="relative text-zinc-50 text-[12.8px] items-center box-border caret-transparent gap-x-2 flex flex-col justify-center tracking-[0.256px] leading-[19.2px] max-w-full min-h-0 min-w-0 gap-y-2 text-nowrap w-full my-0 p-[5px] md:text-base md:tracking-[0.32px] md:leading-6 md:min-h-[auto] md:min-w-[auto] md:-my-2"
          >
            <img
              src="https://c.animaapp.com/mmfoqfr1V2uuVb/assets/icon-3.svg"
              alt="Icon"
              className="text-2xl box-border caret-transparent block shrink-0 h-6 tracking-[0.256px] leading-9 text-nowrap align-baseline w-6 md:hidden md:tracking-[0.32px]"
            />
            <div className="text-[12.8px] box-border caret-transparent tracking-[0.256px] leading-[19.2px] min-h-0 min-w-0 text-nowrap md:text-base md:tracking-[0.32px] md:leading-6 md:min-h-[auto] md:min-w-[auto]">
              Services
            </div>
          </a>
        </div>
      </div>
      <NavbarCTA />
      <NavbarLink
        href="/contact"
        iconSrc="https://c.animaapp.com/mmfoqfr1V2uuVb/assets/icon-7.svg"
        text="Contact"
        variant=""
      />
      <NavbarLink
        iconSrc="https://c.animaapp.com/mmfoqfr1V2uuVb/assets/icon-8.svg"
        text="More"
        variant=""
        isButton={true}
      />
      <div className="absolute bg-neutral-950 shadow-[rgba(48,255,151,0.4)_0px_3px_4px_0px_inset] box-border caret-transparent pointer-events-none z-[-1] rounded-2xl inset-[0%]"></div>
    </nav>
  );
};
