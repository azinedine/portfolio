export type PortfolioItem = {
  id: number
  title: string
  category: string
  description: string
  photos: string[]
  technologies: string[]
  color: string
  links: {
    demo: string
    github: string
  }
  status: string
  featured?: boolean
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 6,
    title: "EFFI Tech Website",
    category: "Web Development",
    description: "High-performance industrial systems and engineering services designed to optimize energy efficiency, extend equipment lifespan, and ensure reliable operation across diverse industrial sectors.",
    photos: [
      "/electric-company.png",
      "/electric-company-2.png",       // new photo, use your actual filenames/paths
      "/electric-company-3.png"
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
    description: "DIASPO is a mobile application that allows users to manage their business expenses and income.",
    photos: [
      "/diaspo-2.png",
      "/diaspo-1.png",
      "/diaspo-3.png",
 
    ],
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
    description: "Vendor and customer dashboard for an e-commerce platform, with features like order management, product management, and customer management.",
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
    title: "Restaurant Website",
    category: "UI/UX Design",
    description: "Beautiful restaurant website",
    photos: [
      "/project-3-desktop.png",
      "/project-3-mobile.png"
    ],
    technologies: ["Next.js", "Tailwind"],
    color: "from-orange-500 to-red-500",
    links: {
      demo: "https://example.com",
      github: "https://github.com/username/project",
    },
    status: "completed",
  },
  {
    id: 4,
    title: "SaaS Dashboard",
    category: "Web Development",
    description: "Analytics dashboard",
    photos: [
      "/project-4-dashboard.png"
    ],
    technologies: ["Vue.js", "Laravel"],
    color: "from-purple-500 to-pink-500",
    links: {
      demo: "https://example.com",
      github: "https://github.com/username/project",
    },
    status: "completed",
  },
  {
    id: 5,
    title: "Travel Booking App",
    category: "Mobile App",
    description: "Complete travel booking platform",
    photos: [
      "/project-5-main.png",
      "/project-5-bookings.png"
    ],
    technologies: ["Flutter", "Node.js", "PostgreSQL"],
    color: "from-indigo-500 to-blue-500",
    links: {
      demo: "https://example.com",
      github: "https://github.com/username/project",
    },
    status: "completed",
  },
]

export const portfolioCategories = ["All", "Web Development", "Mobile App", "UI/UX Design"]
