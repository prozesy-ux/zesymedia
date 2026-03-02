import { BottomNavbar } from "@/sections/BottomNavbar";
import { Hero } from "@/sections/Hero";
import { TeamGrid } from "@/sections/TeamGrid";
import { TestimonialCarousel } from "@/sections/TestimonialCarousel";
import { CareerCTA } from "@/sections/CareerCTA";
import { Footer } from "@/sections/Footer";
import { CookieBanner } from "@/sections/CookieBanner";

export const App = () => {
  return (
    <body className="text-zinc-800 text-sm not-italic normal-nums font-normal accent-auto bg-zinc-50 box-border caret-transparent block tracking-[normal] leading-5 list-outside list-disc min-h-full pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-outfit_variablefont_wght">
      <div className="box-border caret-transparent overflow-x-clip bg-[position:0px_0px]">
        <div className="box-border caret-transparent hidden before:accent-auto before:caret-transparent before:text-zinc-800 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-outfit_variablefont_wght after:accent-auto after:caret-transparent after:clear-both after:text-zinc-800 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-outfit_variablefont_wght"></div>
        <BottomNavbar />
        <main className="box-border caret-transparent">
          <Hero />
          <TeamGrid />
          <TestimonialCarousel />
          <CareerCTA />
        </main>
        <Footer />
      </div>
      <CookieBanner />
      <div className="box-border caret-transparent">
        <div className="caret-transparent"></div>
      </div>
      <div className="box-border caret-transparent">
        <div className="caret-transparent">
          <button className="text-stone-950/30 text-[13.3333px] bg-zinc-100/30 caret-transparent leading-[normal] text-center border-neutral-500/30 font-arial">
            <img
              src="https://c.animaapp.com/mlcfrtj47me9da/assets/icon-12.svg"
              alt="Icon"
              className="caret-transparent h-4 w-4"
            />
            <span className="caret-transparent">Add</span>
          </button>
          <button className="text-stone-950/30 text-[13.3333px] bg-zinc-100/30 caret-transparent leading-[normal] text-center border-neutral-500/30 font-arial">
            <img
              src="https://c.animaapp.com/mlcfrtj47me9da/assets/icon-13.svg"
              alt="Icon"
              className="caret-transparent"
            />
          </button>
        </div>
      </div>
    </body>
  );
};
