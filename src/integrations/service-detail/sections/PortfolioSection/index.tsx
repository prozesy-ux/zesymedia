import { PortfolioItem } from "@/integrations/service-detail/sections/PortfolioSection/components/PortfolioItem";

export const PortfolioSection = () => {
  return (
    <section className="relative box-border caret-transparent overflow-clip rounded-[20px] md:rounded-[32px]">
      <div className="box-border caret-transparent">
        <div className="bg-neutral-950 box-border caret-transparent">
          <div className="box-border caret-transparent px-5 py-[60px] md:px-[94px] md:py-[100px]">
            <div className="box-border caret-transparent max-w-[1252px] w-full z-[1] mx-auto">
              <div className="items-center box-border caret-transparent gap-x-8 flex flex-col justify-start gap-y-8 md:gap-x-14 md:gap-y-14">
                <div className="items-center box-border caret-transparent gap-x-4 flex flex-col justify-start gap-y-4 text-center">
                  <div className="box-border caret-transparent flex">
                    <div className="text-green-500 box-border caret-transparent border border-green-800 px-3 py-1 rounded-3xl border-solid">
                      <div className="text-sm box-border caret-transparent leading-[21px] md:text-base md:leading-6">
                        Our Works
                      </div>
                    </div>
                  </div>
                  <div className="text-zinc-50 box-border caret-transparent">
                    <h2 className="text-[28px] font-bold box-border caret-transparent leading-[33.6px] font-redhatdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                      Our Product Design{" "}
                      <em className="text-[28px] italic box-border caret-transparent leading-[33.6px] capitalize font-playfairdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                        Capabilities!
                      </em>
                    </h2>
                  </div>
                </div>
                <div className="box-border caret-transparent z-[1]">
                  <div
                    role="list"
                    className="box-border caret-transparent gap-x-9 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] max-w-full gap-y-9 w-full md:gap-x-8 md:grid-cols-[1fr_1fr] md:grid-rows-[auto_auto] md:max-w-none md:gap-y-14 md:w-auto"
                  >
                    <PortfolioItem
                      href="https://prozesy.com/projects/iiu-dubai-edtech-project-with-islamic-values"
                      imageUrl="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68d26bcad249a89d7972f70a_1.avif"
                      imageAlt=""
                      title="IIU Dubai: Edtech Project with Islamic Values"
                      description="IIU Dubai is a forward-thinking Islamic university that combines modern education with cultural values. For this project, we built a strong brand and website experience focused on clarity, accessibility, and trust. It simply unites academic programs, research, and global opportunities into a digital platform that empowers students and partners alike."
                      tags={["EdTech"]}
                    />
                    <PortfolioItem
                      href="https://prozesy.com/projects/skillophy-smarter-learning-experience"
                      imageUrl="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68162bb5c6459a3956ee0bb6_Skillophy Thumb.avif"
                      imageAlt=""
                      title="Skillophy: Smarter Learning Experience"
                      description="Skillophy is a dynamic edutech platform that offers live and recorded courses, academic resources, and corporate training. We designed a smoother multi-portal experience focused on engagement, accessibility, and personalization. This project perfectly combines gamification, mentorship, and AI-driven learning to support users at every stage of their educational journey."
                      tags={["EdTech"]}
                    />
                    <PortfolioItem
                      href="https://prozesy.com/projects/revolunizing-defi-affines-liquid-restacking-journey"
                      imageUrl="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6815d9331810272f8aa34296_Affine Thumb.avif"
                      imageAlt=""
                      title="Revolutionizing Defi: Affine's Restacking Journey"
                      description="Affine is a decentralized finance (DeFi) platform where users get innovative financial products, including Affine Restake and Affine Earn. It provides users with the opportunity to engage in liquid restaking, earn cross-chain yields, and access high-yield strategies. With strong security, an intuitive interface, and cross-chain integrations, it enhances user engagement and satisfaction."
                      tags={["Fintech"]}
                    />
                    <PortfolioItem
                      href="https://prozesy.com/projects/onethread-project-management-software-redesign"
                      imageUrl="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68157247bddbbabd946bbd88_Onethread Thumb.avif"
                      imageAlt=""
                      title="Onethread Project Management Software – Redesigned!"
                      description="Welcome to our presentation on the official redesign of Onethread, the project management software that is revolutionizing the way teams collaborate and achieve their goals. In this case study, we will delve into the key enhancements and improvements made to Onethread to elevate the user experience and streamline project management processes."
                      tags={["Project Management", "SaaS"]}
                    />
                    <PortfolioItem
                      href="https://prozesy.com/projects/aiket-sustainable-rides-simple-journeys"
                      imageUrl="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68ae8d9d74e662c9f135c398_UX _ Transportation App _ Prozesy Media.avif"
                      imageAlt=""
                      title="ÄikeT: Sustainable Rides, Simple Journeys"
                      description="Äike T is a smart and sustainable e-scooter designed for modern city riders. Our task was to create smooth buy and rent journeys on both the app and web platforms. We focused on removing confusion, simplifying plan comparisons, and aligning experiences across devices. The result is a digital ecosystem that empowers users with clarity, confidence, and greener mobility choices."
                      tags={["Transportation & Logistics"]}
                    />
                    <PortfolioItem
                      href="https://prozesy.com/projects/ways-villas-maldivian-travel-redesign"
                      imageUrl="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/681572622016b1087aff1d2b_Ways Thumb.avif"
                      imageAlt=""
                      title="Ways & Villas: Maldivian Travel Redesign"
                      description="Ways and Villas, in their pursuit of establishing a luxurious online platform for Maldivian travel bookings, collaborated with multiple design agencies. Yet, none managed to truly encapsulate the opulence and sophistication inherent to their brand. Upon discovering Prozesy Media via Dribbble and being captivated by our top-tier designs, a new challenge emerged"
                      tags={["Travel", "Entertainment", "Tourism"]}
                    />
                    <PortfolioItem
                      href="https://prozesy.com/projects/navigating-the-future-of-distributed-energy-systems"
                      imageUrl="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6815728b88247e447c6ca23b_Yenex Thumb.avif"
                      imageAlt=""
                      title="Yenex - Renewable Energy Dashboard & Solar Power Website Design"
                      description="Yenex is a platform dedicated to advancing distributed energy systems. From solar panels to micro hydro turbines, we enable individuals and companies to embrace sustainable solutions. Our goal? Reducing carbon footprints and fighting climate change."
                      tags={["Renewable Energy"]}
                    />
                    <PortfolioItem
                      href="https://prozesy.com/projects/revolutionize-yourdining-experience-today"
                      imageUrl="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/681572d33076d70e563064ba_Le Club Thumb.avif"
                      imageAlt=""
                      title="LeKlub - Restaurant Discovery & Dining Rewards Web App Design"
                      description="LeKlub aims to promote partner restaurants and encourage users to discover new establishments. Through a strong media presence on social networks and collaborations with influencers, the aim is to revitalize the local market, especially during less busy periods, and to support restaurants by increasing their visibility and activity through Special offers granted to Klub members. At Leklub, we’ve curated a global network of top-tier restaurants, offering you not just a meal but an unforgettable experience. Our mission is simple: to make dining out more accessible, enjoyable, and affordable. Join the Leklub community today and savor the flavors of the world without breaking the bank. Your next culinary adventure is just a click away."
                      tags={["Restaurant", "Food & Beverages"]}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute box-border caret-transparent max-w-44 pointer-events-none z-0 right-[0%] top-[0%] md:max-w-none">
        <img
          src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/680c913472d2c51bf8574903_ef06d5c5d9e5b0bba2c2a6326fa57740_right top round.avif"
          alt=""
          className="box-border caret-transparent inline-block max-w-full"
        />
      </div>
      <div className="absolute box-border caret-transparent pointer-events-none w-full top-0">
        <img
          src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6812483c6bde6e720d880757_Shade (1).avif"
          alt=""
          className="box-border caret-transparent inline-block max-w-full"
        />
      </div>
    </section>
  );
};
