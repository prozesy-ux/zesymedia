import { ServicesDropdown } from "@/sections/Navbar/components/ServicesDropdown";
    import { MoreDropdown } from "@/sections/Navbar/components/MoreDropdown";

    export const Navbar = () => {
      return (
        <div className="fixed box-border caret-transparent max-w-none z-[99999] mx-auto pb-0 bottom-[0%] inset-x-[0%] md:max-w-[713px] md:pb-6">
          <nav className="relative box-border caret-transparent grid grid-cols-[1fr_1fr_92px_1fr_1fr] z-[2] pt-4 pb-[22px] px-0 rounded-2xl md:grid-cols-[1fr_1fr_auto_1fr_1fr] md:p-2">
            <img
              src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-1.svg"
              alt="Icon"
              className="absolute box-border caret-transparent block h-[92px] pointer-events-none translate-x-[-50.0%] w-screen left-2/4 top-[0%] md:hidden md:transform-none md:w-[375px]"
            />
            <a
              href="/projects"
              className="relative text-zinc-50 text-[12.8px] items-center box-border caret-transparent gap-x-2 flex flex-col justify-center tracking-[0.256px] leading-[19.2px] max-w-full gap-y-2 w-full p-[5px] md:text-base md:tracking-[0.32px] md:leading-6 hover:text-violet-600 transition-colors"
            >
              <img
                src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-2.svg"
                alt="Icon"
                className="text-2xl box-border caret-transparent block shrink-0 h-6 tracking-[0.256px] leading-9 w-6 md:hidden md:tracking-[0.32px]"
              />
              <span className="text-[12.8px] box-border caret-transparent block tracking-[0.256px] leading-[19.2px] md:text-base md:tracking-[0.32px] md:leading-6">
                Projects
              </span>
            </a>
            
            {/* Mobile Services Link */}
            <a
              href="/services"
              className="relative text-zinc-50 text-[12.8px] items-center box-border caret-transparent gap-x-2 flex flex-col justify-center tracking-[0.256px] leading-[19.2px] max-w-full min-h-[auto] min-w-[auto] gap-y-2 w-full p-[5px] md:hidden md:tracking-[0.32px] md:leading-6 md:min-h-0 md:min-w-0"
            >
              <img
                src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-3.svg"
                alt="Icon"
                className="text-2xl box-border caret-transparent block shrink-0 h-6 tracking-[0.256px] leading-9 w-6 md:hidden md:tracking-[0.32px]"
              />
              <span className="text-[12.8px] box-border caret-transparent block tracking-[0.256px] leading-[19.2px] min-h-[auto] min-w-[auto] md:text-base md:inline md:tracking-[0.32px] md:leading-6 md:min-h-0 md:min-w-0">
                Services
              </span>
            </a>

            {/* Desktop Services Dropdown */}
            <div className="relative group hidden md:flex justify-center w-full">
              <a
                href="/services"
                className="relative text-zinc-50 text-base items-center box-border caret-transparent gap-x-2 flex flex-col justify-center tracking-[0.32px] leading-6 w-full p-[5px] group-hover:text-violet-600 transition-colors"
              >
                <span className="block">Services</span>
              </a>
              <ServicesDropdown />
            </div>

            <a
              href="/contact"
              className="relative group text-zinc-50 text-base font-bold items-center box-border caret-transparent flex h-16 justify-center justify-self-center tracking-[0.32px] leading-6 max-w-full translate-y-[-60.0%] w-16 rounded-[18px] md:h-auto md:justify-self-auto md:transform-none md:w-auto md:rounded-lg overflow-hidden"
            >
              {/* Animated Gradient Border */}
              <div className="absolute inset-[-100%] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] animate-[spin_2s_linear_infinite]" />
              
              {/* Inner Background */}
              <div className="absolute inset-[1px] bg-neutral-950 rounded-[17px] md:rounded-[7px] z-0" />

              {/* Content */}
              <div className="relative items-center box-border caret-transparent gap-x-2 flex h-full justify-center gap-y-2 w-full z-10 p-[5px] md:px-8 md:py-4">
                <img
                  src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-6.svg"
                  alt="Icon"
                  className="text-[32px] box-border caret-transparent shrink-0 h-8 leading-[48px] w-8 md:text-2xl md:h-6 md:leading-9 md:w-6"
                />
                <span className="box-border caret-transparent hidden min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]">
                  Start a Project
                </span>
                <img
                  src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-7.svg"
                  alt="Icon"
                  className="absolute text-white/50 box-border caret-transparent blur-[2.5px] h-16 pointer-events-none translate-x-[50.0%] translate-y-[-50.0%] w-16 right-[0%] top-[0%]"
                />
              </div>
            </a>
            <a
              href="/pricing"
              className="relative text-zinc-50 text-[12.8px] items-center box-border caret-transparent gap-x-2 flex flex-col justify-center tracking-[0.256px] leading-[19.2px] max-w-full gap-y-2 w-full p-[5px] md:text-base md:tracking-[0.32px] md:leading-6 hover:text-violet-600 transition-colors"
            >
              <img
                src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-8.svg"
                alt="Icon"
                className="text-2xl box-border caret-transparent block shrink-0 h-6 tracking-[0.256px] leading-9 w-6 md:hidden md:tracking-[0.32px]"
              />
              <span className="text-[12.8px] box-border caret-transparent block tracking-[0.256px] leading-[19.2px] md:text-base md:tracking-[0.32px] md:leading-6">
                Pricing
              </span>
            </a>
            <div className="relative group flex justify-center w-full">
              <a
                href="/more"
                className="relative text-zinc-50 text-[12.8px] items-center box-border caret-transparent gap-x-2 flex flex-col justify-center tracking-[0.256px] leading-[19.2px] max-w-full gap-y-2 w-full p-[5px] md:text-base md:tracking-[0.32px] md:leading-6 group-hover:text-violet-600 transition-colors"
              >
                <img
                  src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-3.svg"
                  alt="Icon"
                  className="text-2xl box-border caret-transparent block shrink-0 h-6 tracking-[0.256px] leading-9 w-6 md:hidden md:tracking-[0.32px]"
                />
                <span className="text-[12.8px] box-border caret-transparent block tracking-[0.256px] leading-[19.2px] md:text-base md:tracking-[0.32px] md:leading-6">
                  More
                </span>
              </a>
              <MoreDropdown />
            </div>
            <div className="absolute bg-neutral-950 border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)] box-border caret-transparent pointer-events-none z-[-1] rounded-t-2xl rounded-b-none inset-[0%] md:rounded-b-2xl"></div>
          </nav>
        </div>
      );
    };
