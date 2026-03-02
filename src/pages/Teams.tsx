import { Hero } from "@/sections/Hero";
import { Footer } from "@/sections/Footer";

// Teams page - same style as About and Blog, uses main site components
export const Teams = () => {
  return (
    <div className="bg-zinc-50 pt-[0px] pb-0">
      <Hero />
      
      {/* Teams Grid Section */}
      <div className="px-4 md:px-8 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-zinc-900">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((member) => (
              <div 
                key={member}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="bg-gradient-to-br from-violet-400 to-purple-600 h-48 rounded-lg mb-4"></div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">Team Member</h3>
                <p className="text-zinc-600">Specialist</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="px-4 md:px-8 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-zinc-900 text-center">
            What Our Team Says
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((testimonial) => (
              <div 
                key={testimonial}
                className="bg-zinc-50 rounded-xl p-8"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-zinc-700 mb-4">
                  "Outstanding experience working with this team. Highly recommended!"
                </p>
                <p className="font-semibold text-zinc-900">Team Member Name</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-4 md:px-8 py-12 md:py-20">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Join Our Team?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            We're always looking for talented individuals to join our growing team.
          </p>
          <a 
            href="/career"
            className="inline-block bg-white text-violet-600 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            View Career Opportunities
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};
