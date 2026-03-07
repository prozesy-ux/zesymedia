export const DesktopMenu = () => {
  return (
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
            src="https://c.animaapp.com/ml6p62229g1sAA/assets/icon-3.svg"
            alt="Icon"
            className="text-2xl box-border caret-transparent block shrink-0 h-6 tracking-[0.256px] leading-9 text-nowrap w-6 md:hidden md:tracking-[0.32px]"
          />
          <div className="text-[12.8px] box-border caret-transparent tracking-[0.256px] leading-[19.2px] min-h-0 min-w-0 text-nowrap md:text-base md:tracking-[0.32px] md:leading-6 md:min-h-[auto] md:min-w-[auto]">
            Services
          </div>
        </a>
      </div>
    </div>
  );
};
