import { AuthorCard } from "@/blog_sections/AuthorsSection/components/AuthorCard";

export const AuthorsSection = () => {
  return (
    <section className="box-border caret-transparent">
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent pb-[60px] px-5 md:pb-[100px] md:px-[94px]">
          <div className="box-border caret-transparent max-w-[1252px] z-[1] mx-auto">
            <div className="items-center box-border caret-transparent gap-x-8 flex flex-col justify-start gap-y-8 md:gap-x-14 md:gap-y-14">
              <div className="items-center box-border caret-transparent gap-x-4 flex flex-col justify-start gap-y-4 text-center">
                <div className="box-border caret-transparent flex">
                  <div className="text-green-700 box-border caret-transparent border border-emerald-400 px-3 py-1 rounded-3xl border-solid">
                    <div className="text-sm box-border caret-transparent leading-[21px] md:text-base md:leading-6">
                      Authors
                    </div>
                  </div>
                </div>
                <div className="text-neutral-950 box-border caret-transparent">
                  <h2 className="text-[28px] font-bold box-border caret-transparent leading-[33.6px] font-redhatdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                    Voices Behind{" "}
                    <em className="text-[28px] italic box-border caret-transparent leading-[33.6px] capitalize font-playfairdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                      The Words
                    </em>
                  </h2>
                </div>
              </div>
              <div className="box-border caret-transparent">
                <div
                  role="list"
                  className="box-border caret-transparent gap-x-5 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-5 md:gap-x-8 md:grid-cols-[1fr_1fr_1fr_1fr] md:gap-y-8"
                >
                  <AuthorCard
                    imageUrl="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68b818a778cc3901842066df_DP_Atiq.avif"
                    imageAlt=""
                    name="Atiqur Rahaman"
                    role="CEO & Co-founder"
                    imageClassName="aspect-[auto_289_/_434] box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
                  />
                  <AuthorCard
                    imageUrl="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68b81861c10b86bd876593bc_DP_Noman.avif"
                    imageAlt=""
                    name="Abdullah Al Noman"
                    role="COO & Co-founder"
                    imageClassName="aspect-[auto_289_/_434] box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
                  />
                  <AuthorCard
                    imageUrl="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68b8197ba8f360fc1827ad50_DP_Sabiha Sultana.avif"
                    imageAlt=""
                    name="Sabiha Sultana"
                    role="Content Writer"
                  />
                  <AuthorCard
                    imageUrl="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68b81918695263f17b573ca4_DP_Md. Sajib Ahmed.avif"
                    imageAlt=""
                    name="Md. Sajib Ahmed"
                    role="SEO Specialist"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
