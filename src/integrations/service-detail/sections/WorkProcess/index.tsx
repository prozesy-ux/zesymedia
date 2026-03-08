import { ProcessStep } from "@/integrations/service-detail/sections/WorkProcess/components/ProcessStep";

export const WorkProcess = () => {
  return (
    <section className="relative box-border caret-transparent overflow-clip rounded-[20px] md:rounded-[32px]">
      <div className="bg-zinc-50 box-border caret-transparent">
        <div className="box-border caret-transparent px-5 py-[60px] md:px-[94px] md:py-[100px]">
          <div className="box-border caret-transparent max-w-[1252px] w-full z-[1] mx-auto">
            <div className="box-border caret-transparent gap-x-8 flex flex-col gap-y-8 md:gap-x-14 md:gap-y-14">
              <div className="items-center box-border caret-transparent gap-x-4 flex flex-col justify-start gap-y-4 text-center">
                <div className="box-border caret-transparent flex">
                  <div className="text-green-700 box-border caret-transparent border border-emerald-400 px-3 py-1 rounded-3xl border-solid">
                    <div className="text-sm box-border caret-transparent leading-[21px] md:text-base md:leading-6">
                      Our Work Process
                    </div>
                  </div>
                </div>
                <h2 className="text-neutral-950 text-[28px] font-bold box-border caret-transparent leading-[33.6px] font-redhatdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                  We Make the{" "}
                  <em className="text-[28px] italic box-border caret-transparent leading-[33.6px] capitalize font-playfairdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                    Complex{" "}
                    <br className="text-[28px] box-border caret-transparent leading-[33.6px] md:text-5xl md:leading-[57.6px]" />
                  </em>
                  Simple in 30 Days
                </h2>
                <p className="text-neutral-600 text-base box-border caret-transparent tracking-[0.36px] leading-6 md:text-lg md:leading-[27px]">
                  No endless revisions, we simplify your{" "}
                  <br className="text-base box-border caret-transparent leading-6 md:text-lg md:leading-[27px]" />
                  website design process and deliver your vision live in just a
                  month.
                </p>
              </div>
              <div className="items-start box-border caret-transparent gap-x-10 flex justify-between gap-y-10">
                <div className="sticky items-center box-border caret-transparent hidden flex-col justify-start min-h-0 min-w-0 top-[100px] md:flex md:min-h-[auto] md:min-w-[auto]">
                  <img
                    src="https://c.animaapp.com/mlfdffn0RwPDKV/assets/icon-10.svg"
                    alt="Icon"
                    className="box-border caret-transparent inline w-14 md:block"
                  />
                  <div className="relative bg-white box-border caret-transparent h-[385px] min-h-0 min-w-0 w-1 z-[-1] -mt-2.5 md:min-h-[auto] md:min-w-[auto]">
                    <div className="bg-violet-600 box-border caret-transparent h-[0%] w-full rounded-[99px]"></div>
                  </div>
                </div>
                <div className="relative box-border caret-transparent gap-x-6 flex flex-col gap-y-6 w-full md:gap-x-8 md:gap-y-8">
                  <ProcessStep
                    week="Week 1"
                    title="Research"
                    description="Ahead of the website kick off we'll immerse ourselves in your brief, company, and scope of work. We'll carry out competitor and industry analysis, a brand audit and start formulating a first draft of a sitemap."
                    sectionLabel="Tasks Involved"
                    tasks={[
                      "Research",
                      "Competitor Analysis",
                      "Industry Analysis",
                      "Sitemap Creation",
                      "Formulate Team",
                    ]}
                    imageUrl="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/68c3ac27416fd56159459da4_37.avif"
                    imageAlt=""
                  />
                  <ProcessStep
                    week="Week 2"
                    title="Ideation & Strategy"
                    description="We gather insights through interviews, competitor research, and journey mapping, then brainstorm and create wireframes while defining project challenges and user satisfaction benchmarks to guide the design process."
                    sectionLabel="Work Involved"
                    tasks={[
                      "User Interviews",
                      "Competitor Analysis",
                      "Journey Mapping",
                      "Challenges & Goals",
                      "Sketching & Wireframes",
                    ]}
                    imageUrl="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/68c3b0fa476fe64571c37cb2_37.avif"
                    imageAlt=""
                  />
                  <ProcessStep
                    week="Week 3"
                    title="Style Guide & UI Planning"
                    description="We define the brand's visual identity with a style guide covering typography and color palette. At the same time, we plan for initial UI designs to ensure a consistent, modern, and user-friendly experience."
                    sectionLabel="Tasks Involved"
                    tasks={[
                      "Typography Selection",
                      "Color Palette Creation",
                      "Icon Set Design",
                      "Ui Planning",
                    ]}
                    imageUrl="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/68c3b114cb951bea25341151_37.avif"
                    imageAlt=""
                  />
                  <ProcessStep
                    week="Week 4"
                    title="Final Testing & Refinements"
                    description="In the final phase, we validate the design through user testing, A/B tests, and feedback. These strategies help us refine the prototype to optimize usability and ensure a smooth & engaging user experience."
                    sectionLabel="Tasks Involved"
                    tasks={[
                      "A/B Testing",
                      "Reviews & Feedback",
                      "Final Refinement",
                      "Quality Assurance",
                    ]}
                    imageUrl="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/68c3b12271cbf2cb02ffa5a1_37.avif"
                    imageAlt=""
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
