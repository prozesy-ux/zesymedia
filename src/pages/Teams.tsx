import { Hero } from "@/integrations/teams/sections/Hero";
import { TeamGrid } from "@/integrations/teams/sections/TeamGrid";
import { TestimonialCarousel } from "@/integrations/teams/sections/TestimonialCarousel";
import { CareerCTA } from "@/integrations/teams/sections/CareerCTA";

export const Teams = () => {
  return (
    <div className="box-border caret-transparent overflow-x-clip bg-[position:0px_0px]">
      <main className="box-border caret-transparent">
        <Hero />
        <TeamGrid />
        <TestimonialCarousel />
        <CareerCTA />
      </main>
    </div>
  );
};
