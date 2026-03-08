export type ProjectCardProps = {
  href: string;
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
  tags: string[];
};

export const ProjectCard = (props: ProjectCardProps) => {
  const normalizedHref = (() => {
    try {
      if (/^https?:\/\//.test(props.href)) {
        const parsed = new URL(props.href);
        return `${parsed.pathname}${parsed.search}${parsed.hash}`;
      }
    } catch {
      // Fallback to original href if URL parsing fails.
    }

    return props.href;
  })();

  const navigateToProject = () => {
    if (!normalizedHref.startsWith("/")) {
      return;
    }

    if (`${window.location.pathname}${window.location.search}${window.location.hash}` !== normalizedHref) {
      history.pushState({}, "", normalizedHref);
      window.dispatchEvent(new Event("locationchange"));
    }
  };

  return (
    <div
      role="listitem"
      className="box-border caret-transparent h-full max-w-full min-h-[auto] min-w-[auto] w-full md:h-auto md:max-w-none md:w-auto"
    >
      <div className="box-border caret-transparent max-w-full w-full md:max-w-none">
        <button
          type="button"
          onClick={navigateToProject}
          className="text-violet-600 box-border caret-transparent inline-block h-[245px] max-w-full decoration-neutral-600 w-full overflow-hidden rounded-2xl bg-transparent border-0 p-0 text-left cursor-pointer md:h-[370px]"
        >
          <img
            src={props.imageUrl}
            alt={props.imageAlt}
            className="aspect-[auto_610_/_370] box-border caret-transparent inline-block h-full max-w-full object-cover object-[50%_0%] w-full"
          />
        </button>
        <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4 mt-4 md:mt-6">
          <button
            type="button"
            onClick={navigateToProject}
            className="text-violet-600 box-border caret-transparent gap-x-2 flex flex-col max-w-full min-h-[auto] min-w-[auto] gap-y-2 decoration-neutral-600 bg-transparent border-0 p-0 text-left cursor-pointer"
          >
            <h2 className="text-neutral-950 text-xl font-bold box-border caret-transparent flow-root leading-6 min-h-[auto] min-w-[auto] overflow-hidden font-redhatdisplay_variablefont_wght md:text-2xl md:leading-[28.8px]" style={{ fontFamily: "'Redhatdisplay Variablefont Wght', ui-sans-serif, system-ui, sans-serif" }}>
              {props.title}
            </h2>
            <p className="text-neutral-600 text-base box-border caret-transparent flow-root tracking-[0.36px] leading-6 min-h-[auto] min-w-[auto] overflow-hidden font-outfit_variablefont_wght md:text-lg md:leading-[27px]" style={{ fontFamily: "'Outfit Variablefont Wght', ui-sans-serif, system-ui, sans-serif" }}>
              {props.description}
            </p>
          </button>
          <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
            <div
              role="list"
              className="box-border caret-transparent gap-x-3 flex flex-wrap gap-y-3"
            >
              {props.tags.map((tag, index) => (
                <div
                  key={index}
                  role="listitem"
                  className="bg-neutral-200 box-border caret-transparent min-h-[auto] min-w-[auto] px-3 py-1 rounded-[48px]"
                >
                  <p className="text-neutral-950 text-sm box-border caret-transparent tracking-[0.36px] leading-[21px] md:text-base md:leading-6">
                    {tag}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
