import { useEffect, useState } from "react";
import { Hero } from "@/integrations/service-detail/sections/Hero";
import { TrustedBrands } from "@/integrations/service-detail/sections/TrustedBrands";
import { WhySection } from "@/integrations/service-detail/sections/WhySection";
import { FigmaPreview } from "@/integrations/service-detail/sections/FigmaPreview";
import { WorkProcess } from "@/integrations/service-detail/sections/WorkProcess";
import { ServicesSection } from "@/integrations/service-detail/sections/ServicesSection";
import { TestimonialsSection } from "@/integrations/service-detail/sections/TestimonialsSection";
import { PortfolioSection } from "@/integrations/service-detail/sections/PortfolioSection";
import { ContactSection } from "@/sections/ContactSection";
import { FAQSection } from "@/sections/FAQSection";
import { servicesData, ServiceItem } from "@/integrations/services/data/servicesData";

type ItemDetailData = ServiceItem & {
  serviceName?: string;
  serviceId?: string;
  serviceDescription?: string;
};

export const ServiceItemDetail = () => {
  const [itemData, setItemData] = useState<ItemDetailData | null>(null);

  useEffect(() => {
    const getPathParams = () => {
      const path = window.location.pathname;
      const match = path.match(/\/services\/([^/]+)\/([^/]+)/);
      if (!match) return null;
      return { serviceId: match[1], itemSlug: match[2] };
    };

    const params = getPathParams();
    if (!params) return;

    // Find the service and item
    const service = servicesData.find((s) => s.id === params.serviceId);
    if (!service) {
      setItemData(null);
      return;
    }

    const item = service.services.find((s) => s.slug === params.itemSlug);
    if (!item) {
      setItemData(null);
      return;
    }

    // Combine item data with service info
    setItemData({
      ...item,
      serviceName: service.title,
      serviceId: service.id,
      serviceDescription: service.description,
    });
  }, []);

  if (!itemData) {
    return (
      <div className="box-border caret-transparent overflow-x-clip">
        <main className="box-border caret-transparent">
          <div className="text-center py-20 text-zinc-600">
            <p className="text-lg">Service item not found</p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="box-border caret-transparent overflow-x-clip">
      <main className="box-border caret-transparent">
        <Hero
          serviceData={{
            id: itemData.serviceId || "",
            slug: itemData.serviceId || "",
            href: "",
            imageUrl: "",
            imageAlt: "",
            imageVariant: "",
            title: itemData.title,
            description: itemData.title,
            services: [],
            badgeImageUrl: "",
            badgeImageAlt: "",
          }}
        />
        <TrustedBrands />
        <WhySection />
        <FigmaPreview />
        <WorkProcess />
        <ServicesSection />
        <TestimonialsSection />
        <PortfolioSection />
        <FAQSection />
        <ContactSection />
      </main>
    </div>
  );
};
