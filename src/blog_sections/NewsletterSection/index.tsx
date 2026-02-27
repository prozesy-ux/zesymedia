import { NewsletterForm } from "@/blog_sections/NewsletterSection/components/NewsletterForm";

export const NewsletterSection = () => {
  return (
    <section className="box-border caret-transparent">
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent pb-[60px] px-5 md:pb-[100px] md:px-[94px]">
          <div className="box-border caret-transparent max-w-[1252px] z-[1] mx-auto">
            <div className="relative bg-neutral-950 box-border caret-transparent overflow-hidden px-4 py-5 rounded-2xl md:px-0 md:py-20 md:rounded-[32px]">
              <div className="relative items-start box-border caret-transparent flex flex-col max-w-[776px] text-left w-full z-10 mx-auto md:items-center md:text-center">
                <div className="box-border caret-transparent flex text-left md:text-center">
                  <div className="text-green-500 box-border caret-transparent text-left border border-green-800 px-3 py-1 rounded-3xl border-solid md:text-center">
                    <div className="text-sm box-border caret-transparent leading-[21px] text-left md:text-base md:leading-6 md:text-center">
                      Newsletter
                    </div>
                  </div>
                </div>
                <div className="text-zinc-50 box-border caret-transparent text-left mt-2.5 md:text-center md:mt-4">
                  <h2 className="text-[28px] font-bold box-border caret-transparent leading-[33.6px] text-left font-redhatdisplay_variablefont_wght md:text-5xl md:leading-[57.6px] md:text-center">
                    Stay In The Loop And Keep Up With All Our{" "}
                    <em className="text-[28px] italic box-border caret-transparent leading-[33.6px] text-left capitalize font-playfairdisplay_variablefont_wght md:text-5xl md:leading-[57.6px] md:text-center">
                      News and Updates
                    </em>
                  </h2>
                </div>
                <div className="text-neutral-400 box-border caret-transparent text-left mt-3 mb-4 md:text-center md:mt-[17px] md:mb-7">
                  <p className="text-base box-border caret-transparent tracking-[0.36px] leading-6 text-left md:text-lg md:leading-[27px] md:text-center">
                    Be the first to hear about our latest projects, design
                    insights, and studio updates.
                  </p>
                </div>
                <div className="box-border caret-transparent max-w-40 text-left mr-auto md:max-w-[185px] md:text-center md:mr-0">
                  <img
                    src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67b3a0ca9cd29a4f78be70f1_aa9ab833b3c7ac4ca1390641d6680d27_CTA Image.avif"
                    alt=""
                    className="box-border caret-transparent inline-block max-w-full text-left md:text-center"
                  />
                </div>
                <div className="box-border caret-transparent max-w-[575px] text-left w-full mt-8 mx-auto md:text-center md:mt-6">
                  <NewsletterForm />
                  <div
                    role="region"
                    aria-label="Email Form success"
                    className="bg-zinc-50 box-border caret-transparent hidden text-center border border-neutral-200 px-2.5 py-5 rounded-lg border-solid"
                  >
                    <div className="text-neutral-600 text-base box-border caret-transparent tracking-[0.32px]">
                      Thank you! Your submission has been received! 😄
                    </div>
                  </div>
                  <div
                    role="region"
                    aria-label="Email Form failure"
                    className="bg-red-100 box-border caret-transparent hidden text-left mt-2.5 p-2.5 md:text-center"
                  >
                    <div className="box-border caret-transparent text-left md:text-center">
                      Oops! Something went wrong while submitting the form.
                    </div>
                  </div>
                </div>
              </div>
              <img
                src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/687e967917004ef569cd3762_Group 1618871347.avif"
                alt=""
                className="absolute box-border caret-transparent max-w-44 pointer-events-none z-0 right-[0%] top-[0%] md:max-w-full"
              />
              <img
                src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/681f026916392f6af261f002_Group 2147223913.avif"
                alt=""
                className="absolute items-end box-border caret-transparent hidden h-[100px] justify-start max-w-20 pointer-events-none w-full left-[0%] bottom-[0%] md:[align-items:normal] md:block md:h-auto md:justify-normal md:max-w-full md:w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
