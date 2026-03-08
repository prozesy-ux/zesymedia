import { SolutionCard } from "@/integrations/industry-detail/sections/SolutionsSection/components/SolutionCard";

export const SolutionsGrid = () => {
  return (
    <div className="box-border caret-transparent gap-x-8 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] min-h-[auto] min-w-[auto] gap-y-8 w-full md:grid-cols-[1fr_1fr_1fr]">
      <SolutionCard
        imageUrl="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/683dc4372a3061e52f4440fc_analytics 1.avif"
        imageAlt=""
        title="Dashboard Experience "
        description="Get intuitive & user-friendly dashboards that centralize customer data & make management effortless and decision-making faster."
      />
      <SolutionCard
        imageUrl="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/683dc2781ba2ebeec30ad079_branding 2.avif"
        imageAlt=""
        title="Trust-Driven Identity "
        description="Our branding ensures your eCRM portal looks professional as it enhance credibility and strengthens customer trust."
      />
      <SolutionCard
        imageUrl="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/684058a57e72beb4e7f0d601_Frame.avif"
        imageAlt=""
        title="Optimized Performance "
        description="We build high-speed & responsive eCRM platforms that provide flawless access on all devices with efficiency anytime, anywhere."
      />
      <SolutionCard
        imageUrl="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68400aa671b747e0ae994a50_pulse 1.avif"
        imageAlt=""
        title="Data Visualizations "
        description="Our interactive charts and analytics tools help businesses turn raw data into actionable insights for smarter strategies."
      />
      <SolutionCard
        imageUrl="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/684058fc7e72beb4e7f11585_Vector.avif"
        imageAlt=""
        title="Micro-Interactions"
        description="Thoughtfully designed animations enhance the user experience and make navigation smoother with professionalism."
      />
      <SolutionCard
        imageUrl="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68404fb38a74f41c1770ca3d_data-encryption 1.avif"
        imageAlt=""
        title="Secure Infrastructure "
        description="Future-proof your eCRM portal with secure systems that evolve with your business while keeping customer data protected."
      />
    </div>
  );
};
