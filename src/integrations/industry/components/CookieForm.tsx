import { CookieOption } from "@/integrations/industry/components/CookieOption";

export const CookieForm = () => {
  return (
    <form
      name="email-form"
      aria-label="Email Form"
      className="box-border caret-transparent"
    >
      <div className="box-border caret-transparent gap-x-2.5 flex flex-col gap-y-2.5 mb-4 md:gap-x-[18px] md:gap-y-[18px] md:mb-8">
        <CookieOption
          label="Strictly Necessary (Always Active)"
          description="Cookies required to enable basic website functionality."
          checkboxLabel="Checkbox 4"
          isAlwaysActive={true}
          checkboxVariant="text-[10px] bg-black bg-[url('https://d3e54v103j8qbb.cloudfront.net/static/custom-checkbox-checkmark.589d534424.svg')] bg-no-repeat bg-cover border border-blue-500 bg-center"
          containerVariant="pointer-events-none"
        />
        <CookieOption
          label="Marketing"
          description="Cookies used to deliver advertising that is more relevant to you and your interests."
          checkboxLabel="Checkbox 4"
          checkboxVariant="bg-blue-600/20 border border-stone-300"
        />
        <CookieOption
          label="Personalization"
          description="Cookies allowing the website to remember choices you make (such as your user name, language, or the region you are in)."
          checkboxLabel="Checkbox 4"
          checkboxVariant="bg-blue-600/20 border-stone-300"
        />
        <CookieOption
          label="Analytics"
          description="Cookies helping understand how this website performs, how visitors interact with the site, and whether there may be technical issues."
          checkboxLabel="Checkbox 4"
          checkboxVariant="bg-blue-600/20 border border-stone-300"
        />
      </div>
      <div className="items-center box-border caret-transparent flex flex-col">
        <input
          type="submit"
          value="Accept All Cookies"
          role="button"
          className="text-zinc-50 text-base items-center bg-violet-600 box-border caret-transparent flex justify-center tracking-[0.28px] leading-6 text-center text-nowrap w-full border border-violet-600 px-8 py-2.5 rounded-lg border-solid md:py-3"
        />
        <a
          href="/industry"
          role="button"
          className="text-violet-600 text-base font-bold box-border caret-transparent block leading-6 mt-2.5 md:mt-5"
        >
          Save Settings
        </a>
      </div>
    </form>
  );
};
