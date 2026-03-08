export const Pagination = () => {
  return (
    <div
      role="navigation"
      aria-label="List"
      className="items-center box-border caret-transparent gap-x-2 flex flex-wrap justify-center gap-y-2 w-full mt-10 px-3 md:gap-x-5 md:gap-y-5 md:w-auto md:px-0"
    >
      <a
        href="/projects"
        aria-label="Previous Page"
        className="items-center box-border caret-transparent hidden justify-center decoration-neutral-600 rounded-sm"
      >
        <img
          src="https://c.animaapp.com/mmfuclz4syuQ81/assets/icon-9.svg"
          alt="Icon"
          className="text-xl box-border caret-transparent h-5 align-baseline w-5 md:h-6 md:w-6"
        />
        <div className="box-border caret-transparent hidden max-w-full">
          Previous
        </div>
      </a>
      <div className="items-center box-border caret-transparent gap-x-2 flex min-h-[auto] min-w-[auto] gap-y-2 md:gap-x-3 md:gap-y-3">
        <a
          href="/projects"
          className="text-white text-base items-center bg-violet-600 box-border caret-transparent flex h-[34px] justify-center max-w-full min-h-[auto] min-w-[auto] w-[34px] rounded-xl md:h-[45px] md:w-[45px]"
        >
          1
        </a>
        <a
          href="/projects"
          className="text-neutral-950 text-base items-center box-border caret-transparent flex h-[34px] justify-center max-w-full min-h-[auto] min-w-[auto] w-[34px] rounded-lg md:h-[45px] md:w-[45px] hover:bg-slate-900/10"
        >
          2
        </a>
        <a
          href="/projects"
          className="text-neutral-950 text-base items-center box-border caret-transparent flex h-[34px] justify-center max-w-full min-h-[auto] min-w-[auto] w-[34px] rounded-lg md:h-[45px] md:w-[45px] hover:bg-slate-900/10"
        >
          3
        </a>
        <a
          href="/projects"
          className="text-neutral-950 text-base items-center box-border caret-transparent flex h-[34px] justify-center max-w-full min-h-[auto] min-w-[auto] w-[34px] rounded-lg md:h-[45px] md:w-[45px] hover:bg-slate-900/10"
        >
          4
        </a>
      </div>
      <a
        href="/projects"
        aria-label="Next Page"
        className="items-center box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] decoration-neutral-600 rounded-sm"
      >
        <div className="box-border caret-transparent hidden max-w-full">
          Next
        </div>
        <img
          src="https://c.animaapp.com/mmfuclz4syuQ81/assets/icon-10.svg"
          alt="Icon"
          className="text-xl box-border caret-transparent h-5 translate-y-px align-baseline w-5 ml-0 md:h-6 md:w-6 md:ml-1"
        />
      </a>
      <div
        aria-label="Page 1 of 4"
        role="heading"
        className="box-border caret-transparent hidden text-center w-full mt-5"
      >
        1 / 4
      </div>
    </div>
  );
};
