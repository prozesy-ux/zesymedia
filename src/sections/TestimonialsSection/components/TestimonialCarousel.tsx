import { useState, useRef, MouseEvent } from "react";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
  logo: string;
  videoUrl?: string; // Add video URLs here when available
};

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sofia Gouveia",
    role: "Design Director",
    company: "Esdiac",
    quote:
      "Working with Design Monks on our ESDIAC app and group websites was an excellent experience. They were patient, attentive to feedback, and delivered clean, consistent, high-quality work.",
    image:
      "https://c.animaapp.com/mkiynesyxwO7zZ/assets/68db83d7e2ef5cee4c7c64ad_Client_Sofia_Gouveia_916.avif",
    logo: "https://c.animaapp.com/mkiynesyxwO7zZ/assets/68dcdfc38248b93d8a3fe1ed_Logo_Esdiac_mono.svg",
  },
  {
    id: 2,
    name: "Austin",
    role: "CEO",
    company: "Clarity LLC",
    quote:
      "I’ve worked with Design Monks on three websites, and they’ve been nothing but exceptional. Their design is top-notch, development is reliable, and communication is always smooth.",
    image:
      "https://c.animaapp.com/mkiynesyxwO7zZ/assets/68db86d8ef94ad655fb9fd01_Client_Austin_916.avif",
    logo: "https://c.animaapp.com/mkiynesyxwO7zZ/assets/68db9056e42ba9fd6c172833_Logo_Clarity_mono.svg",
  },
  {
    id: 3,
    name: "Victor Okon",
    role: "COO & Co-founder",
    company: "Dlicio",
    quote:
      "Big shoutout to the Design Monks team. They brought our vision to life both visually and strategically. They nailed the balance between clean design and real business results.",
    image:
      "https://c.animaapp.com/mkiynesyxwO7zZ/assets/68e64d2785cf3cb4d1e5bcc1_Client_Dilicio_916.avif",
    logo: "https://c.animaapp.com/mkiynesyxwO7zZ/assets/6885ef94ab9e4ca1123be230_Logo_Dlicio_mono.svg",
  },
  {
    id: 4,
    name: "Neil Saidi",
    role: "Founder",
    company: "LeKlub",
    quote:
      "Had an amazing experience with Design Monks. Their talented team understood my vision and turned it into stunning visuals, with their impressive attention to detail skills.",
    image:
      "https://c.animaapp.com/mkiynesyxwO7zZ/assets/68c27038f25d2ac850921b7e_Client_LeKlub_reel.avif",
    logo: "https://c.animaapp.com/mkiynesyxwO7zZ/assets/6885f091d389d8df99129c17_Logo_leklub_mono.svg",
  },
  {
    id: 5,
    name: "Jahnnobi Rahman",
    role: "CEO & Founder",
    company: "Relaxy",
    quote:
      "Design Monks felt like part of our own team. They understood our vision, built a scalable UX we still use, and made the whole process easy. If you want more than just good looks, go with Design Monks.",
    image:
      "https://c.animaapp.com/mkiynesyxwO7zZ/assets/68e51a2880009d309ccf8a30_Client_Jahnobi_916.avif",
    logo: "https://c.animaapp.com/mkiynesyxwO7zZ/assets/688656b4cb56ce5a1e817819_Logo_Relaxy_mono.svg",
  },
  {
    id: 6,
    name: "Emran Hasan",
    role: "CEO & Co Founder",
    company: "Klasio",
    quote:
      "Thanks to Design Monks for building a world-class website that captured our vision and helped us land customers from day one. They went beyond design, researching trends and bringing great ideas.",
    image:
      "https://c.animaapp.com/mkiynesyxwO7zZ/assets/68c27001524a8683f8f0aff1_Client_Klasio_reel.avif",
    logo: "https://c.animaapp.com/mkiynesyxwO7zZ/assets/6885f07d9c093fad609a26bb_Logo_klasio_mono.svg",
  },
  {
    id: 7,
    name: "Moshiur Rahman Radif",
    role: "COO",
    company: "Ontik Technologies",
    quote:
      "We’ve worked with Design Monks for over 2 years on 10+ projects, and the experience has been outstanding. They deliver with precision, provide clear documentation, and make the whole process smooth.",
    image:
      "https://c.animaapp.com/mkiynesyxwO7zZ/assets/68db8732b22da6b432112dce_Client_Moshiur_Rahman_Radif_916.avif",
    logo: "https://c.animaapp.com/mkiynesyxwO7zZ/assets/6885f13ec2ad5470f81a0156_Logo_ontik_mono.svg",
  },
];

