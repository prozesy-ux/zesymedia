import { useEffect, useRef } from 'react';

export const LogoCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let animationId: number;
    let position = 0;
    const speed = 0.5; // pixels per frame

    const animate = () => {
      position -= speed;
      
      // Reset position when first set of items scrolls out
      // Each item is approximately 293px (277px + 16px padding)
      const itemWidth = 293;
      const totalItems = 5; // 5 unique items
      const resetPoint = -(itemWidth * totalItems);
      
      if (position <= resetPoint) {
        position = 0;
      }
      
      carousel.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  const images = [
    {
      src: "https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67c82050ac4b308466c337e3_c65caf1d2b234f5cbf2bc85c1275d65c_iPad Pro_16.avif",
      alt: "Website Design 1"
    },
    {
      src: "https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67c8204fb4952448394c807a_7bcb0bd4991737fb4d8cbf33cfeb8d3c_iPad Pro_12.avif",
      alt: "Website Design 2"
    },
    {
      src: "https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67c82050dd70a478932282c2_Free_iPad_Mockup_1 40.avif",
      alt: "Website Design 3"
    },
    {
      src: "https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67c8204f2d33dcbfe9446726_Free_iPad_Mockup_1 41 (1).avif",
      alt: "Website Design 4"
    },
    {
      src: "https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67c8204fde8881483fc713f2_Free_iPad_Mockup_1 42.avif",
      alt: "Website Design 5"
    }
  ];

  // Duplicate images 6 times for seamless loop
  const duplicatedImages = [...images, ...images, ...images, ...images, ...images, ...images];

  return (
    <div className="items-center box-border caret-transparent flex flex-col justify-start">
      <div className="items-center box-border caret-transparent flex flex-wrap justify-start w-screen overflow-hidden">
        <div role="region" className="relative box-border caret-transparent w-full">
          <div className="relative box-border caret-transparent z-0 overflow-hidden">
            <div
              ref={carouselRef}
              role="presentation"
              className="box-border caret-transparent flex h-full will-change-transform"
              style={{ transform: 'translateX(0px)' }}
            >
              {duplicatedImages.map((image, index) => (
                <div
                  key={index}
                  role="group"
                  aria-label={`${(index % images.length) + 1} of ${images.length}`}
                  className="relative box-border caret-transparent shrink-0 list-none"
                >
                  <div className="box-border caret-transparent px-[8.00043px] md:px-[14.8051px]">
                    <div className="box-border caret-transparent w-[277.008px] md:w-[517.71px]">
                      <div className="relative box-border caret-transparent pt-[71.9643%]">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="absolute aspect-[auto_560_/_403] box-border caret-transparent h-full max-w-full align-bottom w-full inset-[0%] object-cover"
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
    </div>
  );
};
