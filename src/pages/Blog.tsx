import { ContactSection } from "@/sections/ContactSection";

const BLOG_POSTS = [
  {
    id: 1,
    title: "The Future of UI Design: Trends to Watch in 2026",
    category: "Design",
    date: "Oct 12, 2025",
    image: "https://c.animaapp.com/mkiynesyxwO7zZ/assets/679a9c4888217669122eebaf_3d41798d228903d42862a148dd56aeb1_Project_Cards_(10)_(1).avif",
    excerpt: "Explore the emerging trends that are shaping the future of user interface design, from AI-driven layouts to immersive 3D elements."
  },
  {
    id: 2,
    title: "How to Scale Your SaaS Product with Better UX",
    category: "SaaS",
    date: "Sep 28, 2025",
    image: "https://c.animaapp.com/mkiynesyxwO7zZ/assets/67ac78084947770a14f1eb7c_d1cec41f22346c1c941376236623384b_Project_Cards.avif",
    excerpt: "Learn actionable strategies to improve your product's user experience and drive growth, retention, and customer satisfaction."
  },
  {
    id: 3,
    title: "Why Branding Matters More Than Ever for Startups",
    category: "Branding",
    date: "Sep 15, 2025",
    image: "https://c.animaapp.com/mkiynesyxwO7zZ/assets/67ac7809638da68108df9847_Project_Cards-4.avif",
    excerpt: "In a crowded market, a strong brand is your competitive advantage. Discover why investing in branding early is crucial for success."
  },
  {
    id: 4,
    title: "Webflow vs. WordPress: Which is Right for You?",
    category: "Development",
    date: "Aug 30, 2025",
    image: "https://c.animaapp.com/mkiynesyxwO7zZ/assets/67ac780912dabe81710b65ed_8e70a34a4056237eca17e1209cecdebe_Project_Cards-2.avif",
    excerpt: "A comprehensive comparison of two popular platforms to help you decide which one fits your business needs and technical requirements."
  },
  {
    id: 5,
    title: "The Role of AI in Modern Web Development",
    category: "Technology",
    date: "Aug 10, 2025",
    image: "https://c.animaapp.com/mkiynesyxwO7zZ/assets/68c0f8e5e4eed26b3df33dbf_Frame_427321588_(10)_(1).avif",
    excerpt: "How artificial intelligence is revolutionizing the way we build websites, from code generation to automated testing and optimization."
  },
  {
    id: 6,
    title: "Creating Accessible Digital Experiences",
    category: "Accessibility",
    date: "Jul 22, 2025",
    image: "https://c.animaapp.com/mkiynesyxwO7zZ/assets/68c0fd1543795606db43fc7a_b0912675069a2f6948f5db3e54c11327_Frame_2147226580_(1).avif",
    excerpt: "Why accessibility should be a priority in your design process and practical tips for making your digital products inclusive for everyone."
  }
];

export const Blog = () => {
  return (
    <div className="bg-zinc-50 pt-[120px] pb-0">
      {/* Hero */}
      <div className="max-w-[1252px] mx-auto px-5 md:px-[94px] mb-16 pt-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center border border-emerald-400 px-3 py-1 rounded-3xl mb-6">
            <span className="text-green-700 text-sm font-medium">Our Blog</span>
          </div>
          <h1 className="text-[40px] md:text-7xl font-bold text-neutral-950 font-redhatdisplay_variablefont_wght mb-6 leading-tight">
            Insights & <span className="italic font-playfairdisplay_variablefont_wght">Thoughts</span>
          </h1>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Expert articles on design, technology, and business growth. Stay updated with the latest trends and strategies.
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-[1252px] mx-auto px-5 md:px-[94px] mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl overflow-hidden border border-neutral-200 shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer">
              <div className="h-60 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-violet-600 text-sm font-bold uppercase tracking-wider">{post.category}</span>
                  <span className="text-neutral-400 text-sm">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-neutral-950 mb-3 line-clamp-2 group-hover:text-violet-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed line-clamp-3 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-violet-600 font-bold text-sm">
                  Read Article 
                  <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <ContactSection />
    </div>
  );
};