const TestimonialCard = ({
  testimonial,
  isDragging,
}: {
  testimonial: Testimonial;
  isDragging: boolean;
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = (e: React.MouseEvent) => {
    if (isDragging) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }

    if (videoRef.current) {
      if (testimonial.videoUrl) {
        setIsPlaying(true);
        videoRef.current.play();
      } else {
        console.warn("No video URL provided for this testimonial.");
        // Optional: You could trigger a modal or alert here if no video is present
      }
    }
  };

  return (
    <div
      role="group"
      aria-label={`Testimonial from ${testimonial.name}`}
      className="relative aspect-[9/16] box-border caret-transparent min-w-[272px] w-[272px] overflow-hidden rounded-3xl md:min-w-[396px] md:w-[396px] bg-neutral-900 select-none"
    >
      <video
        ref={videoRef}
        poster={testimonial.image}
        src={testimonial.videoUrl}
        className="absolute inset-0 w-full h-full object-cover"
        playsInline
        controls={isPlaying}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      />

      {/* Overlay Content - Hidden when playing */}
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${
          isPlaying ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        {/* Poster Image (Fallback if video doesn't load poster correctly or for custom styling) */}
        <img
          src={testimonial.image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover -z-10 pointer-events-none"
        />

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={handlePlay}
            className="group relative flex items-center justify-center w-12 h-12 md:w-20 md:h-20 transition-transform hover:scale-110 focus:outline-none"
            aria-label="Play video"
          >
            <img
              src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-10.svg"
              alt="Play"
              className="w-full h-full drop-shadow-lg pointer-events-none"
            />
          </button>
        </div>

        {/* Text Content */}
        <div className="absolute bottom-0 w-full p-4 md:px-8 md:py-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent backdrop-blur-[1px]">
          <div className="flex flex-col gap-4">
            <div className="space-y-2">
              <img
                src={testimonial.logo}
                alt={`${testimonial.company} logo`}
                className="h-8 md:h-12 w-auto object-contain pointer-events-none"
              />
              <p className="text-zinc-50 text-sm md:text-base leading-snug line-clamp-4 md:line-clamp-none">
                {testimonial.quote}
              </p>
            </div>
            <div>
              <p className="text-zinc-50 text-base md:text-xl font-bold font-redhatdisplay_variablefont_wght">
                {testimonial.name}
              </p>
              <p className="text-neutral-300 text-xs md:text-sm">
                {testimonial.role} @ {testimonial.company}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TestimonialCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (e: MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDown(true);
    setIsDragging(false);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
    setTimeout(() => setIsDragging(false), 50);
  };

  const handleMouseUp = () => {
    setIsDown(false);
    setTimeout(() => setIsDragging(false), 50);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDown || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed
    if (Math.abs(walk) > 5) {
      setIsDragging(true);
    }
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="box-border caret-transparent w-full">
      <div
        ref={scrollRef}
        role="list"
        className={`flex overflow-x-auto gap-4 md:gap-8 w-full pb-4 -mx-5 px-5 md:-mx-[94px] md:px-[94px] hide-scrollbar cursor-grab active:cursor-grabbing ${
          isDown ? "snap-none" : "snap-x snap-mandatory"
        }`}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {TESTIMONIALS.map((testimonial) => (
          <div key={testimonial.id} className="snap-center shrink-0">
            <TestimonialCard
              testimonial={testimonial}
              isDragging={isDragging}
            />
          </div>
        ))}
      </div>
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};
