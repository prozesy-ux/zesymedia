export const ScrollToTop = () => {
  return (
    <a
      href="/industry/ecrm-portals"
      className="fixed text-violet-600 bg-neutral-950 box-border caret-transparent gap-x-2 flex max-w-full gap-y-2 z-[1] border border-neutral-600 px-4 py-2 rounded-[40px] border-solid right-5 bottom-[108px] md:right-12 md:bottom-[27px]"
    >
      <img
        src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67d50ac2864d635c959051ac_ArrowCircleUp.svg"
        alt=""
        className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto]"
      />
      <p className="text-neutral-300 box-border caret-transparent block tracking-[0.36px] leading-[21px] min-h-[auto] min-w-[auto] md:hidden md:min-h-0 md:min-w-0">
        Top 
      </p>
      <p className="text-neutral-300 box-border caret-transparent hidden tracking-[0.36px] leading-[21px] min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]">
        Back to Top 
      </p>
    </a>
  );
};
