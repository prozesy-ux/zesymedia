export const HeroBreadcrumb = () => {
  return (
    <div className="page-tracker-block">
      <a href="/" className="page-tracker-link">
        <div className="page-tracker-link-text">Home</div>
      </a>
      <div className="page-tracker-mid-icon-block">
        <img
          src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67423a8542288605dea89299_CaretRight.webp"
          loading="lazy"
          alt=""
          className="page-tracker-mid-icon"
        />
      </div>
      <a href="/services" aria-current="page" className="page-tracker-link is-current">
        <div className="page-tracker-link-text">Services</div>
      </a>
    </div>
  );
};
