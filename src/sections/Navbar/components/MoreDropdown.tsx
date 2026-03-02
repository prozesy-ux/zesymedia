export const MoreDropdown = () => {
  const links = [
    { title: "Home", desc: "Home is where the monk lives", href: "/" },
    { title: "About us", desc: "The journey of Design Monks", href: "/about" },
    { title: "Meet the team", desc: "An overview of the Monk family", href: "/team" },
    { title: "Teams", desc: "Explore our team page and structure", href: "/teams" },
    { title: "Blogs", desc: "A collection of informative blogs", href: "/blog" },
    { title: "Career", desc: "Work with top global brands, grow your skills", href: "/career" },
    { title: "Contact us", desc: "Start your dream design journey from here", href: "/contact" },
  ];

  return (
    <div 
      className="absolute bottom-[calc(100%+40px)] right-[-140px] w-[900px] max-w-[1200px] bg-white rounded-[24px] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.1)] cursor-default z-[99999] hidden md:block opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-bottom translate-y-4 group-hover:translate-y-0 overflow-hidden"
      onMouseEnter={() => {
        const backdrop = document.getElementById('navBackdrop');
        if (backdrop) {
          backdrop.classList.remove('opacity-0', 'invisible');
          backdrop.classList.add('opacity-100', 'visible');
        }
      }}
      onMouseLeave={() => {
        const backdrop = document.getElementById('navBackdrop');
        if (backdrop) {
          backdrop.classList.add('opacity-0', 'invisible');
          backdrop.classList.remove('opacity-100', 'visible');
        }
      }}
    >
      <div className="grid grid-cols-2 gap-0 min-h-[560px]">
        {/* Left Column: Visual Block with Video */}
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
              <span className="text-white font-semibold tracking-[0.3em] uppercase text-[2rem] leading-none">
                WE
              </span>
              <div className="animate-[breathe_3s_ease-in-out_infinite] will-transform">
                <div className="w-16 h-16 rounded-xl bg-[hsl(75,84%,60%)] flex items-center justify-center">
                  <div className="w-8 h-8 rounded-md bg-[hsl(240,29%,12%)]" />
                </div>
              </div>
              <span className="text-white font-semibold tracking-[0.3em] uppercase text-[2rem] leading-none">
                ARE
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Links List */}
        <div className="p-8 lg:p-12 flex flex-col gap-8">
          <div>
            <p className="text-[0.875rem] font-medium tracking-[0.15em] uppercase text-gray-500 mb-2">
              What we do
            </p>
            <h3 className="text-[1.681rem] font-medium text-gray-900 leading-tight tracking-tight font-redhatdisplay_variablefont_wght">
              Our Services
            </h3>
          </div>
          <div className="flex flex-col gap-8">
            {links.map((link, index) => (
              <a 
                key={index} 
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  window.history.pushState({}, "", link.href);
                  window.dispatchEvent(new Event("locationchange"));
                }}
                className="group/item block relative p-4 -m-4 rounded-xl hover:bg-gray-50 transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="font-outfit_variablefont_wght text-gray-900 group-hover/item:text-violet-600 transition-colors" style={{ fontSize: 'clamp(1rem, 0.188vw + 0.9559rem, 1.125rem)', fontWeight: 400, lineHeight: 1.5, letterSpacing: '0.02em' }}>
                      {link.title}
                    </h4>
                    <p className="font-outfit_variablefont_wght text-gray-500" style={{ fontSize: 'clamp(0.875rem, 0.188vw + 0.8309rem, 1rem)', fontWeight: 400, lineHeight: 1.5, letterSpacing: '0.02em' }}>
                      {link.desc}
                    </p>
                  </div>
                  <svg 
                    className="opacity-0 group-hover/item:opacity-100 transition-all transform translate-x-[-8px] group-hover/item:translate-x-0 flex-shrink-0 mt-1"
                    width="20" 
                    height="21" 
                    viewBox="0 0 20 21" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fillRule="evenodd" clipRule="evenodd" d="M18.1154 9.49999C18.1187 9.5 18.1219 9.5 18.1252 9.5L18.1252 9.50006V11.5001H18.0906C14.1662 11.5163 11.6252 14.2984 11.6252 16.75H9.62518C9.62518 14.7566 10.6464 12.8552 12.3134 11.5001H1.87518L1.87518 9.50006H12.3136C10.6464 8.14492 9.62518 6.24342 9.62518 4.25L11.6252 4.25C11.6252 6.70673 14.1769 9.49539 18.1154 9.49999Z" fill="#737373" className="group-hover/item:fill-violet-600 transition-colors"/>
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* V-shaped pointer */}
      <svg
        className="absolute -bottom-[8px] right-[150px] w-[24px] h-[10px]"
        viewBox="0 0 24 10"
        aria-hidden="true"
        shapeRendering="geometricPrecision"
      >
        <path d="M12 0 L24 10 H0 Z" fill="white" />
      </svg>
    </div>
  );
};
