import { LocationCard } from "@/integrations/industry/sections/Footer/components/LocationCard";

export const FooterLocations = () => {
  return (
    <div className="box-border caret-transparent">
      <div className="relative bg-neutral-950 box-border caret-transparent z-0 pt-[156px] pb-0 px-5 md:pt-[352px] md:pb-[78px] md:px-[94px]">
        <div className="items-stretch box-border caret-transparent gap-x-6 flex flex-col flex-nowrap justify-start max-w-[1073px] gap-y-6 mx-auto md:items-start md:flex-row md:flex-wrap md:justify-center">
          <LocationCard
            country="United States"
            address={"16 Cove Road  \nMount Arlington, NJ 07856"}
            variant="md:px-[11.2px]"
          />
          <LocationCard
            country="Australia"
            address="155 Bennett Rd, St Clair NSW 2759"
            variant="md:px-[11.2px]"
          />
          <LocationCard
            country="South Africa"
            address="55 Mons Rd, Bellevue East, Johannesburg, 2198"
            variant="md:px-[11.2px]"
          />
          <LocationCard
            country="Singapore"
            address="6 Raffles Blvd, Marina Square"
            variant="md:px-[35.2px]"
          />
          <LocationCard
            country="Italy"
            address="Via Bari, 9, 03043 Cassino, FR"
            variant="md:px-[11.2px]"
          />
          <LocationCard
            country="Dubai"
            address="AlFattan Downtown - 32d St - Al Satwa"
            variant="md:px-[11.2px]"
          />
          <LocationCard
            country="Cyprus"
            address="Estias 5, Strovolos 2001"
            variant="md:px-[35.2px]"
          />
          <LocationCard
            country="Bangladesh"
            address="Ventura Iconia, Plot 37 Road No. 11, Banani, Dhaka 1213"
            variant="md:px-[11.2px]"
          />
        </div>
        <div className="absolute box-border caret-transparent h-[211px] pointer-events-none w-full z-[-1] top-[0%] bottom-auto inset-x-[0%] md:h-full md:bottom-[0%]">
          <video
            loop=""
            autoplay="true"
            muted=""
            playsinline="true"
            className="absolute box-border caret-transparent h-full object-cover object-[50%_0%] w-full z-[-1] inset-[0%]"
          >
            <source
              src="https://github.com/designmonks/webvideos/raw/refs/heads/main/footer_globe.mp4"
              type="video/mp4"
              className="relative text-black text-base box-border caret-transparent block h-full leading-[normal] pointer-events-auto w-full font-times_new_roman"
            />
          </video>
          <div className="absolute bg-[linear-gradient(rgba(0,0,0,0),rgb(10,10,10))] bottom-[-1%] box-border caret-transparent h-[124px] inset-x-[0%]"></div>
        </div>
      </div>
    </div>
  );
};
