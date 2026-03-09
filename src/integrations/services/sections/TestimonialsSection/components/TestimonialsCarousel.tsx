import { useEffect } from "react";
import { TestimonialCard } from "@/integrations/services/sections/TestimonialsSection/components/TestimonialCard";

const testimonialsData = [
  {
    id: 1,
    ariaLabel: "1 / 22",
    clientImageUrl: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/684bfe5a1dc0c4a63566d47a_Client_Learndojo.avif",
    quoteIconUrl: "https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/673b386e3222be044e1a4198_.webp",
    testimonialText: "We used Prozesy Media for two projects and he was reliable and creative. His design solutions worked well for what we needed and he helped create a good theme/style for our websites. I would recommend.",
    clientName: "Sajan Devshi",
    clientTitle: "Founder @ Learndojo",
    companyLogoUrl: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68dcdff8dcef23336f36e908_Logo_Learndojo_color.svg",
  },
  {
    id: 2,
    ariaLabel: "2 / 22",
    clientImageUrl: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68e51a24ecc4a5210747d172_Client_Jahnobi.avif",
    quoteIconUrl: "https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/673b386e3222be044e1a4198_.webp",
    testimonialText: "Prozesy Media felt like part of our own team. They understood our vision, built a scalable UX we still use, and made the whole process easy. If you want more than just good looks, go with Prozesy Media.",
    clientName: "Jahnnobi Rahman",
    clientTitle: "CEO & Founder @ Relaxy",
    companyLogoUrl: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/688656ba5ce5b5ccb771c5a0_Logo_Relaxy_color.svg",
  },
  {
    id: 3,
    ariaLabel: "3 / 22",
    clientImageUrl: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6860efe1964edd477423306a_Client_Klasio.avif",
    quoteIconUrl: "https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/673b386e3222be044e1a4198_.webp",
    testimonialText: "Thanks to Prozesy Media for building a world-class website that captured our vision and helped us land customers from day one. They went beyond design, researching trends and bringing great ideas, all while staying responsive and on time. Highly recommended!",
    clientName: "Emran Hasan",
    clientTitle: "CEO & Co Founder @ Klasio",
    companyLogoUrl: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f07fff3dcd6cc8b2679a_Logo_klasio_color.svg",
  },
  {
    id: 4,
    ariaLabel: "4 / 22",
    clientImageUrl: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68db872c298ed3df2fd8ea8a_Client_Moshiur Rahman Radif.avif",
    quoteIconUrl: "https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/673b386e3222be044e1a4198_.webp",
    testimonialText: "We've worked with Prozesy Media for over 2 years on 10+ projects, and the experience has been outstanding. They deliver with precision, provide clear documentation, and make the whole process smooth and worry-free. With them, our design is always in safe hands.",
    clientName: "Moshiur Rahman Radif",
    clientTitle: "COO @ Ontik Technologies",
    companyLogoUrl: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f13f2a63a1885014077b_Logo_ontik_color.svg",
  },
  {
    id: 5,
    ariaLabel: "5 / 22",
    clientImageUrl: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/684befe7696e3ebd23c7a3f7_6841287f022320ba6d4df48a_Client_Jenna.avif",
    quoteIconUrl: "https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/673b386e3222be044e1a4198_.webp",
    testimonialText: "Prozesy Media was a pleasure to work with. They were proactive, and efficient, and never hesitated to challenge me in my assumptions. The design they built for me was beautiful, and I would not hesitate to retain them again in the future",
    clientName: "Jenna Carvalho",
    clientTitle: "Principal @ Guardian Estate Company",
    companyLogoUrl: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f036d6d77ef9390234d7_Logo_Guardian_color.svg",
  },
];

export const TestimonialsCarousel = () => {
  useEffect(() => {
    // Dynamically load Swiper CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';
    document.head.appendChild(link);

    // Dynamically load Swiper JS
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
    script.async = true;
    
    script.onload = () => {
      // @ts-ignore
      if (window.Swiper) {
        // @ts-ignore
        const swiper = new window.Swiper('.testimonial', {
          effect: 'cards',
          grabCursor: true,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        });

        const nextButton = document.querySelector('.next-slide');
        const prevButton = document.querySelector('.back-slide');

        if (nextButton) {
          nextButton.addEventListener('click', () => swiper.slideNext());
        }
        if (prevButton) {
          prevButton.addEventListener('click', () => swiper.slidePrev());
        }
      }
    };
    
    document.body.appendChild(script);

    return () => {
      if (document.head.contains(link)) document.head.removeChild(link);
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="testimonial-slider-wrap">
      <div>
        <div className="testimonial-nav-button-wrap">
          <div className="testimonial-slider-arrow-block is-bottom">
            <div className="slider-arrow-block back-slide cursor-pointer">
              <img 
                loading="lazy" 
                src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67ae2c79f3fc1a49efd04406_Union%20(1).svg" 
                alt="" 
                className="slider-arrow-icon" 
              />
            </div>
          </div>
          <div className="swiper-pagination is-none-lg none"></div>
          <div className="testimonial-slider-arrow-block is-right is-bottom">
            <div className="slider-arrow-block next-slide cursor-pointer">
              <img 
                loading="lazy" 
                src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/673b44551891a7f577607875_Union%20(1).webp" 
                alt="" 
                className="slider-arrow-icon" 
              />
            </div>
          </div>
        </div>
        <div className="swiper testimonial w-dyn-list">
          <div role="list" className="swiper-wrapper w-dyn-items">
            {testimonialsData.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                ariaLabel={testimonial.ariaLabel}
                slideClassName="swiper-slide testimonial-card w-dyn-item"
                clientImageUrl={testimonial.clientImageUrl}
                clientImageAlt=""
                quoteIconUrl={testimonial.quoteIconUrl}
                quoteIconAlt=""
                testimonialText={testimonial.testimonialText}
                clientName={testimonial.clientName}
                clientTitle={testimonial.clientTitle}
                companyLogoUrl={testimonial.companyLogoUrl}
                companyLogoAlt=""
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
