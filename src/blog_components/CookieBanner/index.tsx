import { CookieSettings } from "@/blog_components/CookieBanner/CookieSettings";
import { CookieModal } from "@/blog_components/CookieBanner/CookieModal";

export const CookieBanner = () => {
  return (
    <div className="relative box-border caret-transparent flex z-[99999]">
      <CookieSettings />
      <CookieModal />
    </div>
  );
};
