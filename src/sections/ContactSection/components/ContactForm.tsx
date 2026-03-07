import { ContactInfo } from "@/sections/ContactSection/components/ContactInfo";
import { FormFields } from "@/sections/ContactSection/components/FormFields";

export const ContactForm = () => {
  return (
    <div className="items-start bg-white shadow-[rgba(15,23,42,0.1)_0px_20px_48px_-12px] box-border caret-transparent gap-x-0 flex flex-col justify-between gap-y-0 p-5 rounded-2xl md:gap-x-16 md:flex-row md:gap-y-16 md:p-[75px] md:rounded-[32px]">
      <ContactInfo />
      <FormFields />
    </div>
  );
};
