import { ContactForm } from "@/integrations/contact/sections/ContactSection/components/ContactForm";

export const ContactSection = () => {
  return (
    <section className="relative box-border caret-transparent mt-[-308px] z-[5] md:mt-[-452px]">
      <div className="box-border caret-transparent z-[1]">
        <div className="box-border caret-transparent max-w-[1252px] w-full mx-auto">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
