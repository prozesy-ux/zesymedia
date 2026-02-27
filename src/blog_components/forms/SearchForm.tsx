export const SearchForm = () => {
  return (
    <form
      name="wf-form-search"
      aria-label="search"
      className="items-stretch box-border caret-transparent gap-x-2 flex flex-col justify-center gap-y-2 w-full md:flex-row"
    >
      <input
        name="Search"
        placeholder="Search any blog"
        type="text"
        className="text-neutral-400 text-lg bg-[url('https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6799497a23af1a9d6bcc0fb1_Group.svg')] bg-no-repeat box-border caret-transparent block h-[38px] leading-[25.7143px] max-w-full min-h-[57px] text-start align-middle w-full border border-violet-600 bg-[position:16px_49%] pl-[50px] pr-3 py-2 rounded-lg border-solid md:max-w-none"
      />
      <input
        name="Search"
        placeholder="Search any blog"
        type="text"
        className="text-neutral-400 text-lg bg-[url('https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6799497a23af1a9d6bcc0fb1_Group.svg')] bg-no-repeat box-border caret-transparent hidden h-[38px] leading-[25.7143px] max-w-full min-h-[57px] text-start align-middle w-full border border-violet-600 bg-[position:16px_49%] pl-[50px] pr-3 py-2 rounded-lg border-solid md:max-w-none"
      />
    </form>
  );
};
