import { IndustriesHeader } from "@/integrations/industry-detail/sections/IndustriesSection/components/IndustriesHeader";
import { IndustriesCarousel } from "@/integrations/industry-detail/sections/IndustriesSection/components/IndustriesCarousel";
import { MobileCTA } from "@/integrations/industry-detail/sections/IndustriesSection/components/MobileCTA";

export const IndustriesSection = () => {
  return (
    <section className="bg-neutral-950 box-border caret-transparent min-h-[auto] min-w-[auto]">
      <div className="box-border caret-transparent py-[60px] md:py-[100px]">
        <div className="box-border caret-transparent max-w-[1252px] w-full mx-auto">
          <IndustriesHeader />
        </div>
        <div className="items-center box-border caret-transparent flex flex-col justify-start">
          <div className="items-center box-border caret-transparent gap-x-2 justify-start min-h-[auto] min-w-[auto] gap-y-2 w-screen">
            <div
              role="region"
              className="relative box-border caret-transparent"
            >
              <IndustriesCarousel />
            </div>
            <div className="box-border caret-transparent before:accent-auto before:caret-transparent before:text-zinc-800 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-outfit_variablefont_wght after:accent-auto after:caret-transparent after:clear-both after:text-zinc-800 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-outfit_variablefont_wght"></div>
          </div>
        </div>
        <div className="box-border caret-transparent mt-6 px-5 md:mt-0 md:px-0">
          <MobileCTA />
        </div>
      </div>
    </section>
  );
};
