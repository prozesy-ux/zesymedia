import { ArrowUpRight } from "lucide-react";

    export const ServicesDropdown = () => {
      const services = [
        { title: "UI UX", desc: "Creating user-friendly digital experiences." },
        { title: "Logo & Branding", desc: "Creating memorable identities for brands." },
        { title: "Web Design", desc: "Building visually appealing & functional websites." },
        { title: "Webflow Design", desc: "Developing responsive websites effortlessly." },
        { title: "Framer Design", desc: "Interactive web designs are made simple." },
        { title: "SaaS Design", desc: "Intuitive interfaces that boost user engagement." },
      ];

      return (
        <div className="absolute bottom-[calc(100%+40px)] left-[-140px] w-[900px] bg-neutral-950 rounded-[32px] shadow-[0_20px_80px_-10px_rgba(0,0,0,0.5)] p-2 cursor-default z-50 hidden md:block opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-bottom translate-y-4 group-hover:translate-y-0 border border-white/10">
          <div className="grid grid-cols-[1.2fr_1fr] gap-2">
            {/* Left Column: Services List */}
            <div className="p-8 grid grid-cols-2 gap-x-8 gap-y-8">
              {services.map((service, index) => (
                <a key={index} href={`/services/${service.title.toLowerCase().replace(/ /g, "-")}`} className="group/item block">
                  <h4 className="text-zinc-50 text-lg font-bold mb-1 group-hover/item:text-violet-500 transition-colors font-redhatdisplay_variablefont_wght">
                    {service.title}
                  </h4>
                  <p className="text-neutral-400 text-sm leading-relaxed font-outfit_variablefont_wght">
                    {service.desc}
                  </p>
                </a>
              ))}
            </div>

            {/* Right Column: Featured Card */}
            <div className="bg-white/5 rounded-[24px] p-8 relative overflow-hidden group/card min-h-[380px] flex flex-col border border-white/5">
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-[28px] font-bold text-zinc-50 leading-[34px] max-w-[200px] font-redhatdisplay_variablefont_wght">
                    Level Up Like Player 456
                  </h3>
                  <div className="w-10 h-10 bg-neutral-900 rounded-full flex items-center justify-center shadow-sm group-hover/card:scale-110 transition-transform border border-white/10">
                    <ArrowUpRight className="w-5 h-5 text-zinc-50" />
                  </div>
                </div>
                <p className="text-neutral-400 text-base leading-6 mb-8 max-w-[280px] font-outfit_variablefont_wght">
                  Our services will help you win the business success game in every design aspect you face on the way.
                </p>
              </div>
              
              {/* Image Container */}
              <div className="absolute bottom-0 right-0 w-[85%] h-[220px] translate-y-4 translate-x-4 transition-transform duration-500 group-hover/card:translate-y-2 group-hover/card:translate-x-2">
                <img 
                  src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/67ac78087a5b72120cc3e5db_d1a5f14e5e5fc69f2dbac575600f06f4_Project_Cards-6.avif" 
                  alt="Squid Games UI/UX Design" 
                  className="w-full h-full object-cover rounded-tl-[24px] shadow-lg"
                />
                <div className="absolute top-1/2 left-8 -translate-y-1/2 text-white font-bold text-3xl leading-tight drop-shadow-md font-redhatdisplay_variablefont_wght">
                  Squid<br/>Games<br/>UI/UX<br/>Design
                </div>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="absolute -bottom-[8px] left-[180px] w-6 h-6 bg-neutral-950 rotate-45 border-b border-r border-white/10"></div>
        </div>
      );
    };
