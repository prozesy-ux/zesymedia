import { ArrowUpRight } from "lucide-react";

    export const MoreDropdown = () => {
      const links = [
        { title: "Home", desc: "Home is where the monk lives", href: "/" },
        { title: "About us", desc: "The journey of Design Monks", href: "/about" },
        { title: "Meet the team", desc: "An overview of the Monk family", href: "/team" },
        { title: "Blogs", desc: "A collection of informative blogs", href: "/blog" },
        { title: "Career", desc: "Work with top global brands, grow your skills", href: "/career" },
        { title: "Contact us", desc: "Start your dream design journey from here", href: "/contact" },
      ];

      return (
        <div className="absolute bottom-[calc(100%+40px)] right-[-140px] w-[900px] bg-neutral-950 rounded-[32px] shadow-[0_20px_80px_-10px_rgba(0,0,0,0.5)] p-2 cursor-default z-50 hidden md:block opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-bottom translate-y-4 group-hover:translate-y-0 border border-white/10">
          <div className="grid grid-cols-[1fr_1.2fr] gap-2">
            {/* Left Column: Featured Work */}
            <div className="bg-white/5 rounded-[24px] p-8 relative overflow-hidden group/card min-h-[380px] flex flex-col border border-white/5">
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-[28px] font-bold text-zinc-50 leading-[34px] font-redhatdisplay_variablefont_wght">
                    Our Latest Work
                  </h3>
                  <div className="w-10 h-10 bg-neutral-900 rounded-full flex items-center justify-center shadow-sm group-hover/card:scale-110 transition-transform border border-white/10">
                    <ArrowUpRight className="w-5 h-5 text-zinc-50" />
                  </div>
                </div>
                <p className="text-neutral-400 text-base leading-6 mb-8 font-outfit_variablefont_wght">
                  We've recently worked on some amazing projects. Let's have a glance over the case studies.
                </p>
              </div>
              
              {/* Image Container */}
              <div className="w-full h-[220px] mt-auto flex justify-center relative">
                <img 
                  src="https://anpeyqpnsavhykstwwbq.supabase.co/storage/v1/object/public/images/ff/1770490032237-4.png" 
                  alt="Plate App" 
                  className="h-full w-auto object-contain drop-shadow-2xl transform translate-y-4 transition-transform duration-500 group-hover/card:-translate-y-2"
                />
              </div>
            </div>

            {/* Right Column: Links List */}
            <div className="p-8 grid grid-cols-2 gap-x-8 gap-y-8">
              {links.map((link, index) => (
                <a key={index} href={link.href} className="group/item block">
                  <h4 className="text-zinc-50 text-lg font-bold mb-1 group-hover/item:text-violet-500 transition-colors font-redhatdisplay_variablefont_wght">
                    {link.title}
                  </h4>
                  <p className="text-neutral-400 text-sm leading-relaxed font-outfit_variablefont_wght">
                    {link.desc}
                  </p>
                </a>
              ))}
            </div>
          </div>

          {/* Arrow - Positioned to align with the "More" button */}
          <div className="absolute -bottom-[8px] right-[165px] w-6 h-6 bg-neutral-950 rotate-45 border-b border-r border-white/10"></div>
        </div>
      );
    };
