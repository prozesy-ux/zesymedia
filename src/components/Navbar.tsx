import { useState, useRef, useEffect } from "react";

export const Navbar = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [isAfterFirstSection, setIsAfterFirstSection] = useState(false);
  const servicesTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const moreTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const getFirstSectionThreshold = () => {
      const firstSection =
        (document.querySelector("main section") as HTMLElement | null) ||
        (document.querySelector("section") as HTMLElement | null);

      if (!firstSection) {
        return window.innerHeight;
      }

      const rect = firstSection.getBoundingClientRect();
      return window.scrollY + rect.top + rect.height;
    };

    const updateScrollState = () => {
      const threshold = getFirstSectionThreshold();
      setIsAfterFirstSection(window.scrollY >= threshold);
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    window.addEventListener("locationchange", updateScrollState as EventListener);

    return () => {
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
      window.removeEventListener("locationchange", updateScrollState as EventListener);
    };
  }, []);

  const handleSpaNavigation = (href: string, e: React.MouseEvent) => {
    if (!href.startsWith("/") || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
      return;
    }
    e.preventDefault();
    window.history.pushState({}, "", href);
    window.dispatchEvent(new Event("locationchange"));
  };

  const handleServicesMouseLeave = () => {
    servicesTimerRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 100);
  };

  const handleServicesMouseEnter = () => {
    if (servicesTimerRef.current) {
      clearTimeout(servicesTimerRef.current);
    }
    setServicesOpen(true);
  };

  const handleMoreMouseLeave = () => {
    moreTimerRef.current = setTimeout(() => {
      setMoreOpen(false);
    }, 100);
  };

  const handleMoreMouseEnter = () => {
    if (moreTimerRef.current) {
      clearTimeout(moreTimerRef.current);
    }
    setMoreOpen(true);
  };

  return (
    <>
      <div className="navbar-wrap relative z-[999]">
        <nav className="navbar">
          <img
            src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-1.svg"
            alt="Icon"
            className="navbar-shape"
          />

          <a href="/projects" className="nav-link cursor-pointer">
            <img src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-2.svg" alt="Icon" className="nav-link-icon" />
            <span className="nav-link-text">Projects</span>
          </a>

          <a 
            href="/services" 
            className="nav-link nav-services-mobile cursor-pointer"
            onMouseEnter={handleServicesMouseEnter}
            onMouseLeave={handleServicesMouseLeave}
            onClick={(e) => {
              setServicesOpen(false);
              handleSpaNavigation("/services", e);
            }}
          >
            <img src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-3.svg" alt="Icon" className="nav-link-icon" />
            <span className="nav-link-text">Services</span>
          </a>

          <div 
            className="nav-services-desktop cursor-pointer"
            onMouseEnter={handleServicesMouseEnter}
            onMouseLeave={handleServicesMouseLeave}
          >
            <a 
              href="/services" 
              className="nav-link cursor-pointer" 
              onClick={(e) => {
                setServicesOpen(false);
                handleSpaNavigation("/services", e);
              }}
            >
              <span className="nav-link-text">Services</span>
            </a>
          </div>

          <a
            href="/contact"
            className={`cta-link cursor-pointer ${isAfterFirstSection ? "cta-link-scrolled" : "cta-link-default"}`}
            onClick={(e) => handleSpaNavigation("/contact", e)}
          >
            <div className="cta-border"></div>
            <div className="cta-inner"></div>
            <div className="cta-content">
              <img src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-6.svg" alt="Icon" className="cta-main-icon" />
              <span className="cta-text">Start a Project</span>
              <img src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-7.svg" alt="Icon" className="cta-glow" />
            </div>
          </a>

          <a href="/pricing" className="nav-link cursor-pointer">
            <img src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-8.svg" alt="Icon" className="nav-link-icon" />
            <span className="nav-link-text">Pricing</span>
          </a>

          <a 
            href="/" 
            className="nav-link cursor-pointer"
            style={{ display: 'flex', justifyContent: 'center', width: '100%' }}
            onMouseEnter={handleMoreMouseEnter}
            onMouseLeave={handleMoreMouseLeave}
            onClick={(e) => {
              e.preventDefault();
              setMoreOpen(!moreOpen);
            }}
          >
            <img src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-3.svg" alt="Icon" className="nav-link-icon" />
            <span className="nav-link-text">More</span>
          </a>

          <div className="navbar-panel"></div>
        </nav>

        {/* Services Dropdown */}
        {servicesOpen && (
          <div 
            className="absolute left-[50%] -translate-x-1/2 w-[calc(100vw-32px)] md:w-[900px] max-w-[calc(100vw-40px)] bg-white rounded-[24px] shadow-lg z-[9999]"
            style={{ bottom: 'calc(100% + 16px)' }}
            onMouseEnter={handleServicesMouseEnter}
            onMouseLeave={handleServicesMouseLeave}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 p-4 md:p-8 lg:p-12 md:min-h-[500px]">
              <div className="flex flex-col gap-4 md:gap-6">
                <div>
                  <p className="text-[0.75rem] md:text-[0.875rem] font-medium tracking-[0.15em] uppercase text-gray-500 mb-2">What we do</p>
                  <h3 className="text-lg md:text-2xl font-bold text-gray-900">Our Services</h3>
                </div>
                <div className="flex flex-col gap-3 md:gap-4">
                  {[
                    { title: "Marketing Meta Ads", desc: "Running growth-focused Meta ad campaigns for sales and leads.", href: "/services/marketing-meta-ads" },
                    { title: "Google Ads & PPC", desc: "Managing high-intent search and PPC campaigns for better ROI.", href: "/services/google-ads-ppc" },
                    { title: "TikTok Ads", desc: "Creating performance-first TikTok campaigns with strong creatives.", href: "/services/tiktok-ads" },
                    { title: "Web App Development", desc: "Building scalable and high-performance web applications.", href: "/services/web-app-development" },
                    { title: "UI UX Design", desc: "Designing intuitive interfaces and smooth user journeys.", href: "/services/ui-ux-design" },
                    { title: "Branding Design", desc: "Crafting memorable brand identities that stand out.", href: "/services/branding-design" },
                    { title: "SEO Optimization", desc: "Improving search rankings, organic traffic, and conversions.", href: "/services/seo-optimization" },
                  ].map((service, idx) => (
                    <a 
                      key={idx}
                      href={service.href}
                      className="group p-2 md:p-3 rounded-lg hover:bg-gray-100 cursor-pointer"
                      onClick={(e) => handleSpaNavigation(service.href, e)}
                    >
                      <h4 className="text-sm md:text-base font-semibold text-gray-900 group-hover:text-violet-600">{service.title}</h4>
                      <p className="text-xs md:text-sm text-gray-600">{service.desc}</p>
                    </a>
                  ))}
                </div>
              </div>

              <div className="hidden md:flex items-center justify-center md:pl-8 mt-4 md:mt-0">
                <div className="w-full h-64 md:h-full bg-black rounded-lg overflow-hidden flex items-center justify-center">
                  <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                    <source src="https://github.com/designmonks/DM-Showreel/raw/main/DM%20Showreel%202025%20Vertical.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* More Dropdown */}
        {moreOpen && (
          <div 
            className="absolute right-0 md:right-auto left-[50%] md:left-auto md:-translate-x-0 -translate-x-1/2 w-[calc(100vw-32px)] md:w-[900px] max-w-[calc(100vw-40px)] bg-white rounded-[24px] shadow-lg z-[9999]"
            style={{ bottom: 'calc(100% + 16px)' }}
            onMouseEnter={handleMoreMouseEnter}
            onMouseLeave={handleMoreMouseLeave}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 p-4 md:p-8 lg:p-12 md:min-h-[500px]">
              <div className="hidden md:flex items-center justify-center md:pr-8 order-2 md:order-1">
                <div className="w-full h-64 md:h-full bg-black rounded-lg overflow-hidden flex items-center justify-center">
                  <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                    <source src="https://github.com/designmonks/Contact-US-Video/raw/main/DM%20Intro%20Vertical.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>

              <div className="flex flex-col gap-4 md:gap-6 order-1 md:order-2">
                <div>
                  <p className="text-[0.75rem] md:text-[0.875rem] font-medium tracking-[0.15em] uppercase text-gray-500 mb-2">Explore</p>
                  <h3 className="text-lg md:text-2xl font-bold text-gray-900">Company</h3>
                </div>
                <div className="flex flex-col gap-3 md:gap-4">
                  {[
                    { title: "Home", desc: "Home is where Design Monks lives", href: "/" },
                    { title: "About us", desc: "The journey of Design Monks", href: "/about" },
                    { title: "Meet the team", desc: "An overview of the Monk family", href: "/teams" },
                    { title: "Blogs", desc: "A collection of informative blogs", href: "/blog" },
                    { title: "Career", desc: "Work with top global brands", href: "/career" },
                    { title: "Contact us", desc: "Start your dream design journey", href: "/contact" },
                  ].map((link, idx) => (
                    <a 
                      key={idx}
                      href={link.href}
                      className="group p-2 md:p-3 rounded-lg hover:bg-gray-100 cursor-pointer"
                      onClick={(e) => handleSpaNavigation(link.href, e)}
                    >
                      <h4 className="text-sm md:text-base font-semibold text-gray-900 group-hover:text-violet-600">{link.title}</h4>
                      <p className="text-xs md:text-sm text-gray-600">{link.desc}</p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
