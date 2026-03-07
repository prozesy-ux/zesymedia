export type ProjectCardProps = {
  href: string;
  linkClassName: string;
  category: string;
  title: string;
  description: string;
  stat1Label: string;
  stat1Value: string;
  stat2Label: string;
  stat2Value: string;
  testimonialBgColor: string;
  testimonialImageUrl: string;
  testimonialImageAlt: string;
  testimonialName: string;
  testimonialTitle: string;
  projectImageUrl: string;
  projectImageAlt: string;
  arrowIconUrl: string;
};

export const ProjectCard = (props: ProjectCardProps) => {
  return (
    <a href={props.href} className={props.linkClassName}>
      <div className="relative box-border caret-transparent basis-[0%] grow max-w-full w-full md:max-w-[470px]">
        <div className="box-border caret-transparent">
          <h3 className="text-neutral-950 text-xl italic font-bold box-border caret-transparent leading-6 font-playfairdisplay_variablefont_wght">
            {props.category}
          </h3>
          <div className="box-border caret-transparent mt-4 mb-2 md:mb-4">
            <h4 className="text-neutral-950 text-xl font-bold box-border caret-transparent leading-6 font-redhatdisplay_variablefont_wght md:text-[32px] md:leading-[38.4px]">
              {props.title}
            </h4>
          </div>
          <div className="relative box-border caret-transparent basis-[0%] grow max-w-full w-full md:max-w-[470px]">
            <p className="text-neutral-600 text-base box-border caret-transparent tracking-[0.36px] leading-6">
              {props.description}
            </p>
          </div>
        </div>
        <div className="box-border caret-transparent gap-x-2 grid flex-col auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto] gap-y-2 mt-6 py-2.5 md:gap-x-4 md:gap-y-4 md:mt-[38px]">
          <div className="items-start box-border caret-transparent gap-x-1 flex flex-col justify-start gap-y-1 md:gap-x-2 md:gap-y-2">
            <div className="box-border caret-transparent">
              <p className="text-neutral-600 text-base box-border caret-transparent tracking-[0.36px] leading-6">
                {props.stat1Label}
              </p>
            </div>
            <div className="box-border caret-transparent">
              <div className="text-neutral-950 text-lg font-extrabold box-border caret-transparent leading-[21.6px] font-redhatdisplay_variablefont_wght md:text-2xl md:font-bold md:leading-[28.8px]">
                {props.stat1Value}
              </div>
            </div>
          </div>
          <div className="items-start box-border caret-transparent gap-x-1 flex flex-col justify-start gap-y-1 md:gap-x-2 md:gap-y-2">
            <div className="box-border caret-transparent">
              <p className="text-neutral-600 text-base box-border caret-transparent tracking-[0.36px] leading-6">
                {props.stat2Label}
              </p>
            </div>
            <div className="box-border caret-transparent">
              <div className="text-neutral-950 text-lg font-extrabold box-border caret-transparent leading-[21.6px] font-redhatdisplay_variablefont_wght md:text-2xl md:font-bold md:leading-[28.8px]">
                {props.stat2Value}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`items-center ${props.testimonialBgColor} box-border caret-transparent gap-x-2 hidden justify-between gap-y-2 mt-4 px-4 py-2 rounded-lg md:flex`}
        >
          <div className="items-center box-border caret-transparent gap-x-2 flex basis-[0%] grow min-h-0 min-w-0 gap-y-2 md:basis-auto md:grow-0 md:min-h-[auto] md:min-w-[auto]">
            <div className="box-border caret-transparent h-12 max-w-12 min-h-0 min-w-0 w-full overflow-hidden rounded-[100%] md:min-h-[auto] md:min-w-[auto]">
              <img
                src={props.testimonialImageUrl}
                alt={props.testimonialImageAlt}
                className="box-border caret-transparent inline-block max-w-full w-full"
              />
            </div>
            <div className="box-border caret-transparent flex flex-col min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
              <div className="text-neutral-950 text-sm font-bold box-border caret-transparent tracking-[0.32px] leading-[21px] min-h-0 min-w-0 md:text-base md:leading-6 md:min-h-[auto] md:min-w-[auto]">
                {props.testimonialName}
              </div>
              <div className="text-neutral-600 text-sm box-border caret-transparent tracking-[0.32px] leading-[21px] min-h-0 min-w-0 md:text-base md:leading-6 md:min-h-[auto] md:min-w-[auto]">
                {props.testimonialTitle}
              </div>
            </div>
          </div>
          <div className="text-base font-bold box-border caret-transparent gap-x-2 flex tracking-[0.32px] leading-6 min-h-0 min-w-0 gap-y-2 font-outfit md:min-h-[auto] md:min-w-[auto]">
            <div className="text-neutral-600 box-border caret-transparent hidden">
              View Project
            </div>
            <img
              src={props.arrowIconUrl}
              alt=""
              className="box-border caret-transparent max-w-full min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]"
            />
          </div>
        </div>
      </div>
      <div className="relative items-start box-border caret-transparent flex basis-[0%] grow h-full justify-start max-w-full w-full mt-6 mb-4 rounded-lg md:w-auto md:my-0">
        <img
          src={props.projectImageUrl}
          alt={props.projectImageAlt}
          className="box-border caret-transparent max-w-full w-full"
        />
      </div>
      <div
        className={`items-center ${props.testimonialBgColor} box-border caret-transparent gap-x-2 flex justify-between min-h-[auto] min-w-[auto] gap-y-2 w-full mt-2 px-4 py-2 rounded-lg md:hidden md:min-h-0 md:min-w-0 md:w-auto md:mt-4`}
      >
        <div className="items-center box-border caret-transparent gap-x-2 flex basis-[0%] grow min-h-[auto] min-w-[auto] gap-y-2 md:basis-auto md:grow-0 md:min-h-0 md:min-w-0">
          <div className="box-border caret-transparent h-12 max-w-12 min-h-[auto] min-w-[auto] w-full overflow-hidden rounded-[100%] md:min-h-0 md:min-w-0">
            <img
              src={props.testimonialImageUrl}
              alt={props.testimonialImageAlt}
              className="box-border caret-transparent inline-block max-w-full w-full"
            />
          </div>
          <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0">
            <div className="text-neutral-950 text-sm font-bold box-border caret-transparent tracking-[0.32px] leading-[21px] min-h-[auto] min-w-[auto] md:text-base md:leading-6 md:min-h-0 md:min-w-0">
              {props.testimonialName}
            </div>
            <div className="text-neutral-600 text-sm box-border caret-transparent tracking-[0.32px] leading-[21px] min-h-[auto] min-w-[auto] md:text-base md:leading-6 md:min-h-0 md:min-w-0">
              {props.testimonialTitle}
            </div>
          </div>
        </div>
        <div className="text-base font-bold box-border caret-transparent gap-x-2 flex tracking-[0.32px] leading-6 min-h-[auto] min-w-[auto] gap-y-2 font-outfit md:min-h-0 md:min-w-0">
          <div className="text-neutral-600 box-border caret-transparent hidden">
            View Project
          </div>
          <img
            src={props.arrowIconUrl}
            alt=""
            className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0"
          />
        </div>
      </div>
    </a>
  );
};
