import { SubscribeButton } from "@/blog_sections/NewsletterSection/components/SubscribeButton";

export const NewsletterForm = () => {
  return (
    <form
      name="email-form"
      aria-label="Email Form"
      className="items-center box-border caret-transparent gap-x-2 flex flex-wrap gap-y-2 text-left md:flex-nowrap md:text-center"
    >
      <input
        name="name-2"
        placeholder="Your email here"
        type="email"
        className="text-base bg-[url('https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/676d68deb3516c5b8d5ee90d_EnvelopeSimple.svg')] bg-no-repeat box-border caret-transparent block h-[38px] leading-[22.8571px] min-h-14 align-middle w-full border border-neutral-200 bg-[position:16px_52%] pl-12 pr-3 py-2 rounded-lg border-solid"
      />
      <SubscribeButton />
    </form>
  );
};
