import { FooterColumn } from "@/integrations/industry-page/sections/Footer/components/FooterColumn";

export const FooterNav = () => {
  return (
    <div className="relative box-border caret-transparent gap-x-6 grid flex-wrap auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto] justify-between justify-items-stretch gap-y-6 z-[55] mx-auto md:static md:flex md:flex-nowrap md:grid-cols-[1fr_1fr_1fr_1fr] md:z-auto md:mx-0">
      <FooterColumn
        title="Important Links"
        links={[
          { href: "https://www.designmonks.co/contact", text: "Contact Us" },
          { href: "https://www.designmonks.co/about", text: "About us" },
          { href: "https://www.designmonks.co/products", text: "Products" },
          { href: "https://www.designmonks.co/industry", text: "Industry" },
          { href: "https://www.designmonks.co/blog", text: "Blogs" },
        ]}
      />
      <FooterColumn
        title="Services"
        links={[
          {
            href: "https://www.designmonks.co/services/ui-ux",
            text: "UI/UX Design",
          },
          {
            href: "https://www.designmonks.co/services/web-design",
            text: "Web Design",
          },
          {
            href: "https://www.designmonks.co/services/logo-branding",
            text: "Logo & Branding",
          },
          {
            href: "https://www.designmonks.co/services/webflow-design",
            text: "Webflow Design",
          },
          {
            href: "https://www.designmonks.co/services/framer-design",
            text: "Framer Design",
          },
        ]}
      />
      <FooterColumn
        title="Specialized Industry"
        links={[
          {
            href: "https://www.designmonks.co/industry/fintech",
            text: "Fintech Industry",
          },
          {
            href: "https://www.designmonks.co/industry/fitness-gym",
            text: "Healthcare & Fitness Industry",
          },
          {
            href: "https://www.designmonks.co/industry/edtech",
            text: "Edtech Industry ",
          },
          {
            href: "https://www.designmonks.co/industry/cybersecurity",
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
            href: "https://www.designmonks.co/design-monks-vs-agencies",
            text: "Vs Agencies",
          },
          {
            href: "https://www.designmonks.co/design-monks-vs-freelancers",
            text: "Vs Freelancers",
          },
          {
            href: "https://www.designmonks.co/design-monks-vs-inhouse",
            text: "Vs Inhouse",
          },
        ]}
      />
    </div>
  );
};
