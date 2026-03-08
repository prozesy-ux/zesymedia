export const MobileNavbar = () => {
  return (
    <div className="fixed box-border caret-transparent max-w-none z-[99999] mx-auto pb-6 bottom-[0%] inset-x-[0%] md:max-w-[713px]">
      <nav className="relative box-border caret-transparent grid grid-cols-[1fr_1fr_92px_1fr_1fr] z-[2] pt-4 pb-[22px] px-0 rounded-2xl md:grid-cols-[1fr_1fr_auto_1fr_1fr] md:p-2">
        <img
          src="https://c.animaapp.com/mlfdffn0RwPDKV/assets/icon-1.svg"
          alt="Icon"
          className="absolute box-border caret-transparent block h-[92px] pointer-events-none translate-x-[-50.0%] w-screen left-2/4 top-[0%] md:hidden md:transform-none md:w-[375px]"
        />
        <a
          href="https://prozesy.com/projects"
          className="relative text-zinc-50 text-[12.8px] items-center box-border caret-transparent gap-x-2 flex flex-col justify-center tracking-[0.256px] leading-[19.2px] max-w-full gap-y-2 w-full p-[5px] md:text-base md:tracking-[0.32px] md:leading-6"
        >
          <img
            src="https://c.animaapp.com/mlfdffn0RwPDKV/assets/icon-2.svg"
            alt="Icon"
            className="text-2xl box-border caret-transparent block shrink-0 h-6 tracking-[0.256px] leading-9 w-6 md:hidden md:tracking-[0.32px]"
          />
          <span className="text-[12.8px] box-border caret-transparent block tracking-[0.256px] leading-[19.2px] md:text-base md:tracking-[0.32px] md:leading-6">
            Projects
          </span>
        </a>
        <a
          href="/services"
          className="relative text-zinc-50 text-[12.8px] items-center box-border caret-transparent gap-x-2 flex flex-col justify-center tracking-[0.256px] leading-[19.2px] max-w-full min-h-[auto] min-w-[auto] gap-y-2 w-full p-[5px] md:text-base md:hidden md:tracking-[0.32px] md:leading-6 md:min-h-0 md:min-w-0"
        >
          <img
            src="https://c.animaapp.com/mlfdffn0RwPDKV/assets/icon-3.svg"
            alt="Icon"
            className="text-2xl box-border caret-transparent block shrink-0 h-6 tracking-[0.256px] leading-9 w-6 md:hidden md:tracking-[0.32px]"
          />
          <span className="text-[12.8px] box-border caret-transparent block tracking-[0.256px] leading-[19.2px] min-h-[auto] min-w-[auto] md:text-base md:inline md:tracking-[0.32px] md:leading-6 md:min-h-0 md:min-w-0">
            Services
          </span>
        </a>
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
                src="https://c.animaapp.com/mlfdffn0RwPDKV/assets/icon-3.svg"
                alt="Icon"
                className="text-2xl box-border caret-transparent block shrink-0 h-6 tracking-[0.256px] leading-9 text-nowrap w-6 md:hidden md:tracking-[0.32px]"
              />
              <div className="text-[12.8px] box-border caret-transparent tracking-[0.256px] leading-[19.2px] min-h-0 min-w-0 text-nowrap md:text-base md:tracking-[0.32px] md:leading-6 md:min-h-[auto] md:min-w-[auto]">
                Services
              </div>
            </a>
          </div>
        </div>
        <a
          href="/contact"
          className="relative text-zinc-50 text-base font-bold items-center bg-violet-600 box-border caret-transparent flex h-16 justify-center justify-self-center tracking-[0.32px] leading-6 max-w-full translate-y-[-60.0%] w-16 rounded-[18px] md:h-auto md:justify-self-auto md:transform-none md:w-auto md:rounded-lg"
        >
          <div className="absolute bg-violet-600 bg-[conic-gradient(at_8.04%_51.79%,rgb(251,250,246)_0deg,rgba(251,250,246,0)_360deg),none] bg-size-[auto,auto] box-border caret-transparent pointer-events-none bg-[position:0%,0%_0%,0%] inset-[0%]"></div>
          <div className="relative items-center bg-neutral-950 box-border caret-transparent gap-x-2 flex h-full justify-center gap-y-2 w-full z-0 p-[5px] md:px-8 md:py-4">
            <div className="absolute bg-[linear-gradient(rgb(89,45,181)_25%,rgb(125,64,255))] shadow-[rgba(255,255,255,0.72)_0px_2px_3px_0px_inset] box-border caret-transparent pointer-events-none z-[-1] inset-[0%]"></div>
            <img
              src="https://c.animaapp.com/mlfdffn0RwPDKV/assets/icon-6.svg"
              alt="Icon"
              className="text-[32px] box-border caret-transparent shrink-0 h-8 leading-[48px] w-8 md:text-2xl md:h-6 md:leading-9 md:w-6"
            />
            <span className="box-border caret-transparent hidden min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]">
              Start a Project
            </span>
            <img
              src="https://c.animaapp.com/mlfdffn0RwPDKV/assets/icon-7.svg"
              alt="Icon"
              className="absolute text-white/50 box-border caret-transparent blur-[2.5px] h-16 pointer-events-none translate-x-[50.0%] translate-y-[-50.0%] w-16 right-[0%] top-[0%]"
            />
          </div>
        </a>
        <a
          href="/contact"
          className="relative text-zinc-50 text-[12.8px] items-center box-border caret-transparent gap-x-2 flex flex-col justify-center tracking-[0.256px] leading-[19.2px] max-w-full gap-y-2 w-full p-[5px] md:text-base md:tracking-[0.32px] md:leading-6"
        >
          <img
            src="https://c.animaapp.com/mlfdffn0RwPDKV/assets/icon-8.svg"
            alt="Icon"
            className="text-2xl box-border caret-transparent block shrink-0 h-6 tracking-[0.256px] leading-9 w-6 md:hidden md:tracking-[0.32px]"
          />
          <span className="text-[12.8px] box-border caret-transparent block tracking-[0.256px] leading-[19.2px] md:text-base md:tracking-[0.32px] md:leading-6">
            Pricing
          </span>
        </a>
        <div className="relative items-center box-border caret-transparent contents justify-center text-left mx-auto">
          <div
            role="button"
            className="relative text-zinc-50 text-[12.8px] items-center box-border caret-transparent gap-x-2 flex flex-col justify-center tracking-[0.256px] leading-[19.2px] gap-y-2 text-nowrap align-top w-full mx-auto my-0 p-[5px] md:text-base md:tracking-[0.32px] md:leading-6 md:-my-2"
          >
            <img
              src="https://c.animaapp.com/mlfdffn0RwPDKV/assets/icon-9.svg"
              alt="Icon"
              className="text-2xl box-border caret-transparent block shrink-0 h-6 tracking-[0.256px] leading-9 text-nowrap w-6 md:hidden md:tracking-[0.32px]"
            />
            <div className="text-[12.8px] box-border caret-transparent tracking-[0.256px] leading-[19.2px] text-nowrap md:text-base md:tracking-[0.32px] md:leading-6">
              More
            </div>
          </div>
        </div>
        <div className="absolute bg-neutral-950 shadow-[rgba(48,255,151,0.4)_0px_3px_4px_0px_inset] box-border caret-transparent pointer-events-none z-[-1] rounded-2xl inset-[0%]"></div>
      </nav>
    </div>
  );
};
