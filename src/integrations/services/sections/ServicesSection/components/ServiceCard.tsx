export type ServiceCardProps = {
  id: string;
  slug: string;
  href: string;
  imageUrl: string;
  imageAlt: string;
  imageVariant: string;
  title: string;
  description: string;
  services: Array<{
    number: string;
    title: string;
    href: string;
    isActive: boolean;
  }>;
  badgeImageUrl: string;
  badgeImageAlt: string;
  onServiceClick?: (serviceId: string) => void;
};

export const ServiceCard = (props: ServiceCardProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (props.onServiceClick) {
      e.preventDefault();
      props.onServiceClick(props.id);
    }
  };

  return (
    <div
      role="listitem"
      className="box-border caret-transparent min-h-[auto] min-w-[auto]"
    >
      <div className="bg-zinc-50 shadow-[rgba(15,23,42,0.08)_0px_4px_16px_-2px] box-border caret-transparent gap-x-6 flex flex-col gap-y-6 border border-neutral-200 overflow-hidden pb-6 rounded-2xl border-solid md:gap-x-12 md:gap-y-12 md:pb-12 md:rounded-[32px]">
        <a
          href={props.href}
          onClick={handleClick}
          className="text-violet-600 box-border caret-transparent block max-w-full min-h-[auto] min-w-[auto] decoration-neutral-600 cursor-pointer"
        >
          <div className="backdrop-blur-[6.60984px] box-border caret-transparent h-[155px] overflow-hidden rounded-2xl md:h-[400px] md:rounded-[20px]">
            <img
              src={props.imageUrl}
              alt={props.imageAlt}
              className={`box-border caret-transparent inline-block h-full max-w-full object-cover w-full md:object-fill ${props.imageVariant}`}
            />
          </div>
        </a>
        <div className="box-border caret-transparent min-h-[auto] min-w-[auto] px-4 md:px-16">
          <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4 mb-6 md:mb-14">
            <h2 className="text-[28px] font-bold box-border caret-transparent leading-[33.6px] min-h-[auto] min-w-[auto] font-redhatdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
              {props.title}
            </h2>
            <p className="text-base box-border caret-transparent hidden tracking-[0.36px] leading-6 min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]">
              {props.description}
            </p>
          </div>
          <div className="box-border caret-transparent">
            <div
              role="list"
              className="box-border caret-transparent gap-x-[60px] grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto_auto] gap-y-6 md:grid-cols-[1fr_1fr] md:gap-y-5"
            >
              {props.services.map((service, index) => (
                <div
                  key={index}
                  role="listitem"
                  className="box-border caret-transparent min-h-[auto] min-w-[auto]"
                >
                  <div className="border-b-neutral-200 border-l-zinc-800 border-r-zinc-800 border-t-zinc-800 box-border caret-transparent min-h-[35px] border-b md:min-h-12">
                    <a
                      href={service.href}
                      className={`text-neutral-600 text-lg items-center box-border caret-transparent gap-x-2 flex justify-between tracking-[0.36px] leading-[27px] max-w-full gap-y-2 ${!service.isActive ? "pointer-events-none" : ""}`}
                    >
                      <div className="box-border caret-transparent gap-x-2 flex min-h-[auto] min-w-[auto] gap-y-2">
                        <div className="text-neutral-950 text-lg box-border caret-transparent hidden tracking-[0.48px] md:text-2xl">
                          {service.number}
                        </div>
                        <div className="text-neutral-950 text-lg box-border caret-transparent tracking-[0.48px] min-h-[auto] min-w-[auto] md:text-2xl">
                          {service.title}
                        </div>
                      </div>
                      <img
                        src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67a20bdb0c4f1aa404f9cd38_CTA-Arrow.svg"
                        alt=""
                        className={`box-border caret-transparent max-w-full ${service.isActive ? "min-h-[auto] min-w-[auto]" : "hidden"}`}
                      />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="box-border caret-transparent mt-6 md:mt-8">
            <img
              src={props.badgeImageUrl}
              alt={props.badgeImageAlt}
              className="box-border caret-transparent inline-block h-[30px] max-w-full md:h-11"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
