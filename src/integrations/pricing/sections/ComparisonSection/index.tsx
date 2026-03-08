import { ComparisonTable } from "@/integrations/pricing/sections/ComparisonSection/components/ComparisonTable";

export const ComparisonSection = () => {
  return (
    <div className="box-border caret-transparent gap-x-10 flex flex-col gap-y-10">
      <div className="items-center box-border caret-transparent gap-x-4 flex flex-col justify-start min-h-[auto] min-w-[auto] gap-y-4 text-center">
        <div className="box-border caret-transparent flex min-h-[auto] min-w-[auto]">
          <div className="text-green-700 box-border caret-transparent min-h-[auto] min-w-[auto] border border-emerald-400 px-3 py-1 rounded-3xl border-solid">
            <div className="text-sm box-border caret-transparent leading-[21px] md:text-base md:leading-6">
              Why Choose Us
            </div>
          </div>
        </div>
        <div className="text-neutral-950 box-border caret-transparent min-h-[auto] min-w-[auto]">
          <h2 className="text-[28px] font-bold box-border caret-transparent leading-[33.6px] font-redhatdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
            <span className="text-[28px] italic box-border caret-transparent leading-[33.6px] capitalize font-playfairdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
              Prozesy Media’s
            </span>
            Alternative?
            <br className="text-[28px] box-border caret-transparent leading-[33.6px] md:text-5xl md:leading-[57.6px]" />
            <span className="text-[28px] italic box-border caret-transparent leading-[33.6px] capitalize font-playfairdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
              Think
            </span>
            One More Time!
          </h2>
        </div>
      </div>
      <div className="box-border caret-transparent gap-x-2.5 flex flex-col min-h-[auto] min-w-[auto] gap-y-2.5 overflow-auto md:gap-x-10 md:gap-y-10 md:overflow-visible">
        <ComparisonTable
          variant="header"
          headers={[
            "Platform",
            "Speed",
            "Flexibility",
            "Quality",
            "Scalability",
            "Affordability",
          ]}
        />
        <ComparisonTable
          variant=""
          rows={[
            {
              iconUrl:
                "https://c.animaapp.com/mmfqa5b2QIeLaz/assets/icon-11.svg",
              title: "Prozesy Media",
              description:
                "Expert-driven & committed to higher quality. Get effective result & full support without hiring in-house employees",
              cells: [
                {
                  hasCheckmark: true,
                  checkmarkUrl:
                    "https://c.animaapp.com/mmfqa5b2QIeLaz/assets/icon-12.svg",
                },
                {
                  hasCheckmark: true,
                  checkmarkUrl:
                    "https://c.animaapp.com/mmfqa5b2QIeLaz/assets/icon-12.svg",
                },
                {
                  hasCheckmark: true,
                  checkmarkUrl:
                    "https://c.animaapp.com/mmfqa5b2QIeLaz/assets/icon-12.svg",
                },
                {
                  hasCheckmark: true,
                  checkmarkUrl:
                    "https://c.animaapp.com/mmfqa5b2QIeLaz/assets/icon-12.svg",
                },
                {
                  hasCheckmark: true,
                  checkmarkUrl:
                    "https://c.animaapp.com/mmfqa5b2QIeLaz/assets/icon-12.svg",
                },
                {
                  hasCheckmark: true,
                  checkmarkUrl:
                    "https://c.animaapp.com/mmfqa5b2QIeLaz/assets/icon-12.svg",
                },
              ],
            },
            {
              iconUrl:
                "https://c.animaapp.com/mmfqa5b2QIeLaz/assets/icon-13.svg",
              title: "In House Team",
              description:
                "A full-time designer may ensure brand consistency, but there’s a risk of limited expertise even though you pay regularly",
              cells: [
                {
                  hasCheckmark: false,
                  crossUrl:
                    "https://c.animaapp.com/mmfqa5b2QIeLaz/assets/icon-14.svg",
                },
                {
                  hasCheckmark: false,
                  crossUrl:
                    "https://c.animaapp.com/mmfqa5b2QIeLaz/assets/icon-14.svg",
                },
                {
                  hasCheckmark: false,
                  crossUrl:
                    "https://c.animaapp.com/mmfqa5b2QIeLaz/assets/icon-14.svg",
                },
                {
                  hasCheckmark: true,
                  iconWrapperClassName:
                    "text-zinc-50 box-border caret-transparent flex invert-[1] min-h-[auto] min-w-[auto] w-6 md:w-10",
                  checkmarkUrl:
                    "https://c.animaapp.com/mmfqa5b2QIeLaz/assets/icon-12.svg",
                },
                {
                  hasCheckmark: false,
                  crossUrl:
                    "https://c.animaapp.com/mmfqa5b2QIeLaz/assets/icon-14.svg",
                },
              ],
            },
            {
              iconUrl:
                "https://c.animaapp.com/mmfqa5b2QIeLaz/assets/icon-15.svg",
              title: "Creative Agencies",
              description:
                "Agencies offer structured processes but mostly with high costs, long timelines, and less flexibility for your projects",
              cells: [
                {
                  hasCheckmark: false,
                  crossUrl:
                    "https://c.animaapp.com/mmfqa5b2QIeLaz/assets/icon-14.svg",
                },
                {
                  hasCheckmark: false,
                  crossUrl:
                    "https://c.animaapp.com/mmfqa5b2QIeLaz/assets/icon-14.svg",
                },
                {
                  hasCheckmark: true,
                  iconWrapperClassName:
                    "text-zinc-50 box-border caret-transparent flex invert-[1] min-h-[auto] min-w-[auto] w-6 md:w-10",
                  checkmarkUrl:
                    "https://c.animaapp.com/mmfqa5b2QIeLaz/assets/icon-12.svg",
                },
                {
                  hasCheckmark: true,
                  iconWrapperClassName:
                    "text-zinc-50 box-border caret-transparent flex invert-[1] min-h-[auto] min-w-[auto] w-6 md:w-10",
                  checkmarkUrl:
                    "https://c.animaapp.com/mmfqa5b2QIeLaz/assets/icon-12.svg",
                },
                {
                  hasCheckmark: false,
                  crossUrl:
                    "https://c.animaapp.com/mmfqa5b2QIeLaz/assets/icon-14.svg",
                },
              ],
            },
            {
              iconUrl:
                "https://c.animaapp.com/mmfqa5b2QIeLaz/assets/icon-16.svg",
              title: "Freelancers",
              description:
                "Freelancers may provide affordable design services but they mostly lack consistency, reliability, and collaboration",
              cells: [
                {
                  hasCheckmark: false,
                  crossUrl:
                    "https://c.animaapp.com/mmfqa5b2QIeLaz/assets/icon-14.svg",
                },
                {
                  hasCheckmark: true,
                  iconWrapperClassName:
                    "text-zinc-50 box-border caret-transparent flex invert-[1] min-h-[auto] min-w-[auto] w-6 md:w-10",
                  checkmarkUrl:
                    "https://c.animaapp.com/mmfqa5b2QIeLaz/assets/icon-12.svg",
                },
                {
                  hasCheckmark: false,
                  crossUrl:
                    "https://c.animaapp.com/mmfqa5b2QIeLaz/assets/icon-14.svg",
                },
                {
                  hasCheckmark: false,
                  crossUrl:
                    "https://c.animaapp.com/mmfqa5b2QIeLaz/assets/icon-14.svg",
                },
                {
                  hasCheckmark: true,
                  iconWrapperClassName:
                    "text-zinc-50 box-border caret-transparent flex invert-[1] min-h-[auto] min-w-[auto] w-6 md:w-10",
                  checkmarkUrl:
                    "https://c.animaapp.com/mmfqa5b2QIeLaz/assets/icon-12.svg",
                },
              ],
            },
            {
              iconUrl:
                "https://c.animaapp.com/mmfqa5b2QIeLaz/assets/icon-17.svg",
              title: "Self-Service Tools",
              description:
                "DIY tools like website builders are budget-friendly, but you can’t expect strategic thinking & originality",
              cells: [
                {
                  hasCheckmark: false,
                  crossUrl:
                    "https://c.animaapp.com/mmfqa5b2QIeLaz/assets/icon-14.svg",
                },
                {
                  hasCheckmark: false,
                  crossUrl:
                    "https://c.animaapp.com/mmfqa5b2QIeLaz/assets/icon-14.svg",
                },
                {
                  hasCheckmark: true,
                  iconWrapperClassName:
                    "text-zinc-50 box-border caret-transparent flex invert-[1] min-h-[auto] min-w-[auto] w-6 md:w-10",
                  checkmarkUrl:
                    "https://c.animaapp.com/mmfqa5b2QIeLaz/assets/icon-12.svg",
                },
                {
                  hasCheckmark: true,
                  iconWrapperClassName:
                    "text-zinc-50 box-border caret-transparent flex invert-[1] min-h-[auto] min-w-[auto] w-6 md:w-10",
                  checkmarkUrl:
                    "https://c.animaapp.com/mmfqa5b2QIeLaz/assets/icon-12.svg",
                },
                {
                  hasCheckmark: false,
                  crossUrl:
                    "https://c.animaapp.com/mmfqa5b2QIeLaz/assets/icon-14.svg",
                },
              ],
            },
          ]}
        />
      </div>
    </div>
  );
};
