export type TestimonialCardProps = {
  ariaLabel: string;
  slideClassName: string;
  clientImageUrl: string;
  clientImageAlt: string;
  quoteIconUrl: string;
  quoteIconAlt: string;
  testimonialText: string;
  clientName: string;
  clientTitle: string;
  companyLogoUrl: string;
  companyLogoAlt: string;
};

export const TestimonialCard = (props: TestimonialCardProps) => {
  return (
    <div
      role="listitem"
      aria-label={props.ariaLabel}
      className={props.slideClassName}
    >
      <div className="testimonial-card-c-wrapper">
        {/* Author Image Block - Left Side */}
        <div className="testimonial-author-image-block">
          <img
            src={props.clientImageUrl}
            loading="lazy"
            alt={props.clientImageAlt}
            className="testimonial-author-image"
          />
        </div>

        {/* Text Wrapper - Right Side */}
        <div className="testimonial-text-wrapper">
          {/* Quote Icon Block */}
          <div className="testimonial-quote-icon-block">
            <img
              loading="lazy"
              src={props.quoteIconUrl}
              alt={props.quoteIconAlt}
              className="testimonial-quote-icon"
            />
          </div>

          {/* Testimonial Text Block */}
          <div className="testimonial-text-block">
            <p className="testimonial-text">{props.testimonialText}</p>
          </div>

          {/* Company Info Wrap - Bottom */}
          <div className="testimonial-company-info-wrap">
            {/* Author Info Block */}
            <div className="testimonial-author-info-block">
              <h3 className="t-author-name">{props.clientName}</h3>
              <div className="t-author-tag">{props.clientTitle}</div>
            </div>

            {/* Company Logo Block */}
            <div className="t-author-company-logo-block">
              <img
                width="Auto"
                height="70"
                alt={props.companyLogoAlt}
                loading="lazy"
                src={props.companyLogoUrl}
                className="t-author-c-logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
