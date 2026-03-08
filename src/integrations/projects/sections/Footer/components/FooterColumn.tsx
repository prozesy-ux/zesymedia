export type FooterColumnProps = {
  title: string;
  links: Array<{
    href: string;
    text: string;
    hasDownloadIcon?: boolean;
  }>;
};

export const FooterColumn = (props: FooterColumnProps) => {
  return (
    <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
      <h3 className="text-zinc-50 text-base font-bold box-border caret-transparent leading-6 mb-4 md:text-lg md:leading-[27px] md:mb-6">
        {props.title}
      </h3>
      <div className="items-start box-border caret-transparent gap-x-3.5 flex flex-col gap-y-3.5 capitalize md:gap-x-4 md:gap-y-4">
        {props.links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="text-neutral-400 text-sm items-start box-border caret-transparent gap-x-1 flex justify-end tracking-[0.32px] leading-[21px] max-w-full min-h-[auto] min-w-[auto] gap-y-1 text-left md:text-base md:items-center md:gap-x-1.5 md:justify-start md:leading-6 md:gap-y-1.5 md:text-start hover:text-violet-400 hover:border-violet-400"
          >
            <div className="text-sm box-border caret-transparent leading-[21px] min-h-[auto] min-w-[auto] text-left md:text-base md:leading-6 md:text-start">
              {link.text}
            </div>
            {link.hasDownloadIcon && (
              <div className="text-sm items-center box-border caret-transparent flex shrink-0 h-3.5 justify-center leading-[21px] min-h-[auto] min-w-[auto] text-left mt-1 md:text-base md:[align-items:normal] md:block md:shrink md:h-auto md:justify-normal md:leading-6 md:text-start md:mt-0">
                <img
                  src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/68a1a4d69b7f2d6096d260a3_Download button.svg"
                  alt=""
                  className="text-sm box-border caret-transparent block h-3.5 leading-[21px] max-w-full min-h-[auto] min-w-[auto] text-left md:text-base md:inline-block md:h-auto md:leading-6 md:min-h-0 md:min-w-0 md:text-start"
                />
              </div>
            )}
          </a>
        ))}
      </div>
    </div>
  );
};
