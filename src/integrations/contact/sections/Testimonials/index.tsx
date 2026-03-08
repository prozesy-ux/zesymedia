import { useState } from "react";
    import { TestimonialTabs } from "@/integrations/contact/sections/Testimonials/components/TestimonialTabs";
    import { TestimonialCard, TestimonialData } from "@/integrations/contact/sections/Testimonials/components/TestimonialCard";

    const testimonialsData: TestimonialData[] = [
      {
        image: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/696887601c99f2cd330b64a5_UX _ Prozesy Media.avif",
        clientImage: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68db83d0788461a30fddc0f8_Client_Sofia Gouveia.avif",
        clientName: "Sofia Gouveia",
        clientRole: "Design Director @ Esdiac",
        quote: "Working with Prozesy Media on our ESDIAC app and group websites was an excellent experience. They were patient, attentive to feedback, and delivered clean, consistent, high-quality work. We’re proud of the results and happy to continue our long-term partnership with them.",
        logo: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68dcdfcf6d857d13b7b6cc5f_Logo_Esdiac_color.svg"
      },
      {
        image: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6815721fd20663c0286e2af8_Plate Thumb.avif",
        clientImage: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/684bec308477c331aaafb599_67b790a2e3964135b80d7baa_Klub.avif",
        clientName: "Neil Saidi",
        clientRole: "Founder @ LeKlub",
        quote: "Had an amazing experience with Prozesy Media. Their talented team understood my vision and turned it into stunning visuals,with their impressive attention to detail skills. I highly recommend their high-quality design services.",
        logo: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f0931a40063af82284da_Logo_leklub_color.svg"
      },
      {
        image: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6815d9331810272f8aa34296_Affine Thumb.avif",
        clientImage: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/684bfdfba59d24464bbbd7d3_Client_Affine.avif",
        clientName: "Fahim Aziz",
        clientRole: "Founder @ Backpack (YC), Affine, AlpineX",
        quote: "Prozesy Media delivered beautiful, functional UX that truly drove business results. Their expert team blends aesthetics with real business value, boosting our user engagement and growth. Highly recommended!",
        logo: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885ee6809370b706fb8dab8_Logo_affine_color.svg"
      },
      {
        image: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/686f8ca664ed1606d9fd1b6e_PlentyPay Thumb.avif",
        clientImage: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/686646bacaef729d3510e818_Client_Plenty Pay.avif",
        clientName: "Kunle Adetayo",
        clientRole: "CEO & Founder @ Plentypay",
        quote: "Working with Prozesy Media transformed our workflow. Their adherence to guidelines increased efficiency and contributed to business growth. We can now focus more on strategic initiatives and client engagement, thanks to saved hours",
        logo: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68dce072a0dab02f5cbe92f8_Logo_Plentypay_color.svg"
      },
      {
        image: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68157247bddbbabd946bbd88_Onethread Thumb.avif",
        clientImage: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/684bfce0c577de4ae7895279_Client_Onethread.avif",
        clientName: "Erfanul Hoque",
        clientRole: "Founder @ Renergy Technologies",
        quote: "Amazing experience! The Prozesy Media team is experienced, diligent, and follows a solid process from research to design. They handled our redesign and user feedback perfectly. Truly a standout team in globally.",
        logo: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f10a0c9a07b93b68d49a_Logo_onethread_color.svg"
      }
    ];

    export const Testimonials = () => {
      const [activeTab, setActiveTab] = useState(0);

      return (
        <section className="box-border caret-transparent">
          <div className="box-border caret-transparent">
            <div className="box-border caret-transparent px-5 py-[60px] md:px-[94px] md:py-[100px]">
              <div className="box-border caret-transparent max-w-[1252px] w-full z-[1] mx-auto">
                <div className="items-center box-border caret-transparent gap-x-8 flex flex-col justify-start gap-y-8 md:gap-x-14 md:gap-y-14">
                  <div className="items-center box-border caret-transparent gap-x-4 flex flex-col justify-start gap-y-4 text-center">
                    <div className="box-border caret-transparent flex">
                      <div className="text-green-700 box-border caret-transparent border border-emerald-400 px-3 py-1 rounded-3xl border-solid">
                        <div className="text-sm box-border caret-transparent leading-[21px] md:text-base md:leading-6">
                          Client Stories
                        </div>
                      </div>
                    </div>
                    <div className="text-neutral-950 box-border caret-transparent">
                      <h2 className="text-[28px] font-bold box-border caret-transparent leading-[33.6px] font-redhatdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                        Success{" "}
                        <em className="text-[28px] italic box-border caret-transparent leading-[33.6px] capitalize font-playfairdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                          Stories
                        </em>
                        That{" "}
                        <em className="text-[28px] italic box-border caret-transparent leading-[33.6px] capitalize font-playfairdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                          Inspire Us
                        </em>
                      </h2>
                    </div>
                  </div>
                  <div className="relative items-center box-border caret-transparent flex flex-col justify-start w-full mx-auto">
                    <TestimonialTabs activeTab={activeTab} onTabChange={setActiveTab} />
                    <div className="relative items-stretch box-border caret-transparent flex justify-center w-full overflow-hidden mt-8 rounded-lg md:mt-14">
                      <TestimonialCard data={testimonialsData[activeTab]} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    };
