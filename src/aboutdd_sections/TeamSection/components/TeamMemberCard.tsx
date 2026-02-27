import { useEffect, useRef } from "react";

export type TeamMemberCardProps = {
  name: string;
  role: string;
  image: string;
};

export const TeamMemberCard = ({ name, role, image }: TeamMemberCardProps) => {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imgRef.current) return;
      
      const rect = imgRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress when element is in view
      if (rect.left < window.innerWidth && rect.right > 0) {
        const scrollProgress = Math.max(0, Math.min(1, (window.innerWidth - rect.left) / window.innerWidth));
        const scale = 1 + scrollProgress * 0.05; // Subtle zoom effect
        
        imgRef.current.style.transform = `scale(${scale})`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      role="group"
      className="relative box-border caret-transparent shrink-0 list-none max-w-[220px] w-full md:max-w-[335px]"
    >
      <div className="box-border caret-transparent overflow-hidden rounded-3xl">
        <img
          ref={imgRef}
          src={image}
          alt={name}
          className="aspect-[auto_335_/_504] box-border caret-transparent inline-block h-full max-w-full object-cover align-bottom w-full transition-transform duration-300 ease-out"
        />
      </div>
      <div className="text-zinc-50 items-center box-border caret-transparent gap-x-1 flex flex-col gap-y-1 text-center mt-3 md:gap-x-2 md:gap-y-2 md:mt-6">
        <h3 className="text-xl font-bold box-border caret-transparent leading-6 font-redhatdisplay_variablefont_wght md:text-[32px] md:leading-[38.4px]">
          {name}
        </h3>
        <div className="text-neutral-400 box-border caret-transparent">
          <div className="text-xl box-border caret-transparent tracking-[0.48px] leading-[30px] md:text-2xl md:leading-9">
            {role}
          </div>
        </div>
      </div>
    </div>
  );
};
