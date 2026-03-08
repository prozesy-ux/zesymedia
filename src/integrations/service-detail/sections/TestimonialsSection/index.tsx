import { useEffect, useRef, useState } from "react";
import { TestimonialCard } from "@/integrations/service-detail/sections/TestimonialsSection/components/TestimonialCard";

const testimonials = [
  {
    ariaLabel: "1 / 9",
    quoteIconSrc: "https://c.animaapp.com/mlfdffn0RwPDKV/assets/icon-11.svg",
    quoteIconAlt: "Icon",
    testimonialText: "Working with Prozesy Media on our ESDIAC app and group websites was an excellent experience. They were patient, attentive to feedback, and delivered clean, consistent, high-quality work. We're proud of the results and happy to continue our long-term partnership with them.",
    avatarSrc: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68db83d7e2ef5cee4c7c64ad_Client_Sofia Gouveia_916.avif",
    avatarAlt: "",
    decorIconSrc: "https://c.animaapp.com/mlfdffn0RwPDKV/assets/icon-12.svg",
    decorIconAlt: "Icon",
    authorName: "Sofia Gouveia",
    authorTitle: "Design Director @ Esdiac",
    companyLogoSrc: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68dcdfc38248b93d8a3fe1ed_Logo_Esdiac_mono.svg",
    companyLogoAlt: ""
  },
  {
    ariaLabel: "2 / 9",
    quoteIconSrc: "https://c.animaapp.com/mlfdffn0RwPDKV/assets/icon-11.svg",
    quoteIconAlt: "Icon",
    testimonialText: "I've worked with Prozesy Media on three websites, and they've been nothing but exceptional. Their design is top-notch, development is reliable, and communication is always smooth. They quickly act on feedback and deliver exactly what I need. For me, they're a 10/10 partner for all things design and development.",
    avatarSrc: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68db86d8ef94ad655fb9fd01_Client_Austin_916.avif",
    avatarAlt: "",
    decorIconSrc: "https://c.animaapp.com/mlfdffn0RwPDKV/assets/icon-12.svg",
    decorIconAlt: "Icon",
    authorName: "Austin",
    authorTitle: "CEO @ Clarity LLC",
    companyLogoSrc: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68db9056e42ba9fd6c172833_Logo_Clarity_mono.svg",
    companyLogoAlt: ""
  },
  {
    ariaLabel: "3 / 9",
    quoteIconSrc: "https://c.animaapp.com/mlfdffn0RwPDKV/assets/icon-11.svg",
    quoteIconAlt: "Icon",
    testimonialText: "Prozesy Media is a professional, reliable partner for end-to-end product builds. From clean, modern designs to seamless development with Dev Monks, they exceeded my expectations. I couldn't be happier with the collaboration!",
    avatarSrc: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/697c78b3798750901911bb75_Client_Anika _916.avif",
    avatarAlt: "",
    decorIconSrc: "https://c.animaapp.com/mlfdffn0RwPDKV/assets/icon-12.svg",
    decorIconAlt: "Icon",
    authorName: "Anika",
    authorTitle: "Founder @ Coinpulse",
    companyLogoSrc: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/697b6e3416493b65e726d165_Logo_Coinpulse_ mono.svg",
    companyLogoAlt: ""
  },
  {
    ariaLabel: "4 / 9",
    quoteIconSrc: "https://c.animaapp.com/mlfdffn0RwPDKV/assets/icon-11.svg",
    quoteIconAlt: "Icon",
    testimonialText: "Working with Prozesy Media was a great experience. They translated our business goals into clean, aesthetic designs with total transparency. The process was fast and stress-free, even in the complex cybersecurity space. They are a patient, committed, and highly recommended design partner.",
    avatarSrc: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6972023ccec47fa8734cf934_Client_Armen Avagyan _916.avif",
    avatarAlt: "",
    decorIconSrc: "https://c.animaapp.com/mlfdffn0RwPDKV/assets/icon-12.svg",
    decorIconAlt: "Icon",
    authorName: "Armen Avagyan",
    authorTitle: "CEO & Co Founder @ Fraus",
    companyLogoSrc: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/69720678ee0f40386f6b4992_Logo_Fraus_mono.svg",
    companyLogoAlt: ""
  },
  {
    ariaLabel: "5 / 9",
    quoteIconSrc: "https://c.animaapp.com/mlfdffn0RwPDKV/assets/icon-11.svg",
    quoteIconAlt: "Icon",
    testimonialText: "Big shoutout to the Prozesy Media team. They brought our vision to life both visually and strategically. They nailed the balance between clean design and real business results, and their transparency and responsiveness made everything smooth. The unlimited revisions gave us real peace of mind. ",
    avatarSrc: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68e64d2785cf3cb4d1e5bcc1_Client_Dilicio_916.avif",
    avatarAlt: "",
    decorIconSrc: "https://c.animaapp.com/mlfdffn0RwPDKV/assets/icon-12.svg",
    decorIconAlt: "Icon",
    authorName: "Victor Okon",
    authorTitle: "COO & Co-founder @ Dlicio",
    companyLogoSrc: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885ef94ab9e4ca1123be230_Logo_Dlicio_mono.svg",
    companyLogoAlt: ""
  },
  {
    ariaLabel: "6 / 9",
    quoteIconSrc: "https://c.animaapp.com/mlfdffn0RwPDKV/assets/icon-11.svg",
    quoteIconAlt: "Icon",
    testimonialText: "Had an amazing experience with Prozesy Media. Their talented team understood my vision and turned it into stunning visuals,with their impressive attention to detail skills. I highly recommend their high-quality design services.",
    avatarSrc: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68c27038f25d2ac850921b7e_Client_LeKlub_reel.avif",
    avatarAlt: "",
    decorIconSrc: "https://c.animaapp.com/mlfdffn0RwPDKV/assets/icon-12.svg",
    decorIconAlt: "Icon",
    authorName: "Neil Saidi",
    authorTitle: "Founder @ LeKlub",
    companyLogoSrc: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f091d389d8df99129c17_Logo_leklub_mono.svg",
    companyLogoAlt: ""
  },
  {
    ariaLabel: "7 / 9",
    quoteIconSrc: "https://c.animaapp.com/mlfdffn0RwPDKV/assets/icon-11.svg",
    quoteIconAlt: "Icon",
    testimonialText: "Prozesy Media felt like part of our own team. They understood our vision, built a scalable UX we still use, and made the whole process easy. If you want more than just good looks, go with Prozesy Media.",
    avatarSrc: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68e51a2880009d309ccf8a30_Client_Jahnobi_916.avif",
    avatarAlt: "",
    decorIconSrc: "https://c.animaapp.com/mlfdffn0RwPDKV/assets/icon-12.svg",
    decorIconAlt: "Icon",
    authorName: "Jahnnobi Rahman",
    authorTitle: "CEO & Founder @ Relaxy",
    companyLogoSrc: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/688656b4cb56ce5a1e817819_Logo_Relaxy_mono.svg",
    companyLogoAlt: ""
  },
  {
    ariaLabel: "8 / 9",
    quoteIconSrc: "https://c.animaapp.com/mlfdffn0RwPDKV/assets/icon-11.svg",
    quoteIconAlt: "Icon",
    testimonialText: "Thanks to Prozesy Media for building a world-class website that captured our vision and helped us land customers from day one. They went beyond design, researching trends and bringing great ideas, all while staying responsive and on time. Highly recommended!",
    avatarSrc: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68c27001524a8683f8f0aff1_Client_Klasio_reel.avif",
    avatarAlt: "",
    decorIconSrc: "https://c.animaapp.com/mlfdffn0RwPDKV/assets/icon-12.svg",
    decorIconAlt: "Icon",
    authorName: "Emran Hasan",
    authorTitle: "CEO & Co Founder @ Klasio",
    companyLogoSrc: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f07d9c093fad609a26bb_Logo_klasio_mono.svg",
    companyLogoAlt: ""
  },
  {
    ariaLabel: "9 / 9",
    quoteIconSrc: "https://c.animaapp.com/mlfdffn0RwPDKV/assets/icon-11.svg",
    quoteIconAlt: "Icon",
    testimonialText: "We've worked with Prozesy Media for over 2 years on 10+ projects, and the experience has been outstanding. They deliver with precision, provide clear documentation, and make the whole process smooth and worry-free. With them, our design is always in safe hands.",
    avatarSrc: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68db8732b22da6b432112dce_Client_Moshiur Rahman Radif_916.avif",
    avatarAlt: "",
    decorIconSrc: "https://c.animaapp.com/mlfdffn0RwPDKV/assets/icon-12.svg",
    decorIconAlt: "Icon",
    authorName: "Moshiur Rahman Radif",
    authorTitle: "COO @ Ontik Technologies",
    companyLogoSrc: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f13ec2ad5470f81a0156_Logo_ontik_mono.svg",
    companyLogoAlt: ""
  }
];

