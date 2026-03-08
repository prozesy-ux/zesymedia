import { IndustryGrid } from "@/integrations/industry/sections/IndustryCardsSection/components/IndustryGrid";

export const IndustryCardsSection = () => {
  return (
    <section className="box-border caret-transparent">
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent px-5 py-[60px] md:px-[94px] md:py-[100px]">
          <div className="box-border caret-transparent max-w-[1252px] w-full z-[1] mx-auto">
            <div className="box-border caret-transparent">
              <IndustryGrid />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
