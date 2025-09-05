export type PortfolioItem = {
  id: number
  title: string
  category: string
  description: string
  image: string
  technologies: string[]
  color: string
  links: {
    demo: string
    github: string
  }
  status: string
  featured?: boolean
  photo?: string
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 6,
    title: "Website for an electric company",
    category: "Web Development",
    description: "Property listing and management",
    image: "project-6",
    technologies: ["Next.js", "TypeScript", "Prisma"],
    color: "from-teal-500 to-green-500",
    links: {
      demo: "https://effi-tech.net/",
      github: "#",
    },
    status: "completed",
    featured: true,
    photo: "/electric-company.png",
  },
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "Modern e-commerce solution",
    image: "project-1",
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
    image: "project-2",
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
    image: "project-3",
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
    image: "project-4",
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
    image: "project-5",
    technologies: ["Flutter", "Node.js", "PostgreSQL"],
    color: "from-indigo-500 to-blue-500",
    links: {
      demo: "https://example.com",
      github: "https://github.com/username/project",
    },
    status: "completed",
  },
]

export const portfolioCategories = ["All", "Web Dev", "Mobile", "Design"]
