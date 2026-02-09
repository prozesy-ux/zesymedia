export type FAQItemProps = {
  question: string;
  answer: string;
  hasStrongQuestion?: boolean;
};

export const FAQItem = (props: FAQItemProps) => {
  return (
    <div className="border-b-neutral-200 border-l-zinc-800 border-r-zinc-800 border-t-zinc-800 box-border caret-transparent overflow-hidden pt-4 pb-2 border-b md:py-8">
      <div className="items-center box-border caret-transparent gap-x-6 flex justify-between gap-y-6 overflow-hidden md:gap-x-[normal] md:gap-y-[normal]">
        <div className="box-border caret-transparent">
          <h3 className="text-neutral-950 text-xl font-bold box-border caret-transparent leading-6 font-redhatdisplay_variablefont_wght md:text-2xl md:leading-[28.8px]">
            {props.hasStrongQuestion ? (
              <strong className="text-xl box-border caret-transparent leading-6 md:text-2xl md:leading-[28.8px]">
                {props.question}
              </strong>
            ) : (
              props.question
            )}
          </h3>
        </div>
        <div className="items-center box-border caret-transparent flex h-[30px] justify-center max-w-[30px] w-full border border-violet-800 rounded-[100%] border-solid md:h-10 md:max-w-10">
          <div className="text-violet-800 items-center box-border caret-transparent flex h-4 justify-center w-[22px] md:h-6 md:w-6 before:accent-auto before:caret-transparent before:text-violet-800 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-outfit_variablefont_wght after:accent-auto after:caret-transparent after:clear-both after:text-violet-800 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-outfit_variablefont_wght">
            <img
              src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-26.svg"
              alt="Icon"
              className="box-border caret-transparent h-[25px] w-6"
            />
          </div>
        </div>
      </div>
      <div className="box-border caret-transparent h-0 max-w-[942px] overflow-hidden">
        <div className="box-border caret-transparent h-4"></div>
        <p className="text-neutral-600 text-base box-border caret-transparent tracking-[0.36px] leading-6 md:text-lg md:leading-[27px]">
          {props.answer}
        </p>
        <div className="text-base box-border caret-transparent hidden tracking-[0.36px] leading-6 md:text-lg md:leading-[27px] before:accent-auto before:caret-transparent before:text-zinc-800 before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[0.36px] before:leading-6 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-outfit_variablefont_wght before:md:text-lg before:md:leading-[27px] after:accent-auto after:caret-transparent after:clear-both after:text-zinc-800 after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[0.36px] after:leading-6 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-outfit_variablefont_wght after:md:text-lg after:md:leading-[27px]">
          <p className="text-base box-border caret-transparent leading-6">
            Yes, Design Monks is a start-up-friendly agency. We understand the
            unique challenges start-ups face and offer affordable and flexible
            design solutions that fit your budget and needs. Our team is
            committed to helping your start-up build a strong brand and
            user-friendly digital presence from the ground up.
          </p>
        </div>
      </div>
    </div>
  );
};
