import { useState } from "react";

export const Navbar = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const handleSpaNavigation = (href: string, e: React.MouseEvent) => {
    if (!href.startsWith("/") || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
      return;
    }
    e.preventDefault();
    window.history.pushState({}, "", href);
    window.dispatchEvent(new Event("locationchange"));
  };

  return (
    <>
      {/* Backdrop for dropdowns */}
      <div
        id="navBackdrop"
        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[99998] opacity-0 invisible transition-all duration-300 pointer-events-none"
      />

      <div className="navbar-wrap">
        <nav className="navbar">
          <img
            src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-1.svg"
            alt="Icon"
            className="navbar-shape"
          />

          <a
            href="/projects"
            className="nav-link"
          >
            <img
              src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-2.svg"
              alt="Icon"
              className="nav-link-icon"
            />
            <span className="nav-link-text">
              Projects
            </span>
          </a>

          <a
            href="/services"
            className="nav-link nav-services-mobile"
          >
            <img
              src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-3.svg"
              alt="Icon"
              className="nav-link-icon"
            />
            <span className="nav-link-text">
              Service
            </span>
          </a>

          <div 
            className="nav-services-desktop relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <a
              href="/services"
              className="nav-link"
            >
              <span className="nav-link-text">Service</span>
            </a>
            
            {/* Services Dropdown */}
            <div 
              className={`absolute left-1/2 -translate-x-1/2 w-[900px] max-w-[90vw] bg-white rounded-[24px] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.1)] z-[99999] hidden md:block transition-opacity duration-300 ${
                servicesOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
              }`}
              style={{ top: '120px' }}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <div className="grid grid-cols-2 gap-0 min-h-[560px]">
                {/* Left Column: Services List */}
                <div className="p-8 lg:p-12 flex flex-col gap-6">
                  <div>
                    <p className="text-[0.875rem] font-medium tracking-[0.15em] uppercase text-gray-500 mb-2">
                      What we do
                    </p>
                    <h3 className="text-[1.681rem] font-medium text-gray-900 leading-tight tracking-tight">
                      Our Services
                    </h3>
                  </div>
                  <div className="flex flex-col gap-6">
                    {[
                      { title: "UI UX", desc: "Creating user-friendly digital experiences." },
                      { title: "Logo & Branding", desc: "Creating memorable identities for brands." },
                      { title: "Web Design", desc: "Building visually appealing & functional websites." },
                      { title: "Webflow Design", desc: "Developing responsive websites effortlessly." },
                      { title: "Framer Design", desc: "Interactive web designs are made simple." },
                      { title: "SaaS Design", desc: "Intuitive interfaces that boost user engagement." },
                    ].map((service, idx) => (
                      <a 
                        key={idx}
                        href={`/services/${service.title.toLowerCase().replace(/ /g, "-")}`}
                        className="group/item block relative p-4 -m-4 rounded-xl hover:bg-gray-50 active:bg-gray-100 transition-all cursor-pointer"
                        onClick={(e) => handleSpaNavigation(`/services/${service.title.toLowerCase().replace(/ /g, "-")}`, e)}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <h4 className="text-gray-900 group-hover/item:text-violet-600 transition-colors" style={{ fontSize: 'clamp(1rem, 0.188vw + 0.9559rem, 1.125rem)', fontWeight: 400, lineHeight: 1.5, letterSpacing: '0.02em' }}>
                              {service.title}
                            </h4>
                            <p className="text-gray-500" style={{ fontSize: 'clamp(0.875rem, 0.188vw + 0.8309rem, 1rem)', fontWeight: 400, lineHeight: 1.5, letterSpacing: '0.02em' }}>
                              {service.desc}
                            </p>
                          </div>
                          <svg 
                            className="opacity-0 group-hover/item:opacity-100 transition-all transform translate-x-[-8px] group-hover/item:translate-x-0 flex-shrink-0 mt-1"
                            width="20" height="21" viewBox="0 0 20 21" fill="none"
                          >
                            <path fillRule="evenodd" clipRule="evenodd" d="M18.1154 9.49999C18.1187 9.5 18.1219 9.5 18.1252 9.5L18.1252 9.50006V11.5001H18.0906C14.1662 11.5163 11.6252 14.2984 11.6252 16.75H9.62518C9.62518 14.7566 10.6464 12.8552 12.3134 11.5001H1.87518L1.87518 9.50006H12.3136C10.6464 8.14492 9.62518 6.24342 9.62518 4.25L11.6252 4.25C11.6252 6.70673 14.1769 9.49539 18.1154 9.49999Z" fill="#737373" className="group-hover/item:fill-violet-600 transition-colors"/>
                          </svg>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Right Column: Video */}
                <div className="p-8 lg:p-12 flex items-stretch">
                  <div className="relative bg-black text-white flex flex-col items-center justify-center rounded-[20px] overflow-hidden w-full h-full">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                      className="absolute inset-0 w-full h-full object-cover"
                    >
                      <source src="https://github.com/designmonks/DM-Showreel/raw/main/DM%20Showreel%202025%20Vertical.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black pointer-events-none" />
                    <div className="relative z-10 flex flex-col items-center justify-center gap-4 select-none">
                      <span className="text-white font-semibold tracking-[0.3em] uppercase text-[2rem] leading-none">WE</span>
                      <div className="w-16 h-16 rounded-xl bg-[hsl(75,84%,60%)] flex items-center justify-center">
                        <div className="w-8 h-8 rounded-md bg-[hsl(240,29%,12%)]" />
                      </div>
                      <span className="text-white font-semibold tracking-[0.3em] uppercase text-[2rem] leading-none">ARE</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pointer */}
              <svg
                className="absolute -top-[8px] left-1/2 -translate-x-1/2 w-[24px] h-[10px]"
                viewBox="0 0 24 10"
                shapeRendering="geometricPrecision"
              >
                <path d="M12 10 L24 0 H0 Z" fill="white" />
              </svg>
            </div>
          </div>

          <a
            href="/contact"
            className="cta-link"
          >
            <div className="cta-border"></div>
            <div className="cta-inner"></div>

            <div className="cta-content">
              <img
                src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-6.svg"
                alt="Icon"
                className="cta-main-icon"
              />
              <span className="cta-text">
                Start a Project
              </span>
              <img
                src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-7.svg"
                alt="Icon"
                className="cta-glow"
              />
            </div>
          </a>

          <a
            href="/pricing"
            className="nav-link"
          >
            <img
              src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-8.svg"
              alt="Icon"
              className="nav-link-icon"
            />
            <span className="nav-link-text">
              Pricing
            </span>
          </a>

          <div 
            style={{ display: 'flex', justifyContent: 'center', width: '100%' }}
            onMouseEnter={() => setMoreOpen(true)}
            onMouseLeave={() => setMoreOpen(false)}
            className="relative"
          >
            <a
              href="/"
              className="nav-link"
            >
              <img
                src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/icon-3.svg"
                alt="Icon"
                className="nav-link-icon"
              />
              <span className="nav-link-text">
                More
              </span>
            </a>

            {/* More Dropdown */}
            <div 
              className={`absolute right-0 w-[900px] max-w-[90vw] bg-white rounded-[24px] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.1)] z-[99999] hidden md:block transition-opacity duration-300 ${
                moreOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
              }`}
              style={{ top: '120px' }}
              onMouseEnter={() => setMoreOpen(true)}
              onMouseLeave={() => setMoreOpen(false)}
            >
              <div className="grid grid-cols-2 gap-0 min-h-[560px]">
                {/* Left Column: Video */}
                <div className="p-8 lg:p-12 flex items-stretch">
                  <div className="relative bg-black text-white flex flex-col items-center justify-center rounded-[20px] overflow-hidden w-full h-full">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                      className="absolute inset-0 w-full h-full object-cover"
                    >
                      <source src="https://github.com/designmonks/Contact-US-Video/raw/main/DM%20Intro%20Vertical.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black pointer-events-none" />
                    <div className="relative z-10 flex flex-col items-center justify-center gap-4 select-none">
                      <span className="text-white font-semibold tracking-[0.3em] uppercase text-[2rem] leading-none">WE</span>
                      <div className="w-16 h-16 rounded-xl bg-[hsl(75,84%,60%)] flex items-center justify-center">
                        <div className="w-8 h-8 rounded-md bg-[hsl(240,29%,12%)]" />
                      </div>
                      <span className="text-white font-semibold tracking-[0.3em] uppercase text-[2rem] leading-none">ARE</span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Links */}
                <div className="p-8 lg:p-12 flex flex-col gap-8">
                  <div>
                    <p className="text-[0.875rem] font-medium tracking-[0.15em] uppercase text-gray-500 mb-2">
                      Explore more
                    </p>
                    <h3 className="text-[1.681rem] font-medium text-gray-900 leading-tight tracking-tight">
                      Company
                    </h3>
                  </div>
                  <div className="flex flex-col gap-8">
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
                        className="group/item block relative p-4 -m-4 rounded-xl hover:bg-gray-50 active:bg-gray-100 transition-all cursor-pointer"
                        onClick={(e) => handleSpaNavigation(link.href, e)}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <h4 className="text-gray-900 group-hover/item:text-violet-600 transition-colors" style={{ fontSize: 'clamp(1rem, 0.188vw + 0.9559rem, 1.125rem)', fontWeight: 400, lineHeight: 1.5, letterSpacing: '0.02em' }}>
                              {link.title}
                            </h4>
                            <p className="text-gray-500" style={{ fontSize: 'clamp(0.875rem, 0.188vw + 0.8309rem, 1rem)', fontWeight: 400, lineHeight: 1.5, letterSpacing: '0.02em' }}>
                              {link.desc}
                            </p>
                          </div>
                          <svg 
                            className="opacity-0 group-hover/item:opacity-100 transition-all transform translate-x-[-8px] group-hover/item:translate-x-0 flex-shrink-0 mt-1"
                            width="20" height="21" viewBox="0 0 20 21" fill="none"
                          >
                            <path fillRule="evenodd" clipRule="evenodd" d="M18.1154 9.49999C18.1187 9.5 18.1219 9.5 18.1252 9.5L18.1252 9.50006V11.5001H18.0906C14.1662 11.5163 11.6252 14.2984 11.6252 16.75H9.62518C9.62518 14.7566 10.6464 12.8552 12.3134 11.5001H1.87518L1.87518 9.50006H12.3136C10.6464 8.14492 9.62518 6.24342 9.62518 4.25L11.6252 4.25C11.6252 6.70673 14.1769 9.49539 18.1154 9.49999Z" fill="#737373" className="group-hover/item:fill-violet-600 transition-colors"/>
                          </svg>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Pointer */}
              <svg
                className="absolute -top-[8px] right-[150px] w-[24px] h-[10px]"
                viewBox="0 0 24 10"
                shapeRendering="geometricPrecision"
              >
                <path d="M12 10 L24 0 H0 Z" fill="white" />
              </svg>
            </div>
          </div>

          <div className="navbar-panel"></div>
        </nav>
      </div>
    </>
  );
};
