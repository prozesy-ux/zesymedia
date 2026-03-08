export type NavLinkProps = {
  href: string;
  iconSrc: string;
  label: string;
  variant?: string;
  textVariant?: string;
};

export const NavLink = (props: NavLinkProps) => {
  return (
    <a
      href={props.href}
      className={`relative text-zinc-50 text-[12.8px] items-center box-border caret-transparent gap-x-2 flex flex-col justify-center tracking-[0.256px] leading-[19.2px] max-w-full min-h-[auto] min-w-[auto] gap-y-2 w-full p-[5px] md:text-base md:tracking-[0.32px] md:leading-6 hover:text-violet-400 hover:border-violet-400 ${props.variant || ""}`}
    >
      <img
        src={props.iconSrc}
        alt="Icon"
        className="text-2xl box-border caret-transparent block shrink-0 h-6 tracking-[0.256px] leading-9 align-baseline w-6 md:hidden md:tracking-[0.32px]"
      />
      <span
        className={`text-[12.8px] box-border caret-transparent block tracking-[0.256px] leading-[19.2px] min-h-[auto] min-w-[auto] md:text-base md:tracking-[0.32px] md:leading-6 ${props.textVariant || ""}`}
      >
        {props.label}
      </span>
    </a>
  );
};
