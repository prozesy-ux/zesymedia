import { FooterColumn } from "@/sections/Footer/components/FooterColumn";
import { FooterBadges } from "@/sections/Footer/components/FooterBadges";
import { FooterBottom } from "@/sections/Footer/components/FooterBottom";

export const FooterLinks = () => {
  return (
    <div className="box-border caret-transparent z-0 pt-[60px] px-5 md:px-[94px]">
      <div className="box-border caret-transparent max-w-[1252px] w-full z-[1] mx-auto">
        <div className="box-border caret-transparent gap-x-8 flex flex-col gap-y-8 md:gap-x-14 md:gap-y-14">
          <div className="relative box-border caret-transparent gap-x-6 grid flex-wrap auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto] justify-between justify-items-stretch gap-y-6 z-[55] mx-auto md:static md:flex md:flex-nowrap md:grid-cols-[1fr_1fr_1fr_1fr] md:z-auto md:mx-0">
            <FooterColumn
              title="Important Links"
              links={[
                {
                  href: "https://prozesy.com/contact",
                  text: "Contact Us",
                },
                { href: "https://prozesy.com/about", text: "About us" },
                {
                  href: "https://prozesy.com/products",
                  text: "Products",
                },
                {
                  href: "https://prozesy.com/industry",
                  text: "Industry",
                },
                { href: "https://prozesy.com/blog", text: "Blogs" },
              ]}
            />
            <FooterColumn
              title="Services"
              links={[
                {
                  href: "https://prozesy.com/services/ui-ux",
                  text: "UI/UX Design",
                },
                {
                  href: "https://prozesy.com/services/web-design",
                  text: "Web Design",
                },
                {
                  href: "https://prozesy.com/services/logo-branding",
                  text: "Logo & Branding",
                },
                {
                  href: "https://prozesy.com/services/webflow-design",
                  text: "Webflow Design",
                },
                {
                  href: "https://prozesy.com/services/framer-design",
                  text: "Framer Design",
                },
              ]}
            />
            <FooterColumn
              title="Specialized Industry"
              links={[
                {
                  href: "https://prozesy.com/industry/fintech",
                  text: "Fintech Industry",
                },
                {
                  href: "https://prozesy.com/industry/fitness-gym",
                  text: "Healthcare & Fitness Industry",
                },
                {
                  href: "https://prozesy.com/industry/edtech",
                  text: "Edtech Industry ",
                },
                {
                  href: "https://prozesy.com/industry/cybersecurity",
                  text: "Cybersecurity Industry",
                },
                {
                  href: "https://www.figma.com/proto/3SAd2UpB6GgFnozSVLb73V/Design-Monks-Pitchdeck?page-id=0%3A1&node-id=1-3671&t=gqeZCfRxCq3aupSr-0&scaling=contain&content-scaling=fixed&starting-point-node-id=1%3A3671",
                  text: "Company Deck",
                  hasDownloadIcon: true,
                },
              ]}
            />
            <FooterColumn
              title="Compare"
              links={[
                {
                  href: "https://prozesy.com/design-monks-vs-agencies",
                  text: "Vs Agencies",
                },
                {
                  href: "https://prozesy.com/design-monks-vs-freelancers",
                  text: "Vs Freelancers",
                },
                {
                  href: "https://prozesy.com/design-monks-vs-inhouse",
                  text: "Vs Inhouse",
                },
              ]}
            />
          </div>
          <div className="items-center box-border caret-transparent gap-x-5 flex flex-col justify-start gap-y-5 md:gap-x-10 md:gap-y-10">
            <div className="bg-zinc-300/10 box-border caret-transparent h-px w-screen"></div>
            <FooterBadges />
            <div className="bg-zinc-300/10 box-border caret-transparent h-px w-screen"></div>
          </div>
          <FooterBottom />
        </div>
      </div>
    </div>
  );
};
