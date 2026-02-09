import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const teamMembers = [
  {
    name: "Adom Shafi",
    role: "Senior UI Designer",
    image: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/695d3590ed342d8b2ad128cd_Adom Shafi.avif",
  },
  {
    name: "Abdullah Al Jami",
    role: "Product Designer",
    image: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/695d34f22381beb744809b52_Jami.avif",
  },
  {
    name: "Hasan Imam Nahid",
    role: "UI Designer",
    image: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/695d33a241147890065cd70d_Nahid.avif",
  },
  {
    name: "Abdullah Al Maruf",
    role: "Product Designer",
    image: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/695d32c5ed342d8b2ad0c923_Maruf.avif",
  },
  {
    name: "Tanvir Ahmed Saimon",
    role: "Creative Director",
    image: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/695d30b7c61d8992d171b1f2_Tanvir Ahmed Saimon (1).avif",
  },
  {
    name: "Arif Hossain",
    role: "Product Designer",
    image: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/693fb3287046c788b365314a_Arif Hossain.avif",
  },
];

const testimonials = [
  {
    name: "Saif Sarwar",
    role: "Product Designer",
    quote: "Being a part of Design Monks truly feels like a blessing. I get to work with amazing teammates and learn from great mentors. Also, working remotely not only saves time but also boosts productivity. For me, Design Monks isn't just about work, it's about being part of a team that genuinely understands the balance between freedom and responsibility.",
    image: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68b819c1deb8e68db3dba2d6_DP_Saif Sarwar.avif",
  },
  {
    name: "Sourav Dhali",
    role: "Product Designer",
    quote: "Being a part of Design Monks truly feels like a blessing. I get to work with amazing teammates and learn from great mentors. Also, working remotely not only saves time but also boosts productivity. For me, Design Monks isn't just about work, it's about being part of a team that genuinely understands the balance between freedom and responsibility.",
    image: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68b81a54cf1e021d5942774a_DP_Sourav Dhali.avif",
  },
  {
    name: "Sabiha Sultana",
    role: "Content Writer",
    quote: "Working at Design Monks has been an incredible journey. The collaborative environment and supportive team make every project enjoyable and rewarding.",
    image: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68b8197ba8f360fc1827ad50_DP_Sabiha Sultana.avif",
  },
  {
    name: "Abid Hasan",
    role: "Project Manager",
    quote: "Design Monks provides the perfect balance of creative freedom and professional growth. It's a place where innovation thrives.",
    image: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68b819e46f5ee25b86cc4be2_DP_Abid Hasan.avif",
  },
];

