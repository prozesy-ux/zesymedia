export type ProblemCardProps = {
  problemNumber: string;
  description: string;
  variant?: string;
};

export const ProblemCard = (props: ProblemCardProps) => {
  return (
    <article
      className={`bg-[#f9f2f3] border border-[#f3b6c0] box-border caret-transparent p-6 rounded-[28px] md:p-8 ${props.variant ? ` ${props.variant}` : ""}`}
    >
      <div className="flex items-center gap-3">
        <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#ff5d73] text-sm font-semibold leading-none text-white">
          i
        </span>
        <h3 className="project-problem-card-title box-border caret-transparent">{props.problemNumber}</h3>
      </div>

      <p className="project-problem-card-text box-border caret-transparent">{props.description}</p>
    </article>
  );
};
