import { FAQItem } from "@/integrations/service-detail/sections/FAQSection/components/FAQItem";

export const FAQSection = () => {
  return (
    <div className="box-border caret-transparent">
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent px-5 py-[60px] md:px-[94px] md:py-[100px]">
          <div className="box-border caret-transparent max-w-[1252px] w-full z-[1] mx-auto">
            <div className="items-center box-border caret-transparent gap-x-8 flex flex-col justify-start gap-y-8 md:gap-x-14 md:gap-y-14">
              <div className="items-center box-border caret-transparent gap-x-4 flex flex-col justify-start gap-y-4 text-center">
                <div className="box-border caret-transparent flex">
                  <div className="text-green-700 box-border caret-transparent border border-emerald-400 px-3 py-1 rounded-3xl border-solid">
                    <div className="text-sm box-border caret-transparent leading-[21px] md:text-base md:leading-6">
                      Frequently Asked Questions
                    </div>
                  </div>
                </div>
                <div className="text-neutral-950 box-border caret-transparent">
                  <h2 className="text-[28px] font-bold box-border caret-transparent leading-[33.6px] font-redhatdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                    Your Questions
                    <br className="text-[28px] box-border caret-transparent leading-[33.6px] md:text-5xl md:leading-[57.6px]" />
                    <span className="text-[28px] italic box-border caret-transparent leading-[33.6px] capitalize font-playfairdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                      Answered!
                    </span>
                  </h2>
                </div>
              </div>
              <div className="box-border caret-transparent flex flex-col max-w-[1038px] w-full">
                <FAQItem
                  question="Do you provide mobile-friendly web design services?"
                  answer="Yes, we ensure all our websites are mobile-responsive. Every design is optimized for different screen sizes to ensure a seamless user experience on smartphones, tablets, and desktops. Our mobile-first approach guarantees that your site performs well across all devices."
                />
                <FAQItem
                  question="Can you redesign my existing website with customizations?"
                  answer="Absolutely! We specialize in redesigning websites, and keeping your brand's identity intact while adding custom features. Whether it’s improving the design, updating functionality, or enhancing the user experience, our team works closely with you to deliver a modern and effective site that meets your goals."
                />
                <FAQItem
                  question="What platform do you use for website design?"
                  answer="We use a different platform based on your needs. For design, we often use Figma and Framer for creative mockups and Webflow for no-code, responsive websites. We select the best platform based on your requirements for functionality, scalability, and performance."
                />
                <FAQItem
                  question="How do you ensure top-notch security for a website?"
                  answer="We implement the latest security measures such as SSL certificates, regular software updates, secure login protocols, and data encryption. Our websites are built to withstand potential threats with ongoing protection to safeguard your website and user data."
                />
                <FAQItem
                  question="How do I get started with your web design services?"
                  answer="To get started, you can schedule a free 15-minute consultation call where we discuss your needs. If you decide to work with us, we’ll hold several sessions to fully understand your requirements, goals, and expectations before we begin the design process."
                />
                <FAQItem
                  question="Can you create a website that integrates with my CRM or other systems?"
                  answer="Yes, we can integrate your website with different CRM platforms, payment systems, email tools, and more like Salesforce, HubSpot CRM, Zoho CRM, Pipedrive, Microsoft Dynamics 365, etc. Our team ensures seamless integration so that your website works smoothly with your existing business systems."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