export const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying]);

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="bg-zinc-50">
      {/* Hero Section */}
      <section className="relative bg-neutral-950/90 bg-[linear-gradient(rgba(48,255,151,0)_30%,rgba(48,255,151,0.33))] overflow-hidden rounded-b-[20px] md:rounded-b-[32px]">
        <div className="max-w-[1252px] w-full z-[1] mx-auto">
          <div className="relative items-center flex flex-col h-full justify-center text-left w-full z-[2] pb-[92px] px-5 md:pb-[560px] md:px-[94px] pt-[100px]">
            <div className="items-center gap-x-4 flex flex-col justify-start gap-y-4 text-center">
              
              <div className="items-center bg-white/10 gap-x-[5px] flex gap-y-[5px] z-[88] px-3 py-1 rounded-[18px] md:static md:z-auto">
                <Link to="/" className="text-neutral-400 text-xs block tracking-[0.24px] leading-[18px] max-w-full capitalize hover:text-white transition-colors">
                  <div className="normal-case">Home</div>
                </Link>
                <div><img src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67423a8542288605dea89299_CaretRight.webp" alt="" className="inline-block max-w-full" /></div>
                <Link to="/about" className="text-neutral-400 text-xs block tracking-[0.24px] leading-[18px] max-w-full capitalize hover:text-white transition-colors">
                  <div className="normal-case">About Us</div>
                </Link>
                <div><img src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67423a8542288605dea89299_CaretRight.webp" alt="" className="inline-block max-w-full" /></div>
                <div className="text-white text-xs block tracking-[0.24px] leading-[18px] max-w-full capitalize">
                  <div className="normal-case">Team Page</div>
                </div>
              </div>
              
              <div className="text-zinc-50 mt-4">
                <h1 className="text-[32px] font-bold leading-[38.4px] md:text-[56px] md:leading-[67.2px] font-redhatdisplay_variablefont_wght">
                  Our Awesome <br />
                  <em className="text-[32px] italic leading-[38.4px] capitalize md:text-[56px] md:leading-[67.2px] font-playfairdisplay_variablefont_wght">Monks family</em>
                </h1>
              </div>
            </div>
          </div>
        </div>
        
        <img src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67fbb9e09e1ee391a7f159d2_Group 2147223906.avif" alt="" className="absolute max-w-44 pointer-events-none z-0 right-0 top-0 md:max-w-full" />
        <img src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/680abee77b8b1a005391c27b_d06c4296b2ae60af25ab36e28167df46_box element.avif" alt="" className="absolute items-end hidden h-[100px] justify-start max-w-20 pointer-events-none w-full left-0 bottom-0 md:block md:h-auto md:max-w-full md:w-auto" />
        
        <video loop autoPlay muted playsInline preload="auto" className="absolute h-full object-cover object-[50%_0%] pointer-events-none w-full z-[-1] inset-0">
          <source src="https://github.com/designmonks/webvideos/raw/main/Abstract_objects_(dark_theme).mp4" type="video/mp4" />
        </video>
      </section>

      {/* Team Grid Section */}
      <section className="relative mt-[-60px] z-[3] md:mt-[-480px]">
        <div className="pb-[60px] px-5 md:pb-[100px] md:px-[94px]">
          <div className="max-w-[1252px] w-full z-[1] mx-auto">
            
            {/* Founders */}
            <div className="gap-x-6 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-6 md:gap-x-8 md:grid-cols-[1fr_1fr] md:gap-y-8">
              
              <div className="self-center md:self-auto team-card">
                <div className="text-black inline-block max-w-full w-full group">
                  <div className="overflow-hidden rounded-3xl">
                    <img src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68b818a778cc3901842066df_DP_Atiq.avif" alt="Atiqur Rahaman" className="aspect-[auto_610_/_917] inline-block h-full max-w-full object-cover w-full" />
                  </div>
                  <div className="text-neutral-950 items-center gap-x-1 flex flex-col gap-y-1 text-center mt-3 md:gap-x-2 md:gap-y-2 md:mt-6">
                    <h3 className="text-xl font-bold leading-6 md:text-[32px] md:leading-[38.4px] font-redhatdisplay_variablefont_wght">Atiqur Rahaman</h3>
                    <div className="text-neutral-500">
                      <div className="text-xl tracking-[0.48px] leading-[30px] md:text-2xl md:leading-9">CEO & Co-founder</div>
                    </div>
                  </div>
                </div>
                <div className="gap-x-4 flex justify-center gap-y-4 mt-4">
                  <a href="https://www.linkedin.com/in/atiq31416/" target="_blank" rel="noopener noreferrer" className="text-violet-600 items-center bg-neutral-900/10 flex h-11 justify-center max-w-11 w-full rounded-lg hover:bg-blue-600/20 transition-colors">
                    <img src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/676d686bcc487e32fc0ab3d3_LinkedinLogo.svg" alt="LinkedIn" className="max-w-full" />
                  </a>
                  <a href="https://twitter.com/Atiq31416" target="_blank" rel="noopener noreferrer" className="text-violet-600 items-center bg-neutral-900/10 flex h-11 justify-center max-w-11 w-full rounded-lg hover:bg-blue-600/20 transition-colors">
                    <img src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67376bdd90129fe64264acde_XLogo.svg" alt="X" className="max-w-full" />
                  </a>
                  <a href="https://www.youtube.com/@atiq31416" target="_blank" rel="noopener noreferrer" className="text-violet-600 items-center bg-neutral-900/10 flex h-11 justify-center max-w-11 w-full rounded-lg hover:bg-blue-600/20 transition-colors">
                    <img src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67f8db745b67524f77d6f971_YoutubeLogo.png" alt="YouTube" className="max-w-full" />
                  </a>
                </div>
              </div>
              
              <div className="self-center md:self-auto team-card">
                <div className="text-black inline-block max-w-full w-full group">
                  <div className="overflow-hidden rounded-3xl">
                    <img src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68b81861c10b86bd876593bc_DP_Noman.avif" alt="Abdullah Al Noman" className="aspect-[auto_610_/_917] inline-block h-full max-w-full object-cover w-full" />
                  </div>
                  <div className="text-neutral-950 items-center gap-x-1 flex flex-col gap-y-1 text-center mt-3 md:gap-x-2 md:gap-y-2 md:mt-6">
                    <h3 className="text-xl font-bold leading-6 md:text-[32px] md:leading-[38.4px] font-redhatdisplay_variablefont_wght">Abdullah Al Noman</h3>
                    <div className="text-neutral-500">
                      <div className="text-xl tracking-[0.48px] leading-[30px] md:text-2xl md:leading-9">COO & Co-founder</div>
                    </div>
                  </div>
                </div>
                <div className="gap-x-4 flex justify-center gap-y-4 mt-4">
                  <a href="https://www.linkedin.com/in/nomandigital/" target="_blank" rel="noopener noreferrer" className="text-violet-600 items-center bg-neutral-900/10 flex h-11 justify-center max-w-11 w-full rounded-lg hover:bg-blue-600/20 transition-colors">
                    <img src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/676d686bcc487e32fc0ab3d3_LinkedinLogo.svg" alt="LinkedIn" className="max-w-full" />
                  </a>
                  <a href="https://twitter.com/imnomandigital" target="_blank" rel="noopener noreferrer" className="text-violet-600 items-center bg-neutral-900/10 flex h-11 justify-center max-w-11 w-full rounded-lg hover:bg-blue-600/20 transition-colors">
                    <img src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67376bdd90129fe64264acde_XLogo.svg" alt="X" className="max-w-full" />
                  </a>
                </div>
              </div>
              
            </div>
            
            {/* Team Members Grid */}
            <div className="mt-6 md:mt-14">
              <div className="gap-x-6 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto_auto] gap-y-6 md:gap-x-8 md:grid-cols-[1fr_1fr_1fr] md:gap-y-8">
                {teamMembers.map((member, index) => (
                  <div key={index} className="team-card group">
                    <div className="text-black w-full">
                      <div className="overflow-hidden rounded-3xl">
                        <img src={member.image} alt={member.name} className="aspect-[auto_396_/_596] inline-block h-full max-w-full object-cover w-full" />
                      </div>
                      <div className="text-neutral-950 items-center gap-x-1 flex flex-col gap-y-1 text-center mt-3 md:gap-x-2 md:gap-y-2 md:mt-6">
                        <h3 className="text-xl font-bold leading-6 md:text-[32px] md:leading-[38.4px] font-redhatdisplay_variablefont_wght">{member.name}</h3>
                        <div className="text-neutral-500">
                          <div className="text-xl tracking-[0.48px] leading-[30px] md:text-2xl md:leading-9">{member.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Testimonial Carousel Section */}
      <section className="bg-violet-50 overflow-hidden" onMouseEnter={() => setIsAutoPlaying(false)} onMouseLeave={() => setIsAutoPlaying(true)}>
        <div className="px-5 py-[60px] md:px-[94px] md:py-[100px]">
          <div className="max-w-[1252px] w-full z-[1] mx-auto">
            <div className="gap-x-[30px] grid grid-cols-none gap-y-[30px] mx-auto md:gap-x-[normal] md:grid-cols-[22.8365%_72.6763%_4.48718%] md:gap-y-[normal]">
              
              {/* Testimonial Images Slider */}
              <div className="relative h-auto list-none max-w-[690px] w-full z-[1] mx-auto md:h-[685.236px] md:max-w-none overflow-hidden">
                <div 
                  className="testimonial-slider relative flex flex-col h-full w-full z-[1]"
                  style={{ transform: `translateY(${-currentIndex * 253.667}px)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className={`testimonial-item relative aspect-square shrink-0 h-[253.667px] w-full p-[12.0001px] md:aspect-auto md:px-9 md:py-5 transition-all duration-700 ${index === currentIndex ? 'opacity-100 scale-100' : 'opacity-40 scale-90'}`}>
                      <div className="h-full overflow-hidden -mb-6 rounded-[50%] md:mb-0 md:rounded-[28.9955px]">
                        <img alt={testimonial.name} src={testimonial.image} className="testimonial-image inline-block h-full max-w-full object-cover object-[50%_10%] w-full" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Testimonial Content */}
              <div className="relative list-none w-full z-[1] overflow-hidden mx-auto">
                <div className="relative grid h-full w-full z-[1]">
                  <div className="relative items-center grid shrink-0 col-start-[-1] row-start-1 h-full animate-fadeIn">
                    <div className="items-center bg-violet-50 gap-x-6 flex flex-col h-full justify-between justify-items-center gap-y-6 text-center mt-0 mx-0 md:items-start md:gap-x-14 md:h-auto md:justify-center md:gap-y-14 md:text-start md:ml-[54.5891px] md:mr-[43.4707px] md:-mt-6">
                      <img src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6744858be9dbe2f7a6b0bce9_Frame 1618871848.avif" alt="" className="max-w-full text-center md:text-start" />
                      <p className="text-2xl tracking-[0.36px] leading-[28.8px] text-center md:text-[40px] md:leading-[48px] md:text-start transition-opacity duration-300">
                        {testimonials[currentIndex].quote}
                      </p>
                      <div className="text-center md:text-start transition-opacity duration-300">
                        <p className="text-neutral-950 text-xl font-bold tracking-[0.36px] leading-6 text-center md:text-[32px] md:leading-[38.4px] md:text-start font-redhatdisplay_variablefont_wght">{testimonials[currentIndex].name}</p>
                        <p className="text-neutral-600 text-base tracking-[0.36px] leading-6 text-center md:text-lg md:leading-[27px] md:text-start">{testimonials[currentIndex].role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Carousel Controls */}
              <div className="content-center gap-x-3 grid grid-flow-col justify-center gap-y-3 w-auto md:grid-flow-row md:justify-normal md:w-full">
                <button type="button" onClick={handlePrev} aria-label="Previous slide" className="text-violet-600 items-center aspect-square bg-zinc-50 grid justify-items-center text-center -rotate-90 w-[46px] border border-violet-600 p-0 rounded-[50%] border-solid md:transform-none hover:bg-violet-600 hover:text-white transition-colors">
                  <img src="https://c.animaapp.com/mlcfrtj47me9da/assets/icon-10.svg" alt="Icon" className="h-[21px] w-[17px]" />
                </button>
                <button type="button" onClick={handleNext} aria-label="Next slide" className="text-violet-600 items-center aspect-square bg-zinc-50 grid justify-items-center text-center -rotate-90 w-[46px] border border-violet-600 p-0 rounded-[50%] border-solid md:transform-none hover:bg-violet-600 hover:text-white transition-colors">
                  <img src="https://c.animaapp.com/mlcfrtj47me9da/assets/icon-11.svg" alt="Icon" className="h-[21px] w-[17px]" />
                </button>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Career CTA Section */}
      <div className="pt-0 px-5 md:pt-[156px] md:px-[94px] pb-20">
        <div className="max-w-[1252px] w-full z-[1] mx-auto">
          <div className="relative bg-neutral-950 bg-[url('https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/680ce2c7ccbfc46d3d64d42c_dea7841b0e3986b5c5471118785093c7_Dots%20Background%20dark.avif')] flex flex-col w-full overflow-hidden bg-[position:0px_0px] rounded-2xl md:bg-none md:block md:flex-row md:overflow-visible md:bg-left-top md:rounded-[32px]">
            
            <div className="relative items-center flex flex-col h-auto z-[1] overflow-hidden rounded-2xl md:block md:flex-row md:h-[500px] md:z-[21] md:rounded-[32px]">
              <div className="items-center flex h-full justify-start w-full pt-8 pb-4 px-6 md:w-auto md:p-12">
                <div className="relative items-center flex flex-col justify-start w-full md:static md:block md:flex-row md:w-[423px]">
                  <div className="gap-x-6 flex flex-col gap-y-6 md:gap-x-8 md:gap-y-8">
                    <div className="items-center gap-x-2 flex flex-col justify-start gap-y-2 text-center md:gap-x-4 md:gap-y-4 md:text-start">
                      <div className="flex text-center md:text-start">
                        <div className="text-green-500 text-center border border-green-800 px-3 py-1 rounded-3xl border-solid md:text-start">
                          <div className="text-sm leading-[21px] text-center md:text-base md:leading-6 md:text-start">Career</div>
                        </div>
                      </div>
                      <div className="text-zinc-50 text-center md:text-start">
                        <h2 className="text-[28px] font-bold leading-[33.6px] text-center md:text-5xl md:leading-[57.6px] md:text-start font-redhatdisplay_variablefont_wght">
                          Want to be a <br />
                          <em className="text-[28px] italic leading-[33.6px] text-center capitalize md:text-5xl md:leading-[57.6px] md:text-start font-playfairdisplay_variablefont_wght">monk like us?</em>
                        </h2>
                      </div>
                      <div className="text-neutral-300 text-center md:text-start">
                        <p className="text-sm tracking-[0.36px] leading-[21px] text-center md:text-base md:leading-6 md:text-start">
                          Are you a talented and self-motivated person with a positive vibe? If yes, you can be the next member of our Monks family.
                        </p>
                      </div>
                    </div>
                    <div className="relative items-start gap-x-8 hidden flex-col max-w-full gap-y-8 w-full z-[3] md:flex md:max-w-[280px]">
                      <div className="relative items-center flex justify-start w-full z-20 md:static">
                        <Link to="/career" className="relative text-violet-600 items-center bg-[linear-gradient(rgb(89,45,181)_25%,rgb(125,64,255))] shadow-[rgba(255,255,255,0.72)_0px_1.6px_3px_0px_inset] flex flex-col h-14 justify-center max-w-full text-left w-full z-10 overflow-hidden rounded-lg md:max-w-[207px]">
                          <div className="absolute items-center bg-neutral-400 flex h-full justify-center w-full inset-0">
                            <div className="absolute bg-[linear-gradient(90deg,rgba(255,255,255,0.79)_61%,rgb(255,255,255)_75%)] blur-[6px] h-20 w-full left-1/2 right-0 top-1/2 bottom-0 md:-translate-y-1/2"></div>
                          </div>
                          <div className="absolute bg-[linear-gradient(rgb(89,45,181)_25%,rgb(125,64,255))] m-[1.3px] rounded-lg inset-0"></div>
                          <div className="relative text-gray-200 w-full md:w-auto">
                            <div className="relative items-center gap-x-2 flex h-full justify-center gap-y-2 w-full z-[1]">
                              <div className="text-zinc-50 text-base font-bold tracking-[0.32px] leading-[19.2px]">Join our team</div>
                              <img src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67adba6a3ab018a0349e2bc2_CTA Arrow (2).svg" alt="" className="h-7 max-w-7 object-contain w-full md:h-6 md:max-w-6" />
                            </div>
                          </div>
                          <img src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/672a7a8e3a6aba070d15d4c0_Star 6.avif" alt="" className="absolute max-w-full right-0 top-0" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-[425px] order-1 w-full z-[2] right-0 bottom-0 md:absolute md:h-auto md:order-none md:w-[675px] md:z-20">
              <img alt="" src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67a2138f9f2e22f26587c4c0_Product Design Vs UX Design 3 3.avif" className="h-full max-w-full object-cover object-[50%_0%] w-full md:object-fill md:object-[50%_50%]" />
              <div className="absolute items-start gap-x-8 block flex-col max-w-full gap-y-8 w-full z-[3] pb-4 px-4 bottom-0 md:relative md:hidden md:max-w-none md:pb-0 md:px-0 md:bottom-auto">
                <div className="relative items-center flex justify-start w-full z-20 md:static">
                  <Link to="/career" className="relative text-violet-600 items-center bg-[linear-gradient(rgb(89,45,181)_25%,rgb(125,64,255))] shadow-[rgba(255,255,255,0.72)_0px_1.6px_3px_0px_inset] flex flex-col h-14 justify-center max-w-full text-left w-full z-10 overflow-hidden rounded-lg md:max-w-[207px]">
                    <div className="absolute items-center bg-neutral-400 flex h-full justify-center rotate-[30.40919928365078deg] w-full inset-0 md:transform-none">
                      <div className="absolute bg-[linear-gradient(90deg,rgba(255,255,255,0.79)_61%,rgb(255,255,255)_75%)] blur-[6px] h-20 -translate-y-10 w-full left-1/2 right-0 top-1/2 bottom-0 md:transform-none"></div>
                    </div>
                    <div className="absolute bg-[linear-gradient(rgb(89,45,181)_25%,rgb(125,64,255))] m-[1.3px] rounded-lg inset-0"></div>
                    <div className="relative text-gray-200 w-full md:w-auto">
                      <div className="relative items-center gap-x-2 flex h-full justify-center gap-y-2 w-full z-[1]">
                        <div className="text-zinc-50 text-base font-bold tracking-[0.32px] leading-[19.2px]">Join Our team</div>
                        <img src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67adba6a3ab018a0349e2bc2_CTA Arrow (2).svg" alt="" className="h-7 max-w-7 object-contain w-full md:h-6 md:max-w-6" />
                      </div>
                    </div>
                    <img src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/672a7a8e3a6aba070d15d4c0_Star 6.avif" alt="" className="absolute max-w-full right-0 top-0" />
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="absolute pointer-events-none overflow-hidden rounded-2xl inset-0 md:rounded-[32px]">
              <div className="absolute opacity-[0.02] left-0 right-0 top-0 md:left-auto">
                <img src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/680ce24b995fd04d3ca18883_Group 2147225317.avif" alt="" className="block h-full max-w-full w-full md:hidden" />
                <img alt="" src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/674237f27912e408" className="hidden h-full max-w-full w-full md:block" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
