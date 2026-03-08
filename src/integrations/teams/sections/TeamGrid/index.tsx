import { TeamMemberCard } from "@/integrations/teams/sections/TeamGrid/components/TeamMemberCard";
import { TeamMemberGrid } from "@/integrations/teams/sections/TeamGrid/components/TeamMemberGrid";

export const TeamGrid = () => {
  return (
    <section className="relative box-border caret-transparent mt-[-60px] z-[3] md:mt-[-480px]">
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent pb-[60px] px-5 md:pb-[100px] md:px-[94px]">
          <div className="box-border caret-transparent max-w-[1252px] w-full z-[1] mx-auto">
            <div className="box-border caret-transparent">
              <div className="box-border caret-transparent">
                <div
                  role="list"
                  className="box-border caret-transparent gap-x-6 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-6 md:gap-x-8 md:grid-cols-[1fr_1fr] md:gap-y-8"
                >
                  <div
                    role="listitem"
                    className="self-center box-border caret-transparent md:self-auto"
                  >
                    <TeamMemberCard
                      href="https://prozesy.com/atiqur-rahaman"
                      imageUrl="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68b818a778cc3901842066df_DP_Atiq.avif"
                      imageAlt=""
                      name="Atiqur Rahaman"
                      title="CEO & Co-founder"
                    />
                    <div className="box-border caret-transparent gap-x-4 flex justify-center gap-y-4 mt-4">
                      <a
                        href="https://www.linkedin.com/in/atiq31416/"
                        className="text-violet-600 items-center bg-neutral-900/10 box-border caret-transparent flex h-11 justify-center max-w-11 decoration-neutral-600 w-full rounded-lg hover:bg-blue-600/20"
                      >
                        <img
                          src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/676d686bcc487e32fc0ab3d3_LinkedinLogo.svg"
                          alt=""
                          className="box-border caret-transparent max-w-full"
                        />
                      </a>
                      <a
                        href="https://twitter.com/Atiq31416"
                        className="text-violet-600 items-center bg-neutral-900/10 box-border caret-transparent flex h-11 justify-center max-w-11 decoration-neutral-600 w-full rounded-lg hover:bg-blue-600/20"
                      >
                        <img
                          src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67376bdd90129fe64264acde_XLogo.svg"
                          alt=""
                          className="box-border caret-transparent max-w-full"
                        />
                      </a>
                      <a
                        href="https://www.youtube.com/@atiq31416"
                        className="text-violet-600 items-center bg-neutral-900/10 box-border caret-transparent flex h-11 justify-center max-w-11 decoration-neutral-600 w-full rounded-lg hover:bg-blue-600/20"
                      >
                        <img
                          src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67f8db745b67524f77d6f971_YoutubeLogo.png"
                          alt=""
                          className="box-border caret-transparent max-w-full"
                        />
                      </a>
                    </div>
                  </div>
                  <div
                    role="listitem"
                    className="self-center box-border caret-transparent md:self-auto"
                  >
                    <TeamMemberCard
                      href="https://prozesy.com/abdullah-al-noman"
                      imageUrl="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68b81861c10b86bd876593bc_DP_Noman.avif"
                      imageAlt=""
                      name="Abdullah Al Noman"
                      title="COO & Co-founder"
                    />
                    <div className="box-border caret-transparent gap-x-4 flex justify-center gap-y-4 mt-4">
                      <a
                        href="https://www.linkedin.com/in/nomandigital/"
                        className="text-violet-600 items-center bg-neutral-900/10 box-border caret-transparent flex h-11 justify-center max-w-11 decoration-neutral-600 w-full rounded-lg hover:bg-blue-600/20"
                      >
                        <img
                          src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/676d686bcc487e32fc0ab3d3_LinkedinLogo.svg"
                          alt=""
                          className="box-border caret-transparent max-w-full"
                        />
                      </a>
                      <a
                        href="https://twitter.com/imnomandigital"
                        className="text-violet-600 items-center bg-neutral-900/10 box-border caret-transparent flex h-11 justify-center max-w-11 decoration-neutral-600 w-full rounded-lg hover:bg-blue-600/20"
                      >
                        <img
                          src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67376bdd90129fe64264acde_XLogo.svg"
                          alt=""
                          className="box-border caret-transparent max-w-full"
                        />
                      </a>
                      <a
                        href="https://prozesy.com/teams"
                        className="text-violet-600 items-center bg-neutral-900/10 box-border caret-transparent hidden h-11 justify-center max-w-11 decoration-neutral-600 w-full rounded-lg hover:bg-blue-600/20"
                      >
                        <img
                          src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67f8db745b67524f77d6f971_YoutubeLogo.png"
                          alt=""
                          className="box-border caret-transparent inline-block max-w-full"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-border caret-transparent mt-6 md:mt-14">
              <div className="box-border caret-transparent">
                <TeamMemberGrid />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
