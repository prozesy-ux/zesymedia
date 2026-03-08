import { ServiceList } from "@/integrations/services/sections/ServicesSection/components/ServiceList";

export const ServiceDetails = () => {
  return (
    <div className="box-border caret-transparent min-h-[auto] min-w-[auto] px-4 md:px-16">
      <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4 mb-6 md:mb-14">
        <h2 className="text-[28px] font-bold box-border caret-transparent leading-[33.6px] min-h-[auto] min-w-[auto] font-redhatdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
          UI UX Design
        </h2>
        <p className="text-base box-border caret-transparent hidden tracking-[0.36px] leading-6 min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]">
          When it comes to UI/UX design, we create experiences that are simple
          to navigate. Our goal is to deliver user-friendly interactions that
          align with your brand and fulfill user needs.
        </p>
      </div>
      <div className="box-border caret-transparent">
        <ServiceList />
      </div>
      <div className="box-border caret-transparent mt-6 md:mt-8">
        <img
          src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/676448e93f22e3e3874ab104_Frame 1618871791.avif"
          alt=""
          className="box-border caret-transparent inline-block h-[30px] max-w-full md:h-11"
        />
      </div>
    </div>
  );
};