export const TestimonialsSection = () => {
  const [offset, setOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    let lastTime = Date.now();
    const speed = 50; // pixels per second

    const animate = () => {
      const currentTime = Date.now();
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      setOffset((prevOffset) => {
        const newOffset = prevOffset + speed * deltaTime;
        
        // Calculate total width of one set of cards
        // Each card is approximately 824px (792px + margins)
        const cardWidth = 824;
        const totalWidth = testimonials.length * cardWidth;
        
        // Reset when we've scrolled through one complete set
        if (newOffset >= totalWidth) {
          return newOffset - totalWidth;
        }
        
        return newOffset;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Triple the testimonials array for seamless looping
  const tripleTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <div className="box-border caret-transparent">
      <div className="bg-zinc-50 box-border caret-transparent">
        <div className="box-border caret-transparent px-5 py-[60px] md:px-[94px] md:py-[100px]">
          <div className="box-border caret-transparent max-w-[1252px] w-full z-[1] mx-auto">
            <div className="box-border caret-transparent gap-x-8 flex flex-col gap-y-8 md:gap-x-14 md:gap-y-14">
              <div className="items-end box-border caret-transparent gap-x-4 grid auto-cols-[1fr] grid-cols-[1.5fr_1fr] grid-rows-[auto] justify-items-stretch gap-y-4">
                <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4">
                  <div className="box-border caret-transparent flex">
                    <div className="text-green-700 box-border caret-transparent border border-emerald-400 px-3 py-1 rounded-3xl border-solid">
                      <div className="text-sm box-border caret-transparent leading-[21px] md:text-base md:leading-6">
                        Client Stories
                      </div>
                    </div>
                  </div>
                  <h2 className="text-neutral-950 text-[28px] font-bold box-border caret-transparent leading-[33.6px] font-redhatdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                    Success{" "}
                    <em className="text-[28px] italic box-border caret-transparent leading-[33.6px] capitalize font-playfairdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                      Stories
                    </em>
                    <br className="text-[28px] box-border caret-transparent leading-[33.6px] md:text-5xl md:leading-[57.6px]" />
                    That{" "}
                    <em className="text-[28px] italic box-border caret-transparent leading-[33.6px] capitalize font-playfairdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                      Inspire Us
                    </em>
                  </h2>
                </div>
              </div>
              <div className="box-border caret-transparent overflow-hidden">
                <div
                  ref={containerRef}
                  role="list"
                  className="box-border caret-transparent gap-x-4 flex gap-y-4 md:gap-x-8 md:gap-y-8"
                  style={{ transform: `translateX(-${offset}px)` }}
                >
                  {tripleTestimonials.map((testimonial, index) => (
                    <TestimonialCard key={`${testimonial.authorName}-${index}`} {...testimonial} />
                  ))}
                </div>
                <span className="box-border caret-transparent"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
