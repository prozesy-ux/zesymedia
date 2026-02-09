import { FAQItem } from "@/sections/FAQSection/components/FAQItem";

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
                  question="How can I start a project with Design Monks?"
                  answer="Starting a project with us is simple. Just reach out through our contact form or email, and share a brief about your needs. We’ll schedule a call to understand your goals, discuss the scope, and recommend the right approach tailored to your product or brand."
                  hasStrongQuestion={true}
                />
                <FAQItem
                  question="Why is Design Monks different?"
                  answer="The team Design Monks prioritizes a perfect mix of creativity, client-focused strategy, and deep industry insights. We consistently deliver high-quality UI/UX design across branding, product design, and web design. Our collaborative process ensures designs align with your goals to help your brand grow and succeed. This is definitely a unique process that makes us different from others."
                />
                <FAQItem
                  question="How Long Does a Design Project Take?"
                  answer="Starting a project with us is simple. Just reach out through our contact form or email, and share a brief about your needs. We’ll schedule a call to understand your goals, discuss the scope, and recommend the right approach tailored to your product or brand."
                  hasStrongQuestion={true}
                />
                <FAQItem
                  question="Is Design Monks a start-up-friendly agency?"
                  answer="Yes, Design Monks is a start-up-friendly agency. We understand the unique challenges start-ups face and offer affordable and flexible design solutions that fit your budget and needs. Our team is committed to helping your start-up build a strong brand and user-friendly digital presence from the ground up."
                />
                <FAQItem
                  question="What design tools do you use?"
                  answer="We use different industry-leading tools. For pixel-perfect UI/UX and Web designs, we swear by Figma and Figjam. When it comes to crafting visually stunning branding and product designs, our go-to is the Adobe suite, which includes Photoshop, Illustrator, and After Effects. And for seamless project documentation? Notion's got our back. All are aimed at delivering top-quality results."
                />
                <FAQItem
                  question="Do you provide UX audits or redesigns for existing products?"
                  answer="Yes, we offer detailed UX audits as well as full redesign services. Whether your product needs usability improvements or a visual refresh, we analyze existing flows, identify issues, and create strategic design solutions. We manage everything to boost the user experience and performance of your platform."
                  hasStrongQuestion={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
