import { HeroContent } from "@/integrations/service-detail/sections/Hero/components/HeroContent";
import { LogoCarousel } from "@/integrations/service-detail/sections/Hero/components/LogoCarousel";
import { Service } from "@/integrations/services/data/servicesData";

type HeroProps = {
  serviceData?: Service;
};

export const Hero = ({ serviceData }: HeroProps) => {
  return (
    <section className="relative bg-neutral-950/90 box-border caret-transparent overflow-hidden">
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent pb-[110px] px-5 md:pb-[100px] md:px-[94px]">
          <div className="box-border caret-transparent max-w-[1252px] w-full z-[1] mx-auto">
            <div className="box-border caret-transparent gap-x-[60px] flex flex-col gap-y-[60px] md:gap-x-[100px] md:gap-y-[100px]">
              <div className="box-border caret-transparent max-w-[864px] mx-auto">
                <HeroContent serviceData={serviceData} />
              </div>
              <LogoCarousel />
              <div className="box-border caret-transparent gap-x-6 flex flex-col gap-y-6 md:gap-x-8 md:gap-y-8">
                <div className="items-center box-border caret-transparent gap-x-4 flex flex-col justify-start gap-y-4 text-center">
                  <div className="box-border caret-transparent flex">
                    <div className="text-green-500 box-border caret-transparent border border-green-800 px-3 py-1 rounded-3xl border-solid">
                      <div className="text-sm box-border caret-transparent leading-[21px] md:text-base md:leading-6">
                        Brand Trust
                      </div>
                    </div>
                  </div>
                  <div className="text-zinc-50 box-border caret-transparent">
                    <h2 className="text-2xl font-bold box-border caret-transparent leading-[28.8px] font-redhatdisplay_variablefont_wght md:text-[40px] md:leading-[48px]">
                      Trusted by{" "}
                      <span className="text-2xl italic box-border caret-transparent leading-[28.8px] font-playfairdisplay_variablefont_wght md:text-[40px] md:leading-[48px]">
                        Leading Brands
                      </span>
                    </h2>
                  </div>
                </div>
                <div className="relative box-border caret-transparent z-0 overflow-hidden py-2.5">
                  <div
                    role="region"
                    className="relative box-border caret-transparent"
                  >
                    <div className="relative box-border caret-transparent z-0 overflow-hidden">
                      <div
                        role="presentation"
                        className="box-border caret-transparent gap-x-10 flex h-full gap-y-10 translate-x-[-9121.94px] md:gap-x-16 md:gap-y-16"
                      >
                        <div
                          role="group"
                          aria-label="1 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885efb8de6485b41ef30512_Logo_edvive_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="2 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f091d389d8df99129c17_Logo_leklub_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="3 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f0a19297eaa439b36a54_Logo_lendiview_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="4 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f0d458e5a5df0fbf1790_Logo_likely_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="5 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f0e8feb06d3d996d79c3_Logo_Memorybox_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="6 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f10530ade15b8f215893_Logo_onethread_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="7 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f12d87ea8f930b98389b_Logo_rabfy_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="8 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f13ec2ad5470f81a0156_Logo_ontik_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="9 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f14fe135439678c205c4_Logo_ostad_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="10 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f15d6e8226dcdd42841f_Logo_oter_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="11 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f18ddddd13f9898fa4a1_Logo_Sift_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="12 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f19c8b03c8659ce41c98_Logo_skillophy_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="13 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f1b6efcab4b193f09f5c_Logo_tempo_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="14 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f1c594a1ec8ca506cd37_Logo_triply_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="15 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f1e4306e3894a1466064_Logo_ways_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="16 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f1f680fdbf02fa0eae57_Logo_Y Combinator_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="17 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f2004933c2b4d513d932_Logo_yenex_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="18 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68a091859ea0add1f56a3a99_Logo_zantrik_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="19 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6886538a81d84aaf47e5386d_Logo_Addisoft_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="20 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6886539e25b283ac0614549d_Logo_Banglashikhi_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="21 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/688656b4cb56ce5a1e817819_Logo_Relaxy_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="22 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68a091c01ddc2dc9b5c6004d_Logo_Backpack_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="23 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68a091feeaa832d6e633b930_Logo_Goldman Sachs_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="24 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68db9056e42ba9fd6c172833_Logo_Clarity_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="25 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68dcdfc38248b93d8a3fe1ed_Logo_Esdiac_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="26 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68dcdff13a553e58f8303e64_Logo_Learndojo_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="27 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68dce04f1cc66d075bc201c7_Logo_Vocai_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="28 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68dce06d6d2fe778ba755c28_Logo_Plentypay_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="29 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68deba780a85b7d26245ce16_Logo_Aike_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="30 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/69720678ee0f40386f6b4992_Logo_Fraus_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="31 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/697b6e3416493b65e726d165_Logo_Coinpulse_ mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="32 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/688653bf4f47ca91cf09762b_Logo_Sitewise_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="33 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/688653afacecba76738e739f_Logo_Homerun_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="34 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f1d2a43bb3fbe72ee40c_Logo_viber_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="35 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f17caf72390465b4e033_Logo_PF_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="36 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f16d40ff0915c93957cd_Logo_pepsi_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="37 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f0c4d6d77ef939024a24_Logo_liberatelabs_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="1 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885efb8de6485b41ef30512_Logo_edvive_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="2 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f091d389d8df99129c17_Logo_leklub_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="3 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f0a19297eaa439b36a54_Logo_lendiview_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="4 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f0d458e5a5df0fbf1790_Logo_likely_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="5 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f0e8feb06d3d996d79c3_Logo_Memorybox_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="6 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f10530ade15b8f215893_Logo_onethread_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="7 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f12d87ea8f930b98389b_Logo_rabfy_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="8 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f13ec2ad5470f81a0156_Logo_ontik_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="9 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f14fe135439678c205c4_Logo_ostad_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="10 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f15d6e8226dcdd42841f_Logo_oter_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="11 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f18ddddd13f9898fa4a1_Logo_Sift_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="12 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f19c8b03c8659ce41c98_Logo_skillophy_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="13 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f1b6efcab4b193f09f5c_Logo_tempo_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="14 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f1c594a1ec8ca506cd37_Logo_triply_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="15 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f1e4306e3894a1466064_Logo_ways_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="16 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f1f680fdbf02fa0eae57_Logo_Y Combinator_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="17 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f2004933c2b4d513d932_Logo_yenex_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="18 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68a091859ea0add1f56a3a99_Logo_zantrik_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="19 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6886538a81d84aaf47e5386d_Logo_Addisoft_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="20 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6886539e25b283ac0614549d_Logo_Banglashikhi_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="21 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/688656b4cb56ce5a1e817819_Logo_Relaxy_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="22 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68a091c01ddc2dc9b5c6004d_Logo_Backpack_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="23 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68a091feeaa832d6e633b930_Logo_Goldman Sachs_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="24 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68db9056e42ba9fd6c172833_Logo_Clarity_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="25 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68dcdfc38248b93d8a3fe1ed_Logo_Esdiac_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="26 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68dcdff13a553e58f8303e64_Logo_Learndojo_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="27 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68dce04f1cc66d075bc201c7_Logo_Vocai_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="28 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68dce06d6d2fe778ba755c28_Logo_Plentypay_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="29 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68deba780a85b7d26245ce16_Logo_Aike_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="30 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/69720678ee0f40386f6b4992_Logo_Fraus_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="31 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/697b6e3416493b65e726d165_Logo_Coinpulse_ mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="32 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/688653bf4f47ca91cf09762b_Logo_Sitewise_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="33 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/688653afacecba76738e739f_Logo_Homerun_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="34 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f1d2a43bb3fbe72ee40c_Logo_viber_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="35 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f17caf72390465b4e033_Logo_PF_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="36 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f16d40ff0915c93957cd_Logo_pepsi_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="37 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f0c4d6d77ef939024a24_Logo_liberatelabs_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="1 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885efb8de6485b41ef30512_Logo_edvive_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="2 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f091d389d8df99129c17_Logo_leklub_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="3 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f0a19297eaa439b36a54_Logo_lendiview_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="4 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f0d458e5a5df0fbf1790_Logo_likely_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="5 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f0e8feb06d3d996d79c3_Logo_Memorybox_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="6 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f10530ade15b8f215893_Logo_onethread_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="7 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f12d87ea8f930b98389b_Logo_rabfy_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="8 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f13ec2ad5470f81a0156_Logo_ontik_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="9 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f14fe135439678c205c4_Logo_ostad_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="10 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f15d6e8226dcdd42841f_Logo_oter_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="11 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f18ddddd13f9898fa4a1_Logo_Sift_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="12 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f19c8b03c8659ce41c98_Logo_skillophy_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="13 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f1b6efcab4b193f09f5c_Logo_tempo_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="14 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f1c594a1ec8ca506cd37_Logo_triply_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="15 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f1e4306e3894a1466064_Logo_ways_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="16 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f1f680fdbf02fa0eae57_Logo_Y Combinator_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="17 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f2004933c2b4d513d932_Logo_yenex_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="18 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68a091859ea0add1f56a3a99_Logo_zantrik_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="19 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6886538a81d84aaf47e5386d_Logo_Addisoft_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="20 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6886539e25b283ac0614549d_Logo_Banglashikhi_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="21 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/688656b4cb56ce5a1e817819_Logo_Relaxy_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="22 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68a091c01ddc2dc9b5c6004d_Logo_Backpack_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="23 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68a091feeaa832d6e633b930_Logo_Goldman Sachs_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="24 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68db9056e42ba9fd6c172833_Logo_Clarity_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="25 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68dcdfc38248b93d8a3fe1ed_Logo_Esdiac_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="26 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68dcdff13a553e58f8303e64_Logo_Learndojo_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="27 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68dce04f1cc66d075bc201c7_Logo_Vocai_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="28 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68dce06d6d2fe778ba755c28_Logo_Plentypay_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="29 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68deba780a85b7d26245ce16_Logo_Aike_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="30 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/69720678ee0f40386f6b4992_Logo_Fraus_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="31 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/697b6e3416493b65e726d165_Logo_Coinpulse_ mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="32 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/688653bf4f47ca91cf09762b_Logo_Sitewise_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="33 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/688653afacecba76738e739f_Logo_Homerun_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="34 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f1d2a43bb3fbe72ee40c_Logo_viber_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="35 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f17caf72390465b4e033_Logo_PF_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="36 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f16d40ff0915c93957cd_Logo_pepsi_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="37 of 37"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f0c4d6d77ef939024a24_Logo_liberatelabs_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="box-border caret-transparent h-6"></div>
                  <div
                    role="region"
                    className="relative box-border caret-transparent"
                  >
                    <div className="relative box-border caret-transparent z-0 overflow-hidden">
                      <div
                        role="presentation"
                        className="box-border caret-transparent gap-x-10 flex h-full gap-y-10 translate-x-[-7315.33px] md:gap-x-16 md:gap-y-16"
                      >
                        <div
                          role="group"
                          aria-label="1 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885ee08f5f493b2bb9e7f1e_Logo_medease_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="2 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885ee4528e1e50ce73cec96_Logo_3asafeer_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="3 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885ee8c69e8f4233a577999_Logo_akijship_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="4 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885ee9e7ebe3a3c0e3a331c_Logo_akij_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="5 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885eeb809370b706fb8e60d_Logo_alpine_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="6 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885eee107ee412b3af204cf_Logo_Bizphix_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="7 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885eef1a76e2babd6efc174_Logo_Buttercup_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="8 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885ef0413f8918ac5356de1_Logo_carbobon_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="9 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885ef13617c539ba8a284f4_Logo_carnesia_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="10 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885ef283a1bcb89be6747e7_Logo_compaies_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="11 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885ef3df74b709059457346_Logo_cpg_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="12 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885ef94ab9e4ca1123be230_Logo_Dlicio_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="13 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885efa747ec9f1d1564f668_Logo_docuseal_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="14 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885efcf7840077b72111115_Logo_farasha_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="15 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885efde40d2b35d3d22dea0_Logo_fitmate_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="16 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885effb87ea8f930b980cad_Logo_Gainsty_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="17 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f01211f8986a34f542d8_Logo_grow_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="18 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f045523f0b94ba432e42_Logo_heyluna_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="19 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f0546756b58458d71b9b_Logo_IPDC_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="20 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f06558e5a5df0fbefdde_Logo_khanit_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="21 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f07d9c093fad609a26bb_Logo_klasio_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="22 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885ee66114ee66a929deac9_Logo_affine_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="23 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f1aadb3edb2617313123_Logo_telenor_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="24 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885eece6aa97547b732fdf2_Logo_axiata_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="25 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f03409370b706fb922c8_Logo_Guardian_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="26 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885ef50dfdca9f9140b8bf1_Logo_crantech_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="27 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885ef82c4a168e60b47911d_Logo_CRE Guard_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="1 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885ee08f5f493b2bb9e7f1e_Logo_medease_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="2 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885ee4528e1e50ce73cec96_Logo_3asafeer_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="3 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885ee8c69e8f4233a577999_Logo_akijship_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="4 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885ee9e7ebe3a3c0e3a331c_Logo_akij_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="5 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885eeb809370b706fb8e60d_Logo_alpine_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="6 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885eee107ee412b3af204cf_Logo_Bizphix_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="7 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885eef1a76e2babd6efc174_Logo_Buttercup_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="8 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885ef0413f8918ac5356de1_Logo_carbobon_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="9 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885ef13617c539ba8a284f4_Logo_carnesia_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="10 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885ef283a1bcb89be6747e7_Logo_compaies_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="11 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885ef3df74b709059457346_Logo_cpg_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="12 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885ef94ab9e4ca1123be230_Logo_Dlicio_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="13 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885efa747ec9f1d1564f668_Logo_docuseal_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="14 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885efcf7840077b72111115_Logo_farasha_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="15 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885efde40d2b35d3d22dea0_Logo_fitmate_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="16 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885effb87ea8f930b980cad_Logo_Gainsty_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="17 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f01211f8986a34f542d8_Logo_grow_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="18 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f045523f0b94ba432e42_Logo_heyluna_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="19 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f0546756b58458d71b9b_Logo_IPDC_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="20 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f06558e5a5df0fbefdde_Logo_khanit_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="21 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f07d9c093fad609a26bb_Logo_klasio_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="22 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885ee66114ee66a929deac9_Logo_affine_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="23 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f1aadb3edb2617313123_Logo_telenor_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="24 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885eece6aa97547b732fdf2_Logo_axiata_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="25 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f03409370b706fb922c8_Logo_Guardian_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="26 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885ef50dfdca9f9140b8bf1_Logo_crantech_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="27 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885ef82c4a168e60b47911d_Logo_CRE Guard_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="1 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885ee08f5f493b2bb9e7f1e_Logo_medease_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="2 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885ee4528e1e50ce73cec96_Logo_3asafeer_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="3 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885ee8c69e8f4233a577999_Logo_akijship_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="4 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885ee9e7ebe3a3c0e3a331c_Logo_akij_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="5 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885eeb809370b706fb8e60d_Logo_alpine_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="6 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885eee107ee412b3af204cf_Logo_Bizphix_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="7 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885eef1a76e2babd6efc174_Logo_Buttercup_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="8 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885ef0413f8918ac5356de1_Logo_carbobon_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="9 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885ef13617c539ba8a284f4_Logo_carnesia_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="10 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885ef283a1bcb89be6747e7_Logo_compaies_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="11 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885ef3df74b709059457346_Logo_cpg_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="12 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885ef94ab9e4ca1123be230_Logo_Dlicio_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="13 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885efa747ec9f1d1564f668_Logo_docuseal_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="14 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885efcf7840077b72111115_Logo_farasha_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="15 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885efde40d2b35d3d22dea0_Logo_fitmate_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="16 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885effb87ea8f930b980cad_Logo_Gainsty_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="17 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f01211f8986a34f542d8_Logo_grow_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="18 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f045523f0b94ba432e42_Logo_heyluna_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="19 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f0546756b58458d71b9b_Logo_IPDC_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="20 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f06558e5a5df0fbefdde_Logo_khanit_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="21 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f07d9c093fad609a26bb_Logo_klasio_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="22 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885ee66114ee66a929deac9_Logo_affine_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="23 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f1aadb3edb2617313123_Logo_telenor_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="24 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885eece6aa97547b732fdf2_Logo_axiata_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="25 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f03409370b706fb922c8_Logo_Guardian_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="26 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885ef50dfdca9f9140b8bf1_Logo_crantech_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                        <div
                          role="group"
                          aria-label="27 of 27"
                          className="relative items-center box-border caret-transparent flex shrink-0 h-10 justify-center list-none md:h-16"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885ef82c4a168e60b47911d_Logo_CRE Guard_mono.svg"
                            alt=""
                            className="box-border caret-transparent h-full max-w-full object-contain align-bottom w-full md:object-fill md:w-auto"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bg-[linear-gradient(270deg,rgba(15,11,38,0),rgba(10,11,11,0.92)_67%)] box-border caret-transparent left-[-11%] w-[130px] inset-y-[0%] md:bg-[linear-gradient(270deg,rgba(15,11,38,0),rgb(10,10,10)_60%)] md:w-[270px] md:left-[0%]"></div>
                  <div className="absolute bg-[linear-gradient(81deg,rgba(15,11,38,0),rgb(10,10,10)_60%)] box-border caret-transparent right-[-10%] w-[130px] inset-y-[0%] md:w-[270px] md:right-[0%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute text-white box-border caret-transparent h-[1200px] w-full z-[-1] overflow-hidden top-0">
          <video
            autoplay=""
            loop=""
            muted=""
            playsinline=""
            className="absolute bg-[url('https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9%2F674238984b5b15db637f4a63_-60bc-4584-9ad6-9caa931f8372-poster-00001.jpg')] bg-cover box-border caret-transparent h-full object-cover w-full z-[-100] bg-center m-auto -inset-full"
          >
            <source
              src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/674238984b5b15db637f4a63_-60bc-4584-9ad6-9caa931f8372-transcode.mp4"
              className="text-black text-base box-border caret-transparent leading-[normal] font-times_new_roman"
            />
            <source
              src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/674238984b5b15db637f4a63_-60bc-4584-9ad6-9caa931f8372-transcode.webm"
              className="text-black text-base box-border caret-transparent leading-[normal] font-times_new_roman"
            />
          </video>
          <div className="absolute bg-[linear-gradient(rgba(10,10,10,0),rgb(10,10,10)_70%)] box-border caret-transparent h-[200px] bottom-[0%] inset-x-[0%]"></div>
        </div>
        <div className="absolute bg-neutral-950 box-border caret-transparent z-[-2] inset-[0%]"></div>
      </div>
      <div className="absolute box-border caret-transparent max-w-44 pointer-events-none z-0 right-[0%] top-[0%] md:max-w-none">
        <img
          src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67fbb9e09e1ee391a7f159d2_Group 2147223906.avif"
          alt=""
          className="box-border caret-transparent inline-block max-w-full"
        />
      </div>
      <div className="absolute box-border caret-transparent hidden pointer-events-none z-[4] left-[0%] top-32 md:block">
        <img
          src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/681e0d5850bfc947562666d6_Group 2147225317 (1).avif"
          alt=""
          className="box-border caret-transparent inline-block max-w-full"
        />
      </div>
      <div className="absolute box-border caret-transparent hidden pointer-events-none w-full z-[3] bottom-0 md:block">
        <img
          src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/681e0c6f22d0c33e1316da71_Shade (2).avif"
          alt=""
          className="aspect-[auto_1531_/_303] box-border caret-transparent inline-block h-[303px] max-w-full w-full"
        />
      </div>
    </section>
  );
};
