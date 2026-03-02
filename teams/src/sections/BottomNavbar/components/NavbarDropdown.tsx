export const NavbarDropdown = () => {
  return (
    <div className="relative items-center box-border caret-transparent contents justify-center text-left mx-auto">
      <div
        role="button"
        className="relative text-zinc-50 text-[12.8px] items-center box-border caret-transparent gap-x-2 flex flex-col justify-center tracking-[0.256px] leading-[19.2px] gap-y-2 text-nowrap align-top w-full mx-auto my-0 p-[5px] md:text-base md:tracking-[0.32px] md:leading-6 md:-my-2 hover:text-violet-400 hover:border-violet-400"
      >
        <img
          src="https://c.animaapp.com/mlcfrtj47me9da/assets/icon-9.svg"
          alt="Icon"
          className="text-2xl box-border caret-transparent block shrink-0 h-6 tracking-[0.256px] leading-9 text-nowrap w-6 md:hidden md:tracking-[0.32px]"
        />
        <div className="text-[12.8px] box-border caret-transparent tracking-[0.256px] leading-[19.2px] text-nowrap md:text-base md:tracking-[0.32px] md:leading-6">
          More
        </div>
      </div>
    </div>
  );
};
