import { HeroBreadcrumb } from "@/integrations/services/sections/Hero/components/HeroBreadcrumb";
import { HeroHeading } from "@/integrations/services/sections/Hero/components/HeroHeading";

export const HeroContent = () => {
  return (
    <div className="container-main">
      <div className="hero-section-wrapper is-width-60rem">
        <div className="spacer-16 center-aline-pc">
          <div className="site-logo">
            <a href="/" className="logo-link-block">
              <img
                loading="lazy"
                src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/679a08604def1d26213e6133_designmonks%20(1).svg"
                alt=""
                className="brand-logo-image"
              />
            </a>
          </div>
          <HeroBreadcrumb />
          <HeroHeading />
        </div>
      </div>
    </div>
  );
};
