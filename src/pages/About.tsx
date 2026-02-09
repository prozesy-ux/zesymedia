import { ContactSection } from "@/sections/ContactSection";
import { WhyChooseUsSection } from "@/sections/WhyChooseUsSection";

export const About = () => {
  return (
    <div className="bg-zinc-50 pt-[120px] pb-0">
      {/* Hero Section */}
      <div className="bg-neutral-950 text-zinc-50 pt-20 pb-32 px-5 md:px-[94px] rounded-b-[32px]">
        <div className="max-w-[1252px] mx-auto text-center">
          <div className="inline-flex items-center justify-center border border-green-800 px-3 py-1 rounded-3xl mb-6">
            <span className="text-green-500 text-sm font-medium">About Us</span>
          </div>
          <h1 className="text-[40px] md:text-7xl font-bold font-redhatdisplay_variablefont_wght mb-8 leading-tight">
            We Are <span className="italic font-playfairdisplay_variablefont_wght">Design Monks</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            We are a global agency that combines data-driven strategy with world-class design to help brands grow, scale, and dominate their industries.
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="px-5 md:px-[94px] -mt-20 mb-20">
        <div className="max-w-[1252px] mx-auto">
          <div className="w-full h-[300px] md:h-[600px] bg-neutral-900 rounded-3xl overflow-hidden relative shadow-2xl">
             <img 
              src="https://c.animaapp.com/mkiynesyxwO7zZ/assets/6772a59f9e4d013c6a671384_Mockups.avif" 
              alt="Team working" 
              className="w-full h-full object-cover opacity-90"
            />
          </div>
        </div>
      </div>

      {/* Story & Stats */}
      <div className="max-w-[1252px] mx-auto px-5 md:px-[94px] mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-neutral-950 font-redhatdisplay_variablefont_wght mb-6">
              Our <span className="italic font-playfairdisplay_variablefont_wght">Story</span>
            </h2>
            <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
              Founded with a passion for pixel-perfect design, Design Monks started as a small collective of freelancers. Today, we are a full-service agency working with clients globally.
            </p>
            <p className="text-lg text-neutral-600 leading-relaxed">
              We believe in the power of collaboration. We don't just work for our clients; we work with them, becoming an extension of their team to ensure every project is a resounding success.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
             <div className="bg-violet-100 rounded-2xl p-8 text-center">
                <h3 className="text-4xl md:text-5xl font-bold text-violet-600 mb-2">5+</h3>
                <p className="text-neutral-600 font-medium">Years Experience</p>
             </div>
             <div className="bg-emerald-100 rounded-2xl p-8 text-center">
                <h3 className="text-4xl md:text-5xl font-bold text-emerald-600 mb-2">100+</h3>
                <p className="text-neutral-600 font-medium">Projects Done</p>
             </div>
             <div className="bg-orange-100 rounded-2xl p-8 text-center">
                <h3 className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">50+</h3>
                <p className="text-neutral-600 font-medium">Happy Clients</p>
             </div>
             <div className="bg-blue-100 rounded-2xl p-8 text-center">
                <h3 className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">20+</h3>
                <p className="text-neutral-600 font-medium">Team Members</p>
             </div>
          </div>
        </div>
      </div>

      <WhyChooseUsSection />
      <ContactSection />
    </div>
  );
};
