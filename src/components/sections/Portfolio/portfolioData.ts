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
    title: "Website for an electric company",
    category: "Web Development",
    description: "Property listing and management",
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
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "Modern e-commerce solution",
    photos: [
      "/project-1-main.png",
      "/project-1-checkout.png"
    ],
    technologies: ["React", "Node.js", "MongoDB"],
    color: "from-blue-500 to-cyan-500",
    links: {
      demo: "https://example.com",
      github: "https://github.com/username/project",
    },
    status: "completed",
  },
  {
    id: 2,
    title: "Mobile Banking App",
    category: "Mobile App",
    description: "Secure banking application",
    photos: [
      "/project-2-main.png"
    ],
    technologies: ["React Native", "Firebase"],
    color: "from-green-500 to-emerald-500",
    links: {
      demo: "https://example.com",
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
