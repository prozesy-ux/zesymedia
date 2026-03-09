import { useEffect, useState } from "react";

export const NavbarCTA = () => {
  const [isAfterFirstSection, setIsAfterFirstSection] = useState(false);

  useEffect(() => {
    const getFirstSectionThreshold = () => {
      const firstSection = document.querySelector("main section, section") as HTMLElement | null;
      if (!firstSection) {
        return window.innerHeight;
      }

      const rect = firstSection.getBoundingClientRect();
      return window.scrollY + rect.top + rect.height;
    };

    const updateScrollState = () => {
      const threshold = getFirstSectionThreshold();
      const reachedThreshold = window.scrollY >= threshold;
      setIsAfterFirstSection(reachedThreshold);
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  return (
    <a
      href="https://prozesy.com/contact"
      className={`cta-btn relative text-zinc-50 text-base font-bold items-center box-border caret-transparent flex h-16 justify-center justify-self-center tracking-[0.32px] leading-6 max-w-full min-h-[auto] min-w-[auto] translate-y-[-60.0%] w-16 rounded-[18px] overflow-hidden md:h-auto md:justify-self-auto md:transform-none md:w-auto md:rounded-lg ${
        isAfterFirstSection ? "cta-btn-scrolled" : "cta-btn-default"
      }`}
    >
      <div
        className={`cta-btn-inner relative items-center box-border caret-transparent gap-x-2 flex h-full justify-center min-h-[auto] min-w-[auto] gap-y-2 w-full z-0 p-[5px] md:px-8 md:py-4 ${
          isAfterFirstSection ? "cta-btn-inner-scrolled" : "cta-btn-inner-default"
        }`}
      >
        <img
          src="https://c.animaapp.com/mmfqa5b2QIeLaz/assets/icon-5.svg"
          alt="Icon"
          className="text-[32px] box-border caret-transparent shrink-0 h-8 leading-[48px] align-baseline w-8 md:text-2xl md:h-6 md:leading-9 md:w-6"
        />
        <span className="box-border caret-transparent hidden min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]">
          Start a Project
        </span>
        <img
          src="https://c.animaapp.com/mmfqa5b2QIeLaz/assets/icon-6.svg"
          alt="Icon"
          className="absolute text-white/50 box-border caret-transparent blur-[2.5px] h-16 pointer-events-none translate-x-[50.0%] translate-y-[-50.0%] align-baseline w-16 right-[0%] top-[0%]"
        />
      </div>
    </a>
  );
};
