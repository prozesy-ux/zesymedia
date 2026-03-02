export type TeamMemberCardProps = {
  href: string;
  imageUrl: string;
  imageAlt: string;
  name: string;
  title: string;
};

export const TeamMemberCard = (props: TeamMemberCardProps) => {
  return (
    <a
      href={props.href}
      className="text-black box-border caret-transparent inline-block max-w-full w-full group"
    >
      <div className="box-border caret-transparent overflow-hidden rounded-3xl">
        <img
          src={props.imageUrl}
          alt={props.imageAlt}
          className="aspect-[auto_610_/_917] box-border caret-transparent inline-block h-full max-w-full object-cover w-full transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
      </div>
      <div className="text-neutral-950 items-center box-border caret-transparent gap-x-1 flex flex-col gap-y-1 text-center mt-3 md:gap-x-2 md:gap-y-2 md:mt-6">
        <h3 className="text-xl font-bold box-border caret-transparent leading-6 font-redhatdisplay_variablefont_wght md:text-[32px] md:leading-[38.4px] transition-colors duration-300 group-hover:text-violet-600">
          {props.name}
        </h3>
        <div className="text-neutral-500 box-border caret-transparent">
          <div className="text-xl box-border caret-transparent tracking-[0.48px] leading-[30px] md:text-2xl md:leading-9">
            {props.title}
          </div>
        </div>
      </div>
    </a>
  );
};
