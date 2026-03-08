import { NavbarLogo } from "@/sections/Navbar/components/NavbarLogo";
import { NavbarLinks } from "@/sections/Navbar/components/NavbarLinks";
import { NavbarCTA } from "@/sections/Navbar/components/NavbarCTA";

export const Navbar = () => {
  return (
    <>
      {/* Backdrop for dropdowns */}
      <div
        id="navBackdrop"
        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[99998] opacity-0 invisible transition-all duration-300 pointer-events-none"
      />
      
      <div
        data-wf--new-navbar--variant="primary"
        className="rd-navbar_wrapper fixed box-border caret-transparent max-w-none z-[99999] mx-auto inset-x-[0%] md:max-w-[850px]"
      >
        <nav className="rd-navbar relative box-border caret-transparent grid grid-cols-[1fr_1fr_92px_1fr_1fr] z-[2] pt-4 pb-[22px] px-0 rounded-2xl md:grid-cols-[1fr_1fr_auto_1fr_1fr] md:p-2">
          <NavbarLogo />

          <NavbarLinks
            href="/projects"
            iconSrc="https://c.animaapp.com/mmfqa5b2QIeLaz/assets/icon-2.svg"
            label="Projects"
          />

          <NavbarLinks
            href="/services"
            iconSrc="https://c.animaapp.com/mmfqa5b2QIeLaz/assets/icon-3.svg"
            label="Services"
            variant="min-h-[auto] min-w-[auto] md:hidden md:min-h-0 md:min-w-0"
            textVariant="min-h-[auto] min-w-[auto] md:inline md:min-h-0 md:min-w-0"
          />

          <NavbarLinks
            href="/services"
            iconSrc="https://c.animaapp.com/mmfqa5b2QIeLaz/assets/icon-3.svg"
            label="Services"
            variant="hidden md:contents"
            isActive={true}
            isDropdown={true}
          />

          <NavbarCTA />

          <NavbarLinks
            href="/pricing"
            iconSrc="https://c.animaapp.com/mmfqa5b2QIeLaz/assets/icon-4.svg"
            label="Pricing"
          />

          <NavbarLinks
            iconSrc="https://c.animaapp.com/mmfqa5b2QIeLaz/assets/icon-8.svg"
            label="More"
            isDropdown={true}
          />

          <div className="rd-navbar_bg absolute bg-neutral-950 shadow-[rgba(48,255,151,0.4)_0px_3px_4px_0px_inset] box-border caret-transparent pointer-events-none z-[-1] rounded-2xl inset-[0%]"></div>
        </nav>
      </div>
    </>
  );
};
