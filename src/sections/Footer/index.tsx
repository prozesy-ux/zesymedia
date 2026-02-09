import { FooterLocations } from "@/sections/Footer/components/FooterLocations";
import { FooterLinks } from "@/sections/Footer/components/FooterLinks";

export const Footer = () => {
  return (
    <footer className="relative box-border caret-transparent">
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent">
          <div className="box-border caret-transparent pt-8 pb-[60px] px-5 md:pb-[100px] md:px-[94px]">
            <div className="box-border caret-transparent gap-x-12 flex flex-col max-w-[822px] gap-y-12 text-center w-full mx-auto">
              <div className="box-border caret-transparent gap-x-6 flex flex-col gap-y-6 md:gap-x-8 md:gap-y-8">
                <div className="text-neutral-600 box-border caret-transparent">
                  <p className="text-base box-border caret-transparent tracking-[0.36px] leading-6 md:text-lg md:leading-[27px]">
                    Say goodbye to outdated enterprise software and welcome the
                    smoother one. We lead you from design to product innovation
                    to shape your path from idea to success
                  </p>
                </div>
                <div className="box-border caret-transparent gap-x-4 flex justify-center gap-y-4">
                  <a
                    href="https://dribbble.com/design_monks"
                    className="text-violet-600 items-center bg-neutral-900/10 box-border caret-transparent flex h-11 justify-center max-w-11 decoration-neutral-600 w-full rounded-lg"
                  >
                    <img
                      src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/67376bf69713c3b8f748765c_DribbbleLogo.svg"
                      alt=""
                      className="box-border caret-transparent max-w-full"
                    />
                  </a>
                  <a
                    href="https://www.behance.net/designmonksux"
                    className="text-violet-600 items-center bg-neutral-900/10 box-border caret-transparent flex h-11 justify-center max-w-11 decoration-neutral-600 w-full rounded-lg"
                  >
                    <img
                      src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/67376bddffa276ad56ceafaa_BehanceLogo.svg"
                      alt=""
                      className="box-border caret-transparent max-w-full"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/designmonks.co/"
                    className="text-violet-600 items-center bg-neutral-900/10 box-border caret-transparent flex h-11 justify-center max-w-11 decoration-neutral-600 w-full rounded-lg"
                  >
                    <img
                      alt=""
                      src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/67376bdd74e5db4d2d79e93c_InstagramLogo.svg"
                      className="box-border caret-transparent max-w-full w-7"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/designmonks"
                    className="text-violet-600 items-center bg-neutral-900/10 box-border caret-transparent flex h-11 justify-center max-w-11 decoration-neutral-600 w-full rounded-lg"
                  >
                    <img
                      src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/676d686bcc487e32fc0ab3d3_LinkedinLogo.svg"
                      alt=""
                      className="box-border caret-transparent max-w-full"
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/designmonks.co"
                    className="text-violet-600 items-center bg-neutral-900/10 box-border caret-transparent flex h-11 justify-center max-w-11 decoration-neutral-600 w-full rounded-lg"
                  >
                    <img
                      src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/67376bdd34c574ea949458a1_FacebookLogo.svg"
                      alt=""
                      className="box-border caret-transparent max-w-full"
                    />
                  </a>
                  <a
                    href="https://twitter.com/design_monks"
                    className="text-violet-600 items-center bg-neutral-900/10 box-border caret-transparent flex h-11 justify-center max-w-11 decoration-neutral-600 w-full rounded-lg"
                  >
                    <img
                      src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/67376bdd90129fe64264acde_XLogo.svg"
                      alt=""
                      className="box-border caret-transparent max-w-full"
                    />
                  </a>
                  <a
                    href="https://t.me/designmonks"
                    className="text-violet-600 items-center bg-neutral-900/10 box-border caret-transparent flex h-11 justify-center max-w-11 decoration-neutral-600 w-full rounded-lg"
                  >
                    <img
                      src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/68a167212f8c8d775f4f9385_TelegramLogo.svg"
                      alt=""
                      className="box-border caret-transparent max-w-full"
                    />
                  </a>
                </div>
              </div>
              <div className="box-border caret-transparent max-w-[505px] w-full mx-auto">
                <form
                  name="wf-form-Newsletter-Form"
                  aria-label="Newsletter Form"
                  className="items-center box-border caret-transparent gap-x-2 flex flex-wrap gap-y-2 md:flex-nowrap"
                >
                  <input
                    name="Email"
                    placeholder="Your email here"
                    type="email"
                    className="text-neutral-600 text-base bg-transparent bg-[url('https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/676d68deb3516c5b8d5ee90d_EnvelopeSimple.svg')] bg-no-repeat box-border caret-transparent block h-[38px] leading-[22.8571px] min-h-14 text-start align-middle w-full border border-neutral-200 bg-[position:16px_52%] pl-12 pr-3 py-2 rounded-lg border-solid"
                  />
                  <input
                    name="work-email"
                    placeholder="Your email here"
                    type="text"
                    className="text-base bg-transparent bg-[url('https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/676d68deb3516c5b8d5ee90d_EnvelopeSimple.svg')] bg-no-repeat box-border caret-transparent hidden h-[38px] leading-[22.8571px] min-h-14 text-start align-middle w-full border border-neutral-200 bg-[position:16px_52%] pl-12 pr-3 py-2 rounded-lg border-solid"
                  />
                  <div className="relative items-center bg-[linear-gradient(rgb(89,45,181)_25%,rgb(125,64,255))] shadow-[rgba(255,255,255,0.72)_0px_1.6px_3px_0px_inset] box-border caret-transparent flex flex-col h-14 justify-center max-w-full text-left w-full z-[5] overflow-hidden rounded-lg md:max-w-[177px]">
                    <input
                      type="submit"
                      value=""
                      className="absolute text-transparent bg-transparent box-border caret-transparent block text-center text-nowrap z-10 px-[15px] py-[9px] inset-[0%]"
                    />
                    <figure className="absolute items-center bg-neutral-400 box-border caret-transparent flex h-full justify-center rotate-[119.46599333112242deg] w-full inset-[0%] md:transform-none">
                      <div className="absolute bg-[linear-gradient(90deg,rgba(255,255,255,0.79)_61%,rgb(255,255,255)_75%)] box-border caret-transparent blur-[6px] h-20 -translate-y-10 w-full left-2/4 right-[0%] top-2/4 bottom-[0%] md:translate-y-[-50.0%]"></div>
                    </figure>
                    <div className="absolute bg-[linear-gradient(rgb(89,45,181)_25%,rgb(125,64,255))] box-border caret-transparent rounded-lg inset-[0%]"></div>
                    <div className="relative text-gray-200 box-border caret-transparent w-full md:w-auto">
                      <div className="relative items-center box-border caret-transparent gap-x-2 flex h-full justify-center gap-y-2 w-full z-[1]">
                        <div className="text-zinc-50 text-base font-bold box-border caret-transparent tracking-[0.32px] leading-[19.2px]">
                          Subscribe
                        </div>
                        <img
                          src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/67adba6a3ab018a0349e2bc2_CTA_Arrow_(2).svg"
                          alt=""
                          className="box-border caret-transparent h-7 max-w-7 object-contain w-full md:h-6 md:max-w-6"
                        />
                      </div>
                    </div>
                    <img
                      src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/672a7a8e3a6aba070d15d4c0_Star_6.avif"
                      alt=""
                      className="absolute box-border caret-transparent max-w-full right-[0%] top-[0%]"
                    />
                  </div>
                </form>
                <div
                  role="region"
                  aria-label="Newsletter Form success"
                  className="box-border caret-transparent hidden border border-neutral-200 px-2.5 py-5 rounded-lg border-solid"
                >
                  <div className="text-neutral-600 text-base box-border caret-transparent tracking-[0.32px]">
                    Thank you! Your submission has been received! 😄
                  </div>
                </div>
                <div
                  role="region"
                  aria-label="Newsletter Form failure"
                  className="bg-red-100 box-border caret-transparent hidden mt-2.5 p-2.5"
                >
                  <div className="box-border caret-transparent">
                    Oops! Something went wrong while submitting the form.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="box-border caret-transparent">
          <FooterLocations />
        </div>
        <div className="box-border caret-transparent">
          <div className="bg-neutral-950 box-border caret-transparent">
            <FooterLinks />
            <img
              sizes="100vw"
              alt=""
              src="https://c.animaapp.com/mkiynesyxwO7zZ/img/uploaded-asset-1770053484923-0.png"
              className="box-border caret-transparent hidden h-full max-w-full w-full md:inline-block"
            />
            <img
              alt=""
              src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/68a1bbb5ef83f7891cb7fcd0_Group_2147224414.avif"
              className="box-border caret-transparent block h-full max-w-full w-full pb-6 md:hidden md:pb-0"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
