import { TestimonialCard } from "@/integrations/industry-detail/sections/TestimonialsSection/components/TestimonialCard";

export const TestimonialSlider = () => {
  return (
    <div
      role="group"
      aria-label="3 / 10"
      className="relative aspect-[9_/_16] box-border caret-transparent min-h-[auto] min-w-[272px] w-[272px] overflow-hidden rounded-3xl md:min-w-[396px] md:w-[396px]"
    >
      <TestimonialCard
        clientImageUrl="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/697c78b3798750901911bb75_Client_Anika _916.avif"
        clientImageAlt=""
        iconUrl="https://c.animaapp.com/mmfoqfr1V2uuVb/assets/icon-9.svg"
        iconAlt="Icon"
        companyLogoUrl="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/697b6e3416493b65e726d165_Logo_Coinpulse_ mono.svg"
        companyLogoAlt=""
        testimonialText="Prozesy Media is a professional, reliable partner for end-to-end product builds. From clean, modern designs to seamless development with Dev Monks, they exceeded my expectations. I couldn’t be happier with the collaboration!"
        clientName="Anika"
        clientTitle="Founder @ Coinpulse"
      />
    </div>
  );
};
