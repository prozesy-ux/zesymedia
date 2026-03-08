import { FeatureCard } from "@/integrations/services/sections/DesignExcellenceSection/components/FeatureCard";

export const FeatureGrid = () => {
  return (
    <div className="box-border caret-transparent gap-x-8 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] min-h-[auto] min-w-[auto] gap-y-8 w-full md:grid-cols-[1fr_1fr_1fr]">
      <FeatureCard
        imageUrl="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67645313a395db108c0d6266_Frame (6).webp"
        imageAlt=""
        title="User-Centric Approach"
        description="We prioritize the needs and behaviors of your users to ensure intuitive designs that deliver exceptional experiences."
      />
      <FeatureCard
        imageUrl="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/676452bea395db108c0d2a30_Frame (1).webp"
        imageAlt=""
        title="Lifetime Support"
        description="We offer continuous assistance, updates, and optimizations to keep your design performing at its best forever."
      />
      <FeatureCard
        imageUrl="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/676452be87544ac5a52bca52_Frame (2).webp"
        imageAlt=""
        title="Cross-Industry Expertise"
        description="Our team has experience across various industries so we can deliver personalized solutions that meet the unique needs of every sector."
      />
      <FeatureCard
        imageUrl="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/676452be70727561e3699b23_Frame (3).webp"
        imageAlt=""
        title="SEO & Mobile Optimization"
        description="We ensure your designs are optimized for search engines and mobile devices to drive traffic and improve user engagement."
      />
      <FeatureCard
        imageUrl="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/676452be242e069bb8065268_Frame (4).webp"
        imageAlt=""
        title="Fast Turnaround Times"
        description="Get high-quality designs delivered promptly without sacrificing creativity or functionality to help you meet deadlines efficiently."
      />
      <FeatureCard
        imageUrl="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/676452c02584920d975619ad_Frame (5).webp"
        imageAlt=""
        title="Transparent Process"
        description="We maintain clear communication throughout the project and make sure that you’re always informed and involved in key decisions."
      />
    </div>
  );
};
