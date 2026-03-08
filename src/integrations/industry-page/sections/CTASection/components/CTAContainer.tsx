import { CTAContent } from "@/integrations/industry-page/sections/CTASection/components/CTAContent";

export const CTAContainer = () => {
  return (
    <div className="relative bg-neutral-950 box-border caret-transparent h-[700px] w-full mt-0 rounded-2xl md:h-[515px] md:mt-11 md:rounded-[32px]">
      <div className="absolute bottom-[-2%] box-border caret-transparent hidden h-[260px] max-h-[557px] max-w-[300px] z-20 right-[0%] md:block md:h-auto md:max-w-none md:right-[2%] md:bottom-[0%]">
        <img
          src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6734f70094aa7b62e8c08b04_UI Photo.avif"
          alt=""
          className="box-border caret-transparent h-full max-w-full object-contain w-full md:object-fill"
        />
      </div>
      <div className="absolute box-border caret-transparent block max-h-[557px] top-[-4.5%] z-20 left-[0%] right-[2%] bottom-auto md:hidden md:left-auto md:top-auto md:bottom-[0%]">
        <img
          alt=""
          src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67adbf696e5421b4111a090c_UI Photo11.avif"
          className="aspect-[auto_336_/_372] box-border caret-transparent h-full max-w-full object-contain w-full md:object-fill"
        />
      </div>
      <div className="relative items-center box-border caret-transparent flex flex-col h-full z-0 overflow-hidden rounded-2xl md:[align-items:normal] md:block md:flex-row md:rounded-[32px]">
        <div className="box-border caret-transparent flex flex-col h-full justify-end min-h-[auto] min-w-[auto] w-full pt-0 pb-5 px-4 md:block md:flex-row md:justify-normal md:min-h-0 md:min-w-0 md:w-auto md:pl-16 md:pr-0 md:py-16">
          <CTAContent />
        </div>
        <div className="absolute box-border caret-transparent pointer-events-none z-[-1] left-0 right-[0%] top-[0%] md:left-auto">
          <img
            alt=""
            src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6734eec07598599f979db63c_Gradient.avif"
            className="aspect-[auto_1252_/_888] box-border caret-transparent inline-block h-full max-w-full w-full"
          />
        </div>
        <div className="absolute box-border caret-transparent max-w-[190px] pointer-events-none z-[-1] left-[0%] bottom-[0%] md:max-w-none">
          <img
            src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/673502441e081ae5b3104a5e_Gradient (1).avif"
            alt=""
            className="box-border caret-transparent inline-block h-full max-w-full w-full"
          />
        </div>
      </div>
    </div>
  );
};
