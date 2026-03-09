import { useEffect } from "react";

export const ImageCarouselSection = () => {
  useEffect(() => {
    // Initialize Splide carousel
    const initCarousel = () => {
      if (typeof window !== "undefined" && (window as any).Splide) {
        const carouselElement = document.querySelector(".image-mockup-carousel");
        if (carouselElement && !(carouselElement as any).splide) {
          const splideInstance = new (window as any).Splide(carouselElement, {
            pagination: false,
            arrows: false,
            autoWidth: true,
            type: "loop",
            drag: false,
            autoScroll: {
              speed: 0.5,
              pauseOnHover: false,
              pauseOnFocus: false,
            },
          });

          if ((window as any).splide && (window as any).splide.Extensions) {
            splideInstance.mount((window as any).splide.Extensions);
          }
          (carouselElement as any).splide = splideInstance;
        }
      }
    };

    const timer = setTimeout(initCarousel, 500);
    return () => clearTimeout(timer);
  }, []);

  const images = [
    "https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67b429edf1de34102b351e90_Free_iPad_Mockup_1%204.avif",
    "https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67b429ed8fe80c9438d5af1e_Free_iPad_Mockup_1%205.avif",
    "https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67b429ed64cdbe7aac6d2066_Free_iPad_Mockup_1%206.avif",
    "https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67b429ed6535397fbda1febe_Free_iPad_Mockup_1%208.avif",
    "https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67b429ed52efb6edf7d24b53_Free_iPad_Mockup_1%207.avif",
  ];

  return (
    <div className="section-padding">
      <div data-drag="false" data-speed="0.5" className="splide common-marquee-slider image-mockup-carousel">
        <div className="splide__track">
          <div className="splide__list">
            {images.map((image, index) => (
              <div key={index} data-wf--service-project-card--variant="desktop-screen" className="splide__slide">
                <div className="service-project-card-wrapper">
                  <div className="service-project-card">
                    <div className="service-project-card_figure">
                      <img
                        src={image}
                        loading="lazy"
                        width="560"
                        height="403"
                        alt={`Service Mockup ${index + 1}`}
                        sizes="(max-width: 560px) 100vw, 560px"
                        srcSet={`${image.replace('.avif', '-p-500.avif')} 500w, ${image} 560w`}
                        className="service-project-card_image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
