import { SocialLinks } from "@/integrations/teams/sections/Footer/components/SocialLinks";
import { NewsletterForm } from "@/integrations/teams/sections/Footer/components/NewsletterForm";

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
          <SocialLinks />
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
