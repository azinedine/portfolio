export type PortfolioItem = {
  id: number;
  title: string;
  category: string;
  description: string;
  photos: string[];
  technologies: string[];
  color: string;
  links: {
    demo: string;
    github: string;
  };
  status: string;
  featured?: boolean;
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: 6,
    title: "EFFI Tech Website",
    category: "Web Development",
    description:
      "High-performance industrial systems and engineering services designed to optimize energy efficiency, extend equipment lifespan, and ensure reliable operation across diverse industrial sectors.",
    photos: [
      "/electric-company.png",
      "/electric-company-2.png", // new photo, use your actual filenames/paths
      "/electric-company-3.png",
    ],
    technologies: ["Next.js", "TypeScript", "Prisma"],
    color: "from-teal-500 to-green-500",
    links: {
      demo: "https://effi-tech.net/",
      github: "https://github.com/Braivexa-agency/effitech",
    },
    status: "completed",
    featured: true,
  },
  {
    id: 1,
    title: "DIASPO Application",
    category: "Mobile App",
    description:
      "DIASPO is a mobile application that allows users to manage their business expenses and income.",
    photos: ["/diaspo-2.png", "/diaspo-1.png", "/diaspo-3.png"],
    technologies: ["React Native", "Laravel", "PostgreSQL"],
    color: "from-blue-500 to-cyan-500",
    links: {
      demo: "https://diaspo.io",
      github: "https://github.com/username/project",
    },
    status: "completed",
  },
  {
    id: 2,
    title: "Dashboard for an e-commerce platform",
    category: "Web Development",
    description:
      "Vendor and customer dashboard for an e-commerce platform, with features like order management, product management, and customer management.",
    photos: [
      "/e-commerce-dashboard-1.png",
      "/e-commerce-dashboard-2.png",
      "/e-commerce-dashboard-3.png",
      "/e-commerce-dashboard-4.png",
      "/e-commerce-dashboard-5.png",
      "/e-commerce-dashboard-6.png",
      "/e-commerce-dashboard-7.png",
    ],
    technologies: ["React", "Laravel", "SQLite"],
    color: "from-green-500 to-emerald-500",
    links: {
      demo: "https://e-commerce-dashboard.com",
      github: "https://github.com/username/project",
    },
    status: "completed",
  },
  {
    id: 3,
    title: "Taki dashboard",
    category: "Web Development",
    description:
      "Taki dashboard is a dashboard for a platform that allows users to manage their business expenses and income.",
    photos: [
      "/taki-dashboard-1.png",
      "/taki-dashboard-2.png",
      "/taki-dashboard-3.png",
      "/taki-dashboard-4.png",
    ],
    technologies: ["Vue.js", "Laravel", "SQLite"],
    color: "from-orange-500 to-red-500",
    links: {
      demo: "https://taqqee.com",
      github: "https://github.com/username/project",
    },
    status: "completed",
  },
  {
    id: 8,
    title: "Mushaf Al Djazair App",
    category: "Mobile App",
    description:
      "Mushaf Al Djazair App is a mobile app that allows users to read the Quran and listen to the recitation, it also allows users to search for surahs and verses,and more.",
    photos: [
      "/mushaf-al-djazair-app-1.png",
      "/mushaf-al-djazair-app-2.png",
      "/mushaf-al-djazair-app-3.png",
      "/mushaf-al-djazair-app-4.png",
    ],
    technologies: ["React Native", "Laravel"],
    color: "from-indigo-500 to-blue-500",
    links: {
      demo: "https://example.com",
      github: "https://github.com/username/project",
    },
    status: "completed",
  },
  {
    id: 5,
    title: "Nice WIndow UI/UX Design",
    category: "UI/UX Design",
    description:
      "Nice Window UI/UX Design is a design system that allows users to manage their business expenses and income.",
    photos: [
      "/nice-window-1.png",
      "/nice-window-2.png",
      "/nice-window-3.png",
      "/nice-window-4.png",
      "/nice-window-5.png",
    ],
    technologies: ["Figma", "Adobe Creative Suite", "Design System", "Prototyping"],
    color: "from-indigo-500 to-blue-500",
    links: {
      demo: "https://example.com",
      github: "https://github.com/username/project",
    },
    status: "completed",
  },
  {
    id: 4,
    title: "Taki Mobile App",
    category: "Web Development",
    description:
      "Taki mobile app is a mobile app that allows users to manage their business expenses and income.",
    photos: [
      "/taki-mobile-app-1.png",
      "/taki-mobile-app-2.png",
      "/taki-mobile-app-3.png",
      "/taki-mobile-app-4.png",
      "/taki-mobile-app-5.png",
      "/taki-mobile-app-6.png",
      "/taki-mobile-app-7.png",
    ],
    technologies: ["React Native", "Laravel"],
    color: "from-purple-500 to-pink-500",
    links: {
      demo: "https://example.com",
      github: "https://github.com/username/project",
    },
    status: "completed",
  },

 
];

export const portfolioCategories = [
  "All",
  "Web Development",
  "Mobile App",
  "UI/UX Design",
];
