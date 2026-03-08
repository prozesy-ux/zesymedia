import { NavbarLogo } from "@/integrations/industry-page/sections/FixedNavbar/components/NavbarLogo";
import { NavbarLink } from "@/integrations/industry-page/sections/FixedNavbar/components/NavbarLink";
import { DesktopNavbarLink } from "@/integrations/industry-page/sections/FixedNavbar/components/DesktopNavbarLink";
import { StartProjectButton } from "@/integrations/industry-page/sections/FixedNavbar/components/StartProjectButton";
import { MobileNavbarMenu } from "@/integrations/industry-page/sections/FixedNavbar/components/MobileNavbarMenu";

export const NavbarContent = () => {
  return (
    <nav className="relative box-border caret-transparent grid grid-cols-[1fr_1fr_92px_1fr_1fr] z-[2] pt-4 pb-[22px] px-0 rounded-2xl md:grid-cols-[1fr_1fr_auto_1fr_1fr] md:p-2">
      <NavbarLogo />
      <NavbarLink
        href="https://www.designmonks.co/projects"
        iconSrc="https://c.animaapp.com/mlfdctysFhPPqn/assets/icon-2.svg"
        label="Projects"
      />
      <NavbarLink
        href="https://www.designmonks.co/services"
        iconSrc="https://c.animaapp.com/mlfdctysFhPPqn/assets/icon-3.svg"
        label="Services"
        linkVariant="min-h-[auto] min-w-[auto] md:hidden md:min-h-0 md:min-w-0"
        labelVariant="min-h-[auto] min-w-[auto] md:inline md:min-h-0 md:min-w-0"
      />
      <DesktopNavbarLink />
      <StartProjectButton />
      <NavbarLink
        href="/contact"
        iconSrc="https://c.animaapp.com/mlfdctysFhPPqn/assets/icon-8.svg"
        label="Contact"
      />
      <MobileNavbarMenu />
      <div className="absolute bg-neutral-950 shadow-[rgba(48,255,151,0.4)_0px_3px_4px_0px_inset] box-border caret-transparent pointer-events-none z-[-1] rounded-2xl inset-[0%]"></div>
    </nav>
  );
};
