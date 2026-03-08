import { NavbarLogo } from "@/integrations/pricing/sections/Navbar/components/NavbarLogo";
import { NavbarLinks } from "@/integrations/pricing/sections/Navbar/components/NavbarLinks";
import { NavbarCTA } from "@/integrations/pricing/sections/Navbar/components/NavbarCTA";

export const Navbar = () => {
  return (
    <div className="fixed box-border caret-transparent max-w-none z-[99999] mx-auto pb-6 bottom-[0%] inset-x-[0%] md:max-w-[713px]">
      <nav className="relative box-border caret-transparent grid grid-cols-[1fr_1fr_92px_1fr_1fr] z-[2] pt-4 pb-[22px] px-0 rounded-2xl md:grid-cols-[1fr_1fr_auto_1fr_1fr] md:p-2">
        <NavbarLogo />
        <NavbarLinks
          href="https://prozesy.com/projects"
          iconSrc="https://c.animaapp.com/mmfqa5b2QIeLaz/assets/icon-2.svg"
          label="Projects"
          variant=""
        />
        <NavbarLinks
          href="https://prozesy.com/services"
          iconSrc="https://c.animaapp.com/mmfqa5b2QIeLaz/assets/icon-3.svg"
          label="Services"
          variant=""
          isActive={true}
          isDropdown={false}
        />
        <NavbarLinks
          href="https://prozesy.com/services"
          iconSrc="https://c.animaapp.com/mmfqa5b2QIeLaz/assets/icon-3.svg"
          label="Services"
          variant="hidden md:contents"
          isActive={true}
          isDropdown={true}
        />
        <NavbarCTA />
        <NavbarLinks
          href="/contact"
          iconSrc="https://c.animaapp.com/mmfqa5b2QIeLaz/assets/icon-7.svg"
          label="Contact"
          variant=""
        />
        <NavbarLinks
          href=""
          iconSrc="https://c.animaapp.com/mmfqa5b2QIeLaz/assets/icon-8.svg"
          label="More"
          variant=""
          isDropdown={true}
          isActive={false}
        />
        <div className="absolute bg-neutral-950 shadow-[rgba(48,255,151,0.4)_0px_3px_4px_0px_inset] box-border caret-transparent pointer-events-none z-[-1] rounded-2xl inset-[0%]"></div>
      </nav>
    </div>
  );
};
