import { JobOpeningsSection } from "@/sections/JobOpeningsSection";
import { ContactSection } from "@/sections/ContactSection";

export const Career = () => {
  return (
    <div className="bg-zinc-50 pt-[120px] pb-0">
      {/* Hero */}
      <div className="max-w-[1252px] mx-auto px-5 md:px-[94px] mb-20 pt-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center border border-emerald-400 px-3 py-1 rounded-3xl mb-6">
            <span className="text-green-700 text-sm font-medium">Careers</span>
          </div>
          <h1 className="text-[40px] md:text-7xl font-bold text-neutral-950 font-redhatdisplay_variablefont_wght mb-6 leading-tight">
            Join the <span className="italic font-playfairdisplay_variablefont_wght">Monks</span>
          </h1>
          <p className="text-lg text-neutral-600 leading-relaxed">
            We are always looking for talented individuals to join our growing team. 
            If you are passionate about design, code, and innovation, we want to hear from you.
          </p>
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="max-w-[1252px] mx-auto px-5 md:px-[94px] mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mb-6 text-2xl">🌍</div>
                <h3 className="text-xl font-bold mb-3 text-neutral-950">Remote First</h3>
                <p className="text-neutral-600">Work from anywhere in the world. We believe in freedom and flexibility to do your best work.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-6 text-2xl">🌱</div>
                <h3 className="text-xl font-bold mb-3 text-neutral-950">Growth Budget</h3>
                <p className="text-neutral-600">We support your learning journey with a dedicated budget for courses, books, and conferences.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-6 text-2xl">⚖️</div>
                <h3 className="text-xl font-bold mb-3 text-neutral-950">Work-Life Balance</h3>
                <p className="text-neutral-600">We prioritize mental health and sustainable working hours. No burnout culture here.</p>
            </div>
        </div>
      </div>

      {/* Job Openings */}
      <div className="bg-neutral-950 py-20 rounded-[32px] mx-5 md:mx-[20px]">
         <JobOpeningsSection />
      </div>

      <div className="mt-20">
        <ContactSection />
      </div>
    </div>
  );
};
