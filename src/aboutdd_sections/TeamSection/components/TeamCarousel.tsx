import { useEffect, useRef } from "react";
import { TeamMemberCard } from "@/aboutdd_sections/TeamSection/components/TeamMemberCard";

const teamMembers = [
  {
    name: "Yash Vhardan",
    role: "CEO & Co-founder",
    image: "https://anpeyqpnsavhykstwwbq.supabase.co/storage/v1/object/public/images/team/1770575877119-2.jfif"
  },
  {
    name: "Abdullah Al Noman",
    role: "COO & Co-founder",
    image: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68b81861c10b86bd876593bc_DP_Noman.avif"
  },
  {
    name: "Adom Shafi",
    role: "Senior UI Designer",
    image: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/695d3590ed342d8b2ad128cd_Adom Shafi.avif"
  },
  {
    name: "Abdullah Al Jami",
    role: "Product Designer",
    image: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/695d34f22381beb744809b52_Jami.avif"
  },
  {
    name: "Hasan Imam Nahid",
    role: "UI Designer",
    image: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/695d33a241147890065cd70d_Nahid.avif"
  },
  {
    name: "Abdullah Al Maruf",
    role: "Product Designer",
    image: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/695d32c5ed342d8b2ad0c923_Maruf.avif"
  },
  {
    name: "Tanvir Ahmed Saimon",
    role: "Creative Director",
    image: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/695d30b7c61d8992d171b1f2_Tanvir Ahmed Saimon (1).avif"
  },
  {
    name: "Arif Hossain",
    role: "Product Designer",
    image: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/693fb3287046c788b365314a_Arif Hossain.avif"
  },
  {
    name: "Nehal Hamim",
    role: "Product Designer",
    image: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/693fb23eb71252183a5be53d_Nehal Hamim.avif"
  },
  {
    name: "Sudarsan Roy",
    role: "UI Designer",
    image: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/693a99458acb098e34cf4492_Farhan (1).avif"
  },
  {
    name: "Aftab Uz Zaman",
    role: "Project Manager",
    image: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/693a987f6dd4391b0da90407_Farhan-1.avif"
  },
  {
    name: "Farhan Islam",
    role: "Visualizer",
    image: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/693a96494e4217e295194cbe_Farhan.avif"
  },
  {
    name: "Abdullah Plabon",
    role: "UI Designer",
    image: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68b81bfd695263f17b58422d_DP_Abdullah Plabon.avif"
  },
  {
    name: "Misbah Gunabi",
    role: "Country Manager • Dubai",
    image: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68b81a94173b920fe69ccfcb_DP_Misbah Gunabi.avif"
  },
  {
    name: "Shakira Mushtary",
    role: "Content Writer",
    image: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68b81a85573ed7053970ba4a_DP_Shakira Mushtary.avif"
  },
  {
    name: "Md Rakib Uddin",
    role: "Product Designer",
    image: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/693a979e0f59d2a1f706868e_157.avif"
  },
  {
    name: "G M Minhaz Rahman",
    role: "Key Account Manager",
    image: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68b81a7305604a6be2ad1864_DP_G M Minhaz Rahman.avif"
  },
  {
    name: "MD Imran Sayed Ratul",
    role: "Social Media Manager",
    image: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68b81a616881f648b40a70b3_DP_Ratul.avif"
  },
  {
    name: "Sourav Dhali",
    role: "Product Designer",
    image: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68b81a54cf1e021d5942774a_DP_Sourav Dhali.avif"
  },
  {
    name: "Sakib Reza Moon",
    role: "UI Designer",
    image: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68b81a48fe9e99eff8a88cea_DP_Sakib Reza Moon.avif"
  },
  {
    name: "Pritue Mondal",
    role: "Senior UI Designer",
    image: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68b81a3a96fac001f4995ba0_DP_Pritue Mondal.avif"
  },
  {
    name: "Nazmul Alam Hridoy",
    role: "Product Designer",
    image: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68b81a2d1159fe6c286cbea3_DP_Nazmul Alam Hridoy.avif"
  },
  {
    name: "Hafij Uddin Ahmed",
    role: "UI Designer",
    image: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68b81a19695263f17b57965e_DP_Hafij Uddin Ahmed.avif"
  },
  {
    name: "Shakila Yesmin",
    role: "Business Development Manager",
    image: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68b819ff7d9017b942dfb25a_DP_Shakila Yesmin.avif"
  },
  {
    name: "Abid Hasan",
    role: "Project Manager",
    image: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68b819e46f5ee25b86cc4be2_DP_Abid Hasan.avif"
  },
  {
    name: "Shah Jamal",
    role: "UI Designer",
    image: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68b819d873353d041fc909e5_DP_Shah Jamal.avif"
  },
  {
    name: "Saif Sarwar",
    role: "Product Designer",
    image: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68b819c1deb8e68db3dba2d6_DP_Saif Sarwar.avif"
  },
  {
    name: "Syed Abdul Muhit",
    role: "UI Designer",
    image: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68b819a7ba69e02075b8ad1c_DP_Syed Abdul Muhit.avif"
  },
  {
    name: "Monira Akter",
    role: "Digital Marketing Executive",
    image: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68b819862c936f0db3d20efe_DP_Monira Akter.avif"
  },
  {
    name: "Md. Sajib Ahmed",
    role: "SEO Specialist",
    image: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68b81918695263f17b573ca4_DP_Md. Sajib Ahmed.avif"
  },
  {
    name: "Sabiha Sultana",
    role: "Content Writer",
    image: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68b8197ba8f360fc1827ad50_DP_Sabiha Sultana.avif"
  },
  {
    name: "Sabbir Hasan",
    role: "Graphics Designer",
    image: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68b818c3a34b6b189050235d_DP_Sabbir Hasan.avif"
  },
  {
    name: "Mike Tyson",
    role: "Chief Happiness Officer",
    image: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68b83419ea51404de61e5ab6_DP_Tyson.avif"
  }
];

export const TeamCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    let scrollPosition = 0;

    const animate = () => {
      scrollPosition += 0.5; // Adjust speed here
      
      if (carouselRef.current) {
        carouselRef.current.style.transform = `translateX(-${scrollPosition}px)`;
        
        // Reset when scrolled through half (since we duplicate the items)
        const cardWidth = 220 + 16; // card width + gap on mobile
        const totalWidth = cardWidth * teamMembers.length;
        
        if (scrollPosition >= totalWidth) {
          scrollPosition = 0;
        }
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  // Duplicate team members for seamless loop
  const duplicatedMembers = [...teamMembers, ...teamMembers, ...teamMembers];

  return (
    <div className="relative box-border caret-transparent z-0 overflow-hidden mt-6 pt-14 md:mt-0">
      <div
        ref={carouselRef}
        role="presentation"
        className="box-border caret-transparent flex flex-nowrap gap-x-4 h-full md:gap-x-8"
      >
        {duplicatedMembers.map((member, index) => (
          <TeamMemberCard
            key={`${member.name}-${index}`}
            name={member.name}
            role={member.role}
            image={member.image}
          />
        ))}
      </div>
    </div>
  );
};
