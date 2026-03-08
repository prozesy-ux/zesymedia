export type ServiceItem = {
  number: string;
  title: string;
  href: string;
  isActive: boolean;
};

export type Service = {
  id: string;
  slug: string;
  href: string;
  imageUrl: string;
  imageAlt: string;
  imageVariant: string;
  title: string;
  description: string;
  services: ServiceItem[];
  badgeImageUrl: string;
  badgeImageAlt: string;
};

export const servicesData: Service[] = [
  {
    id: "logo-branding",
    slug: "logo-branding",
    href: "#",
    imageUrl: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/67a0f89a8c7b92e4b2ade7e0_Logo (1).avif",
    imageAlt: "Logo and Branding",
    imageVariant: "aspect-[auto_1250_/_400] md:w-[1250px]",
    title: "Logo and Branding",
    description: "Create distinctive logos and cohesive brand identities that reflect your company's essence with our advanced logo and branding services that help you connect with your target audience.",
    services: [
      {
        number: "01",
        title: "Logo & Branding",
        href: "#",
        isActive: true,
      },
      {
        number: "02",
        title: "Custom Logo Design",
        href: "#",
        isActive: false,
      },
      {
        number: "03",
        title: "Brand Identity Development",
        href: "#",
        isActive: false,
      },
      {
        number: "04",
        title: "Brand Guidelines & Strategy",
        href: "#",
        isActive: false,
      },
      {
        number: "05",
        title: "Marketing Collateral Design",
        href: "#",
        isActive: false,
      },
    ],
    badgeImageUrl: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/67a0f15d255fb3b52afb2a06_Frame 1618871791.avif",
    badgeImageAlt: "",
  },
  {
    id: "web-design",
    slug: "web-design",
    href: "#",
    imageUrl: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6824000a0311da0331c5ff60_service thumb_Web Design.avif",
    imageAlt: "Web Design",
    imageVariant: "md:w-auto",
    title: "Web Design",
    description: "We create visually appealing and user-friendly websites that offer flawless navigation, optimized performance, and a strong connection to your brand's identity.",
    services: [
      {
        number: "01",
        title: "Web Design",
        href: "#",
        isActive: true,
      },
      {
        number: "02",
        title: "Responsive web design",
        href: "#",
        isActive: false,
      },
      {
        number: "03",
        title: "UI/UX Design",
        href: "#",
        isActive: true,
      },
      {
        number: "04",
        title: "E-commerce Website Design",
        href: "#",
        isActive: false,
      },
      {
        number: "05",
        title: "Figma Sites Development",
        href: "#",
        isActive: true,
      },
      {
        number: "06",
        title: "CMS Integration",
        href: "#",
        isActive: false,
      },
    ],
    badgeImageUrl: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/67a0fbbe15bf58f5b51affcf_Frame 1618871790 (5).avif",
    badgeImageAlt: "",
  },
  {
    id: "mobile-app-design",
    slug: "mobile-app-design",
    href: "#",
    imageUrl: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68240027a9f0d409445a11e3_service thumb_Mobile Apps.avif",
    imageAlt: "Mobile App Design",
    imageVariant: "md:w-auto",
    title: "Mobile App Design",
    description: "We design mobile experiences that are simple to use and visually appealing. Our design ensures smoother performance and maximum value for users on every device.",
    services: [
      {
        number: "01",
        title: "Mobile App Design",
        href: "#",
        isActive: true,
      },
      {
        number: "02",
        title: "App Concept & Strategy",
        href: "#",
        isActive: false,
      },
      {
        number: "03",
        title: "UI/UX Design for Mobile",
        href: "#",
        isActive: false,
      },
      {
        number: "04",
        title: "Interaction Design for Mobile",
        href: "#",
        isActive: false,
      },
      {
        number: "05",
        title: "Mobile Prototyping & Testing",
        href: "#",
        isActive: false,
      },
      {
        number: "06",
        title: "Responsive Design for All Devices",
        href: "#",
        isActive: false,
      },
      {
        number: "07",
        title: "App Screenshot Service",
        href: "#",
        isActive: true,
      },
    ],
    badgeImageUrl: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/67a0fbfc31e99d9f49a5edbe_Frame 1618871790.avif",
    badgeImageAlt: "",
  },
  {
    id: "webflow-design",
    slug: "webflow-design",
    href: "#",
    imageUrl: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6824004a5d9db30ec9eb58df_service thumb_Webflow.avif",
    imageAlt: "Webflow Design",
    imageVariant: "md:w-auto",
    title: "Webflow Design",
    description: "Build custom and responsive websites with our webflow design. We create designs that are visually aesthetic, easy to manage, and optimized for performance for a seamless user experience.",
    services: [
      {
        number: "01",
        title: "Webflow Design",
        href: "#",
        isActive: true,
      },
      {
        number: "02",
        title: "Webflow CMS Integration",
        href: "#",
        isActive: false,
      },
      {
        number: "03",
        title: "Responsive web design",
        href: "#",
        isActive: false,
      },
      {
        number: "04",
        title: "E-commerce Webflow Development",
        href: "#",
        isActive: false,
      },
      {
        number: "05",
        title: "Webflow Maintenance & Support",
        href: "#",
        isActive: false,
      },
      {
        number: "06",
        title: "Wix to Webflow migration",
        href: "#",
        isActive: true,
      },
      {
        number: "07",
        title: "WordPress to Webflow CMS",
        href: "#",
        isActive: true,
      },
    ],
    badgeImageUrl: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/67a0fbfc31e99d9f49a5edbe_Frame 1618871790.avif",
    badgeImageAlt: "",
  },
  {
    id: "framer-design",
    slug: "framer-design",
    href: "#",
    imageUrl: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6824006cffce5b1210eca6db_service thumb_Framer Design.avif",
    imageAlt: "Framer Design",
    imageVariant: "md:w-auto",
    title: "Framer Design",
    description: "At Prozesy Media, we create interactive, high-performance websites using Framer. We combine minimalist design with dynamic functionality to bring your ideas to life with speed and precision.",
    services: [
      {
        number: "01",
        title: "Framer Design",
        href: "#",
        isActive: true,
      },
      {
        number: "02",
        title: "Interactive Web Design",
        href: "#",
        isActive: false,
      },
      {
        number: "03",
        title: "Framer Prototyping",
        href: "#",
        isActive: false,
      },
      {
        number: "04",
        title: "Dynamic Content Integration",
        href: "#",
        isActive: false,
      },
      {
        number: "05",
        title: "Framer E-commerce Solutions",
        href: "#",
        isActive: false,
      },
      {
        number: "06",
        title: "WordPress to Framer CMS",
        href: "#",
        isActive: true,
      },
    ],
    badgeImageUrl: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/67a100fe2e2ec1fb265444e3_Frame 1618871791 (2).avif",
    badgeImageAlt: "",
  },
  {
    id: "saas-design",
    slug: "saas-design",
    href: "#",
    imageUrl: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/682400573cb8875edacdb864_service thumb_SaaS.avif",
    imageAlt: "SaaS Design",
    imageVariant: "md:w-auto",
    title: "SaaS Design",
    description: "We focus on designing user-friendly and high-performing SaaS products that streamline workflows and enhance user satisfaction. We ensure a smooth journey from start to finish.",
    services: [
      {
        number: "01",
        title: "SaaS Design",
        href: "#",
        isActive: true,
      },
      {
        number: "02",
        title: "SaaS Product Strategy",
        href: "#",
        isActive: false,
      },
      {
        number: "03",
        title: "UI/UX Design for SaaS",
        href: "#",
        isActive: false,
      },
      {
        number: "04",
        title: "Dashboard & Admin Panel Design",
        href: "#",
        isActive: false,
      },
      {
        number: "05",
        title: "Usability Testing & Optimization",
        href: "#",
        isActive: false,
      },
      {
        number: "06",
        title: "Onboarding Experience Design",
        href: "#",
        isActive: false,
      },
    ],
    badgeImageUrl: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/67a0fbfc31e99d9f49a5edbe_Frame 1618871790.avif",
    badgeImageAlt: "",
  },
  {
    id: "ai-product-design",
    slug: "ai-product-design",
    href: "#",
    imageUrl: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68240060fd4fbda908608f2d_service thumb_AI PD.avif",
    imageAlt: "AI Product Design",
    imageVariant: "md:w-auto",
    title: "AI Product Design",
    description: "Designing intuitive AI-driven products is one of our sweet spots. Our AI product designs integrate with user needs to enhance decision-making and provide valuable insights for a smarter experience.",
    services: [
      {
        number: "01",
        title: "AI Product Design",
        href: "#",
        isActive: true,
      },
      {
        number: "02",
        title: "AI Product Strategy",
        href: "#",
        isActive: false,
      },
      {
        number: "03",
        title: "Machine Learning Integration",
        href: "#",
        isActive: false,
      },
      {
        number: "04",
        title: "User Research for AI Solutions",
        href: "#",
        isActive: false,
      },
      {
        number: "05",
        title: "AI Interface Design",
        href: "#",
        isActive: false,
      },
      {
        number: "06",
        title: "Data Visualization & Dashboards",
        href: "#",
        isActive: false,
      },
    ],
    badgeImageUrl: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/67a0fbfc31e99d9f49a5edbe_Frame 1618871790.avif",
    badgeImageAlt: "",
  },
  {
    id: "game-ui-ux",
    slug: "game-ui-ux",
    href: "#",
    imageUrl: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6824007c1993e8f3ec67480d_service thumb_Game UI.avif",
    imageAlt: "Game UI/UX",
    imageVariant: "md:w-auto",
    title: "Game UI/UX",
    description: "We create intuitive and engaging game interfaces that enhance gameplay experiences. Our focus is on optimizing game functions, dashboards, and in-game interactions to ensure smooth user experiences.",
    services: [
      {
        number: "01",
        title: "Game UI/UX",
        href: "#",
        isActive: true,
      },
      {
        number: "02",
        title: "In-Game Dashboard Design",
        href: "#",
        isActive: false,
      },
      {
        number: "03",
        title: "Game Functionality Optimization",
        href: "#",
        isActive: false,
      },
      {
        number: "04",
        title: "Player Onboarding Design",
        href: "#",
        isActive: false,
      },
    ],
    badgeImageUrl: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/67a0f15d255fb3b52afb2a06_Frame 1618871791.avif",
    badgeImageAlt: "",
  },
  {
    id: "shopify-design",
    slug: "shopify-design",
    href: "#",
    imageUrl: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6824003b37e7dd18f6e7abdd_service thumb_Shopify design.avif",
    imageAlt: "Shopify Design",
    imageVariant: "md:object-fill md:w-auto",
    title: "Shopify Design",
    description: "Designing powerful and user-friendly e-commerce stores on Shopify and Shopify Plus that drive conversions. We make it happen with eye-catching design and top-notch UX.",
    services: [
      {
        number: "01",
        title: "Shopify Design",
        href: "#",
        isActive: true,
      },
      {
        number: "02",
        title: "Shopify Plus Store Setup",
        href: "#",
        isActive: false,
      },
      {
        number: "03",
        title: "Mobile-Optimized Design",
        href: "#",
        isActive: false,
      },
      {
        number: "04",
        title: "Shopify Store Customization",
        href: "#",
        isActive: false,
      },
      {
        number: "05",
        title: "Payment Gateway Integration",
        href: "#",
        isActive: false,
      },
    ],
    badgeImageUrl: "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/67a0fbfc31e99d9f49a5edbe_Frame 1618871790.avif",
    badgeImageAlt: "",
  },
];
