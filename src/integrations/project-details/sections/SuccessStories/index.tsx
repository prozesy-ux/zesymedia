import { TestimonialCard } from "@/integrations/project-details/sections/SuccessStories/components/TestimonialCard";

export const SuccessStories = () => {
  return (
    <section className="box-border caret-transparent">
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent px-5 py-[60px] md:px-[94px] md:py-[100px]">
          <div className="box-border caret-transparent max-w-[1252px] w-full z-[1] mx-auto">
            <div className="box-border caret-transparent gap-x-8 flex flex-col gap-y-8 md:gap-x-14 md:gap-y-14">
              <div className="box-border caret-transparent gap-x-4 flex flex-col min-h-[auto] min-w-[auto] gap-y-4">
                <div className="box-border caret-transparent flex min-h-[auto] min-w-[auto]">
                  <div className="text-green-700 box-border caret-transparent min-h-[auto] min-w-[auto] border border-emerald-400 px-3 py-1 rounded-3xl border-solid">
                    <div className="text-sm box-border caret-transparent leading-[21px] md:text-base md:leading-6">
                      Client Stories
                    </div>
                  </div>
                </div>
                <h2 className="text-neutral-950 text-[28px] font-bold box-border caret-transparent leading-[33.6px] min-h-[auto] min-w-[auto] font-redhatdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                  Success{" "}
                  <em className="text-[28px] italic box-border caret-transparent leading-[33.6px] capitalize font-playfairdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                    Stories
                  </em>
                  <br className="text-[28px] box-border caret-transparent leading-[33.6px] md:text-5xl md:leading-[57.6px]" />
                  That{" "}
                  <em className="text-[28px] italic box-border caret-transparent leading-[33.6px] capitalize font-playfairdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                    Inspire Us
                  </em>
                </h2>
              </div>
              <div className="box-border caret-transparent gap-x-8 flex flex-col auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] min-h-[auto] min-w-[auto] gap-y-6 md:grid md:flex-row md:grid-cols-[1fr_1fr_1fr]">
                <TestimonialCard
                  variant="variant-1"
                  logoUrl="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885ee6809370b706fb8dab8_Logo_affine_color.svg"
                  testimonialText="Prozesy Media delivered beautiful, functional UX that truly drove business results. Their expert team blends aesthetics with real business value, boosting our user engagement and growth. Highly recommended!"
                  clientImageUrl="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/684bfdfba59d24464bbbd7d3_Client_Affine.avif"
                  clientName="Fahim Aziz"
                  clientTitle="Founder @ Backpack (YC), Affine, AlpineX"
                  thumbnailUrl="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6815d9331810272f8aa34296_Affine Thumb.avif"
                />
                <div className="box-border caret-transparent gap-x-6 grid flex-col auto-cols-[1fr] col-end-[span_1] col-start-[span_1] row-end-[span_2] row-start-[span_2] grid-cols-[1fr] grid-rows-[auto_auto_auto_auto] min-h-[auto] min-w-[auto] gap-y-6">
                  <div className="box-border caret-transparent col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1] min-h-[auto] min-w-[auto]">
                    <div
                      role="list"
                      className="box-border caret-transparent gap-x-8 grid auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto] h-full gap-y-8"
                    >
                      <div
                        role="listitem"
                        className="relative items-center bg-zinc-950/0 box-border caret-transparent gap-x-12 flex flex-col justify-center min-h-full min-w-[auto] gap-y-12 border border-neutral-200 px-6 py-8 rounded-2xl border-solid"
                      >
                        <img
                          src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68dce072a0dab02f5cbe92f8_Logo_Plentypay_color.svg"
                          alt=""
                          className="absolute box-border caret-transparent h-[57.6px] max-w-full"
                        />
                      </div>
                      <div
                        role="listitem"
                        className="relative items-center bg-zinc-950/0 box-border caret-transparent gap-x-12 flex flex-col justify-center min-h-full min-w-[auto] gap-y-12 border border-neutral-200 px-6 py-8 rounded-2xl border-solid"
                      >
                        <img
                          src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68dcdfcf6d857d13b7b6cc5f_Logo_Esdiac_color.svg"
                          alt=""
                          className="absolute box-border caret-transparent h-[57.6px] max-w-full"
                        />
                      </div>
                    </div>
                  </div>
                  <TestimonialCard
                    variant="variant-2"
                    logoUrl="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885ef07a76e2babd6efc32b_Logo_carbobon_color.svg"
                    testimonialText="Fantastic experience working with Prozesy Media. They did more homework than I expected and actually studied details related to a whole new industry to iterate designs. Super professional, sleek, and fresh design output."
                    clientImageUrl="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/69a044919acacd3897f9bb2d_Client_Tanmee.avif"
                    clientName="Rifah Tasfia"
                    clientTitle="Product Consultant @ Carbobon"
                  />
                </div>
                <TestimonialCard
                  variant="variant-3"
                  thumbnailUrl="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6815728b88247e447c6ca23b_Yenex%20Thumb.avif"
                  additionalLogos={[
                    {
                      url: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68dce054024834fc555df2dc_Logo_Vocai_color.svg",
                      alt: "",
                    },
                    {
                      url: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f10a0c9a07b93b68d49a_Logo_onethread_color.svg",
                      alt: "",
                    },
                  ]}
                />
                <TestimonialCard
                  variant="variant-4"
                  testimonialText="I've had the pleasure of collaborating with Prozesy Media for a while now on my new project. They're lightning-quick in addressing any questions or feedback I have, and they consistently go the extra mile to make sure I'm thrilled with the final outcome. I wholeheartedly endorse them"
                  clientImageUrl="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/684bef93fc8165be6c14ecbd_67b790a2c5539dbd6bb9aba7_Yenex (2).avif"
                  clientName="Ted Nash"
                  clientTitle="Founder & CEO @ Yenex"
                  logoUrl="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f2024c79d5e6131d5728_Logo_yenex_color.svg"
                />
                <div className="box-border caret-transparent hidden before:accent-auto before:caret-transparent before:text-zinc-800 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-outfit_variablefont_wght after:accent-auto after:caret-transparent after:clear-both after:text-zinc-800 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-outfit_variablefont_wght"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
