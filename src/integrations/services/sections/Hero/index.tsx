import { HeroVideo } from "@/integrations/services/sections/Hero/components/HeroVideo";
import { HeroContent } from "@/integrations/services/sections/Hero/components/HeroContent";

export const Hero = () => {
  return (
    <section className="cms-cetagories_hero-section">
      <div className="theme-dark">
        <HeroVideo>
          <HeroContent />
        </HeroVideo>
      </div>
      <div className="element_top-right">
        <img
          src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/68297a5639ea6ea5986e8441_Group 2147225317 (2).avif"
          loading="lazy"
          alt=""
        />
      </div>
      <div className="element_bottom-left is-hidden-sm">
        <img
          src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/680abee77b8b1a005391c27b_d06c4296b2ae60af25ab36e28167df46_box element.avif"
          loading="lazy"
          alt=""
        />
      </div>
    </section>
  );
};
