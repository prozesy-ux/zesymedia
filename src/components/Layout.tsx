import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";
import { CookieConsent } from "@/components/CookieConsent";
import { Logo } from "@/components/Logo";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="text-zinc-800 text-sm not-italic normal-nums font-normal accent-auto bg-zinc-50 box-border caret-transparent block tracking-[normal] leading-5 list-outside list-disc min-h-full pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-outfit_variablefont_wght">
      <div className="box-border caret-transparent">
        <Navbar />
        <Logo />
        <main className="box-border caret-transparent">
          <Outlet />
        </main>
        <Footer />
      </div>
      <div className="relative box-border caret-transparent flex z-[99999]">
        <CookieConsent />
      </div>
    </div>
  );
};
