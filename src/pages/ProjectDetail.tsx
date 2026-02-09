import { useParams, Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { useEffect } from "react";

export const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-[100px]">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-violet-600 hover:underline">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-zinc-50 pt-[150px] pb-20">
      <div className="max-w-[1252px] mx-auto px-5 md:px-[94px]">
        {/* Header */}
        <div className="mb-12 md:mb-20">
          <div className="flex items-center gap-2 mb-4">
            <Link to="/projects" className="text-neutral-500 hover:text-violet-600 transition-colors">
              Projects
            </Link>
            <span className="text-neutral-300">/</span>
            <span className="text-violet-600 font-medium">{project.category}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-redhatdisplay_variablefont_wght mb-6 text-neutral-950">
            {project.title}
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl leading-relaxed">
            {project.fullDescription || project.description}
          </p>
        </div>

        {/* Main Image */}
        <div className="rounded-3xl overflow-hidden mb-16 shadow-2xl">
          <img 
            src={project.projectImageUrl} 
            alt={project.title} 
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <div className="bg-white p-8 rounded-2xl border border-neutral-100 shadow-sm">
            <p className="text-neutral-500 mb-2">{project.stat1Label}</p>
            <p className="text-3xl font-bold text-neutral-950">{project.stat1Value}</p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-neutral-100 shadow-sm">
            <p className="text-neutral-500 mb-2">{project.stat2Label}</p>
            <p className="text-3xl font-bold text-neutral-950">{project.stat2Value}</p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-neutral-100 shadow-sm col-span-1 md:col-span-2 flex items-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
              <img 
                src={project.testimonialImageUrl} 
                alt={project.testimonialName} 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-bold text-lg text-neutral-950">{project.testimonialName}</p>
              <p className="text-neutral-500">{project.testimonialTitle}</p>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-3xl font-bold mb-6 font-redhatdisplay_variablefont_wght">The Challenge</h2>
              <p className="text-lg text-neutral-600 leading-relaxed">
                {project.challenge || "Every project comes with its unique set of challenges. For this project, we needed to balance aesthetic appeal with high functionality, ensuring that the user experience remained intuitive while delivering complex features."}
              </p>
            </section>
            
            <section>
              <h2 className="text-3xl font-bold mb-6 font-redhatdisplay_variablefont_wght">Our Solution</h2>
              <p className="text-lg text-neutral-600 leading-relaxed">
                {project.solution || "We approached this by first understanding the core user needs. Our design team crafted a visual language that speaks to the brand's identity, while our developers built a robust infrastructure to support seamless interactions."}
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 font-redhatdisplay_variablefont_wght">The Results</h2>
              <p className="text-lg text-neutral-600 leading-relaxed">
                {project.results || "The final product not only met but exceeded client expectations. We saw significant improvements in user engagement metrics and received positive feedback from both the client and their end-users."}
              </p>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-neutral-950 text-white p-8 rounded-3xl sticky top-32">
              <h3 className="text-2xl font-bold mb-6">Ready to start your project?</h3>
              <p className="text-neutral-400 mb-8">
                Let's collaborate to build something amazing together.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center w-full bg-violet-600 hover:bg-violet-700 text-white font-bold py-4 px-8 rounded-xl transition-colors"
              >
                Book a Call
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
