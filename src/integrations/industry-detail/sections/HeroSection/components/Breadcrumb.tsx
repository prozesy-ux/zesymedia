export const Breadcrumb = () => {
  return (
    <div className="relative items-center bg-white/10 box-border caret-transparent gap-x-[5px] flex min-h-[auto] min-w-[auto] gap-y-[5px] z-[88] px-3 py-1 rounded-[18px] md:static md:z-auto">
      <a
        href="https://prozesy.com/"
        className="text-neutral-400 text-xs box-border caret-transparent block tracking-[0.24px] leading-[18px] max-w-full min-h-[auto] min-w-[auto] capitalize"
      >
        <div className="box-border caret-transparent normal-case">Home</div>
      </a>
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
        <img
          src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67423a8542288605dea89299_CaretRight.webp"
          alt=""
          className="box-border caret-transparent inline-block max-w-full"
        />
      </div>
      <a
        href="/industry"
        className="text-neutral-400 text-xs box-border caret-transparent block tracking-[0.24px] leading-[18px] max-w-full min-h-[auto] min-w-[auto] capitalize"
      >
        <div className="box-border caret-transparent normal-case">
          Industries
        </div>
      </a>
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
        <img
          src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67423a8542288605dea89299_CaretRight.webp"
          alt=""
          className="box-border caret-transparent inline-block max-w-full"
        />
      </div>
      <a
        href="/industry/ecrm-portals"
        className="text-xs box-border caret-transparent block tracking-[0.24px] leading-[18px] max-w-full min-h-[auto] min-w-[auto] capitalize"
      >
        <div className="box-border caret-transparent normal-case">
          eCRM Portals
        </div>
      </a>
    </div>
  );
};
