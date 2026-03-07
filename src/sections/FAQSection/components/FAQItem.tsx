import { useState } from "react";

export type FAQItemProps = {
  question: string;
  answer: string;
  hasStrongQuestion?: boolean;
};

export const FAQItem = (props: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-b-neutral-200 box-border caret-transparent overflow-hidden pt-4 pb-2 md:py-8">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        className="items-center box-border caret-transparent gap-x-6 flex justify-between gap-y-6 overflow-hidden text-left w-full md:gap-x-[normal] md:gap-y-[normal]"
      >
        <div className="box-border caret-transparent">
          <h3 className="text-neutral-950 text-xl font-bold box-border caret-transparent leading-6 font-redhatdisplay_variablefont_wght md:text-2xl md:leading-[28.8px]">
            {props.question}
          </h3>
        </div>
        <div className="items-center box-border caret-transparent flex h-[30px] justify-center max-w-[30px] w-full border border-violet-800 rounded-[100%] border-solid md:h-10 md:max-w-10">
          <div className="text-violet-800 items-center box-border caret-transparent flex h-4 justify-center w-[22px] md:h-6 md:w-6">
            <img
              src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-26.svg"
              alt="Icon"
              className={`box-border caret-transparent h-[25px] w-6 transition-transform duration-300 ${
                isOpen ? "rotate-45" : "rotate-0"
              }`}
            />
          </div>
        </div>
      </button>
      <div
        className={`box-border caret-transparent grid transition-[grid-template-rows,opacity,padding] duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr] opacity-100 pt-4" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden max-w-[942px]">
          <p className="text-neutral-600 text-base box-border caret-transparent tracking-[0.36px] leading-6 md:text-lg md:leading-[27px]">
            {props.answer}
          </p>
        </div>
      </div>
    </div>
  );
};
