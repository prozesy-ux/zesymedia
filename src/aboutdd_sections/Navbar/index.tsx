import { NavLink } from "@/aboutdd_sections/Navbar/components/NavLink";
import { CTAButton } from "@/aboutdd_components/CTAButton";
import { MobileMenu } from "@/aboutdd_sections/Navbar/components/MobileMenu";

export const Navbar = () => {
  return (
    <div className="fixed box-border caret-transparent max-w-none z-[99999] mx-auto pb-6 bottom-[0%] inset-x-[0%] md:max-w-[713px]">
      <nav className="relative box-border caret-transparent grid grid-cols-[1fr_1fr_92px_1fr_1fr] z-[2] pt-4 pb-[22px] px-0 rounded-2xl md:grid-cols-[1fr_1fr_auto_1fr_1fr] md:p-2">
        <img
          src="https://c.animaapp.com/mlf8vhlmD4U7Ki/assets/icon-1.svg"
          alt="Icon"
          className="absolute box-border caret-transparent block h-[92px] pointer-events-none translate-x-[-50.0%] w-screen left-2/4 top-[0%] md:hidden md:transform-none md:w-[375px]"
        />
        <NavLink
          href="https://prozesy.com/projects"
          iconSrc="https://c.animaapp.com/mlf8vhlmD4U7Ki/assets/icon-2.svg"
          label="Projects"
        />
        <NavLink
          href="https://prozesy.com/services"
          iconSrc="https://c.animaapp.com/mlf8vhlmD4U7Ki/assets/icon-3.svg"
          label="Services"
          linkVariant="min-h-[auto] min-w-[auto] md:hidden md:min-h-0 md:min-w-0"
          labelVariant="min-h-[auto] min-w-[auto] md:inline md:min-h-0 md:min-w-0"
        />
        <div className="relative items-center box-border caret-transparent hidden justify-center text-left mx-auto md:contents">
          <div
            role="button"
            className="relative text-neutral-800 box-border caret-transparent contents text-nowrap align-top mx-auto pl-5 pr-10 py-5"
          >
            <a
              href="https://prozesy.com/services"
              className="relative text-zinc-50 text-[12.8px] items-center box-border caret-transparent gap-x-2 flex flex-col justify-center tracking-[0.256px] leading-[19.2px] max-w-full min-h-0 min-w-0 gap-y-2 text-nowrap w-full my-0 p-[5px] md:text-base md:tracking-[0.32px] md:leading-6 md:min-h-[auto] md:min-w-[auto] md:-my-2"
            >
              <img
                src="https://c.animaapp.com/mlf8vhlmD4U7Ki/assets/icon-3.svg"
                alt="Icon"
                className="text-2xl box-border caret-transparent block shrink-0 h-6 tracking-[0.256px] leading-9 text-nowrap w-6 md:hidden md:tracking-[0.32px]"
              />
              <div className="text-[12.8px] box-border caret-transparent tracking-[0.256px] leading-[19.2px] min-h-0 min-w-0 text-nowrap md:text-base md:tracking-[0.32px] md:leading-6 md:min-h-[auto] md:min-w-[auto]">
                Services
              </div>
            </a>
          </div>
        </div>
        <CTAButton
          href="https://prozesy.com/contact"
          text="Start a Project"
          variant="relative text-zinc-50 text-base font-bold items-center bg-violet-600 box-border caret-transparent flex h-16 justify-center justify-self-center tracking-[0.32px] leading-6 max-w-full translate-y-[-60.0%] w-16 rounded-[18px] md:h-auto md:justify-self-auto md:transform-none md:w-auto md:rounded-lg"
          backgroundVariant="absolute bg-violet-600 bg-[conic-gradient(at_8.04%_51.79%,rgb(251,250,246)_0deg,rgba(251,250,246,0)_360deg),none] bg-size-[auto,auto] box-border caret-transparent pointer-events-none bg-[position:0%,0%_0%,0%] inset-[0%]"
          overlayVariant="relative items-center bg-neutral-950 box-border caret-transparent gap-x-2 flex h-full justify-center gap-y-2 w-full z-0 p-[5px] md:px-8 md:py-4"
          showLeftIcon={true}
          leftIconSrc="https://c.animaapp.com/mlf8vhlmD4U7Ki/assets/icon-6.svg"
          leftIconAlt="Icon"
          showRightIcon={true}
          rightIconSrc="https://c.animaapp.com/mlf8vhlmD4U7Ki/assets/icon-7.svg"
          rightIconAlt="Icon"
        />
        <NavLink
          href="/contact"
          iconSrc="https://c.animaapp.com/mlf8vhlmD4U7Ki/assets/icon-8.svg"
          label="Contact"
        />
        <MobileMenu />
        <div className="absolute bg-neutral-950 shadow-[rgba(48,255,151,0.4)_0px_3px_4px_0px_inset] box-border caret-transparent pointer-events-none z-[-1] rounded-2xl inset-[0%]"></div>
      </nav>
    </div>
  );
};
