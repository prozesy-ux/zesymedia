export type NavbarLinkProps = {
  href?: string;
  iconSrc: string;
  text: string;
  variant: string;
  isButton?: boolean;
};

export const NavbarLink = (props: NavbarLinkProps) => {
  if (props.isButton) {
    return (
      <div className="relative items-center box-border caret-transparent contents justify-center text-left mx-auto">
        <div
          role="button"
          className="relative text-zinc-50 text-[12.8px] items-center box-border caret-transparent gap-x-2 flex flex-col justify-center tracking-[0.256px] leading-[19.2px] min-h-[auto] min-w-[auto] gap-y-2 text-nowrap align-top w-full mx-auto my-0 p-[5px] md:text-base md:tracking-[0.32px] md:leading-6 md:-my-2"
        >
          <img
            src={props.iconSrc}
            alt="Icon"
            className="text-2xl box-border caret-transparent block shrink-0 h-6 tracking-[0.256px] leading-9 text-nowrap align-baseline w-6 md:hidden md:tracking-[0.32px]"
          />
          <div className="text-[12.8px] box-border caret-transparent tracking-[0.256px] leading-[19.2px] min-h-[auto] min-w-[auto] text-nowrap md:text-base md:tracking-[0.32px] md:leading-6">
            {props.text}
          </div>
        </div>
      </div>
    );
  }

  return (
    <a
      href={props.href}
      className={`relative text-zinc-50 text-[12.8px] items-center box-border caret-transparent gap-x-2 flex flex-col justify-center tracking-[0.256px] leading-[19.2px] max-w-full min-h-[auto] min-w-[auto] gap-y-2 w-full p-[5px] md:text-base md:tracking-[0.32px] md:leading-6 ${props.variant}`}
    >
      <img
        src={props.iconSrc}
        alt="Icon"
        className="text-2xl box-border caret-transparent block shrink-0 h-6 tracking-[0.256px] leading-9 align-baseline w-6 md:hidden md:tracking-[0.32px]"
      />
      <span
        className={`text-[12.8px] box-border caret-transparent block tracking-[0.256px] leading-[19.2px] min-h-[auto] min-w-[auto] md:text-base md:tracking-[0.32px] md:leading-6 ${props.variant === "md:hidden md:min-h-0 md:min-w-0" ? "md:inline md:min-h-0 md:min-w-0" : ""}`}
      >
        {props.text}
      </span>
    </a>
  );
};
