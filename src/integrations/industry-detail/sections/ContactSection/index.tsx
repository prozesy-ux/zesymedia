import { ContactForm } from "@/integrations/industry-detail/sections/ContactSection/components/ContactForm";
import { MarqueeText } from "@/integrations/industry-detail/sections/ContactSection/components/MarqueeText";

export const ContactSection = () => {
  return (
    <section className="box-border caret-transparent">
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent pt-8 pb-[60px] px-5 md:pt-[1.6px] md:pb-[100px] md:px-[94px]">
          <div className="box-border caret-transparent max-w-[1252px] w-full z-[1] mx-auto">
            <div className="relative bg-neutral-950 box-border caret-transparent w-full mt-0 rounded-2xl md:mt-11 md:rounded-[32px]">
              <ContactForm />
            </div>
            <MarqueeText />
          </div>
        </div>
      </div>
    </section>
  );
};
