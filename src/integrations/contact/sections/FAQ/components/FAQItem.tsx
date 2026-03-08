import { useState } from "react";

    export type FAQItemProps = {
      question: string;
      answer: string;
      iconUrl?: string;
    };

    export const FAQItem = (props: FAQItemProps) => {
      const [isOpen, setIsOpen] = useState(false);

      return (
        <div className="border-b-neutral-200 border-l-zinc-800 border-r-zinc-800 border-t-zinc-800 box-border caret-transparent overflow-hidden pt-4 pb-2 border-b md:py-8">
          <div 
            className="items-center box-border caret-transparent gap-x-6 flex justify-between gap-y-6 overflow-hidden md:gap-x-[normal] md:gap-y-[normal] cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="box-border caret-transparent">
              <h3 className="text-neutral-950 text-xl font-bold box-border caret-transparent leading-6 font-redhatdisplay_variablefont_wght md:text-2xl md:leading-[28.8px]">
                {props.question}
              </h3>
            </div>
            <div className="items-center box-border caret-transparent flex h-[30px] justify-center max-w-[30px] w-full border border-violet-800 rounded-[100%] border-solid md:h-10 md:max-w-10">
              <div className={`text-violet-800 items-center box-border caret-transparent flex h-4 justify-center w-[22px] md:h-6 md:w-6 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
                <img
                  src={
                    props.iconUrl ||
                    "https://c.animaapp.com/ml6p62229g1sAA/assets/icon-12.svg"
                  }
                  alt="Icon"
                  className="box-border caret-transparent h-[25px] w-6"
                />
              </div>
            </div>
          </div>
          <div className={`box-border caret-transparent max-w-[942px] overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
            <div className="box-border caret-transparent h-4"></div>
            <p className="text-neutral-600 text-base box-border caret-transparent tracking-[0.36px] leading-6 md:text-lg md:leading-[27px]">
              {props.answer}
            </p>
          </div>
        </div>
      );
    };
