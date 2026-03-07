import { FAQItem } from "@/sections/FAQ/components/FAQItem";

export const FAQ = () => {
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
                  question="How Long Does a Design Project Take?"
                  answer="At Design Monks, we understand that each project is unique. Usually, our design process takes a few weeks, depending on the project's complexity and scope. We begin with thorough research and planning, followed by design iterations and client feedback sessions. This collaborative approach ensures that the final design aligns perfectly with your vision and goals."
                  iconUrl="https://c.animaapp.com/ml6p62229g1sAA/assets/icon-12.svg"
                />
                <FAQItem
                  question="Why is Design Monks Different?"
                  answer="The team Design Monks prioritizes a perfect mix of creativity, client-focused strategy, and deep industry insights. We consistently deliver high-quality UI/UX design across branding, product design, and web design. Our collaborative process ensures designs align with your goals to help your brand grow and succeed. This is definitely a unique process that makes us different from others."
                  iconUrl="https://c.animaapp.com/ml6p62229g1sAA/assets/icon-12.svg"
                />
                <FAQItem
                  question="How Much Does a Design Project Cost at Your Agency?"
                  answer="Every design project is unique, so pricing varies based on scope, requirements, and expertise needed. For a project, we charge from $5,000 to $100,000. We offer custom pricing personalized according to your specific needs, whether it’s UI/UX, branding, or web design. For an exact quote, contact us for a proposal."
                  iconUrl="https://c.animaapp.com/ml6p62229g1sAA/assets/icon-12.svg"
                />
                <FAQItem
                  question="Is Design Monks a start-up-friendly agency?"
                  answer="Yes, Design Monks is a start-up-friendly agency. We understand the unique challenges start-ups face and offer affordable and flexible design solutions that fit your budget and needs. Our team is committed to helping your start-up build a strong brand and user-friendly digital presence from the ground up."
                  iconUrl="https://c.animaapp.com/ml6p62229g1sAA/assets/icon-12.svg"
                />
                <FAQItem
                  question="What design tools do you use?"
                  answer="We use different industry-leading tools. For pixel-perfect UI/UX and Web designs, we swear by Figma and Figjam. When it comes to crafting visually stunning branding and product designs, our go-to is the Adobe suite, which includes Photoshop, Illustrator, and After Effects. And for seamless project documentation? Notion's got our back. All are aimed at delivering top-quality results."
                  iconUrl="https://c.animaapp.com/ml6p62229g1sAA/assets/icon-12.svg"
                />
                <FAQItem
                  question="Do you create WordPress e-commerce sites, and develop apps?"
                  answer="Yes. Even though we specialize in UI/UX, branding, and product design, we’re also well-versed in WordPress, eCommerce, and app development. Our team is equipped to create responsive WordPress sites, powerful eCommerce platforms, and innovative mobile apps.From design to development, we ensure your digital presence is both visually aesthetic and highly functional on all devices. Design Monks offers a full spectrum of services, combining creativity with technical expertise to deliver complete digital solutions."
                  iconUrl="https://c.animaapp.com/ml6p62229g1sAA/assets/icon-12.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
