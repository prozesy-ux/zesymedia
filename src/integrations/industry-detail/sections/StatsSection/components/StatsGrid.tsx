import { StatCard } from "@/integrations/industry-detail/sections/StatsSection/components/StatCard";

export const StatsGrid = () => {
  return (
    <div className="box-border caret-transparent gap-x-6 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-6 md:gap-x-8 md:grid-cols-[1fr_1fr_1fr_1fr] md:gap-y-8">
      <StatCard
        iconUrl="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6833f983d4d50c372021d862_Group 2147223913 (2).avif"
        iconAlt=""
        statValue="4.9"
        description="A premier firm renowned for its outstanding design quality and exceptional client satisfaction."
      />
      <StatCard
        iconUrl="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6833fb3db9c0fc51916f0630_Icon.avif"
        iconAlt=""
        statValue="3+"
        description="A proven track record of expertise and reliability in delivering successful projects."
      />
      <StatCard
        iconUrl="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6833fb548a10ff4014cff0e0_5ed4eb843e27e8a2ef9bd969158834a6_Icon.avif"
        iconAlt=""
        statValue="45+"
        description="A diverse portfolio showcasing creativity and skill in delivering innovative design solutions."
      />
      <StatCard
        iconUrl="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6833fb9f268726c1e3d629d0_Icon (1).avif"
        iconAlt=""
        statValue="6+"
        description="A global reach and the agency's ability to meet diverse client needs across various markets."
      />
    </div>
  );
};
