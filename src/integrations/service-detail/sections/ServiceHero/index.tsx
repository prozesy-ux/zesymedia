import { Service } from "@/integrations/services/data/servicesData";

type ServiceHeroProps = {
  serviceData?: Service;
};

export const ServiceHero = (_props: ServiceHeroProps) => {
  return (
    <section className="section-service-details">
      <div
        data-poster-url="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9%2F674238984b5b15db637f4a63_-60bc-4584-9ad6-9caa931f8372-poster-00001.jpg"
        data-video-urls="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9%2F674238984b5b15db637f4a63_-60bc-4584-9ad6-9caa931f8372-transcode.mp4,https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9%2F674238984b5b15db637f4a63_-60bc-4584-9ad6-9caa931f8372-transcode.webm"
        data-autoplay="true"
        data-loop="true"
        data-wf-ignore="true"
        className="sd-bg-video w-background-video w-background-video-atom"
      >
        <video
          id="e7461063-1de7-610b-48ba-d323ab6b9905-video"
          autoPlay
          loop
          style={{
            backgroundImage: 'url("https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9%2F674238984b5b15db637f4a63_-60bc-4584-9ad6-9caa931f8372-poster-00001.jpg")',
          }}
          muted
          playsInline
          data-wf-ignore="true"
          data-object-fit="cover"
        >
          <source src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9%2F674238984b5b15db637f4a63_-60bc-4584-9ad6-9caa931f8372-transcode.mp4" data-wf-ignore="true" />
          <source src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9%2F674238984b5b15db637f4a63_-60bc-4584-9ad6-9caa931f8372-transcode.webm" data-wf-ignore="true" />
        </video>

        <div className="heros-content-wrapper">
          <div className="hero-upper-block">
            <div className="hero-logo-block">
              <a href="/" className="logo-link-block w-inline-block">
                <img
                  src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/679a08604def1d26213e6133_designmonks%20(1).svg"
                  loading="lazy"
                  alt=""
                  className="hero-logo"
                />
              </a>
            </div>

            <div className="page-tracker-block">
              <a href="/" className="page-tracker-link w-inline-block">
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
              <a href="/services" className="page-tracker-link w-inline-block">
                <div className="page-tracker-link-text">Services</div>
              </a>
              <div className="page-tracker-mid-icon-block">
                <img
                  src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67423a8542288605dea89299_CaretRight.webp"
                  loading="lazy"
                  alt=""
                  className="page-tracker-mid-icon"
                />
              </div>
              <a href="#" className="page-tracker-link is-current w-inline-block">
                <div className="page-tracker-link-text">AI Product Design </div>
              </a>
            </div>

            <div className="service-details-title-wrap">
              <h1 className="hero-title">
                AI Product Design Agency for <span className="hero-title-pd">Future-proof Design</span>
              </h1>
              <p className="service-details-text">
                We create intuitive and scalable UI/UX solutions for AI-driven products to ensure smooth user experiences that evolve with innovation.ful, and easy to navigate.
              </p>
            </div>

            <div className="sd-button-wrapper">
              <a href="/contact" className="contact-button-wapper w-inline-block">
                <div className="ae-element_item-glow-wrapper pointer-events-off">
                  <div className="ae-element_item-glow"></div>
                </div>
                <div className="ae-element_item-background pointer-events-off"></div>
                <div className="ae-element_item-content z-index-2">
                  <div className="button-primary-inside">
                    <img
                      src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6799ff5246a12a0e295ca0cf_Designmonks.svg"
                      loading="lazy"
                      alt=""
                      className="button-primary-icon"
                    />
                    <div className="button-primary-text">Book a Call</div>
                  </div>
                </div>
                <img
                  src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/672a7a8e3a6aba070d15d4c0_Star%206.avif"
                  loading="lazy"
                  alt=""
                  className="image"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="sd-background-shade"></div>
      </div>

      <div className="hero-circle-wrapper">
        <img
          src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67424426f5b29ed4026778df_Cube.avif"
          loading="lazy"
          width="184"
          alt=""
          className="hero-circle"
        />
      </div>
      <div className="sd-cursor-wrapper">
        <img
          src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/673a389e2b5f982ca7e5ba3d_Cube.avif"
          loading="lazy"
          alt=""
          className="hero-cursor"
        />
      </div>
      <div className="sd-bottom-shade"></div>
      <div className="hero-glow-wrap is-glow">
        <img
          src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6798a3cca97b5f56d4a2f0ca_Ellipse%2036.svg"
          loading="lazy"
          alt=""
          className="hero-cube"
        />
      </div>
    </section>
  );
};
