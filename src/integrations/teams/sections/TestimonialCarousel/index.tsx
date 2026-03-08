import { TestimonialSlider } from "@/integrations/teams/sections/TestimonialCarousel/components/TestimonialSlider";
import { TestimonialContent } from "@/integrations/teams/sections/TestimonialCarousel/components/TestimonialContent";
import { CarouselControls } from "@/integrations/teams/sections/TestimonialCarousel/components/CarouselControls";
import { useEffect, useRef, useState } from "react";

export const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const testimonials = [
    {
      image: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68b819c1deb8e68db3dba2d6_DP_Saif Sarwar.avif",
      name: "Saif Sarwar",
      role: "Product Designer",
      quote: "Being a part of Prozesy Media truly feels like a blessing. I get to work with amazing teammates and learn from great mentors. Also, working remotely not only saves time but also boosts productivity. For me, Prozesy Media isn't just about work, it's about being part of a team that genuinely understands the balance between freedom and responsibility."
    },
    {
      image: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68b81a54cf1e021d5942774a_DP_Sourav Dhali.avif",
      name: "Sourav Dhali",
      role: "Product Designer",
      quote: "Being a part of Prozesy Media truly feels like a blessing. I get to work with amazing teammates and learn from great mentors. Also, working remotely not only saves time but also boosts productivity. For me, Prozesy Media isn't just about work, it's about being part of a team that genuinely understands the balance between freedom and responsibility."
    },
    {
      image: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68b8197ba8f360fc1827ad50_DP_Sabiha Sultana.avif",
      name: "Sabiha Sultana",
      role: "Content Writer",
      quote: "Working at Prozesy Media has been an incredible journey. The collaborative environment and supportive team make every project enjoyable and rewarding."
    },
    {
      image: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68b819e46f5ee25b86cc4be2_DP_Abid Hasan.avif",
      name: "Abid Hasan",
      role: "Project Manager",
      quote: "Prozesy Media provides the perfect balance of creative freedom and professional growth. It's a place where innovation thrives."
    },
    {
      image: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68b81a48fe9e99eff8a88cea_DP_Sakib Reza Moon.avif",
      name: "Sakib Reza Moon",
      role: "UI Designer",
      quote: "The culture at Prozesy Media is exceptional. Every day brings new learning opportunities and challenges that help me grow as a designer."
    },
    {
      image: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68b81a19695263f17b57965e_DP_Hafij Uddin Ahmed.avif",
      name: "Hafij Uddin Ahmed",
      role: "UI Designer",
      quote: "I'm grateful to be part of such a talented team. The remote work setup and flexible environment make it easy to maintain work-life balance."
    },
    {
      image: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68b819ff7d9017b942dfb25a_DP_Shakila Yesmin.avif",
      name: "Shakila Yesmin",
      role: "Business Development Manager",
      quote: "Prozesy Media has given me the platform to excel in my career while working with amazing clients and projects from around the world."
    }
  ];

  const startAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
  };

  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  };

  useEffect(() => {
    if (isAutoPlaying) {
      startAutoPlay();
    }
    return () => stopAutoPlay();
  }, [isAutoPlaying, testimonials.length]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  return (
    <section 
      className="bg-violet-50 box-border caret-transparent overflow-hidden"
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="box-border caret-transparent hidden before:accent-auto before:caret-transparent before:text-zinc-800 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-outfit_variablefont_wght after:accent-auto after:caret-transparent after:clear-both after:text-zinc-800 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-outfit_variablefont_wght"></div>
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent px-5 py-[60px] md:px-[94px] md:py-[100px]">
          <div className="box-border caret-transparent max-w-[1252px] w-full z-[1] mx-auto">
            <div className="box-border caret-transparent gap-x-[30px] grid grid-cols-none gap-y-[30px] mx-auto md:gap-x-[normal] md:grid-cols-[22.8365%_72.6763%_4.48718%] md:gap-y-[normal]">
              <TestimonialSlider 
                testimonials={testimonials}
                currentIndex={currentIndex}
              />
              <TestimonialContent 
                testimonial={testimonials[currentIndex]}
              />
              <CarouselControls 
                onPrevious={handlePrevious}
                onNext={handleNext}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
