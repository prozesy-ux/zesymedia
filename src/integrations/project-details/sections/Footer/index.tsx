import { FooterNewsletter } from "@/integrations/project-details/sections/Footer/components/FooterNewsletter";
import { FooterLocations } from "@/integrations/project-details/sections/Footer/components/FooterLocations";
import { FooterLinks } from "@/integrations/project-details/sections/Footer/components/FooterLinks";

export const Footer = () => {
  return (
    <footer className="relative box-border caret-transparent">
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent">
          <div className="box-border caret-transparent pt-8 pb-[60px] px-5 md:pb-[100px] md:px-[94px]">
            <div className="box-border caret-transparent gap-x-12 flex flex-col max-w-[822px] gap-y-12 text-center w-full mx-auto">
              <div className="box-border caret-transparent gap-x-6 flex flex-col min-h-[auto] min-w-[auto] gap-y-6 md:gap-x-8 md:gap-y-8">
                <div className="text-neutral-600 box-border caret-transparent min-h-[auto] min-w-[auto]">
                  <p className="text-base box-border caret-transparent tracking-[0.36px] leading-6 md:text-lg md:leading-[27px]">
                    Say goodbye to outdated enterprise software and welcome the
                    smoother one. We lead you from design to product innovation
                    to shape your path from idea to success
                  </p>
                </div>
                <div className="box-border caret-transparent gap-x-4 flex justify-center min-h-[auto] min-w-[auto] gap-y-4">
                  <a
                    href="https://dribbble.com/design_monks"
                    className="text-violet-600 items-center bg-neutral-900/10 box-border caret-transparent flex h-11 justify-center max-w-11 min-h-[auto] min-w-[auto] decoration-neutral-600 w-full rounded-lg"
                  >
                    <img
                      src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67376bf69713c3b8f748765c_DribbbleLogo.svg"
                      alt=""
                      className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto]"
                    />
                  </a>
                  <a
                    href="https://www.behance.net/designmonksux"
                    className="text-violet-600 items-center bg-neutral-900/10 box-border caret-transparent flex h-11 justify-center max-w-11 min-h-[auto] min-w-[auto] decoration-neutral-600 w-full rounded-lg"
                  >
                    <img
                      src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67376bddffa276ad56ceafaa_BehanceLogo.svg"
                      alt=""
                      className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto]"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/designmonks.co/"
                    className="text-violet-600 items-center bg-neutral-900/10 box-border caret-transparent flex h-11 justify-center max-w-11 min-h-[auto] min-w-[auto] decoration-neutral-600 w-full rounded-lg"
                  >
                    <img
                      alt=""
                      src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67376bdd74e5db4d2d79e93c_InstagramLogo.svg"
                      className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] w-7"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/designmonks"
                    className="text-violet-600 items-center bg-neutral-900/10 box-border caret-transparent flex h-11 justify-center max-w-11 min-h-[auto] min-w-[auto] decoration-neutral-600 w-full rounded-lg"
                  >
                    <img
                      src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/676d686bcc487e32fc0ab3d3_LinkedinLogo.svg"
                      alt=""
                      className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto]"
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/designmonks.co"
                    className="text-violet-600 items-center bg-neutral-900/10 box-border caret-transparent flex h-11 justify-center max-w-11 min-h-[auto] min-w-[auto] decoration-neutral-600 w-full rounded-lg"
                  >
                    <img
                      src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67376bdd34c574ea949458a1_FacebookLogo.svg"
                      alt=""
                      className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto]"
                    />
                  </a>
                  <a
                    href="https://twitter.com/design_monks"
                    className="text-violet-600 items-center bg-neutral-900/10 box-border caret-transparent flex h-11 justify-center max-w-11 min-h-[auto] min-w-[auto] decoration-neutral-600 w-full rounded-lg"
                  >
                    <img
                      src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67376bdd90129fe64264acde_XLogo.svg"
                      alt=""
                      className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto]"
                    />
                  </a>
                  <a
                    href="https://t.me/designmonks"
                    className="text-violet-600 items-center bg-neutral-900/10 box-border caret-transparent flex h-11 justify-center max-w-11 min-h-[auto] min-w-[auto] decoration-neutral-600 w-full rounded-lg"
                  >
                    <img
                      src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/68a167212f8c8d775f4f9385_TelegramLogo.svg"
                      alt=""
                      className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto]"
                    />
                  </a>
                </div>
              </div>
              <FooterNewsletter />
            </div>
          </div>
        </div>
        <div className="box-border caret-transparent">
          <div className="relative bg-neutral-950 box-border caret-transparent z-0 pt-[156px] pb-0 px-5 md:pt-[352px] md:pb-[78px] md:px-[94px]">
            <FooterLocations />
            <div className="absolute box-border caret-transparent h-[211px] pointer-events-none w-full z-[-1] top-[0%] bottom-auto inset-x-[0%] md:h-full md:bottom-[0%]">
              <video
                loop=""
                autoplay="true"
                muted=""
                playsinline="true"
                className="absolute box-border caret-transparent h-full object-cover object-[50%_0%] align-baseline w-full z-[-1] inset-[0%]"
              >
                <source
                  src="https://github.com/designmonks/webvideos/raw/refs/heads/main/footer_globe.mp4"
                  type="video/mp4"
                  className="relative text-black text-base box-border caret-transparent block h-full leading-[normal] pointer-events-auto w-full font-times_new_roman"
                />
              </video>
              <div className="absolute bg-[linear-gradient(rgba(0,0,0,0),rgb(10,10,10))] bottom-[-1%] box-border caret-transparent h-[124px] inset-x-[0%]"></div>
            </div>
          </div>
        </div>
        <div className="box-border caret-transparent">
          <div className="bg-neutral-950 box-border caret-transparent">
            <FooterLinks />
            <img
              alt=""
              src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67cb19c5fc7cea1c4b1fc709_9e07db1ecae6aafdfe7fe0fa6c077ee6_FOOTER.avif"
              className="box-border caret-transparent hidden h-full max-w-full w-full md:inline-block"
            />
            <img
              alt=""
              src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/68a1bbb5ef83f7891cb7fcd0_Group 2147224414.avif"
              className="box-border caret-transparent block h-full max-w-full w-full pb-6 md:hidden md:pb-0"
            />
          </div>
        </div>
      </div>
      <div className="[mask-image:linear-gradient(to_top,rgb(0,0,0)_0%,rgb(0,0,0)_10%,rgba(0,0,0,0.8)_40%,rgba(0,0,0,0.5)_80%,rgba(0,0,0,0)_100%)] fixed backdrop-blur-[15px] shadow-[rgba(255,255,255,0.2)_0px_10px_30px_0px] box-border caret-transparent hidden h-[150px] pointer-events-none w-full z-[777] bottom-[0%] inset-x-[0%] md:block">
        <div className="box-border caret-transparent before:accent-auto before:caret-transparent before:text-zinc-800 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-none before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-outfit_variablefont_wght after:accent-auto after:caret-transparent after:clear-both after:text-zinc-800 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-none after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-outfit_variablefont_wght"></div>
      </div>
    </footer>
  );
};
