import { FooterColumn } from "@/blog_sections/Footer/components/FooterColumn";
import { PartnerBadges } from "@/blog_sections/Footer/components/PartnerBadges";

export const FooterLinks = () => {
  return (
    <div className="box-border caret-transparent z-0 pt-[60px] px-5 md:px-[94px]">
      <div className="box-border caret-transparent max-w-[1252px] z-[1] mx-auto">
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
            <PartnerBadges />
            <div className="bg-zinc-300/10 box-border caret-transparent h-px w-screen"></div>
          </div>
          <div className="items-center box-border caret-transparent gap-x-4 flex flex-col justify-center gap-y-4 mb-5 md:[align-items:normal] md:gap-x-[normal] md:flex-row md:justify-between md:gap-y-[normal] md:mb-8">
            <a
              href="https://prozesy.com/terms-and-condition"
              className="text-zinc-50 text-sm items-start box-border caret-transparent gap-x-1 flex justify-end tracking-[0.32px] leading-[21px] max-w-full gap-y-1 text-left md:text-base md:items-center md:gap-x-1.5 md:justify-start md:leading-6 md:gap-y-1.5 md:text-start"
            >
              <div className="text-sm box-border caret-transparent leading-[21px] text-left md:text-base md:leading-6 md:text-start">
                Terms &amp; Conditions
              </div>
            </a>
            <a
              href="https://prozesy.com/"
              className="text-zinc-50 text-sm items-start box-border caret-transparent gap-x-1 flex justify-end tracking-[0.32px] leading-[21px] max-w-full gap-y-1 text-left md:text-base md:items-center md:gap-x-1.5 md:justify-start md:leading-6 md:gap-y-1.5 md:text-start"
            >
              <div className="text-sm box-border caret-transparent leading-[21px] text-left md:text-base md:leading-6 md:text-start">
                © 2026, Prozesy Media, All Rights Reserved.
              </div>
            </a>
            <a
              href="https://prozesy.com/privacy-policy"
              className="text-zinc-50 text-sm items-start box-border caret-transparent gap-x-1 flex justify-end tracking-[0.32px] leading-[21px] max-w-full gap-y-1 text-left md:text-base md:items-center md:gap-x-1.5 md:justify-start md:leading-6 md:gap-y-1.5 md:text-start"
            >
              <div className="text-sm box-border caret-transparent leading-[21px] text-left md:text-base md:leading-6 md:text-start">
                Privacy Policy
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
