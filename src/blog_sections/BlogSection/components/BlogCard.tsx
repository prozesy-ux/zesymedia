export type BlogCardProps = {
  href: string;
  imageUrl: string;
  imageAlt: string;
  title: string;
  imageClassName?: string;
};

export const BlogCard = (props: BlogCardProps) => {
  return (
    <div role="listitem" className="box-border caret-transparent">
      <a
        href={props.href}
        className="text-neutral-950 box-border caret-transparent inline-block max-w-full w-full"
      >
        <div className="box-border caret-transparent w-full">
          <div className="box-border caret-transparent w-full overflow-hidden rounded-xl md:rounded-2xl">
            <img
              src={props.imageUrl}
              alt={props.imageAlt}
              className={
                props.imageClassName ||
                "box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
              }
            />
          </div>
          <div className="items-start box-border caret-transparent gap-x-2 flex flex-col gap-y-2 mt-4 md:gap-x-4 md:gap-y-4 md:mt-5">
            <h2 className="text-lg font-bold box-border caret-transparent leading-[21.6px] font-redhatdisplay_variablefont_wght md:text-2xl md:leading-[28.8px]">
              {props.title}
            </h2>
          </div>
        </div>
      </a>
    </div>
  );
};
