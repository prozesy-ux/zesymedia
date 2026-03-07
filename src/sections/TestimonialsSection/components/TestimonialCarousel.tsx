import { useState, useRef, MouseEvent } from "react";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
  logo: string;
  videoUrl: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sofia Gouveia",
    role: "Design Director",
    company: "Esdiac",
    quote:
      "Working with Prozesy Media on our ESDIAC app and group websites was an excellent experience. They were patient, attentive to feedback, and delivered clean, consistent, high-quality work.",
    image:
      "https://anpeyqpnsavhykstwwbq.supabase.co/storage/v1/object/public/images/Our%20Team/73da6134-cef3-4873-bf61-80c04cac5397-1772643256472.png",
    logo: "https://c.animaapp.com/mkiynesyxwO7zZ/assets/68dcdfc38248b93d8a3fe1ed_Logo_Esdiac_mono.svg",
    videoUrl: "https://anpeyqpnsavhykstwwbq.supabase.co/storage/v1/object/public/images/Our%20Team/73be45a6-3d9c-4bb6-a324-35db89d14199-1772645649164.mp4",
  },
  {
    id: 2,
    name: "Austin",
    role: "CEO",
    company: "Clarity LLC",
    quote:
      "I’ve worked with Prozesy Media on three websites, and they’ve been nothing but exceptional. Their design is top-notch, development is reliable, and communication is always smooth.",
    image:
      "https://anpeyqpnsavhykstwwbq.supabase.co/storage/v1/object/public/images/Our%20Team/68aedc94-18ff-480a-8885-0c499fad403e-1772648431342.png",
    logo: "https://c.animaapp.com/mkiynesyxwO7zZ/assets/68db9056e42ba9fd6c172833_Logo_Clarity_mono.svg",
    videoUrl: "https://anpeyqpnsavhykstwwbq.supabase.co/storage/v1/object/public/images/Our%20Team/3cec47b9-1f48-4df5-bcb0-ceed5ee4f63f-1772651058169.mp4",
  },
  {
    id: 3,
    name: "Victor Okon",
    role: "COO & Co-founder",
    company: "Dlicio",
    quote:
      "Big shoutout to the Prozesy Media team. They brought our vision to life both visually and strategically. They nailed the balance between clean design and real business results.",
    image:
      "https://anpeyqpnsavhykstwwbq.supabase.co/storage/v1/object/public/images/Our%20Team/2468dd5f-e8b7-48b2-8f2b-1a2bfde14ab7-1772656012474.png",
    logo: "https://c.animaapp.com/mkiynesyxwO7zZ/assets/6885ef94ab9e4ca1123be230_Logo_Dlicio_mono.svg",
    videoUrl: "https://anpeyqpnsavhykstwwbq.supabase.co/storage/v1/object/public/images/Our%20Team/fa23bd28-1e4a-49a6-bb8e-7a2e53547b0d-1772656108973.mp4",
  },
  {
    id: 4,
    name: "Neil Saidi",
    role: "Founder",
    company: "LeKlub",
    quote:
      "Had an amazing experience with Prozesy Media. Their talented team understood my vision and turned it into stunning visuals, with their impressive attention to detail skills.",
    image:
      "https://anpeyqpnsavhykstwwbq.supabase.co/storage/v1/object/public/images/Our%20Team/dd700923-0e31-4523-a4ac-44d03eb46788-1772667195815.png",
    logo: "https://c.animaapp.com/mkiynesyxwO7zZ/assets/6885f091d389d8df99129c17_Logo_leklub_mono.svg",
    videoUrl: "https://anpeyqpnsavhykstwwbq.supabase.co/storage/v1/object/public/images/Our%20Team/89c73cdc-2887-4c34-8952-1aa10ae81f5b-1772667138958.mp4",
  },
  {
    id: 5,
    name: "Jahnnobi Rahman",
    role: "CEO & Founder",
    company: "Relaxy",
    quote:
      "Prozesy Media felt like part of our own team. They understood our vision, built a scalable UX we still use, and made the whole process easy. If you want more than just good looks, go with Prozesy Media.",
    image:
      "https://anpeyqpnsavhykstwwbq.supabase.co/storage/v1/object/public/images/Our%20Team/0b4b210c-cfe0-4304-800d-9783a127b34e-1772669605644.png",
    logo: "https://c.animaapp.com/mkiynesyxwO7zZ/assets/688656b4cb56ce5a1e817819_Logo_Relaxy_mono.svg",
    videoUrl: "https://anpeyqpnsavhykstwwbq.supabase.co/storage/v1/object/public/images/Our%20Team/84ac74f7-7144-4d1b-8cc1-0a281fd917ae-1772669610513.mp4",
  },
  {
    id: 6,
    name: "Emran Hasan",
    role: "CEO & Co Founder",
    company: "Klasio",
    quote:
      "Thanks to Prozesy Media for building a world-class website that captured our vision and helped us land customers from day one. They went beyond design, researching trends and bringing great ideas.",
    image:
      "https://c.animaapp.com/mkiynesyxwO7zZ/assets/68c27001524a8683f8f0aff1_Client_Klasio_reel.avif",
    logo: "https://c.animaapp.com/mkiynesyxwO7zZ/assets/6885f07d9c093fad609a26bb_Logo_klasio_mono.svg",
    videoUrl: "",
  },
  {
    id: 7,
    name: "Moshiur Rahman Radif",
    role: "COO",
    company: "Ontik Technologies",
    quote:
      "We’ve worked with Prozesy Media for over 2 years on 10+ projects, and the experience has been outstanding. They deliver with precision, provide clear documentation, and make the whole process smooth.",
    image:
      "https://c.animaapp.com/mkiynesyxwO7zZ/assets/68db8732b22da6b432112dce_Client_Moshiur_Rahman_Radif_916.avif",
    logo: "https://c.animaapp.com/mkiynesyxwO7zZ/assets/6885f13ec2ad5470f81a0156_Logo_ontik_mono.svg",
    videoUrl: "",
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

  const handleMouseEnter = async () => {
    if (!videoRef.current || !testimonial.videoUrl || isDragging) return;

    // Keep cover visible until the video fires onPlaying.
    setIsPlaying(false);
    videoRef.current.currentTime = 0;
    videoRef.current.muted = false;

    try {
      await videoRef.current.play();
    } catch {
      setIsPlaying(false);
    }
  };

  const handleMouseLeave = () => {
    if (!videoRef.current) return;
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    setIsPlaying(false);
  };

  return (
    <div
      role="group"
      aria-label={`Testimonial from ${testimonial.name}`}
      className="relative aspect-[9/16] box-border caret-transparent min-w-[300px] w-[300px] overflow-hidden rounded-3xl md:min-w-[360px] md:w-[360px] lg:min-w-[420px] lg:w-[420px] bg-neutral-900 select-none"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        poster={testimonial.image}
        src={testimonial.videoUrl}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-150 ${
          isPlaying ? "opacity-100" : "opacity-0"
        }`}
        playsInline
        muted={false}
        controls={false}
        preload="metadata"
        onPlaying={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      />

      <div className="absolute inset-0 transition-opacity duration-300">
        {!isPlaying && testimonial.videoUrl && (
          <>
            <img
              src={testimonial.image}
              alt=""
              className="absolute inset-0 z-0 w-full h-full object-cover pointer-events-none"
            />
            <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
              <img
                src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-10.svg"
                alt="Play"
                className="h-12 w-12 drop-shadow-lg md:h-20 md:w-20"
              />
            </div>
          </>
        )}

        {!isPlaying && !testimonial.videoUrl && (
          <img
            src={testimonial.image}
            alt=""
            className="absolute inset-0 z-0 w-full h-full object-cover pointer-events-none"
          />
        )}

        {(!isPlaying || !testimonial.videoUrl) && (
          <div className="absolute bottom-0 z-20 w-full p-4 md:px-8 md:py-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent backdrop-blur-[1px]">
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
        )}

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
        className={`relative left-1/2 -translate-x-1/2 flex overflow-x-auto gap-6 md:gap-8 lg:gap-10 w-screen pb-4 px-5 md:px-[94px] hide-scrollbar cursor-grab active:cursor-grabbing ${
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
