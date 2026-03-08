import { NewsletterForm } from "@/integrations/projects/sections/Footer/components/NewsletterForm";

export const FooterNewsletter = () => {
  return (
    <div className="box-border caret-transparent max-w-[505px] min-h-[auto] min-w-[auto] w-full mx-auto">
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
  );
};
