import { NavbarContent } from "@/integrations/industry-page/sections/FixedNavbar/components/NavbarContent";

export const FixedNavbar = () => {
  return (
    <div className="fixed box-border caret-transparent max-w-none z-[99999] mx-auto pb-6 bottom-[0%] inset-x-[0%] md:max-w-[713px]">
      <NavbarContent />
    </div>
  );
};
