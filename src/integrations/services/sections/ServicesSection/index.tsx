import { ServiceCard } from "@/integrations/services/sections/ServicesSection/components/ServiceCard";
import { servicesData } from "@/integrations/services/data/servicesData";

type ServicesSectionProps = {
  onServiceClick?: (serviceId: string) => void;
};

export const ServicesSection = ({ onServiceClick }: ServicesSectionProps) => {
  return (
    <section className="box-border caret-transparent">
      <div className="box-border caret-transparent z-[1] px-5 md:px-[94px]">
        <div className="box-border caret-transparent max-w-[1252px] w-full mx-auto">
          <div className="box-border caret-transparent py-[60px] md:py-[100px]">
            <div className="box-border caret-transparent">
              <div
                role="list"
                className="box-border caret-transparent gap-x-[60px] flex flex-col auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto_auto] gap-y-[60px] md:gap-x-[100px] md:gap-y-[100px]"
              >
                {servicesData.map((service) => (
                  <ServiceCard
                    key={service.id}
                    {...service}
                    onServiceClick={onServiceClick}
                  />
                ))}
              </div>
            </div>
            <div className="box-border caret-transparent hidden before:accent-auto before:caret-transparent before:text-zinc-800 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-outfit_variablefont_wght after:accent-auto after:caret-transparent after:clear-both after:text-zinc-800 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-outfit_variablefont_wght"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
