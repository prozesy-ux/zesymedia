export const NavbarButton = () => {
  return (
    <a
      href="https://www.designmonks.co/contact"
      className="relative text-zinc-50 text-base font-bold items-center bg-violet-600 box-border caret-transparent flex h-16 justify-center justify-self-center tracking-[0.32px] leading-6 max-w-full translate-y-[-60.0%] w-16 rounded-[18px] md:h-auto md:justify-self-auto md:transform-none md:w-auto md:rounded-lg"
    >
      <div className="absolute bg-violet-600 bg-[conic-gradient(at_8.04%_51.79%,rgb(251,250,246)_0deg,rgba(251,250,246,0)_360deg),none] bg-size-[auto,auto] box-border caret-transparent pointer-events-none bg-[position:0%,0%_0%,0%] inset-[0%]"></div>
      <div className="relative items-center bg-neutral-950 box-border caret-transparent gap-x-2 flex h-full justify-center gap-y-2 w-full z-0 p-[5px] md:px-8 md:py-4">
        <div className="absolute bg-[linear-gradient(rgb(89,45,181)_25%,rgb(125,64,255))] shadow-[rgba(255,255,255,0.72)_0px_2px_3px_0px_inset] box-border caret-transparent pointer-events-none z-[-1] inset-[0%]"></div>
        <img
          src="https://c.animaapp.com/mlcfrtj47me9da/assets/icon-6.svg"
          alt="Icon"
          className="text-[32px] box-border caret-transparent shrink-0 h-8 leading-[48px] w-8 md:text-2xl md:h-6 md:leading-9 md:w-6"
        />
        <span className="box-border caret-transparent hidden min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]">
          Start a Project
        </span>
        <img
          src="https://c.animaapp.com/mlcfrtj47me9da/assets/icon-7.svg"
          alt="Icon"
          className="absolute text-white/50 box-border caret-transparent blur-[2.5px] h-16 pointer-events-none translate-x-[50.0%] translate-y-[-50.0%] w-16 right-[0%] top-[0%]"
        />
      </div>
    </a>
  );
};
