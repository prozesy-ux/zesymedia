import { CookiePrompt } from "@/sections/CookieBanner/components/CookiePrompt";
import { CookieSettings } from "@/sections/CookieBanner/components/CookieSettings";

export const CookieBanner = () => {
  return (
    <div className="relative box-border caret-transparent flex z-[99999]">
      <CookiePrompt />
      <CookieSettings />
    </div>
  );
};
