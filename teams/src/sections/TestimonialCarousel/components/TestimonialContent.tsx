type TestimonialContentProps = {
  testimonial: {
    name: string;
    role: string;
    quote: string;
  };
};

export const TestimonialContent = ({ testimonial }: TestimonialContentProps) => {
  return (
    <div className="relative box-border caret-transparent list-none w-full z-[1] overflow-hidden mx-auto">
      <div
        role="list"
        className="relative caret-transparent grid h-full w-full z-[1]"
      >
        <div
          role="group"
          aria-label="testimonial"
          className="relative items-center box-border caret-transparent grid shrink-0 col-start-[-1] row-start-1 h-full animate-fadeIn"
          key={testimonial.name}
        >
          <div className="items-center bg-violet-50 box-border caret-transparent gap-x-6 flex flex-col h-full justify-between justify-items-center gap-y-6 text-center mt-0 mx-0 md:items-start md:gap-x-14 md:h-auto md:justify-center md:gap-y-14 md:text-start md:ml-[54.5891px] md:mr-[43.4707px] md:-mt-6">
            <img
              src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6744858be9dbe2f7a6b0bce9_Frame 1618871848.avif"
              alt=""
              className="box-border caret-transparent max-w-full text-center md:text-start"
            />
            <p className="text-2xl box-border caret-transparent tracking-[0.36px] leading-[28.8px] text-center md:text-[40px] md:leading-[48px] md:text-start transition-opacity duration-500">
              {testimonial.quote}
            </p>
            <div className="box-border caret-transparent text-center md:text-start">
              <p className="text-neutral-950 text-xl font-bold box-border caret-transparent tracking-[0.36px] leading-6 text-center font-redhatdisplay_variablefont_wght md:text-[32px] md:leading-[38.4px] md:text-start">
                {testimonial.name}
              </p>
              <p className="text-neutral-600 text-base box-border caret-transparent tracking-[0.36px] leading-6 text-center md:text-lg md:leading-[27px] md:text-start">
                {testimonial.role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
