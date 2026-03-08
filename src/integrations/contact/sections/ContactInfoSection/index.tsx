export const ContactInfoSection = () => {
  return (
    <div className="box-border caret-transparent mt-[60px] md:mt-[100px]">
      <div className="items-center box-border caret-transparent flex flex-col max-w-[815px] text-center mx-auto">
        <div className="box-border caret-transparent flex justify-start">
          <div className="text-green-700 box-border caret-transparent border border-emerald-400 px-3 py-1 rounded-3xl border-solid">
            <div className="text-sm box-border caret-transparent tracking-[0.32px] leading-[21px] capitalize md:text-base md:leading-6">
              Connect Now
            </div>
          </div>
        </div>
        <div className="box-border caret-transparent mt-4">
          <h2 className="text-white text-[28px] font-bold box-border caret-transparent leading-[33.6px] capitalize font-redhatdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
            Get in Touch Now for Business or{" "}
            <span className="text-[28px] italic box-border caret-transparent inline-block leading-[33.6px] font-playfairdisplay_variablefont_wght md:text-5xl md:inline md:leading-[57.6px]">
              Career Opportunities!
            </span>
          </h2>
        </div>
        <div className="box-border caret-transparent mt-12">
          <div className="box-border caret-transparent gap-x-[29px] flex flex-col justify-center gap-y-[29px] w-full md:gap-x-20 md:flex-row md:gap-y-20">
            <div className="items-center box-border caret-transparent gap-x-4 flex flex-col gap-y-4">
              <div className="text-neutral-400 text-lg box-border caret-transparent tracking-[0.36px] leading-[27px]">
                Project Inquiries? Let’s Team Up
              </div>
              <a
                href="/contact"
                className="text-zinc-50 text-2xl font-bold box-border caret-transparent block leading-[28.8px] border-zinc-50 border-b-2 font-redhatdisplay_variablefont_wght hover:text-violet-600 hover:border-l-violet-600 hover:border-r-violet-600 hover:border-t-violet-600"
              >
                hello@prozesy.com
              </a>
            </div>
            <div className="items-center box-border caret-transparent gap-x-4 flex flex-col gap-y-4">
              <div className="text-neutral-400 text-lg box-border caret-transparent tracking-[0.36px] leading-[27px]">
                Be a Monk! Be a Part of the Leading Team!
              </div>
              <a
                href="/contact"
                className="text-zinc-50 text-2xl font-bold box-border caret-transparent block leading-[28.8px] border-zinc-50 border-b-2 font-redhatdisplay_variablefont_wght hover:text-violet-600 hover:border-l-violet-600 hover:border-r-violet-600 hover:border-t-violet-600"
              >
                career@prozesy.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
