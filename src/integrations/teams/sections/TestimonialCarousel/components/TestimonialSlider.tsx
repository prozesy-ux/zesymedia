type TestimonialSliderProps = {
  testimonials: Array<{
    image: string;
    name: string;
    role: string;
    quote: string;
  }>;
  currentIndex: number;
};

export const TestimonialSlider = ({ testimonials, currentIndex }: TestimonialSliderProps) => {
  return (
    <div className="relative box-border caret-transparent h-auto list-none max-w-[690px] w-full z-[1] mx-auto md:h-[685.236px] md:max-w-none overflow-hidden">
      <div
        role="list"
        className="relative caret-transparent flex flex-col h-full w-full z-[1]"
        style={{
          transform: `translateY(${-currentIndex * 253.667}px)`,
          transition: 'transform 700ms ease-in-out',
        }}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            role="group"
            aria-label={`${index + 1} / ${testimonials.length}`}
            className="relative aspect-square box-border caret-transparent shrink-0 h-[253.667px] w-full p-[12.0001px] md:aspect-auto md:px-9 md:py-5"
            style={{
              opacity: index === currentIndex ? 1 : 0.4,
              transform: `scale(${index === currentIndex ? 1 : 0.9})`,
              transition: 'opacity 700ms ease-in-out, transform 700ms ease-in-out',
            }}
          >
            <div className="box-border caret-transparent h-full overflow-hidden -mb-6 rounded-[50%] md:mb-0 md:rounded-[28.9955px] transition-transform duration-500 hover:scale-105">
              <img
                alt={testimonial.name}
                src={testimonial.image}
                className="box-border caret-transparent inline-block h-full max-w-full object-cover object-[50%_10%] w-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
