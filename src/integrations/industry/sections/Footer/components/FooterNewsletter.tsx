import { NewsletterForm } from "@/integrations/industry/sections/Footer/components/NewsletterForm";

export const FooterNewsletter = () => {
  return (
    <div className="box-border caret-transparent pt-8 pb-[60px] px-5 md:pb-[100px] md:px-[94px]">
      <div className="box-border caret-transparent gap-x-12 flex flex-col max-w-[822px] gap-y-12 text-center w-full mx-auto">
        <div className="box-border caret-transparent gap-x-6 flex flex-col gap-y-6 md:gap-x-8 md:gap-y-8">
          <div className="text-neutral-600 box-border caret-transparent">
            <p className="text-base box-border caret-transparent tracking-[0.36px] leading-6 md:text-lg md:leading-[27px]">
              Say goodbye to outdated enterprise software and welcome the
              smoother one. We lead you from design to product innovation to
              shape your path from idea to success
            </p>
          </div>
          <div className="box-border caret-transparent gap-x-4 flex justify-center gap-y-4">
            <a
              href="https://dribbble.com/design_monks"
              className="text-violet-600 items-center bg-neutral-900/10 box-border caret-transparent flex h-11 justify-center max-w-11 decoration-neutral-600 w-full rounded-lg hover:bg-blue-600/20"
            >
              <img
                src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67376bf69713c3b8f748765c_DribbbleLogo.svg"
                alt=""
                className="box-border caret-transparent max-w-full"
              />
            </a>
            <a
              href="https://www.behance.net/designmonksux"
              className="text-violet-600 items-center bg-neutral-900/10 box-border caret-transparent flex h-11 justify-center max-w-11 decoration-neutral-600 w-full rounded-lg hover:bg-blue-600/20"
            >
              <img
                src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67376bddffa276ad56ceafaa_BehanceLogo.svg"
                alt=""
                className="box-border caret-transparent max-w-full"
              />
            </a>
            <a
              href="https://www.instagram.com/prozesy.com/"
              className="text-violet-600 items-center bg-neutral-900/10 box-border caret-transparent flex h-11 justify-center max-w-11 decoration-neutral-600 w-full rounded-lg hover:bg-blue-600/20"
            >
              <img
                alt=""
                src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67376bdd74e5db4d2d79e93c_InstagramLogo.svg"
                className="box-border caret-transparent max-w-full w-7"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/designmonks"
              className="text-violet-600 items-center bg-neutral-900/10 box-border caret-transparent flex h-11 justify-center max-w-11 decoration-neutral-600 w-full rounded-lg hover:bg-blue-600/20"
            >
              <img
                src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/676d686bcc487e32fc0ab3d3_LinkedinLogo.svg"
                alt=""
                className="box-border caret-transparent max-w-full"
              />
            </a>
            <a
              href="https://www.facebook.com/prozesy.com"
              className="text-violet-600 items-center bg-neutral-900/10 box-border caret-transparent flex h-11 justify-center max-w-11 decoration-neutral-600 w-full rounded-lg hover:bg-blue-600/20"
            >
              <img
                src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67376bdd34c574ea949458a1_FacebookLogo.svg"
                alt=""
                className="box-border caret-transparent max-w-full"
              />
            </a>
            <a
              href="https://twitter.com/design_monks"
              className="text-violet-600 items-center bg-neutral-900/10 box-border caret-transparent flex h-11 justify-center max-w-11 decoration-neutral-600 w-full rounded-lg hover:bg-blue-600/20"
            >
              <img
                src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67376bdd90129fe64264acde_XLogo.svg"
                alt=""
                className="box-border caret-transparent max-w-full"
              />
            </a>
            <a
              href="https://t.me/designmonks"
              className="text-violet-600 items-center bg-neutral-900/10 box-border caret-transparent flex h-11 justify-center max-w-11 decoration-neutral-600 w-full rounded-lg hover:bg-blue-600/20"
            >
              <img
                src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/68a167212f8c8d775f4f9385_TelegramLogo.svg"
                alt=""
                className="box-border caret-transparent max-w-full"
              />
            </a>
          </div>
        </div>
        <div className="box-border caret-transparent max-w-[505px] w-full mx-auto">
          <NewsletterForm />
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
  );
};
