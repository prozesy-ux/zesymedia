import { LocationCard } from "@/integrations/projects/sections/Footer/components/LocationCard";

export const LocationGrid = () => {
  return (
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
  );
};
