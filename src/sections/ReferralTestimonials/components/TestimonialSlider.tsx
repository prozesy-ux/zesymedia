export type TestimonialSliderProps = {
  testimonials: Array<{
    quote: string;
    imageUrl: string;
    imageAlt?: string;
    imageSizes?: string;
    name: string;
    title: string;
    ariaLabel: string;
  }>;
  sliderVariant?: string;
};

export const TestimonialSlider = (props: TestimonialSliderProps) => {
  return (
    <div
      role="region"
      className="relative box-border caret-transparent flex-col overflow-hidden"
    >
      <div className="relative box-border caret-transparent z-0">
        <div
          role="presentation"
          className={`box-border caret-transparent gap-x-4 flex h-full gap-y-4 ${props.sliderVariant || ""}`}
        >
          {props.testimonials.map((testimonial, index) => (
            <div
              key={index}
              role="group"
              aria-label={testimonial.ariaLabel}
              className="relative box-border caret-transparent shrink-0 list-none w-80 md:w-[400px]"
            >
              <div className="items-start box-border caret-transparent gap-x-6 flex flex-col h-full justify-between gap-y-6 w-full border border-neutral-200 p-4 rounded-2xl border-solid md:p-6">
                <p className="text-neutral-600 text-base box-border caret-transparent tracking-[0.36px] leading-6 md:text-lg md:leading-[27px]">
                  {testimonial.quote}
                </p>
                <div className="items-center box-border caret-transparent gap-x-2 flex justify-start gap-y-2">
                  <img
                    src={testimonial.imageUrl}
                    alt={testimonial.imageAlt || ""}
                    {...(testimonial.imageSizes
                      ? { sizes: testimonial.imageSizes }
                      : {})}
                    className="aspect-square box-border caret-transparent max-w-full object-cover align-bottom w-[52px] rounded-[100%]"
                  />
                  <div className="box-border caret-transparent">
                    <p className="text-neutral-950 text-base font-bold box-border caret-transparent tracking-[0.36px] leading-[19.2px] font-redhatdisplay_variablefont_wght md:text-xl md:leading-6">
                      {testimonial.name}
                    </p>
                    <p className="text-neutral-600 text-sm box-border caret-transparent tracking-[0.36px] leading-[21px] md:text-base md:leading-6">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* Duplicate for infinite scroll effect */}
          {props.testimonials.map((testimonial, index) => (
            <div
              key={`duplicate-${index}`}
              role="group"
              aria-label={testimonial.ariaLabel}
              className="relative box-border caret-transparent shrink-0 list-none w-80 md:w-[400px]"
            >
              <div className="items-start box-border caret-transparent gap-x-6 flex flex-col h-full justify-between gap-y-6 w-full border border-neutral-200 p-4 rounded-2xl border-solid md:p-6">
                <p className="text-neutral-600 text-base box-border caret-transparent tracking-[0.36px] leading-6 md:text-lg md:leading-[27px]">
                  {testimonial.quote}
                </p>
                <div className="items-center box-border caret-transparent gap-x-2 flex justify-start gap-y-2">
                  <img
                    src={testimonial.imageUrl}
                    alt={testimonial.imageAlt || ""}
                    {...(testimonial.imageSizes
                      ? { sizes: testimonial.imageSizes }
                      : {})}
                    className="aspect-square box-border caret-transparent max-w-full object-cover align-bottom w-[52px] rounded-[100%]"
                  />
                  <div className="box-border caret-transparent">
                    <p className="text-neutral-950 text-base font-bold box-border caret-transparent tracking-[0.36px] leading-[19.2px] font-redhatdisplay_variablefont_wght md:text-xl md:leading-6">
                      {testimonial.name}
                    </p>
                    <p className="text-neutral-600 text-sm box-border caret-transparent tracking-[0.36px] leading-[21px] md:text-base md:leading-6">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
