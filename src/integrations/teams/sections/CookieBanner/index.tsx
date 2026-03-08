import { CookiePrompt } from "@/integrations/teams/sections/CookieBanner/components/CookiePrompt";
import { CookieSettings } from "@/integrations/teams/sections/CookieBanner/components/CookieSettings";

export const CookieBanner = () => {
  return (
    <div className="relative box-border caret-transparent flex z-[99999]">
      <CookiePrompt />
      <CookieSettings />
    </div>
  );
};
