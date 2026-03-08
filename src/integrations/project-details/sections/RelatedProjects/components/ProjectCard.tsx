export type ProjectCardProps = {
  href: string;
  imageUrl: string;
  imageAlt: string;
  title: string;
};

export const ProjectCard = (props: ProjectCardProps) => {
  return (
    <div
      role="listitem"
      className="box-border caret-transparent min-h-[auto] min-w-[auto]"
    >
      <div className="box-border caret-transparent max-w-full w-full md:max-w-none">
        <a
          href={props.href}
          className="text-neutral-950 box-border caret-transparent inline-block h-[247px] max-w-full w-full md:h-auto md:max-w-[400px]"
        >
          <div className="box-border caret-transparent h-[245px] max-w-full w-full overflow-hidden rounded-2xl md:h-[370px]">
            <img
              src={props.imageUrl}
              alt={props.imageAlt}
              className="aspect-[auto_400_/_370] box-border caret-transparent inline-block h-full max-w-full object-cover object-[50%_0%] w-full"
            />
          </div>
        </a>
        <div className="box-border caret-transparent mt-4 md:mt-6">
          <a
            href={props.href}
            className="text-violet-600 box-border caret-transparent inline-block max-w-full decoration-neutral-600"
          >
            <h2 className="text-zinc-50 text-lg font-bold box-border caret-transparent leading-[21.6px] font-redhatdisplay_variablefont_wght md:text-2xl md:leading-[28.8px]">
              {props.title}
            </h2>
          </a>
        </div>
      </div>
    </div>
  );
};
