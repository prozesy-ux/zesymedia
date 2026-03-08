type BreadcrumbProps = {
  serviceTitle?: string;
};

export const Breadcrumb = ({ serviceTitle = "Web Design" }: BreadcrumbProps) => {
  return (
    <div className="relative items-center bg-white/10 box-border caret-transparent gap-x-[5px] flex gap-y-[5px] z-[88] px-3 py-1 rounded-[18px] md:static md:z-auto">
      <a
        href="https://prozesy.com/"
        className="text-neutral-400 text-xs box-border caret-transparent block tracking-[0.24px] leading-[18px] max-w-full capitalize"
      >
        <div className="box-border caret-transparent normal-case">Home</div>
      </a>
      <div className="box-border caret-transparent">
        <img
          src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67423a8542288605dea89299_CaretRight.webp"
          alt=""
          className="box-border caret-transparent inline-block max-w-full"
        />
      </div>
      <a
        href="/services"
        className="text-neutral-400 text-xs box-border caret-transparent block tracking-[0.24px] leading-[18px] max-w-full capitalize"
      >
        <div className="box-border caret-transparent normal-case">Services</div>
      </a>
      <div className="box-border caret-transparent">
        <img
          src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67423a8542288605dea89299_CaretRight.webp"
          alt=""
          className="box-border caret-transparent inline-block max-w-full"
        />
      </div>
      <a
        href="#"
        className="text-white text-xs box-border caret-transparent block tracking-[0.24px] leading-[18px] max-w-full capitalize"
      >
        <div className="box-border caret-transparent normal-case">
          {serviceTitle}
        </div>
      </a>
    </div>
  );
};
