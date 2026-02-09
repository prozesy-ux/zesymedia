export const JobOpeningsSection = () => {
  return (
    <section className="relative bg-neutral-950 box-border caret-transparent hidden overflow-hidden rounded-2xl md:rounded-[32px]">
      <div className="box-border caret-transparent px-5 py-[60px] md:px-[94px] md:py-[100px]">
        <div className="box-border caret-transparent max-w-[1252px] w-full mx-auto">
          <div className="box-border caret-transparent flex flex-col gap-y-14">
            <div className="items-center box-border caret-transparent flex flex-col justify-start max-w-[360px] gap-y-4 text-center w-full mx-auto md:max-w-[642px]">
              <div className="text-green-500 box-border caret-transparent border border-green-800 px-3 py-1 rounded-3xl border-solid">
                <div className="text-sm box-border caret-transparent leading-[21px] md:text-base md:leading-6">
                  Openings
                </div>
              </div>
              <div className="text-zinc-50 box-border caret-transparent">
                <h2 className="text-[28px] font-bold box-border caret-transparent leading-[33.6px] font-redhatdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                  Be a{" "}
                  <span className="text-[28px] italic box-border caret-transparent leading-[33.6px] capitalize font-playfairdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                    Monk!
                  </span>
                  Like us
                </h2>
              </div>
            </div>
            <div className="relative box-border caret-transparent">
              <div className="box-border caret-transparent">
                <div className="bg-zinc-300 box-border caret-transparent p-2.5">
                  <div className="box-border caret-transparent">
                    No items found.
                  </div>
                </div>
              </div>
              <div className="absolute bg-[linear-gradient(rgb(89,45,181)_25%,rgb(125,64,255))] box-border caret-transparent blur-[100px] h-[255px] opacity-70 w-[332px] left-[47px] top-[29px]"></div>
              <div className="absolute bg-[linear-gradient(rgb(89,45,181)_25%,rgb(125,64,255))] box-border caret-transparent blur-[100px] h-[255px] w-[332px] left-[47px] top-[29px]"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute box-border caret-transparent hidden left-[0%] top-[0%] md:block">
        <img
          src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/67db041a706632a9c11cb6c6_Ring.avif"
          alt=""
          className="box-border caret-transparent inline-block max-w-full"
        />
      </div>
    </section>
  );
};
