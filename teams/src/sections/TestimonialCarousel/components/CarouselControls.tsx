type CarouselControlsProps = {
  onPrevious: () => void;
  onNext: () => void;
};

export const CarouselControls = ({ onPrevious, onNext }: CarouselControlsProps) => {
  return (
    <div className="content-center box-border caret-transparent gap-x-3 grid grid-flow-col justify-center gap-y-3 w-auto md:grid-flow-row md:justify-normal md:w-full">
      <button
        type="button"
        aria-label="Previous slide"
        onClick={onPrevious}
        className="text-violet-600 items-center aspect-square bg-zinc-50 caret-transparent grid justify-items-center text-center -rotate-90 w-[46px] border border-violet-600 p-0 rounded-[50%] border-solid md:transform-none transition-all duration-300 hover:bg-violet-600 hover:text-white active:scale-95"
      >
        <img
          src="https://c.animaapp.com/mlcfrtj47me9da/assets/icon-10.svg"
          alt="Icon"
          className="box-border caret-transparent h-[21px] w-[17px]"
        />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={onNext}
        className="text-violet-600 items-center aspect-square bg-zinc-50 caret-transparent grid justify-items-center text-center -rotate-90 w-[46px] border border-violet-600 p-0 rounded-[50%] border-solid md:transform-none transition-all duration-300 hover:bg-violet-600 hover:text-white active:scale-95"
      >
        <img
          src="https://c.animaapp.com/mlcfrtj47me9da/assets/icon-11.svg"
          alt="Icon"
          className="box-border caret-transparent h-[21px] w-[17px]"
        />
      </button>
    </div>
  );
};
