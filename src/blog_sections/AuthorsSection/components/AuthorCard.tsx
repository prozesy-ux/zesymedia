export type AuthorCardProps = {
  imageUrl: string;
  imageAlt?: string;
  name: string;
  role: string;
  imageClassName?: string;
};

export const AuthorCard = (props: AuthorCardProps) => {
  return (
    <div role="listitem" className="box-border caret-transparent">
      <div className="text-black box-border caret-transparent w-full">
        <div className="box-border caret-transparent overflow-hidden rounded-3xl">
          <img
            src={props.imageUrl}
            alt={props.imageAlt || props.name}
            className={
              props.imageClassName ||
              "box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
            }
          />
        </div>
        <div className="text-neutral-950 items-center box-border caret-transparent gap-x-1 flex flex-col gap-y-1 text-center mt-3 md:gap-x-2 md:gap-y-2 md:mt-6">
          <h3 className="text-xl font-bold box-border caret-transparent leading-6 font-redhatdisplay_variablefont_wght md:text-2xl md:leading-[28.8px]">
            {props.name}
          </h3>
          <div className="text-neutral-500 box-border caret-transparent">
            <div className="text-xl box-border caret-transparent tracking-[0.48px] leading-[30px] md:text-2xl md:leading-9">
              {props.role}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
