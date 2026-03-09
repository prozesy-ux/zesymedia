import { useEffect } from "react";

export const TrustedBrandsCarouselSection = () => {
  useEffect(() => {
    // Initialize Splide carousels
    const initCarousels = () => {
      if (typeof window !== "undefined" && (window as any).Splide) {
        const carousels = document.querySelectorAll(".brands-marquee-carousel");
        
        carousels.forEach((carouselElement) => {
          if ((carouselElement as any).splide) return; // Already initialized
          
          const speed = parseFloat(carouselElement.getAttribute("data-speed") || "0.4");
          const isReversed = carouselElement.getAttribute("data-direction") === "reversed";
          
          const splideInstance = new (window as any).Splide(carouselElement, {
            pagination: false,
            arrows: false,
            autoWidth: true,
            type: "loop",
            drag: true,
            autoScroll: {
              speed: isReversed ? -speed : speed,
              pauseOnHover: false,
              pauseOnFocus: false,
            },
          });

          if ((window as any).splide && (window as any).splide.Extensions) {
            splideInstance.mount((window as any).splide.Extensions);
          }
          (carouselElement as any).splide = splideInstance;
        });
      }
    };

    const timer = setTimeout(initCarousels, 500);
    return () => clearTimeout(timer);
  }, []);

  const brandsRow1 = [
    "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885efb8de6485b41ef30512_Logo_edvive_mono.svg",
    "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f091d389d8df99129c17_Logo_leklub_mono.svg",
    "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f0a19297eaa439b36a54_Logo_lendiview_mono.svg",
    "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f0d458e5a5df0fbf1790_Logo_likely_mono.svg",
    "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f0e8feb06d3d996d79c3_Logo_Memorybox_mono.svg",
    "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f10530ade15b8f215893_Logo_onethread_mono.svg",
    "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f12d87ea8f930b98389b_Logo_rabfy_mono.svg",
    "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f13ec2ad5470f81a0156_Logo_ontik_mono.svg",
    "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f14fe135439678c205c4_Logo_ostad_mono.svg",
    "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f15d6e8226dcdd42841f_Logo_oter_mono.svg",
    "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f18ddddd13f9898fa4a1_Logo_Sift_mono.svg",
    "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f19c8b03c8659ce41c98_Logo_skillophy_mono.svg",
    "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f1b6efcab4b193f09f5c_Logo_tempo_mono.svg",
    "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f1c594a1ec8ca506cd37_Logo_triply_mono.svg",
    "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f1e4306e3894a1466064_Logo_ways_mono.svg",
    "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f1f680fdbf02fa0eae57_Logo_Y%20Combinator_mono.svg",
    "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f2004933c2b4d513d932_Logo_yenex_mono.svg",
    "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68a091859ea0add1f56a3a99_Logo_zantrik_mono.svg",
    "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6886538a81d84aaf47e5386d_Logo_Addisoft_mono.svg",
    "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6886539e25b283ac0614549d_Logo_Banglashikhi_mono.svg",
  ];

  const brandsRow2 = [
    "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885ee08f5f493b2bb9e7f1e_Logo_medease_mono.svg",
    "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885ee4528e1e50ce73cec96_Logo_3asafeer_mono.svg",
    "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885ee8c69e8f4233a577999_Logo_akijship_mono.svg",
    "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885ee9e7ebe3a3c0e3a331c_Logo_akij_mono.svg",
    "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885eeb809370b706fb8e60d_Logo_alpine_mono.svg",
    "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885eee107ee412b3af204cf_Logo_Bizphix_mono.svg",
    "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885eef1a76e2babd6efc174_Logo_Buttercup_mono.svg",
    "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885ef0413f8918ac5356de1_Logo_carbobon_mono.svg",
    "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885ef13617c539ba8a284f4_Logo_carnesia_mono.svg",
    "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885ef283a1bcb89be6747e7_Logo_compaies_mono.svg",
    "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885ef3df74b709059457346_Logo_cpg_mono.svg",
    "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885ef94ab9e4ca1123be230_Logo_Dlicio_mono.svg",
    "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885efa747ec9f1d1564f668_Logo_docuseal_mono.svg",
    "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885efcf7840077b72111115_Logo_farasha_mono.svg",
    "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885efde40d2b35d3d22dea0_Logo_fitmate_mono.svg",
    "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885effb87ea8f930b980cad_Logo_Gainsty_mono.svg",
    "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f01211f8986a34f542d8_Logo_grow_mono.svg",
    "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f045523f0b94ba432e42_Logo_heyluna_mono.svg",
    "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f0546756b58458d71b9b_Logo_IPDC_mono.svg",
    "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f06558e5a5df0fbefdde_Logo_khanit_mono.svg",
  ];

  return (
    <div className="container-1252px">
      <div className="sd-work-logo-wrapper">
        <div className="sd-work-logo-header-wrap">
          <div className="section-tag">
            <div className="section-tag_text">Brand Trust</div>
          </div>
          <h3 className="section-title-rh-2 white">
            Trusted by <span className="section-title-pd-2">Leading Brands</span>
          </h3>
        </div>

        <div className="worked-logo-wrapper">
          {/* First Row */}
          <div data-drag="true" data-speed="0.4" className="splide common-marquee-slider brands-marquee-carousel">
            <div className="splide__track w-dyn-list">
              <div role="list" className="splide__list logos-wrap w-dyn-items">
                {brandsRow1.map((logo, index) => (
                  <div key={index} role="listitem" className="worked_logo-block splide__slide w-dyn-item">
                    <img loading="lazy" src={logo} alt="" className="worked-logo" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="solid-logo-gap"></div>

          {/* Second Row (Reversed) */}
          <div data-drag="true" data-speed="0.4" data-direction="reversed" className="splide common-marquee-slider brands-marquee-carousel">
            <div className="splide__track w-dyn-list">
              <div role="list" className="splide__list logos-wrap w-dyn-items">
                {brandsRow2.map((logo, index) => (
                  <div key={index} role="listitem" className="worked_logo-block splide__slide w-dyn-item">
                    <img loading="lazy" src={logo} alt="" className="worked-logo" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="right-shade"></div>
          <div className="left-shde"></div>
        </div>
      </div>
    </div>
  );
};
