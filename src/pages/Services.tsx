import { ServicesSection } from "@/sections/ServicesSection";
import { AIDesignSection } from "@/sections/AIDesignSection";
import { SkillsMarquee } from "@/sections/SkillsMarquee";

export const Services = () => {
  return (
    <div className="bg-zinc-50 pt-[120px] pb-20">
      <div className="flex flex-col gap-20">
        <ServicesSection />
        <AIDesignSection />
        <SkillsMarquee />
      </div>
    </div>
  );
};
