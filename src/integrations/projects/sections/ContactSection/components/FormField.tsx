export type FormFieldProps = {
  label: string;
  fieldType: "text" | "email" | "tel" | "radio" | "textarea" | "email-double";
  name: string;
  placeholder?: string;
  secondaryName?: string;
  secondaryPlaceholder?: string;
  radioOptions?: Array<{ value: string; label: string }>;
};

export const FormField = (props: FormFieldProps) => {
  if (props.fieldType === "radio" && props.radioOptions) {
    return (
      <div className="box-border caret-transparent gap-x-4 flex flex-col min-h-[auto] min-w-[auto] gap-y-4">
        <label className="text-zinc-50 text-base font-bold box-border caret-transparent block leading-[19.2px] min-h-[auto] min-w-[auto] mb-3 md:text-xl md:leading-6 md:mb-0">
          {props.label}
        </label>
        <div className="box-border caret-transparent gap-x-3 flex flex-wrap min-h-[auto] min-w-[auto] gap-y-3 md:gap-x-4 md:gap-y-4">
          {props.radioOptions.map((option, index) => (
            <label
              key={index}
              className="relative font-bold box-border caret-transparent block flex-wrap min-h-[auto] min-w-[auto] before:accent-auto before:caret-transparent before:text-zinc-800 before:table before:text-sm before:not-italic before:normal-nums before:font-bold before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-outfit_variablefont_wght after:accent-auto after:caret-transparent after:clear-both after:text-zinc-800 after:table after:text-sm after:not-italic after:normal-nums after:font-bold after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-outfit_variablefont_wght"
            >
              <input
                type="radio"
                name={props.name}
                value={option.value}
                className="bg-transparent box-border caret-transparent hidden float-left leading-[normal] z-[1] overflow-visible -ml-5 mt-[3px] p-0"
              />
              <span className="relative text-neutral-400 text-base font-normal items-center box-border caret-transparent inline-block justify-start tracking-[0.18px] leading-6 z-[2] border border-neutral-600 px-5 py-3 rounded-lg border-solid left-[0%] inset-y-[0%] md:text-[17px] md:leading-[25.5px] hover:text-zinc-50 hover:border-violet-600">
                {option.label}
              </span>
            </label>
          ))}
          <div className="italic items-center bg-gray-200 box-border caret-transparent hidden justify-center min-h-20 mb-2.5 before:accent-auto before:caret-transparent before:text-zinc-800 before:table before:text-sm before:italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-outfit_variablefont_wght after:accent-auto after:caret-transparent after:clear-both after:text-zinc-800 after:table after:text-sm after:italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-outfit_variablefont_wght"></div>
        </div>
      </div>
    );
  }

  if (props.fieldType === "textarea") {
    return (
      <div className="box-border caret-transparent gap-x-4 flex flex-col min-h-[auto] min-w-[auto] gap-y-4">
        <label className="text-zinc-50 text-base font-bold box-border caret-transparent block leading-[19.2px] min-h-[auto] min-w-[auto] mb-3 md:text-xl md:leading-6 md:mb-0">
          {props.label}
        </label>
        <textarea
          name={props.name}
          placeholder={props.placeholder}
          className="text-zinc-50 text-sm bg-white/10 box-border caret-transparent block tracking-[0.18px] leading-[21px] min-h-[105px] min-w-[auto] resize-none align-middle w-full border-neutral-600 px-4 py-3 rounded-lg md:text-base md:leading-6"
        ></textarea>
      </div>
    );
  }

  if (props.fieldType === "email-double") {
    return (
      <div className="box-border caret-transparent gap-x-4 flex flex-col min-h-[auto] min-w-[auto] gap-y-4">
        <label className="text-zinc-50 text-base font-bold box-border caret-transparent block leading-[19.2px] min-h-[auto] min-w-[auto] mb-3 md:text-xl md:leading-6 md:mb-0">
          {props.label}
        </label>
        <input
          name={props.name}
          placeholder={props.placeholder}
          type="email"
          className="text-zinc-50 text-[17px] bg-white/10 box-border caret-transparent block h-[38px] tracking-[0.18px] leading-[25.5px] max-w-full min-h-[50px] min-w-[auto] align-middle w-full border border-neutral-600 px-4 py-3 rounded-lg border-solid"
        />
        <input
          name={props.secondaryName}
          placeholder={props.secondaryPlaceholder}
          type="text"
          className="text-base bg-transparent bg-[url('https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/676d68deb3516c5b8d5ee90d_EnvelopeSimple.svg')] bg-no-repeat box-border caret-transparent hidden h-[38px] leading-[22.8571px] min-h-14 align-middle w-full border border-neutral-200 bg-[position:16px_52%] pl-12 pr-3 py-2 rounded-lg border-solid"
        />
      </div>
    );
  }

  return (
    <div className="box-border caret-transparent gap-x-4 flex flex-col min-h-[auto] min-w-[auto] gap-y-4">
      <label className="text-zinc-50 text-base font-bold box-border caret-transparent block leading-[19.2px] min-h-[auto] min-w-[auto] mb-3 md:text-xl md:leading-6 md:mb-0">
        {props.label}
      </label>
      <input
        name={props.name}
        placeholder={props.placeholder}
        type={props.fieldType}
        className="text-zinc-50 text-[17px] bg-white/10 box-border caret-transparent block h-[38px] tracking-[0.18px] leading-[25.5px] max-w-full min-h-[50px] min-w-[auto] align-middle w-full border border-neutral-600 px-4 py-3 rounded-lg border-solid"
      />
    </div>
  );
};
